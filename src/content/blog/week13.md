---
draft: false
title: "Week 13 - WebApp and Prototype"
snippet: ""
image:
  {
    src: "../../assets/week13.png",
    alt: "frontend master",
  }
publishDate: "2025-05-12 15:39"
category: "Weekly Update"
author: "José Fonseca"
tags: [firebase, blender, nodeJS]
lang: "en"
---

This week marked the beginning of the development of our functional prototype and the launch of the WebApp.

### Structure
We encountered some setbacks related to the modeling of the mechanism responsible for moving the side blades of the structure. Several solutions were proposed and are currently being designed using software, so we can simulate and compare them in order to choose the most efficient one.

### WebApp
At the same time, we started developing the WebApp, focusing particularly on the user interface (frontend). The presence of the two team members responsible for this component at the workshop proved to be a valuable asset, as it helped define the overall structure of the application. It was decided that the WebApp will communicate with the ESP32 via [Firebase](https://firebase.google.com/?hl=pt-br), Google’s SaaS platform, which will also be responsible for storing the operating logs of the smart drying rack.

### Electrical Circuit
The development of the electrical circuit and testing of the sensors are currently on hold, pending the delivery of the power supply. As a result, the ESP32 code that will enable communication with the WebApp has not yet been started.