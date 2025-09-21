Amigo Secreto 🎁

Aplicación web sencilla para organizar un sorteo de “amigo secreto” ingresando nombres y seleccionando uno al azar.

🧾 Tabla de contenido

Descripción

Funcionalidades

Cómo usarla / Demo

Tecnologías utilizadas

Estructura del proyecto

Desarrollo

Contribuyentes

Licencia

📄 Descripción

Esta aplicación está diseñada para facilitar la organización de un “amigo secreto” de manera simple y rápida. Los usuarios pueden agregar los nombres de los participantes, visualizarlos en una lista y, finalmente, realizar un sorteo que elige aleatoriamente a un “amigo secreto”.

El propósito principal de este proyecto es practicar y aplicar conceptos fundamentales de programación con JavaScript, incluyendo el manejo de arrays, eventos, manipulación del DOM y validaciones básicas para mejorar la experiencia del usuario.

✅ Funcionalidades

Agregar nombres: Permite ingresar un nombre en un campo de texto y añadirlo a la lista de participantes mediante un botón.

Validaciones: No se permite ingresar nombres vacíos; si el campo está vacío se muestra una alerta para evitar entradas inválidas.

Visualización dinámica: Los nombres agregados se muestran en una lista en la página, actualizándose en tiempo real.

Sorteo aleatorio: Al presionar el botón “Sortear Amigo”, se selecciona aleatoriamente un nombre de la lista y se muestra como resultado del sorteo.

🚀 Cómo usarla / Demo

Para probar esta aplicación localmente, sigue estos pasos:

Clona el repositorio en tu máquina local:

git clone https://github.com/AristidesAlonso/sorteo-amigo-secreto.git


Abre la carpeta del proyecto:

cd sorteo-amigo-secreto


Abre el archivo index.html en tu navegador web preferido (puedes simplemente hacer doble clic en el archivo o usar un servidor local si prefieres).

En la página:

Escribe un nombre en el campo de texto.

Haz clic en Adicionar para agregar el nombre a la lista.

Si el campo está vacío y presionas Adicionar, recibirás una alerta para ingresar un nombre válido.

Una vez tengas varios nombres en la lista, haz clic en Sortear Amigo para elegir un amigo secreto al azar.

(Opcional) Puedes modificar los estilos CSS o la estructura HTML para personalizar la apariencia.

🛠 Tecnologías utilizadas

Este proyecto está construido con tecnologías web básicas, ideales para principiantes y para entender cómo funciona la manipulación del DOM y eventos:

HTML5: Estructura de la página web.

CSS3: Estilos y diseño visual para una experiencia agradable.

JavaScript (Vanilla): Lógica del programa, manejo de eventos y manipulación dinámica del contenido.

Git: Control de versiones para gestionar el proyecto.

📂 Estructura del proyecto

La estructura del proyecto es sencilla y fácil de entender:

amigo-secreto/
├── index.html       # Archivo principal que contiene la estructura HTML.
├── styles.css       # Estilos CSS para la presentación visual.
├── script.js        # Código JavaScript que controla la lógica y comportamiento.
└── README.md        # Documento de descripción del proyecto (este archivo).

🧑‍💻 Desarrollo

La lógica central de la aplicación está implementada en JavaScript y se basa en la manipulación de un array que almacena los nombres ingresados:

Se declara un array vacío llamado nombres que irá almacenando cada nombre ingresado.

El botón Adicionar tiene un evento que:

Toma el valor del campo de texto.

Valida que el valor no sea vacío (y podría validar que no esté repetido).

Si es válido, agrega el nombre al array nombres y actualiza la lista en el DOM para mostrar todos los nombres.

Si no es válido, muestra una alerta.

El botón Sortear Amigo tiene un evento que:

Verifica que haya al menos un nombre en el array.

Usa la función Math.random() para seleccionar un índice al azar dentro del array.

Muestra el nombre seleccionado como resultado del sorteo en la interfaz.

Ejemplo de código para el sorteo:

const indice = Math.floor(Math.random() * nombres.length);
const amigoSeleccionado = nombres[indice];
// Mostrar amigoSeleccionado en pantalla

👥 Contribuyentes

Oscar Aristides – desarrollador principal y creador del proyecto.

📄 Licencia

Este proyecto está bajo la licencia MIT, lo que significa que puedes usarlo, modificarlo y distribuirlo libremente, siempre y cuando mantengas la atribución original.
