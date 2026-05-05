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
  Truck
} from 'lucide-react';

// CONFIGURACIÓN PRINCIPAL
const whatsappNumber = '50688970499';

const instagramUrl = 'https://www.instagram.com/bio_armonia_corporal';
const facebookUrl = 'https://www.facebook.com/profile.php?id=100066801256439';

const whatsappText = 'Hola, quiero recibir el catálogo de Bio Armonía';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

// LOGOS - usando los nombres exactos que tenés ahorita en public/images
const logoPrincipal = '/images/logo-principal.png';
const logoCircular = '/images/Logo Circular_claro.png';
const iconoMarca = '/images/Icono (2).png';

const collections = [
  {
    title: 'Esenciales del Jardín',
    tag: 'Cuidado diario',
    description: 'Limpieza suave, ingredientes nobles y cuidado botánico para todos los días.',
    products: ['Nube de Avena', 'Panal de Seda', 'Savia Serena', 'Brisa de Menta', 'Respiro del Monte', 'Luz de Manzanilla'],
    icon: Leaf,
    accent: 'olive',
  },
  {
    title: 'Rituales del Cuerpo',
    tag: 'Spa en casa',
    description: 'Una experiencia de bienestar, exfoliación, textura, aroma y pausa corporal.',
    products: ['Bruma de Lavanda', 'Cumbre Mineral', 'Fibra Viva', 'Carbón Noble', 'Pulso Sereno', 'Rosa de Alba'],
    icon: Droplets,
    accent: 'lavender',
  },
  {
    title: 'Cuidado Sensible',
    tag: 'Suavidad extrema',
    description: 'Una línea para pieles delicadas, bebé, piel madura y cuidado familiar.',
    products: ['Primer Abrazo', 'Abrazo Sereno', 'Nube de Cuna', 'Luna de Sábila', 'Nido de Miel'],
    icon: Baby,
    accent: 'blush',
  },
  {
    title: 'Detalles del Jardín',
    tag: 'Para regalar',
    description: 'Pequeños jabones, formas especiales, kits y detalles hechos con cuidado.',
    products: ['Flores del Jardín', 'Osito de Cuna', 'Angelito de Miel', 'Mini Abrazo', 'Caja Jardín', 'Edición de Estación'],
    icon: Flower2,
    accent: 'rose',
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

function Collections() {
  return (
    <section id="colecciones" className="section collections">
      <div className="section-title">
        <BrandLogo variant="icon" className="section-icon-logo" />

        <h2>Nuestras colecciones</h2>

        <p>
          Descubrí el mundo de Bio Armonía: líneas creadas para cada rutina, piel o momento especial.
        </p>
      </div>

      <div className="collection-grid">
        {collections.map(({ title, tag, description, products, icon: Icon, accent }) => (
          <article className={`collection-card ${accent}`} key={title}>
            <div className="collection-top">
              <div className="collection-icon">
                <Icon size={24} />
              </div>

              <span>{tag}</span>
            </div>

            <h3>{title}</h3>
            <p>{description}</p>

            <ul>
              {products.slice(0, 4).map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Packaging() {
  return (
    <section className="section packaging">
      <div className="mockup" aria-label="Mockup de empaque Bio Armonía">
        <div className="box tall">
          <BrandLogo variant="circular" className="package-logo" />
          <h4>Nube de Avena</h4>
          <p>Avena + miel</p>
          <div className="window"></div>
        </div>

        <div className="box open">
          <BrandLogo variant="icon" className="mini-logo" />
          <h4>Hecho a mano</h4>
          <p>Con ingredientes naturales y mucho cuidado.</p>
        </div>
      </div>

      <div className="packaging-copy">
        <p className="eyebrow">Aplicación de marca</p>

        <h2>Empaques que cuidan tu jabón y el planeta</h2>

        <p>
          Diseñamos empaques más limpios, prácticos y bonitos para proteger cada jabón, elevar la experiencia
          y hacerlo ideal para uso personal o regalo.
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
