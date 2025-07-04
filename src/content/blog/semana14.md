---
draft: false
title: "Semana 14 - Mecanismo e API"
snippet: ""
image:
  {
    src: "../../assets/pic10.jpg",
    alt: "frontend master",
  }
publishDate: "2025-05-20 15:39"
category: "Atualização Semanal"
author: "José Fonseca"
tags: [API]
lang: "pt"
---

### Estrutura
Ficou definido o funcionamento do mecanismo responsável por atuar as faces laterais. Um motor fará girar uma correia que atua sobre uma roda dentada acopolada a cada uma das laminas, que estando fixas rodam em torno do seu eixo, abrindo ou fechando consoante desejado.

### WebApp
Ficou terminado o frontend da WebApp. De forma simples, a webapp permite controlar o estendal inteligente, mostra o registo de funcionamento (quando abriu/fechou e de onde recebeu o input) e recorrendo a [API do IPMA](https://api.ipma.pt/) exibe a previsão meteorológica dos próximos 5 dias.

> Uma API (Interface de Programação de Aplicações) é um conjunto de regras e protocolos que permite que diferentes aplicações de software se comuniquem e troquem dados. Essencialmente, é uma forma de um programa solicitar e receber dados ou funcionalidades de outro programa, atuando como um intermediário entre eles.
> -- <cite>[IBM](https://www.ibm.com/think/topics/api#:~:text=An%20API%2C%20or%20application%20programming,exchange%20data%2C%20features%20and%20functionality.)</cite> 


### ESP 32
O esboço do código foi concluído, no entanto, o sensor de chuva fornecido não corresponde ao encomendado, pelo que ficou dependente de arranjarmos uma solução.