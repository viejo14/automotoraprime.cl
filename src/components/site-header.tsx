import { Brand } from "@/components/brand";

type SiteHeaderProps = {
  quoteLink: string;
};

const navigation = [
  { href: "#vehiculos", label: "Vehículos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#preguntas", label: "Preguntas" },
];

export function SiteHeader({ quoteLink }: SiteHeaderProps) {
  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <p>Puerto Montt · Región de Los Lagos</p>
          <p>Atención personalizada</p>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="site-header__brand" href="#inicio">
            <Brand />
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href={quoteLink}>
            Cotizar vehículo <span aria-hidden="true">→</span>
          </a>

          <details className="mobile-nav">
            <summary aria-label="Abrir menú de navegación">
              <span />
              <span />
            </summary>
            <nav aria-label="Navegación móvil">
              {navigation.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="#contacto">Contacto</a>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
