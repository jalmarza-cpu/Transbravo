# Dockerfile — Transbravo Landing (Static Site)
# Usa nginx para servir el index.html directamente sin compilación
FROM nginx:alpine

# Copia todos los archivos del repo al directorio de nginx
COPY . /usr/share/nginx/html

# Usa configuración personalizada de nginx (sin caché en HTML)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# nginx inicia automáticamente
CMD ["nginx", "-g", "daemon off;"]
