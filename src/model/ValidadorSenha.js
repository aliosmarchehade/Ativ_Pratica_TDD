class ValidadorSenha {

    static validar(senha) {
        return this.temTamanhoMinimo(senha) &&
               this.temMaiuscula(senha) &&
               this.temMinuscula(senha);
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
}

module.exports = ValidadorSenha;    