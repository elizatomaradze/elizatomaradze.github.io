const setup = () => {
    const text = "De man van An geeft geen hand aan ambetante verwanten";
    const sequence = "an";

    let count = 0;
    let pos = text.indexOf(sequence);

    while (pos !== -1) {
        count++;
        pos = text.indexOf(sequence, pos + 1); // Zoek verder vanaf de volgende positie
    }

    console.log("Aantal keer 'an' met indexOf:", count);
}
    window.addEventListener("load", setup);