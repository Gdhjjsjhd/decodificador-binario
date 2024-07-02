function translateBinary(){
    const input = document.getElementById('text-input').value;

    let binary = '';

    for (let i = 0; i < input.lenght; i++){
        const charCode = input.charCodeAt(i);
        const binaryCode = charCode.toString(2);

        binary += binaryCode.padStart(8, "0") + " "
    }

    document.getElementById('output').value = binary.trim();
}

console.log('oi');

function translateToText(){
    const input = document.getElementById('output').value;

    const binaryArray = input.trim().split(/\s+/);

    let text = '';

    for (let i = 0; i < binaryArray.lenght; i++){
        const binaryCode = binaryArray[i];
        const charCode = parseInt(binaryCode, 2);
        const character = String.fromCharCode(charCode);

        text += character
    }
    document.getElementById('text-input').value = text;

}