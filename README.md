# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

- Cómo organizaron el proyecto.
Primero nos fijamos que componentes necesitabamos y los creamos. Después decidimos primero programar todo los componentes uno por uno según que era lo más importante, comenzando por el feed. Como el feed necesitaba de publicacion, programamos eso primero. Después el mostrarPerfil y publicacion detalle lo dejamos para el final, ya que no inlfuia directamente con lo que se ve al iniciar el proyecto.
- Qué componentes crearon.
BarraHistorias, BarraLateral, Comentario, ComentarioList, Encabezado, Feed, Historias, Loader, Opciones, Perfil, PerfilDetalle, PublicacionDetalle y Publicaciones.
- Qué responsabilidad tiene cada componente.
tienen la responsabilidad de 
- Por qué decidieron componentizar de esa manera.
me gustó
- Cómo se comunican los componentes mediante props.
comunicandose
- Qué hooks utilizaron y para qué.
useState y UseEffect.
- Qué diseño de Figma utilizaron como referencia.
https://www.figma.com/community/file/1004033523744290376
- Cómo resolvieron la visualización individual de publicaciones.
Es un componente aparte que reemplaza el feed entero mostrando solo una publicaión.
-  Cómo simularon el perfil de usuario logueado.
Utilizamos un archivo json con todos los datos ya preestablecidos, ese archivo lo importamos al app.tsx y desde ahí al crear los objetos, introducimos los valores del json al objeto.
-  Qué datos decidieron mostrar en el perfil.
Foto de perfil, nombre, cantidad de seguidores y cantidad de seguidos
-  Qué estados utilizaron para seleccionar publicaciones o manejar la vista individual.
Utilizamos el setPublicación y verificabamos si es que publicación tenía algún valor.
