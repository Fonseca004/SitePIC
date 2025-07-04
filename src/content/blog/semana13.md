---
draft: false
title: "Semana 13 - WebApp e Protótipo"
snippet: ""
image:
  {
    src: "../../assets/week13.png",
    alt: "frontend master",
  }
publishDate: "2025-05-12 15:39"
category: "Atualização Semanal"
author: "José Fonseca"
tags: [firebase, blender, nodeJS]
lang: "pt"
---

Esta semana ficou marcada pelo início da conceção do nosso protótipo funcional e pelo arranque do desenvolvimento da WebApp.

### Estrutura
Enfrentámos alguns contratempos relacionados com a modelação do mecanismo responsável pelo movimento das lâminas laterais da estrutura. Foram propostas várias soluções, que estão atualmente a ser desenhadas em software para posterior simulação e comparação, de forma a escolhermos a opção mais eficiente.

### WebApp
Simultaneamente, iniciámos o desenvolvimento da WebApp, com especial foco na interface do utilizador (frontend). A presença dos dois membros responsáveis por esta componente no workshop revelou-se uma mais-valia, permitindo definir de forma clara a estrutura da aplicação. Ficou decidido que a WebApp irá comunicar com o ESP32 através do [Firebase](https://firebase.google.com/?hl=pt-br), serviço SaaS da Google, que também será responsável pelo armazenamento dos registos de funcionamento do estendal inteligente.

### Circuito Elétrico
A elaboração do circuito elétrico e a realização dos testes aos sensores estão atualmente pendentes da entrega da fonte de alimentação. Por esse motivo, o desenvolvimento do código para o ESP32, que permitirá a comunicação com a WebApp, ainda não foi iniciado.