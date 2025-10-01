# Etapa 1: Build
FROM node:20-alpine AS build
WORKDIR /app
# Copiar package.json y package-lock.json
COPY package*.json ./
# Instalar dependencias
RUN npm ci
# Copiar el resto del código
COPY . .
# Build de producción
RUN npm run build

# Etapa 2: Servidor
FROM nginx:alpine
# Copiar los archivos de build al servidor nginx
COPY --from=build /app/dist/personal-app/browser /usr/share/nginx/html
# Copiar configuración de nginx personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]