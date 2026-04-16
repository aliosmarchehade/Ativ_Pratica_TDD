Resolução da atividade de TDD simulando validação de senhas para uma fintech.

Seguindo as seguintes regras:
- Mínimo de 8 caracteres
- Pelo menos uma letra maiúscula
- Pelo menos uma letra minúscula
- Pelo menos um número
- Pelo menos um caractere especial (!@#$%^&*)
- Não pode conter espaços em branco

## Rodando:

### 1) Instalar dependências

```bash
npm install
```
### 2) Rodar testes
```bash
npm test
```

## O arquivo index.js permite testar a validação manualmente:

- node index.js

Exemplo de saída:

A senha deverá conter ao menos 8 caracteres.

## Considerações:

A utilização do TDD permite desenvolver um sistema de forma incremental, garantindo qualidade e segurança na validação das senhas. Particularmente, no inicio da execução dessa 
atividade, tive dificuldades para poder me organizar e entender a proposta, mas a partir do commit do segundo requisito mais ou menos, fui entendendo e consegui desenvolver os demais 
sem grandes contratempos.

Obs: A partir do 6° commit, quando implementei métodos específicos na classe dos Validadores, não vi mais necessidade de fazer outros refactors, apenas no final com a introdução de mensagens de erro. Por isso não fiz
novas etapas explícitas de refatoração após cada ciclo.
