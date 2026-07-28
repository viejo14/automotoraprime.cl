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
  },
  {
    title: "Pick-ups",
    description: "Capacidad y resistencia para trabajo o aventura.",
  },
  {
    title: "City cars",
    description: "Eficiencia y agilidad para moverte todos los días.",
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
      "Puedes escribir directamente a nuestro correo de atención indicando el tipo de vehículo que buscas, presupuesto estimado y si tienes un automóvil para entregar.",
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
  const quoteLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Cotización de vehículo — Automotora Prime",
  )}`;

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
                  <span className="category-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                  <span className="category-card__arrow" aria-hidden="true">
                    ↗
                  </span>
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
                Solicitar asesoría <span aria-hidden="true">→</span>
              </a>
            </div>
            <address className="contact-card">
              <div>
                <span>Ubicación</span>
                <p>Puerto Montt, Región de Los Lagos</p>
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
