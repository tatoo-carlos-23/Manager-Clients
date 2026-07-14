# ManagerClients

ManagerClients es una aplicacion web para gestionar clientes por usuario autenticado.

La aplicacion permite iniciar sesion con Google, ingresar a un dashboard y administrar una lista personal de clientes. Cada cliente queda asociado al usuario que lo registro, por lo que cada cuenta ve solo sus propios datos.

## URL de la aplicacion

La aplicacion desplegada esta disponible en:

```text
https://managerclients-def89.firebaseapp.com/
```

## Contexto de la aplicacion

El objetivo principal es registrar y mantener informacion basica de clientes:

- Nombres
- Apellidos
- Fecha de nacimiento
- Edad calculada automaticamente a partir de la fecha de nacimiento

Desde el dashboard se pueden realizar las acciones principales de mantenimiento:

- Listar clientes registrados
- Crear nuevos clientes
- Editar clientes existentes
- Eliminar clientes con confirmacion
- Cerrar sesion

## Flujo principal

1. El usuario ingresa a la aplicacion.
2. Si no tiene sesion activa, puede autenticarse con Google.
3. Si la sesion es valida, se redirige al dashboard.
4. En el dashboard se muestra la informacion del usuario autenticado.
5. El usuario administra su lista de clientes.
6. Los registros se guardan en Firebase Firestore asociados al `userId` del usuario.

## Tecnologias

- Angular 15
- AngularFire
- Firebase Authentication
- Firebase Firestore
- NG-ZORRO
- RxJS
- TypeScript

## Estructura general

- `src/app/features/auth`: flujo de autenticacion con Google.
- `src/app/features/dashboard`: contenedor principal para usuarios autenticados.
- `src/app/features/dashboard/features/clients`: listado, creacion, edicion y eliminacion de clientes.
- `src/app/core/api`: servicios de comunicacion con Firebase.
- `src/app/core/guards`: proteccion de rutas publicas y privadas.
- `src/app/core/states`: estado del usuario autenticado.

## Firebase

La aplicacion usa Firebase para:

- Autenticar usuarios con Google.
- Guardar clientes en Firestore.

La coleccion principal de clientes es `CLIENTS`.

## Servidor de desarrollo

Ejecuta:

```bash
npm start
```
