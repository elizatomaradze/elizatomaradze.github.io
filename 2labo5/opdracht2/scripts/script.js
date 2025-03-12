const setup = () => {
    let btnResultaat = document.getElementById("btnRes");
    btnResultaat.addEventListener("click", resConsole)
}

const resConsole = () => {
    let roker = document.getElementById("roker").checked ? "is een roker" : "is geen roker";
    let moedertaal = document.querySelector('input[name="moedertaal"]:checked');
    moedertaal = moedertaal? moedertaal.value : "nog niets gekozen";
    let favBuurland = document.getElementById("favBl").value;
    let bestellingen = [];
    document.querySelectorAll("#bestellingen option:checked").forEach(option => {
        bestellingen.push(option.value)

        console.log(roker);
        console.log("Moedertaal is " + moedertaal);
        console.log("Favoriete buurland is " + favBuurland);
        console.log("Bestelling bestaat uit " + bestellingen.join(", "));
    })
}
window.addEventListener("load", setup);