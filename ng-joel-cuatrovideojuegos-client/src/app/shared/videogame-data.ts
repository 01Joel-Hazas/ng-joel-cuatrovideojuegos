import { InMemoryDbService } from 'angular-in-memory-web-api';

export class videogameData implements InMemoryDbService {

  createDb() {
    let videogames = [
      {
        "id": 0,
        "title": "Demon's Souls",
        "price": 64.99,
        "rating": 4.7,
        "shortDescription": "Demon's Souls es un videojuego de rol de acción en tercera persona desarrollado por el estudio japonés From Software",
        "description": "Su historia tiene lugar en el ficticio reino de Boletaria, en el cual, aunque no se precisa la época en la que se encuentra, se concluye que es en la Edad Media, ya que tiene todas sus características. Su rey, el rey Allant decimosegundo, trajo gran prosperidad a su reino usando el poder de las almas y basando su reino en ellas como una moneda. Esto causó que un demonio llamado 'El Anciano', despertara de un sueño profundo en el que se encontraba.",
        "image": "https://i.ebayimg.com/images/g/uVIAAOSwDr9fmlhJ/s-l300.jpg"
      },
      
      {
        "id": 1,
        "title": "Bloodborne",
        "price": 24.99,
        "rating": 5,
        "shortDescription": "Bloodborne es un videojuego de rol de acción dirigido por Hidetaka Miyazaki, desarrollado por From Software y JapanStudio.",
        "description": "El juego tiene lugar en la ciudad gótica decrépita de Yharnam, conocida por sus avances médicos basados en el uso de la sangre como principal elemento.3​ Con los años, muchos peregrinos viajaron a la ciudad en busca del remedio para curar sus aflicciones. El jugador, por razones desconocidas, emprende el viaje a Yharnam buscando una poderosa sangre conocida como «Sangre pálida» que más tarde descubriremos, proviene de unos seres adorados como dioses apodados los grandes, cuyo diseño parece inspirado en las criaturas del escritor H. P. Lovecraft.",
        "image": "https://m.media-amazon.com/images/I/81lXQVFQ7dL._AC_SL1500_.jpg"
      },
      {
        "id": 2,
        "title": "Sekiro",
        "price": 34.99,
        "rating": 4.6,
        "shortDescription": "Sekiro: Shadows Die Twice es un videojuego de acción y aventura desarrollado por From Software y distribuido por Activision.",
        "description": "En un reinventado período Sengoku de finales del siglo XVI en Japón, el señor de la guerra Isshin Ashina organizó un golpe sangriento y tomó el control de la tierra de Ashina del Ministerio del Interior. Durante este tiempo, un shinobi errante llamado Ukonzaemon Usui adoptó a un huérfano sin nombre, conocido por muchos como Owl, quien nombró al niño Lobo y lo entrenó en los caminos del shinobi. ",
        "image": "https://images-na.ssl-images-amazon.com/images/I/71cXIvhisGL._AC_SX385_.jpg"
    },
      {
        "id": 3,
        "title": "Dark Souls",
        "price": 24.99,
        "rating": 4.8,
        "shortDescription": "Dark Souls es un videojuego de rol de acción, desarrollado por la empresa From Software.",
        "description": "LEl juego tiene lugar en los últimos días de la Edad del Fuego, la cual comenzó tras la derrota de los Dragones de Piedra que anteriormente reinaban el mundo. Durante esta época el mundo era un lugar oscuro y lúgubre habitado solamente por una raza inmortal de dragones cuya capacidad de prolongar su vida eternamente provenía de sus escamas pétreas. En esta época aparentemente no existía aún ninguna llama, por lo que el mundo era un lugar completamente oscuro, amorfo y casi desierto. Así fue hasta que de la nada y sin nada que la provocase más que un ciclo natural, surgió la primera llama, un grupo de seres descubrieron en ella cuatro grandes almas, Nito el primer ser en morir, la bruja de Izalith y sus hijas del Caos, Gwyn el señor de la luz solar y portador de el alma en teoría más poderosa, y por último el furtivo pigmeo portador de el Alma oscura y que desapareció poco después de hacerse con la misma.",
        "image": "https://images-na.ssl-images-amazon.com/images/I/91tPD%2Bdl3VL._AC_SL1500_.jpg"
      },
      {
        "id": 4,
        "title": "Dark Souls 2",
        "price": 14.99,
        "rating": 4,
        "shortDescription": "Dark Souls II es un videojuego de rol de acción que tiene lugar en un mundo abierto, desarrollado por From Software.",
        "description": "Las mecánicas del juego en Dark Souls II son similares a las de su predecesor; el codirector Tomohiro Shibuya ha indicado que no tiene intenciones de cambiar los controles. El juego incluye todo un mundo nuevo con muchas armas que son utilizadas para luchar contra los monstruos dentro del juego. También se indicó que la creación de personajes sería similar a Dark Souls.",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81V4lnfIZTL._SX425_.jpg"
      },
      {
        "id": 5,
        "title": "Dark Souls 3",
        "price": 34.99,
        "rating": 4.8,
        "shortDescription": "Dark Souls III es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment",
        "description": "Dark Souls 3 es el final de la saga y presenta un mundo, el Reino de Lothric, al borde del Apocalipsis por culpa de 'la maldición de los no muertos', y la razón por la que el mundo aún no se ha sumido en la oscuridad totalmente es el sacrificio que muchos héroes e incluso dioses hicieron al reavivar la llama original, la cual se encarga de mantener la 'Era del fuego', dejando que esta consumiera sus respectivas almas y cuerpos.",
        "image": "https://m.media-amazon.com/images/I/81SFwkop0UL._AC_SL1500_.jpg"
      },
    ];
    return { videogames: videogames };
  }
}
