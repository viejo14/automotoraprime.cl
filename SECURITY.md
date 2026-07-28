# Política de seguridad

## Versiones compatibles

La rama `main` es la única versión que recibe correcciones de seguridad.

## Reportar una vulnerabilidad

No publiques vulnerabilidades, credenciales ni datos personales en un issue.
Repórtalos de forma privada a `contacto@automotoraprime.cl` con:

- una descripción clara del problema;
- los pasos mínimos para reproducirlo;
- el impacto estimado;
- cualquier recomendación de mitigación.

Confirmaremos la recepción y coordinaremos la divulgación responsable antes de
publicar detalles.

## Alcance

Este repositorio no debe contener claves API, tokens de Cloudflare, credenciales
de GitHub, archivos `.env`, `.dev.vars` ni claves privadas. Todos los secretos de
producción deben almacenarse como secretos cifrados de Cloudflare o del sistema
de integración continua.
