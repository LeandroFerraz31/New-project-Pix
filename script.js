// Pegar os botões e o campo de busca
const buttons = document.querySelectorAll('.button-group .button');
const filterInput = document.querySelector('.filter-input');
const tableRows = document.querySelectorAll('tbody tr');

// Função para filtrar as linhas da tabela pelo nome da criança
function filterByName() {
    const searchValue = filterInput.value.toLowerCase(); // Pega o texto digitado e transforma em minúsculas

    tableRows.forEach(row => {
        const childName = row.cells[4].textContent.toLowerCase(); // Pega o nome da criança (coluna 5)
        if (childName.includes(searchValue)) {
            row.style.display = ''; // Mostra a linha
        } else {
            row.style.display = 'none'; // Esconde a linha
        }
    });
}

// Função para filtrar as linhas da tabela pelo status
function filterByStatus(status) {
    tableRows.forEach(row => {
        const statusText = row.cells[5].textContent.toLowerCase(); // Pega o texto do status (coluna 6)
        if (status === 'todos' || statusText.includes(status)) {
            row.style.display = ''; // Mostra a linha
        } else {
            row.style.display = 'none'; // Esconde a linha
        }
    });
}

// Adicionar eventos de clique nos botões
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe "active" de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));

        // Adiciona a classe "active" no botão clicado
        button.classList.add('active');

        // Filtra a tabela pelo status do botão clicado
        const status = button.textContent.toLowerCase(); // Pega o texto do botão
        filterByStatus(status);
    });
});

// Selecionar o botão de alternância de modo
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

// Adicionar evento de clique ao botão
toggleDarkModeButton.addEventListener('click', () => {
    // Alternar a classe "dark-mode" no body
    document.body.classList.toggle('dark-mode');

    // Alterar o texto do botão com base no modo atual
    if (document.body.classList.contains('dark-mode')) {
        toggleDarkModeButton.textContent = 'Modo Claro';
    } else {
        toggleDarkModeButton.textContent = 'Modo Escuro';
    }
});

// Adicionar evento de digitação no campo de busca
filterInput.addEventListener('input', filterByName);