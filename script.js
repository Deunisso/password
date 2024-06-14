const correctWord = "tay"; // A palavra correta com 3 letras
const correctNumber = 3; // O número a ser exibido se a palavra estiver correta

function checkWord() {
    const wordInput = document.getElementById('wordInput').value.toLowerCase(); // Convertendo para minúsculas
    const resultElement = document.getElementById('result');
    
    if (wordInput === correctWord.toLowerCase()) { // Convertendo para minúsculas
        resultElement.textContent = `Parabéns! O número é: ${correctNumber}`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Palavra incorreta. Tente novamente.';
        resultElement.style.color = 'red';
    }
}
