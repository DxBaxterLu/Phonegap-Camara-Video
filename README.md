# Phonegap-Camara-Video
Para este proyecto implementaremos las funcionalidades móviles de cámara y video con phonegap y como desplegarlos en galería.

Si se va usar la interfaz de carga de phonegap deberemos utilizar el archivo node.js y reemplazarlo en la carpeta de C:\Program Files (x86)\Adobe\PhoneGap\PhoneGap Desktop\resources\app.asar.unpacked\bin allí encontraremos una carpeta npm.js lo que haremos es descomprimir nuestro archivo de descarga e ir a node_modules y reemplazar nuestro archivo npm por el que se encuentra en phonegap, esto dará solución a nuestro problema.

## A Blank PhoneGap App

#### Uso
  
#### PhoneGap CLI
Si no usaremos la interfaz de phonegap podemos hacerlo por la linea de comandos de windows mediante el siguiente comando.

  ```
  $ phonegap create my-app --template blank
  ```

#### Desktop
#### En su navegador, abra el archivo:

- **/www/index.html**
- **Crear carpeta style junto con su archivo style.css**
- **Crear carpeta js junto con su archivo camara.js**
