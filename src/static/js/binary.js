const split = document.getElementById('btn-split');
const oneline = document.getElementById('btn-oneline');

split.addEventListener('click', () => {
    const input = document.getElementById('bin-input').value;
    const converted = document.getElementById('bin-converted');

    converted.innerText = textToBinarySplit(input);

});

oneline.addEventListener('click', () => {
    const input = document.getElementById('bin-input').value;
    const converted = document.getElementById('bin-converted');

    converted.innerText = textToBinaryOneline(input);

});

const textToBinarySplit = (input = '') => {
    let result = '';
    result = input.split('').map(char => {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
    return result;
}

const textToBinaryOneline = (input = '') => {
    let result = '';
    result = input.split('').map(char => {
        return char.charCodeAt(0).toString(2);
    }).join('');
    return result;
}