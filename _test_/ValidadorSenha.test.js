const ValidadorSenha = require('../src/model/ValidadorSenha');
describe('ValidadorSenha', () => {

        test('deve se rejeitar senha com menos de 8 caracteres', () => {
            expect(ValidadorSenha.validar('0@567')).toBe(false);
        });

        test('deve se rejeitar senha sem letra maiúscula', () => {
            expect(ValidadorSenha.validar('A1a@5678')).toBe(true);
        });

        test('deve se rejeitar senha sem letra minúscula', () => {
            expect(ValidadorSenha.validar('AA1@5678')).toBe(false);
        });

        test('deve se rejeitar senha sem número', () => {
            expect(ValidadorSenha.validar('Acc@defg')).toBe(false);
        });

        test('deve se rejeitar senha sem caractere especial', () => {
            expect(ValidadorSenha.validar('Abc12345')).toBe(false);
        });

        test('deve se rejeitar senha com espaços', () => {
            expect(ValidadorSenha.validar('Ab1@ 678')).toBe(false);
        });
    });