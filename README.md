>Ce repository fait partie d'un projet plus vaste dont le but est de créer un questionnaire autonome auquel on peut répondre à l'aide de 2 gros buzzer.

#Quizz-gpio-app

Il s'agit d'une application node pensé pour le raspberry permettant d'écouter l'appui sur des boutons branchés sur le port GPIO, et d'envoyer à un back-end quel bouton à été appuyé. (voir [quizz-web-app](https://github.com/ideesdumidi/quizz-web-app)).

## Côté Technique
 - Le serveur utilisé est **node (V4)**
 - Le dialogue entre le back-end et l'application se fait à l'aide de **socket-io**
 - l'écoute du bouton appuyé est faite à l'aide de la librairie **on-off**

##DONE
- écoute des ports GPIO
- envoi d'une réponse au backend en fonction du bouton appuyé

##TODO
- restitution de la réponse selectionné (à l'aide de leds)
- animations lorsque non utilisé depuis un certain temps (encore une fois à l'aide de leds)
