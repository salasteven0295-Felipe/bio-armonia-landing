import { useState } from 'react';

import {
  MessageCircle,
  Leaf,
  HandHeart,
  Heart,
  Package,
  Gift,
  Sparkles,
  Baby,
  Flower2,
  Droplets,
  Instagram,
  Facebook,
  Truck,
  ChevronDown
} from 'lucide-react';

// CONFIGURACIÓN PRINCIPAL
const whatsappNumber = '50688970499';

const instagramUrl = 'https://www.instagram.com/bio_armonia_corporal';
const facebookUrl = 'https://www.facebook.com/profile.php?id=100066801256439';

const whatsappText = 'Hola, quiero recibir el catálogo de Bio Armonía';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

// LOGOS
const logoPrincipal = '/images/logo-principal.png';
const logoCircular = '/images/Logo Circular_claro.png';
const iconoMarca = '/images/Icono (2).png';

const collections = [
  {
    title: 'Esenciales del Jardín',
    tag: 'Cuidado diario',
    description: 'Una línea pensada para volver simple y bonito el cuidado de todos los días.',
    ideal: 'Ideal para rutinas diarias, piel que busca suavidad y personas que quieren empezar con lo natural.',
    icon: Leaf,
    accent: 'olive',
    image: '/images/linea-a-esenciales-jardin.png',
    soaps: [
      {
        name: 'Nube de Avena',
        primary: 'Avena + miel',
        benefit: 'Limpieza suave para todos los días.'
      },
      {
        name: 'Panal de Seda',
        primary: 'Miel de abeja',
        benefit: 'Cuidado diario con sensación nutritiva.'
      },
      {
        name: 'Savia Serena',
        primary: 'Sábila natural',
        benefit: 'Frescura y suavidad para la piel.'
      },
      {
        name: 'Brisa de Menta',
        primary: 'Menta fresca',
        benefit: 'Sensación revitalizante y fresca.'
      },
      {
        name: 'Respiro del Monte',
        primary: 'Romero + eucalipto',
        benefit: 'Limpieza herbal con sensación refrescante.'
      },
      {
        name: 'Luz de Manzanilla',
        primary: 'Manzanilla',
        benefit: 'Cuidado suave para una piel luminosa.'
      },
    ],
  },
  {
    title: 'Rituales del Cuerpo',
    tag: 'Spa en casa',
    description: 'Una pausa sensorial para transformar la ducha en un momento de calma y bienestar.',
    ideal: 'Ideal para quienes disfrutan aromas, texturas, exfoliación suave y una experiencia más tipo spa en casa.',
    icon: Droplets,
    accent: 'lavender',
    image: '/images/linea-b-rituales-cuerpo.png',
    soaps: [
      {
        name: 'Bruma de Lavanda',
        primary: 'Lavanda',
        benefit: 'Aroma relajante para una pausa nocturna.'
      },
      {
        name: 'Cumbre Mineral',
        primary: 'Sal mineral',
        benefit: 'Exfoliación natural y textura renovadora.'
      },
      {
        name: 'Fibra Viva',
        primary: 'Esponja natural',
        benefit: 'Exfoliación corporal con sensación de spa.'
      },
      {
        name: 'Carbón Noble',
        primary: 'Carbón activado',
        benefit: 'Limpieza profunda y sensación purificante.'
      },
      {
        name: 'Pulso Sereno',
        primary: 'Barra de masaje',
        benefit: 'Pausa corporal y experiencia sensorial.'
      },
      {
        name: 'Rosa de Alba',
        primary: 'Rosa / rosa mosqueta',
        benefit: 'Suavidad floral y cuidado delicado.'
      },
    ],
  },
  {
    title: 'Cuidado Sensible',
    tag: 'Suavidad extrema',
    description: 'Una línea delicada para acompañar la piel con suavidad, calma y mucho cuidado.',
    ideal: 'Ideal para pieles sensibles, cuidado familiar y momentos donde lo simple también puede sentirse especial.',
    icon: Baby,
    accent: 'blush',
    image: '/images/linea-c-cuidado-sensible.png',
    soaps: [
      {
        name: 'Primer Abrazo',
        primary: 'Cuidado suave',
        benefit: 'Pensado para piel delicada y rutinas tiernas.'
      },
      {
        name: 'Abrazo Sereno',
        primary: 'Fórmula amable',
        benefit: 'Ideal para piel madura o sensible.'
      },
      {
        name: 'Nube de Cuna',
        primary: 'Manzanilla + miel',
        benefit: 'Suavidad diaria con sensación calmante.'
      },
      {
        name: 'Luna de Sábila',
        primary: 'Sábila',
        benefit: 'Frescura suave para piel delicada.'
      },
      {
        name: 'Nido de Miel',
        primary: 'Miel natural',
        benefit: 'Baño tierno con sensación nutritiva.'
      },
    ],
  },
  {
    title: 'Detalles del Jardín',
    tag: 'Para regalar',
    description: 'Pequeños detalles artesanales para regalar algo útil, bonito y hecho con intención.',
    ideal: 'Ideal para obsequios, detalles personalizados, recuerdos y momentos donde querés compartir bienestar.',
    icon: Flower2,
    accent: 'rose',
    image: '/images/linea-d-detalles-jardin.png',
    soaps: [
      {
        name: 'Flores del Jardín',
        primary: 'Jabones florales',
        benefit: 'Detalles decorativos para regalar.'
      },
      {
        name: 'Osito de Cuna',
        primary: 'Figura tierna',
        benefit: 'Ideal para bebé, recuerdos o regalos especiales.'
      },
      {
        name: 'Angelito de Miel',
        primary: 'Pieza simbólica',
        benefit: 'Detalle delicado con intención artesanal.'
      },
      {
        name: 'Mini Abrazo',
        primary: 'Mini jabones',
        benefit: 'Perfectos para detalles, kits o pequeños obsequios.'
      },
      {
        name: 'Caja Jardín',
        primary: 'Set de regalo',
        benefit: 'Presentación lista para entregar.'
      },
      {
        name: 'Edición de Estación',
        primary: 'Temporada',
        benefit: 'Detalles especiales según disponibilidad.'
      },
    ],
  },
];

