const skillsData = [
  {
    "name": "Dureza",
    "description": "Proporciona un AC base de 8, debido a dureza natural.",
    "level": "1,5",
    "class": "General"
  },
  {
    "name": "Dado arriba",
    "description": "Sube una categoría el dado de golpe del personaje. (d6 para hechiceros, d8 para bribones, d10 para sacerdotes, d12 para luchadores y d20 para bárbaros).",
    "level": "1,5",
    "class": "General"
  },
  {
    "name": "GACO mejorado",
    "description": "Mejora el GACO del personaje en una categoría. (GACO de bribón para hechiceros, GACO de sacerdote para bribones, GACO de guerrero para sacerdote).",
    "level": "1,5",
    "class": "General"
  },
  {
    "name": "Arma favorita",
    "description": "Proporciona bonificación de +1 al ataque con un tipo de arma específica, además permite especializarse en el arma pagando el coste correspondiente de pericias en armas.",
    "level": "1,5",
    "class": "General"
  },
  {
    "name": "+ 1 HP por nivel",
    "description": "Otorga una bonificación de +1 punto de golpe por cada nivel ganado, sin límites.",
    "level": "1,5",
    "class": "General"
  },
  {
    "name": "+5 % xp",
    "description": "Bonifica un cinco por ciento a la experiencia total ganada, acumulable con cualquier otra bonificación.",
    "level": "1,5",
    "class": "General"
  },
  {
    "name": "Movimiento mejorado",
    "description": "Mejora el movimiento base en un 50 % (MOV 9 para base 6, MOV 18 para base 12, MOV 27 para base 18, etc...).",
    "level": "1,5",
    "class": "General"
  },
  {
    "name": "+1 a un grupo de salvaciones",
    "description": "Proporciona una bonificación permanente de +1 a un grupo específico de salvaciones (paralización, veneno y muerte mágica/ cetro, vara y varita/ polimorfización y petrificación/ arma de aliento/ conjuros).",
    "level": "1,5",
    "class": "General"
  },
  {
    "name": "Pericia bonificada",
    "description": "Otorga una pericia, con una bonificación de +2 a su chequeo.",
    "level": "1,5",
    "class": "General"
  },
  {
    "name": "Grupo de pericias Extras",
    "description": "Otorga la capacidad de tomar pericias de otra categoría sin coste extra de Slots",
    "level": "1,5",
    "class": ""
  },
  {
    "name": "2 % MR/Nivel",
    "description": "Proporciona dos por ciento de resistencia mágica por nivel del luchador.",
    "level": "1,5",
    "class": "Luchadores"
  },
  {
    "name": "Habilidad de ladrón",
    "description": "Permite al luchador utilizar una habilidad especial de bribón, con una base igual a la del bribón a nivel uno y ajustada por destreza y cualquier otra circunstancia (como armadura).",
    "level": "1,5",
    "class": "Luchadores"
  },
  {
    "name": "Esfera bonificada",
    "description": "Regala una esfera menor adicional a las permitidas al sacerdote, o sube a cuatro el nivel máximo de conjuros para cualquier esfera menor ya permitida.",
    "level": "1,5",
    "class": "Sacerdotes"
  },
  {
    "name": "Conjuro de hechicero",
    "description": "Permite al sacerdote lanzar un conjuro de hechicero de nivel uno como habilidad especial, una vez al día.",
    "level": "1,5",
    "class": "Sacerdotes"
  },
  {
    "name": "Imponer las manos",
    "description": "Como paladín, cura dos puntos de golpe por nivel del sacerdote, una vez al día.",
    "level": "1,5",
    "class": "Sacerdotes"
  },
  {
    "name": "Bonificación a las salvaciones",
    "description": "Otorga una bonificación de +2 contra cualquier conjuro sacerdotal.",
    "level": "1,5",
    "class": "Sacerdotes"
  },
  {
    "name": "Progresión mejorada",
    "description": "Proporciona un conjuro extra de nivel uno, dos y tres al día, si el lanzador de conjuros es del nivel suficiente para poder lanzar conjuros de ese nivel.",
    "level": "1,5",
    "class": "Sacerdotes, Hechiceros"
  },
  {
    "name": "Conjuro de sacerdote",
    "description": "Permita al hechicero lanzar un conjuro de sacerdote de nivel uno como habilidad especial, una vez al día.",
    "level": "1,5",
    "class": "Hechiceros"
  },
  {
    "name": "Bonificación a las salvaciones",
    "description": "Otorga una bonificación de +2 contra cualquier conjuro de hechicero.",
    "level": "1,5",
    "class": "Hechiceros"
  },
  {
    "name": "Escuela favorita",
    "description": "Penaliza en uno las tiradas de salvación contra los conjuros lanzados por el hechicero en la escuela de su elección.",
    "level": "1,5",
    "class": "Hechiceros"
  },
  {
    "name": "Habilidad de experto",
    "description": "Permite al bribón utilizar una de sus habilidades de nivel veinte desde nivel uno (o cinco), dividiendo sus puntos de habilidad entre esta y todas sus habilidades permitidas.",
    "level": "1,5",
    "class": "Bribones"
  },
  {
    "name": "Progresión de pericias mejorada",
    "description": "Mejora la progresión de pericias en no armas en una cada tres niveles.",
    "level": "1,5",
    "class": "Bribones"
  },
  {
    "name": "Sutileza de armas",
    "description": "Permite al bribón utilizar sus bonificaciones de destreza en lugar de fuerza, para ajuste al ataque y daño en un arma.",
    "level": "1,5",
    "class": "Bribones"
  },
  {
    "name": "Sigilo",
    "description": "Bonifica 5% a esconderse en sombras y moverse en silencio, +2 a las posibilidades de sorprender.",
    "level": "1,5",
    "class": "Bribones"
  },
  {
    "name": "Enfocar disciplina",
    "description": "Otorga una bonificación de +1 a los chequeos de poder en la disciplina principal del psiónico.",
    "level": "1,5",
    "class": "Psiónicos"
  },
  {
    "name": "Aumento de PSP's",
    "description": "Aumenta los puntos de fuerza psiónica ganados en uno por nivel.",
    "level": "1,5",
    "class": "Psiónicos"
  },
  {
    "name": "Intuir puntuación",
    "description": "Permite seleccionar un número en el dado d20, entre uno y la puntuación de poder de la disciplina a intentar. Si adivina, el poder es gratis (en su coste inicial), o tiene efecto de Power Score.",
    "level": "1,5",
    "class": "Psiónicos"
  },
  {
    "name": "Maestría en pericia",
    "description": "Una de las pericias del personaje puede ser usada una vez al día sin posibilidad de fallo.",
    "level": 10,
    "class": "General"
  },
  {
    "name": "Atributo mejorado",
    "description": "Aumenta en un punto (sin límites) al atributo principal el personaje.",
    "level": 10,
    "class": "General"
  },
  {
    "name": "Crítico mejorado",
    "description": "Reduce en dos el número necesario para conectar un golpe crítico con un arma en específico.",
    "level": 10,
    "class": "Luchadores"
  },
  {
    "name": "HP mejorado",
    "description": "Permite al luchador ganar bonificaciones por constitución sin límites.",
    "level": 10,
    "class": "Luchadores"
  },
  {
    "name": "Objeto bendito",
    "description": "Otorga al paladín un objeto mágico bendito (y beneficioso), a discreción del DM.",
    "level": 10,
    "class": "Paladines"
  },
  {
    "name": "Comunicar con la naturaleza",
    "description": "Permite al guardabosques hablar y comunicarse con la flora y fauna en su terreno preferido.",
    "level": 10,
    "class": "Guardabosques"
  },
  {
    "name": "Ataque fluido",
    "description": "Permite moverse la mitad del movimiento permitido, atacar, y moverse la otra mitad de distancia, sin permitir ataques de oportunidad.",
    "level": 10,
    "class": "Luchadores, Bribones"
  },
  {
    "name": "Hechizo superior",
    "description": "Permite al sacerdote lanzar un conjuro como si fuera un nivel más alto, una vez al día.",
    "level": 10,
    "class": "Sacerdotes"
  },
  {
    "name": "Recuperación de hechizo",
    "description": "Permite al sacerdote recuperar un hechizo de nivel 1-6 ya lanzado, una vez al día.",
    "level": 10,
    "class": "Sacerdotes"
  },
  {
    "name": "Inmunidad contra conjuro",
    "description": "Otorga al sacerdote inmunidad completa contra un conjuro de sacerdote de nivel 1-3.",
    "level": 10,
    "class": "Sacerdotes"
  },
  {
    "name": "Inmunidad contra conjuro",
    "description": "Otorga al hechicero inmunidad completa contra un conjuro de hechicero de nivel 1-3.",
    "level": 10,
    "class": "Hechiceros"
  },
  {
    "name": "Potenciar hechizos",
    "description": "Permite al lanzador de conjuros lanzar un conjuro de nivel 1-3 sin límite de dados, una vez al día.",
    "level": 10,
    "class": "Hechiceros, Sacerdotes"
  },
  {
    "name": "Maximizar hechizos",
    "description": "Permite al lanzador de conjuros lanzar un conjuro de nivel 1-3 a su máximo poder (dados completos, una vez al día.",
    "level": 10,
    "class": "Hechiceros, Sacerdotes"
  },
  {
    "name": "Habilidad tipo conjuro",
    "description": "Permite al lanzador de conjuros lanzar un conjuro de hechicero o sacerdote de nivel 1-3 como habilidad especial, una vez al día.",
    "level": 10,
    "class": "Hechiceros, Sacerdotes"
  },
  {
    "name": "Experto en X",
    "description": "Otorga una bonificación de 10 % a las habilidades especiales de bribón, o +2 a pericias en un terreno específico.",
    "level": 10,
    "class": "Bribones"
  },
  {
    "name": "GACO experto",
    "description": "Otorga al bribón GACO de guerrero en un arma específica.",
    "level": 10,
    "class": "Bribones"
  },
  {
    "name": "Habilidad mejorada",
    "description": "Permite al bardo utilizar una habilidad de bribón, además de las suyas, con una base igual a la de bribón a nivel uno.",
    "level": 10,
    "class": "Bardos"
  },
  {
    "name": "Devoción favorita",
    "description": "Permite al psiónico, al utilizar un poder menor (devoción), hacerlo con el efecto de puntuación de poder.",
    "level": 10,
    "class": "Psiónicos"
  },
  {
    "name": "Furia de batalla",
    "description": "El luchador gana +2 a fuerza durante un turno por nivel, una vez al día.",
    "level": 15,
    "class": "Luchadores"
  },
  {
    "name": "Ataque sin límites",
    "description": "El luchador es capaz de atacar en cualquier dirección, incluso atrás, sin penalizaciones.",
    "level": 15,
    "class": "Luchadores"
  },
  {
    "name": "Duelista experto",
    "description": "El luchador gana una bonificación de +2 al AC, +2 al GACO y +2 al daño en batalla. (Editado. Antes defensa de batalla, pero ese es skill de nivel 20)",
    "level": 15,
    "class": "Luchadores"
  },
  {
    "name": "Cazamonstruos",
    "description": "El luchador gana una bonificación de +2 al AC, +2 al GACO y +2 al daño contra monstruos.",
    "level": 15,
    "class": "Luchadores"
  },
  {
    "name": "Intuición de conjuros",
    "description": "El hechicero identifica qué conjuros que serán lanzados desde el inicio del round.",
    "level": 15,
    "class": "Hechiceros"
  },
  {
    "name": "Conocimiento arcano",
    "description": "El hechicero obtiene un conocimiento superior cuando utiliza sus pericias de conocimiento.",
    "level": 15,
    "class": "Hechiceros"
  },
  {
    "name": "Fortaleza mágica",
    "description": "El hechicero es capaz de resistir incluso hechizos que no permiten salvación. Obtiene una salvación contra conjuros con una penalización de -1 por cada nivel del hechizo lanzado.",
    "level": 15,
    "class": "Hechiceros"
  },
  {
    "name": "Cantrip ilimitado",
    "description": "El hechicero es capaz de lanzar conjuros mágicos menores (cantrips), las veces que desee.",
    "level": 15,
    "class": "Hechiceros"
  },
  {
    "name": "Fama",
    "description": "El sacerdote es reconocido y admirado. Gana la atención y favor de las multitudes.",
    "level": 15,
    "class": "Sacerdotes"
  },
  {
    "name": "Milagro",
    "description": "El sacerdote es capaz de lanzar un conjuro al día de efectos similares al deseo de hechicero.",
    "level": 15,
    "class": "Sacerdotes"
  },
  {
    "name": "Invocar avatar",
    "description": "El sacerdote puede llamar al avatar de su deidad, quien siempre acude. Ayuda de la forma más adecuada al momento.",
    "level": 15,
    "class": "Sacerdotes"
  },
  {
    "name": "Evangelizar",
    "description": "El sacerdote tiene facilidad de palabra y convencimiento, y puede cambiar la religión y la forma de pensar de las masas.",
    "level": 15,
    "class": "Sacerdotes"
  },
  {
    "name": "Carterista experto",
    "description": "El ladrón es capaz de robar dos veces con un sólo intento, o de seleccionar el mejor objeto a robar.",
    "level": 15,
    "class": "Bribones"
  },
  {
    "name": "Experto en venenos",
    "description": "El ladrón es un experto conocedor en venenos, tanto en su fabricación y forma de adquisición, así como en su uso.",
    "level": 15,
    "class": "Bribones"
  },
  {
    "name": "Infalibilidad",
    "description": "Proporciona al ladrón un éxito automático en cualquier acción, una vez al día.",
    "level": 15,
    "class": "Bribones"
  },
  {
    "name": "Dungeoner",
    "description": "El ladrón es experto en dungeons, puede encontrar puertas instintivamente, posee un mapa interno, y puede negar un fallo crítico en una habilidad de bribón si supera una salvación contra paralización (con ajuste de reacción por destreza). Si logra, obtiene una segunda oportunidad.",
    "level": 15,
    "class": "Bribones"
  },
  {
    "name": "Instinto chismoso",
    "description": "El bardo posee una capacidad natural para escuchar rumores y noticias, y conocer las mejores fuentes.",
    "level": 15,
    "class": "Bardos"
  },
  {
    "name": "Graciosa huida",
    "description": "El bardo es capaz de escapar de una pelea o situación peligrosa (no salvaciones) sin permitir ataques de oportunidad.",
    "level": 15,
    "class": "Bardos"
  },
  {
    "name": "Performance",
    "description": "Permite al bardo utilizar sus habilidades artísticas y de espectáculo automáticamente, sin posibilidad de fallo.",
    "level": 15,
    "class": "Bardos"
  },
  {
    "name": "Aristócrata",
    "description": "El bardo es aceptado y bien visto en los círculos de poder de su lugar natal, permitiéndole conocer detalles importantes (y fidedignos) de ese lugar.",
    "level": 15,
    "class": "Bardos"
  },
  {
    "name": "Maestro psiónico",
    "description": "Permite al psiónico adiestrar a 1d4 de sus seguidores como alumnos preferidos, y uno de ellos obtiene bonificaciones para creación de personaje iguales a las del hijo de un héroe.",
    "level": 15,
    "class": "Psiónicos"
  },
  {
    "name": "Psiónico persuasivo",
    "description": "Otorga al psiónico una una personalidad persuasiva, capaz de dar órdenes directas a criaturas de menos de cinco dados de golpe.",
    "level": 15,
    "class": "Psiónicos"
  },
  {
    "name": "Corromperse al lado oscuro/Seguir la fuerza",
    "description": "Cuando el psiónico con esta habilidad cambia de alineamiento a malvado, o viceversa, no sufre penalizaciones a su experiencia. Puede hacerlo un máximo de dos veces.",
    "level": 15,
    "class": "Psiónicos"
  },
  {
    "name": "Defensor experto",
    "description": "Otorga una bonificación natural de +5 a la defensa, hasta un máximo de AC -12.",
    "level": 20,
    "class": "Luchadores"
  },
  {
    "name": "Ataque preciso",
    "description": "Permite al luchador bajar su GACO hasta 0 al nivel 20, y -1 al nivel 21.",
    "level": 20,
    "class": "Luchadores"
  },
  {
    "name": "Progresión mejorada II",
    "description": "Bonifica al hechicero un conjuro de nivel 4, 5 y 6 al día.",
    "level": 20,
    "class": "Hechiceros"
  },
  {
    "name": "Elucubración",
    "description": "Permite al hechicero intercambiar un hechizo de nivel 6 o menor de entre sus hechizos memorizados por otro de su libro de conjuros del mismo nivel.",
    "level": 20,
    "class": "Hechiceros"
  },
  {
    "name": "Dividir progresión",
    "description": "Permite al sacerdote dividir uno de sus conjuros memorizados en una progresión de conjuros menores que sumen el mismo nivel.",
    "level": 20,
    "class": "Sacerdotes"
  },
  {
    "name": "Elucubración",
    "description": "Permite al saccerdote intercambiar un hechizo de nivel 6 o menor de entre sus hechizos memorizados por otro de su libro de conjuros del mismo nivel.",
    "level": 20,
    "class": "Sacerdotes"
  },
  {
    "name": "Golpe maestro",
    "description": "Asegura al bribón asestar un robo seguro (tesoro menor), una vez al mes.",
    "level": 20,
    "class": "Bribones"
  },
  {
    "name": "Cubrir el rastro",
    "description": "Permite al bribón borrar sus huellas y rastros después de un escape o búsqueda, reduciendo a cero las pistas para encontrarlo.",
    "level": 20,
    "class": "Bribones"
  },
  {
    "name": "Encontrar la verdad",
    "description": "Permite al bardo conocer la verdad y mentira en las leyendas e historias.",
    "level": 20,
    "class": "Bardos"
  },
  {
    "name": "Escape mejorado",
    "description": "Permite al bardo y su grupo escapar de una pelea o peligro (no salvaciones), sin permitir ataques de oportunidad.",
    "level": 20,
    "class": "Bardos"
  },
  {
    "name": "Manipulación de poder mejorada",
    "description": "Permite al psiónico manipular en un punto los chequeos de poder dentro de su disciplina primaria, excepto fallos críticos (20 y 1).",
    "level": 20,
    "class": "Psiónicos"
  },
  {
    "name": "Flujo de fuerza",
    "description": "Permite al psiónico capturar su propia esencia al morir, no dejando un cuerpo físico, y manifestarse en espíritu (forma holográfica).",
    "level": 20,
    "class": "Psiónicos"
  },
  {
    "name": "Maestro estratega",
    "description": "Otorga al luchador una visión perfecta de la batalla y sus alrededores, como número y posición de las fuerzas y los enemigos, rutas de escape, posibles emboscadas, etc.",
    "level": 25,
    "class": "Luchadores"
  },
  {
    "name": "Ayuda divina",
    "description": "Otorga al sacerdote una comunicación directa con su deidad, quien le ayuda y aconseja de forma clara.",
    "level": 25,
    "class": "Sacerdotes"
  },
  {
    "name": "Ocultación somática",
    "description": "Permite al hechicero lanzar conjuros sin mostrar sus componentes material, somático ni verbal.",
    "level": 25,
    "class": "Hechiceros"
  },
  {
    "name": "Red de contactos",
    "description": "Permite al bribón contactos en cualquier lugar y nivel,y acceso a información y equipo.",
    "level": 25,
    "class": "Bribones"
  },
  {
    "name": "Creación de leyendas",
    "description": "Permite al bardo convertir su mejor historia en una leyenda inmortal.",
    "level": 25,
    "class": "Bardos"
  },
  {
    "name": "Enfocar disciplina",
    "description": "Otorga al psiónico una segunda disciplina primaria.",
    "level": 25,
    "class": "Psiónicos"
  }
]