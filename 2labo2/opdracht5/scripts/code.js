const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", kopieer);
}
const kopieer = () =>{
    let txt = document.getElementById("tekst");
    let value = txt.value;
    let p = document.getElementById("txtOutput");
    p.innerText = value
}
window.addEventListener("load", setup);