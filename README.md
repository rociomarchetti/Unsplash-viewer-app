# Unsplash viewer app

Aplicación que conecta con la API de unplash.com para cargar y visualizar un layout de imágenes.

> Breve descripción del proyecto: 

 La selección de las imágenes es de temática random y se renueva con cada click al botón. Si la imagen provista por la api contiene una descripción de la misma, ésta aparece a modo de título.

## Tecnologías utilizadas

HTML5 - CSS3 - ANGULAR 15.1.3 - Node: 16.14.2

Otros:

Angular CLI: 15.1.3 || BOOTSTRAP 5

## Estructura del proyecto

Creación de un módulo ("images") con un único componente para la gestión de esta main page. La gestión del módulo se vale de un servicio exclusivo para la gestión de los llamados a la API de UNPLASH (trabajando solo con endpoints de tipo get), y el uso de interfaces para una gestión más clara de sus respuestas. 

## Code quality

[![CodeFactor](https://www.codefactor.io/repository/github/rociomarchetti/unsplash-viewer-app/badge)](https://www.codefactor.io/repository/github/rociomarchetti/unsplash-viewer-app)

## Acceso al proyecto 

Luego de su descarga, instalar los módulos de node ('npm install'). 
A través de Angular CLI y el comando 'ng serve -o' el proyecto estará servido en 'http://localhost:4200/'
