Projeto de Formulário de Contato com Validação de Regex

Este projeto consiste em um formulário de contato que valida as entradas do usuário usando expressões regulares (Regex). O formulário inclui campos para o nome, email e telefone do usuário.

Expressões Regulares Utilizadas

As seguintes expressões regulares são usadas para validar as entradas do usuário:

1. Nome: `^[a-zA-ZÀ-ú\s']+$`
   - Esta expressão regular valida o campo nome. Ela verifica se o nome contém apenas letras (incluindo letras acentuadas), espaços e apóstrofos. Isso é útil para aceitar nomes que possam conter caracteres especiais, como acentos ou apóstrofos.

2. Telefone: `^[0-9]{2} [0-9]{4,5}-[0-9]{4}$`
   - Esta expressão regular valida o campo telefone. Ela verifica se o telefone está no formato correto, seguindo o padrão brasileiro (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.

3. Email: `^[^\s@]+@[^\s@]+\.[^\s@]{2,}$`
   - Esta expressão regular valida o campo email. Ela verifica se o email está no formato correto, com um nome de usuário seguido por um domínio.

Como Usar

Para usar este projeto, basta clonar o repositório e abrir o arquivo `index.html` em seu navegador. Você pode então preencher o formulário e ver as validações em ação.