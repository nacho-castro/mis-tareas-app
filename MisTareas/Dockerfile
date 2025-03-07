FROM amazoncorretto:17-alpine-jdk //de que imagen partimos
MAINTAINER NCH //propietario de la imagen
COPY target/misTareas-Back-0.0.1-SNAPSHOT.jar mistareas-back.jar    //copiar el empaquetado github
ENTRYPOINT ["java","-jar","/mistareas-back.jar"] //instruccion que se ejecuta primero

