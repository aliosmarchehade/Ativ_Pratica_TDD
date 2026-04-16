const ValidadorSenha = require('../src/model/ValidadorSenha');
describe('ValidadorSenha', () => {

        test('deve se rejeitar senha com menos de 8 caracteres', () => {
            expect(ValidadorSenha.validar('0@567')).toBe(false);
        });

        test('deve se rejeitar senha sem letra maiúscula', () => {
            expect(ValidadorSenha.validar('A1a@5678')).toBe(true);
        });

        test('deve se rejeitar senha sem letra minúscula', () => {
            expect(ValidadorSenha.validar('AB1@5678')).toBe(false);
        });
    });