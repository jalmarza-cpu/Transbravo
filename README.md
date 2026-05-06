# TRANSBRAVO — Landing Page

Landing page estática para Transbravo, empresa de movimiento de tierras y retiro de escombros en la Región Metropolitana, Chile.

## Tecnología

- HTML5 puro (sin framework, sin compilación, sin paso de build)
- Tailwind CSS via CDN (configurado inline en `index.html`)
- Google Fonts: Oswald (display) + Roboto (texto)
- JavaScript vanilla
- Iconos SVG inline

Toda la página vive en `index.html`. Los assets están en `images/` y `videos/`.

## Desarrollo local

No hay paso de build. Abrir `index.html` directamente en el navegador, o servirlo con cualquier servidor estático:

```bash
# Cualquiera de estos sirve
python -m http.server 8000
npx serve .
```

## Despliegue en Easypanel (producción)

El sitio se despliega como contenedor Docker basado en nginx. El `Dockerfile` copia los archivos del repo a `/usr/share/nginx/html` y nginx sirve `index.html` con la política de caché definida en `nginx.conf`.

**Configuración en Easypanel:**
- Tipo: Docker / App
- Build: usa el `Dockerfile` del repo
- Puerto expuesto: 80

Build local del contenedor para probar:

```bash
docker build -t transbravo-landing .
docker run -p 8080:80 transbravo-landing
# abrir http://localhost:8080
```

## Política de caché (`nginx.conf`)

- `*.html` → sin caché (cada deploy es visible al instante)
- Imágenes/video → 7 días
- JS/CSS/fuentes → 1 día

## Integración n8n (formulario de contacto)

El formulario de contacto envía a un webhook de n8n. Buscar en `index.html`:

```js
const WEBHOOK = 'https://YOUR_N8N_WEBHOOK_URL_HERE';
```

Reemplazar con la URL del webhook activo antes de desplegar a producción.

## Contacto

- Tel: +56 9 5841 9301
- Email: Jonathanbravovera_99@gmail.com
- San Bernardo, Región Metropolitana
