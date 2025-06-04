---
draft: false
title: "Semana 15 - ESP32 e WebApp, Novo Mecanismo"
snippet: ""
image:
  {
    src: "../../assets/pic11.jpg",
    alt: "frontend master",
  }
publishDate: "2025-05-29 15:39"
category: "Weekly Update"
author: "José Fonseca"
tags: []
lang: "pt"
---

### Estrutura
Por falta dos materiais previstos e dada a complexidade de modelar um circuito mecânico cujas dimensões não poderiam ser determinadas pelo grupo, optámos por substituir o mecanismo inicialmente planeado, baseado em correntes e rodas dentadas, por uma solução apenas controlada por engrenagens. 

Assim, o novo mecanismo contará com uma roda dentada para cada lâmina lateral (tal como anteriormente), e a transmissão do movimento entre elas será feita através de uma roda dentada intermédia. Como é característico da transmissão por engrenagens, o sentido de rotação alterna entre cada roda: ou seja, se a primeira roda gira no sentido horário, a seguinte girará no sentido anti-horário, e assim sucessivamente. As rodas dentadas intermédias não atuam diretamente sobre nenhum elemento da estrutura — apenas servem para transmitir o movimento entre as rodas principais.

### WebApp e ESP32
Para conectar a WebApp (interface para o utilizador) com o ESP32 e o código que faz o estendal funcionar, recorremos a uma base de dados. Neste caso, utilizámos o [Firebase](https://firebase.google.com/?hl=pt-br) da Google.

Esta base de dados é composta por um array que armazena o registo de funcionamento do SmartRack e por uma variável que indica o estado atual do estendal. Essa variável assume o valor `True` quando o estendal está aberto e `False` quando está fechado.

A WebApp consegue aceder ao valor dessa variável de estado para mostrar ao utilizador se a sua roupa está protegida ou não. Além disso, o utilizador pode alterar esse valor através da interface, abrindo ou fechando o estendal conforme necessário.

O registo de funcionamento também é apresentado na WebApp, permitindo ao utilizador acompanhar se o estendal está a operar corretamente.