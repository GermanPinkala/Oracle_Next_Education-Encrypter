initialText = new String;
function encryptText(initialText) {
    let finalText = new String;
    for (let index = 0; index < initialText.length; index++) {

        let letter = initialText[index];

        switch (letter) {
            case 'a': finalText.concat('ai');
                break;                
            case 'e': finalText.concat('enter');
                break;
            case 'i': finalText.concat('imes');
                break;
            case 'o': finalText.concat('ober');
                break;
            case 'u': finalText.concat('ufat');
                break;
            default: finalText.concat(letter);
                break;
        }
    }

    return finalText;
}

function decrypt(initialText) {

    let finalText = new String;

    for (let index = 0; index < initialText.length; index++) {

        let letter = initialText[index];

        switch (letter) {
            case 'a':
                finalText.concat(letter);
                if (initialText.substring(index, index + 1) == 'ai') {
                    index = index + 1;
                }
                break;
            case 'e':
                finalText.concat(letter);
                if (initialText.substring(index, index + 4) == 'enter') {
                    index = index + 4;
                }
                break;
            case 'i':
                finalText.concat(letter);
                if (initialText.substring(index, index + 3) == 'imes') {
                    index = index + 3;
                }
                break;
            case 'o':
                finalText.concat(letter);
                if (initialText.substring(index, index + 3) == 'ober') {
                    index = index + 3;
                } finalText.concat('ober');
                break;
            case 'u':
                finalText.concat(letter);
                if (initialText.substring(index, index + 3) == 'ufat') {
                    index = index + 3;
                } finalText.concat('ufat');
                break;

            default: finalText.concat(letter);
                break;
        }
    }

    return finalText;l
}