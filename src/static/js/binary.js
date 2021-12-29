const btn = document.getElementById('bin-btn');

btn.addEventListener('click', () => {
    const text = document.getElementById('text').value;
    const binary = document.getElementById('binary');

    binary.innerText = textToBinary(text);

});

const textToBinary = (text = '') => {
    let result = '';
    result = text.split('').map(char => {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
    return result;
}