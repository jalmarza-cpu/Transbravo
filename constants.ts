import { Truck, Shovel, Ruler, Hammer, FileCheck, HardHat, Clock, MapPin, Brush, FileText } from 'lucide-react';
import { ServiceItem, FeatureItem, GalleryImage } from './types';

// UPDATED CONTACT INFO - DIRECT CONNECTION
export const PHONE_NUMBER = "56958419301";
export const EMAIL_ADDRESS = "Jonathanbravovera_99@gmail.com";
export const ADDRESS = "Lo Infante, Parcela 8 – San Bernardo, RM";
export const WHATSAPP_MESSAGE = "Hola Transbravo, necesito cotizar un servicio de maquinaria.";
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// TEXTURES & STYLES
export const ASPHALT_TEXTURE_URL = "https://images.unsplash.com/photo-1533425557766-3d29a5925340?q=80&w=2000&auto=format&fit=crop";

// Industrial Styles Configuration
export const INDUSTRIAL_STYLES = {
  // Base background: Dark Asphalt with 92% opacity overlay for readability (Requested Update)
  ASPHALT_BG: {
    backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.92), rgba(5, 5, 5, 0.93)), url('${ASPHALT_TEXTURE_URL}')`,
    backgroundSize: '400px',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed' // Parallax effect
  },
  // Caterpillar Orange Gloss (FOR BUTTONS & CARDS): Gradient + Shadow + Border
  ORANGE_STEEL: {
    background: 'linear-gradient(180deg, #FF9800 0%, #FF5722 45%, #E64A19 50%, #D84315 100%)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 6px rgba(0,0,0,0.3)',
    border: '1px solid #BF360C',
    textShadow: '0 1px 0 rgba(0,0,0,0.3)'
  },
  // Caterpillar Orange Text (FOR HEADERS): Gradient only, no border/box-shadow
  ORANGE_TEXT_GRADIENT: {
    backgroundImage: 'linear-gradient(180deg, #FF9800 0%, #FF5722 45%, #E64A19 50%, #D84315 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' // Soft shadow for depth without box
  },
  // Black Chrome: Dark metallic gradient with top reflection
  BLACK_CHROME: {
    background: 'linear-gradient(180deg, #333333 0%, #1a1a1a 40%, #000000 100%)',
    borderTop: '1px solid #555555', // Chrome reflection line
    borderBottom: '1px solid #000000',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.8)'
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Retiro de Escombros',
    description: '¿Tu obra está estancada por la basura? Retiramos escombros y material inerte de inmediato con camiones tolva propios y disposición certificada.',
    icon: Truck,
    details: {
      longDescription: 'La acumulación de escombros no solo se ve mal, sino que frena el avance de tu construcción y genera multas. En Transbravo, gestionamos el retiro rápido de excedentes, demoliciones y basura con nuestra flota de camiones tolva, asegurando la disposición en vertederos autorizados.',
      specs: [
        'Retiro de escombros de construcción',
        'Limpieza de restos de demolición',
        'Disposición en botaderos autorizados',
        'Camiones Tolva de alto tonelaje'
      ],
      machinery: 'Camiones Tolva International 7400 y Freightliner FL12.'
    }
  },
  {
    id: 's2',
    title: 'Movimiento de Tierras',
    description: '¿Terreno irregular o desnivelado? Realizamos cortes, rellenos y perfilado con precisión milimétrica para cimientos sólidos.',
    icon: Shovel,
    details: {
      longDescription: 'Un terreno mal nivelado compromete la estructura de tu proyecto. Ejecutamos movimientos de tierra masivos y de precisión, garantizando las cotas exactas y la estabilidad que tu obra necesita.',
      specs: [
        'Cortes y rellenos',
        'Perfilado de taludes',
        'Mejoramiento de suelos',
        'Compactación técnica'
      ],
      machinery: 'Retroexcavadora New Holland y Minicargador Bobcat S160.'
    }
  },
  {
    id: 's3',
    title: 'Preparación de Terrenos',
    description: '¿Malezales y basura impiden construir? Limpiamos, destroncamos y nivelamos tu parcela para dejarla lista para tu proyecto.',
    icon: Ruler,
    details: {
      longDescription: 'Antes de construir, necesitas un lienzo limpio. Eliminamos capa vegetal, raíces y basura, entregándote una plataforma nivelada y lista para las fundaciones de tu casa o galpón.',
      specs: [
        'Limpieza de parcelas',
        'Nivelación láser',
        'Preparación de cancha',
        'Despeje de capa vegetal'
      ],
      machinery: 'Retroexcavadora New Holland.'
    }
  },
  {
    id: 's4',
    title: 'Excavaciones Generales',
    description: '¿Necesitas zanjas o piscinas sin errores? Excavamos con operadores expertos para evitar daños en tuberías y retrasos.',
    icon: Hammer,
    details: {
      longDescription: 'Una excavación mal hecha puede romper servicios básicos y costar millones. Nuestros operadores expertos realizan zanjas para servicios, fosas y piscinas con cuidado y precisión.',
      specs: [
        'Zanjas para servicios básicos',
        'Excavación para piscinas',
        'Fosas y cámaras',
        'Fundaciones'
      ],
      machinery: 'Retroexcavadora New Holland.'
    }
  },
  {
    id: 's5',
    title: 'Minicargador',
    description: '¿Espacios reducidos? Nuestra maquinaria compacta entra donde otros no pueden para mover áridos y limpiar.',
    icon: Truck, // Using Truck as generic heavy machinery icon, represents the Bobcat functionality
    details: {
      longDescription: 'No detengas la obra por falta de espacio. Nuestro servicio de minicargador es la solución ágil para mover materiales, limpiar y cargar en lugares estrechos o de difícil acceso.',
      specs: [
        'Trabajo en espacios reducidos',
        'Carga de material',
        'Barrido y limpieza',
        'Distribución de áridos'
      ],
      machinery: 'Minicargador Bobcat S160.'
    }
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    title: 'Maquinaria Propia',
    description: 'Sin intermediarios. Contamos con flota propia (International, New Holland, Bobcat).',
    icon: Truck,
  },
  {
    id: 'f2',
    title: 'Operadores con Experiencia',
    description: 'Personal calificado y responsable. Seguridad, precisión y seriedad en cada maniobra.',
    icon: HardHat,
  },
  {
    id: 'f3',
    title: 'Facturación Electrónica',
    description: 'Emitimos Factura Electrónica afecta al SII. Ideal para empresas y constructoras.',
    icon: FileText,
  },
  {
    id: 'f4',
    title: 'Trabajo Limpio y Ordenado',
    description: 'Mantenemos el orden en la faena. Nos preocupamos de entregar un servicio pulcro.',
    icon: Brush,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    url: '/retroexcavadora.jpg',
    alt: 'Retroexcavadora New Holland'
  },
  {
    id: 'g2',
    url: '/camion_tolva.jpg',
    alt: 'Camión Tolva International 7400'
  },
  {
    id: 'g3',
    url: '/minicargador.jpg',
    alt: 'Minicargador Bobcat S160'
  },
  {
    id: 'g4',
    // Usamos el camión tolva nuevamente para mantener consistencia y no usar imágenes externas
    url: '/camion_tolva.jpg',
    alt: 'Servicio de Retiro de Escombros'
  },
];