# Proyecto Backend Arcadia Gaming
<h3>La base de datos se conecta a través de Docker con MongoDB. Toda la información de los juegos ha sido insertada previamente, gracias a la api de https://api.igdb.com/v4/games. Utilizaremos una variable de entorno .env </h3>

# Diagrama de la Base de datos
![](/ER.png)

```
mongodb://localhost:27017/arcadiaGaming
```

## Instalación
<h3>Para poder utilizar el proyecto tendrás que instalar Node.js y clonar el repositorio de GitHub con este comando:</h3>

```
$ git clone https://github.com/Kanandee/arcadiaBack.git
```



<h3>Para poder instalar las dependencias utilizaremos:</h3>

```
npm install
```

## End Points
### Index

| Get  | Ruta | Descripción | Permisos |
| ------------- | ------------- | ------------- | ------------- |
| Get | / | Página de bienvenida | Público

### Users

| Get  | Ruta | Descripción | Permisos |
| ------------- | ------------- | ------------- | ------------- |
| Get | /users | Muestra todos los usuarios registrados | Administrador
| Delete | /users/:id/delete | Elimina el usuario | Administrador
| Get | /users/:id | Perfil del usuario | Token
| Post | /users/buy/:gameId | Compra el juego con la id para ese usuario | Token
| Delete | /users/remove/:gameId | Elimina el juego con la id para ese usuario  | Token


### Games

| Get  | Ruta | Descripción | Permisos |
| ------------- | ------------- | ------------- | ------------- |
| Get | /games | Muestra todos los juegos disponibles | Token
| Get | /games/:id | Muestra la información de ese juego | Token
| Get | /games/name/:name | Encontrar el juego con ese nombre | Token
| Get | /games/platform/:platform | Encontrar el juego con esa plataforma | Token


### Authentication

| Get  | Ruta | Descripción | Permisos |
| ------------- | ------------- | ------------- | ------------- |
| Post | /auth/login | Comprueba las credenciales y genera un token de sesión | Público
| Post | /auth/register | Almacena la información del nuevo usuario | Público

### Roles

| Get  | Ruta | Descripción | Permisos |
| ------------- | ------------- | ------------- | ------------- |
| Get | /roles | Muestra todos los roles disponibles | Administrador
| Post | /roles/create | Crea un nuevo rol | Administrador

## Creado con

* JavaScript - Lenguaje principal
* Node.js - Entorno de ejecución de JavaScript
* Express - Modulo
* Mongoose - ORM
* MongoDB - Lenguaje
