## **Desafio Franq**

### **Descrição**
Desenvolver o front-end de uma aplicação com dados de cotações e bolsas de valores consumidos da API da HG Finance.

### **Instalação**
```bash
# clonar
gh repo clone Leozenbergs/franq-test
cd franq-test

# instalar (pode ser necessário o uso da flag '--legacy-peer-deps' por conta do pacote amplify)
npm install --legacy-peer-deps

# executar
npm run serve
```
- acesso em http://localhost:8080

### **Stack**
- Amplify
- Vue 2
- Vuetify
- Vuex
- Vue Router


### **Login/Cadastro**
Para cadastro e persistência dos usuários eu utilizei o serviço cognito disponibilizado no amplify onde é possivel gerenciar e autorizar o usuário.

Também adicionei o user ao localStorage, facilitando para manter-lo mesmo caso o browser seja fechado.

Criei também um serviço para consumir os serviços do cognito separadamente, disponivel em [AuthenticationService](./src/services/api/AuthenticationService)

#### **API**
Para as requisições da API utilizei Axios, facilitando para a configuração e acesso aos receptors

As requests feitas à api estao disponíveis no serviço: [FinanceService](./src/services/api/financeService.js)

#### **Layout**
Para o layout utilizei o vuetify que separa uma boa quantia de components em design material com uma larga robustes e facilidade de manter.

Com a ferramenta vuetify também foi possível utilizar os icones da material design icons [icones](https://pictogrammers.com/library/mdi/)

### **Hospedagem**
Para hospedagem utilizei o serviço AWS CloudFront também disponibilizado pelo amplify

O desafio está disponível para acesso aqui:
[Visualizar Teste](http://franqtest-20230131135018-hostingbucket-dev.s3-website-sa-east-1.amazonaws.com/login)
