# TRANSBRAVO — Landing Page

Landing page estática para Transbravo, empresa de movimiento de tierras y retiro de escombros en la Región Metropolitana, Chile.

## Tecnología

- HTML5 puro (sin framework, sin compilación)
- Tailwind CSS via CDN
- Google Fonts (Oswald + Roboto)
- JavaScript vanilla

## Despliegue en Easypanel

Este proyecto es un **Static Site**. El archivo `index.html` debe estar en la **raíz del repositorio**.

**Configuración en Easypanel:**
- Tipo: Static
- Directorio raíz: `/` (raíz)
- No requiere build command
- No requiere install command

## Fase 5 — Integración n8n

El formulario de contacto tiene un placeholder para el webhook de n8n.
Buscar en `index.html`:
```js
const WEBHOOK = 'https://YOUR_N8N_WEBHOOK_URL_HERE';
```
Reemplazar con la URL del webhook activo.

## Contacto

- Tel: +56 9 5841 9301
- Email: Jonathanbravovera_99@gmail.com
- San Bernardo, Región Metropolitana
