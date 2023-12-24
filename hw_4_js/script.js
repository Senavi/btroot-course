document.addEventListener('DOMContentLoaded', () => {
    const lights = document.querySelectorAll('.light');
    let currentLight = 0;

    function changeLight() {
        lights[currentLight].style.backgroundColor = '#111'; // Згасити поточний колір
        currentLight = (currentLight + 1) % lights.length; // Перейти до наступного кольору
        lights[currentLight].style.backgroundColor = currentLight === 0 ? 'red' : currentLight === 1 ? 'yellow' : 'green';
    }

    const button = document.getElementById('changeButton');
    button.addEventListener('click', changeLight);
});


document.addEventListener('DOMContentLoaded', () => {
    const resizer = document.getElementById('resizer');
    const resizeable = document.getElementById('resizeable');
    let isResizing = false;

    resizer.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isResizing = true;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', stopResize);
    });

    function handleMouseMove(e) {
        if (isResizing) {
            const dx = e.movementX;
            const dy = e.movementY;
            const newWidth = resizeable.offsetWidth + dx;
            const newHeight = resizeable.offsetHeight + dy;
            resizeable.style.width = newWidth + 'px';
            resizeable.style.height = newHeight + 'px';
        }
    }

    function stopResize() {
        isResizing = false;
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', stopResize);
    }
});
