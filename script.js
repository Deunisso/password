document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    const validCodes = ['tay', 'tayara'];
    const resultDiv = document.getElementById('result');

    if (validCodes.includes(userInput)) {
        resultDiv.textContent = '823';
    } else {
        resultDiv.textContent = 'Código incorreto!';
    }
});
