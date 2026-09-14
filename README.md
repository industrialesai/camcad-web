# CAMCAD Manufacturing — sitio web

Sitio estático de una sola página. Sin build, sin dependencias.

## Estructura

```
index.html                     todo el sitio (HTML + CSS + JS en un archivo)
img/
  camcad-logo-blanco.png       logo para la barra superior (fondo oscuro)
  hero-tendido.jpg             foto de fondo de la portada
  proceso-planta.jpg           foto de planta
  og-camcad.jpg                imagen al compartir el link (1200x630)
  favicon.png
  clientes/                    logos de clientes, PNG transparente
  productos/                   una foto por pieza, nombre = slug del catálogo
```

## Editar el catálogo

Al final de `index.html`, dentro del `<script>`:

- `LOGOS` — los logos de la franja de clientes.
- `PIEZAS` — el catálogo. Cada pieza tiene `slug` (= nombre del archivo de foto
  en `img/productos/`), `clave`, `grupo` (genera las secciones y el índice),
  `nombre`, `desc` y `attr`.

Los seis puntos numerados del esquema de la portada están en el SVG con
`data-pieza="slug"`. Si falta una imagen, la página no se rompe: muestra el
hueco con el nombre del archivo que espera.

## Deploy

Vercel → Add New Project → importar este repo → Framework Preset: **Other** →
Deploy. Sin build command, sin output directory.

## Pendientes

- Datos de contacto reales (correo, teléfono, domicilio de planta).
- Logos de clientes.
- Fotos de producto y de planta.
- Backend del formulario (hoy abre el correo del visitante).
