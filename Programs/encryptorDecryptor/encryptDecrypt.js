function encryptString(string, number) {
    
    let newString = string.toLowerCase();
    let result = '';
    let charcode = 0;

    for (let i = 0; i < string.length; i++){
        charcode = (newString[i].charCodeAt()) + number;
        result += String.fromCharCode(charcode);
    }

    return result;
}

function decryptString(string, number) {

    let newString = string.toLowerCase();
    let result = '';
    let charcode = 0;

    for (let i = 0; i < string.length; i++) {
        charcode = (newString[i].charCodeAt()) - number;
        result += String.fromCharCode(charcode);
    }

    return result;
}

console.log(encryptString("The Wheels on the bus go round", 5));
console.log(decryptString("ymj%|mjjqx%ts%ymj%gzx%lt%wtzsi", 5));

