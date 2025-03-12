const setup = () => {

    let belangrijkeElementen = document.getElementsByClassName("belangrijk");

    for (let elementen of belangrijkeElementen) {
        elementen.className +=" opvallend";
    }
}
window.addEventListener("load", setup);