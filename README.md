# Frontend - Proyecto React

Este es un proyecto frontend basado en React, configurado para trabajar con Redux, React Router, Material-UI y otras herramientas modernas para el desarrollo de aplicaciones web. El proyecto incluye soporte para ESLint y Prettier para garantizar un código limpio y uniforme.

## Características

- **React** como biblioteca principal para la construcción de interfaces de usuario.
- **Redux** para la gestión del estado global.
- **React Router** para la navegación.
- **Material-UI** como biblioteca de componentes de diseño.
- **Formik y Yup** para la gestión de formularios y validaciones.
- **Axios** para realizar solicitudes HTTP.
- **ESLint y Prettier** para el linting y formateo del código.
- **Bootstrap** como apoyo para estilos adicionales.
- Configuración inicial de pruebas con **Jest**.

## Requisitos

- **Node.js**: >= 16.x
- **npm** o **yarn**: para la gestión de paquetes.

## Estructura del Proyecto

```
< ROOT >
  |-- node_modules/         # Dependencias del proyecto
  |-- public/               # Archivos públicos, como index.html
  |-- src/                  # Código fuente principal
  |    |-- _mock/           # Datos de prueba o mock para desarrollo
  |    |-- components/      # Componentes reutilizables
  |    |-- hooks/           # Hooks personalizados
  |    |-- layouts/         # Diseños para vistas específicas
  |    |-- pages/           # Páginas principales del proyecto
  |    |-- redux/           # Configuración y acciones de Redux
  |    |-- sections/        # Secciones divididas para mejor organización
  |    |-- theme/           # Configuración del tema (Material-UI)
  |    |-- utils/           # Utilidades y funciones auxiliares
  |    |-- App.js           # Componente principal
  |    |-- index.js         # Punto de entrada de la aplicación
  |    |-- routes.js        # Configuración de rutas
  |-- .eslintignore         # Archivos ignorados por ESLint
  |-- .eslintrc             # Configuración de ESLint
  |-- package.json          # Archivo de configuración del proyecto
```

## Scripts Disponibles

En el archivo `package.json` se incluyen los siguientes scripts:

- **`start`**: Inicia el servidor de desarrollo.
  ```bash
  npm start
  # o
  yarn start
  ```
- **`build`**: Genera un build optimizado para producción.
  ```bash
  npm run build
  # o
  yarn build
  ```
- **`test`**: Ejecuta las pruebas.
  ```bash
  npm test
  # o
  yarn test
  ```
- **`lint`**: Ejecuta ESLint para verificar errores en el código.
  ```bash
  npm run lint
  # o
  yarn lint
  ```
- **`lint:fix`**: Ejecuta ESLint y corrige errores automáticamente.
  ```bash
  npm run lint:fix
  # o
  yarn lint:fix
  ```

## Instalación y Configuración

### Paso 1: Clonar el repositorio
```bash
$ git clone <URL_DEL_REPOSITORIO>
$ cd <NOMBRE_DEL_PROYECTO>
```

### Paso 2: Instalar las dependencias
```bash
$ npm install
# o
$ yarn install
```

### Paso 3: Ejecutar el proyecto en modo desarrollo
```bash
$ npm start
# o
$ yarn start
```
La aplicación estará disponible en `http://localhost:3000`.

### Paso 4: Build de producción
```bash
$ npm run build
# o
$ yarn build
```
Los archivos optimizados estarán en la carpeta `build/`.

## Configuración de ESLint y Prettier

- **ESLint** está configurado para seguir las reglas del estándar **Airbnb** y las convenciones de React.
- Puedes ejecutar el script `lint` para verificar errores o `lint:fix` para corregirlos automáticamente.

Configuración básica en `.eslintrc`:
```json
{
  "extends": [
    "react-app",
    "react-app/jest"
  ]
}
```

## Dependencias Principales

- **React**: Biblioteca principal.
- **Redux**: Gestión del estado global.
- **React Router**: Navegación entre páginas.
- **Material-UI**: Componentes de interfaz de usuario.
- **Axios**: Cliente HTTP.
- **Formik y Yup**: Gestión de formularios y validaciones.

## Dependencias de Desarrollo

- **ESLint**: Herramienta de linting para mantener código limpio.
- **Prettier**: Herramienta de formateo de código.

## Extensiones Recomendadas para VSCode

- **ESLint**: Detecta errores de linting en tiempo real.
- **Prettier**: Formatea el código automáticamente.

## Personalización

- Modifica el archivo `theme/` para cambiar los colores y el diseño general.
- Crea nuevos componentes reutilizables dentro de la carpeta `components/`.
- Agrega nuevas páginas en `pages/` y configura rutas en `routes.js`.

---

Este proyecto está preparado para ser extendido según tus necesidades. ¡Siéntete libre de personalizar y mejorar! 🚀

