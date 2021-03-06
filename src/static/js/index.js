/* Adding functions for the options to choose. */
const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getRandomNumber = () => {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const getRandomSymbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

/* Creating objects for better use */
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

/* Start coding functionality to generate button */
const generate = document.getElementById('generateBtn');
generate.addEventListener('click', () => {
    const length = document.getElementById('Passwordlength').value;
    const hasUpper = document.getElementById('uppercase').checked;
    const hasLower = document.getElementById('lowercase').checked;
    const hasNumber = document.getElementById('numbers').checked;
    const hasSymbol = document.getElementById('symbols').checked;
    const result = document.getElementById('PasswordResult');

    result.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

/* Creating the password function */
const generatePassword = (lower, upper, number, symbol, length) => {
    let generatePassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]);

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach((type) => {
            const funcName = Object.keys(type)[0];
            generatePassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatePassword.slice(0, length);
    return finalPassword;
}

/* Creating the copy to clipboard function */
let button = document.getElementById('clipboardBtn');
button.addEventListener('click', e => {
    e.preventDefault();
    document.execCommand('copy', false, document.getElementById('PasswordResult').select());
});