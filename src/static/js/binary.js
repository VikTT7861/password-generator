document.addEventListener('DOMContentLoaded', function () {
    const splitButton = document.getElementById('btn-split');
    const onelineButton = document.getElementById('btn-oneline');
    const inputField = document.getElementById('bin-input');
    const convertedField = document.getElementById('bin-converted');

    splitButton.addEventListener('click', () => {
        const input = inputField.value;
        const converted = textToBinarySplit(input);
        convertedField.innerText = converted;
    });

    onelineButton.addEventListener('click', () => {
        const input = inputField.value;
        const converted = textToBinaryOneline(input);
        convertedField.innerText = converted;
    });

    const textToBinarySplit = (input = '') => {
        const result = input.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
        return result;
    };

    const textToBinaryOneline = (input = '') => {
        const result = input.split('').map(char => char.charCodeAt(0).toString(2)).join('');
        return result;
    };

    function copyToClipboard(text) {
        const tempInput = document.createElement('textarea');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    }

    const btnSplit = document.getElementById('btn-split');
    const btnOneline = document.getElementById('btn-oneline');

    btnSplit.addEventListener('click', () => {
        const input = document.getElementById('bin-input').value;
        const converted = textToBinarySplit(input);
        const convertedField = document.getElementById('bin-converted');
        convertedField.innerText = converted;

        copyToClipboard(converted);

        btnSplit.classList.add('success-button');
        btnSplit.disabled = true;
        btnSplit.innerHTML = '<i class="fa fa-check-circle"></i> Copied';

        setTimeout(() => {
            btnSplit.classList.remove('success-button');
            btnSplit.disabled = false;
            btnSplit.innerHTML = '<i class="fa fa-code"></i> Separately';
        }, 2000);
    });

    btnOneline.addEventListener('click', () => {
        const input = document.getElementById('bin-input').value;
        const converted = textToBinaryOneline(input);
        const convertedField = document.getElementById('bin-converted');
        convertedField.innerText = converted;

        copyToClipboard(converted);

        btnOneline.classList.add('success-button');
        btnOneline.disabled = true;
        btnOneline.innerHTML = '<i class="fa fa-check-circle"></i> Copied';

        setTimeout(() => {
            btnOneline.classList.remove('success-button');
            btnOneline.disabled = false;
            btnOneline.innerHTML = '<i class="fa fa-code"></i> One-line';
        }, 2000);
    });
});