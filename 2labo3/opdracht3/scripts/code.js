const setup = () => {
    let buttons = document.getElementsByTagName('button')
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            buttons[i].classList.toggle('active')
        }); // door toggle gaat het aan en uit.
    }
}
window.addEventListener("load", setup);