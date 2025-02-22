const setup = () => {
    let familie = ["bob", "marie", "ann", "famke", "lila"];

    console.log("Aantal elementen in de array: " + familie.length);

    for(let i = 0; i<familie.length; i=i+2){
        console.log("familielid op plaats: " + (i+1) + " " + familie[i]);
    }


    function VoegNaamToe(arr){
        var nieuwenaam = prompt("geef een nieuw familielid");
        arr.push(nieuwenaam);
    }
    VoegNaamToe(familie);
    console.log(familie);

    let message = familie.join(" - ");
    console.log("Array: " + message);

}

window.addEventListener("load", setup);