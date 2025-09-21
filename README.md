# Amigo Secreto 🎁

> Aplicación simple web para agregar nombres de amigos y realizar un sorteo aleatorio para elegir quién será el “amigo secreto”.

---

## 🧾 Tabla de contenido

1. [Descripción](#descripción)  
2. [Funcionalidades](#funcionalidades)  
3. [Cómo usarla / Demo](#cómo-usarla--demo)  
4. [Tecnologías utilizadas](#tecnologías-utilizadas)  
5. [Estructura del proyecto](#estructura-del-proyecto)  
6. [Desarrollo](#desarrollo)  
7. [Contribuyentes](#contribuyentes)  
8. [Licencia](#licencia)  

---

## 📄 Descripción

Esta aplicación permite que uno o varios usuarios ingresen nombres de amigos, los visualicen en una lista, y luego realicen un sorteo aleatorio para determinar quién será seleccionado como amigo secreto. Incluye validaciones básicas para mejorar la experiencia de usuario.

El objetivo principal es practicar conceptos fundamentales de programación: arreglos (arrays), condicionales, manejo del DOM, eventos, y lógica de selección aleatoria.  

---

## ✅ Funcionalidades

- Agregar nombres mediante un campo de texto + botón **“Adicionar”**.  
- Validar entrada: no se permite agregar nombre vacío; se muestra alerta si sucede.  
- Visualizar lista de nombres agregados en pantalla.  
- Botón **“Sortear Amigo”** que selecciona aleatoriamente uno de los nombres de la lista y lo muestra como resultado.  

---

## 🚀 Cómo usarla / Demo

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tuUsuario/amigo-secreto.git


Abrir el archivo index.html en tu navegador web.

En la interfaz:

Escribir un nombre en el campo de texto.

Hacer clic en Adicionar → el nombre aparece en la lista.

Si no escribes nada y haces clic en Adicionar, aparece una alerta indicando que ingreses un nombre válido.

Cuando ya haya varios nombres en la lista, hacer clic en Sortear Amigo → se muestra en pantalla el nombre elegido al azar.

(Opcional) Puedes modificar los estilos CSS o la estructura HTML para mejorar la interfaz.

🛠 Tecnologías utilizadas

HTML5

CSS3

JavaScript (vanilla)

Git para control de versiones

📂 Estructura del proyecto
amigo-secreto/
├── index.html
├── styles.css
├── script.js
└── README.md


index.html: estructura de la página.

styles.css: estilos visuales.

script.js: lógica de manipulación del DOM, validaciones, sorteo aleatorio.

🧑‍💻 Desarrollo

Aquí una explicación breve de la lógica central:

Mantener un array nombres = [] que almacena los nombres que ingresa el usuario.

Evento para el botón Adicionar:

Obtener valor del campo de texto.

Verificar que no esté vacío (y opcionalmente que no esté repetido).

Si es válido, agregar al array y actualizar la lista visual en HTML.

Si no es válido, mostrar alerta o mensaje al usuario.

Evento para el botón Sortear Amigo:

Verificar que haya al menos uno o más nombres en el array.

Usar función aleatoria para elegir un índice dentro del array:

const indice = Math.floor(Math.random() * nombres.length);
const amigoSeleccionado = nombres[indice];


Mostrar amigoSeleccionado en pantalla.

👥 Contribuyentes

Oscar Aristides 

📄 Licencia

Este proyecto está bajo la licencia MIT — puede usarse, modificarse y distribuirse libremente.
