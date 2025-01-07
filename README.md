# Práctica Github Actions

## ¿Qué es?
GitHub Actions es una plataforma de integración y entrega continua (CI/CD) nativa de GitHub que permite automatizar flujos de trabajo directamente desde un repositorio de GitHub. Los flujos de trabajo se configuran mediante archivos YAML que definen una serie de pasos o tareas que se ejecutan en respuesta a eventos específicos, como commits, pull requests o despliegues.

## ¿Por qué usarlo?
GitHub Actions destaca por su integración nativa con GitHub, lo que facilita la configuración y gestión de flujos de trabajo directamente en el repositorio. Ofrece gran flexibilidad, permitiendo crear flujos de trabajo personalizados mediante archivos YAML. Además, tiene un marketplace de acciones que simplifica la automatización, es escalable, y es gratuito para repositorios públicos, lo que lo hace atractivo en términos de costos. Todo esto se combina en una plataforma fácil de usar y altamente eficiente para automatizar tareas de CI/CD.

---
---

# Proyecto:

## Pasos previos
En ciertas partes del código YAML se utilizarán unos secrets. Para crearlos, se tendrá que ir a la configuración del repositorio -> Secrets and Variables -> Actions -> New repository secret.

Ahí añadimos el token con el nombre que queramos y le ponemos el secret para que las actions puedan traer automáticamente los datos de esas variables.

## Jobs
1. **`Job Linter`:**
    - Descarga el código.
    - Setup de Node.
    - Instala dependencias y corre el linter.
2. **`Job Cypress`:**
    - Descarga el código.
    - Setup de Node.
    - Instala dependencias y corre Cypress.
    - Crea un artefacto con los resultados.
3. **`Job Add Badge`:** (Está comentado porque no he conseguido que funcione porque el artefacto se descarga en .zip, pero tengo lo que debería ser la base)

    - Descarga el código.
    - Descarga artefactos.
    - Descomprime el archivo ZIP.
    - Verifica el contenido del directorio descomprimido.
    - Lee el archivo result.txt y genera el output.
    - Modifica el README.md con un badge.
    - Realiza push de los cambios.
4. **`Job Deploy`:**
    - Descarga el código.
    - Despliega en Vercel.
5. **`Job Notificación`:**
    - Descarga el código.
    - Define el estado de los jobs previos.
    - Envía un correo con el estado de los jobs.

## Action en el repositorio del perfil
La action está creada con su YAML y también he puesto el enlace de las metrics en el Readme, pero después de 10 minutos de carga en la action, me ha dado error de que no es capaz de traer los datos y no entiendo por qué. Los archivos están ahí y se pueden checkear (al igual que la action fallida).