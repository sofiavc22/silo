export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateLabel: string;
  category: string;
  readTime: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
  faqs: { question: string; answer: string }[];
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
    faqs: [
      { question: '¿Las cámaras inalámbricas necesitan Wi-Fi?', answer: 'Sí. El Wi-Fi permite ver video en vivo, recibir alertas y consultar grabaciones desde la aplicación. Antes de instalar revisamos que la señal llegue bien al punto elegido.' },
      { question: '¿Qué pasa si se va la luz?', answer: 'Depende del modelo y de la red Wi-Fi. Las cámaras con batería pueden seguir encendidas, pero para enviar alertas o verlas a distancia también necesitas que el internet funcione.' },
    ],
  },
  {
    slug: 'cuanto-cuesta-instalar-camaras-seguridad-cdmx-edomex',
    title: '¿Cuánto cuesta instalar cámaras de seguridad en CDMX y Estado de México?',
    description: 'Conoce qué incluye una instalación de cámaras de seguridad y de qué depende el precio en CDMX y Estado de México.',
    datePublished: '2026-09-23',
    dateLabel: '23 de septiembre de 2026',
    category: 'Precios e instalación',
    readTime: '6 min de lectura',
    intro: 'El precio de instalar una cámara no es solamente el equipo. Para que el sistema funcione bien, hay que considerar el montaje, materiales, configuración y el tipo de almacenamiento que necesita tu casa.',
    sections: [
      {
        heading: '¿Desde cuánto cuesta instalar una cámara?',
        paragraphs: [
          'En SILO, la instalación de una cámara comienza desde $3,000 MXN, con instalación incluida. El total puede cambiar según el modelo que elijas, la zona donde se colocará y si necesita cableado, soporte, memoria, suscripción de nube o accesorios adicionales.',
          'La manera más clara de comparar opciones es revisar qué incluye el precio. Un equipo barato puede terminar costando más si después hay que sumar instalación, material, configuración o almacenamiento.',
        ],
      },
      {
        heading: 'Qué debe incluir una instalación completa',
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
        heading: 'Qué factores cambian el precio',
        paragraphs: [
          'El tipo de cámara es uno de los factores principales. Un equipo para interior no cuesta lo mismo que una cámara exterior con reflector, sirena, batería o panel solar. La resolución y la marca también influyen.',
          'La instalación también cambia según el lugar. No es igual poner una cámara junto a una toma de corriente que llevar cable hasta un segundo piso, una fachada o una cochera amplia. Si necesitas varias cámaras, podemos diseñar una solución completa y ordenada.',
        ],
      },
      {
        heading: '¿Conviene comprar la cámara por tu cuenta?',
        paragraphs: [
          'Puedes hacerlo, pero vale la pena considerar compatibilidad, garantía y el tipo de almacenamiento. Hay muchos modelos parecidos y no todos sirven para el mismo caso. Una cámara de interior en un patio, por ejemplo, puede fallar por lluvia o por falta de alcance Wi-Fi.',
          'Nosotros seleccionamos y probamos equipos duraderos de TP-Link, Google Nest y Amazon Ring. Te recomendamos el que tiene más sentido para tu casa, no solamente el que se ve mejor en una foto.',
        ],
      },
      {
        heading: 'Cotiza con una recomendación para tu espacio',
        paragraphs: [
          'Para darte un precio exacto, necesitamos saber qué áreas quieres cubrir y si ya tienes una idea del equipo. Puedes enviarnos fotos o explicarnos si se trata de puerta principal, cochera, patio o acceso lateral.',
          'Atendemos instalaciones en Ciudad de México y Estado de México. Te orientamos desde el inicio para que elijas una opción que cuide bien tu hogar y se ajuste a lo que necesitas.',
        ],
      },
    ],
    faqs: [
      { question: '¿El precio incluye configuración en el celular?', answer: 'Sí. Configuramos la aplicación en tus dispositivos móviles compatibles y dejamos el sistema listo para usarse.' },
      { question: '¿Puedo instalar más de una cámara?', answer: 'Sí. Podemos cotizar una sola cámara o un sistema completo para cubrir puerta, cochera, patio y otros accesos.' },
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