function BrandLogo({
  variant = 'principal',
  className = '',
}: {
  variant?: 'principal' | 'circular' | 'icon';
  className?: string;
}) {
  const src =
    variant === 'principal'
      ? logoPrincipal
      : variant === 'circular'
      ? logoCircular
      : iconoMarca;

  return (
    <img
      src={src}
      alt="Bio Armonía Jabones Artesanales"
      className={className}
      loading="eager"
    />
  );
}

function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="brand-small" aria-label="Ir al inicio">
        <BrandLogo variant="principal" className="header-logo" />
      </a>

      <nav aria-label="Navegación principal">
        <a href="#colecciones">Colecciones</a>
        <a href="#esencia">Nuestra esencia</a>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="nav-cta">
          Consultar
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">Jabones artesanales hechos en Costa Rica</p>

        <h1>Cuidado natural que tu piel sí siente</h1>

        <p className="hero-text">
          Jabones hechos a mano con ingredientes naturales, pensados para cuidar tu piel con suavidad todos los días.
        </p>

        <div className="actions">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="button primary">
            <MessageCircle size={18} /> Pedir por WhatsApp
          </a>

          <a href="#colecciones" className="button secondary">
            Ver colecciones
          </a>
        </div>
      </div>

      <div className="hero-card">
        <BrandLogo variant="principal" className="hero-logo" />
        <span>Natural • Artesanal • Con cuidado</span>
      </div>
    </section>
  );
}

