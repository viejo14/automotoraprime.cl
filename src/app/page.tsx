import Image from "next/image";
import { Brand } from "@/components/brand";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const services = [
  {
    number: "01",
    title: "Vehículos seleccionados",
    description:
      "Una oferta curada para que compares alternativas relevantes, con información clara desde el primer contacto.",
  },
  {
    number: "02",
    title: "Gestión de financiamiento",
    description:
      "Te orientamos en el proceso y buscamos una alternativa que se ajuste de manera responsable a tu realidad.",
  },
  {
    number: "03",
    title: "Recibimos tu vehículo",
    description:
      "Evaluamos tu automóvil como parte de pago con un proceso ordenado, transparente y sin vueltas innecesarias.",
  },
];

const categories = [
  {
    title: "SUV",
    description: "Espacio, comodidad y seguridad para cada recorrido.",
    image:
      "https://images.unsplash.com/photo-1522846931861-69b7a5f8ab83?auto=format&fit=crop&w=1400&q=85",
    alt: "SUV circulando por una carretera de montaña",
    credit: "Timothy Chan",
    creditUrl: "https://unsplash.com/photos/cjsIdOYNn60",
  },
  {
    title: "Pick-ups",
    description: "Capacidad y resistencia para trabajo o aventura.",
    image:
      "https://images.unsplash.com/photo-1700568633148-3332745b7a85?auto=format&fit=crop&w=1400&q=85",
    alt: "Pick-up azul circulando por un camino entre árboles",
    credit: "Luke Miller",
    creditUrl: "https://unsplash.com/photos/KR7QVdfMUoE",
  },
  {
    title: "City cars",
    description: "Eficiencia y agilidad para moverte todos los días.",
    image:
      "https://images.unsplash.com/photo-1626334418764-5a27cd70b7e6?auto=format&fit=crop&w=1400&q=85",
    alt: "City car azul estacionado junto a una pared clara",
    credit: "Martin Katler",
    creditUrl: "https://unsplash.com/photos/WLDeXZqn9TM",
  },
  {
    title: "Sedanes",
    description: "Confort, presencia y equilibrio para viajar mejor.",
    image:
      "https://images.unsplash.com/photo-1535815593759-6a2f6897a1ac?auto=format&fit=crop&w=1400&q=85",
    alt: "Sedán oscuro circulando por una carretera al atardecer",
    credit: "Hayes Potter",
    creditUrl: "https://unsplash.com/photos/1cgAXEzomgc",
  },
];

const process = [
  {
    step: "Conversemos",
    description:
      "Cuéntanos qué necesitas, tu presupuesto y el uso que le darás a tu próximo vehículo.",
  },
  {
    step: "Compara con claridad",
    description:
      "Revisamos contigo las alternativas, sus condiciones y los pasos de la operación.",
  },
  {
    step: "Decide con confianza",
    description:
      "Te acompañamos hasta el cierre para que avances informado y con tranquilidad.",
  },
];

