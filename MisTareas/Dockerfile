# Usa una imagen con Maven y Amazon Corretto (Java 17)
FROM maven:3.8.4-openjdk-17-slim AS build

# Copia el código fuente al contenedor
COPY . /usr/src/app
WORKDIR /usr/src/app

# Ejecuta Maven para construir el proyecto
RUN mvn clean install

# Ahora usa una imagen de Java para ejecutar la aplicación
FROM amazoncorretto:17-alpine-jdk

# Copia el archivo JAR desde el contenedor anterior
COPY --from=build /usr/src/app/target/misTareas-Back-0.0.1-SNAPSHOT.jar mistareas-back.jar

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "/mistareas-back.jar"]
