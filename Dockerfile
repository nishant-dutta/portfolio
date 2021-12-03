FROM nginx:latest
COPY /dist/porfolio /usr/share/nginx/html

# Build with command: docker build -t portfolio-app:v1 .