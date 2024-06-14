const correctKeys = ["Tay", "tay", "Tayara", "tayara"]; // Lista de palavras corretas
const correctNumber = 3; // O número a ser exibido se a palavra estiver correta

function checkWord() {
    const wordInput = document.getElementById('wordInput').value.trim(); // Obtém a entrada do usuário e remove espaços extras no início e no final
    const resultElement = document.getElementById('result');
    
    // Verifica se a entrada do usuário corresponde a alguma das palavras corretas
    if (correctKeys.includes(wordInput)) {
        resultElement.textContent = `Parabéns! O número é: ${correctNumber}`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Palavra incorreta. Tente novamente.';
        resultElement.style.color = 'red';
    }
}
