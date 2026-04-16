class ValidadorSenha {
    static validar(senha) {
        const MIN_LENGTH = 8;
        const possuiTamanhoMinimo = senha.length >= MIN_LENGTH;
        return possuiTamanhoMinimo;
    }
}

module.exports = ValidadorSenha;