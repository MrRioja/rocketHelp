<p align="center">
  <img src="./src/assets/logo_primary.svg" alt="Logo" width="300"/>
  <br>
</p>
<h4 align="center">
  RocketHelp, aonde seus pedidos ganham vida!
</h4>

<br>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Rocket&message=Help&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/rocketHelp?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/rocketHelp?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/rocketHelp?color=blueviolet&style=for-the-badge">
</p>

<br>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#rocketHelp">rocketHelp</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

<br>

## Sobre

Aplicação desenvolvida durante o evento Ignite Lab 03 de React Native da RocketSeat.

## rocketHelp

O RocketHelp é uma aplicação móvel para realizar solicitações de atendimento para times de suporte.
Para logar na aplicação o usuário deve cadastrar um e-mail e senha para realizar o login dentro do app. O login é feito na tela abaixo utilizando os dados cadastrados:

<img src="./readme/login.png" alt="Tela de login" width="250px" />

Após realizar o login, o usuário é direcionado para a tela inicial da aplicação onde as solicitações já cadastradas serão exibidas. Dentro do app as solicitações podem possuir dois status: **Em andamento** e **Finalizadas**. E para alterar entra a lista de cada um dos status temos uma seleção no inicio da tela aonde o usuário pode alternar entre as listas por status e também visualizar quantas solicitações estão naquele status.

As tabelas abaixo mostram as duas listas citadas e o detalhe de uma solicitação para cada um dos status possíveis:

|                                                  Lista vazia                                                   |                                           Lista com item                                           |                                         Detalhe da solicitação                                         |
| :------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
| <img src="./readme/home-open-orders-empty.png" alt="Lista vazia de solicitações em andamento" width="250px" /> | <img src="./readme/home-open-orders.png" alt="Lista de solicitações em andamento" width="250px" /> | <img src="./readme/open-order-details.png" alt="Detalhes da solicitação em andamento" width="250px" /> |

|                                                   Lista vazia                                                   |                                           Lista com item                                            |                                         Detalhe da solicitação                                         |
| :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
| <img src="./readme/home-closed-orders-empty.png" alt="Lista vazia de solicitações finalizadas" width="250px" /> | <img src="./readme/home-closed-orders.png" alt="Lista de solicitações finalizadas" width="250px" /> | <img src="./readme/closed-order-details.png" alt="Detalhes da solicitação finalizada" width="250px" /> |

Podemos perceber que ao clicar em uma solicitação **Em andamento**, teremos um campo de texto para adicionar a solução do caso. Ao preencher esse campo e clicar no botão presente no final da tela, iremos adicionar essa solução na descrição do chamado e finaliza-lo. A descrição será exibida em um card dentro dos detalhes de uma solicitação já finalizada, como ilustrado na terceira imagem da segunda tabela.

No final da tela principal temos um botão para cadastrar uma nova solicitação, conforme exemplo abaixo, basta clicar sobre ele e informar os dados solicitados no formulário para que a solicitação seja cadastrada e fique na fila até que seja solucionada:

<img src="./readme/order-form.png" alt="Formulário de cadastro de solicitação" width="250px" />

Basicamente esse é o fluxo da aplicação, tendo como funcionalidade o cadastro, listagem e tratamento de solicitações numa especie de help desk centralizada em um aplicativo móvel.

Abaixo deixo um GIF aonde navegamos por todas as telas do aplicativo afim de exemplificar o fluxo completo:

<img src="./readme/app-demo.gif" alt="Demonstração do app" width="250px" />

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 📱 Rodando o App

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/rocketHelp.git

# Acesse a pasta do projeto no terminal/cmd
$ cd rocketHelp

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação
$ expo start

# Será aberto no terminal o menu do Expo onde poderá scanear o QR Code para executar o app diretamente no seu celular ou as opções de executar no emulador android ou iOS
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="75" />

<img align="left" src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-standard.png?hl=pt-br" alt="Firebase" height="75" />

<img align="left" src="https://www.svgrepo.com/show/353722/expo.svg" alt="Expo" height="100" />

<br><br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
