---
draft: false
title: "Week 14 - Mechanism and API"
snippet: ""
image:
  {
    src: "../../assets/pic10.jpg",
    alt: "frontend master",
  }
publishDate: "2025-05-20 15:39"
category: "Weekly Update"
author: "José Fonseca"
tags: []
lang: "en"
---

### Mechanism Structure 

The operation of the mechanism responsible for actuating the side panels has been defined. A motor will rotate a belt that acts on a gear coupled to each of the panels, which, being fixed in place, can rotate around their axis, opening or closing as desired.

### WebApp 

The frontend of the WebApp has been completed. In a simple and intuitive way, the WebApp allows control of the smart clothesline, displays operation logs (showing when it opened/closed and where the input came from), and shows the 5-day weather forecast using the [IPMA API](https://api.ipma.pt/).

> An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate and exchange data. Essentially, it's a way for one program to request and receive data or functionality from another program, acting as a middleman between them.
> -- <cite>[IBM](https://www.ibm.com/think/topics/api#:~:text=An%20API%2C%20or%20application%20programming,exchange%20data%2C%20features%20and%20functionality.)</cite>

### ESP32 

A draft of the code has been completed, however, the rain sensor received does not match the one ordered, so further adjustments are required to find a suitable solution. 