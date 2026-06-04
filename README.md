# Quiz Engine — Repaso estilo Brightspace

Motor de quiz interactivo construido con **HTML + JavaScript vanilla + Tailwind CSS**, inspirado en la interfaz de [Brightspace](https://www.d2l.com/brightspace/). Sin backend, sin dependencias — abre `index.html` y listo.

## Características

- **Modo quiz** — preguntas una por una con validación inmediata
- **Modo estudio** — todas las preguntas y respuestas correctas visibles de un vistazo
- **Respuesta múltiple** — soporta preguntas con una o varias respuestas correctas
- **Barajar** — preguntas y opciones en orden aleatorio en cada sesión
- **Cuadrícula de navegación** — acceso directo a cualquier pregunta, con indicadores de estado (✓ correcto · ! incorrecto · • respondida)
- **Teclado** — `←` / `→` para navegar, `Enter` para comprobar
- **Score final** — puntaje y porcentaje al terminar, con revisión de respuestas
- **Sin servidor** — funciona como archivo estático local o en cualquier hosting

## Uso

```bash
git clone https://github.com/revkelo/Repaso-Quiz.git
# Abrir index.html en el navegador
```

O desplegarlo directo en GitHub Pages / Netlify Drop.

## Personalizar el banco de preguntas

Edita `preguntas.js` y reemplaza el array `RAW` con tus propias preguntas:

```js
let RAW = [
  {
    id: 'P1-01',
    parcial: 'p1',                          // etiqueta libre (parcial, tema, etc.)
    text: '¿Texto de la pregunta?',
    subtitle: '(Seleccione todas)',          // opcional — aparece en azul
    options: [
      ['A', 'Primera opción'],
      ['B', 'Segunda opción'],
      ['C', 'Tercera opción'],
    ],
    correct: ['A'],                          // array con letras correctas
  },
  // ...
];
```

El motor deduplica preguntas idénticas automáticamente.

## Stack

- HTML5 · JavaScript ES2020 (vanilla)
- [Tailwind CSS](https://tailwindcss.com) via CDN
- Sin frameworks · Sin build step · Sin backend

## Banco de preguntas actual

El archivo `preguntas.js` incluye **40 preguntas** sobre *Matriz de Operacionalización de Variables* (curso universitario de validación de proyectos de software), organizadas en dos parciales.
