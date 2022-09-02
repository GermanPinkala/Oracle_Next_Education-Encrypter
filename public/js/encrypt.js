


function encryptText(text) {


    let modifiedText = "";


    for (let index = 0; index < text.length; index++) {

        let letter = text[index];

        switch (letter) {
            case 'a': modifiedText += 'ai';
                break;
            case 'e': modifiedText += 'enter';
                break;
            case 'i': modifiedText += 'imes';
                break;
            case 'o': modifiedText += 'ober';
                break;
            case 'u': modifiedText += 'ufat';
                break;
            default: modifiedText += letter;
                break;
        }

    }

    return modifiedText;

}

function decryptText(text) {

    let modifiedText = "";


    for (let index = 0; index < text.length; index++) {

        let letter = text[index];

        switch (letter) {
            case 'a':
                modifiedText += letter;
                if (text.substring(index, index + 2) == 'ai') {
                    index += 1;
                }
                break;
            case 'e':
                modifiedText += letter;
                if (text.substring(index, index + 5) == 'enter') {
                    index += 4;
                }
                break;
            case 'i':
                modifiedText += letter;
                if (text.substring(index, index + 4) == 'imes') {
                    index += 3;
                }
                break;
            case 'o':
                modifiedText += letter;
                if (text.substring(index, index + 4) == 'ober') {
                    index += 3;
                }
                break;
            case 'u':
                modifiedText += letter;
                if (text.substring(index, index + 4) == 'ufat') {
                    index += 3;
                }
                break;
            default: modifiedText += letter;
                break;
        }
    }
    return modifiedText;
}



const initialText = document.getElementById("initial-text")
const finalText = document.getElementById("final-text")

const copyButton = document.getElementById("button-copy");

function btnEncryptText() {
    const encryptedText = encryptText(initialText.value);
    
    finalText.value = encryptedText;
    if (finalText.value != "") {
        document.getElementById("final-text-elements").style.visibility = "hidden";
        copyButton.disabled = false;
    }else{
        document.getElementById("final-text-elements").style.visibility = "visible";
        copyButton.disabled = true;
    }
}

function btnDecrypt() {
    const decryptedText = decryptText(initialText.value);
    finalText.value = decryptedText;
    if (finalText.value != "") {
        document.getElementById("final-text-elements").style.visibility = "hidden";
        copyButton.disabled = false;
    }else{
        document.getElementById("final-text-elements").style.visibility = "visible";
        copyButton.disabled = true;
    }
} 

function btnCopy() {

    const content = document.getElementById('final-text').value;

    navigator.clipboard.writeText(content)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Error in copying text: ', err);
        });
    alert('¡copiado!')
}


document.getElementById("initial-text").addEventListener("keypress", verificar);
function verificar(e) {

    if (e.key.match(/[a-z0-9ñç\s]/i) === null) {
        e.preventDefault();
    }

}


