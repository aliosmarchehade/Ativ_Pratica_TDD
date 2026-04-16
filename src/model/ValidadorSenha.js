const { msg } = require('../util/msgs');

class ValidadorSenha {

    
    static validar(senha) {

        if (!this.temTamanhoMinimo(senha)) {
            throw new Error(msg.CURTA);
        }

        if (!this.temMaiuscula(senha)) {
            throw new Error(msg.MAIUSCULA);
        }

        if (!this.temMinuscula(senha)) {
            throw new Error(msg.MINUSCULA);
        }

        if (!this.temNumero(senha)) {
            throw new Error(msg.NUMERO);
        }

        if (!this.temEspecial(senha)) {
            throw new Error(msg.ESPECIAL);
        }

        if (!this.naoTemEspaco(senha)) {
            throw new Error(msg.ESPACO);
        }

        return true;
    }
    static temTamanhoMinimo(senha) {
        const MIN_LENGTH = 8;
        return senha.length >= MIN_LENGTH;
    }

    static temMaiuscula(senha) {
        return /[A-Z]/.test(senha);
    }

    static temMinuscula(senha){
        return /[a-z]/.test(senha);
    }

    static temNumero(senha){
        return /[0-9]/.test(senha);
    }

    static temEspecial(senha){
        return /[!@#$%^&*]/.test(senha);
    }
    
    static naoTemEspaco(senha){
        return !/[\s]/.test(senha);
    }
}

module.exports = ValidadorSenha;    