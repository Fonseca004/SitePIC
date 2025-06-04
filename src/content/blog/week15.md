---
draft: false
title: "Week 15 - "
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
lang: "en"
---
### Structure  
Due to the unavailability of the planned materials and the difficulty in modeling a mechanical system whose dimensions could not be determined by the team, we decided to replace the initially planned mechanism — which was based on chains and gears — with a simpler solution using only gears.

Thus, the new mechanism will include one gear for each lateral panel (as before), and the motion between them will be transmitted through an intermediate gear. As is characteristic of gear transmission, the direction of rotation alternates between gears: that is, if the first gear rotates clockwise, the next will rotate counterclockwise, and so on. The intermediate gears do not directly act on any structural element — they only serve to transmit motion between the main gears.

### WebApp and ESP32  
To connect the WebApp (user interface) with the ESP32 and the code that controls the smart clothesline, we used a database. In this case, we chose Google's [Firebase](https://firebase.google.com/).

The database consists of an array that stores the operation log of the SmartRack and a variable indicating the current state of the clothesline. This variable holds the value `True` when the clothesline is open and `False` when it is closed.

The WebApp can access the value of this state variable to inform the user whether their clothes are protected or not. Additionally, the user can change this value via the interface, closing or opening the clothesline as needed.

The operation log is also displayed on the WebApp, allowing the user to monitor whether the clothesline is functioning correctly.


