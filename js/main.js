function calcular(tipo, valor) {
    // função execultada a cada click
    // se o click for do tipo acao..
    if (tipo === 'acao') {

        if (valor === 'c') {
            document.querySelector('#resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.querySelector('#resultado').value += valor
        }

        if (valor === '=') {
            // se o click for o botao igual, pegue todo os valores que tem no campo resultado
            // guarne na variavel valorCampo e faça o eval
            // eval, é um comando nativo da linguagem js, no qual pega o a string e tranforma em uma operaçao js
            // nesse caso transformou em operação matematica
            var valorCampo = eval(document.querySelector('#resultado').value)

            // mostra na tela o resultado da operaçção
            document.querySelector('#resultado').value = valorCampo

        }

        // se o click nao for do tipo acao.. mas for tipo valor, adicione o valor no campo resultado
    } else if (tipo === 'valor') {
        document.querySelector('#resultado').value += valor
    }
}
