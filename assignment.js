const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursorDot.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});