const faqs = [
  {
    question: "¿Dónde está ubicada Automotora Prime?",
    answer:
      "Atendemos en Puerto Montt, Región de Los Lagos. Escríbenos antes de tu visita para coordinar una atención personalizada y confirmar la ubicación.",
  },
  {
    question: "¿Puedo entregar mi vehículo como parte de pago?",
    answer:
      "Sí. Evaluamos tu vehículo y te explicamos de forma transparente cómo se incorpora su valor a la operación.",
  },
  {
    question: "¿Trabajan con opciones de financiamiento?",
    answer:
      "Sí. Te orientamos durante la evaluación de alternativas de financiamiento, siempre sujetas a las condiciones y aprobación de cada entidad.",
  },
  {
    question: "¿Cómo puedo consultar por un vehículo?",
    answer:
      "Puedes escribirnos directamente por WhatsApp indicando el tipo de vehículo que buscas, presupuesto estimado y si tienes un automóvil para entregar.",
  },
  {
    question: "¿La atención requiere reserva?",
    answer:
      "No necesariamente, pero recomendamos coordinar previamente para dedicarte el tiempo que necesitas y tener lista la información de los vehículos de tu interés.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoDealer",
      "@id": `${siteConfig.url}/#automotora`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/automotora-prime-hero.webp`,
      logo: `${siteConfig.url}/icon.svg`,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      hasMap: siteConfig.mapsUrl,
      sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Puerto Montt",
        addressRegion: "Región de Los Lagos",
        addressCountry: "CL",
      },
      areaServed: {
        "@type": "City",
        name: "Puerto Montt",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  const quoteLink = siteConfig.whatsappUrl;

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader quoteLink={quoteLink} />

      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <Image
            className="hero__image"
            src="/automotora-prime-hero.webp"
            alt="SUV premium en un showroom de Puerto Montt al atardecer"
            fill
            preload
            sizes="100vw"
          />
          <div className="hero__overlay" />
          <div className="container hero__content">
            <p className="eyebrow eyebrow--light">Automotora en Puerto Montt</p>
            <h1 id="hero-title">
              Tu próximo vehículo,
              <span>con la confianza que mereces.</span>
            </h1>
            <p className="hero__lead">
              Seleccionamos buenas alternativas y te acompañamos con una
              atención clara, cercana y profesional de principio a fin.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#vehiculos">
                Explorar opciones <span aria-hidden="true">→</span>
              </a>
              <a className="button button--ghost" href="#contacto">
                Hablar con un asesor
              </a>
            </div>
          </div>
          <div className="container hero__assurances" aria-label="Compromisos">
            <p>
              <span>01</span> Selección rigurosa
            </p>
            <p>
              <span>02</span> Información transparente
            </p>
            <p>
              <span>03</span> Atención personalizada
            </p>
          </div>
        </section>

        <section className="section section--intro" id="nosotros">
          <div className="container intro-grid">
            <div>
              <p className="eyebrow">Nuestra forma de trabajar</p>
              <h2>Comprar un vehículo debería sentirse simple.</h2>
            </div>
            <div className="intro-copy">
              <p>
                En Automotora Prime combinamos conocimiento del mercado local
                con una atención directa y sin presión. Queremos que entiendas
                cada alternativa antes de tomar una decisión importante.
              </p>
              <a className="text-link" href="#proceso">
                Conoce nuestro proceso <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="section social-live"
          id="comunidad"
          aria-labelledby="community-title"
        >
          <div className="container">
            <div className="section-heading social-live__heading">
              <div>
                <p className="eyebrow">Comunidad Prime</p>
                <h2 id="community-title">Lo último, directo desde nuestras redes.</h2>
              </div>
              <p>
                Revisa vehículos recién publicados, novedades y oportunidades
                reales. Este contenido se actualiza desde nuestros perfiles
                oficiales de Instagram y Facebook.
              </p>
            </div>

            <div className="social-feed-grid">
              <article className="social-feed-card social-feed-card--instagram">
                <div className="social-feed-card__header">
                  <div>
                    <span className="social-feed-card__platform">
                      Instagram
                    </span>
                    <h3>@automotoraprime</h3>
                  </div>
                  <span className="live-status">
                    <span aria-hidden="true" /> Contenido en vivo
                  </span>
                </div>
                <div className="social-feed-card__frame">
                  <iframe
                    src={siteConfig.instagramEmbedUrl}
                    title="Últimas publicaciones de Automotora Prime en Instagram"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="encrypted-media; picture-in-picture; web-share"
                  />
                </div>
                <div className="social-feed-card__footer">
                  <p>Publicaciones servidas directamente por Instagram.</p>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir perfil <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>

              <article className="social-feed-card social-feed-card--facebook">
                <div className="social-feed-card__header">
                  <div>
                    <span className="social-feed-card__platform">Facebook</span>
                    <h3>Automotora Prime</h3>
                  </div>
                  <span className="live-status">
                    <span aria-hidden="true" /> Contenido en vivo
                  </span>
                </div>
                <div className="social-feed-card__frame">
                  <iframe
                    src={siteConfig.facebookEmbedUrl}
                    title="Últimas publicaciones de Automotora Prime en Facebook"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="encrypted-media; picture-in-picture; web-share"
                  />
                </div>
                <div className="social-feed-card__footer">
                  <p>Actividad servida directamente por Facebook.</p>
                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir página <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </div>

            <aside
              className="social-reputation"
              aria-label="Opiniones de Automotora Prime en Google"
            >
              <div>
                <span>Google Maps · Opiniones públicas</span>
                <h3>La confianza también se comprueba.</h3>
              </div>
              <p>
                Conoce las calificaciones y experiencias compartidas por
                nuestros clientes antes de visitarnos.
              </p>
              <a
                className="button button--primary"
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ver opiniones <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </div>
        </section>

        <section
          className="section section--navy"
          id="vehiculos"
          aria-labelledby="vehicles-title"
        >
          <div className="container">
            <div className="section-heading section-heading--light">
              <div>
                <p className="eyebrow eyebrow--light">Encuentra tu próximo vehículo</p>
                <h2 id="vehicles-title">Opciones para distintos caminos.</h2>
              </div>
              <p>
                Cuéntanos qué estás buscando. Te ayudamos a encontrar una
                alternativa coherente con tus necesidades y presupuesto.
              </p>
            </div>

            <div className="category-grid">
              {categories.map((category, index) => (
                <article className="category-card" key={category.title}>
                  <Image
                    className="category-card__image"
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                  />
                  <div className="category-card__scrim" />
                  <div className="category-card__top">
                    <span className="category-card__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <a
                      className="category-card__credit"
                      href={category.creditUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Fotografía de ${category.credit} en Unsplash`}
                    >
                      Foto: {category.credit}
                    </a>
                  </div>
                  <div className="category-card__content">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="inventory-note">
              <p>
                Nuestro inventario cambia constantemente. Consulta la
                disponibilidad actual con un asesor.
              </p>
              <a className="button button--primary" href={quoteLink}>
                Solicitar alternativas <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="section section--services"
          id="servicios"
          aria-labelledby="services-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Más que una compraventa</p>
                <h2 id="services-title">Te acompañamos en toda la operación.</h2>
              </div>
              <p>
                Una experiencia ordenada, con respuestas concretas y un equipo
                disponible cuando lo necesites.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="proceso">
          <div className="container process-grid">
            <div className="process-statement">
              <p className="eyebrow eyebrow--light">Confianza en cada etapa</p>
              <h2>Información clara. Decisiones tranquilas.</h2>
              <p>
                Sin tecnicismos innecesarios ni promesas difíciles de
                comprobar. Ponemos lo importante sobre la mesa.
              </p>
            </div>
            <ol className="process-list">
              {process.map((item, index) => (
                <li key={item.step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.step}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="section section--faq"
          id="preguntas"
          aria-labelledby="faq-title"
        >
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2 id="faq-title">Antes de visitarnos.</h2>
              <p className="faq-intro">
                Resolvemos algunas dudas habituales al buscar una automotora en
                Puerto Montt.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="contact"
          id="contacto"
          aria-labelledby="contact-title"
        >
          <div className="container contact-grid">
            <div>
              <p className="eyebrow eyebrow--light">Hablemos de tu próximo vehículo</p>
              <h2 id="contact-title">Estamos para orientarte.</h2>
              <p>
                Escríbenos con lo que estás buscando y coordinaremos una
                atención personalizada en Puerto Montt.
              </p>
              <a className="button button--primary" href={quoteLink}>
                Escribir por WhatsApp <span aria-hidden="true">→</span>
              </a>
            </div>
            <address className="contact-card">
              <div>
                <span>Ubicación</span>
                <p>Puerto Montt, Región de Los Lagos</p>
              </div>
              <div>
                <span>Teléfono y WhatsApp</span>
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </div>
              <div>
                <span>Correo</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <a
                className="text-link text-link--light"
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ver en Google Maps <span aria-hidden="true">↗</span>
              </a>
            </address>
          </div>
        </section>
      </main>

      <a
        className="whatsapp-float"
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar con Automotora Prime por WhatsApp"
      >
        <span className="whatsapp-float__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M20 11.55a8 8 0 0 1-11.86 7L4 19.65l1.1-4.03A8 8 0 1 1 20 11.55Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.45 7.9c.18-.39.37-.4.64-.41h.54c.17 0 .36.06.45.3l.7 1.7c.08.2.04.37-.08.54l-.53.69c-.13.16-.1.32-.03.45.38.69.88 1.3 1.48 1.8.57.5 1.22.9 1.94 1.18.17.06.3.04.42-.1l.72-.85c.16-.2.34-.2.56-.12l1.63.77c.23.11.38.17.43.29.05.12.05.7-.16 1.18-.2.48-1.2.93-1.65.99-.43.06-.98.1-1.58-.1-.37-.12-.84-.27-1.44-.53a9.1 9.1 0 0 1-3.55-3.1c-.23-.3-1.44-1.91-1.44-3.64 0-.62.17-.96.25-1.04Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="whatsapp-float__copy">
          <strong>WhatsApp</strong>
          <small>
            <span aria-hidden="true" /> Conversemos
          </small>
        </span>
      </a>

      <footer className="footer">
        <div className="container footer__top">
          <Brand />
          <p>
            Una experiencia automotriz clara, cercana y profesional en Puerto
            Montt.
          </p>
          <nav aria-label="Navegación del pie">
            <a href="#vehiculos">Vehículos</a>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </nav>
        </div>
        <div className="container footer__bottom">
          <p>
            © {new Date().getFullYear()} Automotora Prime. Todos los derechos
            reservados.
          </p>
          <p>Puerto Montt · Chile</p>
        </div>
      </footer>
    </>
  );
}
