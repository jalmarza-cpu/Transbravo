# Dockerfile — Transbravo Landing (Static Site)
# Usa nginx para servir el index.html directamente sin compilación
FROM nginx:alpine

# Copia todos los archivos del repo al directorio de nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# nginx inicia automáticamente
CMD ["nginx", "-g", "daemon off;"]
