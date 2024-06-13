const correctWord = "tay"; // A palavra correta com 3 letras
const correctNumber = 3; // O número a ser exibido se a palavra estiver correta

function checkWord() {
    const wordInput = document.getElementById('wordInput').value.toLowerCase(); // Converta para minúsculas para comparar de forma não sensível a maiúsculas e minúsculas
    const resultElement = document.getElementById('result');
    
    if (/^[a-zA-Z]+$/.test(wordInput) && wordInput.length === 3) { // Verifica se a entrada contém apenas letras e tem exatamente 3 caracteres
        if (wordInput === correctWord) {
            resultElement.textContent = `Parabéns! O número é: ${correctNumber}`;
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Palavra incorreta. Tente novamente.';
            resultElement.style.color = 'red';
        }
    } else {
        resultElement.textContent = 'Entrada inválida. Por favor, digite exatamente 3 letras.';
        resultElement.style.color = 'red';
    }
}
