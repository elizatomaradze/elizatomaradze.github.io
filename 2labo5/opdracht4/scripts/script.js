const valideer = () => {
    let geldig = true;

    const toonFout = (id, boodschap) => {
        document.getElementById(id).innerText = boodschap;
        document.getElementById(id.replace('error', '')).classList.add("error");
        geldig = false;
    };

    const verwijderFout = (id) => {
        document.getElementById(id).innerText = "";
        document.getElementById(id.replace('error', '')).classList.remove("error");
    };

    let voornaam = document.getElementById("voornaam").value.trim();
    if (voornaam.length > 30) {
        toonFout("errorVoornaam", "Max. 30 karakters");
    } else {
        verwijderFout("errorVoornaam");
    }

    let familienaam = document.getElementById("familienaam").value.trim();
    if (familienaam === "") {
        toonFout("errorFamilienaam", "Verplicht veld");
    } else if (familienaam.length > 50) {
        toonFout("errorFamilienaam", "Max. 50 karakters");
    } else {
        verwijderFout("errorFamilienaam");
    }

    let geboortedatum = document.getElementById("geboortedatum").value.trim();
    let regexDatum = /^\d{4}-\d{2}-\d{2}$/;
    if (geboortedatum === "") {
        toonFout("errorGeboortedatum", "Verplicht veld");
    } else if (!regexDatum.test(geboortedatum)) {
        toonFout("errorGeboortedatum", "Formaat is niet jjjj-mm-dd");
    } else {
        verwijderFout("errorGeboortedatum");
    }

    let email = document.getElementById("email").value.trim();
    let regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        toonFout("errorEmail", "Verplicht veld");
    } else if (!regexEmail.test(email)) {
        toonFout("errorEmail", "Geen geldig e-mailadres");
    } else {
        verwijderFout("errorEmail");
    }

    let aantalKinderen = document.getElementById("aantalKinderen").value.trim();
    if (aantalKinderen === "" || isNaN(aantalKinderen)) {
        toonFout("errorAantalKinderen", "Is geen positief getal");
    } else if (aantalKinderen < 0) {
        toonFout("errorAantalKinderen", "Is geen positief getal");
    } else if (aantalKinderen >= 99) {
        toonFout("errorAantalKinderen", "Is te vruchtbaar");
    } else {
        verwijderFout("errorAantalKinderen");
    }

    if (geldig) {
        alert("Proficiat!");
    }
};

document.getElementById("valideerKnop").addEventListener("click", valideer);
