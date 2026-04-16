const ValidadorSenha = require('./src/model/ValidadorSenha');

try {
    ValidadorSenha.validar('12444Aa4@43');
} catch (error) {
    console.log(error.message);
}