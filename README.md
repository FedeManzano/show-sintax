<p align="center">
<img src="./logo/logo.png" alt="Logo" width="200px" height="200px">
</p>

<h1 align="center">Show Code</h1>

<p align="center">
    <a target="_blank" href="#">
        <img src="https://img.shields.io/badge/Mega-download-red" alt="Descargar">
    </a>
    <a target="_blank" href="#">
        <img src="https://img.shields.io/badge/Version-2.0.0-blue" alt="Version">
    </a>
    <a target="_blank" href="#">
        <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
    </a>
    <a target="_blank" href="#">
        <img src="https://img.shields.io/badge/size-20KB-blue" alt="Version">
    </a>
    <a target="_blank" href="#">
        <img src="https://img.shields.io/badge/Documentación-download-green" alt="Version">
    </a>
</p>

<p align="center">
    <a href="#rocket-inicio-rápido">Inicio Rápido</a> •
    <a href="#inicio-rápido">Instalación</a> •
    <a href="#inicio-rápido">Documentación</a> •
    <a href="#inicio-rápido">Contribuir</a> •
    <a href="#inicio-rápido">Soporte</a> •
    <a href="#inicio-rápido">Descargar</a>
</p>

<h4 align="center">Biblioteca dedicada a resaltar el código fuente en las páginas web</h4>

---

<h2>:book: Acerca de Show Code</h2>

**Show Code** es una dependencia de la biblioteca que se encarga de brindar funcionalidades para la creación del Front-End <a href="https://github.com/FedeManzano/bodystyle">BodyStyle</a>. </br>
En este caso la función principal de esta dependencia es resaltar el código fuente en diferentes lenguajes de programación ```JavaScript```, ```Java```, ```C```, ```CSS``` y ```HTML```.

- :white_check_mark: **Biblioteca liviana su Bundled es de 20KB.**
- :white_check_mark: **Fácil de agregar al proyecto.**
- :white_check_mark: **No necesita configuración.**
- :white_check_mark: **Toda la lóogica de la biblioteca esta en Vanilla JavaScript.**

---

<h2>:rocket: Inicio Rápido</h2>

La forma más rápida de disponer de **Show Code** es mediante el ```CDN``` del archivo de estilo minificado y el que contiene la lógica del código fuente.

### Plantilla

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../dist/css/tema-oscuro.css">

    <title>Document</title>
</head>

<body>

    <pre class="cod-java">
       // Código Java
       System.out.println("Hola Mundo");
    </pre>

    <pre class="cod-js" style="margin-top: 10px;">
        // Código JavaScript
        console.log("Hola Mundo");
    </pre>

    <pre class="cod-html" style="margin-top: 10px;">
        <!-- Código HTML -->
        <h1>Hola Mundo</h1>
    </pre>

    <pre class="cod-css" style="margin-top: 10px;">
        /* Código CSS */
        h1 {
            color: red;
        }
    </pre>

    <pre class="cod-c" style="margin-top: 10px;">
        // Código C
        #include <stdio.h>

        int main() {
            printf("Hola Mundo");
            return 0;
        }
    </pre>

    <script src="../dist/js/sintax.js"></script>
    <script>
        Show.ShowJavaInit()
        Show.ShowJsInit()
        Show.ShowHtmlInit()
        Show.ShowCssInit()
        Show.ShowCInit()
    </script>
</body>
</html>
```

