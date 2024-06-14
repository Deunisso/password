const correctKeys = ["Tay", "tay", "Tayara", "tayara"]; // Lista de palavras corretas
const correctNumber = 3; // O número a ser exibido se a palavra estiver correta

function checkWord() {
    const userInput = document.getElementById('wordInput').value.trim().toLowerCase(); // Obtém a entrada do usuário, remove espaços extras e converte para minúsculas
    const resultElement = document.getElementById('result');
    
    // Verifica se a entrada do usuário contém pelo menos uma das palavras corretas
    const containsCorrectWord = correctKeys.some(word => userInput.includes(word.toLowerCase()));

    if (containsCorrectWord) {
        resultElement.textContent = `Parabéns! O número é: ${correctNumber}`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Palavra incorreta. Tente novamente.';
        resultElement.style.color = 'red';
    }
}
