class ValidadorSenha {
    static validar(senha) {
        return senha.length >= 8;
    }
}

module.exports = ValidadorSenha;