function BrandEssence() {
  const values = [
    {
      icon: Leaf,
      title: 'Natural',
      text: 'Ingredientes reales, de inspiración botánica, pensados para cuidar tu piel con suavidad.'
    },
    {
      icon: HandHeart,
      title: 'Artesanal',
      text: 'Cada barra es elaborada a mano, en pequeños lotes y con atención a cada detalle.'
    },
    {
      icon: Heart,
      title: 'Con cuidado',
      text: 'Fórmulas creadas con intención para acompañar tu rutina y regalar bienestar.'
    },
  ];

  return (
    <section id="esencia" className="section essence">
      <div className="section-title">
        <BrandLogo variant="icon" className="section-icon-logo" />

        <h2>Una nueva etapa para Bio Armonía</h2>

        <p>
          Renovamos nuestra imagen, pero mantenemos la misma esencia: jabones hechos a mano con ingredientes naturales,
          dedicación y mucho cuidado en cada detalle.
        </p>

        <p>
          Cada pieza nace del amor por lo bien hecho y del deseo de acompañar tu piel con suavidad, calma y bienestar diario.
        </p>
      </div>

      <div className="value-grid">
        {values.map(({ icon: Icon, title, text }) => (
          <article className="value-card" key={title}>
            <div className="icon-circle">
              <Icon size={26} />
            </div>

            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CollectionCard({
  collection,
}: {
  collection: typeof collections[number];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = collection.icon;

  return (
    <article className={`collection-card ${collection.accent}`}>
      <div className="collection-image-wrap">
        <img
          src={collection.image}
          alt={`${collection.title} - Bio Armonía`}
          className="collection-image"
          loading="lazy"
        />
      </div>

      <div className="collection-content">
        <div className="collection-top">
          <div className="collection-icon">
            <Icon size={24} />
          </div>

          <span>{collection.tag}</span>
        </div>

        <h3>{collection.title}</h3>

        <p className="collection-description">{collection.description}</p>

        <p className="collection-ideal">{collection.ideal}</p>

        <button
          type="button"
          className={`collection-dropdown-trigger ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>Ver jabones de esta línea</span>
          <ChevronDown size={18} />
        </button>

        {isOpen && (
          <div className="collection-dropdown">
            <div className="soap-list">
              {collection.soaps.map((soap) => (
                <div className="soap-item" key={soap.name}>
                  <div>
                    <strong>{soap.name}</strong>
                    <span>{soap.primary}</span>
                  </div>

                  <p>{soap.benefit}</p>
                </div>
              ))}
            </div>

            <p className="collection-note">
              Podés adquirir la colección completa o elegir tus jabones favoritos por separado, según disponibilidad.
            </p>
          </div>
        )}

        <a href={whatsappLink} target="_blank" rel="noreferrer" className="collection-cta">
          Consultar esta línea
        </a>
      </div>
    </article>
  );
}

function Collections() {
  return (
    <section id="colecciones" className="section collections">
      <div className="section-title">
        <BrandLogo variant="icon" className="section-icon-logo" />

        <h2>Nuestras Colecciones</h2>

        <p>
          Descubrí el mundo de Bio Armonía: líneas creadas para cada rutina, piel o momento especial.
        </p>
      </div>

      <div className="collection-grid">
        {collections.map((collection) => (
          <CollectionCard collection={collection} key={collection.title} />
        ))}
      </div>
    </section>
  );
}

function Packaging() {
  return (
    <section className="section packaging">
      <div className="mockup packaging-photo" aria-label="Empaques Bio Armonía">
        <img
          src="/images/Empaques.png"
          alt="Empaques y jabones Bio Armonía"
          className="packaging-image"
          loading="lazy"
        />
      </div>

      <div className="packaging-copy">
        <h2>Empaques que cuidan tu jabón y el planeta</h2>

        <p>
          Diseñamos empaques más limpios, prácticos y bonitos para proteger cada jabón,
          elevar la experiencia y hacerlo ideal para uso personal o regalo.
        </p>

        <div className="feature-list">
          <div><Package size={20} /><span>Cajas kraft con ventana</span></div>
          <div><Leaf size={20} /><span>Materiales reciclables y biodegradables</span></div>
          <div><Gift size={20} /><span>Presentaciones especiales para regalar</span></div>
          <div><Sparkles size={20} /><span>Etiquetas claras, elegantes y funcionales</span></div>
        </div>
      </div>
    </section>
  );
}

function HowToOrder() {
  const steps = [
    {
      number: '1',
      title: 'Elegí tu línea o producto',
      text: 'Podés escoger entre cuidado diario, rituales corporales, cuidado sensible o detalles para regalar.'
    },
    {
      number: '2',
      title: 'Escribinos por WhatsApp',
      text: 'Te compartimos catálogo, disponibilidad y precios.'
    },
    {
      number: '3',
      title: 'Coordinamos entrega',
      text: 'Preparamos tu pedido con cuidado y te indicamos opciones de entrega.'
    },
  ];

  return (
    <section className="section order">
      <div className="section-title">
        <div className="order-badge">
          <BrandLogo variant="icon" className="section-icon-logo" />
          <span className="order-badge-icon">
            <Truck size={15} />
          </span>
        </div>

        <h2>Cómo hacer tu pedido</h2>

        <p>
          Simple, directo y acompañado. Queremos ayudarte a encontrar el jabón ideal para vos.
        </p>
      </div>

      <div className="steps">
        {steps.map((step) => (
          <article key={step.number}>
            <strong>{step.number}</strong>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div>
        <BrandLogo variant="icon" className="cta-logo" />

        <h2>Elegí el cuidado que tu piel necesita</h2>

        <p>Te ayudamos a encontrar el jabón ideal para vos.</p>

        <a href={whatsappLink} target="_blank" rel="noreferrer" className="button primary">
          <MessageCircle size={18} /> Solicitar por WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <BrandLogo variant="circular" className="footer-logo" />
        <p>Bio Armonía · Jabones artesanales</p>
      </div>

      <div className="footer-links">
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          <Instagram size={18} /> Instagram
        </a>

        <a href={facebookUrl} target="_blank" rel="noreferrer">
          <Facebook size={18} /> Facebook
        </a>

        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <BrandEssence />
        <Collections />
        <Packaging />
        <HowToOrder />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
