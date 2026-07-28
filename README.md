# Automotora Prime

Landing corporativa y base web escalable para Automotora Prime, Puerto Montt.

## Stack

- Next.js 16 con App Router
- React y TypeScript
- Tailwind CSS 4
- Cloudflare Workers mediante OpenNext
- Wrangler para preview y despliegue

## Desarrollo

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:3000`.

## Verificaciones

```bash
npm run lint
npm run build
npm run preview
```

`preview` construye la aplicación con OpenNext y la ejecuta en el runtime local
de Cloudflare.

## Despliegue en Cloudflare

Autenticar Wrangler una sola vez:

```bash
npx wrangler login
```

Luego desplegar:

```bash
npm run deploy
```

El dominio personalizado `automotoraprime.cl` se vincula desde **Workers &
Pages → automotora-prime → Settings → Domains & Routes** en Cloudflare.

## Datos comerciales

Los datos editables de la empresa están centralizados en `src/lib/site.ts`.
Antes de producción se debe confirmar:

- correo comercial;
- dirección exacta;
- horarios;

El teléfono, WhatsApp y los perfiles sociales se centralizan en el mismo
archivo y actualmente corresponden a la información pública de la empresa.

## SEO incluido

- metadatos canónicos y sociales;
- datos estructurados `AutoDealer` y `FAQPage`;
- `sitemap.xml`, `robots.txt` y manifest;
- HTML semántico y contenido local para Puerto Montt;
- imagen hero optimizada;
- headers básicos de seguridad y diseño responsive.
