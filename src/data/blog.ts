export type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  dateLabel: string;
  updatedLabel?: string;
  category: string;
  readTime: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    list?: string[];
    table?: { headers: string[]; rows: string[][]; caption?: string };
  }[];
  faqs: { question: string; answer: string }[];
  relatedServices: { href: string; label: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'donde-instalar-camaras-de-seguridad-casa',
    title: '¿Dónde instalar cámaras de seguridad en una casa?',
    description: 'Conoce los mejores lugares para instalar cámaras de seguridad en tu casa: puerta principal, cochera, patio y accesos laterales.',
    datePublished: '2026-09-23',
    dateLabel: '23 de septiembre de 2026',
    category: 'Cámaras de seguridad',
    readTime: '6 min de lectura',
    intro: 'Una cámara sirve mucho más cuando está colocada en el lugar correcto. Te explicamos qué áreas conviene cubrir primero para cuidar los accesos de tu hogar sin llenar la casa de equipos innecesarios.',
    sections: [
      {
        heading: 'Primero protege las entradas, no solo el patio',
        paragraphs: [
          'Cuando alguien piensa en cámaras de seguridad, normalmente imagina una cámara apuntando a toda la calle. Puede ser útil, pero no siempre es lo más importante. Lo primero es saber por dónde puede entrar una persona a tu casa y qué zonas necesitas poder revisar si pasa algo.',
          'En la mayoría de las casas, la puerta principal, la cochera, el acceso lateral y el patio trasero son los puntos que más conviene cubrir. Desde ahí puedes ver llegadas, entregas, visitas, vehículos y movimientos cerca de las entradas.',
        ],
      },
      {
        heading: 'Puerta principal: la cámara que más información te da',
        paragraphs: [
          'La puerta principal suele ser el primer punto a proteger. Una cámara o un timbre inteligente te ayuda a saber quién llegó, cuándo dejaron un paquete y si hubo movimiento frente a la entrada. Procura que tenga una vista clara del rostro de las personas, no solamente de la banqueta.',
          'Evita colocarla demasiado alta. Si la cámara queda en el segundo piso o arriba de la marquesina, probablemente solo grabará la parte de arriba de la cabeza. Una buena altura permite identificar a la persona y ver si se acercó a la puerta.',
        ],
      },
      {
        heading: 'Cochera y portón: cuida autos, herramientas y entradas',
        paragraphs: [
          'La cochera es otro punto clave porque concentra autos, bicicletas, herramientas y el acceso desde el portón. Aquí funcionan muy bien las cámaras para exterior con visión nocturna, reflector o sirena, dependiendo de la iluminación que ya tenga tu casa.',
          'Lo ideal es que la cámara vea el portón y la zona donde quedan estacionados los autos. Si la cochera es amplia, a veces conviene usar una cámara con giro o colocar dos equipos para evitar puntos ciegos.',
        ],
      },
      {
        heading: 'Patio, pasillos y accesos laterales',
        paragraphs: [
          'Los accesos laterales y el patio trasero suelen quedar fuera de la vista de la calle. Justo por eso conviene revisarlos. Una cámara en un pasillo puede avisarte si alguien intenta entrar por una puerta de servicio, una ventana o una reja.',
          'Para exterior, revisa que el modelo tenga protección contra lluvia y polvo. También es importante comprobar que la señal Wi-Fi llegue bien, o elegir una opción con cableado si la distancia es grande.',
        ],
        list: [
          'Apunta a puertas, rejas y ventanas accesibles.',
          'Evita que árboles o lámparas tapen la vista.',
          'No dirijas la cámara directamente hacia una luz intensa.',
          'Deja la cámara fuera del alcance de la mano, pero a una altura que permita identificar rostros.',
        ],
      },
      {
        heading: '¿Cuántas cámaras necesita una casa?',
        paragraphs: [
          'No hay un número igual para todos. Una casa o departamento pequeño puede empezar con una cámara en la entrada y otra en la cochera o patio. En una casa con varios accesos, normalmente se necesita una solución más completa.',
          'Antes de instalar, en SILO revisamos los puntos que quieres proteger y te recomendamos una distribución funcional. La idea no es poner cámaras por todos lados, sino cubrir bien los lugares importantes.',
        ],
      },
    ],
    relatedServices: [
      { href: '/servicios/instalacion-de-camaras-de-seguridad', label: 'Ver cámaras de seguridad' },
      { href: '/servicios/timbres-inteligentes', label: 'Ver timbres inteligentes' },
      { href: '/servicios/instalacion-cerraduras-digitales', label: 'Conocer cerraduras digitales' },
    ],
    faqs: [
      { question: '¿Puedo instalar una cámara en la calle?', answer: 'La cámara debe enfocarse principalmente en tu propiedad y sus accesos. Puedes captar una parte de la vía pública de forma incidental, pero conviene evitar apuntar directamente a casas vecinas o espacios privados de otras personas.' },
      { question: '¿Necesito una cámara en cada habitación?', answer: 'No necesariamente. Normalmente se priorizan los accesos y áreas comunes. La distribución depende de lo que quieras cuidar y de las zonas vulnerables de tu casa.' },
    ],
  },
  {
    slug: 'camaras-alambricas-vs-inalambricas',
    title: 'Cámaras alámbricas vs. inalámbricas: diferencias, precios y cuál elegir',
    seoTitle: 'Cámaras alámbricas vs. inalámbricas: diferencias y precios | SILO',
    description: 'Compara cámaras alámbricas e inalámbricas: precio, batería, Wi-Fi, grabación y mantenimiento. Elige la mejor para puerta, cochera o patio.',
    datePublished: '2026-09-23',
    dateModified: '2026-10-19',
    dateLabel: '23 de septiembre de 2026',
    updatedLabel: 'Actualizado el 19 de octubre de 2026',
    category: 'Guías para elegir',
    readTime: '9 min de lectura',
    intro: 'Elige una cámara alámbrica si buscas alimentación continua, menos mantenimiento y la posibilidad de grabar durante periodos largos. Elige una inalámbrica si no hay una toma cercana o quieres una instalación flexible. Ambas necesitan una conexión estable para consultar video y alertas a distancia.',
    sections: [
      {
        heading: 'Comparación rápida: alámbricas vs. inalámbricas',
        paragraphs: [
          'La diferencia más importante no es la conexión a internet, sino la alimentación. En este catálogo, tanto las cámaras con cable como las de batería usan Wi-Fi para enviar alertas y permitirte consultar la aplicación.',
          'Los precios publicados con instalación incluida comienzan desde $3,399 MXN. El costo exacto depende del modelo, la resolución, las funciones y las condiciones del lugar.',
        ],
        table: {
          caption: 'Diferencias principales antes de elegir',
          headers: ['Aspecto', 'Alámbrica', 'Inalámbrica'],
          rows: [
            ['Alimentación', 'Corriente continua', 'Batería recargable o panel solar'],
            ['Instalación', 'Requiere una toma o recorrido de cable', 'Más flexible cuando no hay toma cercana'],
            ['Autonomía', 'No necesita recarga', 'Varía según movimiento, clima y configuración'],
            ['Grabación', 'Puede admitir grabación continua según modelo y almacenamiento', 'Normalmente graba eventos para ahorrar batería'],
            ['Wi-Fi', 'Necesario para funciones remotas en los modelos del catálogo', 'Necesario para funciones remotas'],
            ['Mantenimiento', 'Bajo una vez instalada', 'Requiere revisar o recargar la batería'],
            ['Precio instalado', 'Desde $3,399 MXN', 'Desde $3,899 MXN'],
          ],
        },
      },
      {
        heading: '¿Cuándo conviene una cámara alámbrica?',
        paragraphs: [
          'Una cámara con cable suele ser la mejor opción para una cochera, patio, portón o entrada con movimiento frecuente. Como recibe energía de forma continua, no tienes que desmontarla para cargarla y puede ser más adecuada si consultas el video varias veces al día.',
          'También es la primera opción cuando buscas grabación continua, siempre que el modelo y el almacenamiento la admitan. A cambio, la instalación debe planear el recorrido del cable o aprovechar una toma cercana para conservar un acabado limpio.',
        ],
        list: [
          'Hay una toma de corriente cerca o se puede hacer una instalación limpia.',
          'Quieres revisar una zona importante todos los días.',
          'Necesitas cubrir movimiento constante en cochera o acceso.',
          'Prefieres no estar pendiente de recargar baterías.',
        ],
      },
      {
        heading: '¿Cuándo conviene una cámara inalámbrica?',
        paragraphs: [
          'Una cámara con batería resuelve lugares donde no es práctico llevar corriente, como una reja alejada, un pasillo exterior, una terraza o un punto que quieras vigilar sin cable visible. Para un departamento rentado también puede reducir las adaptaciones necesarias.',
          'Necesita buena señal Wi-Fi y mantenimiento periódico. La autonomía cambia según cuánto movimiento detecta, la frecuencia con que ves el video en vivo, el uso de luces, el clima y la configuración de alertas.',
        ],
      },
      {
        heading: 'Qué elegir para puerta, cochera, patio y departamento',
        paragraphs: [
          'Para una puerta con toma cercana, una cámara alámbrica o un timbre con cable ofrece alimentación constante. Si no existe una conexión disponible, una opción con batería facilita la instalación.',
          'En una cochera o patio con movimiento frecuente recomendamos cable cuando sea posible. Para un pasillo o jardín alejado, una cámara con batería y panel solar puede ser más práctica si recibe suficiente luz. En un departamento, ambas funcionan: la decisión depende de las modificaciones permitidas y de la toma disponible.',
        ],
        list: [
          'Puerta: alámbrica si hay corriente; batería cuando buscas flexibilidad.',
          'Cochera: alámbrica para uso frecuente, reflector y vigilancia constante.',
          'Patio: alámbrica si hay toma; solar si está alejado y recibe buen sol.',
          'Departamento: batería para reducir adaptaciones o cable para olvidarte de recargas.',
        ],
      },
      {
        heading: '¿Las cámaras graban las 24 horas?',
        paragraphs: [
          'No todas las cámaras graban de forma continua. Muchas guardan clips cuando detectan movimiento; esto reduce el uso de almacenamiento y, en equipos inalámbricos, ayuda a conservar la batería. Algunos modelos alámbricos admiten grabación continua con una memoria, dispositivo o plan compatible.',
          'Antes de comprar, define si necesitas evidencia de cada evento o un registro permanente. Revisamos contigo la función disponible y el costo de almacenamiento para evitar asumir que cualquier modelo graba 24/7.',
        ],
      },
      {
        heading: '¿Qué pasa si se va la luz o el internet?',
        paragraphs: [
          'Si se va la luz, una cámara alámbrica se apaga salvo que cuente con respaldo eléctrico. Una cámara con batería puede seguir encendida, pero el módem también necesita energía para que recibas alertas o veas el video desde fuera de casa.',
          'Si solo falla el internet, algunos modelos pueden seguir guardando eventos localmente en una tarjeta o dispositivo compatible. La consulta remota y las notificaciones se reanudan cuando vuelve la conexión. El comportamiento exacto depende del equipo y del almacenamiento configurado.',
        ],
      },
    ],
    relatedServices: [
      { href: '/servicios/instalacion-de-camaras-de-seguridad#equipos-disponibles', label: 'Comparar cámaras alámbricas, de batería y solares' },
      { href: '/blog/cuanto-cuesta-instalar-camaras-seguridad-cdmx-edomex', label: 'Consultar precios de instalación' },
      { href: '/promociones', label: 'Ver promociones con instalación' },
    ],
    faqs: [
      { question: '¿Qué es mejor, una cámara alámbrica o inalámbrica?', answer: 'La alámbrica conviene para vigilancia frecuente, alimentación continua y menor mantenimiento. La inalámbrica conviene cuando no hay una toma cercana o quieres una instalación flexible. La mejor depende del espacio y del tipo de grabación que necesitas.' },
      { question: '¿Las cámaras inalámbricas necesitan Wi-Fi?', answer: 'Sí. El Wi-Fi permite ver video en vivo, recibir alertas y consultar grabaciones desde la aplicación. Antes de instalar revisamos que la señal llegue bien al punto elegido.' },
      { question: '¿Las cámaras de seguridad graban las 24 horas?', answer: 'Depende del modelo y del almacenamiento. Muchas cámaras guardan eventos de movimiento, mientras algunos equipos alámbricos admiten grabación continua con una memoria, dispositivo o plan compatible.' },
      { question: '¿Qué pasa si se va la luz o el internet?', answer: 'Una cámara con batería puede seguir encendida durante un corte de luz, pero necesitas energía en el módem para verla a distancia. Si falla el internet, algunos modelos continúan guardando eventos localmente según su configuración.' },
      { question: '¿Cuánto cuesta instalar una cámara alámbrica o inalámbrica?', answer: 'Las opciones alámbricas con instalación publicada comienzan desde $3,399 MXN y las inalámbricas desde $3,899 MXN. El precio cambia según el modelo, el montaje, la resolución y los accesorios.' },
    ],
  },
  {
    slug: 'cuanto-cuesta-instalar-camaras-seguridad-cdmx-edomex',
    title: '¿Cuánto cuesta instalar cámaras de seguridad en CDMX y Edomex?',
    seoTitle: 'Precio de instalar cámaras de seguridad en CDMX y Edomex | SILO',
    description: 'Instalar una cámara de seguridad cuesta desde $3,399 MXN. Compara precios para 1, 2 y 4 cámaras, qué incluyen y qué puede aumentar el costo.',
    datePublished: '2026-09-23',
    dateModified: '2026-10-19',
    dateLabel: '23 de septiembre de 2026',
    updatedLabel: 'Actualizado el 19 de octubre de 2026',
    category: 'Precios e instalación',
    readTime: '8 min de lectura',
    intro: 'Instalar una cámara de seguridad con SILO cuesta desde $3,399 MXN e incluye equipo, instalación, material, almacenamiento, configuración en dispositivos móviles y un año de garantía por escrito. El precio final depende del modelo, la cantidad de cámaras y el lugar donde se instalarán.',
    sections: [
      {
        heading: 'Precios de instalación para 1, 2 y 4 cámaras',
        paragraphs: [
          'Estos precios son referencias de los equipos y paquetes publicados actualmente por SILO. La cotización final se confirma después de revisar el espacio, la alimentación disponible y la cobertura que necesitas.',
          'La manera correcta de comparar opciones es revisar el total instalado. Un equipo aparentemente barato puede terminar costando más si después debes sumar montaje, material, configuración o almacenamiento.',
        ],
        table: {
          caption: 'Precios de referencia con instalación incluida',
          headers: ['Cantidad', 'Precio de referencia', 'Opción publicada'],
          rows: [
            ['1 cámara', 'Desde $3,399 MXN', 'Interior o exterior, según modelo'],
            ['2 cámaras', 'Desde $5,499 MXN', 'Paquetes para exterior o interior + exterior'],
            ['4 cámaras', 'Cotización personalizada', 'Diseño según accesos, distancias y cobertura'],
          ],
        },
      },
      {
        heading: '¿Qué incluye el precio de instalación?',
        paragraphs: [
          'Cuando cotizas una cámara para tu casa, pregunta por el costo total instalado. Así evitas sorpresas y sabes qué estás comprando. En los equipos con precio publicado de SILO, el total incluye el equipo, instalación, material, almacenamiento, configuración en dispositivos móviles y un año de garantía por escrito.',
          'Al terminar, dejamos la cámara funcionando y revisamos contigo lo básico de la aplicación: video en vivo, alertas y consulta de eventos. No se trata de colgar el equipo y ya; se trata de que puedas usarlo.',
        ],
        list: [
          'Cámara de seguridad elegida para tu espacio.',
          'Montaje y material necesario para la instalación.',
          'Configuración en dispositivos móviles compatibles.',
          'Memoria o almacenamiento en la nube, según el equipo.',
          'Un año de garantía por escrito.',
        ],
      },
      {
        heading: '¿Qué puede aumentar el costo?',
        paragraphs: [
          'El tipo de cámara es uno de los factores principales. Un equipo para interior no cuesta lo mismo que una cámara exterior con reflector, sirena, batería o panel solar. La resolución y la marca también influyen.',
          'La instalación también cambia según el lugar. No es igual colocar una cámara junto a una toma de corriente que llevar cable hasta un segundo piso, una fachada o una cochera amplia. Los soportes especiales, recorridos largos, trabajos en altura y accesorios adicionales pueden modificar la cotización.',
        ],
      },
      {
        heading: '¿Qué cámara conviene para cada zona?',
        paragraphs: [
          'Para una puerta principal suele funcionar una cámara compacta o un timbre inteligente que permita identificar visitas y entregas. En una cochera conviene priorizar visión nocturna, buen ángulo y, si hace falta, reflector o sirena.',
          'En patios y accesos laterales recomendamos equipos para exterior resistentes a la intemperie. Si no hay una toma cercana, una cámara con batería o panel solar puede evitar cableado; si buscas vigilancia continua, una opción alámbrica suele ser más adecuada.',
        ],
        list: [
          'Puerta principal: identifica personas, paquetes y visitas.',
          'Cochera: cubre vehículos, portón y movimiento nocturno.',
          'Patio: elige protección para exterior y una vista amplia.',
          'Acceso lateral: prioriza alertas, visión nocturna y buena señal Wi-Fi.',
        ],
      },
      {
        heading: '¿Conviene comprar la cámara por separado?',
        paragraphs: [
          'Puedes hacerlo, pero vale la pena considerar compatibilidad, garantía y el tipo de almacenamiento. Hay muchos modelos parecidos y no todos sirven para el mismo caso. Una cámara de interior en un patio, por ejemplo, puede fallar por lluvia o por falta de alcance Wi-Fi.',
          'Cuando eliges uno de nuestros equipos publicados, el precio ya integra la instalación y la configuración. Si ya compraste una cámara, primero debemos revisar el modelo, el estado del equipo y si es compatible con el espacio y la red de tu casa.',
        ],
      },
      {
        heading: '¿Cuánto cobran por instalar cámaras de seguridad?',
        paragraphs: [
          'El precio publicado comienza en $3,399 MXN para una cámara y en $5,499 MXN para un paquete de dos. Para darte una cifra exacta necesitamos saber cuántas zonas quieres cubrir y si se trata de puerta principal, cochera, patio, interior o acceso lateral.',
          'Atendemos instalaciones en Ciudad de México y Estado de México. Puedes enviarnos fotos por WhatsApp para recibir una recomendación inicial y comparar el catálogo o las promociones vigentes antes de decidir.',
        ],
      },
    ],
    relatedServices: [
      { href: '/servicios/instalacion-de-camaras-de-seguridad', label: 'Ver catálogo de cámaras' },
      { href: '/promociones', label: 'Comparar promociones vigentes' },
      { href: '/zonas/toluca', label: 'Consultar cobertura en Toluca' },
    ],
    faqs: [
      { question: '¿Cuánto cuesta instalar una cámara de seguridad?', answer: 'El precio publicado comienza desde $3,399 MXN e incluye equipo, instalación, material, almacenamiento, configuración en dispositivos móviles y un año de garantía por escrito.' },
      { question: '¿Cuánto cuesta instalar dos cámaras de seguridad?', answer: 'Los paquetes publicados de dos cámaras comienzan desde $5,499 MXN con instalación incluida. El precio cambia según la resolución, el uso interior o exterior y las condiciones del lugar.' },
      { question: '¿El precio incluye configuración en el celular?', answer: 'Sí. Configuramos la aplicación en tus dispositivos móviles compatibles y dejamos el sistema listo para ver video, recibir alertas y consultar eventos.' },
      { question: '¿Qué puede aumentar el precio de instalación?', answer: 'El modelo de cámara, el número de equipos, los recorridos de cable, la altura, los soportes especiales, el almacenamiento y otros accesorios pueden modificar la cotización.' },
      { question: '¿Puedo comprar la cámara por separado?', answer: 'Sí, pero antes de instalar debemos revisar el modelo, su estado, la compatibilidad con tu red y si es adecuado para interior o exterior. Los equipos publicados por SILO ya incluyen instalación y garantía.' },
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
