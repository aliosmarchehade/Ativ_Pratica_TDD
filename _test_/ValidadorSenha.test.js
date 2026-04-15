const ValidadorSenha = require('../src/model/ValidadorSenha');
describe('ValidadorSenha', () => {

        test('deve se rejeitar senha com menos de 8 caracteres', () => {
            expect(ValidadorSenha.validar('Aa0@567')).toBe(false);
        });
    });