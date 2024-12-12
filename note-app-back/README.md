
## Introducción
Esta documentación detalla el desarrollo de un servicio API RESTful para el puesto de Full Stack Java Developer en DATAMART. El objetivo principal del proyecto es diseñar y construir un servicio que gestione la administración de notas, permitiendo operaciones como el registro así como la autenticación y consulta de datos de los usuarios.

## Descripción del Proyecto
### Arquitectura y Estructura del Proyecto
El proyecto está organizado utilizando una estructura de paquetes por componentes, lo que facilita la modularidad y el mantenimiento del código. Esta organización permite separar claramente la lógica de negocio, la persistencia de datos, y la interfaz de usuario, mejorando la escalabilidad y la gestión del código.

### Tecnologías y Herramientas Utilizadas
* **[Spring Boot:](https://start.spring.io/)** Utilizado para simplificar la configuración inicial del proyecto y la gestión de dependencias.
* **Spring Data JPA**: Facilita la integración con la base de datos PostgreSQL y simplifica las operaciones CRUD mediante el uso de interfaces de repositorio.
* **Spring Security**: Proporciona las capacidades de autenticación y autorización, asegurando que solo los usuarios autenticados puedan acceder a ciertas operaciones.
* **Spring Web**: Permite la creación de endpoints REST y maneja las solicitudes HTTP.
* **[PostgreSQL Database:](https://www.postgresql.org/)** Base de datos PostgreSQL utilizada para el desarrollo y pruebas, proporcionando persistencia confiable y escalable con una configuración sencilla.
* **Spring Validation**: Utilizado para asegurar que los datos ingresados por los usuarios cumplan con los criterios especificados antes de ser procesados o almacenados, lo cual es crucial para mantener la integridad de los datos.
* **[Swagger:](https://springdoc.org/#google_vignette)** Genera la documentación interactiva de la API, facilitando la prueba y visualización de los endpoints disponibles.
* **[jjwt:](https://github.com/jwtk/jjwt)** Utilizado para la generación y validación de tokens JWT, esencial para la gestión de sesiones y autenticación.

## Patrones de Diseño Implementados
* **Dependency Injection**: Ampliamente utilizado a través de Spring Framework, este patrón facilita la gestión de dependencias y la configuración del proyecto, promoviendo un código más limpio y mantenible.
* **Repository**: Implementado mediante Spring Data JPA para abstraer la lógica de acceso a datos. Esto simplifica las operaciones con la base de datos y mejora la mantenibilidad del código al separar la lógica de negocio de la de persistencia
* **Factory**: Empleado para la creación de objetos complejos. Este patrón permite una mayor flexibilidad y desacoplamiento en la creación de instancias, facilitando la extensión y el mantenimiento del código..
* **Singleton**: Utilizado para garantizar que una clase tenga una única instancia y proporcionar un punto de acceso global a ella. En este proyecto, AuthenticationManagerBuilder se configura como un singleton, asegurando que solo exista una instancia de este componente en la aplicación

## Principios SOLID
* **Principio de Responsabilidad Única (SRP)**: Cada clase se ha diseñado para tener una sola razón para cambiar, lo cual se logra segregando las funcionalidades en distintos servicios y repositorios, minimizando así las dependencias cruzadas.
* **Principio de Invesión de Dependencias (DIP)**: Se ha aplicado este principio para reducir la dependencia de implementaciones concretas y fomentar la dependencia de abstracciones. Esto se observa en cómo las capas superiores de la aplicación interactúan con interfaces en lugar de con implementaciones concretas, lo que facilita la sustitución de componentes y la realización de pruebas.

## Puesta en Marcha del Proyecto
El proyecto ha sido configurado en un entorno local a continuación los pasos para ejecutarlo:


* **Base de Datos:** Se ha instalado PostgreSQL en su versión mas reciente.

+ **Backend:** El backend del proyecto ha sido desarrollado en Spring Boot con java 17 que tiene que estar configurado ya en el ordenador.

Paso 1 - Descarga e instala JDK 17.
Paso 2 - Descarga e instala Maven.
Paso 3 - Abrir el proyecto en un IDE sugerido(Usa IntelliJ IDEA).
Paso 4 - Configurar las propiedades del proyecto.
*Edita src/main/resources/application.properties

De la siguiente manera 

# Nombre de la aplicación y puerto
spring.application.name=prueba-lexart
server.port=8081

######## Configuración de Base de Datos #########
# URL para conectar a PostgreSQL(ajustar dependiendo sus credenciales)
spring.datasource.url=jdbc:postgresql://localhost:5433/postgres --base de datos 
spring.datasource.username=postgres --user
spring.datasource.password=12345 -- password

# Driver JDBC de PostgreSQL
spring.datasource.driver-class-name=org.postgresql.Driver

######## Configuración de JPA e Hibernate #########
# Dialecto para PostgreSQL (ajusta según la versión de PostgreSQL si es necesario)
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

# Modo de manejo de esquema de base de datos: update, validate, create, create-drop
spring.jpa.hibernate.ddl-auto=update

# Mostrar y formatear las consultas SQL en los logs (opcional para depuración)
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

######## Validación de Contraseña #########
app.regex.password=^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{7,}$

######## Configuración de Swagger #########
swagger.api-url=http://localhost:8081/

######## Configuración de JWT #########
jwt.secret=chLhMF9w3mwDutysbQxsX8x4CGwZef4mayTGSmbAG2BUsXbYFKvXrVfnPCa62PJxp9TuHxx4PQAS2yGUTBAPy3Dy53j8Uj2wb2AQ3nK8VLg7tUx9HCzHATEp
jwt.expiration=2592000






* **Frontend:** La aplicación frontend ha sido desarrollado en  **[Angular 18:](https://v18.angular.dev/)** que tiene que estar configurado ya en el ordenador.
(con su editor de codigo)
Paso 1 - ingresar a la carpeta del proyecto notes-app-front.
Paso 2 - instalar las dependencias con el comando (npm i).
Paso 3 - ejecutar el proyecto con el comando (ng serve).

ingresar a la carpeta del proyecto y , luego para ejecutar el proyecto ingresar el comando (ng serve).

## Enlaces del proyecto 
* **Backend:** http://localhost:8081/swagger-ui/index.html#/
* **Frontend:** http://localhost:4200/

## Endpoints

### Autenticación de Usuarios
- **Descripción**: Autentica a los usuarios y retorna un token de acceso.
- **Method**: `POST`
- **Path** : `/api/auth/login`
- **Códigos de Respuesta**:
- - `200`: Autenticación exitosa.
- - `401`: Autenticación fallida.

**Ejemplo de Uso:**

```bash
curl --request POST \
  --url http://localhost:8081/api/auth/login
  --header 'Content-Type: application/json' \
  --data '{
	"email": "kevin.vega@gmail.com",
	"password": "Password123!"
}'
```

### Creación de Usuario
- **Descripción** : Registra un nuevo usuario en el sistema.
- **Método HTTP** : `POST`
- **Path** : `/api/auth/register`
- **Códigos de Respuesta**:
- - `201`: Usuario creado exitosamente.
- - `400`: Error en los datos proporcionados.
- - `409`: El correo de xxx@xx.x ya se encuentra registrado.

**Ejemplo de Uso**
```bash
curl --request POST \
  --url http://localhost:8081/api/auth/register
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Kevin Vega",
    "email": "kevin@gmail.com",
    "password": "Password99",
    "role": "EXTERNO"
}'
```



### Registro de una Nota
- **Descripción** : Permite registrar una nueva nota en el sistema.
- **Método HTTP** : `POST`
- **Path** : `/api/notes`
- **Códigos de Respuesta** :
- - `200`: Nota registrada correctamente..
- - `403`: Acceso denegado.
    **Ejemplo de Uso**
```bash
curl --request POST \
  --url http://localhost:8081/api/notes
  --header 'Authorization: Bearer [YourTokenHere]' \
  --header 'Content-Type: application/json' \
  --data '{
  "title": "test1",
  "description": "test1",
  "version": 0,
}'
```
### Listado de Notas
- **Descripción** : Retorna una lista de todas las notas registrados por el usuario logeado.
- **Método HTTP** : `GET`
- **Path** : `/api/notes`
- **Códigos de Respuesta** :
- - `200`: Listado de notas obtenidas correctamente.
- - `403`: Acceso denegado.
-
**Ejemplo de Uso**:
```bash
curl --request GET \
  --url http://localhost:8081/api/notes
  --header 'Authorization: Bearer [YourTokenHere]' \
  --header 'Content-Type: application/json' \
```

### Borrado de Notas
- **Descripción** : Elimina una nota por el usuario logeado.
- **Método HTTP** : `DELETE`
- **Path** : `/api/notes/{id}`
- **Códigos de Respuesta** :
- - `200`: nota eliminada correctamente.
- - `403`: Acceso denegado.
-
**Ejemplo de Uso**:
```bash
curl --request DELETE \
  --url http://localhost:8081/api/notes/{1}
  --header 'Authorization: Bearer [YourTokenHere]' \
  --header 'Content-Type: application/json' \
```

### Edición de una Nota
- **Descripción** : Permite editar una nota de el sistema.
- **Método HTTP** : `PUT`
- **Path** : `/api/notes/{id}`
- **Códigos de Respuesta** :
- - `200`: Nota Editada correctamente..
- - `403`: Acceso denegado.
    **Ejemplo de Uso**
```bash
curl --request PUT \
  --url http://localhost:8081/api/notes/{1}
  --header 'Authorization: Bearer [YourTokenHere]' \
  --header 'Content-Type: application/json' \
  --data '{
  "title": "test1",
  "description": "test1",
  "version": 5,
}'
```
### Consultar Nota por Id
- **Descripción** : Permite editar una nota por id de el sistema.
- **Método HTTP** : `GET`
- **Path** : `/api/notes/{id}`
- **Códigos de Respuesta** :
- - `200`: Nota Editada correctamente..
- - `403`: Acceso denegado.
    **Ejemplo de Uso**
```bash
curl --request GET \
  --url http://localhost:8081/api/notes/{1}
  --header 'Authorization: Bearer [YourTokenHere]' \
  --header 'Content-Type: application/json' \
```

**Crear el primer usuario desde la base de datos**

(ejecutar esta consulta)

INSERT INTO users (id, name, email, password, created, modified, last_login, token, is_active, role) VALUES
    (1, 'Kevin Vega', 'kevin.vega@gmail.com', '$2b$10$pjFpBi8RPzF9ZsLLCTsX4OVNnlY2zdZxEQyT69dhlKmhVp/qhgA7C', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnZW92YW5ueS5tZW5kb3phQGdtYWlsLmNvbSIsIm5hbWUiOiJHZW92YW5ueSBNZW5kb3phIiwiaWF0IjoxNTE2MjM5MDIyfQ.mb82GyDctVPHZYfFndocRrfvpLLFmcPxw-DSyssyUnuijqpwIYqXWLGPqaDpkYnd3gLA1Xh0U7hj_3EyaG4UBw', TRUE, 'ADMINISTRADOR');






