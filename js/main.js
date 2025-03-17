function calcular(tipo, valor) {
    // Função executada a cada clique
    const resultado = document.querySelector('#resultado');

    // Se o clique for do tipo ação...
    if (tipo === 'acao') {
        if (valor === 'c') {
            resultado.value = ''; // Limpar a tela
        }

        // Adicionar operações
        if (['+', '-', '*', '/', '.'].includes(valor)) {
            resultado.value += valor;
        }

        // Calcular o resultado quando clicar no "="
        if (valor === '=') {
            try {
                // Tentar calcular o valor e verificar se há erros
                resultado.value = eval(resultado.value);
            } catch (e) {
                resultado.value = 'Erro'; // Em caso de erro
            }
        }
    }
    // Se o clique for do tipo valor (números), adicionar o valor no campo resultado
    else if (tipo === 'valor') {
        resultado.value += valor;
    }
}
