# omarviazcan.com — sitio de Omar Viazcán

Sitio **100% estático** (HTML + JS vanilla + assets). No requiere build step, framework ni Node: cualquier host de archivos estáticos lo sirve tal cual.

## Estructura
```
index.html   ← el sitio completo (una sola página)
support.js   ← runtime del que depende index.html (sin él no carga nada)
assets/
  audio/album/   12 mp3 del disco "Primera Temporada"
  audio/demos/   demos inéditos ("La Bóveda")
  fotos/         fotografías y press kit
  letras.js      letras de las canciones (carga diferida)
  portada-primera-temporada.jpg
  concepto-musical.txt
```

## Desarrollo local
`index.html` carga `support.js` y los audios, así que ábrelo con un servidor local (no con `file://`):
```bash
npx serve .
# o
python3 -m http.server 8080
```

## Despliegue
Se publica en **Cloudflare Pages** (framework preset: None, sin build command, output dir: raíz).
El sitio Astro anterior quedó archivado en la rama `backup-astro-site`.

## Agregar canciones/demos
Suelta los `.mp3` en `assets/audio/demos/` y actualiza el arreglo `VAULT` dentro del `<script>` de `index.html`.
