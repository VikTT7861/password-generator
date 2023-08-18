document.addEventListener('DOMContentLoaded', function() {
    const btnConvert = document.getElementById('btn-convert');
    const inputTextarea = document.getElementById('sha384-input');
    const convertedTextarea = document.getElementById('sha384-converted');

    btnConvert.addEventListener('click', async function() {
        const inputText = inputTextarea.value;
        const convertedText = await sha384Encode(inputText);
        convertedTextarea.value = convertedText;

        copyToClipboard(convertedText);

        btnConvert.classList.add('success-button');
        btnConvert.disabled = true;
        btnConvert.innerHTML = '<i class="fa fa-check-circle"></i> Copied';

        setTimeout(() => {
            btnConvert.classList.remove('success-button');
            btnConvert.disabled = false;
            btnConvert.innerHTML = '<i class="fa fa-code"></i> Convert';
        }, 2000);
    });

    async function sha384Encode(input) {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);

        const hashBuffer = await crypto.subtle.digest('SHA-384', data);
        return hexFromBuffer(hashBuffer);
    }

    function hexFromBuffer(buffer) {
        const hashArray = Array.from(new Uint8Array(buffer));
        return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    }

    function copyToClipboard(text) {
        const tempInput = document.createElement('textarea');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    }
});