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
    title: 'Cámaras alámbricas vs. inalámbricas: ¿cuál conviene para tu hogar?',
    description: 'Te ayudamos a elegir entre una cámara alámbrica o inalámbrica según la zona, alimentación, grabación y tipo de instalación.',
    datePublished: '2026-09-23',
    dateLabel: '23 de septiembre de 2026',
    category: 'Guías para elegir',
    readTime: '7 min de lectura',
    intro: 'No se trata de que una sea mejor que la otra. Una cámara alámbrica o inalámbrica puede ser la opción correcta según el lugar donde la vas a instalar y lo que esperas de ella.',
    sections: [
      {
        heading: 'La diferencia principal: alimentación y forma de instalación',
        paragraphs: [
          'Una cámara alámbrica se conecta a una toma de corriente o se instala con cableado, según el modelo. Esto le permite mantenerse encendida de manera continua sin depender de que recargues una batería. Es muy buena para puntos fijos como cochera, entrada o patio.',
          'Una cámara inalámbrica normalmente se conecta al Wi-Fi y se alimenta con batería. Es práctica cuando no hay una toma de corriente cerca o cuando quieres evitar una instalación con cable visible. Algunas también pueden complementarse con panel solar.',
        ],
      },
      {
        heading: 'Cuándo conviene una cámara alámbrica',
        paragraphs: [
          'Una cámara con cable suele ser la mejor opción para zonas donde hay movimiento frecuente o donde quieres una vigilancia constante. Al no depender de batería, requiere menos atención en el día a día.',
          'También es recomendable si quieres grabación continua, siempre que el modelo y el almacenamiento elegido lo permitan. Por eso se usa mucho en cocheras, negocios pequeños, portones y patios amplios.',
        ],
        list: [
          'Hay una toma de corriente cerca o se puede hacer una instalación limpia.',
          'Quieres revisar una zona importante todos los días.',
          'Necesitas cubrir movimiento constante en cochera o acceso.',
          'Prefieres no estar pendiente de recargar baterías.',
        ],
      },
      {
        heading: 'Cuándo conviene una cámara inalámbrica',
        paragraphs: [
          'Una cámara con batería puede resolver muy bien lugares donde no es práctico llevar cable. Por ejemplo, una reja alejada, un pasillo exterior, una terraza o un punto temporal que quieres vigilar.',
          'Su instalación puede ser más rápida, pero necesita buena señal Wi-Fi. La batería dura más o menos tiempo según el movimiento que detecte, el uso de luces, el clima y la configuración. No es algo malo; simplemente es importante elegirla para el lugar correcto.',
        ],
      },
      {
        heading: '¿Y las cámaras solares?',
        paragraphs: [
          'Las cámaras solares son inalámbricas, pero reciben apoyo de un panel solar para mantener la batería cargada. Funcionan muy bien en exteriores con varias horas de sol y son una opción cómoda para espacios alejados de una toma eléctrica.',
          'Antes de elegir una, hay que revisar que el panel reciba luz suficiente y que la cámara tenga una conexión estable. Si el área es muy sombreada, quizá convenga otra alternativa.',
        ],
      },
      {
        heading: 'La mejor cámara es la que se adapta a tu casa',
        paragraphs: [
          'Además de la alimentación, importa la resolución, el ángulo, la visión nocturna, el audio bidireccional y el tipo de almacenamiento. Una cámara 2K puede darte mayor detalle; un reflector puede ayudarte en una cochera oscura; y el audio puede ser útil para hablar con una visita.',
          'En SILO te ayudamos a elegir equipos Ring, Google Nest o TP-Link según el espacio. Instalamos, configuramos la aplicación en tus dispositivos y dejamos todo probado para que lo uses desde el primer día.',
        ],
      },
    ],
    relatedServices: [
      { href: '/servicios/instalacion-de-camaras-de-seguridad', label: 'Comparar cámaras con instalación' },
      { href: '/servicios/automatizacion-residencial', label: 'Explorar casa inteligente' },
      { href: '/servicios/timbres-inteligentes', label: 'Ver timbres inteligentes' },
    ],
    faqs: [
      { question: '¿Las cámaras inalámbricas necesitan Wi-Fi?', answer: 'Sí. El Wi-Fi permite ver video en vivo, recibir alertas y consultar grabaciones desde la aplicación. Antes de instalar revisamos que la señal llegue bien al punto elegido.' },
      { question: '¿Qué pasa si se va la luz?', answer: 'Depende del modelo y de la red Wi-Fi. Las cámaras con batería pueden seguir encendidas, pero para enviar alertas o verlas a distancia también necesitas que el internet funcione.' },
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
