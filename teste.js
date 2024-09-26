const fs = require('fs');

function callback(erro) {
    if(erro) {

    } else {
        console.log('Parabéns você conseguiu!');
        

    }

}

class Pessoa {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
    arquivar() {
        const informacao = this.nome +", " + this.cargo;
        fs.appendFile('usuario.txt', informacao, 'utf8', callback );
        
    }
}

let humano = new Pessoa("Marco", "Motorista");
humano.arquivar();
