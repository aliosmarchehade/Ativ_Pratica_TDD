class ValidadorSenha {
    static validar(senha) {
        const MIN_LENGTH = 8;
        const possuiTamanhoMinimo = senha.length >= MIN_LENGTH;
        const possuiMaiuscula = /[A-Z]/.test(senha);
        
        return possuiTamanhoMinimo && possuiMaiuscula;
    }
}

module.exports = ValidadorSenha;