AniSeek - Búsqueda de Animes
Este es mi proyecto final del Bootcamp TripleTen, se trata de una web hecha con React y Vite que permite buscar animes y explorar personajes desde una API externa.

Características principales:

- Página principal con descripción del proyecto.
- Búsqueda de animes por nombre.
- Visualización del Top de Animes.
- Explora el Top de Personajes.
- Filtrar por género con navegación completa.
- Diseño responsivo para dispositivos móviles.

Tecnologías utilizadas:

- React (con Vite).
- JavaScript.
- HTML5 / JSX.
- CSS.
- API externa : AnimeDB.
- Vite como entorno de desarrollo.
- react-router-dom para el sistema de rutas.

Requisitos previos:
Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js
- npm

Cómo ejecutar el proyecto:

- Clonar el repositorio.
- Instala las dependencias: npm install.
- Inicia el servidor de desarrollo: npm run dev.
- Abre tu navegador en: http://localhost:5173 (o el puerto que se indique).

Configuración de la API:
Este proyecto utiliza la API AnimeDB desde RapidAPI. Para usarlo correctamente:

- Regístrate en RapidAPI.
- Suscríbete al plan gratuito o de pago de AnimeDB.
- Copia tu clave de API y actualiza esta línea en utils/api.js: const API_KEY = 'TU_API_KEY_AQUÍ';
