const ValidadorSenha = require('../src/model/ValidadorSenha');
const { msg } = require('../src/util/msgs');

describe('ValidadorSenha', () => {

    test('deve rejeitar senha curta', () => {
        expect(() => ValidadorSenha.validar('0@567'))
            .toThrow(msg.CURTA);
    });

    test('deve rejeitar senha sem letra maiúscula', () => {
        expect(() => ValidadorSenha.validar('ab1@5678'))
            .toThrow(msg.MAIUSCULA);
    });

    test('deve rejeitar senha sem letra minúscula', () => {
        expect(() => ValidadorSenha.validar('AA1@5678'))
            .toThrow(msg.MINUSCULA);
    });

    test('deve rejeitar senha sem número', () => {
        expect(() => ValidadorSenha.validar('Acc@defg'))
            .toThrow(msg.NUMERO);
    });

    test('deve rejeitar senha sem caractere especial', () => {
        expect(() => ValidadorSenha.validar('Abc12345'))
            .toThrow(msg.ESPECIAL);
    });

    test('deve rejeitar senha com espaços', () => {
        expect(() => ValidadorSenha.validar('Ab1@ 678'))
            .toThrow(msg.ESPACO);
    });

    test('deve aceitar senha válida', () => {
        expect(ValidadorSenha.validar('Ab1@5678')).toBe(true);
    });

});