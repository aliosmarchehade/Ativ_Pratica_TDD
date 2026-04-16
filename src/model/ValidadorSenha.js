class ValidadorSenha {

    static validar(senha) {
        return this.temTamanhoMinimo(senha) &&
               this.temMaiuscula(senha) &&
               this.temMinuscula(senha) && 
               this.temNumero(senha) &&
               this.temEspecial(senha) &&
               this.naoTemEspaco(senha);
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