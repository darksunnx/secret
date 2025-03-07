// Add console logging for debugging
console.log('Matrix.js loaded successfully');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing matrix effect');
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    // Set canvas size to window size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log('Canvas resized:', canvas.width, 'x', canvas.height);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789@#$%^&*';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to store drop positions
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Drawing the characters
    function draw() {
        // Add semi-transparent black rectangle to create fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set text color and font
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        // Loop over drops
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const char = charArray[Math.floor(Math.random() * charArray.length)];

            // Draw character
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);

            // Reset drop when it reaches bottom or randomly
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Increment drop position
            drops[i]++;
        }
    }

    // Animation loop
    setInterval(draw, 33);
    console.log('Matrix animation started');
});
