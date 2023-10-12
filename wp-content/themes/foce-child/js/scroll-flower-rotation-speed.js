// Acclérer la rotation des fleurs lors du défilement

const root = document.querySelector(':root');
window.addEventListener('scroll', () => {
    root.style.setProperty('--speed', '3s');
})
window.addEventListener('scrollend', () => {
    root.style.setProperty('--speed', '20s');
})

