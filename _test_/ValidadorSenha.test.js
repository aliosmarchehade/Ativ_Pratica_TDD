const ValidadorSenha = require('../ValidadorSenha');
describe('ValidadorSenha', () => {

        test('deve se rejeitar senha com menos de 8 caracteres', () => {
            expect(ValidadorSenha.validar('Ab1@567')).toBe(false);
        });
    });