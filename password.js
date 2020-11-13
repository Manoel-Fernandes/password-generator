export class Password {
    constructor(_type, _size){
        this.type = _type;
        this.size = _size;
    }

    generate() {
        return Generator(this.type, this.size);
    }
}

let lowerCase = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

let upperCase = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

let numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

let specialCharacters = [
    '!', '@', '#', '$', '%', '&', '*', '(', ')', '+', '-', '_', '¨', '´', '`',
    'â', 'Â', 'à', 'À', 'á', 'Á', 'ã', 'Ã', 'ä', 'Ä', 'ê', 'Ê', 'è', 'È', 'é',
    'É', 'ë', 'Ë', '/', '|', '<', '>', ':', '.', ';', '{', '}', '[', ']', 'ç',
    'Ç', '°', 'ª', 'î', 'Î', 'ì', 'Ì', 'í', 'Í', 'ï', 'Ï', 'ô', 'Ô', 'ò', 'Ò',
    'ó', 'Ó', 'ö', 'Ö', 'û', 'Û', 'ù', 'Ù', 'ú', 'Ú', 'ü', 'Ü'
];

function Generator(type, size){
    "use strict";

    let password = "";
    
    if(type == "number") {
        password = ChooseNumbers(size);
    } else if(type == "alphanumeric") {
        password = ChooseAlphanumeric(size);
    } else {
        password = "Error: wrong property type, only \"number\" and \"alphanumeric\" are accept.";
    }

    if(size <= 0){
        return "Error: have you ever saw a password with a length <= 0, asshole?";
    }
    
    return password;

}

function ChooseNumbers(size) {
    "use strict";

    let generatedNumbers = "";
    let fixNumbers = numbers.length-1;
    for(let i = 0; i < size; i++) {
        generatedNumbers += numbers[(Math.random()*fixNumbers).toFixed(0)];
    }
    return generatedNumbers;
}

function ChooseAlphanumeric(size) {
    "use strict";

    let generatedAlphanumeric = "";
    let character;
    let fixLowerCase = lowerCase.length-1;
    let fixUpperCase = upperCase.length-1;
    let fixNumbers = numbers.length-1;
    let fixSpecialCharacters = specialCharacters.length-1;

    for(let i = 0; i < size; i++) {
        character = (Math.random()*3).toFixed(0);
        if(character == 0) {
            generatedAlphanumeric += lowerCase[(Math.random()*fixLowerCase).toFixed(0)];
        } else if(character == 1) {
            generatedAlphanumeric += upperCase[(Math.random()*fixUpperCase).toFixed(0)];
        } else if(character == 2) {
            generatedAlphanumeric += numbers[(Math.random()*fixNumbers).toFixed(0)];
        } else {
            generatedAlphanumeric += specialCharacters[(Math.random()*fixSpecialCharacters).toFixed(0)];
        }
    }

    return generatedAlphanumeric;
}