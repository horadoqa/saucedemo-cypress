# saucedemo-cypress

Projeto de Teste com Cypress

urlL https://www.saucedemo.com/

Para inicializar um projeto de testes automatizados com Cypress do zero, vou te mostrar o processo usando Node.js + npm, desde a criação do projeto até a execução do primeiro teste.

## 1. Pré-requisitos

Você precisa ter instalado:

- Node.js (versão LTS recomendada).
- npm (já vem com o Node.js).
- Um editor de código, como VS Code.

Confira se está tudo instalado:

```bash
node -v
npm -v
```

## 2. Criar o projeto

Crie uma pasta para o projeto:

```bash
mkdir projeto-cypress
cd projeto-cypress
```

Inicialize o projeto Node:

```bash
npm init -y
```

Isso vai gerar o arquivo `package.json`, responsável por gerenciar as dependências e scripts do projeto.

## 3. Instalar o Cypress

Execute:

bash

```bash
npm install cypress --save-dev
```

O Cypress será instalado como dependência de desenvolvimento.

## 4. Abrir o Cypress pela primeira vez

Execute:

bash

```bash
npx cypress open
```

Será aberta a interface do Cypress.

Cypress - Automation test with React - DEV Community

End-to-end testing: your first test with Cypress | Cypress Documentation

Launching browsers in Cypress: Chrome, Firefox, Edge & WebKit | Cypress Documentation

Na primeira inicialização:

1. Escolha E2E Testing.
2. O Cypress criará os arquivos de configuração.
3. Escolha um navegador disponível.
4. Clique em Start E2E Testing.
5. Crie seu primeiro arquivo de teste.

## 5. Estrutura do projeto

Após a configuração, você terá uma estrutura semelhante a esta:

```text
projeto-cypress/
│
├── cypress/
│   ├── e2e/
│   │   ├── 1-getting-started
│   │   └── 2-advanced-examples
│   │
│   ├── fixtures/
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── node_modules/
├── cypress.config.js
├── package.json
└── package-lock.json
```

Entenda as principais pastas:

- `e2e`: onde ficam os testes automatizados.
- `fixtures`: arquivos com dados de teste.
- `support`: comandos personalizados e configurações globais.
- `cypress.config.js`: configurações gerais do Cypress.

## 6. Criar o primeiro teste

Dentro de `cypress/e2e`, crie:

`login.cy.js`

Adicione:

```javascript
describe('Login', () => {

  it('Deve acessar o Saucedemo', () => {

    cy.visit('https://www.saucedemo.com/')

  })

})
```

O que está acontecendo?

- `describe()`: agrupa os testes.
- `it()`: define um cenário de teste.
- `cy.visit()`: acessa uma página.
- `cy.contains()`: procura um texto na página.
- `should('be.visible')`: verifica se o elemento está visível.

## 7. Configurar scripts no package.json

Adicione os seguintes scripts dentro de `package.json`:

json

```json
"scripts": {
  "test": "cypress run",
  "cy:open": "cypress open",
  "cy:run": "cypress run"
}
```

Agora você pode executar:

Abrir a interface gráfica:

bash

```bash
npm run cy:open

ou npm test
```

Executar os testes pelo terminal:

bash

```bash
npm run cy:run
```

## 8. Configurar a URL base do projeto

No arquivo `cypress.config.js`, você pode configurar a URL principal da aplicação:

javascript

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/e2e/**/*.cy.js'
  }
})
```

Assim, seus testes podem utilizar:

javascript

```javascript
cy.visit('/')
```

Em vez de informar a URL completa.

## 9. Resultado esperado

Ao final, você terá:

Projeto Cypress inicializado

Node.js configurado

OK

Cypress instalado

OK

Estrutura de pastas criada

OK

Primeiro teste automatizado

OK

Execução via terminal

OK

## Próximo passo: estruturar um projeto profissional

Depois dessa inicialização, recomendo evoluir para uma estrutura de automação mais organizada:

- Page Objects (separação de elementos e ações).
- Custom Commands.
- Fixtures para massa de dados.
- Variáveis de ambiente.
- Testes de API.
- Relatórios de execução.
- Integração com pipeline CI/CD (GitHub Actions ou Jenkins).

Uma pergunta: você pretende utilizar Cypress para testar uma aplicação web (frontend) ou também quer fazer testes de API?

Assim consigo te mostrar uma estrutura de projeto mais próxima de um ambiente real de QA.
