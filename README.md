<p align="center">
<img src="./logo/logo.png" alt="Logo" width="200px" height="200px">
</p>

<h1 align="center">Show Code</h1>

<p align="center">
    <a target="_blank" href="https://mega.nz/file/xVVFCaxR#oBrMTHaTmhwca9ajcSyM65XpoP_UHJH3g-qbv3ymP3w">
        <img src="https://img.shields.io/badge/Mega-download-red" alt="Descargar">
    </a>
    <a target="_blank" href="https://github.com/FedeManzano/show-code">
        <img src="https://img.shields.io/badge/Version-2.0.0-blue" alt="Version">
    </a>
    <a target="_blank" href="https://github.com/FedeManzano/show-code/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
    </a>
    <a target="_blank" href="https://github.com/FedeManzano/show-code">
        <img src="https://img.shields.io/badge/size-20KB-blue" alt="Size">
    </a>
    <a target="_blank" href="https://www.npmjs.com/package/show-code">
        <img src="https://img.shields.io/npm/v/show-code" alt="npm">
    </a>
</p>

<p align="center">
    <a href="#book-acerca-de-show-code">Acerca de</a> •
    <a href="#rocket-inicio-rápido">Inicio Rápido</a> •
    <a href="#package-instalación">Instalación</a> •
    <a href="#wrench-uso">Uso</a> •
    <a href="#art-temas">Temas</a> •
    <a href="#handshake-contribuir">Contribuir</a> •
    <a href="#page_facing_up-licencia">Licencia</a>
</p>

<h4 align="center">Biblioteca dedicada a resaltar el código fuente en las páginas web</h4>

---

## :book: Acerca de Show Code

**Show Code** es una biblioteca JavaScript liviana y eficiente para resaltar sintaxis de código en páginas web. Es una dependencia de <a href="https://github.com/FedeManzano/bodystyle">BodyStyle</a>, diseñada para proporcionar funcionalidades de resaltado de código de manera simple y elegante.

### Lenguajes Soportados

- :white_check_mark: **JavaScript**
- :white_check_mark: **Java**
- :white_check_mark: **C**
- :white_check_mark: **CSS**
- :white_check_mark: **HTML**

### Características

- :zap: **Biblioteca liviana** - Bundle de solo 20KB
- :sparkles: **Fácil de integrar** - Sin configuración compleja
- :art: **Temas personalizables** - Tema oscuro y claro incluidos
- :rocket: **Vanilla JavaScript** - Sin dependencias externas
- :package: **Múltiples formatos** - Disponible vía npm y CDN

---

## :rocket: Inicio Rápido

La forma más rápida de usar **Show Code** es mediante CDN:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Tema oscuro -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FedeManzano/show-code@main/dist/css/tema-oscuro.css">
    <title>Show Code Demo</title>
</head>
<body>
    <pre class="cod-js">
        // Código JavaScript
        console.log("¡Hola Mundo!");
    </pre>

    <script src="https://cdn.jsdelivr.net/gh/FedeManzano/show-code@main/dist/js/sintax.js"></script>
    <script>
        Show.ShowJsInit()
    </script>
</body>
</html>
```

---

## :package: Instalación

### Via npm

```bash
npm install show-code
```

### Via CDN

```html
<!-- CSS - Tema Oscuro -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FedeManzano/show-code@main/dist/css/tema-oscuro.css">

<!-- CSS - Tema Claro -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FedeManzano/show-code@main/dist/css/tema-claro.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/FedeManzano/show-code@main/dist/js/sintax.js"></script>
```

### Descarga Manual

Descarga los archivos desde el [repositorio de GitHub](https://github.com/FedeManzano/show-code) y copia los archivos de la carpeta `dist` a tu proyecto.

---

## :wrench: Uso

### 1. Incluir los archivos necesarios

```html
<link rel="stylesheet" href="ruta/a/tema-oscuro.css">
<script src="ruta/a/sintax.js"></script>
```

### 2. Agregar el código HTML

Usa la etiqueta `<pre>` con la clase correspondiente al lenguaje:

```html
<!-- JavaScript -->
<pre class="cod-js">
    const mensaje = "Hola Mundo";
    console.log(mensaje);
</pre>

<!-- Java -->
<pre class="cod-java">
    public class Main {
        public static void main(String[] args) {
            System.out.println("Hola Mundo");
        }
    }
</pre>

<!-- HTML -->
<pre class="cod-html">
    <div class="container">
        <h1>Título</h1>
        <p>Párrafo de ejemplo</p>
    </div>
</pre>

<!-- CSS -->
<pre class="cod-css">
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
</pre>

<!-- C -->
<pre class="cod-c">
    #include <stdio.h>
    
    int main() {
        printf("Hola Mundo\n");
        return 0;
    }
</pre>
```

### 3. Inicializar Show Code

```html
<script>
    // Inicializar todos los lenguajes
    Show.ShowJavaInit()
    Show.ShowJsInit()
    Show.ShowHtmlInit()
    Show.ShowCssInit()
    Show.ShowCInit()
</script>
```

O inicializa solo los lenguajes que necesites:

```html
<script>
    // Solo JavaScript
    Show.ShowJsInit()
</script>
```

---

## :art: Temas

Show Code incluye dos temas predefinidos:

### Tema Oscuro
```html
<link rel="stylesheet" href="dist/css/tema-oscuro.css">
```

### Tema Claro
```html
<link rel="stylesheet" href="dist/css/tema-claro.css">
```

---

## :hammer_and_wrench: Desarrollo

### Requisitos

- Node.js >= 14
- npm >= 6

### Instalación de dependencias

```bash
npm install
```

### Scripts disponibles

```bash
# Modo desarrollo
npm run dev

# Build de producción
npm run build
```

---

## :handshake: Contribuir

Las contribuciones son bienvenidas. Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## :page_facing_up: Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## :bust_in_silhouette: Autor

**Federico Manzano**

- GitHub: [@FedeManzano](https://github.com/FedeManzano)

---

## :link: Proyectos Relacionados

- [BodyStyle](https://github.com/FedeManzano/bodystyle) - Biblioteca CSS para desarrollo Front-End

---

<p align="center">
    Hecho con :heart: por <a href="https://github.com/FedeManzano">Federico Manzano</a>
</p>
