# template-creative

## Limitación
solo se podra trabajar un template-creative a la vez.

## Requisitos

- Node
- yarn o npm

## Instalación

```terminal
  npm install 
```

## Implementación de un nuevo template

- crear una carpeta con el nombre del template dentro de `src/`
- dentro de la carpeta creada con el nombre del template crear el js. 
- adicionalmente dentro de la misma carpeta crear un archivo con el nombre `macro.js`, en este archivo se agrega todos los macros que simulara el appnexus.
- en el archivo `env.development` se agrega el path del `marco.js` y se tiene que cambiar cada vez que se quiere trabajar en un *template-creative*
- en el archivo `webpack.config.js` se tiene que agregar la ruta del archivo del js en la sección entry
```javascript
  {
  ...
    entry: {
      generate: './src/tools/generateUrl.js',
      ...
      zInferiorExpandible: './src/zInferiorExpandible/zInferiorExpandible.js',
    }
   ...
  }
````
- en esa misma carpeta podemos tener un archivo index.html para probar de manera local.
- puedes utilizar un servidor local de tu preferencia o utilizar `npx serve`
