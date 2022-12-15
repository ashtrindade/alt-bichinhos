const data = [
  {
    "id": "0001",
    "file": "https://i.imgur.com/RS7BPaf.jpg",
    "portuguese": "A imagem apresenta um gato branco deitado sobre um pedaço de madeira, de frente para a câmera. Seus olhos estão fechados e ele possui um sorrisinho no rosto, além de flores laranjas sobre a cabeça. O fundo é o céu azul e algumas árvores.",
    "english": "The image features a white cat lying on a piece of wood, facing the camera. His eyes are closed and he has a little smile on his face, as well as orange flowers on his head. The background is blue sky and some trees.",
    "spanish": "La imagen muestra a un gato blanco acostado sobre un trozo de madera, frente a la cámara. Sus ojos están cerrados y tiene una pequeña sonrisa en su rostro, junto con flores naranjas en su cabeza. Al fondo se ve el cielo azul y algunos árboles.",
    "german": "Das Bild zeigt eine weiße Katze, die auf einem Stück Holz liegt und in die Kamera blickt. Seine Augen sind geschlossen und er hat ein kleines Lächeln auf seinem Gesicht sowie orangefarbene Blumen auf seinem Kopf. Der Hintergrund ist blauer Himmel und einige Bäume."
  },
  {
    "id": "0002",
    "file": "https://i.imgur.com/iaBlbkI.png",
    "portuguese": "A imagem mostra um cachorro da raça golden retriever. Ele possui o pelo bege, meio dourado, e esta deitado no chão de madeira clara. Está com a boca aberta, quase que sorrindo. Usa uma coleira escrito \"Bear\" e possui beijos de batom por ele inteiro.",
    "english": "The image shows a golden retriever dog. He has beige, half-golden fur, and is lying on the light wooden floor. He has his mouth open, almost smiling. He wears a collar that says \"Bear\" and has lipstick kisses all over him.",
    "spanish": "La imagen muestra un perro golden retriever. Tiene pelaje beige, medio dorado, y está acostado en suelo de madera clara. Su boca está abierta, casi sonriendo. Lleva un collar que dice Bear y se ven marcas de besos de lápiz labial por todas partes de su cuerpo y cabeza.",
    "german": "Das Bild zeigt einen Golden Retriever-Hund. Er hat beiges, halbgoldenes Fell und liegt auf dem hellen Holzboden. Er hat den Mund offen, fast lächelnd. Er trägt ein Halsband mit der Aufschrift \"Bear\" und hat überall Lippenstiftküsse."
  },
  {
    "id": "0003",
    "file": "https://i.imgur.com/oae8w28.png",
    "portuguese": "A imagem mostra um ouriço filhote. Ele está sentado. Usa um chapéu de morango, vermelho com bolinhas amarelas, e segura um moranguinho de pano com as patinhas que seriam as mãos. Também parece estar sorrindo. O fundo é branco.",
    "english": "The image shows a baby hedgehog. He's sitting. He wears a strawberry hat, red with yellow polka dots, and holds a little cloth strawberry with the paws that would be his hands. He also seems to be smiling. The background is white.",
    "spanish": "La imagen muestra un erizo bebé. Él esta sentado. Lleva un gorro en forma de fresa, rojo con puntitas amarillas, y sostiene una fresita de tela con las patitas delanteras. También parece estar sonriendo. El fondo es blanco.",
    "german": "Das Bild zeigt einen Babyigel. Er sitzt. Er trägt einen Erdbeerhut, rot mit gelben Tupfen, und hält eine kleine Stofferdbeere mit den Pfoten, die seine Hände sein würden. Er scheint auch zu lächeln. Der Hintergrund ist weiß."
  },
  {
    "id": "0004",
    "file": "https://i.imgur.com/4xkM2kw.png",
    "portuguese": "Foto da parte superior de um gato laranja. Ele está com a cara afastada da câmera. Seus olhos são verdes, o nariz é rosa com sardas e sua língua está com a ponta pra fora. O fundo é uma parede branca.",
    "english": "Photo of the upper part of an orange cat. He has his face away from the camera. His eyes are green, his nose is pink with freckles and his tongue is sticking out. The background is a white wall.",
    "spanish": "Foto de la parte superior de un gato naranja. Tiene la cara alejada de la cámara. Sus ojos son verdes, su nariz es rosada con pecas y se ve la punta de la lengua. El fondo es una pared blanca.",
    "german": "Foto des oberen Teils einer orangefarbenen Katze. Er hat sein Gesicht von der Kamera weg. Seine Augen sind grün, seine Nase ist rosa mit Sommersprossen und seine Zunge ragt heraus. Der Hintergrund ist eine weiße Wand."
  },
  {
    "id": "0005",
    "file": "https://i.imgur.com/3GmMWMD.jpg",
    "portuguese": "Foto de um hamster cinza bem pequeno. Ele está dentro de um potinho de comida, segurando um pedaço de cenoura com as mãos e mordendo. Está meio deitado para a direita. É bem peludinho e redondinho.",
    "english": "Photo of a very small gray hamster. He's inside a little food jar, holding a piece of carrot in his hands and biting into it. He's half lying to the right. It's very fluffy and round.",
    "spanish": "Foto de un hámster gris muy pequeño. Está dentro de un cuenco de comida, y sostiene un trozo de zanahoria en sus manos que está mordiendo. Está medio acostado a la derecha. Es muy peludito y redondo.",
    "german": "Foto eines sehr kleinen grauen Hamsters. Er ist in einem kleinen Essensglas, hält ein Stück Karotte in seinen Händen und beißt hinein. Er liegt halb rechts. Es ist sehr fluffig und rund."
  },
  {
    "id": "0006",
    "file": "https://i.imgur.com/bkFxJQA.jpg",
    "portuguese": "Foto de um patinho dormindo por cima de outro. Ele apoia a cabeça no irmãozinho. São amarelos e bem pequenos, mas seu bico rosa é grande. Em cima da sua cabeça há uma folha em formato de coração. O fundo está desfocado.",
    "english": "Photo of a duckling sleeping on top of another. He rests his head on his little brother. They are yellow and very small, but their pink beak is large. On top of your head is a heart-shaped leaf. The background is blurred.",
    "spanish": "Foto de un patito durmiendo encima de otro. Él descansa su cabeza sobre su hermanito. Los dos son amarillos y muy pequeños. El pico del pato cuya cabeza se puede ver es grande y rosado. Encima de su cabeza hay una hoja en forma de corazón. El fondo está borroso.",
    "german": "Foto eines Entleins, das übereinander schläft. Er legt seinen Kopf auf seinen kleinen Bruder. Sie sind gelb und sehr klein, aber ihr rosa Schnabel ist groß. Auf deinem Kopf ist ein herzförmiges Blatt. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0007",
    "file": "https://i.imgur.com/UUxaA70.jpg",
    "portuguese": "A foto mostra um sapinho de frente para uma mini penteadeira, se olhando no espelho. É verde e de tamanho médio, e está de costas. No espelho, sua cara está séria. Usa um lacinho rosa acima da cabeça. A penteadeira é amarela e o fundo é branco.",
    "english": "The photo shows a little frog in front of a mini dressing table, looking in the mirror. It is green and of medium size, and it is on its back. In the mirror, her face is serious. Wear a pink bow above your head. The dressing table is yellow and the background is white.",
    "spanish": "La foto muestra una ranita frente a un mini tocador, mirándose en el espejo. Es de color verde, de tamaño mediano, y está de espaldas a la cámara. En el espejo, su rostro es serio. Lleva un lazo rosa sobre la cabeza. El tocador es amarillo y el fondo es blanco.",
    "german": "Das Foto zeigt einen kleinen Frosch vor einem Mini-Schminktisch, der in den Spiegel schaut. Es ist grün und mittelgroß und liegt auf dem Rücken. Im Spiegel ist ihr Gesicht ernst. Trage eine rosa Schleife über deinem Kopf. Der Schminktisch ist gelb und der Hintergrund ist weiß."
  },
  {
    "id": "0008",
    "file": "https://i.imgur.com/LWJ6xQV.jpg",
    "portuguese": "A imagem mostra um coelhinho branco bem pequeno e peludinho. Ele está encostado em uma árvore, comendo um pedacinho de grama.",
    "english": "The picture shows a very small and furry white bunny. He's leaning against a tree, eating a bit of grass.",
    "spanish": "La imagen muestra un conejito blanco muy pequeño y peludo. Está apoyado contra un árbol, comiendo un poco de hierba.",
    "german": "Das Bild zeigt einen sehr kleinen und pelzigen weißen Hasen. Er lehnt an einem Baum und frisst ein bisschen Gras."
  },
  {
    "id": "0009",
    "file": "https://i.imgur.com/z7lsUIM.jpg",
    "portuguese": "A foto mostra um cachorro bebendo água na mão de uma pessoa. Ele possui o pelo baixo, branco no corpo e bege na barriga, e a ponta do fucinho preta. Seus olhos estão fixos na mão, que está em formato de concha e recebe água de uma garrafa plástica. É possível ver sua língua. O fundo possui alguns matos, porém está desfocado.",
    "english": "The photo shows a dog drinking water from a person's hand. It has low fur, white on the body and beige on the belly, and the tip of the muzzle is black. His eyes are fixed on his hand, which is cupped and receives water from a plastic bottle. You can see his language. The background has some weeds, but is blurred.",
    "spanish": "La foto muestra a un perro bebiendo agua de la mano de una persona. Tiene pelaje corto, blanco en el cuerpo y beige en el vientre, y la punta del hocico es negra. Los ojos del perro están fijos en la mano ahuecada, y recibe agua de una botella de plástico. Se puede ver la lengua del perro. El fondo tiene algunas malas hierbas, pero está borroso.",
    "german": "Das Foto zeigt einen Hund, der Wasser aus der Hand einer Person trinkt. Es hat ein niedriges Fell, weiß am Körper und beige am Bauch, und die Schnauzenspitze ist schwarz. Seine Augen sind auf seine Hand gerichtet, die hohl ist und Wasser aus einer Plastikflasche erhält. Sie können seine Sprache sehen. Der Hintergrund hat etwas Unkraut, ist aber verschwommen."
  },
  {
    "id": "0010",
    "file": "https://i.imgur.com/Kg1qloq.jpg",
    "portuguese": "A foto mostra um furão pequeno e branco deitado sobre algumas cobertas cinzas. Ele usa um suéter amarelo e suas patinhas (mãos) estão juntas. Sua cabeça está meio de lado e seus olhos estão quase se fechando.",
    "english": "The photo shows a small, white ferret lying on some gray blankets. He wears a yellow sweater and his paws (hands) are together. His head is half to the side and his eyes are almost closing.",
    "spanish": "La foto muestra un pequeño hurón blanco acostado sobre unas mantas grises. Lleva un suéter amarillo y sus patas delanteras están juntas. Su cabeza está un poco a un lado y sus ojos casi se cierran.",
    "german": "Das Foto zeigt ein kleines, weißes Frettchen, das auf einigen grauen Decken liegt. Er trägt einen gelben Pullover und seine Pfoten (Hände) sind zusammen. Sein Kopf ist halb zur Seite geneigt und seine Augen schließen sich fast."
  },
  {
    "id": "0011",
    "file": "https://i.imgur.com/8OtCaWX.jpg",
    "portuguese": "A foto mostra um sirizinho. Ele é bem pequeno e está levemente de lado, é branco em baixo e vermelho em cima. Suas garras estão para o alto e parece que está comemorando, e usa um chapéu de caubói. Está sobre uma mesa branca, e há um vasinho de suculentas atrás dele e uma janela.",
    "english": "The photo shows a little crab. It is quite small and is slightly to the side, it is white on the bottom and red on the top. His claws are up and he looks like he's celebrating, and he's wearing a cowboy hat. It's on a white table, and there's a vase of succulents behind it and a window.",
    "spanish": "La foto muestra un pequeño cangrejo. Es bastante pequeño y está ligeramente hacia un lado, es blanco en la parte inferior y rojo en la parte superior. Tiene las garras levantadas y parece que está celebrando, y lleva puesto un sombrero de vaquero. Está sobre una mesa blanca, y detrás hay un jarrón con plantas suculentas y una ventana.",
    "german": "Das Foto zeigt eine kleine Krabbe. Es ist ziemlich klein und steht leicht seitlich, es ist unten weiß und oben rot. Seine Krallen sind hoch und er sieht aus, als würde er feiern, und er trägt einen Cowboyhut. Es steht auf einem weißen Tisch, dahinter eine Vase mit Sukkulenten und ein Fenster."
  },
  {
    "id": "0012",
    "file": "https://i.imgur.com/4bhq1yy.jpg",
    "portuguese": "A foto mostra uma ovelhinha. Ela é pequena e branca, e está no meio da grama, cheirando algumas flores amarelas.",
    "english": "The photo shows a little sheep. She's small and white, and she's in the middle of the grass, smelling some yellow flowers.",
    "spanish": "La foto muestra una oveja. Es pequeña y blanca, y está en medio de la hierba, oliendo unas flores amarillas.",
    "german": "Das Foto zeigt ein kleines Schaf. Sie ist klein und weiß, und sie steht mitten im Gras und riecht an ein paar gelben Blumen."
  },
  {
    "id": "0013",
    "file": "https://i.imgur.com/ZOAXesY.jpg",
    "portuguese": "A foto foi tirada do alto e mostra duas gatinhas deitadas. A primeira é preta, bem peluda e com olhar verdes. À direita, colada com ela, está uma gata branca com manchas pretas no topo da cabeça, no fim do corpo e no rabo, ela é mais longa e magra e possui o pelo mais colado, e seus olhos são amarelos. Ambas estão olhando para a câmera. Ao seu redor, vasos de plantas.",
    "english": "The photo was taken from above and shows two kittens lying down. The first is black, very hairy and with green eyes. On the right, next to her, is a white cat with black spots on the top of her head, at the end of her body and on her tail, she is longer and thinner and has a tighter coat, and her eyes are yellow. Both are looking at the camera. Around him, potted plants.",
    "spanish": "La foto fue tomada desde arriba y muestra a dos gatitos acostados. El primero es negro, muy peludo y de ojos verdes. A la derecha, junto a ella, se encuentra una gata blanca con manchas negras en la parte superior de la cabeza, al final del cuerpo y en la cola, es más larga y delgada y tiene el pelaje más corto, y sus ojos son amarillos. Ambos están mirando a la cámara. A su alrededor, plantas en macetas.",
    "german": "Das Foto wurde von oben aufgenommen und zeigt zwei liegende Kätzchen. Der erste ist schwarz, sehr behaart und hat grüne Augen. Rechts neben ihr ist eine weiße Katze mit schwarzen Flecken auf dem Scheitel, am Ende ihres Körpers und am Schwanz, sie ist länger und dünner und hat ein dichteres Fell und ihre Augen sind gelb. Beide schauen in die Kamera. Um ihn herum Topfpflanzen."
  },
  {
    "id": "0014",
    "file": "https://i.imgur.com/8cUNEkZ.png",
    "portuguese": "A foto mostra uma iguana da metade do corpo até a cabeça; recebendo carinho. Ela é de um verde bem vivo, sendo menos vibrante no papo. Seus olhos estão fechados e ela está levantando a cabeça em direção à mão que lhe faz carinho. O fundo é uma porta de madeira.",
    "english": "The photo shows an iguana from half its body to its head; receiving affection. It is of a very vivid green, being less vibrant in the chat. Her eyes are closed and she is lifting her head towards the caressing hand. The background is a wooden door.",
    "spanish": "La foto muestra una iguana desde la mitad del cuerpo hasta la cabeza; recibiendo cariño. Es de un verde muy vivo, siendo menos vibrante en la papada. Tiene los ojos cerrados y levanta la cabeza hacia la mano que la acaricia. El fondo es una puerta de madera.",
    "german": "Das Foto zeigt einen Leguan von der Körperhälfte bis zum Kopf; Zuneigung empfangen. Es hat ein sehr lebendiges Grün und ist im Chat weniger lebendig. Ihre Augen sind geschlossen und sie hebt ihren Kopf in Richtung der streichelnden Hand. Der Hintergrund ist eine Holztür."
  },
  {
    "id": "0015",
    "file": "https://i.imgur.com/freKZeK.jpg",
    "portuguese": "A foto mostra um panda em cima de uma árvore. Ele é pequeno e gordinho, branco com as patas e o arredor dos olhos pretos. Está dormindo inclinado em um galho da árvore, abraçando-o. É possível ver o resto da árvore, porém o fundo está desfocado.",
    "english": "The photo shows a panda on top of a tree. He is small and chubby, white with black paws and eyes around him. He is sleeping leaning on a tree branch, hugging him. You can see the rest of the tree, but the background is blurred.",
    "spanish": "La foto muestra un panda encima de un árbol. Es pequeño y gordito, blanco, con patas y alrededor de sus ojos negros. Está durmiendo apoyado en la rama de un árbol, abrazándolo. Es posible ver el resto del árbol, pero el fondo es borroso.",
    "german": "Das Foto zeigt einen Panda auf einem Baum. Er ist klein und mollig, weiß mit schwarzen Pfoten und Augen um ihn herum. Er schläft auf einem Ast gelehnt und umarmt ihn. Sie können den Rest des Baums sehen, aber der Hintergrund ist verschwommen."
  },
  {
    "id": "0016",
    "file": "https://i.imgur.com/AxqbmeJ.jpg",
    "portuguese": "A foto mostra um coelhinho e um patinho. Os dois são filhotes e estão em um campo. O coelhinho, que está na esquerda, é preto com algumas manchinhas brancas. Seu olho pretinho está aberto e suas orelhas levantadas, e está meio de lado. O patinho está ao lado, quase atrás. Suas peninhas amarelas estão levemente arrepiadas. No campo há também algumas flores brancas.",
    "english": "The photo shows a bunny and a duckling. The two are puppies and are in a field. The bunny, which is on the left, is black with some white spots. His little black eye is open and his ears are up, and he's half on his side. The duckling is to the side, almost behind. Its yellow feathers are slightly ruffled. In the field there are also some white flowers.",
    "spanish": "La foto muestra un conejito y un patito. Los dos son cachorros y están en un campo. El conejito, que está a la izquierda, es negro con algunas manchas blancas. Su ojito negro está abierto y sus orejas levantadas, y está medio de costado. El patito está al lado, casi detrás. Sus plumas amarillas están ligeramente erizadas. En el campo también hay algunas flores blancas.",
    "german": "Das Foto zeigt einen Hasen und ein Entlein. Die zwei sind Welpen und sind in einem Feld. Der Hase links ist schwarz mit einigen weißen Flecken. Sein kleines blaues Auge ist offen und seine Ohren sind aufgestellt, und er liegt halb auf seiner Seite. Das Entlein ist zur Seite, fast hinten. Seine gelben Federn sind leicht zerzaust. Auf dem Feld gibt es auch einige weiße Blumen."
  },
  {
    "id": "0017",
    "file": "https://i.imgur.com/4HuCZzu.png",
    "portuguese": "A foto mostra um gatinho tricolor deitado em cima de um livro. Ele é branco com manchas beges e pretas, e está dormindo com a cabeça sobre o livro de capa preta, cujo não dá para ver o título.",
    "english": "The photo shows a tricolor kitten lying on top of a book. He's white with beige and black spots, and he's sleeping with his head over the black-covered book, whose title you can't see.",
    "spanish": "La foto muestra a un gatito tricolor acostado encima de un libro. Es blanco con manchas beige y negras, y duerme con la cabeza sobre el libro de tapa negra, cuyo título no se ve.",
    "german": "Das Foto zeigt ein dreifarbiges Kätzchen, das auf einem Buch liegt. Er ist weiß mit beigen und schwarzen Flecken, und er schläft mit dem Kopf über dem schwarzbeschlagenen Buch, dessen Titel man nicht sehen kann."
  },
  {
    "id": "0018",
    "file": "https://i.imgur.com/zjgRPG8.png",
    "portuguese": "A foto mostra duas mãos segurando um hamster bege com um chapéu de caubói. Ele é bem pequeno e gordinho. Suas mãos estão apoiadas em uma das mãos da pessoa e seus olhinhos estão fechados. O fundo é um móvel e alguns brinquedos para hamster, desfocados.",
    "english": "The photo shows two hands holding a beige hamster in a cowboy hat. He is very small and chubby. His hands are resting on one of the person's hands and his little eyes are closed. The background is a piece of furniture and some hamster toys, out of focus.",
    "spanish": "La foto muestra dos manos sosteniendo un hámster beige con un sombrero de vaquero. Es muy pequeño y gordito. Sus manos descansan sobre una de las manos de la persona y sus ojitos están cerrados. El fondo es un mueble y unos juguetes de hámster, desenfocados.",
    "german": "Das Foto zeigt zwei Hände, die einen beigen Hamster mit Cowboyhut halten. Er ist sehr klein und pummelig. Seine Hände ruhen auf einer der Hände der Person und seine kleinen Augen sind geschlossen. Der Hintergrund ist ein Möbelstück und einige Hamsterspielzeuge, unscharf."
  },
  {
    "id": "0019",
    "file": "https://i.imgur.com/Rj2XEVc.jpg",
    "portuguese": "A foto mostra uma calopsita amarela. Ela está de frente para a cama e usa um chapéu verde de sapinho feito de crochê, com um olho de cada lado do mesmo. O fundo é um armário branco desfocado.",
    "english": "The photo shows a yellow cockatiel. She is facing the bed and wears a crocheted green little frog hat, with an eye on each side of it. The background is a blurred white cabinet.",
    "spanish": "La foto muestra una cacatúa amarilla. Está frente a la cama y lleva un gorrito de ranita verde de crochet, con un ojo a cada lado. El fondo es un gabinete blanco borroso.",
    "german": "Das Foto zeigt einen gelben Nymphensittich. Sie steht vor dem Bett und trägt einen gehäkelten grünen kleinen Froschhut mit einem Auge auf jeder Seite davon. Der Hintergrund ist ein unscharfer weißer Schrank."
  },
  {
    "id": "0020",
    "file": "https://i.imgur.com/LCMcA1F.png",
    "portuguese": "A foto mostra um cachorro semelhante a um labrador, pequeno e bege. Ele está andando em direção à câmera com uma flor roxa na boca. Seu rosto está levemente virado para a esquerda e seus rabinho está balançando. O fundo é um caminho de terra em meio à grama.",
    "english": "The photo shows a small, beige, labrador-like dog. He is walking towards the camera with a purple flower in his mouth. His face is turned slightly to the left and his tail is wagging. The background is a dirt path through the grass.",
    "spanish": "La foto muestra un perro pequeño, beige, parecido a un labrador. Camina hacia la cámara con una flor morada en la boca. Su cara está ligeramente girada hacia la izquierda y su cola se mueve. El fondo es un camino de tierra a través de la hierba.",
    "german": "Das Foto zeigt einen kleinen, beigen, labradorähnlichen Hund. Er geht mit einer lila Blume im Mund auf die Kamera zu. Sein Gesicht ist leicht nach links gedreht und sein Schwanz wedelt. Der Hintergrund ist ein Feldweg durch das Gras."
  },
  {
    "id": "0021",
    "file": "https://i.imgur.com/nLvv2SB.jpg",
    "portuguese": "A foto mostra dois patinhos filhotes de costas. O primeiro, da esquerda, é todo amarelinho. O da direita, mais magrinho, é amarelo e marrom, e possui o olho maior. Ambos estão olhando para algum lugar fora da câmera. O chão é branco e ao fundo há uma janela mostrando algumas árvores.",
    "english": "The photo shows two baby ducklings from the back. The first one, on the left, is all yellow. The one on the right, thinner, is yellow and brown, and has the biggest eye. Both are looking somewhere off camera. The floor is white and in the background there is a window showing some trees.",
    "spanish": "La foto muestra dos patitos de espaldas. El primero, a la izquierda, es todo amarillo. El de la derecha, más delgado, es amarillo y marrón, y tiene el ojo más grande. Ambos están mirando a algún lugar fuera de cámara. El suelo es blanco y al fondo hay una ventana que muestra unos árboles.",
    "german": "Das Foto zeigt zwei Babyküken von hinten. Der erste links ist ganz gelb. Der rechte, dünnere, ist gelb und braun und hat das größte Auge. Beide schauen irgendwo aus der Kamera. Der Boden ist weiß und im Hintergrund gibt es ein Fenster, das einige Bäume zeigt."
  },
  {
    "id": "0022",
    "file": "https://i.imgur.com/rEpcW1c.jpg",
    "portuguese": "A foto mostra uma vaquinha peluda. Ela é marrom, quase bege, e possui as patinhas curtas. Está de frente para a câmera e acima da cabeça o seu pelo está levemente bagunçado. O fundo é um campo verde e o céu, que está rosado.",
    "english": "The photo shows a furry baby cow. She is brown, almost beige, and has short paws. She is facing the camera and above her head her fur is slightly messy. The background is a green field and the sky, which is pink.",
    "spanish": "La foto muestra una vaca bebé peluda. Ella es marrón, casi beige, y tiene patas cortas. Ella está frente a la cámara y sobre su cabeza su pelaje está un poco desordenado. El fondo es un campo verde y el cielo, que está rosado.",
    "german": "Das Foto zeigt eine pelzige Babykuh. Sie ist braun, fast beige, und hat kurze Pfoten. Sie steht vor der Kamera und über ihrem Kopf ist ihr Fell leicht unordentlich. Der Hintergrund ist ein grünes Feld und der Himmel, der rosa ist."
  },
  {
    "id": "0023",
    "file": "https://i.imgur.com/AaD7FfX.jpg",
    "portuguese": "A foto mostra uma pombinha branca deitada em um gramado. Ela é gordinha e está cheirando uma flor branca bem pequenininha, estendida a ela por uma mão. O fundo mostra algumas árvores desfocadas.",
    "english": "The photo shows a white dove lying on a lawn. She is chubby and is smelling a very tiny white flower, held out to her by a hand. The background shows some blurred trees.",
    "spanish": "La foto muestra una paloma blanca tumbada en un césped. Es gordita y huele una flor blanca diminuta que le tiende una mano. El fondo muestra algunos árboles borrosos.",
    "german": "Das Foto zeigt eine weiße Taube, die auf einer Wiese liegt. Sie ist mollig und riecht an einer winzigen weißen Blume, die ihr von einer Hand hingehalten wird. Der Hintergrund zeigt einige unscharfe Bäume."
  },
  {
    "id": "0024",
    "file": "https://i.imgur.com/8KaF4xi.jpg",
    "portuguese": "A foto mostra uma pombinha branca deitada em um gramado. Sua cabeça está abaixada e a florzinha branca agora está sobre ela.",
    "english": "The photo shows a white dove lying on a lawn. Her head is down and the little white flower is now on her.",
    "spanish": "La foto muestra una paloma blanca tumbada en un césped. Su cabeza está hacia abajo y la pequeña flor blanca ahora está sobre ella.",
    "german": "Das Foto zeigt eine weiße Taube, die auf einer Wiese liegt. Ihr Kopf ist gesenkt und die kleine weiße Blume ist jetzt auf ihr."
  },
  {
    "id": "0025",
    "file": "https://i.imgur.com/WNprrN8.jpg",
    "portuguese": "A foto mostra um gato sphynx, conhecido como gato pelado. Ele é marrom e bege, possuindo algumas partes mais escurar e algumas mais claras. Aparece da metade para cima e possui orelhas grandes. Seu olhos são azuis bem claros e ele está olhando para fora da câmera. Uma mão branca usando um casaco encosta de leve em seu pescoço. Em um dos dedos há um anel cuja pedra é da mesma cor dor olhos do gato.",
    "english": "The photo shows a sphynx cat, known as a hairless cat. It is brown and beige, with some darker parts and some lighter parts. It appears from the middle up and has large ears. His eyes are very light blue and he is looking off camera. A white hand wearing a coat touches his neck lightly. On one of his fingers is a ring whose stone is the same color as the cat's eyes.",
    "spanish": "La foto muestra un gato sphynx, conocido como gato sin pelo. Es de color marrón y beige, con algunas partes más oscuras y otras más claras. Aparece de la mitad hacia arriba y tiene orejas grandes. Sus ojos son de un azul muy claro y mira fuera de cámara. Una mano blanca con un abrigo toca su cuello ligeramente. En uno de sus dedos lleva un anillo cuya piedra es del mismo color que los ojos del gato.",
    "german": "Das Foto zeigt eine Sphynx-Katze, die als haarlose Katze bekannt ist. Es ist braun und beige, mit einigen dunkleren und einigen helleren Teilen. Es erscheint von der Mitte nach oben und hat große Ohren. Seine Augen sind sehr hellblau und er schaut aus der Kamera. Eine weiße Hand im Mantel berührt leicht seinen Hals. An einem seiner Finger ist ein Ring, dessen Stein die gleiche Farbe wie die Augen der Katze hat."
  },
  {
    "id": "0026",
    "file": "https://i.imgur.com/fwaJd9l.jpg",
    "portuguese": "A foto mostra um guaxinim em um gramadinho. Ele é bem peludinho, marrom com a cara bege e manchas pretas ao redor dos olhos, que são pretos como duas jabuticabas. Em cima de sua cabeça há uma coroa de flores brancas.",
    "english": "The photo shows a raccoon in a small lawn. He is very hairy, brown with a beige face and black spots around his eyes, which are as black as two jabuticabas. On top of her head is a wreath of white flowers.",
    "spanish": "La foto muestra un mapache en un pequeño césped. Es muy peludo, moreno con la cara beige y manchas negras alrededor de los ojos, que son tan negros como dos jabuticabas. Encima de su cabeza hay una corona de flores blancas.",
    "german": "Das Foto zeigt einen Waschbären auf einer kleinen Wiese. Er ist sehr behaart, braun mit einem beigen Gesicht und schwarzen Flecken um seine Augen, die so schwarz wie zwei Jabuticabas sind. Auf ihrem Kopf ist ein Kranz aus weißen Blumen."
  },
  {
    "id": "0027",
    "file": "https://i.imgur.com/QUBbCvL.jpg",
    "portuguese": "A foto mostra um cachorrinho em um carrinho de supermercado vermelho. Ele é bege e pequeno, e está sentado na área para bebês. Suas patinhas traseiras estão encaixadas no buraco das pernas e suas patinhas dianteiras seguram no carrinho. Seus olhos são pretos e encaram algo fora da câmera. O fundo está desfocado.",
    "english": "The photo shows a puppy in a red grocery cart. He's beige and small, and he's sitting in the baby area. Its back paws are fitted into the leg hole and its front paws hold the stroller. His eyes are black and staring at something off camera. The background is blurred.",
    "spanish": "La foto muestra un cachorro en un carrito de supermercado rojo. Es beige y pequeño, y está sentado en el área de bebés. Sus patas traseras se encajan en el orificio de la pierna y sus patas delanteras sostienen el cochecito. Sus ojos son negros y miran fijamente algo fuera de cámara. El fondo está borroso.",
    "german": "Das Foto zeigt einen Welpen in einem roten Einkaufswagen. Er ist beige und klein und sitzt im Babybereich. Seine Hinterpfoten werden in das Beinloch eingepasst und seine Vorderpfoten halten den Kinderwagen. Seine Augen sind schwarz und starren auf etwas außerhalb der Kamera. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0028",
    "file": "https://i.imgur.com/VjqOiSL.jpg",
    "portuguese": "A foto mostra um furão em uma banheira, podendo ser visto apenas da metade para cima. Seu pelo branco está molhado e arrepiado, com um pouco de espuma, também presente no resto da banheira. Seus olhos vermelhos olham para algum lugar fora da câmera, à esquerda.",
    "english": "The photo shows a ferret in a bathtub, which can only be seen from the middle up. His white fur is wet and ruffled, with a little foam, also present in the rest of the tub. Its red eyes look somewhere off-camera to the left.",
    "spanish": "La foto muestra un hurón en una bañera, que solo se puede ver de la mitad hacia arriba. Su pelaje blanco está mojado y despeinado, con un poco de espuma, también presente en el resto de la bañera. Sus ojos rojos miran hacia algún lugar fuera de cámara a la izquierda.",
    "german": "Das Foto zeigt ein Frettchen in einer Badewanne, die nur von der Mitte aus zu sehen ist. Sein weißes Fell ist nass und zerzaust, mit etwas Schaum, der auch im Rest der Wanne vorhanden ist. Seine roten Augen blicken irgendwo nach links außerhalb der Kamera."
  },
  {
    "id": "0029",
    "file": "https://i.imgur.com/R31vPob.jpg",
    "portuguese": "A foto mostra um panda vermelho dando língua. Ele se assemelha à um guaxinim, possuindo a cabeça maior. Sua pelagem é laranja em cima e preta em baixo, e ele possui algumas partes brancas em volta do fucinho e perto dos olhos. Seus olhos estão levemente fechados. À sua frente há alguns matinhos. O fundo é bege, porém está desfocado.",
    "english": "The photo shows a red panda sticking out its tongue. It resembles a raccoon, having a larger head. Its fur is orange on top and black on the bottom, and it has some white patches around its muzzle and near its eyes. His eyes are slightly closed. In front of him are some bushes. The background is beige, but it's out of focus.",
    "spanish": "La foto muestra un panda rojo sacando la lengua. Se asemeja a un mapache, pero con la cabeza más grande. Su pelaje es anaranjado en la parte superior y negro en la parte inferior, y tiene algunas manchas blancas alrededor del hocico y cerca de los ojos. Sus ojos están ligeramente cerrados. Frente a él hay algunos arbustos. El fondo es beige, pero está desenfocado.",
    "german": "Das Foto zeigt einen roten Panda, der seine Zunge herausstreckt. Es ähnelt einem Waschbären und hat einen größeren Kopf. Sein Fell ist oben orange und unten schwarz, und es hat einige weiße Flecken um seine Schnauze und in der Nähe seiner Augen. Seine Augen sind leicht geschlossen. Vor ihm sind einige Büsche. Der Hintergrund ist beige, aber unscharf."
  },
  {
    "id": "0030",
    "file": "https://i.imgur.com/w2H25lR.jpg",
    "portuguese": "Uma cadela de pelos castanho escuro bem rentes ao corpo. Seu rosto e suas patas são cor de caramelo e a cachorrinha possui olhos castanhos e rabo e focinho preto, e está olhando para cima.  O chão do ambiente é marrom e a parede é branca.",
    "english": "A dog with dark brown fur close to her body. Its face and paws are caramel color and the little dog has brown eyes and a black tail and muzzle, and is looking up. The room floor is brown and the wall is white.",
    "spanish": "Un perro con pelaje marrón oscuro, corto. Su cara y patas son de color caramelo y el perrito tiene ojos marrones y una cola y hocico negros, y está mirando hacia arriba. El suelo de la habitación es marrón y la pared es blanca.",
    "german": "Ein Hund mit dunkelbraunem Fell dicht an ihrem Körper. Sein Gesicht und seine Pfoten sind karamellfarben und der kleine Hund hat braune Augen und einen schwarzen Schwanz und eine schwarze Schnauze und schaut nach oben. Der Boden des Zimmers ist braun und die Wand ist weiß."
  },
  {
    "id": "0031",
    "file": "https://i.imgur.com/PLWILL0.jpg",
    "portuguese": "A foto mostra um sapinho verde e bem pequeno na mão de uma pessoa. Ele é cerca de um quarto do tamanho da palma e possui uma flor maior do que o mesmo na cabeça, em um tom bem claro de rosa. A pessoa que o segura usa luva. O fundo está desfocado.",
    "english": "The photo shows a very small, green frog on a person's hand. It is about a quarter the size of the palm and has a flower larger than the palm on its head, in a very light shade of pink. The person holding it wears gloves. The background is blurred.",
    "spanish": "La foto muestra una rana verde muy pequeña en la mano de una persona. Mide aproximadamente una cuarta parte del tamaño de la palma y tiene una flor más grande que ella misma en su cabeza, en un tono rosado muy claro. La persona que lo sostiene usa guantes. El fondo está borroso.",
    "german": "Das Foto zeigt einen sehr kleinen, grünen Frosch auf der Hand einer Person. Sie ist etwa ein Viertel so groß wie die Palme und hat eine Blume auf dem Kopf, die größer ist als die Palme, in einem sehr hellen Rosaton. Die Person, die es hält, trägt Handschuhe. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0032",
    "file": "https://i.imgur.com/AylhXLl.jpg",
    "portuguese": "A foto mostra uma rolinha em uma janela. Ela está de lado e bem encolhidinha, olhando janela afora. Suas penas são marrons. O fundo mostra algumas árvores desfocadas.",
    "english": "The photo shows a dove in a window. She's on her side and curled up, looking out the window. Her feathers are brown. The background shows some blurred trees.",
    "spanish": "La foto muestra una paloma en una ventana. Ella está de lado y acurrucada, mirando por la ventana. Sus plumas son marrones. El fondo muestra algunos árboles borrosos.",
    "german": "Das Foto zeigt eine Taube in einem Fenster. Sie liegt auf der Seite, hat sich zusammengerollt und schaut aus dem Fenster. Ihre Federn sind braun. Der Hintergrund zeigt einige unscharfe Bäume."
  },
  {
    "id": "0033",
    "file": "https://i.imgur.com/2WAcLHD.jpg",
    "portuguese": "A foto mostra um gatinho bege bem claro, com a parte de baixo branca. Ele está enrolado em um lençol branco, então só da para ver o seu rosto. Seus olhos pretos são bem grandes e estão dilatados e também não é possível ver as suas orelhas. O fundo é uma cama e uma parede bege.",
    "english": "The photo shows a very light beige cat, with a white underside. He's wrapped in a white sheet, so you can only see his face. Its black eyes are very large and dilated and it is also not possible to see its ears. The background is a bed and a beige wall.",
    "spanish": "La foto muestra un gato beige muy claro, con la parte inferior blanca. Está envuelto en una sábana blanca, por lo que solo puedes ver su rostro. Sus ojos negros son muy grandes y dilatados y tampoco se le ven las orejas. El fondo es una cama y una pared beige.",
    "german": "Das Foto zeigt eine sehr hellbeige Katze mit einer weißen Unterseite. Er ist in ein weißes Laken gewickelt, sodass man nur sein Gesicht sehen kann. Seine schwarzen Augen sind sehr groß und geweitet und es ist auch nicht möglich, seine Ohren zu sehen. Der Hintergrund ist ein Bett und eine beige Wand."
  },
  {
    "id": "0034",
    "file": "https://i.imgur.com/dcnKE3A.jpg",
    "portuguese": "A foto mostra um ouriço deitado de barriga para cima em um cobertor colorido. Ele é bem pequeno e segura um mini violão com as mãos. Está encarando a câmera e sua boca está aberta como se estivesse sorrindo.",
    "english": "The photo shows a hedgehog lying on its back on a colorful blanket. He is very small and holds a mini guitar in his hands. He's facing the camera and his mouth is open as if he's smiling.",
    "spanish": "La foto muestra un erizo acostado boca arriba sobre una manta colorida. Es muy pequeño y sostiene una miniguitarra en sus manos. Está frente a la cámara y su boca está abierta como si estuviera sonriendo.",
    "german": "Das Foto zeigt einen auf dem Rücken liegenden Igel auf einer bunten Decke. Er ist sehr klein und hält eine Mini-Gitarre in den Händen. Er steht vor der Kamera und sein Mund ist offen, als würde er lächeln."
  },
  {
    "id": "0035",
    "file": "https://i.imgur.com/SDQqaYR.jpg",
    "portuguese": "A foto mostra um coelhinho bege agachado no chão. Suas orelhinhas estão caídas ao lado da cabeça e está levemente de lado, olhando para algo fora da câmera. Ao fundo, há grama e algumas flores rosas.",
    "english": "The photo shows a beige bunny crouching on the floor. Her little ears are drooping to the side of her head and she's slightly to one side, looking at something off-camera. In the background, there is grass and some pink flowers.",
    "spanish": "La foto muestra un conejito beige agachado en el suelo. Sus pequeñas orejas están caídas a un lado de su cabeza y ella está ligeramente hacia un lado, mirando algo fuera de cámara. Al fondo, hay hierba y algunas flores rosadas.",
    "german": "Das Foto zeigt einen beigen Hasen, der auf dem Boden kauert. Ihre kleinen Ohren hängen an der Seite ihres Kopfes und sie ist leicht zur Seite geneigt und betrachtet etwas aus dem Off. Im Hintergrund gibt es Gras und einige rosa Blumen."
  },
  {
    "id": "0036",
    "file": "https://i.imgur.com/VDFRUHn.jpg",
    "portuguese": "A foto mostra uma tartaruguinha na mão de uma pessoa. Seu casco possui tons beges e marrons e ela está abaixada comendo alguns matinhos.",
    "english": "The photo shows a little turtle in a person's hand. Her hull has beige and brown tones and she is bent over eating some weeds.",
    "spanish": "La foto muestra una pequeña tortuga en la mano de una persona. Su casco tiene tonos beige y marrones y está inclinado comiendo hierbajos.",
    "german": "Das Foto zeigt eine kleine Schildkröte in der Hand einer Person. Ihr Rumpf hat Beige- und Brauntöne und sie ist übergebeugt und frisst etwas Unkraut."
  },
  {
    "id": "0037",
    "file": "https://i.imgur.com/SatLmEX.jpg",
    "portuguese": "A foto mostra um hamster dentro de uma caneca vermelha do starbucks. Ele é bege e está comendo algo não-identificável, segurando com as duas mãos para levar à boca. O fundo está desfocado.",
    "english": "The photo shows a hamster inside a red starbucks mug. He is beige and is eating something unidentifiable, holding it with both hands to bring it to his mouth. The background is blurred.",
    "spanish": "La foto muestra un hámster dentro de una taza roja de Starbucks. Es de color beige y está comiendo algo no identificable, sosteniéndolo con ambas manos para llevárselo a la boca. El fondo está borroso.",
    "german": "Das Foto zeigt einen Hamster in einer roten Starbucks-Tasse. Er ist beige und isst etwas Unidentifizierbares, hält es mit beiden Händen, um es an seinen Mund zu führen. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0038",
    "file": "https://i.imgur.com/jSnvfcA.jpg",
    "portuguese": "A foto mostra uma cabrinha bege em uma caixa de madeira, em pé com a cabeça para fora. Ela possui alguns pelos brancos nas pernas e no fucinho. Suas orelhas são grandes e está olhando para a câmera com os olhinhos pretos. Em sua cabeça há algumas flores azuis.",
    "english": "The photo shows a beige goat in a wooden box, standing with its head out. She has some white hairs on her legs and muzzle. Her ears are big and she is looking at the camera with her little black eyes. On her head are some blue flowers.",
    "spanish": "La foto muestra una cabra beige en una caja de madera, parada con la cabeza afuera. Tiene algunos pelos blancos en las piernas y el hocico. Sus orejas son grandes y mira a la cámara con sus pequeños ojos negros. En su cabeza hay unas flores azules.",
    "german": "Das Foto zeigt eine beige Ziege in einer Holzkiste, die mit ausgestrecktem Kopf dasteht. Sie hat einige weiße Haare an ihren Beinen und ihrer Schnauze. Ihre Ohren sind groß und sie schaut mit ihren kleinen schwarzen Augen in die Kamera. Auf ihrem Kopf sind einige blaue Blumen."
  },
  {
    "id": "0039",
    "file": "https://i.imgur.com/DOUPx5F.jpg",
    "portuguese": "A foto mostra um gatinho tricolor dentro de um pote transparente de bala. Ele é branco com marrom e preto e está enrolado dentro do pote. Seus olhos amarelos estão bem dilatados. O fundo é um cômodo com algumas caixas de papelão.",
    "english": "The photo shows a tricolor kitten inside a transparent candy jar. It is white with brown and black and is rolled up inside the pot. His yellow eyes are well dilated. The bottom is a room with some cardboard boxes.",
    "spanish": "La foto muestra un gatito tricolor dentro de un bote de dulces transparente. Es de color blanco con marrón y negro y se enrolla dentro del bote. Sus ojos amarillos están bien dilatados. El fondo es una habitación con algunas cajas de cartón.",
    "german": "Das Foto zeigt ein dreifarbiges Kätzchen in einem transparenten Bonbonglas. Es ist weiß mit braun und schwarz und wird im Topf aufgerollt. Seine gelben Augen sind gut geweitet. Unten ist ein Raum mit einigen Kartons."
  },
  {
    "id": "0040",
    "file": "https://i.imgur.com/Hbvkb6N.jpg",
    "portuguese": "A foto mostra um gato branco dentro de pote de vidro circular, menos na base e maior no topo. Seu rabo é muito peludo e está para fora do pote, e sua cabeça está levemente achatada contra o vidro. O fundo é uma parede bege.",
    "english": "The photo shows a white cat inside a circular glass pot, less at the base and bigger at the top. Its tail is very furry and sticks out of the pot, and its head is slightly flattened against the glass. The background is a beige wall.",
    "spanish": "La foto muestra un gato blanco dentro de una maceta circular de vidrio, menos en la base y más grande en la parte superior. Su cola es muy peluda y sobresale de la olla, y su cabeza está ligeramente aplastada contra el cristal. El fondo es una pared beige.",
    "german": "Das Foto zeigt eine weiße Katze in einem runden Glastopf, unten kleiner und oben größer. Sein Schwanz ist sehr pelzig und ragt aus dem Topf heraus, und sein Kopf ist gegen das Glas leicht abgeflacht. Der Hintergrund ist eine beige Wand."
  },
  {
    "id": "0041",
    "file": "https://i.imgur.com/8Iw1ZMs.jpg",
    "portuguese": "A foto mostra um gato bege bem peludo dentro de um pote circular. Ele está de frente e mal cabe no pote de vidro, estando com o rabo e metade da cabeça para fora. Sua carinha é achatada e sua boca está colada no vidro.",
    "english": "The photo shows a very furry beige cat inside a circular pot. He is facing forward and barely fits in the glass jar, with his tail and half of his head sticking out. His face is flattened and his mouth is glued to the glass.",
    "spanish": "La foto muestra un gato beige muy peludo dentro de una maceta circular. Está mirando hacia el frente y apenas cabe en el frasco de vidrio, con la cola y la mitad de la cabeza sobresaliendo. Tiene la cara achatada y la boca pegada al cristal.",
    "german": "Das Foto zeigt eine sehr pelzige beige Katze in einem runden Topf. Er blickt nach vorne und passt kaum in das Glasgefäß, wobei sein Schwanz und die Hälfte seines Kopfes herausragen. Sein Gesicht ist abgeflacht und sein Mund ist an das Glas geklebt."
  },
  {
    "id": "0042",
    "file": "https://i.imgur.com/PpDSbkh.jpg",
    "portuguese": "A foto mostra um gato branco bem peludo dormindo dentro de uma cesta circular cinza. Foi tirada de cima. O gato está completamente redondo, sendo possível diferenciar apenas o seu rostinho. Uma luz o ilumina. O fundo é um tapete meio esverdeado.",
    "english": "The photo shows a furry white cat sleeping inside a gray circular basket. It was taken from above. The cat is completely round, and it is only possible to distinguish its face. A light illuminates you. The background is a greenish carpet.",
    "spanish": "La foto muestra a un gato blanco peludo durmiendo dentro de una canasta circular gris. Fue tomada desde arriba. El gato es completamente redondo, y solo es posible distinguir su cara. Una luz lo ilumina. El fondo es una alfombra verdosa.",
    "german": "Das Foto zeigt eine pelzige weiße Katze, die in einem grauen runden Korb schläft. Es wurde von oben aufgenommen. Die Katze ist komplett rund, und man kann nur ihr Gesicht unterscheiden. Ein Licht erleuchtet dich. Der Hintergrund ist ein grünlicher Teppich."
  },
  {
    "id": "0043",
    "file": "https://i.imgur.com/cf5GbZT.jpg",
    "portuguese": "Gatinho deitado dentro de um pote retangular transparente. Ele é branco em baixo e bege em cima. Sua cabeça está encostada na lateral direita do vidro e suas patinhas estão prensadas contra o mesmo.",
    "english": "Kitten lying inside a transparent rectangular pot. It is white on the bottom and beige on top. His head is leaning against the right side of the glass and his paws are pressed against it.",
    "spanish": "Gatito acostado dentro de una maceta rectangular transparente. Es blanco en la parte inferior y beige en la parte superior. Su cabeza está apoyada contra el lado derecho del vidrio y sus patas están presionadas contra él.",
    "german": "Kätzchen, das in einem transparenten rechteckigen Topf liegt. Es ist unten weiß und oben beige. Sein Kopf lehnt an der rechten Seite des Glases und seine Pfoten sind dagegen gedrückt."
  },
  {
    "id": "0044",
    "file": "https://i.imgur.com/6rtCa3W.jpg",
    "portuguese": "Gatinho dentro de um balde transparente. Ele é branco em baixo e cinza em cima, com umas listras mais escuras. Está com cara de mau, os olhos, fora do balde e levemente abertos, são verdes. Suas patinhas estão prensadas contra o material do balde.",
    "english": "Kitten inside a transparent bucket. It is white on the bottom and gray on top, with darker stripes. He looks mean, his eyes, out of the bucket and slightly open, are green. Its paws are pressed against the material of the bucket.",
    "spanish": "Gatito dentro de un balde transparente. Es blanco en la parte inferior y gris en la parte superior, con rayas más oscuras. Se ve mezquino, sus ojos, fuera del balde y levemente abiertos, son verdes. Sus patas se presionan contra el material del balde.",
    "german": "Kätzchen in einem transparenten Eimer. Es ist unten weiß und oben grau mit dunkleren Streifen. Er sieht gemein aus, seine Augen, aus dem Eimer und leicht geöffnet, sind grün. Seine Pfoten werden gegen das Material des Eimers gedrückt."
  },
  {
    "id": "0045",
    "file": "https://i.imgur.com/7SPA5mZ.jpg",
    "portuguese": "Gatinho sentado dentro de uma panela em cima de um fogão (desligado, claro). Ele é marrom com algumas manchas pretas, e a parte de baixo é branca. Está olhando para a câmera com a cabeça levemente virada. O fogão é branco, igualmente à parede.",
    "english": "Kitten sitting inside a pot on top of a stove (off, of course). It is brown with some black spots, and the underside is white. She is looking at the camera with her head turned slightly. The stove is white, similar to the wall.",
    "spanish": "Gatito sentado dentro de una olla encima de una estufa (apagado, por supuesto). Es de color marrón con algunas manchas negras y la parte inferior es blanca. Ella está mirando a la cámara con la cabeza ligeramente girada. La estufa es blanca, similar a la pared.",
    "german": "Kätzchen sitzt in einem Topf auf einem Herd (natürlich ausgeschaltet). Es ist braun mit einigen schwarzen Flecken und die Unterseite ist weiß. Sie schaut mit leicht gedrehtem Kopf in die Kamera. Der Ofen ist weiß, ähnlich wie die Wand."
  },
  {
    "id": "0046",
    "file": "https://i.imgur.com/RoNmRmk.jpg",
    "portuguese": "Gatinho dentro de uma caixa de papelão. Ele está meio de lado, meio com a barriga para cima. É cinza com manchas pretas e suas patas e barriga são brancos. Suas patas dianteiras estão esticadas acima da cabeça e ele está olhando para cima. O fundo é um chão de madeira e um tapete.",
    "english": "Kitten inside a cardboard box. He's half on his side, half belly up. It is gray with black spots and its paws and belly are white. His front paws are stretched above his head and he is looking up. The background is a wooden floor and a rug.",
    "spanish": "Gatito dentro de una caja de cartón. Está medio de costado, medio panza arriba. Es gris con manchas negras y sus patas y vientre son blancos. Sus patas delanteras están estiradas por encima de su cabeza y mira hacia arriba. El fondo es un suelo de madera y una alfombra.",
    "german": "Kätzchen in einem Karton. Er liegt halb auf der Seite, halb auf dem Bauch. Es ist grau mit schwarzen Flecken und seine Pfoten und sein Bauch sind weiß. Seine Vorderpfoten sind über seinen Kopf gestreckt und er schaut nach oben. Der Hintergrund ist ein Holzboden und ein Teppich."
  },
  {
    "id": "0047",
    "file": "https://i.imgur.com/eW5YE7t.jpg",
    "portuguese": "Gatinho branco dormindo dentro de uma piada de banheiro, também branca. Ele é bem peludo e está um pouco sujo. Está bem encolhido e com um de seus olhos azuis abertos, olhando para a câmera. Sua pata esconde levemente o seu rosto.",
    "english": "White kitten sleeping inside a bathroom joke, also white. He's very hairy and a little dirty. He's curled up tight and with one of his blue eyes open, looking at the camera. His paw slightly hides his face.",
    "spanish": "Gatito blanco durmiendo dentro de un lavabo de baño, también blanco. Es muy peludo y un poco sucio. Está bien acurrucado y con uno de sus ojos azules abierto, mirando a la cámara. Su pata oculta ligeramente su rostro.",
    "german": "Weißes Kätzchen, das in einem Badezimmerwitz schläft, ebenfalls weiß. Er ist sehr behaart und ein wenig schmutzig. Er hat sich fest zusammengerollt und schaut mit einem seiner blauen Augen offen in die Kamera. Seine Pfote verdeckt leicht sein Gesicht."
  },
  {
    "id": "0048",
    "file": "https://i.imgur.com/q0ivdBk.jpg",
    "portuguese": "Gatinho dormindo dentro de um aquário redondo. Ele é peludo, cinza claro com algumas manchas mais escuras no rosto, patas e orelhas. Sua cabeça está para fora e ele está encarando a câmera. Uma de suas patas está apoiada no vidro. O fundo é um carpete bege.",
    "english": "Kitten sleeping inside a round aquarium. He is furry, light gray with some darker spots on his face, paws, and ears. His head is out and he's facing the camera. One of his paws is resting on the glass. The background is a beige carpet.",
    "spanish": "Gatito durmiendo dentro de un acuario redondo. Es peludo, de color gris claro con algunas manchas más oscuras en la cara, las patas y las orejas. Su cabeza está fuera y está frente a la cámara. Una de sus patas descansa sobre el cristal. El fondo es una alfombra beige.",
    "german": "Kätzchen, das in einem runden Aquarium schläft. Er ist pelzig, hellgrau mit einigen dunkleren Flecken auf seinem Gesicht, Pfoten und Ohren. Sein Kopf ist draußen und er steht vor der Kamera. Eine seiner Pfoten ruht auf dem Glas. Der Hintergrund ist ein beiger Teppich."
  },
  {
    "id": "0049",
    "file": "https://i.imgur.com/n2OHK3y.jpg",
    "portuguese": "A imagem mostra um gatinho laranja bem pequeno dentro de um grande pote com moedas. Ele está sentado, olhando para a câmera, e está embaçado devido ao vidro. Sua barriga é branca e ele não é muito peludo.",
    "english": "The image shows a very small orange kitten inside a large jar of coins. He's sitting, looking at the camera, and it's fogged up by the glass. His belly is white and he is not very hairy.",
    "spanish": "La imagen muestra un gatito naranja muy pequeño dentro de un gran frasco de monedas. Está sentado, mirando a la cámara, y está empañado por el cristal. Su vientre es blanco y no es muy peludo.",
    "german": "Das Bild zeigt ein sehr kleines orangefarbenes Kätzchen in einem großen Münzglas. Er sitzt da und schaut in die Kamera, die durch das Glas beschlagen ist. Sein Bauch ist weiß und er ist nicht sehr behaart."
  },
  {
    "id": "0050",
    "file": "https://i.imgur.com/dvGbpcH.jpg",
    "portuguese": "A foto mostra Luna, uma gata preta dentro de uma caixa de papelão. Ela aparece do \"busto\" para cima, é bem peluda e seus olhos verdes estão um pouco dilatados. O fundo é uma parede bege e um sofá cinza, com alguns porta retratos.",
    "english": "The photo shows Luna, a black cat inside a cardboard box. She appears from the \"bust\" up, is very hairy and her green eyes are a little dilated. The background is a beige wall and a gray sofa, with some picture frames.",
    "spanish": "La foto muestra a Luna, una gata negra dentro de una caja de cartón. Aparece de \"busto\" para arriba, es muy peluda y sus ojos verdes están un poco dilatados. El fondo es una pared beige y un sofá gris, con algunos marcos de fotos.",
    "german": "Das Foto zeigt Luna, eine schwarze Katze in einem Karton. Sie erscheint von der \"Büste\" aufwärts, ist sehr behaart und ihre grünen Augen sind ein wenig geweitet. Der Hintergrund ist eine beige Wand und ein graues Sofa mit einigen Bilderrahmen."
  },
  {
    "id": "0051",
    "file": "https://i.imgur.com/AX6EqqK.jpg",
    "portuguese": "A foto mostra Luna, uma gata preta dentro de uma caixa de papelão. Ela aparece do \"busto\" para cima, é bem peluda e seus olhos verdes estão um pouco dilatados. Ela olha para o lado, um pouco vesga. O fundo é uma parede bege e um sofá cinza, com alguns porta retratos.",
    "english": "The photo shows Luna, a black cat inside a cardboard box. She appears from the \"bust\" up, is very hairy and her green eyes are a little dilated. She looks to the side, a little cross-eyed. The background is a beige wall and a gray sofa, with some picture frames.",
    "spanish": "La foto muestra a Luna, una gata negra dentro de una caja de cartón. Aparece de \"busto\" para arriba, es muy peluda y sus ojos verdes están un poco dilatados. Ella mira hacia un lado, un poco bizca. El fondo es una pared beige y un sofá gris, con algunos marcos de fotos.",
    "german": "Das Foto zeigt Luna, eine schwarze Katze in einem Karton. Sie erscheint von der \"Büste\" aufwärts, ist sehr behaart und ihre grünen Augen sind ein wenig geweitet. Sie schaut zur Seite, ein wenig schielend. Der Hintergrund ist eine beige Wand und ein graues Sofa mit einigen Bilderrahmen."
  },
  {
    "id": "0052",
    "file": "https://i.imgur.com/C6nAjKP.jpg",
    "portuguese": "A foto mostra um gatinho cinza dentro de um pote de vidro. Ele está apertado, com metade da cabeça para fora e o olho levemente esbugalhado. Um outro gato, branco, tenta apertá-lo para também entrar no pote.",
    "english": "The photo shows a gray kitten inside a glass jar. He's tight, with half his head out and his eye slightly bulging. Another cat, white, tries to squeeze him to also enter the pot.",
    "spanish": "La foto muestra un gatito gris dentro de un frasco de vidrio. Está apretado, con la mitad de la cabeza fuera y el ojo ligeramente saltón. Otro gato, de color blanco, trata de apretarlo para entrar también en el frasco.",
    "german": "Das Foto zeigt ein graues Kätzchen in einem Glasgefäß. Er ist angespannt, mit einem halben Kopf nach außen und einem leicht hervortretenden Auge. Eine andere Katze, weiß, versucht ihn zu quetschen, damit er ebenfalls in den Topf kommt."
  },
  {
    "id": "0053",
    "file": "https://i.imgur.com/XRWrRrH.jpg",
    "portuguese": "Gatinho branco dentro de um pote redondo de vidro, parecido com um aquário. Ele é bem peludo e mal cabe no pote. Seus olhos estão para fora, bem dilatados.",
    "english": "White kitten inside a round glass pot, similar to an aquarium. He is very furry and barely fits in the pot. His eyes are out, well dilated.",
    "spanish": "Gatito blanco dentro de una maceta redonda de vidrio, similar a un acuario. Es muy peludo y apenas cabe en la maceta. Sus ojos están fuera, bien dilatados.",
    "german": "Weißes Kätzchen in einem runden Glastopf, ähnlich einem Aquarium. Er ist sehr pelzig und passt kaum in den Topf. Seine Augen sind heraus, gut geweitet."
  },
  {
    "id": "0054",
    "file": "https://i.imgur.com/lLUBQOs.jpg",
    "portuguese": "A foto mostra um gato cinza dentro de um pote retangular esbranquiçado. Sua cabeça, branca, está apoiada na lateral do pote, formando uma pose engraçada. Seus olhos verdes estão arregalados e sua boca está entreaberta. O fundo é um piso de madeira.",
    "english": "The photo shows a gray cat inside an off-white rectangular pot. His head, white, is leaning against the side of the pot, forming a funny pose. Her green eyes are wide and her mouth is parted. The background is a wooden floor.",
    "spanish": "La foto muestra un gato gris dentro de una maceta rectangular de color blanquecino. Su cabeza, blanca, está apoyada contra el costado de la maceta, formando una pose divertida. Sus ojos verdes están muy abiertos y su boca está entreabierta. El fondo es un suelo de madera.",
    "german": "Das Foto zeigt eine graue Katze in einem cremefarbenen rechteckigen Topf. Sein weißer Kopf lehnt an der Seite des Topfes und bildet eine lustige Pose. Ihre grünen Augen sind weit und ihr Mund ist geöffnet. Der Hintergrund ist ein Holzboden."
  },
  {
    "id": "0055",
    "file": "https://i.imgur.com/h9iSrPa.jpg",
    "portuguese": "Gatinho bebendo água em uma torneira. Sua barriga e cabeça são brancas e a parte de cima é marrom com manchas escuras. Seus olhos estão levemente fechados e sua linguinha está à mostra. O fundo está desfocado.",
    "english": "Kitten drinking water from a faucet. Its belly and head are white and the upper part is brown with dark spots. His eyes are slightly closed and his tongue is showing. The background is blurred.",
    "spanish": "Gatito bebiendo agua de un grifo. Su vientre y cabeza son blancos y la parte superior es marrón con manchas oscuras. Sus ojos están ligeramente cerrados y su lengua está a muestra. El fondo está borroso.",
    "german": "Kätzchen Trinkwasser aus einem Wasserhahn. Sein Bauch und Kopf sind weiß und der obere Teil ist braun mit dunklen Flecken. Seine Augen sind leicht geschlossen und seine Zunge zeigt sich. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0056",
    "file": "https://i.imgur.com/yw1v6KB.jpg",
    "portuguese": "Patinho filhote amarelo dormindo de pé. Ele está encolhidinho, com os olhos fechados, e a foto da a impressão de que está tombando. Suas penas estão arrepiadas e a parte de baixo está úmida.",
    "english": "Yellow baby duckling sleeping standing up. He's curled up, eyes closed, and the photo looks like he's toppling over. His feathers are ruffled and his underside is damp.",
    "spanish": "Patito bebé amarillo durmiendo de pie. Está acurrucado, con los ojos cerrados, y en la foto parece que se está cayendo. Sus plumas están erizadas y su parte inferior está húmeda.",
    "german": "Gelbes Babyentlein, das im Stehen schläft. Er hat sich zusammengerollt, die Augen geschlossen und das Foto sieht aus, als würde er umkippen. Seine Federn sind zerzaust und seine Unterseite ist feucht."
  },
  {
    "id": "0057",
    "file": "https://i.imgur.com/1AD0WCX.png",
    "portuguese": "Gabázinho enrolado em uma toalha, aparecendo apenas da cabeça para cima. Seu focinho está bem próximo da câmera e sua pelagem é bege com algumas partes pretas. Seus olhos estão entreabertos e sua orelha é bem grande. Segura a toalha rosa com uma de suas patinhas.",
    "english": "Possum wrapped in a towel, showing only from the head up. Its muzzle is very close to the camera and its coat is beige with some black parts. His eyes are half-closed and his ear is quite large. Hold the pink towel with one of your paws.",
    "spanish": "Zarigüeya envuelta en una toalla, mostrando solo de la cabeza hacia arriba. Su hocico está muy cerca de la cámara y su pelaje es beige con algunas partes negras. Sus ojos están medio cerrados y su oreja es bastante grande. Sostiene la toalla rosa con una de tus patas.",
    "german": "In ein Handtuch gewickeltes Opossum, das nur vom Kopf aufwärts zu sehen ist. Seine Schnauze ist sehr nah an der Kamera und sein Fell ist beige mit einigen schwarzen Teilen. Seine Augen sind halb geschlossen und sein Ohr ist ziemlich groß. Halten Sie das rosa Handtuch mit einer Ihrer Pfoten fest."
  },
  {
    "id": "0058",
    "file": "https://i.imgur.com/dEA5LKL.jpg",
    "portuguese": "A foto mostra um beija-flor se alimentando. Ele é bem pequeno, com as penas em alguns tons de verde. Seu rosto e asas possuem penas pretas. Está em movimento, fazendo suas asas estarem borradas. Seu bico está em uma flor roxa e rosa, próxima de algumas outras iguais. O fundo está desfocado.",
    "english": "The photo shows a hummingbird feeding. He is quite small, with feathers in a few shades of green. Its face and wings have black feathers. It's in motion, making its wings blurry. Its beak is in a purple and pink flower, next to some other similar ones. The background is blurred.",
    "spanish": "La foto muestra un colibrí alimentándose. Es bastante pequeño, con plumas en algunos tonos de verde. Su cara y alas tienen plumas negras. Está en movimiento, haciendo que sus alas se vuelvan borrosas. Su pico está en una flor morada y rosa, junto a otras similares. El fondo está borroso.",
    "german": "Das Foto zeigt eine Kolibrifütterung. Er ist ziemlich klein, mit Federn in ein paar Grüntönen. Sein Gesicht und seine Flügel haben schwarze Federn. Es ist in Bewegung und macht seine Flügel verschwommen. Sein Schnabel befindet sich in einer lila und rosa Blume, neben einigen anderen ähnlichen. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0059",
    "file": "https://i.imgur.com/OXbDGqn.jpg",
    "portuguese": "Cachorra porte médio branca deitada em uma cama. O sol que entra pela janela bate apenas em sua cabeça e suas patas dianteiras. Ela está em cima da cama e da pra ver a sombra da grade da janela. Está deitada de forma meio curvada e olhando diretamente para a direção de onde vem a luz.",
    "english": "Medium-sized white dog lying on a bed. The sun coming in through the window only hits its head and front paws. She is on top of the bed and you can see the shadow of the window grille. She is lying hunched over and looking directly in the direction the light is coming from.",
    "spanish": "Perro blanco de tamaño mediano acostado en una cama. El sol que entra por la ventana solo le da en la cabeza y las patas delanteras. Ella está encima de la cama y puedes ver la sombra de la reja de la ventana. Ella está acostada encorvada y mirando directamente en la dirección de donde viene la luz.",
    "german": "Mittelgroßer weißer Hund, der auf einem Bett liegt. Die durch das Fenster einfallende Sonne trifft nur auf Kopf und Vorderpfoten. Sie liegt oben auf dem Bett und man sieht den Schatten des Fenstergitters. Sie liegt vornübergebeugt und schaut direkt in die Richtung, aus der das Licht kommt."
  },
  {
    "id": "0060",
    "file": "https://i.imgur.com/pA7DN0l.jpg",
    "portuguese": "Uma vaquinha filhote de pé em meio à grama. Ela é branca com manchinhas pretas, peludinha, e está olhando para a esquerda, para um pedaço maior de grama (provavelmente pensando em comer).",
    "english": "A baby cow standing in the grass. She is white with black spots, furry, and is looking to her left at a larger patch of grass (probably thinking about eating).",
    "spanish": "Una vaca bebé de pie en la hierba. Ella es blanca con manchas negras, peluda y está mirando a su izquierda a un parche de hierba más grande (probablemente pensando en comer).",
    "german": "Eine Babykuh, die im Gras steht. Sie ist weiß mit schwarzen Flecken, pelzig und schaut nach links auf eine größere Grasfläche (wahrscheinlich denkt sie ans Essen)."
  },
  {
    "id": "0061",
    "file": "https://i.imgur.com/bIf8ulG.jpg",
    "portuguese": "Coelhinho bege em cima de uma cama bagunçada. Ele é bem pequeno e está virado para a esquerda, com as duas orelhas em pé. Apenas um de seus olhinhos pretos aparece na imagem, olhando para próximo da cama.",
    "english": "Beige bunny on top of a messy bed. He is quite small and is facing to the left, with both ears pricked up. Only one of her little black eyes appears in the image, looking at the bed next to her.",
    "spanish": "Conejito beige encima de una cama desordenada. Es bastante pequeño y mira hacia la izquierda, con ambas orejas erguidas. Solo uno de sus ojitos negros aparece en la imagen, mirando la cama junto a ella.",
    "german": "Beiges Häschen auf einem unordentlichen Bett. Er ist ziemlich klein und schaut nach links, mit beiden Ohren aufgestellt. Nur eines ihrer kleinen schwarzen Augen erscheint auf dem Bild und blickt auf das Bett neben ihr."
  },
  {
    "id": "0062",
    "file": "https://i.imgur.com/2AOesa7.png",
    "portuguese": "A foto levemente tremida mostra um gato de porte médio branco com manchas marrons na cabeça. Seus olhos azuis olham para baixo e está em cima de um sofá azul escuro. No sofá tem algumas almofadas, ao fundo tem um chão branco, duas plantas e um quadro na parede amarelada.",
    "english": "The slightly blurred photo shows a medium-sized white cat with brown spots on its head. His blue eyes look down and he's on top of a dark blue couch. On the sofa there are some pillows, in the background there is a white floor, two plants and a picture on the yellowed wall.",
    "spanish": "La foto ligeramente borrosa muestra un gato blanco de tamaño mediano con manchas marrones en la cabeza. Sus ojos azules miran hacia abajo y está encima de un sofá azul oscuro. En el sofá hay unos cojines, al fondo hay un suelo blanco, dos plantas y un cuadro en la pared amarillenta.",
    "german": "Das leicht unscharfe Foto zeigt eine mittelgroße weiße Katze mit braunen Flecken auf dem Kopf. Seine blauen Augen blicken nach unten und er liegt auf einer dunkelblauen Couch. Auf dem Sofa liegen einige Kissen, im Hintergrund ein weißer Boden, zwei Pflanzen und ein Bild an der vergilbten Wand."
  },
  {
    "id": "0063",
    "file": "https://i.imgur.com/egHgS7m.jpg",
    "portuguese": "Gato cinza e branco gordo deitado em cima da bunda de gato escaminha peludo. O gato cinza se encontra mostrando a barriga e de olhos fechados, enquanto o outro possui os olhos verdes e abertos. Os dois estão em cima de uma cama e a parede atrás deles é branca.",
    "english": "Fat gray and white cat lying on top of furry scaling cat ass. The gray cat is showing its belly and eyes closed, while the other has green and open eyes. The two are on top of a bed and the wall behind them is white.",
    "spanish": "Gato gordo gris y blanco acostado encima de la cola de un gato escalando peludo. El gato gris muestra el vientre y los ojos cerrados, mientras que el otro tiene los ojos verdes y abiertos. Los dos están encima de una cama y la pared detrás de ellos es blanca.",
    "german": "Fette graue und weiße Katze, die auf einem pelzigen Katzenarsch liegt. Die graue Katze zeigt ihren Bauch und ihre geschlossenen Augen, während die andere grüne und offene Augen hat. Die beiden liegen auf einem Bett und die Wand hinter ihnen ist weiß."
  },
  {
    "id": "0064",
    "file": "https://i.imgur.com/HGXn9Jx.jpg",
    "portuguese": "Foto de um hamster bege bem comprido, com o pelo ralo. Ele está de frente para um mini-notebook da apple, encarando a tela com seus olhinhos pretos. O fundo é uma poltrona verde de couro.",
    "english": "Photo of a very long beige hamster, with thin fur. He's in front of an apple mini-notebook, staring at the screen with his little black eyes. The background is a green leather armchair.",
    "spanish": "Foto de un hámster beige muy largo, con pelo fino. Está frente a una mini-portátil de Apple, mirando la pantalla con sus ojitos negros. El fondo es un sillón de cuero verde.",
    "german": "Foto eines sehr langen beigen Hamsters mit dünnem Fell. Er steht vor einem Mini-Notebook von Apple und starrt mit seinen kleinen schwarzen Augen auf den Bildschirm. Den Hintergrund bildet ein grüner Ledersessel."
  },
  {
    "id": "0065",
    "file": "https://i.imgur.com/8M9oTpf.jpg",
    "portuguese": "Foto de um coelhinho bege usando um pijama azul claro que consiste de uma blusinha de botão e um chapéu no estilo papai noel. Ele está em uma caminha de madeira com travesseiro e lençóis quadriculados na cor azul. Tem também uma almofada amarela de estrela e uma ovelhinha de pelúcia. Sua patinha segura na beirada da cama.",
    "english": "Photo of a beige bunny wearing light blue pajamas consisting of a button-up top and a Santa-style hat. He is on a wooden bed with a pillow and blue checkered sheets. He also has a yellow star pillow and a plush sheep. His paw grips the edge of the bed.",
    "spanish": "Foto de un conejito beige vestido con un pijama azul claro compuesto por una blusa abotonada y un gorro estilo Papá Noel. Está en una cama de madera con una almohada y sábanas a cuadros azules. También tiene una almohada de estrella amarilla y una oveja de peluche. Su pata agarra el borde de la cama.",
    "german": "Foto eines beigen Häschens, das einen hellblauen Schlafanzug trägt, der aus einem geknöpften Oberteil und einer Weihnachtsmütze besteht. Er liegt auf einem Holzbett mit Kissen und blau karierten Laken. Außerdem hat er ein gelbes Sternenkissen und ein Plüschschaf. Seine Pfote umklammert die Bettkante."
  },
  {
    "id": "0066",
    "file": "https://i.imgur.com/yCP0i0G.jpg",
    "portuguese": "Foto de um coelhinho bege usando um pijama azul claro que consiste de uma blusinha de botão e um chapéu no estilo papai noel. Ele está em uma caminha de madeira com travesseiro e lençóis quadriculados na cor azul. Ele está deitado no travesseiro, com os olhinhos fechados. O fundo é uma parede bege.",
    "english": "Photo of a beige bunny wearing light blue pajamas consisting of a button-up top and a Santa-style hat. He is on a wooden bed with a pillow and blue checkered sheets. He is lying on the pillow, eyes closed. The background is a beige wall.",
    "spanish": "Foto de un conejito beige vestido con un pijama azul claro compuesto por una blusa abotonada y un gorro estilo Papá Noel. Está en una cama de madera con una almohada y sábanas a cuadros azules. Él está acostado en la almohada, con los ojos cerrados. El fondo es una pared beige.",
    "german": "Foto eines beigen Häschens, das einen hellblauen Schlafanzug trägt, der aus einem geknöpften Oberteil und einer Weihnachtsmütze besteht. Er liegt auf einem Holzbett mit Kissen und blau karierten Laken. Er liegt auf dem Kissen, die Augen geschlossen. Der Hintergrund ist eine beige Wand."
  },
  {
    "id": "0067",
    "file": "https://i.imgur.com/HIusFLC.jpg",
    "portuguese": "Ouriço ao lado de um patinho de borracha, com alguns centímetros de água ao chão. Ele é bem pequeno e está olhando levemente para a cima. O patinho amarelo parece encaram a câmera. Há um pouco de espuma na água.",
    "english": "Hedgehog next to a rubber ducky, with a few inches of water on the floor. He is quite small and is looking up slightly. The yellow duckling seems to stare at the camera. There is a little foam in the water.",
    "spanish": "Erizo junto a un patito de goma, con unos centímetros de agua en el suelo. Es bastante pequeño y mira ligeramente hacia arriba. El patito amarillo parece mirar fijamente a la cámara. Hay un poco de espuma en el agua.",
    "german": "Igel neben einem Quietscheentchen, mit ein paar Zentimetern Wasser auf dem Boden. Er ist ziemlich klein und schaut leicht nach oben. Das gelbe Entlein scheint in die Kamera zu starren. Es ist ein wenig Schaum im Wasser."
  },
  {
    "id": "0068",
    "file": "https://i.imgur.com/LSvBYiZ.png",
    "portuguese": "Gato branco com a região dos olhos e orelha marrons. Está deitado em um braço e a pessoa está abraçando-o. Há algumas cobertas também. A foto tem um tom alaranjado.",
    "english": "White cat with brown eyes and ears. It is lying on one arm and the person is hugging it. There are some covers too. The photo has an orange tint.",
    "spanish": "Gato blanco con ojos y orejas marrones. Está acostado sobre un brazo y la persona lo está abrazando. Hay algunas cubiertas también. La foto tiene un tinte naranja.",
    "german": "Weiße Katze mit braunen Augen und Ohren. Es liegt auf einem Arm und die Person umarmt es. Es gibt auch einige Cover. Das Foto hat einen orangefarbenen Farbton."
  },
  {
    "id": "0069",
    "file": "https://i.imgur.com/tqHwTWR.jpg",
    "portuguese": "A imagem mostra dois gatos com algumas flores na frente. O primeiro, branco, está na esquerda, cheirando as flores, que são brancas. O segundo, cinza em cima e branco em baixo, está cheirando o gato branco, com as orelhas para baixo. O fundo é um grande jardim, com grama baixa e algumas árvores.",
    "english": "The image shows two cats with some flowers in front. The first one, white, is on the left, smelling the flowers, which are white. The second, gray above and white below, is sniffing the white cat, ears down. The background is a large garden, with low grass and some trees.",
    "spanish": "La imagen muestra dos gatos con unas flores delante. El primero, blanco, está a la izquierda, oliendo las flores, que son blancas. El segundo, gris arriba y blanco abajo, está olfateando al gato blanco, con las orejas hacia abajo. El fondo es un gran jardín, con hierba baja y algunos árboles.",
    "german": "Das Bild zeigt zwei Katzen mit Blumen davor. Der erste, weiß, ist links und riecht an den Blumen, die weiß sind. Die zweite, oben grau und unten weiß, schnüffelt mit den Ohren nach unten an der weißen Katze. Der Hintergrund ist ein großer Garten mit niedrigem Gras und einigen Bäumen."
  },
  {
    "id": "0070",
    "file": "https://i.imgur.com/bxWVt2J.jpg",
    "portuguese": "Sapinho pendurado em um galho fino. O ângulo mostra que sua parte de baixo é meio rosada e ele está olhando para a esquerda. Segura no galho com suas perninhas e mãozinhas. Em cima de sua cabecinha verde há uma borboleta laranja, com algumas bolinhas pretas nas asas. O fundo está desfocado.",
    "english": "Little frog hanging on a thin branch. The angle shows that his underside is kind of pink and he's looking to the left. He holds on to the branch with his little legs and hands. On top of its little green head is an orange butterfly, with some black polka dots on its wings. The background is blurred.",
    "spanish": "Ranita colgando de una rama delgada. El ángulo muestra que su parte inferior es un poco rosada y mira hacia la izquierda. Se aferra a la rama con sus pequeñas piernas y manos. Encima de su cabecita verde hay una mariposa naranja, con unos lunares negros en las alas. El fondo está borroso.",
    "german": "Kleiner Frosch, der an einem dünnen Ast hängt. Der Winkel zeigt, dass seine Unterseite etwas rosa ist und er nach links schaut. Er hält sich mit seinen Beinchen und Händen am Ast fest. Auf seinem kleinen grünen Kopf sitzt ein orangefarbener Schmetterling mit einigen schwarzen Tupfen auf den Flügeln. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0071",
    "file": "https://i.imgur.com/IwmUIGC.jpg",
    "portuguese": "Guaxinim escondido atrás de umas pedras, mostrando apenas a sua cabeça e bocejando. Ele é marrom, com manchas pretas nos olhos, e suas orelhas e parte do fucinho e redor dos olhos é bege. Está com os olhos fechados e a boca em aberta, mostrando a língua. Seus bigodinhos estão vem evidentes. O fundo está desfocado.",
    "english": "Raccoon hiding behind some rocks, showing only its head and yawning. He is brown, with black spots on his eyes, and his ears and part of his muzzle and around his eyes are beige. He has his eyes closed and his mouth open, showing his tongue. His whiskers are evident. The background is blurred.",
    "spanish": "Mapache escondido detrás de unas rocas, mostrando solo su cabeza y bostezando. Es de color marrón, con manchas negras en los ojos, y las orejas y parte del hocico y alrededor de los ojos son de color beige. Tiene los ojos cerrados y la boca abierta, mostrando la lengua. Sus bigotes son evidentes. El fondo está borroso.",
    "german": "Waschbär versteckt sich hinter einigen Felsen, zeigt nur seinen Kopf und gähnt. Er ist braun, mit schwarzen Flecken auf den Augen, und seine Ohren und ein Teil seiner Schnauze und um seine Augen herum sind beige. Er hat seine Augen geschlossen und seinen Mund geöffnet und zeigt seine Zunge. Seine Schnurrhaare sind offensichtlich. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0072",
    "file": "https://i.imgur.com/lySJwHK.jpg",
    "portuguese": "Vaquinha marrom peluda no colo de uma pessoa. Ela é filhotinha e aparece apenas da metade do corpo para cima. Uma das patinhas está esticada em direção à câmera e está dando língua. A pessoa segurando ela usa um casaco preto.",
    "english": "Furry brown cow on a person's lap. She is a puppy and appears only halfway up. One of the paws is stretched out towards the camera and is chuckling. The person holding her wears a black coat.",
    "spanish": "Vaca marrón peluda en el regazo de una persona. Es una cachorrita y aparece solo hasta la mitad. Una de las patas está estirada hacia la cámara y se ríe. La persona que la sostiene lleva un abrigo negro.",
    "german": "Pelzige braune Kuh auf dem Schoß einer Person. Sie ist ein Welpe und erscheint nur auf halber Höhe. Eine der Pfoten ist in Richtung Kamera ausgestreckt und kichert. Die Person, die sie hält, trägt einen schwarzen Mantel."
  },
  {
    "id": "0073",
    "file": "https://i.imgur.com/HcsYkCE.jpg",
    "portuguese": "Tartaruguinha em cima de um mini-skate, sob uma bancada. Sua cabecinha está erguida e seus bracinhos esticados. É verde musgo e está virada quase que na direção da câmera, levemente para a esquerda.",
    "english": "Little turtle on top of a mini-skateboard, under a bench. Her little head is up and her little arms are outstretched. It is moss green and is facing almost towards the camera, slightly to the left.",
    "spanish": "Pequeña tortuga encima de una mini-patineta, debajo de un banco. Su cabecita está erguida y sus bracitos extendidos. Es de color verde musgo y mira casi hacia la cámara, ligeramente hacia la izquierda.",
    "german": "Kleine Schildkröte auf einem Mini-Skateboard, unter einer Bank. Ihr kleiner Kopf ist hoch und ihre kleinen Arme sind ausgestreckt. Es ist moosgrün und zeigt fast zur Kamera, leicht nach links."
  },
  {
    "id": "0074",
    "file": "https://i.imgur.com/VFmGvEu.jpg",
    "portuguese": "Patinho com um pé no chão e outro em um mini-skate. Ele é amarelo e bem pequeno, suas asinhas estão rente ao corpo e seus olhinhos pretos encaram a câmera. O skate possui uma roda vermelha e outra azul. O fundo é um chão de blocos e uma parede de tijolos.",
    "english": "Duckling with one foot on the ground and the other on a mini-skateboard. He is yellow and very small, his wings are close to his body and his little black eyes face the camera. The skateboard has a red and a blue wheel. The background is a block floor and a brick wall.",
    "spanish": "Patito con un pie en el suelo y el otro en un mini-patineta. Es amarillo y muy pequeño, sus alas están pegadas a su cuerpo y sus ojitos negros miran a la cámara. La patineta tiene una rueda roja y otra azul. El fondo es un piso de bloques y una pared de ladrillos.",
    "german": "Entlein mit einem Fuß auf dem Boden und dem anderen auf einem Mini-Skateboard. Er ist gelb und sehr klein, seine Flügel liegen eng am Körper an und seine kleinen schwarzen Augen blicken in die Kamera. Das Skateboard hat ein rotes und ein blaues Rad. Der Hintergrund ist ein Blockboden und eine Backsteinmauer."
  },
  {
    "id": "0075",
    "file": "https://i.imgur.com/zL6zfE0.jpg",
    "portuguese": "Ratinho em cima de um skate, no ar. Ele é cinza escuro, com algumas manchinhas rosa claro. O skate no ar está levemente virado para cima. O ratinho segura o skate com suas patinhas e olha para a frente. O fundo está embaçado.",
    "english": "Mouse on top of a skateboard, in the air. It is dark gray with some light pink spots. The skateboard in the air is facing slightly upwards. The mouse holds the skateboard in its paws and looks ahead. The background is blurry.",
    "spanish": "Ratón encima de una patineta, en el aire. Es de color gris oscuro con algunas manchas de color rosa claro. La patineta en el aire mira ligeramente hacia arriba. El ratón sostiene la patineta en sus patas y mira hacia adelante. El fondo es borroso.",
    "german": "Maus auf einem Skateboard, in der Luft. Es ist dunkelgrau mit einigen hellrosa Flecken. Das Skateboard in der Luft zeigt leicht nach oben. Die Maus hält das Skateboard in ihren Pfoten und blickt nach vorne. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0076",
    "file": "https://i.imgur.com/qTonYak.png",
    "portuguese": "Cachorro salsicha em cima de um skate. Ele é longo e marrom, com o fucinho e orelhas também longas. Está sentado no skate e usa uma coleirinha azul com um coração rosa no pescoço. Olha para a esquerda e está com a linguinha para fora. O fundo é uma calçada de concreto com um pouco de grama logo depois.",
    "english": "Sausage dog on top of a skateboard. He is long and brown, with a long muzzle and ears. He is sitting on a skateboard and wears a blue collar with a pink heart around his neck. He looks to the left and has his tongue out. The background is a concrete driveway with some grass just beyond.",
    "spanish": "Perro salchicha encima de una patineta. Es largo y castaño, con un hocico largo y orejas. Está sentado en una patineta y lleva un collar azul con un corazón rosa alrededor del cuello. Mira a la izquierda y tiene la lengua afuera. El fondo es un camino de entrada de hormigón con un poco de hierba más allá.",
    "german": "Wursthund auf einem Skateboard. Er ist lang und braun, mit einer langen Schnauze und Ohren. Er sitzt auf einem Skateboard und trägt einen blauen Kragen mit einem rosa Herz um den Hals. Er schaut nach links und hat seine Zunge heraus. Der Hintergrund ist eine betonierte Einfahrt mit etwas Gras direkt dahinter."
  },
  {
    "id": "0077",
    "file": "https://i.imgur.com/saHOxQO.png",
    "portuguese": "Gato escaminha peludo, com olhos verdes e arregalados, olhando para fora da tela. Está deitado em cima de uma cama meio descoberta, mostrando as patas grandes. Ele se encontra de perfil. O fundo é uma parede branca.",
    "english": "A furry scaly cat, with wide green eyes, looking out of the screen. He is lying on top of a bed half uncovered, showing his big paws. He is in profile. The background is a white wall.",
    "spanish": "Un gato peludo y escamoso, con grandes ojos verdes, mirando por la pantalla. Está acostado sobre una cama medio descubierto, mostrando sus grandes patas. Él está de perfil. El fondo es una pared blanca.",
    "german": "Eine pelzige, schuppige Katze mit großen grünen Augen, die aus dem Bildschirm schaut. Er liegt halb unbedeckt auf einem Bett und zeigt seine großen Pfoten. Er ist im Profil. Der Hintergrund ist eine weiße Wand."
  },
  {
    "id": "0078",
    "file": "https://i.imgur.com/FqVOe4L.png",
    "portuguese": "A foto mostra um porquinho filhote dentro de uma banheira com apenas dois dedinhos de água. Ele é rosado e está mordendo um brinquedinho rosa que consiste em um barco de porquinho com três porquinhos menores dentro.",
    "english": "The photo shows a baby pig in a bathtub with just two fingers of water. He is pink and is biting a little pink toy that consists of a piggy boat with three smaller pigs inside.",
    "spanish": "La foto muestra a un cerdito en una bañera con solo dos dedos de agua. Es rosado y muerde un pequeño juguete rosado que consiste en un bote de cerditos con tres cerdos más pequeños adentro.",
    "german": "Das Foto zeigt ein Babyschwein in einer Badewanne mit nur zwei Fingern Wasser. Er ist rosa und beißt auf ein kleines rosa Spielzeug, das aus einem Schweineboot mit drei kleineren Schweinen im Inneren besteht."
  },
  {
    "id": "0079",
    "file": "https://i.imgur.com/82X0kfA.png",
    "portuguese": "A imagem mostra um gato de pelagem branca com manchas marrons dormindo abraçando as patas traseiras, formando um caracol. Foi tirada de uma vista frontal. Ao fundo há uma parede branca e duas pelúcias, sendo a da esquerda um urso branco com as patas e nariz bege tamanho médio e a da direita uma vaca de pelúcia branca com preto e detalhes marrons (como o chifre e as narinas). O gato está sobre uma cama, o lençol é branco com desenhos de coelhos.",
    "english": "The image shows a white fur cat with brown spots sleeping hugging its hind legs, forming a snail. It was taken from a front view. In the background there is a white wall and two plush toys, the one on the left is a white bear with medium-sized beige paws and nose and the one on the right is a white plush cow with black and brown details (such as the horn and nostrils). The cat is on a bed, the sheet is white with drawings of rabbits.",
    "spanish": "La imagen muestra a un gato de pelaje blanco con manchas marrones durmiendo abrazado a sus patas traseras, formando un caracol. Fue tomada desde una vista frontal. Al fondo hay una pared blanca y dos peluches, el de la izquierda es un oso blanco con patas y nariz beige de tamaño mediano y el de la derecha es una vaca de peluche blanca con detalles en negro y marrón (como el cuerno y fosas nasales). El gato está sobre una cama, la sábana es blanca con dibujos de conejos.",
    "german": "Das Bild zeigt eine weiße Fellkatze mit braunen Flecken, die schlafend ihre Hinterbeine umarmt und eine Schnecke bildet. Es wurde von vorne aufgenommen. Im Hintergrund gibt es eine weiße Wand und zwei Plüschtiere, das linke ist ein weißer Bär mit mittelgroßen beigen Pfoten und Nase und das rechte eine weiße Plüschkuh mit schwarzen und braunen Details (wie z Horn und Nasenlöcher). Die Katze liegt auf einem Bett, das Laken ist weiß mit Hasenzeichnungen."
  },
  {
    "id": "0080",
    "file": "https://i.imgur.com/SRkeYWo.jpg",
    "portuguese": "Cachorro deitado de frente para a câmera. É pequeno, bege e peludo, com o meio do rosto e as patas brancas. Seus olhos pretos dilatados encaram a câmera e está dando língua. Suas patinhas dianteiras estão juntas. Está deitado sobre uma bancada de madeira, e o fundo desfocado mostra uma sala com algumas plantas.",
    "english": "Dog lying down facing the camera. He is small, beige and furry, with the middle of his face and white paws. His dilated black eyes stare at the camera and he's chuckling. Their front paws are together. He is lying on a wooden bench, and the blurred background shows a room with some plants.",
    "spanish": "Perro acostado frente a la cámara. Es pequeño, beige y peludo, con la mitad de la cara y las patas blancas. Sus dilatados ojos negros miran fijamente a la cámara y se ríe. Sus patas delanteras están juntas. Él está acostado en un banco de madera y el fondo borroso muestra una habitación con algunas plantas.",
    "german": "Hund, der sich mit Blick auf die Kamera hinlegt. Er ist klein, beige und pelzig, mit der Mitte seines Gesichts und weißen Pfoten. Seine geweiteten schwarzen Augen starren in die Kamera und er kichert. Ihre Vorderpfoten sind zusammen. Er liegt auf einer Holzbank, und der unscharfe Hintergrund zeigt einen Raum mit einigen Pflanzen."
  },
  {
    "id": "0081",
    "file": "https://i.imgur.com/JyTPU2I.jpg",
    "portuguese": "A foto mostra um cachorrinho bege bem pequeno, visto de cima. Ele está sentado e olhando para a frente. Seu pelo é ralo e vai ficando um pouco mais escuro perto do focinho e seus olhinhos pretos estão brilhando. Acima dele é possível ver a parte de trás de um cachorro bem maior. Está de lado e o seu pelo preto também é bem ralo. Seu rabo está tremido, indicando movimento. O chão é verde e a parede atrás dos cachorros é branca, e há uma corrente no chão.",
    "english": "The photo shows a very small beige puppy, seen from above. He is sitting and looking straight ahead. Its fur is thin and gets a little darker near the muzzle and its little black eyes are shining. Above him you can see the back of a much larger dog. It is on its side and its black fur is also very thin. His tail is quivering, indicating movement. The floor is green and the wall behind the dogs is white, and there is a chain on the floor.",
    "spanish": "La foto muestra un cachorro beige muy pequeño, visto desde arriba. Está sentado y mirando al frente. Su pelaje es fino y se oscurece un poco cerca del hocico y sus ojitos negros brillan. Sobre él se puede ver el lomo de un perro mucho más grande. Está de lado y su pelaje negro también es muy fino. Su cola está temblorosa, lo que indica movimiento. El piso es verde y la pared detrás de los perros es blanca, y hay una cadena en el piso.",
    "german": "Das Foto zeigt einen sehr kleinen beigefarbenen Welpen, von oben gesehen. Er sitzt und schaut geradeaus. Sein Fell ist dünn und wird in der Nähe der Schnauze etwas dunkler und seine kleinen schwarzen Augen leuchten. Über ihm sieht man den Rücken eines viel größeren Hundes. Er liegt auf der Seite und sein schwarzes Fell ist ebenfalls sehr dünn. Sein Schwanz zittert und zeigt Bewegung an. Der Boden ist grün und die Wand hinter den Hunden ist weiß, und auf dem Boden liegt eine Kette."
  },
  {
    "id": "0082",
    "file": "https://i.imgur.com/yvOkUlA.jpg",
    "portuguese": "A foto mostra um coelhinho bege. Seus pelos são ralos e suas orelhas levantadas são iluminadas por uma janela atrás de si, mostrando suas veias. Seu rostinho está meio virado para a esquerda, sendo possível ver apenas um de seus olhinhos pretos. Seus bigodes são bem longos.",
    "english": "The photo shows a beige bunny. His fur is sparse and his raised ears are lit by a window behind him, showing his veins. His little face is half turned to the left, and you can only see one of his little black eyes. Their whiskers are very long.",
    "spanish": "La foto muestra un conejito beige. Su pelaje es fino y sus orejas levantadas están iluminadas por una ventana detrás de él, mostrando sus venas. Su carita está medio girada hacia la izquierda, y solo se ve uno de sus ojitos negros. Sus bigotes son muy largos.",
    "german": "Das Foto zeigt einen beigen Hasen. Sein Fell ist spärlich und seine erhobenen Ohren werden von einem Fenster hinter ihm beleuchtet und zeigen seine Adern. Sein kleines Gesicht ist halb nach links gedreht, und man sieht nur eines seiner kleinen schwarzen Augen. Ihre Schnurrhaare sind sehr lang."
  },
  {
    "id": "0083",
    "file": "https://i.imgur.com/R6rZFhD.jpg",
    "portuguese": "A foto está tremida e mostra um gatinho bege filhote. Seus olhos pretos estão dilatados e suas patinhas agarram um morando quase do tamanho de sua cabeça. É possível também ver dois dedinhos de uma pessoa segurando o morando. O fundo é uma parede bege.",
    "english": "The photo is blurry and shows a baby beige kitten. Its black eyes are dilated and its paws grasp a moray almost the size of its head. It is also possible to see two little fingers of a person holding the morando. The background is a beige wall.",
    "spanish": "La foto está borrosa y muestra un gatito beige bebé. Sus ojos negros están dilatados y sus patas agarran una fresa casi del tamaño de su cabeza. También es posible ver los dedos de una persona sosteniendo la fresa. El fondo es una pared beige.",
    "german": "Das Foto ist verschwommen und zeigt ein babybeiges Kätzchen. Seine schwarzen Augen sind geweitet und seine Pfoten greifen eine Muräne von fast der Größe seines Kopfes. Es ist auch möglich, zwei kleine Finger einer Person zu sehen, die den Morando hält. Der Hintergrund ist eine beige Wand."
  },
  {
    "id": "0084",
    "file": "https://i.imgur.com/oLOR32q.jpg",
    "portuguese": "A foto mostra um furão na praia. Seu pelo é bege bem claro, indo para o branco próximo à cabeça e para o marrom nas patas. Está olhando para algum lugar à esquerda, além da câmera. Seus patinhas dianteiras o apoiam na areia. Ao fundo, apenas o céu azul.",
    "english": "The photo shows a ferret on the beach. Its fur is very light beige, going to white near the head and brown on the feet. He's looking somewhere to the left, beyond the camera. Its front paws support it on the sand. In the background, just the blue sky.",
    "spanish": "La foto muestra un hurón en la playa. Su pelaje es beige muy claro, pasando de blanco cerca de la cabeza y marrón en las patas. Está mirando hacia algún lugar a la izquierda, más allá de la cámara. Sus patas delanteras lo sostienen sobre la arena. En el fondo, sólo el cielo azul.",
    "german": "Das Foto zeigt ein Frettchen am Strand. Sein Fell ist sehr hellbeige, wird am Kopf weiß und an den Füßen braun. Er schaut irgendwo nach links, über die Kamera hinaus. Seine Vorderpfoten stützen ihn auf dem Sand. Im Hintergrund nur der blaue Himmel."
  },
  {
    "id": "0085",
    "file": "https://i.imgur.com/qN2eQQ0.jpg",
    "portuguese": "A foto mostra um gatinho abraçado a uma tartaruga. O gato é pequeno e cinza, com muito pelo. Está dormindo virado para cima, seus olhinhos fechados e sua boca levemente aberta, revelando alguns dentinhos. Ele segura a tartaruguinha também pequena, verde. Estão no colo de alguém, que possui a pele clara e usa uma blusa branca de estrelas.",
    "english": "The photo shows a kitten hugging a turtle. The cat is small and gray, with a lot of fur. He's sleeping face up, his little eyes closed and his mouth slightly open, revealing some tiny teeth. He holds the also small, green turtle. They are on someone's lap, who has fair skin and wears a white blouse with stars.",
    "spanish": "La foto muestra a un gatito abrazando a una tortuga. El gato es pequeño y gris, con mucho pelaje. Está durmiendo boca arriba, sus ojitos cerrados y su boca ligeramente abierta, dejando al descubierto unos diminutos dientes. Sostiene la también pequeña tortuga verde. Están en el regazo de alguien, que tiene la piel clara y viste una blusa blanca con estrellas.",
    "german": "Das Foto zeigt ein Kätzchen, das eine Schildkröte umarmt. Die Katze ist klein und grau, mit viel Fell. Er schläft mit dem Gesicht nach oben, seine kleinen Augen sind geschlossen und sein Mund ist leicht geöffnet und zeigt einige winzige Zähne. Er hält die ebenfalls kleine, grüne Schildkröte. Sie liegen auf dem Schoß von jemandem, der helle Haut hat und eine weiße Bluse mit Sternen trägt."
  },
  {
    "id": "0086",
    "file": "https://i.imgur.com/d70w4tW.jpg",
    "portuguese": "Uma cadela vira-lata de pelagem preta e espessa, com o rosto e focinho cinza. Está dormindo deitada em forma de bola, em cima de um tapete vermelho menor do que ela. O chão é de cerâmica branca.",
    "english": "A stray dog with a thick black coat, with a gray face and muzzle. She's sleeping lying in a ball, on a red carpet smaller than she is. The floor is white ceramic.",
    "spanish": "Un perro callejero de espeso pelaje negro, con cara y hocico grises. Está durmiendo acostada sobre una alfombra roja más pequeña que ella. El suelo es de cerámica blanca.",
    "german": "Ein streunender Hund mit einem dicken schwarzen Fell, mit grauem Gesicht und Schnauze. Sie schläft in einer Kugel liegend auf einem roten Teppich, kleiner als sie ist. Der Boden ist aus weißer Keramik."
  },
  {
    "id": "0087",
    "file": "https://i.imgur.com/d4HA8Qd.png",
    "portuguese": "Gato sentado em cima de uma estante preta. Ele é magro e longo, branco, e possui a cara cinza, exceto pela boca. O arranjo dos pelos faz parecer que está usando uma máscara, como a do batman. Seus olhos azuis escaram algo além da câmera, à direita, e o modo que está sentado é levemente torto. À esquerda, na parede, há uma televisão ligada, e aos fundos alguns móveis.",
    "english": "Cat sitting on top of a black bookcase. He is thin and long, white, and has a gray face, except for his mouth. The arrangement of the fur makes it look like he's wearing a mask, like Batman's. His blue eyes glare at something beyond the camera on the right, and the way he's sitting is slightly crooked. To the left, on the wall, there is a television on, and in the back some furniture.",
    "spanish": "Gato sentado encima de un estante negro. Es delgado y largo, blanco y tiene la cara gris, excepto por la boca. La disposición del pelaje hace que parezca que lleva una máscara, como la de Batman. Sus ojos azules miran algo más allá de la cámara a la derecha, y la forma en que está sentado es ligeramente torcida. A la izquierda, en la pared, hay un televisor encendido, y al fondo unos muebles.",
    "german": "Katze sitzt oben auf einem schwarzen Bücherregal. Er ist dünn und lang, weiß und hat bis auf seinen Mund ein graues Gesicht. Die Anordnung des Fells lässt es so aussehen, als würde er eine Maske tragen, wie die von Batman. Seine blauen Augen starren auf etwas rechts hinter der Kamera, und er sitzt leicht schief. Links an der Wand hängt ein Fernseher und hinten einige Möbel."
  },
  {
    "id": "0088",
    "file": "https://i.imgur.com/kcT1h1a.jpg",
    "portuguese": "A foto mostra um coelhinho bege usando roupinhas de detetive. A blusa marrom possui uma camisa de botões branca e uma gravata vermelha por dentro. Por cima, uma capa quadriculada em marrom e branco. Na cabeça, suas orelhinhas estão abaixadas, e há um chapéu quadriculado da mesma cor. Está sentado, levemente virado para a direita. O fundo desfocado mostra uma árvore de folhas alaranjadas.",
    "english": "The photo shows a beige bunny wearing detective clothes. The brown blouse has a white button-down shirt and a red tie inside. On top, a checkered cover in brown and white. On her head, her little ears are down, and there is a checkered hat of the same color. He is seated, slightly turned to the right. The blurred background shows a tree with orange leaves.",
    "spanish": "La foto muestra un conejito beige vestido con ropa de detective. La blusa marrón tiene una camisa blanca con botones y una corbata roja en el interior. En la parte superior, una cubierta a cuadros en marrón y blanco. En su cabeza, sus orejitas están caídas, y hay un sombrero a cuadros del mismo color. Está sentado, ligeramente girado a la derecha. El fondo borroso muestra un árbol con hojas anaranjadas.",
    "german": "Das Foto zeigt einen beigen Hasen in Detektivkleidung. Die braune Bluse hat ein weißes Button-Down-Hemd und eine rote Krawatte innen. Oben drauf eine karierte Hülle in Braun und Weiß. Auf ihrem Kopf hängen ihre kleinen Ohren und es gibt einen karierten Hut in der gleichen Farbe. Er sitzt leicht nach rechts gedreht. Der unscharfe Hintergrund zeigt einen Baum mit orangefarbenen Blättern."
  },
  {
    "id": "0089",
    "file": "https://i.imgur.com/FhvNSrk.jpg",
    "portuguese": "A foto tirada de cima mostra um guaxinim pegando comida de dentro de um pote. Ele é cinza e possui manchas pretas ao redor dos olhos. Uma de suas patinhas dianteiras segura o pote preto que contém ração, bananas picadas e pasta de amendoim, enquanto a outra segura uma banana. Seus olhinhos pretos encaram a câmera. O fundo é um chão preto.",
    "english": "The photo taken from above shows a raccoon taking food out of a pot. He is gray and has black spots around his eyes. One of its front paws holds the black pot that contains food, chopped bananas and peanut butter, while the other holds a banana. His little black eyes stare at the camera. The background is a black floor.",
    "spanish": "La foto tomada desde arriba muestra a un mapache sacando comida de un recipiente. Es gris y tiene manchas negras alrededor de los ojos. Una de sus patas delanteras sostiene el recipiente negro que contiene comida, plátanos picados y mantequilla de maní, mientras que la otra sostiene un plátano. Sus pequeños ojos negros miran fijamente a la cámara. El fondo es un suelo negro.",
    "german": "Das Foto von oben zeigt einen Waschbären, der Futter aus einem Topf nimmt. Er ist grau und hat schwarze Flecken um die Augen. Eine seiner Vorderpfoten hält den schwarzen Topf, der Futter, gehackte Bananen und Erdnussbutter enthält, während die andere eine Banane hält. Seine kleinen schwarzen Augen starren in die Kamera. Der Hintergrund ist ein schwarzer Boden."
  },
  {
    "id": "0090",
    "file": "https://i.imgur.com/ICdLqSS.png",
    "portuguese": "Gatinho deitado em um sofá. Ele é gordinho, branco com algumas manchinhas cinzas na cabeça, rabo e final do corpo. Está de lado, para a direita, uma das patinhas esticadas e os olhos fechados. O sofá é marrom e possui algumas almofadas estampadas.",
    "english": "Kitten lying on a sofa. He is chubby, white with some gray spots on his head, tail and end of his body. It is on its side, to the right, one of its paws stretched out and its eyes closed. The sofa is brown and has some patterned pillows.",
    "spanish": "Gatito acostado en un sofá. Es gordito, blanco con algunas manchas grises en la cabeza, la cola y la punta del cuerpo. Está de costado, a la derecha, con una de sus patas extendida y sus ojos cerrados. El sofá es marrón y tiene unos cojines estampados.",
    "german": "Kätzchen, das auf einem Sofa liegt. Er ist mollig, weiß mit einigen grauen Flecken auf Kopf, Schwanz und Körperende. Es liegt auf der rechten Seite, eine seiner Pranken ausgestreckt und seine Augen geschlossen. Das Sofa ist braun und hat einige gemusterte Kissen."
  },
  {
    "id": "0091",
    "file": "https://i.imgur.com/GUT8HmF.jpg",
    "portuguese": "A foto mostra uma galinha branca deitada no chão. À sua volta, cerca de 20 filhotes, variando entre pintinhos e patinhos. Alguns são amarelos. Outros, marrons ou beges.",
    "english": "The photo shows a white chicken lying on the ground. Around him, about 20 chicks, ranging from chicks and ducklings. Some are yellow. Others, brown or beige.",
    "spanish": "La foto muestra una gallina blanca tirada en el suelo. A su alrededor, unos 20 pollitos, que van desde pollitos y patitos. Algunos son amarillos. Otros, marrones o beige.",
    "german": "Das Foto zeigt ein weißes Huhn, das auf dem Boden liegt. Um ihn herum etwa 20 Küken, von Küken bis hin zu Küken. Einige sind gelb. Andere, braun oder beige."
  },
  {
    "id": "0092",
    "file": "https://i.imgur.com/Oxmwyoo.jpg",
    "portuguese": "A foto mostra uma tartaruga. Ela é bem grande e está de frente para a câmera, olhando. É marrom e possui um chapéu de cone na cabeça, escrito \"Happy Birthday\". O chapéu é vermelho e possui a ilustração de um bolo e algumas velas. Ao fundo, é possível ver os pés de uma pessoa.",
    "english": "The photo shows a turtle. She's quite big and she's facing the camera, looking. It is brown and has a cone hat on its head that says \"Happy Birthday\". The hat is red and has an illustration of a cake and some candles. In the background, you can see a person's feet.",
    "spanish": "La foto muestra una tortuga. Ella es bastante grande y está frente a la cámara, mirando. Es de color marrón y tiene un sombrero de cono en la cabeza que dice \"Feliz cumpleaños\". El sombrero es rojo y tiene una ilustración de un pastel y unas velas. En el fondo, puedes ver los pies de una persona.",
    "german": "Das Foto zeigt eine Schildkröte. Sie ist ziemlich groß und schaut in die Kamera. Es ist braun und hat einen Kegelhut auf dem Kopf, auf dem \"Happy Birthday\" steht. Der Hut ist rot und hat eine Illustration eines Kuchens und einiger Kerzen. Im Hintergrund sieht man die Füße einer Person."
  },
  {
    "id": "0093",
    "file": "https://i.imgur.com/FHFQSg6.png",
    "portuguese": "Cachorro pinscher preto com sobrancelhas, focinhos e patas marrons. Usa uma roupinha preta com detalhes amarelos e está debruçado sobre uma pelúcia cinza. O fundo é um sofá, com algumas almofadas verdes.",
    "english": "Black pinscher dog with brown eyebrows, muzzle and paws. He wears a black outfit with yellow details and is hunched over a gray plush. The background is a sofa, with some green pillows.",
    "spanish": "Perro pinscher negro con cejas, hocico y patas marrones. Viste un traje negro con detalles amarillos y está encorvado sobre un peluche gris. El fondo es un sofá, con unos cojines verdes.",
    "german": "Schwarzer Pinscherhund mit braunen Augenbrauen, Schnauze und Pfoten. Er trägt ein schwarzes Outfit mit gelben Details und beugt sich über einen grauen Plüsch. Der Hintergrund ist ein Sofa mit einigen grünen Kissen."
  },
  {
    "id": "0094",
    "file": "https://i.imgur.com/0Ab4Kzp.jpg",
    "portuguese": "A foto mostra um gatinho bege. Sua cabeça está dentro de um abacate de pelúcia. Seus olhos estão dilatados e está lambendo a almofada. O fundo é uma parede bege.",
    "english": "The photo shows a beige kitten. His head is inside a plush avocado. His eyes are dilated and he's licking the pillow. The background is a beige wall.",
    "spanish": "La foto muestra un gatito beige. Su cabeza está dentro de un aguacate de peluche. Sus ojos están dilatados y está lamiendo la almohada. El fondo es una pared beige.",
    "german": "Das Foto zeigt ein beiges Kätzchen. Sein Kopf steckt in einer Plüsch-Avocado. Seine Augen sind geweitet und er leckt das Kissen. Der Hintergrund ist eine beige Wand."
  },
  {
    "id": "0095",
    "file": "https://i.imgur.com/kb4E82F.png",
    "portuguese": "A foto mostra um cachorro preto longo e magro, bem peludo. Está deitado de costas, com a cabeça para a direita. Em sua barriga, bem encolhido, está um gatinho também preto. Ele é bem pequeno e encara a câmera com seus olhinhos verdes. Estão deitados no chão, em cima de um tapete azul e branco.",
    "english": "The photo shows a long, skinny, very hairy black dog. He is lying on his back with his head to the right. In her belly, well shrunk, is a black kitten. He is very small and stares at the camera with his little green eyes. They are lying on the floor, on top of a blue and white rug.",
    "spanish": "La foto muestra un perro negro largo, flaco y muy peludo. Está acostado boca arriba con la cabeza hacia la derecha. En su vientre, bien encogido, hay un gatito negro. Es muy pequeño y mira fijamente a la cámara con sus ojitos verdes. Están tirados en el suelo, encima de una alfombra azul y blanca.",
    "german": "Das Foto zeigt einen langen, dünnen, sehr behaarten schwarzen Hund. Er liegt mit dem Kopf nach rechts auf dem Rücken. In ihrem gut geschrumpften Bauch steckt ein schwarzes Kätzchen. Er ist sehr klein und starrt mit seinen kleinen grünen Augen in die Kamera. Sie liegen auf dem Boden, auf einem blau-weißen Teppich."
  },
  {
    "id": "0096",
    "file": "https://i.imgur.com/NvwSbza.png",
    "portuguese": "Dois gatos deitados em uma cama. A primeiro, mais próximo à cama, é branco com algumas manchas pretas na cabeça e nas costas. Está virado para a direita, com o rabo para perto e a cabeça para longe da câmera. O segundo, deitado enrolado em si mesmo, é tricolor, nas cores branco, bege e preto.",
    "english": "Two cats lying on a bed. The first, closest to the bed, is white with some black spots on the head and back. He is facing right, with his tail close and his head away from the camera. The second, lying curled up, is tricolor, in white, beige and black.",
    "spanish": "Dos gatos acostados en una cama. El primero, el más cercano a la cama, es blanco con algunas manchas negras en la cabeza y la espalda. Está mirando hacia la derecha, con la cola cerca y la cabeza alejada de la cámara. La segunda, acurrucada, es tricolor, en blanco, beige y negro.",
    "german": "Zwei Katzen liegen auf einem Bett. Die erste, die dem Bett am nächsten ist, ist weiß mit einigen schwarzen Flecken auf Kopf und Rücken. Er ist nach rechts gerichtet, mit geschlossenem Schwanz und von der Kamera abgewandtem Kopf. Der zweite, zusammengerollt liegend, ist dreifarbig, in Weiß, Beige und Schwarz."
  },
  {
    "id": "0097",
    "file": "https://i.imgur.com/FMMVwcy.png",
    "portuguese": "Foto em que Nina, uma calopsita cinza com manchas brancas e topete amarelo, aparece de lado. Ela está apoiada na mão de uma pessoa branca, olhando para a câmera. O fundo é um quarto, com uma parede vermelha e um guarda-roupa. É possível ver também um pé.",
    "english": "Photo in which Nina, a gray cockatiel with white spots and a yellow topknot, appears from the side. She is leaning on a white person's hand, looking at the camera. The background is a bedroom, with a red wall and a wardrobe. You can also see a foot.",
    "spanish": "Foto en la que aparece de perfil Nina, una cacatúa gris con manchas blancas y un moño amarillo. Ella se apoya en la mano de una persona blanca, mirando a la cámara. El fondo es un dormitorio, con una pared roja y un armario. También puedes ver un pie.",
    "german": "Foto, auf dem Nina, ein grauer Nymphensittich mit weißen Flecken und gelbem Haarknoten, von der Seite erscheint. Sie stützt sich auf die Hand einer weißen Person und blickt in die Kamera. Der Hintergrund ist ein Schlafzimmer mit einer roten Wand und einem Kleiderschrank. Sie können auch einen Fuß sehen."
  },
  {
    "id": "0098",
    "file": "https://i.imgur.com/K8OxOzb.jpg",
    "portuguese": "A foto mostra dois coelhinhos vestidos como se fossem casar. Ambos são beges, bem claros. O da esquerda usa um terninho preto e cinza e uma gravata borboleta branca, e está abaixado. O da direita usa um véu branco com flores da mesma cor, e suas orelhas são menores e estão em pé. Eles estão sobre um banquinho de madeira, e o fundo desfocado mostra arbustos",
    "english": "The photo shows two bunnies dressed as if they were going to get married. Both are beige, very light. The one on the left wears a black and gray pantsuit and a white bow tie, and is down. The one on the right wears a white veil with flowers of the same color, and its ears are smaller and stand on end. They are on a wooden stool, and the blurred background shows bushes.",
    "spanish": "La foto muestra a dos conejitos vestidos como si fueran a casarse. Ambos son de color beige, muy claro. El de la izquierda viste un traje negro y gris y una pajarita blanca, y está agachado. El de la derecha lleva un velo blanco con flores del mismo color, y sus orejas son más pequeñas y de punta. Están en un taburete de madera y el fondo borroso muestra arbustos.",
    "german": "Das Foto zeigt zwei Hasen, die so gekleidet sind, als würden sie heiraten. Beide sind beige, sehr hell. Der Linke trägt einen schwarz-grauen Hosenanzug und eine weiße Fliege und ist am Boden. Der rechte trägt einen weißen Schleier mit Blumen in der gleichen Farbe, und seine Ohren sind kleiner und stehen ab. Sie stehen auf einem Holzhocker, und der unscharfe Hintergrund zeigt Büsche."
  },
  {
    "id": "0099",
    "file": "https://i.imgur.com/7bjoK1Q.jpg",
    "portuguese": "Dois gatinhos sentados lado a lado num campo. O de esquerda é branco com o topo da cabeça cinza. Usa uma coleira vermelha com um sininho e seus olhos, super azuis, encaram o outro gato. Este, na direita, é também branco, mais gordo, com o redor da orelha laranja. Seus olhos estão cerrados, fazendo sua cara ficar engraçada e meio ranzinza. À esquerda dos dois há diversos girassóis, maiores do que eles. O fundo é o céu, tão claro que parece branco.",
    "english": "Two kittens sitting side by side in a field. The one on the left is white with a gray top of the head. He wears a red collar with a bell and his eyes, super blue, stare at the other cat. This one, on the right, is also white, fatter, with orange around the ear. His eyes are closed, making his face look funny and a little grumpy. To the left of the two are several sunflowers, larger than they are. The background is the sky, so clear it looks white.",
    "spanish": "Dos gatitos sentados uno al lado del otro en un campo. El de la izquierda es blanco con la parte superior gris de la cabeza. Lleva un collar rojo con un cascabel y sus ojos, súper azules, miran fijamente al otro gato. Este, el de la derecha, también es blanco, más gordo, con naranja alrededor de la oreja. Sus ojos están cerrados, lo que hace que su rostro se vea divertido y un poco gruñón. A la izquierda de los dos hay varios girasoles, más grandes que ellos. El fondo es el cielo, tan claro que parece blanco.",
    "german": "Zwei Kätzchen sitzen nebeneinander auf einem Feld. Der linke ist weiß mit grauem Oberkopf. Er trägt ein rotes Halsband mit einer Glocke und seine superblauen Augen starren die andere Katze an. Dieser rechts ist auch weiß, dicker, mit orange um das Ohr. Seine Augen sind geschlossen, was sein Gesicht komisch und ein wenig mürrisch aussehen lässt. Links von den beiden sind mehrere Sonnenblumen, größer als sie sind. Der Hintergrund ist der Himmel, so klar, dass er weiß aussieht."
  },
  {
    "id": "0100",
    "file": "https://i.imgur.com/zmTk8RT.jpg",
    "portuguese": "A foto mostra um cachorrinho deitado em um sofá, com a barriga para cima. Ele é bege bem claro e se assemelha a um labrador. Está recostado no braço do sofá e usa um pijama macacão de patinhos. Ao seu lado, um pato de borracha bem grande, da altura do braço do sofá, que é cinza.",
    "english": "The photo shows a puppy lying on a sofa, with its belly up. He is very light beige and resembles a Labrador. He's leaning back on the arm of the couch and wearing a pair of duckling pajamas. Beside him is a very large rubber duck, as tall as the arm of the sofa, which is gray.",
    "spanish": "La foto muestra a un cachorro acostado en un sofá, con la barriga hacia arriba. Es de color beige muy claro y se parece a un labrador. Está recostado en el brazo del sofá y viste un pijama de patito. A su lado hay un patito de goma muy grande, tan alto como el brazo del sofá, que es gris.",
    "german": "Das Foto zeigt einen Welpen, der mit dem Bauch nach oben auf einem Sofa liegt. Er ist sehr hellbeige und ähnelt einem Labrador. Er lehnt sich auf der Armlehne der Couch zurück und trägt einen Entenpyjama. Neben ihm steht eine sehr große Quietscheente, so groß wie die Sofalehne, die grau ist."
  },
  {
    "id": "0101",
    "file": "https://i.imgur.com/I28A8Xv.jpg",
    "portuguese": "A foto tirada de cima mostra um sapinho em um pedaço de madeira. Ele é verde bem clarinho, e sua barriga é branca. Seus olhos são amarelo claro e vesguinhos, e seus patas parecem mãos e segundam na madeira. O fundo está desfocado.",
    "english": "The photo taken from above shows a little little frog on a piece of wood. He is very light green, and his belly is white. His eyes are pale yellow and cross-eyed, and his paws look like hands and second on wood. The background is blurred.",
    "spanish": "La foto tomada desde arriba muestra una pequeña ranita sobre un trozo de madera. Es de color verde muy claro, y su vientre es blanco. Sus ojos son de color amarillo pálido y bizco, y sus patas parecen manos y se aferran sobre la madera. El fondo está borroso.",
    "german": "Das Foto von oben zeigt einen kleinen Frosch auf einem Stück Holz. Er ist sehr hellgrün und sein Bauch ist weiß. Seine Augen sind blassgelb und schielen, und seine Pfoten sehen aus wie Hände und Sekunden auf Holz. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0102",
    "file": "https://i.imgur.com/xc0NTah.jpg",
    "portuguese": "A foto mostra um hamster laranja com a barriga cinza. Ele está sentado e tapa seus olhinhos com as patas, olhando para a câmera de maneira tímida e fofa.",
    "english": "The photo shows an orange hamster with a gray belly. He is sitting and covering his eyes with his paws, looking at the camera in a shy and cute way.",
    "spanish": "La foto muestra un hámster naranja con un vientre gris. Está sentado y tapándose los ojos con las patas, mirando a la cámara de forma tímida y simpática.",
    "german": "Das Foto zeigt einen orangefarbenen Hamster mit grauem Bauch. Er sitzt und bedeckt seine Augen mit seinen Pfoten und schaut schüchtern und süß in die Kamera."
  },
  {
    "id": "0103",
    "file": "https://i.imgur.com/IcrZYOv.jpg",
    "portuguese": "A foto mostra um patinho amarelo dormindo no meio de umas folhas. Ele é super pequeno e está de lado. Em cima de sua cabeça há uma florzinha laranja, como se fosse um chapéu.",
    "english": "The photo shows a yellow duckling sleeping in the middle of some leaves. He's super small and on his side. On top of his head is a little orange flower, like a hat.",
    "spanish": "La foto muestra un patito amarillo durmiendo en medio de unas hojas. Es súper pequeño y está de lado. Encima de su cabeza hay una pequeña flor naranja, como un sombrero.",
    "german": "Das Foto zeigt ein gelbes Entlein, das inmitten einiger Blätter schläft. Er ist super klein und auf seiner Seite. Auf seinem Kopf ist eine kleine orangefarbene Blume, wie ein Hut."
  },
  {
    "id": "0104",
    "file": "https://i.imgur.com/PaTlPVx.jpg",
    "portuguese": "A imagem mostra uma tartaruguinha olhando pela janela. Ela está de pé, apoiada no vidro, e possui diferentes tons de verde e alguns de amarelo. Do lado de fora da janela, está de dia, porém chovendo.",
    "english": "The image shows a little turtle looking out the window. She is standing, leaning against the glass, and has different shades of green and some of yellow. Outside the window, it is daylight, but raining.",
    "spanish": "La imagen muestra una pequeña tortuga mirando por la ventana. Está de pie, apoyada en el cristal, y tiene diferentes tonos de verde y algo de amarillo. Fuera de la ventana, es de día, pero llueve.",
    "german": "Das Bild zeigt eine kleine Schildkröte, die aus dem Fenster schaut. Sie steht, gegen das Glas gelehnt, und hat verschiedene Grün- und etwas Gelbtöne. Draußen vor dem Fenster ist es hell, aber es regnet."
  },
  {
    "id": "0105",
    "file": "https://i.imgur.com/pJXFc7B.jpg",
    "portuguese": "Um panda de cabeça para baixo em um balanço de pneu. Ele é pequeno e gordinho, e seus pés estão jogados para a frente, encostando nas correntes do balanço. O fundo é um gramadinho.",
    "english": "An upside-down panda on a tire swing. He's small and chubby, and his feet are thrown forward, brushing against the swing's chains. The background is a grass.",
    "spanish": "Un panda boca abajo en un columpio de neumáticos. Es pequeño y regordete, y sus pies están lanzados hacia adelante, rozando las cadenas del columpio. El fondo es un césped.",
    "german": "Ein umgedrehter Panda auf einer Reifenschaukel. Er ist klein und pummelig, und seine Füße sind nach vorne geworfen und streifen gegen die Ketten der Schaukel. Der Hintergrund ist ein Gras."
  },
  {
    "id": "0106",
    "file": "https://i.imgur.com/KxyLCzM.jpg",
    "portuguese": "A foto mostra um passarinho azul em um galho. Ele é pequeno e gordinho, e a sua parte de baixo possui as penas alaranjadas. Há um círculo branco bem fino ao redor de seu olho.",
    "english": "The photo shows a blue bird on a branch. He is small and chubby, and his underside has orange feathers. There is a very thin white circle around his eye.",
    "spanish": "La foto muestra un pájaro azul en una rama. Es pequeño y gordito, y su parte inferior tiene plumas anaranjadas. Hay un círculo blanco muy delgado alrededor de su ojo.",
    "german": "Das Foto zeigt einen blauen Vogel auf einem Ast. Er ist klein und pummelig und seine Unterseite hat orangefarbene Federn. Um sein Auge herum ist ein sehr dünner weißer Kreis."
  },
  {
    "id": "0107",
    "file": "https://i.imgur.com/cJXU92g.jpg",
    "portuguese": "Uma gata preta no meio de algumas plantas. Ela está sentada e é super peluda. Olha para a frente com seus olhos verdes, mas não diretamente para a câmera. À sua frente um pequeno vaso com uma planta meio seca, à esquerda um grande vaso de planta e á direita algumas folhas. O fundo é uma parede bege.",
    "english": "A black cat in the middle of some plants. She's sitting up and she's super furry. She looks straight ahead with her green eyes, but not directly at the camera. In front of her is a small pot with a half-dry plant, on the left a large potted plant and on the right some leaves. The background is a beige wall.",
    "spanish": "Un gato negro en medio de unas plantas. Está sentada y es súper peluda. Mira al frente con sus ojos verdes, pero no directamente a la cámara. Frente a ella hay una maceta pequeña con una planta medio seca, a la izquierda una maceta grande y a la derecha unas hojas. El fondo es una pared beige.",
    "german": "Eine schwarze Katze inmitten einiger Pflanzen. Sie sitzt aufrecht und sie ist super pelzig. Sie blickt mit ihren grünen Augen geradeaus, aber nicht direkt in die Kamera. Vor ihr steht ein kleiner Topf mit einer halbtrockenen Pflanze, links eine große Topfpflanze und rechts einige Blätter. Der Hintergrund ist eine beige Wand."
  },
  {
    "id": "0108",
    "file": "https://i.imgur.com/5YYsBVR.jpg",
    "portuguese": "Uma gata preta no meio de algumas plantas. Ela está sentada e é super peluda. Olha para a direita com seus olhos verdes, mas não diretamente para a câmera. À sua frente um pequeno vaso com uma planta meio seca, à esquerda um grande vaso de planta e á direita algumas folhas. O fundo é uma parede bege.",
    "english": "A black cat in the middle of some plants. She's sitting up and she's super furry. She looks to the right with her green eyes, but not directly at the camera. In front of you is a small pot with a half-dry plant, on the left a large potted plant and on the right some leaves. The background is a beige wall.",
    "spanish": "Un gato negro en medio de unas plantas. Está sentada y es súper peluda. Mira a la derecha con sus ojos verdes, pero no directamente a la cámara. Frente a ella hay una maceta pequeña con una planta medio seca, a la izquierda una maceta grande y a la derecha unas hojas. El fondo es una pared beige.",
    "german": "Eine schwarze Katze inmitten einiger Pflanzen. Sie sitzt aufrecht und sie ist super pelzig. Sie schaut mit ihren grünen Augen nach rechts, aber nicht direkt in die Kamera. Vor dir steht ein kleiner Topf mit einer halbtrockenen Pflanze, links eine große Topfpflanze und rechts einige Blätter. Der Hintergrund ist eine beige Wand."
  },
  {
    "id": "0109",
    "file": "https://i.imgur.com/CdmHAIj.jpg",
    "portuguese": "Gato branco do busto para cima. Usa uma blusinha rosa bebê e uma máscara de skincare no rosto, mostrando apenas seus olhos, boca e nariz. Ele também possui um óculos redondo de lente amarela, que está em sua testa. O fundo é um sofá.",
    "english": "White cat from the bust up. She wears a baby pink blouse and a skincare mask on her face, showing only her eyes, mouth and nose. He also has round, yellow-lensed glasses, which are on his forehead. The background is a sofa.",
    "spanish": "Gato blanco del busto para arriba. Lleva una blusa rosa bebé y una máscara para el cuidado de la piel en la cara, mostrando solo los ojos, la boca y la nariz. También tiene anteojos redondos con lentes amarillos, que están en su frente. El fondo es un sofá.",
    "german": "Weiße Katze von oben. Sie trägt eine babyrosa Bluse und eine Hautpflegemaske auf ihrem Gesicht, die nur ihre Augen, ihren Mund und ihre Nase zeigt. Er hat auch eine runde Brille mit gelben Gläsern, die auf seiner Stirn sitzt. Der Hintergrund ist ein Sofa."
  },
  {
    "id": "0110",
    "file": "https://i.imgur.com/TAeiJ14.jpg",
    "portuguese": "Sirizinho laranja e bem pequeno usando um chapéu de palha. Suas garrinhas estão levantadas e ele parece feliz. Atrás dele há uma bandeira LGBTQ+, que consiste de 6 faixas horizontais nas cores vermelho, laranja, amarelo, verde, azul e roxo, respectivamente.",
    "english": "Little orange crab in a straw hat. His claws are up and he looks happy. Behind him is an LGBTQ+ flag, which consists of 6 horizontal stripes in red, orange, yellow, green, blue and purple respectively.",
    "spanish": "Pequeño cangrejo naranja con sombrero de paja. Sus garras están levantadas y se ve feliz. Detrás de él hay una bandera LGBTQ+, que consta de 6 franjas horizontales en rojo, naranja, amarillo, verde, azul y morado respectivamente.",
    "german": "Kleine orangefarbene Krabbe in einem Strohhut. Seine Krallen sind oben und er sieht glücklich aus. Hinter ihm befindet sich eine LGBTQ+-Flagge, die jeweils aus 6 horizontalen Streifen in Rot, Orange, Gelb, Grün, Blau und Lila besteht."
  },
  {
    "id": "0111",
    "file": "https://i.imgur.com/VE1RIcu.jpg",
    "portuguese": "A foto mostra uma parede e uma janela da parte externa de uma casa. A janela possui a moldura roxa e uma placa escrito \"Por favor, não deixe o gato sair\". Ao lado da placa, ainda do lado de fora da casa, o gato está deitado sobre o batente da janela. Ele é magro e não muito grande, marrom e preto, e está bem encolhido.",
    "english": "The photo shows a wall and window from the outside of a house. The window has a purple frame and a \"Please don't let the cat out\" sign. Next to the sign, still outside the house, the cat is lying on the windowsill. He's thin and not too big, brown and black, and he's shriveled up nicely.",
    "spanish": "La foto muestra una pared y una ventana desde el exterior de una casa. La ventana tiene un marco morado y un letrero que dice \"Por favor, no dejes salir al gato\". Junto al cartel, todavía fuera de la casa, el gato está tumbado en el alféizar de la ventana. Es delgado y no demasiado grande, moreno y negro, y está bien acurrucado.",
    "german": "Das Foto zeigt eine Wand und ein Fenster von der Außenseite eines Hauses. Das Fenster hat einen violetten Rahmen und ein „Bitte lass die Katze nicht raus“-Schild. Neben dem Schild, noch vor dem Haus, liegt die Katze auf der Fensterbank. Er ist dünn und nicht zu groß, braun und schwarz, und schön verschrumpelt."
  },
  {
    "id": "0112",
    "file": "https://i.imgur.com/AGsdHCl.jpg",
    "portuguese": "Gatinho filhote dentro de uma meia bem grossa, amarela com detalhes azuis. Ele é bege e mostra apenas sua cabeça, a unica parte para fora da meia. Seus olhos são acinzentados. O fundo é uma caminha bege.",
    "english": "Kitten inside a very thick, yellow sock with blue details. He is beige and shows only his head, the only part sticking out of the sock. His eyes are gray. The background is a beige bed.",
    "spanish": "Gatito dentro de un calcetín amarillo muy grueso con detalles azules. Es beige y muestra solo su cabeza, la única parte que sobresale del calcetín. Sus ojos son grises. El fondo es una cama beige.",
    "german": "Kätzchen in einer sehr dicken, gelben Socke mit blauen Details. Er ist beige und zeigt nur seinen Kopf, der einzige Teil, der aus der Socke ragt. Seine Augen sind grau. Der Hintergrund ist ein beiges Bett."
  },
  {
    "id": "0113",
    "file": "https://i.imgur.com/zhMqSmM.jpg",
    "portuguese": "Hamster laranja abaixadinho. Ele é gordinho e tenta enfiar um morango inteiro na boca, empurrando com as duas mãos. Seus olhos estão meio arregalados e sua boca está super aberta. Ao seu lado há um outro hamster, mas está cortado para fora da foto.",
    "english": "Squatting orange hamster. He's chubby and tries to stuff a whole strawberry into his mouth, pushing with both hands. His eyes are kind of wide and his mouth is wide open. Next to him is another hamster, but it's cropped out of the picture.",
    "spanish": "Hámster naranja en cuclillas. Es gordito e intenta meterse una fresa entera en la boca, empujando con ambas manos. Sus ojos están un poco abiertos y su boca está abierta de par en par. Junto a él hay otro hámster, pero no aparece en la imagen.",
    "german": "Hockender orangefarbener Hamster. Er ist mollig und versucht mit beiden Händen eine ganze Erdbeere in seinen Mund zu schieben. Seine Augen sind irgendwie weit aufgerissen und sein Mund ist weit offen. Neben ihm ist ein weiterer Hamster, aber er ist aus dem Bild herausgeschnitten."
  },
  {
    "id": "0114",
    "file": "https://i.imgur.com/DxkQRu4.jpg",
    "portuguese": "A foto mostra 4 patinhos deitados no colo de uma criança, que usa um vestido branco. Eles são bem pequenininhos e amarelos. Um deles mostra apenas o topo da cabeça, outro está abaixado e se apoiando num terceiro. O quarto está um pouco mais à frente, e é acariciado pela criança.",
    "english": "The photo shows 4 ducklings lying on the lap of a child, who is wearing a white dress. They are very tiny and yellow. One of them only shows the top of his head, another is bent down and leaning on a third. The fourth is a little further on, and is petted by the child.",
    "spanish": "La foto muestra 4 patitos acostados en el regazo de un niño que lleva un vestido blanco. Son muy pequeños y amarillos. Uno de ellos solo muestra la parte superior de su cabeza, otro está inclinado y apoyado en un tercero. El cuarto está un poco más adelante y es acariciado por el niño.",
    "german": "Das Foto zeigt 4 Küken, die auf dem Schoß eines Kindes liegen, das ein weißes Kleid trägt. Sie sind sehr klein und gelb. Einer von ihnen zeigt nur den Scheitel, ein anderer ist nach unten gebeugt und stützt sich auf einen dritten. Der vierte ist etwas weiter entfernt und wird von dem Kind gestreichelt."
  },
  {
    "id": "0115",
    "file": "https://i.imgur.com/3HwsnN4.jpg",
    "portuguese": "A foto mostra um cachorro corgi. Ele é branco embaixo e laranjinha em cima. Seus olhos estão levemente abertos e sua língua está para fora. À sua frente há flores brancas, sendo seguradas por alguém. Uma delas está em sua língua. O fundo desfocado mostra uma árvore e uma pessoa.",
    "english": "The photo shows a corgi dog. It is white underneath and orange on top. His eyes are slightly open and his tongue is hanging out. In front of him are white flowers, being held by someone. One of them is in his language. The blurred background shows a tree and a person.",
    "spanish": "La foto muestra un perro corgi. Es blanco por debajo y naranja por arriba. Sus ojos están ligeramente abiertos y su lengua está colgando. Frente a él hay flores blancas, sostenidas por alguien. Una de ellas está en su lengua. El fondo borroso muestra un árbol y una persona.",
    "german": "Das Foto zeigt einen Corgi-Hund. Es ist unten weiß und oben orange. Seine Augen sind leicht geöffnet und seine Zunge hängt heraus. Vor ihm sind weiße Blumen, die von jemandem gehalten werden. Einer davon ist in seiner Sprache. Der unscharfe Hintergrund zeigt einen Baum und eine Person."
  },
  {
    "id": "0116",
    "file": "https://i.imgur.com/Y0YX2iJ.png",
    "portuguese": "A foto mostra um gato laranja sentado em uma mesa. Ele usa um lenço quadriculado azul e vermelho no pescoço e um chapéuzinho de palha. Seus olhos mel encaram a câmera. Na mesa há enfeites de arraiá, como fogueirinha, chapéu de palha e milho. Atrás dele há uma parede branca e um balão.",
    "english": "The photo shows an orange cat sitting on a table. He wears a blue and red checkered scarf around his neck and a straw hat. Her honey eyes stare at the camera. On the table there are arraiá decorations, such as a small fire, straw hat and corn. Behind him is a white wall and a balloon.",
    "spanish": "La foto muestra un gato naranja sentado en una mesa. Lleva un pañuelo a cuadros azul y rojo alrededor del cuello y un sombrero de paja. Sus ojos color miel miran fijamente a la cámara. En la mesa hay adornos de arraiá, como una pequeña hoguera, sombrero de paja y maíz. Detrás de él hay una pared blanca y un globo.",
    "german": "Das Foto zeigt eine orangefarbene Katze, die auf einem Tisch sitzt. Er trägt einen blau-rot karierten Schal um den Hals und einen Strohhut. Ihre honigfarbenen Augen starren in die Kamera. Auf dem Tisch gibt es arraiá-Dekorationen, wie ein kleines Feuer, einen Strohhut und Mais. Hinter ihm ist eine weiße Wand und ein Ballon."
  },
  {
    "id": "0117",
    "file": "https://i.imgur.com/5wwFa4a.jpg",
    "portuguese": "Coelhinho marrom olhando para a direita. Seus olhos são pretos e suas orelhas estão abaixadas para trás. Ele possui duas flores brancas na boca. Abaixo, há vários outras flores iguais. O fundo é um gramado desfocado.",
    "english": "Brown bunny looking to the right. Its eyes are black and its ears are lowered back. It has two white flowers in its mouth. Below, there are several other similar flowers. The background is a blurred lawn.",
    "spanish": "Conejito marrón mirando a la derecha. Sus ojos son negros y sus orejas están caídas hacia atrás. Tiene dos flores blancas en la boca. Abajo, hay varias otras flores similares. El fondo es un césped borroso.",
    "german": "Brown-Häschen, das nach rechts schaut. Seine Augen sind schwarz und seine Ohren sind nach hinten gesenkt. Es hat zwei weiße Blüten in seinem Mund. Unten gibt es mehrere andere ähnliche Blumen. Der Hintergrund ist ein unscharfer Rasen."
  },
  {
    "id": "0118",
    "file": "https://i.imgur.com/WBk3OD1.jpg",
    "portuguese": "Um gatinho preto e branco, com sobrancelha e bigodes brancos, olhos esverdeados e focinho rosado, segura uma pedaço de pão de forma na boca. Ele está encima do que parece um teto de madeira escura e o fundo é um céu branco.",
    "english": "A black and white kitten, with white eyebrows and whiskers, greenish eyes and pink muzzle, holds a piece of loaf of bread in its mouth. It's on top of what looks like a dark wooden ceiling and the background is a white sky.",
    "spanish": "Un gatito blanco y negro, con cejas y bigotes blancos, ojos verdosos y hocico rosado, sostiene un trozo de pan en la boca. Está encima de lo que parece un techo de madera oscura y el fondo es un cielo blanco.",
    "german": "Ein schwarz-weißes Kätzchen mit weißen Augenbrauen und Schnurrhaaren, grünlichen Augen und rosa Schnauze hält ein Stück Brot im Mund. Es befindet sich auf etwas, das wie eine dunkle Holzdecke aussieht, und der Hintergrund ist ein weißer Himmel."
  },
  {
    "id": "0119",
    "file": "https://i.imgur.com/czdYsTm.jpg",
    "portuguese": "Dois furões abraçados. Um deles é bege bem claro, quase branco. Ele abraça o outro e cheira o topo de sua cabeça. Seus olhos pretos estão abertos. O outro é branco com manchas cinzas. Está apoiado no primeiro, com os olhos fechados. O fundo é um carpete cinza.",
    "english": "Two ferrets embracing. One of them is very light beige, almost white. He hugs the other and sniffs the top of his head. His black eyes are open. The other is white with gray spots. He is leaning on the first, with his eyes closed. The background is a gray carpet.",
    "spanish": "Dos hurones abrazados. Uno de ellos es de color beige muy claro, casi blanco. Abraza al otro y huele la parte superior de su cabeza. Sus ojos negros están abiertos. El otro es blanco con manchas grises. Está apoyado en el primero, con los ojos cerrados. El fondo es una alfombra gris.",
    "german": "Zwei Frettchen umarmen sich. Einer von ihnen ist sehr hellbeige, fast weiß. Er umarmt den anderen und schnüffelt an seinem Kopf. Seine schwarzen Augen sind offen. Der andere ist weiß mit grauen Flecken. Er lehnt mit geschlossenen Augen an der ersten. Der Hintergrund ist ein grauer Teppich."
  },
  {
    "id": "0120",
    "file": "https://i.imgur.com/hBjr7J8.jpg",
    "portuguese": "Um pequeno hamster de pelo alaranjado e bege e olhos pretos segura uma mini revista intitulada \"Mouse's Health\". Na capa, vemos a edição de uma cabeça de hamster em um torso humano musculoso. Na contracapa, há a edição de outra cabeça de hamster em um corpo de biquini vermelho, segurando uma taça de cerveja. O chão e o fundo da foto são brancos.",
    "english": "A small hamster with orange and beige fur and black eyes holds a mini magazine entitled \"Mouse's Health\". On the cover, we see the edit of a hamster head on a muscular human torso. On the back cover is an edit of another hamster head on a red bikini body, holding a beer glass. The floor and background of the photo are white.",
    "spanish": "Un pequeño hámster de pelaje naranja y beige y ojos negros sostiene una mini revista titulada \"Mouse's Health\". En la portada, vemos la edición de una cabeza de hámster sobre un musculoso torso humano. En la contraportada hay una edición de otra cabeza de hámster en un cuerpo de bikini rojo, sosteniendo un vaso de cerveza. El suelo y el fondo de la foto son de color blanco.",
    "german": "Ein kleiner Hamster mit orange-beigem Fell und schwarzen Augen hält ein Mini-Magazin mit dem Titel „Mouse’s Health“. Auf dem Cover sehen wir die Bearbeitung eines Hamsterkopfes auf einem muskulösen menschlichen Oberkörper. Auf der Rückseite ist ein Edit eines anderen Hamsterkopfes auf einem roten Bikinikörper zu sehen, der ein Bierglas hält. Der Boden und der Hintergrund des Fotos sind weiß."
  },
  {
    "id": "0121",
    "file": "https://i.imgur.com/GpJPFQw.jpg",
    "portuguese": "Um coelhinho cinza claro está comendo uma folha verde. Ele está sobre um tapete verde-musgo e é possível ver uma almofada com estampa florida verde e rosa. Uma mão branca alimenta ele e seus olhos pretos estão bem abertos.",
    "english": "A light gray bunny is eating a green leaf. It is on a moss green rug and you can see a cushion with a green and pink flower print. A white hand feeds him and his black eyes are wide open.",
    "spanish": "Un conejito gris claro está comiendo una hoja verde. Está sobre una alfombra verde musgo y se puede ver un cojín con un estampado de flores verdes y rosas. Una mano blanca le da de comer y sus ojos negros están muy abiertos.",
    "german": "Ein hellgrauer Hase frisst ein grünes Blatt. Es liegt auf einem moosgrünen Teppich und man sieht ein Kissen mit einem grünen und rosafarbenen Blumendruck. Eine weiße Hand füttert ihn und seine schwarzen Augen sind weit geöffnet."
  },
  {
    "id": "0122",
    "file": "https://i.imgur.com/eS7Z8sU.jpg",
    "portuguese": "Um gato preto sentado em cima da uma moto, que está de lado. Ele é bem peludo e seus olhos verdes encaram algo para além da câmera. A moto é toda preta. O fundo é uma parede bege.",
    "english": "A black cat sitting on top of a motorcycle, which is on its side. He is very hairy and his green eyes stare beyond the camera. The bike is all black. The background is a beige wall.",
    "spanish": "Un gato negro sentado encima de una motocicleta, que está de costado. Es muy peludo y sus ojos verdes miran más allá de la cámara. La motocicleta es toda negra. El fondo es una pared beige.",
    "german": "Eine schwarze Katze, die auf einem Motorrad sitzt, das auf der Seite liegt. Er ist sehr behaart und seine grünen Augen starren über die Kamera hinaus. Das Rad ist komplett schwarz. Der Hintergrund ist eine beige Wand."
  },
  {
    "id": "0123",
    "file": "https://i.imgur.com/cb43ZAS.jpg",
    "portuguese": "Um gatinho de pelo cinza escuro e branco está deitado sobre uma almofada branca. Uma braço de pele clara envolto em um casaco marrom segura sua cabeça. A expressão do gato é sonolenta, com os olhos fechados e o focinho relaxado, e com as patas dianteiras juntas em frente ao corpo.",
    "english": "A dark gray and white fur kitten is lying on a white pillow. A pale-skinned arm wrapped in a brown coat holds his head. The cat's expression is sleepy, with eyes closed and muzzle relaxed, and with the front paws together in front of the body.",
    "spanish": "Un gatito de piel gris oscuro y blanco está acostado sobre una almohada blanca. Un brazo de piel pálida envuelto en un abrigo marrón sostiene su cabeza. La expresión del gato es somnolienta, con los ojos cerrados y el hocico relajado, y con las patas delanteras juntas frente al cuerpo.",
    "german": "Ein dunkelgraues und weißes Pelzkätzchen liegt auf einem weißen Kissen. Ein hellhäutiger Arm, der in einen braunen Mantel gehüllt ist, hält seinen Kopf. Der Ausdruck der Katze ist schläfrig, mit geschlossenen Augen und entspannter Schnauze und mit den Vorderpfoten zusammen vor dem Körper."
  },
  {
    "id": "0124",
    "file": "https://i.imgur.com/SvTA9Ej.jpg",
    "portuguese": "Dois ratinhos dormindo juntos. O primeiro, da esquerda, é cinza e é possível ver apenas a sua cabeça. Seus olhos estão fechados e usa um chapéu marrom. O segundo, à direita, é branquinho. Usa um vestido branco uma flor em cima da cabeça. Ao lado, um brinquedo de uma tartaruga em um carrinho. Estão deitados em um pano branco.",
    "english": "Two mice sleeping together. The first one on the left is gray and you can only see its head. His eyes are closed and he wears a brown hat. The second, on the right, is white. Wears a white dress with a flower on top of her head. Next to it, a toy of a turtle in a cart. They are lying on a white cloth.",
    "spanish": "Dos ratones durmiendo juntos. El primero de la izquierda es gris y solo puedes ver su cabeza. Tiene los ojos cerrados y lleva un sombrero marrón. El segundo, a la derecha, es blanco. Lleva un vestido blanco con una flor en la parte superior de la cabeza. Junto a él, un juguete de una tortuga en un carro. Están acostados sobre un paño blanco.",
    "german": "Zwei Mäuse, die zusammen schlafen. Der erste links ist grau und man sieht nur seinen Kopf. Seine Augen sind geschlossen und er trägt einen braunen Hut. Der zweite rechts ist weiß. Trägt ein weißes Kleid mit einer Blume auf dem Kopf. Daneben eine Spielzeugschildkröte in einem Karren. Sie liegen auf einem weißen Tuch."
  },
  {
    "id": "0125",
    "file": "https://i.imgur.com/g3C24kW.jpg",
    "portuguese": "Dois gatinhos filhotes brincando em cima de um colchão. O primeiro é bege, bem clarinho, e está deitado em uma meia lua. Um de seus olhos está aberto, enquanto o outro está fechado. O segundo é laranjinha, e está deitado de barriga para cima. Sua cabeça está na barriga do primeiro, suas patinhas estão esticadas e sua boca aberta da a entender que ele vai morder o amiguinho.",
    "english": "Two kittens playing on top of a mattress. The first is beige, very light, and is lying on a half moon. One of his eyes is open, while the other is closed. The second is orange, and is lying on its back. His head is on the first one's belly, his paws are stretched out and his open mouth gives the impression that he is going to bite his little friend.",
    "spanish": "Dos gatitos jugando encima de un colchón. El primero es de color beige, muy claro, y está recostado sobre una media luna. Uno de sus ojos está abierto, mientras que el otro está cerrado. El segundo es de color naranja y está acostado boca arriba. Su cabeza está sobre la barriga del primero, sus patas están estiradas y su boca abierta da la impresión de que va a morder a su amiguito.",
    "german": "Zwei Kätzchen spielen auf einer Matratze. Die erste ist beige, sehr hell und liegt auf einem Halbmond. Eines seiner Augen ist offen, während das andere geschlossen ist. Der zweite ist orange und liegt auf dem Rücken. Sein Kopf liegt auf dem Bauch des Ersten, seine Pfoten sind ausgestreckt und sein offenes Maul erweckt den Eindruck, als würde er seinen kleinen Freund beißen."
  },
  {
    "id": "0126",
    "file": "https://i.imgur.com/iEyy8rG.jpg",
    "portuguese": "Um gato cinza com listras pretas. Ele está de lado, virado para a esquerda, e abraça um cobertor azul. Sua língua está presa na coberta, e ele está puxando para trás em busca de soltá-lo, o que faz com que tenha uma cara de desespero. Seus olhos verdes bem claro está arregalados e sua boca está bem aberta.",
    "english": "A gray cat with black stripes. He's on his side, facing left, and hugs a blue blanket. His tongue is stuck in the blanket, and he's pulling back to get it out, which makes him look desperate. Her bright green eyes are wide and her mouth is wide open.",
    "spanish": "Un gato gris con rayas negras. Está de costado, mirando hacia la izquierda, y abraza una manta azul. Su lengua está atrapada en la manta y tira hacia atrás para sacársela, lo que lo hace parecer desesperado. Sus brillantes ojos verdes están muy abiertos y su boca está muy abierta.",
    "german": "Eine graue Katze mit schwarzen Streifen. Er liegt auf seiner Seite, mit dem Gesicht nach links, und umarmt eine blaue Decke. Seine Zunge steckt in der Decke und er zieht sich zurück, um sie herauszuholen, was ihn verzweifelt aussehen lässt. Ihre hellgrünen Augen sind weit aufgerissen und ihr Mund steht weit offen."
  },
  {
    "id": "0127",
    "file": "https://i.imgur.com/s46Po1p.jpg",
    "portuguese": "Foto de duas gatas deitadas em uma cama. A da esquerda é maior e toda preta. É bem peluda e seus olhos estão quase inteiramente pretos. Ao seu lado, uma gata branca. Sua parte traseira e o topo de sua cabeça são pretos, juntamente com uma manchinha em seu queixo. Seu pelo é ralo e seus olhos estão fechados. A cama possui um lençol branco e o fundo é uma cortinha roxa. À esquerda, algumas roupas.",
    "english": "Photo of two cats lying on a bed. The one on the left is bigger and all black. It is quite furry and its eyes are almost entirely black. Beside him, a white cat. Its back and the top of its head are black, along with a spot on its chin. His fur is thin and his eyes are closed. The bed has a white sheet and the background is a purple curtain. On the left, some clothes.",
    "spanish": "Foto de dos gatos acostados en una cama. El de la izquierda es más grande y todo negro. Es bastante peludo y sus ojos son casi en su totalidad negros. A su lado, un gato blanco. Su espalda y la parte superior de su cabeza son negras, junto con una mancha en la barbilla. Su pelaje es fino y sus ojos están cerrados. La cama tiene una sábana blanca y el fondo es una cortina morada. A la izquierda, algo de ropa.",
    "german": "Foto von zwei Katzen, die auf einem Bett liegen. Der linke ist größer und ganz schwarz. Es ist ziemlich pelzig und seine Augen sind fast vollständig schwarz. Neben ihm eine weiße Katze. Sein Rücken und die Oberseite seines Kopfes sind schwarz, zusammen mit einem Fleck auf seinem Kinn. Sein Fell ist dünn und seine Augen sind geschlossen. Das Bett hat ein weißes Laken und der Hintergrund ist ein lila Vorhang. Links einige Kleidungsstücke."
  },
  {
    "id": "0128",
    "file": "https://i.imgur.com/3E6hGUa.jpg",
    "portuguese": "A foto mostra um urso panda do busto para cima. Ele está à direita, sua cabeça é branca e seu corpo é preto, tal qual suas orelhas e o redor de seus olhos. Sua boca está levemente aberta e ele come um pedaço de folha, que sai do chão. O fundo está desfocado e é verde.",
    "english": "The photo shows a panda bear from the bust up. He is on the right, his head is white and his body is black, as are his ears and around his eyes. His mouth is slightly open and he eats a piece of leaf, which comes out of the ground. The background is blurred and is green.",
    "spanish": "La foto muestra un oso panda de busto para arriba. Él está a la derecha, su cabeza es blanca y su cuerpo es negro, al igual que sus orejas y alrededor de sus ojos. Su boca está ligeramente abierta y come un trozo de hoja, que sale de la tierra. El fondo está borroso y es verde.",
    "german": "Das Foto zeigt einen Pandabären von oben. Er ist rechts, sein Kopf ist weiß und sein Körper ist schwarz, ebenso wie seine Ohren und um seine Augen. Sein Mund ist leicht geöffnet und er isst ein Stück Blatt, das aus der Erde kommt. Der Hintergrund ist unscharf und grün."
  },
  {
    "id": "0129",
    "file": "https://i.imgur.com/5BGWa6M.jpg",
    "portuguese": "Um filhote de gato de pelo laranja está sobre as quatro patas encima de uma cama. A roupa de cama é branca e a parede ao fundo é marrom claro. Editadas sobre a cabeça dele estão duas antenas lilás e sobre as costas, um par de asas translúcidas roxas e verdes. A expressão dele é neutra e ele não olha pra câmera.",
    "english": "An orange fur kitten is on all fours on top of a bed. The bedding is white and the back wall is light brown. Edited over his head are two lilac antennae and over his back, a pair of translucent purple and green wings. His expression is neutral and he doesn't look at the camera.",
    "spanish": "Un gatito de piel naranja está a cuatro patas encima de una cama. La ropa de cama es blanca y la pared trasera es de color marrón claro. Editadas sobre su cabeza hay dos antenas lilas y sobre su espalda, un par de alas translúcidas de color púrpura y verde. Su expresión es neutral y no mira a la cámara.",
    "german": "Ein orangefarbenes Fellkätzchen liegt auf allen Vieren auf einem Bett. Die Bettwäsche ist weiß und die Rückwand ist hellbraun. Über seinem Kopf sind zwei lila Antennen und über seinem Rücken ein Paar durchscheinender lila und grüner Flügel angebracht. Sein Gesichtsausdruck ist neutral und er schaut nicht in die Kamera."
  },
  {
    "id": "0130",
    "file": "https://i.imgur.com/4dWse2X.jpg",
    "portuguese": "A foto mostra um gato preto de costas. Está deitado em cima de um pano quadriculado, com o rosto para a esquerda. O pelo dele é bem ralinho e possui algumas partes laranjas. O fundo é um gramado e um par de tênis laranja.",
    "english": "The photo shows a black cat from the back. He is lying on top of a checkered cloth, with his face to the left. His fur is very thin and has some orange parts. The background is a lawn and a pair of orange sneakers.",
    "spanish": "La foto muestra un gato negro de espaldas. Está acostado sobre una tela a cuadros, con la cara hacia la izquierda. Su pelaje es muy fino y tiene algunas partes anaranjadas. El fondo es un césped y un par de zapatillas naranjas.",
    "german": "Das Foto zeigt eine schwarze Katze von hinten. Er liegt mit dem Gesicht nach links auf einem karierten Tuch. Sein Fell ist sehr dünn und hat einige orangefarbene Teile. Der Hintergrund ist ein Rasen und ein Paar orange Turnschuhe."
  },
  {
    "id": "0131",
    "file": "https://i.imgur.com/TCePZ1o.jpg",
    "portuguese": "A foto mostra um gatinho deitado em um chão de madeira. Ele é bem peludo. Sua parte de baixo é branca e a parte de cima é laranja com algumas manchas cinzas. Seus olhos são verdes e encaram a câmera. O fundo é uma parede branca, há uma caixa preta e um objeto de madeira.",
    "english": "The photo shows a kitten lying on a wooden floor. He's very hairy. Its underside is white and the upper half is orange with some gray spots. His eyes are green and staring at the camera. The background is a white wall, there is a black box and a wooden object.",
    "spanish": "La foto muestra a un gatito tirado en un suelo de madera. Es muy peludo. Su parte inferior es blanca y la mitad superior es anaranjada con algunas manchas grises. Sus ojos son verdes y miran fijamente a la cámara. El fondo es una pared blanca, hay una caja negra y un objeto de madera.",
    "german": "Das Foto zeigt ein Kätzchen, das auf einem Holzboden liegt. Er ist sehr behaart. Seine Unterseite ist weiß und die obere Hälfte ist orange mit einigen grauen Flecken. Seine Augen sind grün und starren in die Kamera. Der Hintergrund ist eine weiße Wand, es gibt eine schwarze Kiste und ein Holzobjekt."
  },
  {
    "id": "0132",
    "file": "https://i.imgur.com/3cjSb6V.jpg",
    "portuguese": "Um hamster pequeno, de pelo marrom-acinzentado e branco, deitado em um sofá de courino amarelo claro. Ele olha em direção a câmera.",
    "english": "A small gray-brown and white hamster lying on a pale yellow leatherette sofa. He looks towards the camera.",
    "spanish": "Un pequeño hámster gris-marrón y blanco acostado en un sofá de cuero amarillo pálido. Mira hacia la cámara.",
    "german": "Ein kleiner graubrauner und weißer Hamster, der auf einem blassgelben Kunstledersofa liegt. Er schaut in Richtung der Kamera."
  },
  {
    "id": "0133",
    "file": "https://i.imgur.com/LhHudEn.jpg",
    "portuguese": "Um gatinho branco dormindo abraçado com um golfinho de pelúcia azul com estrelinhas azuis, rosas, verdes e amarelas em um tom mais brilhoso. O gato está deitado em uma cama com lençol também branco e no canto se vê outro lençol bege e um cobertor vermelho.",
    "english": "A white kitten sleeping cuddled with a blue plush dolphin with blue, pink, green and yellow stars in a brighter shade. The cat is lying on a bed with a white sheet and in the corner there is another beige sheet and a red blanket.",
    "spanish": "Un gatito blanco durmiendo acurrucado con un delfín de peluche azul con estrellas azules, rosas, verdes y amarillas en un tono más brillante. El gato está acostado en una cama con una sábana blanca y en la esquina hay otra sábana beige y una manta roja.",
    "german": "Ein weißes Kätzchen, das mit einem blauen Plüschdelfin mit blauen, rosa, grünen und gelben Sternen in einem helleren Farbton gekuschelt schläft. Die Katze liegt auf einem Bett mit einem weißen Laken und in der Ecke gibt es ein weiteres beiges Laken und eine rote Decke."
  },
  {
    "id": "0134",
    "file": "https://i.imgur.com/O9H9fss.png",
    "portuguese": "A foto mostra um jacaré em uma madeira. Ele aparece da metade para cima, sua parte de baixo é mais clara e possui umas manchar pretas. Seus olhos estão fechadas e sua boca aberta em algo que parece um sorriso de felicidade. Em sua volta há diversas borboletas, especialmente amarelas, laranjas e cinzas, algumas pousadas em sua cabeça. O fundo desfocado mostra um lado.",
    "english": "The photo shows an alligator in a wood. It appears from the middle up, its underside is lighter and has some black spots. His eyes are closed and his mouth is open in what looks like a happy smile. Around him are several butterflies, especially yellow, orange and gray, some perched on his head. Blurred background shows one side.",
    "spanish": "La foto muestra un caimán en un bosque. Aparece de la mitad hacia arriba, su parte inferior es más clara y tiene algunas manchas negras. Sus ojos están cerrados y su boca está abierta en lo que parece una sonrisa feliz. A su alrededor hay varias mariposas, especialmente amarillas, naranjas y grises, algunas posadas en su cabeza. El fondo borroso muestra un lado.",
    "german": "Das Foto zeigt einen Alligator in einem Wald. Es erscheint von der Mitte nach oben, seine Unterseite ist heller und hat einige schwarze Flecken. Seine Augen sind geschlossen und sein Mund ist offen, was wie ein glückliches Lächeln aussieht. Um ihn herum sind mehrere Schmetterlinge, besonders gelb, orange und grau, einige sitzen auf seinem Kopf. Unscharfer Hintergrund zeigt eine Seite."
  },
  {
    "id": "0135",
    "file": "https://i.imgur.com/zxcj76v.jpg",
    "portuguese": "Um gatinho de pelo laranja está sentado de frente para a camera enquanto olha para o seu lado esquerdo. Editada por cima da foto estão asas de fada transparentes saindo das costas do bichnho. Ao fundo, é possível ver uma cabeceira branca, edredons cinza e uma parede também branca.",
    "english": "An orange fur kitten is sitting facing the camera as it looks to its left side. Edited over the photo are transparent fairy wings sticking out of the pet's back. In the background, you can see a white headboard, gray comforters and a white wall.",
    "spanish": "Un gatito de piel naranja está sentado frente a la cámara mientras mira hacia su lado izquierdo. Editadas sobre la foto hay alas de hadas transparentes que sobresalen de la espalda de la mascota. Al fondo se puede ver un cabecero blanco, edredones grises y una pared blanca.",
    "german": "Ein orangefarbenes Pelzkätzchen sitzt mit Blick auf die Kamera, während es auf seine linke Seite schaut. Über dem Foto sind transparente Feenflügel bearbeitet, die aus dem Rücken des Haustieres herausragen. Im Hintergrund sieht man ein weißes Kopfteil, graue Bettdecken und eine weiße Wand."
  },
  {
    "id": "0136",
    "file": "https://i.imgur.com/mV9S9vU.png",
    "portuguese": "Prints de uma postagem de @contextkittens. Há uma imagem de um gatinho branco filhote de costas, sentado em cima de um notebook, encarando a tela do mesmo. A legenda diz \"shh ele está se concentrando\".",
    "english": "Prints from a post by @contextkittens. There is an image of a white kitten on its back, sitting on top of a notebook, staring at its screen. The caption reads \"shh he's concentrating\".",
    "spanish": "Capturas de una publicación de @contextkittens. Hay una imagen de un gatito blanco boca arriba, sentado encima de una computadora portátil, mirando su pantalla. El pie de foto dice \"shh, se está concentrando\".",
    "german": "Drucke aus einem Beitrag von @contextkittens. Auf seinem Rücken ist ein Bild eines weißen Kätzchens zu sehen, das auf einem Notebook sitzt und auf dessen Bildschirm starrt. Die Bildunterschrift lautet „shh, er konzentriert sich“."
  },
  {
    "id": "0137",
    "file": "https://i.imgur.com/YO2gaWv.png",
    "portuguese": "Um notebook branco de lado, aberto. Em seu teclado, um gatinho bem pequeno está deitado. Ele é branco e a sua parte de cima é um pouco cinza. Ele encara a tela.",
    "english": "A white notebook on its side, open. On your keyboard, a very small kitten is lying down. It is white and its upper part is a little gray. He stares at the screen.",
    "spanish": "Una computadora portátil blanca de costado, abierta. En el teclado, un gatito muy pequeño está acostado. Es de color blanco y su parte superior es un poco gris. Mira la pantalla.",
    "german": "Ein weißes Notizbuch auf der Seite, offen. Auf Ihrer Tastatur liegt ein sehr kleines Kätzchen. Es ist weiß und sein oberer Teil ist ein wenig grau. Er starrt auf den Bildschirm."
  },
  {
    "id": "0138",
    "file": "https://i.imgur.com/y2eWngX.png",
    "portuguese": "Um gatinho sentado no teclado de um notebook. Ele é cinza com listras pretas, e sua parte de baixo é branca. É bem peludo e maior do que o notebook, apesar de aparentar ainda ser filhote. Duas de suas patas encostam na tela, e ele está olhando para além da câmera.",
    "english": "A kitten sitting at the keyboard of a notebook. It is gray with black stripes, and its underside is white. It's quite furry and bigger than the notebook, despite still looking like a puppy. Two of his paws touch the screen, and he's looking past the camera.",
    "spanish": "Un gatito sentado en el teclado de una computadora portátil. Es gris con rayas negras y su parte inferior es blanca. Es bastante peludo y más grande que la computadora portátil, a pesar de que todavía parece un cachorro. Dos de sus patas tocan la pantalla y mira más allá de la cámara.",
    "german": "Ein Kätzchen, das an der Tastatur eines Notizbuches sitzt. Es ist grau mit schwarzen Streifen und seine Unterseite ist weiß. Es ist ziemlich pelzig und größer als das Notizbuch, obwohl es immer noch wie ein Welpe aussieht. Zwei seiner Pfoten berühren den Bildschirm und er schaut an der Kamera vorbei."
  },
  {
    "id": "0139",
    "file": "https://i.imgur.com/ff9RYYk.png",
    "portuguese": "Um monitor branco com um gato deitado em cima. Ele é cinza com listras pretas, e sua parte de baixo é branca. Suas patas estão caídas à frente do monitor e sua boca está aberta. Na tela, outra foto do mesmo gato deitado no mesmo lugar, um pouco menor. O fundo é uma parede bege.",
    "english": "A white monitor with a cat lying on top. It is gray with black stripes, and its underside is white. His paws are down in front of the monitor and his mouth is open. On the screen, another photo of the same cat lying in the same place, a little smaller. The background is a beige wall.",
    "spanish": "Un monitor blanco con un gato encima. Es gris con rayas negras y su parte inferior es blanca. Sus patas están abajo frente al monitor y su boca está abierta. En la pantalla, otra foto del mismo gato tirado en el mismo lugar, un poco más pequeño. El fondo es una pared beige.",
    "german": "Ein weißer Monitor, auf dem eine Katze liegt. Es ist grau mit schwarzen Streifen und seine Unterseite ist weiß. Seine Pfoten sind vor dem Monitor abgelegt und sein Mund ist offen. Auf dem Bildschirm ein weiteres Foto derselben Katze, die an derselben Stelle liegt, etwas kleiner. Der Hintergrund ist eine beige Wand."
  },
  {
    "id": "0140",
    "file": "https://i.imgur.com/gLb5ySm.png",
    "portuguese": "Uma pessoa amarela mexendo em um computador. Ela usa uma blusa rosa e está com a cabeça curvada para a frente, em direção à tela. Em cima de seu cabelo preto, um gatinho está deitado. Ele é branco e bem pequeno. Suas patas traseiras estão na testa da pessoa, e ele encara o pescoço da mesma.",
    "english": "A yellow person working on a computer. She wears a pink blouse and has her head bent forward, towards the screen. On top of her black hair, a kitten is lying. He is white and very small. His hind legs are on the person's forehead, and he is staring at the person's neck.",
    "spanish": "Una persona amarilla trabajando en una computadora. Lleva una blusa rosa y tiene la cabeza inclinada hacia adelante, hacia la pantalla. Encima de su cabello negro, yace un gatito. Es blanco y muy pequeño. Sus patas traseras están en la frente de la persona y mira fijamente el cuello de la persona.",
    "german": "Eine gelbe Person, die an einem Computer arbeitet. Sie trägt eine rosafarbene Bluse und hat ihren Kopf nach vorne gebeugt, in Richtung des Bildschirms. Auf ihrem schwarzen Haar liegt ein Kätzchen. Er ist weiß und sehr klein. Seine Hinterbeine sind auf der Stirn der Person und er starrt auf den Hals der Person."
  },
  {
    "id": "0141",
    "file": "https://i.imgur.com/YPoS2O1.png",
    "portuguese": "Um computador em uma escrivaninha. Em cima do teclado branco há uma proteção, como se fosse uma prateleira. Ela é transparente e, em cima, há um gato laranja sentado. Ele é bem grande e peludo. Encara a esquerda com cara de bravo. As pontas de suas patinhas são brancas.",
    "english": "A computer on a desk. On top of the white keyboard there is a protection, as if it were a shelf. She is transparent and, on top, there is an orange cat sitting. He is very big and hairy. Face the left with an angry face. His paw tips are white.",
    "spanish": "Una computadora en un escritorio. Encima del teclado blanco hay una protección, como si fuera una estantería. Ella es transparente y, encima, hay un gato naranja sentado. Es muy grande y peludo. Mire a la izquierda con una cara enojada. Las puntas de sus patas son blancas.",
    "german": "Ein Computer auf einem Schreibtisch. Auf der weißen Tastatur befindet sich ein Schutz, als wäre es ein Regal. Sie ist transparent und oben drauf sitzt eine orangefarbene Katze. Er ist sehr groß und behaart. Wende dich mit einem wütenden Gesicht nach links. Seine Pfotenspitzen sind weiß."
  },
  {
    "id": "0142",
    "file": "https://i.imgur.com/0EbvRfA.png",
    "portuguese": "Um notebook aberto na foto de um gatinho. Ele é branco, com apenas o topo da cabeça preto, e aparece do \"busto\" para cima, encarando a câmera com seus olhos claros. Fora do computador, o mesmo gato aparece, um pouco maior. Ele olha a foto, confuso.",
    "english": "An open notebook on a picture of a kitten. He is white, with only the top of his head black, and appears from the \"bust\" up, facing the camera with his pale eyes. Outside the computer, the same cat appears, slightly larger. He looks at the photo, confused.",
    "spanish": "Una computadora portátil abierta en una foto de un gatito. Es blanco, con solo la parte superior de su cabeza negra, y aparece desde el \"busto\" hacia arriba, frente a la cámara con sus ojos claros. Fuera de la computadora, aparece el mismo gato, un poco más grande. Mira la foto, confundido.",
    "german": "Ein offenes Notizbuch auf einem Bild eines Kätzchens. Er ist weiß, nur die Oberseite seines Kopfes ist schwarz, und er erscheint von der \"Büste\" aufwärts und blickt mit seinen blassen Augen in die Kamera. Außerhalb des Computers erscheint dieselbe Katze, etwas größer. Verwirrt betrachtet er das Foto."
  },
  {
    "id": "0143",
    "file": "https://i.imgur.com/lFjw5ml.png",
    "portuguese": "Foto em uma qualidade bem duvidosa. Há um notebook cinza aberto no facebook, e um gatinho marrom com manchas pretas deitado em cima do mesmo. Ele é bem pequeno e está virado contra a tela, encarando a câmera.",
    "english": "Photo in very questionable quality. There is a gray notebook open on facebook, and a brown kitten with black spots lying on top of it. He's quite small and he's leaning against the screen, facing the camera.",
    "spanish": "Foto en calidad muy cuestionable. Hay una computadora portátil gris abierta en Facebook y un gatito marrón con manchas negras encima. Es bastante pequeño y está apoyado contra la pantalla, de cara a la cámara.",
    "german": "Foto in sehr fragwürdiger Qualität. Auf Facebook ist ein graues Notizbuch geöffnet und darauf liegt ein braunes Kätzchen mit schwarzen Flecken. Er ist ziemlich klein und lehnt gegen den Bildschirm, mit Blick auf die Kamera."
  },
  {
    "id": "0144",
    "file": "https://i.imgur.com/t1jY65H.png",
    "portuguese": "Uma escrivaninha com um computador em cima. Na cadeira de madeira, há um gato em pé. Ele é branco na parte de baixo e preto na parte de cima Apoia suas patas dianteiras no encosto e olha para baixo com seus olhos amarelos.",
    "english": "A desk with a computer on top. On the wooden chair, there is a cat standing. It is white on the underside and black on the top. It rests its front paws on the backrest and looks down with its yellow eyes.",
    "spanish": "Un escritorio con una computadora encima. En la silla de madera, hay un gato de pie. Es blanco por debajo y negro por arriba. Apoya sus patas delanteras en el respaldo y mira hacia abajo con sus ojos amarillos.",
    "german": "Ein Schreibtisch mit einem Computer darauf. Auf dem Holzstuhl steht eine Katze. Es ist auf der Unterseite weiß und auf der Oberseite schwarz. Es legt seine Vorderpfoten auf die Rückenlehne und schaut mit seinen gelben Augen nach unten."
  },
  {
    "id": "0145",
    "file": "https://i.imgur.com/GxWQzvz.png",
    "portuguese": "Dois gatinhos de frente à tela de um computador. O primeiro, mais para a frente, é laranja bem claro, com algumas listras mais escuras e a parte de baixo branca. O de trás possui a parte inferior branca e a superior preta. Ambos estão de pé na tela, apoiando as patas dianteiras na mesma.",
    "english": "Two kittens in front of a computer screen. The first one, towards the front, is a very light orange, with some darker stripes and a white underside. The back has a white bottom and a black top. Both are standing on the canvas, supporting their front paws on it.",
    "spanish": "Dos gatitos frente a la pantalla de una computadora. El primero, hacia el frente, es de color naranja muy claro, con algunas rayas más oscuras y la parte inferior blanca. La parte posterior tiene un fondo blanco y una parte superior negra. Ambos están de pie sobre la lona, ​​apoyando sus patas delanteras sobre ella.",
    "german": "Zwei Kätzchen vor einem Computerbildschirm. Der erste, vorne, ist ein sehr helles Orange mit einigen dunkleren Streifen und einer weißen Unterseite. Die Rückseite hat eine weiße Unterseite und eine schwarze Oberseite. Beide stehen auf der Leinwand und stützen ihre Vorderpfoten darauf ab."
  },
  {
    "id": "0146",
    "file": "https://i.imgur.com/rEoRG7I.png",
    "portuguese": "Uma escrivaninha com um computador branco antigo. Em cima do teclado, um gato fica de pé, apoiando as patas dianteiras no monitor e encarando o mesmo. Ele possui um tamanho médio e é cinza, com algumas listras pretas. O fundo é uma parede bege.",
    "english": "A desk with an old white computer. On top of the keyboard, a cat stands, supporting its front paws on the monitor and facing the same. It is medium in size and gray with some black stripes. The background is a beige wall.",
    "spanish": "Un escritorio con una vieja computadora blanca. Encima del teclado, un gato se para, apoyando sus patas delanteras en el monitor y frente al mismo. Es de tamaño mediano y gris con algunas rayas negras. El fondo es una pared beige.",
    "german": "Ein Schreibtisch mit einem alten weißen Computer. Auf der Tastatur steht eine Katze, die ihre Vorderpfoten auf den Monitor stützt und ihm zugewandt ist. Es ist mittelgroß und grau mit einigen schwarzen Streifen. Der Hintergrund ist eine beige Wand."
  },
  {
    "id": "0147",
    "file": "https://i.imgur.com/6GE8dG4.png",
    "portuguese": "Um notebook em cima de uma cama. À sua frente, um gatinho filhote cinza está sentado. Ele é bem pequeno e gordinho, e encara a câmera com seus olhos azuis. O computador parece gigante em comparação ao seu tamanho.",
    "english": "A notebook on top of a bed. In front of you, a gray pup kitten is sitting. He is quite small and chubby, and he faces the camera with his blue eyes. The computer looks gigantic compared to its size.",
    "spanish": "Una computadora portátil encima de una cama. Frente a ella, un gatito cachorro gris está sentado. Es bastante pequeño y gordito, y mira a la cámara con sus ojos azules. La computadora parece gigantesca en comparación con su tamaño.",
    "german": "Ein Notizbuch auf einem Bett. Vor Ihnen sitzt ein graues Kätzchen. Er ist ziemlich klein und pummelig und blickt mit seinen blauen Augen in die Kamera. Der Computer sieht im Vergleich zu seiner Größe gigantisch aus."
  },
  {
    "id": "0148",
    "file": "https://i.imgur.com/0GPSwOE.png",
    "portuguese": "Um gatinho laranja sentado em cima de um teclado. Ele é um pouquinho menor do que o monitor, e encara a tela fixamente, estando de costas para a câmera.",
    "english": "An orange kitten sitting on top of a keyboard. It is slightly smaller than the monitor, and it stares at the screen with its back to the camera.",
    "spanish": "Un gatito naranja sentado encima de un teclado. Es un poco más pequeño que el monitor y mira la pantalla de espaldas a la cámara.",
    "german": "Ein orangefarbenes Kätzchen, das auf einer Tastatur sitzt. Es ist etwas kleiner als der Monitor und starrt mit dem Rücken zur Kamera auf den Bildschirm."
  },
  {
    "id": "0149",
    "file": "https://i.imgur.com/HS7FQ7K.png",
    "portuguese": "Um monitor antigo sem a tela da frente. Dentro dele, há alguns paninhos e um gato deitado. Ele é laranja com manchas pretas e a parte de baixo branca. Está encolhido em formato de bola, dormindo.",
    "english": "An old monitor without the front screen. Inside it, there are some cloths and a lying cat. It is orange with black spots and a white underside. He's curled up into a ball, sleeping.",
    "spanish": "Un viejo monitor sin la pantalla frontal. En su interior hay unos trapos y un gato tumbado. Es de color naranja con manchas negras y una parte inferior blanca. Está hecho un ovillo, durmiendo.",
    "german": "Ein alter Monitor ohne Frontscheibe. Darin befinden sich einige Tücher und eine liegende Katze. Es ist orange mit schwarzen Flecken und einer weißen Unterseite. Er hat sich zu einer Kugel zusammengerollt und schläft."
  },
  {
    "id": "0150",
    "file": "https://i.imgur.com/bq6YoBB.png",
    "portuguese": "Um gato em cima de um monitor preto. Sua parte de baixo é branca e sua parte de cima é cinza com listras pretas, e ele usa uma colheirinha rosa. Está se segurando no monitor, quase caindo devido à grossura do mesmo, e encara algo fora da imagem, que, pela claridade, parece ser uma janela.",
    "english": "A cat on top of a black monitor. His bottom is white and his top is gray with black stripes, and he wears a pink spoon. He is holding on to the monitor, almost falling over due to its thickness, and stares at something outside the image, which, by the brightness, appears to be a window.",
    "spanish": "Un gato encima de un monitor negro. Su parte inferior es blanca y su parte superior es gris con rayas negras, y usa un collar rosa. Está agarrado al monitor, casi cayéndose debido a su grosor, y mira fijamente algo fuera de la imagen, que, por el brillo, parece ser una ventana.",
    "german": "Eine Katze auf einem schwarzen Monitor. Sein Unterteil ist weiß und sein Oberteil grau mit schwarzen Streifen, und er trägt einen rosafarbenen Löffel. Er hält den Monitor fest, der aufgrund seiner Dicke fast umfällt, und starrt auf etwas außerhalb des Bildes, das durch die Helligkeit wie ein Fenster erscheint."
  },
  {
    "id": "0151",
    "file": "https://i.imgur.com/RHnkmG1.png",
    "portuguese": "Um notebook preto aberto em cima de uma cama. Em cima do teclado há um gatinho branco com algumas manchas cinzas. Ele é bem pequeno e peludo, e seus olhinhos azuis são vesgos. No canto inferior direito há uma data, indicando 4 de novembro de 2006, às 3:54h.",
    "english": "An open black notebook on top of a bed. On top of the keyboard is a white kitten with some gray spots. He is very small and furry, and his little blue eyes are cross-eyed. In the lower right corner is a date, indicating November 4, 2006 at 3:54 am.",
    "spanish": "Una computadora portátil negra abierta encima de una cama. Encima del teclado hay un gatito blanco con algunas manchas grises. Es muy pequeño y peludo, y sus ojitos azules son bizcos. En la esquina inferior derecha hay una fecha que indica el 4 de noviembre de 2006 a las 3:54 am.",
    "german": "Ein offenes schwarzes Notizbuch auf einem Bett. Auf der Tastatur befindet sich ein weißes Kätzchen mit einigen grauen Flecken. Er ist sehr klein und pelzig und seine kleinen blauen Augen sind schielend. In der unteren rechten Ecke befindet sich ein Datum, das den 4. November 2006 um 3:54 Uhr anzeigt."
  },
  {
    "id": "0152",
    "file": "https://i.imgur.com/mw8KiGF.png",
    "portuguese": "Um notebook preto em cima de uma escrivaninha. Em cima do teclado há um gato preto. Seu pelo é ralo e ele vira o pescoço para trás, encarando a câmera com seus olhos amarelos. É um pouco maior do que a tela.",
    "english": "A black notebook on top of a desk. On top of the keyboard is a black cat. His fur is thin and he cranes his neck back, staring at the camera with his yellow eyes. It's a little bigger than the screen.",
    "spanish": "Una computadora portátil negra encima de un escritorio. Encima del teclado hay un gato negro. Su pelaje es delgado y estira el cuello hacia atrás, mirando a la cámara con sus ojos amarillos. Es un poco más grande que la pantalla.",
    "german": "Ein schwarzes Notizbuch auf einem Schreibtisch. Auf der Tastatur befindet sich eine schwarze Katze. Sein Fell ist dünn und er reckt den Hals nach hinten und starrt mit seinen gelben Augen in die Kamera. Es ist etwas größer als der Bildschirm."
  },
  {
    "id": "0153",
    "file": "https://i.imgur.com/5E2V2pE.png",
    "portuguese": "Um gato laranja filhote em cima de um notebook. Ele está de costas, bem perto da câmera, e encara a tela.",
    "english": "An orange kitten on top of a notebook. He's on his back, very close to the camera, and he's staring at the screen.",
    "spanish": "Un gatito naranja encima de una computadora portátil. Está boca arriba, muy cerca de la cámara, y mira la pantalla.",
    "german": "Ein orangefarbenes Kätzchen auf einem Notizbuch. Er liegt auf dem Rücken, ganz nah an der Kamera, und er starrt auf den Bildschirm."
  },
  {
    "id": "0154",
    "file": "https://i.imgur.com/nVAdLUX.png",
    "portuguese": "Um notebook meio rosado aberto em uma aba do facebook. Um gatinho preto com a parte de baixo branca está subindo no teclado, Ele posiciona suas patinhas dianteiras, olhando cuidadosamente as teclas.",
    "english": "A pinkish notebook open in a facebook tab. A black kitten with a white underside is climbing up on the keyboard. It positions its front paws, carefully looking at the keys.",
    "spanish": "Una computadora portátil rosada abierto en una pestaña de facebook. Un gatito negro con la parte inferior blanca se sube al teclado. Posiciona sus patas delanteras, mirando cuidadosamente las teclas.",
    "german": "Ein pinkfarbenes Notizbuch, das in einem Facebook-Tab geöffnet ist. Ein schwarzes Kätzchen mit weißer Unterseite klettert auf die Tastatur. Es positioniert seine Vorderpfoten und betrachtet sorgfältig die Schlüssel."
  },
  {
    "id": "0155",
    "file": "https://i.imgur.com/IohljaU.png",
    "portuguese": "Um notebook aberto um cima de uma mesa. Deitado sobre ele, há um gato preto com o pelo ralo. O gato é bem grande, cobrindo o teclado por inteiro. A mesa está bem bagunçada.",
    "english": "An open notebook on top of a table. Lying on top of it is a black cat with thin fur. The cat is quite large, covering the entire keyboard. The table is very messy.",
    "spanish": "Una computadora portátil abierta encima de una mesa. Acostado encima hay un gato negro con pelaje fino. El gato es bastante grande y cubre todo el teclado. La mesa está muy desordenada.",
    "german": "Ein offenes Notizbuch auf einem Tisch. Darauf liegt eine schwarze Katze mit dünnem Fell. Die Katze ist ziemlich groß und bedeckt die gesamte Tastatur. Der Tisch ist sehr unordentlich."
  },
  {
    "id": "0156",
    "file": "https://i.imgur.com/kTV67AX.png",
    "portuguese": "Um gato branco deitado em cima de um notebook fechado. Ele é pequeno e está deitado na ponta, e a sua cabeça está caindo para fora do mesmo.",
    "english": "A white cat lying on top of a closed notebook. He's small and he's lying on the edge, and his head is sticking out of it.",
    "spanish": "Un gato blanco sobre una computadora portátil cerrada. Es pequeño y está acostado en el borde, y su cabeza sobresale.",
    "german": "Eine weiße Katze, die auf einem geschlossenen Notizbuch liegt. Er ist klein und liegt am Rand, und sein Kopf ragt heraus."
  },
  {
    "id": "0157",
    "file": "https://i.imgur.com/BE4agoB.png",
    "portuguese": "Um notebook preto com três gatinhos em cima. O da esquerda é branco com manchas pretas, especialmente na parte superior, e está abaixado. O do centro é preto com o peito branco, e está sentado. O da direita é todo preto, e está deitado. A qualidade da imagem não está muito boa, pois uma janela atrás do computador faz claridade.",
    "english": "A black notebook with three kittens on top. The one on the left is white with black spots, especially on the top, and is lowered. The one in the center is black with a white chest, and is sitting. The one on the right is all black, and it's lying down. The image quality is not very good, as a window behind the computer makes light.",
    "spanish": "Una libreta negra con tres gatitos encima. El de la izquierda es blanco con manchas negras, sobre todo en la parte superior, y está rebajado. El del centro es negro con el pecho blanco y está sentado. El de la derecha es todo negro y está acostado. La calidad de la imagen no es muy buena, ya que una ventana detrás de la computadora da luz.",
    "german": "Ein schwarzes Notizbuch mit drei Kätzchen darauf. Der linke ist weiß mit schwarzen Flecken, besonders oben, und ist abgesenkt. Der in der Mitte ist schwarz mit weißer Brust und sitzt. Der rechte ist ganz schwarz und liegt. Die Bildqualität ist nicht sehr gut, da ein Fenster hinter dem Computer Licht macht."
  },
  {
    "id": "0158",
    "file": "https://i.imgur.com/TbUXD6F.png",
    "portuguese": "Um gato laranja de frente para um notebook. Suas patas estão no teclado, fazendo parecer que ele está digitando. Na tela, a foto de um esquilo.",
    "english": "An orange cat in front of a notebook. His paws are on the keyboard, making it look like he's typing. On the screen, a picture of a squirrel.",
    "spanish": "Un gato naranja frente a una computadora portátil. Sus patas están sobre el teclado, lo que hace que parezca que está escribiendo. En la pantalla, una imagen de una ardilla.",
    "german": "Eine orangefarbene Katze vor einem Notizbuch. Seine Pfoten liegen auf der Tastatur, sodass es aussieht, als würde er tippen. Auf dem Bildschirm ein Bild von einem Eichhörnchen."
  },
  {
    "id": "0159",
    "file": "https://i.imgur.com/rQaucv5.png",
    "portuguese": "Um notebook sendo mostrado de lado. Olhando para a tela, um gato bem peludo, branco na parte de baixo e preto na de cima. Ele aproxima o rosto e uma das patas da tela, como se quisesse pegá-la. No monitor, há a imagem de um gato branco lambendo a pata.",
    "english": "A notebook being shown from the side. Looking at the screen, a very furry cat, white on the bottom and black on the top. He brings his face and one of his paws to the canvas, as if he wants to catch it. On the monitor, there is an image of a white cat licking its paw.",
    "spanish": "Una computadora portátil siendo mostrada desde un lado. Mirando la pantalla, un gato muy peludo, blanco por abajo y negro por arriba. Acerca su rostro y una de sus patas a la pantalla, ​​como si quisiera atraparla. En el monitor, hay una imagen de un gato blanco lamiéndose la pata.",
    "german": "Ein Notizbuch, das von der Seite gezeigt wird. Auf den Bildschirm schauend, eine sehr pelzige Katze, unten weiß und oben schwarz. Er bringt sein Gesicht und eine seiner Pfoten auf die Leinwand, als wollte er sie fangen. Auf dem Monitor ist das Bild einer weißen Katze zu sehen, die sich die Pfote leckt."
  },
  {
    "id": "0160",
    "file": "https://i.imgur.com/XT7XkZA.png",
    "portuguese": "Um notebook semi-aberto. Entre o teclado e a tela, há um gatinho filhote. Ele possui o pelo cinza claro e está dormindo, sendo possível ver apenas a sua cabeça e uma de suas patas.",
    "english": "A half-open notebook. Between the keyboard and the screen, there is a kitten. It has light gray fur and is sleeping, with only its head and one of its paws visible.",
    "spanish": "Una computadora portátil entreabierta. Entre el teclado y la pantalla, hay un gatito. Tiene pelaje gris claro y está durmiendo, con solo su cabeza y una de sus patas visibles.",
    "german": "Ein halb geöffnetes Notizbuch. Zwischen der Tastatur und dem Bildschirm befindet sich ein Kätzchen. Es hat hellgraues Fell und schläft, nur sein Kopf und eine seiner Pranken sind sichtbar."
  },
  {
    "id": "0161",
    "file": "https://i.imgur.com/Vg81X2D.png",
    "portuguese": "Um gatinho em cima de um notebook aberto. Ele é bem pequeno, o lado direito de seu rosto é cinza e o esquerdo é branco. Seu peito também é branco. Ele aproxima a cabeça da câmera, encarando-a com seus olhos grandes.",
    "english": "A kitten on top of an open notebook. He is quite small, the right side of his face is gray and the left side is white. His chest is also white. He puts his head closer to the camera, staring at it with his big eyes.",
    "spanish": "Un gatito encima de una computadora portátil abierta. Es bastante pequeño, el lado derecho de su cara es gris y el lado izquierdo es blanco. Su pecho también es blanco. Acerca su cabeza a la cámara, mirándola con sus grandes ojos.",
    "german": "Ein Kätzchen auf einem offenen Notizbuch. Er ist ziemlich klein, die rechte Seite seines Gesichts ist grau und die linke Seite ist weiß. Auch seine Brust ist weiß. Er legt seinen Kopf näher an die Kamera und starrt sie mit seinen großen Augen an."
  },
  {
    "id": "0162",
    "file": "https://i.imgur.com/y6t6V5O.png",
    "portuguese": "Um notebook sobre o parapeito de uma janela. Está aberto em um texto e há uma mão repousada do lado dele. Ao lado, apoiando a cabeça na mão, um gato laranja dorme. Ele é bem grande e sua cabeça cobre a mão quase inteira.",
    "english": "A notebook on a windowsill. It is open on a text and there is a hand resting beside it. Next to it, resting its head on its hand, an orange cat sleeps. He is quite large and his head covers almost his entire hand.",
    "spanish": "Una computadora portátil en el alféizar de una ventana. Está abierta sobre un texto y hay una mano apoyada a su lado. Junto a él, con la cabeza apoyada en la mano, duerme un gato naranja. Es bastante grande y su cabeza cubre casi toda su mano.",
    "german": "Ein Notizbuch auf einer Fensterbank. Es ist offen auf einem Text und daneben liegt eine Hand. Daneben schläft eine orangefarbene Katze, den Kopf auf die Hand gestützt. Er ist ziemlich groß und sein Kopf bedeckt fast seine ganze Hand."
  },
  {
    "id": "0163",
    "file": "https://i.imgur.com/zGp0Hio.png",
    "portuguese": "Um notebook aberto em um desenho infantil. Nele, há um gato laranja ronronando em um campo. Olhando fixamente para a tela, um gatinho filhote, também laranja, está deitado ao lado do teclado.",
    "english": "An open notebook in a children's drawing. In it, there is an orange cat purring in a field. Staring at the screen, a kitten, also orange, is lying next to the keyboard.",
    "spanish": "Una computadora portátil abierta en un dibujo infantil. En él, hay un gato naranja ronroneando en un campo. Mirando la pantalla, un gatito, también naranja, está acostado junto al teclado.",
    "german": "Ein offenes Notizbuch in einer Kinderzeichnung. Darin schnurrt eine orangefarbene Katze auf einem Feld. Auf den Bildschirm starrend, liegt ein Kätzchen, ebenfalls orange, neben der Tastatur."
  },
  {
    "id": "0164",
    "file": "https://i.imgur.com/4pJ0f3l.png",
    "portuguese": "Um notebook aberto. Em cima dele, um gatinho branco bem peludo. Ele é maior do que o notebook, mas a impressão é que o notebook é menor do que deveria ser. O filhote encara a câmera com seus olhos claros e sua patinha direita está levantada.",
    "english": "An open notebook. On top of it, a very furry white kitten. It is larger than the notebook, but the impression is that the notebook is smaller than it should be. The puppy faces the camera with its clear eyes and its right paw is raised.",
    "spanish": "Una computadora portátil abierta. Encima, un gatito blanco muy peludo. Es más grande que el portátil, pero la impresión es que el portátil es más pequeño de lo que debería ser. El cachorro mira a la cámara con sus ojos claros y su pata derecha está levantada.",
    "german": "Ein offenes Notizbuch. Darüber ein sehr pelziges weißes Kätzchen. Es ist größer als das Notebook, aber der Eindruck ist, dass das Notebook kleiner ist, als es sein sollte. Der Welpe steht mit seinen klaren Augen vor der Kamera und seine rechte Pfote ist erhoben."
  },
  {
    "id": "0165",
    "file": "https://i.imgur.com/GCB8iPQ.png",
    "portuguese": "Um notebook aberto em uma tela de descanso. Em cima dele, um gatinho escaminha dorme. Ele está todo enrolado, abraçando a si mesmo com o rabo e usando a pata traseira de travesseiro.",
    "english": "An open notebook on a rest screen. On top of him, a scaly kitten sleeps. He's all curled up, hugging himself with his tail and using his hind leg as a pillow.",
    "spanish": "Una computadora portátil abierta en una pantalla de descanso. Encima de él, duerme un gatito escamoso. Está todo acurrucado, abrazándose con la cola y usando su pata trasera como almohada.",
    "german": "Ein geöffnetes Notizbuch auf einem Ruhebildschirm. Auf ihm schläft ein schuppiges Kätzchen. Er ist ganz zusammengerollt, umarmt sich mit seinem Schwanz und benutzt sein Hinterbein als Kissen."
  },
  {
    "id": "0166",
    "file": "https://i.imgur.com/C9HCLT4.png",
    "portuguese": "Um notebook preto aberto no youtube, em uma aba de sugestão de vídeos. Um gato escaminha está sentado no teclado, encarando a tela, como se estivesse escolhendo o que assistir. Seu pelo é bem rente e ele está de costas.",
    "english": "A black notebook open on youtube, in a video suggestion tab. A scaly cat is sitting at the keyboard, staring at the screen, as if he's choosing what to watch. His fur is very close and he is on his back.",
    "spanish": "Una computadora portátil negra abierto en youtube, en una pestaña de sugerencia de video. Un gato con escamas está sentado frente al teclado, mirando la pantalla, como si estuviera eligiendo qué ver. Su pelaje está bastante corto y está boca arriba.",
    "german": "Ein schwarzes Notizbuch, das auf YouTube in einem Videovorschlags-Tab geöffnet ist. Eine schuppige Katze sitzt an der Tastatur und starrt auf den Bildschirm, als würde sie auswählen, was sie sich ansehen möchte. Sein Fell ist sehr eng und er liegt auf dem Rücken."
  },
  {
    "id": "0167",
    "file": "https://i.imgur.com/Pq4CSEL.png",
    "portuguese": "Um notebook aberto aparece de lado, bem e perto. Vindo de trás do mesmo, um gatinho mostra a sua cabeça. Ele é cinza e possui umas listras pretas, e seu fucinho é branco. Seus olhos estão dilatados e meio vesguinhos, e seu reflexo aparece na tela.",
    "english": "An open notebook appears from the side, close and wide. Coming from behind it, a kitten shows its head. He is gray and has black stripes, and his muzzle is white. His eyes are dilated and squinted, and his reflection appears on the screen.",
    "spanish": "Una computadora portátil abierta aparece de lado, cerrado y ancho. Viniendo de atrás, un gatito asoma la cabeza. Es gris y tiene rayas negras, y su hocico es blanco. Sus ojos están dilatados y entrecerrados, y su reflejo aparece en la pantalla.",
    "german": "Ein aufgeschlagenes Notizbuch erscheint von der Seite, nah und breit. Von hinten kommend, zeigt ein Kätzchen seinen Kopf. Er ist grau und hat schwarze Streifen und seine Schnauze ist weiß. Seine Augen sind geweitet und zusammengekniffen, und sein Spiegelbild erscheint auf dem Bildschirm."
  },
  {
    "id": "0168",
    "file": "https://i.imgur.com/7fBzwPZ.png",
    "portuguese": "Parte de um monitor com uma webcam em cima. Apoiado nele, um gatinho. Ele é laranja e seu focinho é branco. Olha para baixo com seus olhos amarelos, e apoia suas patas dianteiras no topo da tela. Elas são brancas.",
    "english": "Part of a monitor with a webcam on top. Leaning on it, a kitten. He is orange and his muzzle is white. It looks down with its yellow eyes, and braces its front paws at the top of the screen. They are white.",
    "spanish": "Parte de un monitor con una cámara web en la parte superior. Apoyado en él, un gatito. Es naranja y su hocico es blanco. Mira hacia abajo con sus ojos amarillos y apoya sus patas delanteras en la parte superior de la pantalla. Son blancos.",
    "german": "Teil eines Monitors mit einer Webcam darüber. Daran gelehnt, ein Kätzchen. Er ist orange und seine Schnauze ist weiß. Es schaut mit seinen gelben Augen nach unten und stützt seine Vorderpfoten am oberen Rand des Bildschirms ab. Sie sind weiß."
  },
  {
    "id": "0169",
    "file": "https://i.imgur.com/76thfHG.png",
    "portuguese": "A tela mostra um gatinho deitado apoiando a cabeça no teclado de um notebook. Ele é bege com listras pretas. Seus olhos estão fechados e sua língua está para fora.",
    "english": "The screen shows a kitten lying down resting its head on a notebook keyboard. It is beige with black stripes. His eyes are closed and his tongue is out.",
    "spanish": "La pantalla muestra un gatito acostado apoyando su cabeza en el teclado de una computadora portátil. Es beige con rayas negras. Tiene los ojos cerrados y la lengua fuera.",
    "german": "Der Bildschirm zeigt ein Kätzchen, das seinen Kopf auf eine Notebook-Tastatur legt. Es ist beige mit schwarzen Streifen. Seine Augen sind geschlossen und seine Zunge ist heraus."
  },
  {
    "id": "0170",
    "file": "https://i.imgur.com/qj31EWO.png",
    "portuguese": "Um notebook completamente aberto, como se fosse plano. Deitado na tela, um gato bem peludo olha para trás, encarando a câmera. Sua parte de cima é preta, e sua parte de baixo e rosto são brancas. Ele é bem bigodudo, e seus olhos são grandes.",
    "english": "A notebook completely open, as if it were flat. Lying on the screen, a furry cat looks back, facing the camera. His top is black, and his underside and face are white. He is very mustachioed, and his eyes are large.",
    "spanish": "Una computadora portátil completamente abierta, como si fuera plana. Acostado en la pantalla, un gato peludo mira hacia atrás, frente a la cámara. Su parte superior es negra, y su parte inferior y cara son blancas. Tiene mucho bigote y sus ojos son grandes.",
    "german": "Ein Notizbuch ganz offen, als wäre es flach. Auf dem Bildschirm liegend blickt eine pelzige Katze zurück und blickt in die Kamera. Seine Oberseite ist schwarz und seine Unterseite und sein Gesicht sind weiß. Er ist sehr schnauzbärtig und seine Augen sind groß."
  },
  {
    "id": "0171",
    "file": "https://i.imgur.com/a1gGvSx.png",
    "portuguese": "Um gato preto deitado em cima de um notebook branco. Ele está esticado e com a barriga para cima. Seus olhos amarelos encaram a câmera e sua boca está aberta. A tela mostra uma aba do firefox.",
    "english": "A black cat lying on top of a white notebook. He is stretched out and on his stomach. His yellow eyes stare at the camera and his mouth is open. The screen shows a firefox tab.",
    "spanish": "Un gato negro sobre una computadora portátil blanca. Está estirado y boca abajo. Sus ojos amarillos miran fijamente a la cámara y su boca está abierta. La pantalla muestra una pestaña de Firefox.",
    "german": "Eine schwarze Katze, die auf einem weißen Notizbuch liegt. Er ist ausgestreckt und auf dem Bauch. Seine gelben Augen starren in die Kamera und sein Mund ist offen. Der Bildschirm zeigt einen Firefox-Tab."
  },
  {
    "id": "0172",
    "file": "https://i.imgur.com/zGOrWfn.png",
    "portuguese": "Um gatinho branco com manchas pretas está deitado em cima de um notebook branco aberto. Sua cabeça está próxima da câmera, apoiada em uma de suas patas, e a outra está esticada.",
    "english": "A white kitten with black spots is lying on top of an open white notebook. His head is close to the camera, resting on one of his paws, and the other is stretched out.",
    "spanish": "Un gatito blanco con manchas negras está sobre una computadora portátil blanca abierta. Su cabeza está cerca de la cámara, apoyada en una de sus patas, y la otra está estirada.",
    "german": "Ein weißes Kätzchen mit schwarzen Flecken liegt auf einem offenen weißen Notizbuch. Sein Kopf ist nah an der Kamera und ruht auf einer seiner Pfoten, während die andere ausgestreckt ist."
  },
  {
    "id": "0173",
    "file": "https://i.imgur.com/MGROm2a.png",
    "portuguese": "Um notebook aberto. Na tela, há a foto de um gatinho bem pequeno. Sua barriga é branca e suas costas e cabeça são de um cinza escuro. Ele está dormindo todo enroladinho. Em cima do teclado do notebook, o mesmo gato dorme. Ele está um pouco maior e está esticado, com o queixo virado pra cima.",
    "english": "An open notebook. On the screen is a picture of a very small kitten. His belly is white and his back and head are a dark gray. He's sleeping all curled up. On top of the notebook keyboard, the same cat sleeps. He's a little bigger and he's stretched out with his chin up.",
    "spanish": "Una computadora portátil abierta. En la pantalla hay una imagen de un gatito muy pequeño. Su vientre es blanco y su espalda y cabeza son de un gris oscuro. Está durmiendo todo acurrucado. Encima del teclado del portátil, duerme el mismo gato. Es un poco más grande y está estirado con la barbilla levantada.",
    "german": "Ein offenes Notizbuch. Auf dem Bildschirm ist ein Bild von einem sehr kleinen Kätzchen. Sein Bauch ist weiß und sein Rücken und Kopf sind dunkelgrau. Er schläft ganz zusammengerollt. Auf der Tastatur des Notebooks schläft dieselbe Katze. Er ist ein wenig größer und mit erhobenem Kinn ausgestreckt."
  },
  {
    "id": "0174",
    "file": "https://i.imgur.com/23Xyhl5.png",
    "portuguese": "Foto do teclado de um notebook cinza. Vindo de trás dele, uma pata branca com as garras à mostra.",
    "english": "Photo of a gray notebook keyboard. Coming from behind him, a white paw with claws showing.",
    "spanish": "Foto de un teclado de portátil gris. Viniendo detrás de él, una pata blanca con garras mostrando.",
    "german": "Foto einer grauen Notizbuchtastatur. Hinter ihm kam eine weiße Pfote mit Krallen hervor."
  },
  {
    "id": "0175",
    "file": "https://i.imgur.com/cMg6GtB.png",
    "portuguese": "Um suporte na cama apoiando um notebook. No lençol, um outro teclado. Debaixo do suporte, um gato bege está deitado virado para cima. Suas orelhas e focinho são marrons, e ele encara a câmera com seus olhos dilatados, com o queixo para cima. Suas patas dianteiras estão apoiadas no suporte do pc.",
    "english": "A bed stand supporting a notebook. On the sheet, another keyboard. Under the stand, a beige cat is lying face up. His ears and muzzle are brown, and he faces the camera with his eyes dilated, his chin up. His front paws are resting on the pc stand.",
    "spanish": "Un soporte de cama que sostiene una computadora portátil. Sobre la hoja, otro teclado. Debajo del soporte, un gato beige yace boca arriba. Sus orejas y hocico son marrones, y mira a la cámara con los ojos dilatados y la barbilla levantada. Sus patas delanteras descansan sobre el soporte de la computadora.",
    "german": "Ein Bettständer, der ein Notebook trägt. Auf dem Blatt eine weitere Tastatur. Unter dem Ständer liegt eine beige Katze mit dem Gesicht nach oben. Seine Ohren und seine Schnauze sind braun, und er blickt mit geweiteten Augen und erhobenem Kinn in die Kamera. Seine Vorderpfoten ruhen auf dem PC-Ständer."
  },
  {
    "id": "0176",
    "file": "https://i.imgur.com/f3ve2tO.png",
    "portuguese": "Uma mesa de madeira com um computador branco antigo. Em frente à ela, um gatinho está sentado. Ele é escaminha e sua parte de baixo é branca. É bem pequeno, sendo sua altura sentado metade da altura do monitor. Seu rabinho está caído para fora da mesa, que está super bagunçada.",
    "english": "A wooden table with an old white computer. In front of her, a kitten is sitting. It is scaly and its underside is white. It is quite small, being its sitting height half the height of the monitor. His tail is hanging off the table, which is super messy.",
    "spanish": "Una mesa de madera con una vieja computadora blanca. Frente a ella, un gatito está sentado. Es escamoso y su parte inferior es blanca. Es bastante pequeño, siendo su altura de asiento la mitad de la altura del monitor. Su cola cuelga de la mesa, la cual está súper desordenada.",
    "german": "Ein Holztisch mit einem alten weißen Computer. Vor ihr sitzt ein Kätzchen. Es ist schuppig und seine Unterseite ist weiß. Es ist ziemlich klein, da seine Sitzhöhe halb so hoch ist wie der Monitor. Sein Schwanz hängt vom Tisch herunter, was super chaotisch ist."
  },
  {
    "id": "0177",
    "file": "https://i.imgur.com/dDaNVdQ.png",
    "portuguese": "Um gatinho filhote sentado em uma mini cadeira. Ele possui o peito branco e as coisas cinza, e usa uma coleirinha preta e branca. À sua frente, uma mini mesa com um mini computador. Uma de suas patinhas está no teclado, e a outra no mouse.",
    "english": "A kitten sitting on a mini chair. He has a white chest and gray things, and wears a black and white collar. In front of him, a mini table with a mini computer. One of his paws is on the keyboard, the other on the mouse.",
    "spanish": "Un gatito sentado en una mini silla. Tiene un pecho blanco y cosas grises, y usa un collar blanco y negro. Frente a él, una mini mesa con una mini computadora. Una de sus patas está en el teclado, la otra en el ratón.",
    "german": "Ein Kätzchen, das auf einem Ministuhl sitzt. Er hat eine weiße Brust und graue Sachen und trägt einen schwarz-weißen Kragen. Vor ihm ein Mini-Tisch mit einem Mini-Computer. Eine seiner Pfoten liegt auf der Tastatur, die andere auf der Maus."
  },
  {
    "id": "0178",
    "file": "https://i.imgur.com/GJcp11B.jpg",
    "portuguese": "Um coala em uma árvore. Ele é cinza, bem peludinho, e está dormindo debruçado no tronco. Suas patinhas abraçam ela, e o fundo são folhas verdes.",
    "english": "A koala in a tree. He's gray, very furry, and he's sleeping on the trunk. His paws hug her, and the background is green leaves.",
    "spanish": "Un koala en un árbol. Es gris, muy peludo, y está durmiendo en el tronco. Sus patas lo abrazan, y el fondo son hojas verdes.",
    "german": "Ein Koala in einem Baum. Er ist grau, sehr pelzig und schläft auf dem Kofferraum. Seine Pfoten umarmen sie und der Hintergrund sind grüne Blätter."
  },
  {
    "id": "0179",
    "file": "https://i.imgur.com/aE0JhHs.jpg",
    "portuguese": "Um cachorro mostra apenas a cabeça. Ele é bege e seu fucinho é longo. Usa um gorro russo preto com o símbolo do comunismo, que consiste de uma foice e um martelo cruzados. Ao fundo, uma bandeira vermelha con o mesmo símbolo.  O cachorro está em um quarto.",
    "english": "A dog shows only its head. He is beige and his muzzle is long. He wears a black Russian beanie with the symbol of communism, which consists of a crossed hammer and sickle. In the background, a red flag with the same symbol. The dog is in a room.",
    "spanish": "Un perro muestra sólo su cabeza. Es de color beige y su hocico es largo. Lleva un gorro ruso negro con el símbolo del comunismo, que consiste en una hoz y un martillo cruzados. Al fondo, una bandera roja con el mismo símbolo. El perro está en una habitación.",
    "german": "Ein Hund zeigt nur seinen Kopf. Er ist beige und seine Schnauze ist lang. Er trägt eine schwarze russische Mütze mit dem Symbol des Kommunismus, das aus einem gekreuzten Hammer und einer Sichel besteht. Im Hintergrund eine rote Fahne mit dem gleichen Symbol. Der Hund ist in einem Zimmer."
  },
  {
    "id": "0180",
    "file": "https://i.imgur.com/xlPkiFA.jpg",
    "portuguese": "Uma lontra deitada em um chão de madeira. Ela aparece apenas da metade para cima e encara a câmera. Com suas patinhas, abraça uma lontra de pelúcia.",
    "english": "An otter lying on a wooden floor. She appears only halfway up and faces the camera. With her paws, she hugs a stuffed otter.",
    "spanish": "Una nutria tirada en un suelo de madera. Ella aparece solo de la mitad hacia arriba y mira hacia la cámara. Con sus patas abraza a una nutria de peluche.",
    "german": "Ein Otter, der auf einem Holzboden liegt. Sie erscheint nur auf halber Höhe und blickt in die Kamera. Mit ihren Pfoten umarmt sie einen ausgestopften Otter."
  },
  {
    "id": "0181",
    "file": "https://i.imgur.com/OShUvYv.jpg",
    "portuguese": "Imagem dividida em dois quadros. No superior, um coelhinho branco aparece de frente para um computador, encarando o monitor. Ele é bem pequeno, seus olhinhos são castanhos e suas orelhas estão abaixadas. O fundo é uma parede cinza. A parte de baixo possui uma imagem semelhante. Nesta, o coelhinho olha para a frente, como se estivesse encarando quem está olhando. Sua expressão lembra uma cara de bravo ou de confuso.",
    "english": "Image divided into two frames. At the top, a white bunny appears in front of a computer, staring at the monitor. He is quite small, his eyes are brown and his ears are down. The background is a gray wall. The bottom has a similar image. In this one, the bunny looks straight ahead, as if staring at whoever is looking. His expression resembles an angry or confused face.",
    "spanish": "Imagen dividida en dos cuadros. En la parte superior, un conejito blanco aparece frente a una computadora, mirando el monitor. Es bastante pequeño, sus ojos son marrones y sus orejas están caídas. El fondo es una pared gris. La parte inferior tiene una imagen similar. En este, el conejito mira al frente, como si mirara a quienquiera que esté mirando. Su expresión se parece a una cara enojada o confundida.",
    "german": "Bild in zwei Frames unterteilt. Ganz oben erscheint ein weißer Hase vor einem Computer und starrt auf den Monitor. Er ist ziemlich klein, seine Augen sind braun und seine Ohren hängen. Der Hintergrund ist eine graue Wand. Die Unterseite hat ein ähnliches Bild. In diesem schaut der Hase geradeaus, als würde er den Betrachter anstarren. Sein Ausdruck ähnelt einem wütenden oder verwirrten Gesicht."
  },
  {
    "id": "0182",
    "file": "https://i.imgur.com/56YllYN.jpg",
    "portuguese": "Uma pessoa deitada em uma banheira cheia, mostrando apenas as pernas. Próximo ao pé, um gato. Ele é grandinho, com a parte de baixo branca e a de cima laranja. A água bate em sua barriga e ele olha para algo do lado de fora da banheira. A foto possui uma legenda, que está escrito \"então isso aconteceu...\" em inglês.",
    "english": "A person lying in a full bathtub, showing only their legs. Next to the foot, a cat. It's big, with a white bottom and orange top. The water hits his belly and he looks at something outside the tub. The photo has a caption, which reads \"so this happened...",
    "spanish": "Una persona acostada en una bañera llena, mostrando solo las piernas. Junto al pie, un gato. Es grande, con un fondo blanco y una parte superior naranja. El agua golpea su vientre y mira algo fuera de la bañera. La foto tiene una leyenda que dice \"entonces esto sucedió...",
    "german": "Eine Person, die in einer vollen Badewanne liegt und nur ihre Beine zeigt. Neben dem Fuß eine Katze. Es ist groß, mit einer weißen Unterseite und einer orangefarbenen Oberseite. Das Wasser trifft seinen Bauch und er blickt auf etwas außerhalb der Wanne. Das Foto hat eine Bildunterschrift, die lautet: „Das ist also passiert …“"
  },
  {
    "id": "0183",
    "file": "https://i.imgur.com/hxzxceg.jpg",
    "portuguese": "Na imagem, um gatinho cinza deitado de barriga pra cima aparece em um sofá marrom. As suas patas dianteiras estão viradas de forma que a parte superior de seu corpo está virada para a vera. Ele exibe uma cara de satisfação e felicidade. Ao fundo, é possível ver o piso de cerâmicas marrom, uma parede branca e uma pequena parte de uma porta, também marrom.",
    "english": "In the image, a gray kitten lying on its back appears on a brown sofa. His front legs are turned so that his upper body is facing the vera. He wears a face of satisfaction and happiness. In the background, you can see the brown ceramic floor, a white wall and a small part of a door, also brown.",
    "spanish": "En la imagen, aparece un gatito gris acostado boca arriba sobre un sofá marrón. Sus patas delanteras están giradas para que la parte superior de su cuerpo mire hacia la vera. Lleva una cara de satisfacción y felicidad. Al fondo se puede ver el suelo de cerámica marrón, una pared blanca y una pequeña parte de una puerta, también marrón.",
    "german": "Auf dem Bild erscheint ein auf dem Rücken liegendes graues Kätzchen auf einem braunen Sofa. Seine Vorderbeine sind so gedreht, dass sein Oberkörper der Vera zugewandt ist. Er trägt ein Gesicht der Zufriedenheit und des Glücks. Im Hintergrund sieht man den braunen Keramikboden, eine weiße Wand und einen kleinen Teil einer Tür, ebenfalls braun."
  },
  {
    "id": "0184",
    "file": "https://i.imgur.com/wIydwv8.png",
    "portuguese": "Um gato bege em cima de uma cama. Ele é bem peludo e sua orelha e rosto são mais escuros, alaranjados. Está de pé, vindo da direita para a esquerda, e encara a câmera com os olhos dilatados. A cama está bagunçada e o fundo é uma parece cinza.",
    "english": "A beige cat on top of a bed. He is very hairy and his ear and face are darker, orange. He's standing, coming from right to left, and staring at the camera with dilated eyes. The bed is messy and the background is a gray look.",
    "spanish": "Un gato beige encima de una cama. Es muy peludo y su oreja y cara son más oscuras, anaranjadas. Está de pie, viniendo de derecha a izquierda y mirando a la cámara con los ojos dilatados. La cama está desordenada y el fondo tiene un aspecto gris.",
    "german": "Eine beige Katze auf einem Bett. Er ist sehr behaart und sein Ohr und sein Gesicht sind dunkler, orange. Er steht, kommt von rechts nach links und starrt mit geweiteten Augen in die Kamera. Das Bett ist unordentlich und der Hintergrund sieht grau aus."
  },
  {
    "id": "0185",
    "file": "https://i.imgur.com/VvfQzVV.jpg",
    "portuguese": "Um panfleto impresso. Na parte superior está escrito \"Cachorro perdido\". Na parte de baixo, uma lista de três itens, sendo 1. não late muito, 2. muito bem comportado e 3. gosta de Metallica. No centro, a foto do suposto cachorro: branco com um rabinho curto e um longo bico, de pé sobre duas patas. No entanto, não é um cachorro, e sim um pato.",
    "english": "A printed pamphlet. At the top it says \"Lost Dog\". At the bottom, a list of three items, being 1. doesn't bark a lot, 2. very well behaved and 3. likes Metallica. In the center, the photo of the supposed dog: white with a short tail and a long beak, standing on two legs. However, he is not a dog, but a duck.",
    "spanish": "Un folleto impreso. En la parte superior dice \"Perro Perdido\". En la parte inferior, una lista de tres elementos, siendo 1. no ladra mucho, 2. se porta muy bien y 3. le gusta Metallica. En el centro, la foto del supuesto perro: blanco con cola corta y pico largo, parado sobre dos patas. Sin embargo, no es un perro, sino un pato.",
    "german": "Eine gedruckte Broschüre. Ganz oben steht \"Lost Dog\". Unten eine Liste mit drei Punkten, nämlich 1. bellt nicht viel, 2. sehr brav und 3. mag Metallica. In der Mitte das Foto des vermeintlichen Hundes: weiß mit kurzem Schwanz und langem Schnabel, auf zwei Beinen stehend. Allerdings ist er kein Hund, sondern eine Ente."
  },
  {
    "id": "0186",
    "file": "https://i.imgur.com/SOeinhX.jpg",
    "portuguese": "Dois axolotes abraçadinhos. O da esquerda é preto e está com as patinhas abertas. O da direita é branco com as guelras rosas, e está encostado em um vidro. Estão dentro do que parece um aquário, e há flores artificialismo rosas ao fundo.",
    "english": "Two hugging axolotls. The one on the left is black and has its paws open. The one on the right is white with pink gills, and it's leaning against a glass. They are inside what looks like an aquarium, and there are artificial pink flowers in the background.",
    "spanish": "Dos ajolotes abrazados. El de la izquierda es negro y tiene las patas abiertas. El de la derecha es blanco con branquias rosadas y está apoyado contra un vidrio. Están dentro de lo que parece un acuario, y hay flores rosas artificiales en el fondo.",
    "german": "Zwei umarmende Axolotl. Der linke ist schwarz und hat die Pfoten geöffnet. Der rechte ist weiß mit rosa Kiemen und lehnt an einem Glas. Sie befinden sich in einem Aquarium, und im Hintergrund befinden sich künstliche rosa Blumen."
  },
  {
    "id": "0187",
    "file": "https://i.imgur.com/PlHl1U1.jpg",
    "portuguese": "Um filhote de girafa sentado em um chão de feno. A sua expressão é neutra e ele olha para a câmera com as orelhas erguidas. Ao fundo, é possível ver uma parede bege e uma preta.",
    "english": "A baby giraffe sitting on a hay floor. His expression is neutral and he looks at the camera with his ears pricked. In the background, you can see a beige and a black wall.",
    "spanish": "Una jirafa bebé sentada en un suelo de heno. Su expresión es neutra y mira a la cámara con las orejas erguidas. Al fondo, se puede ver una pared beige y otra negra.",
    "german": "Eine Babygiraffe, die auf einem Heuboden sitzt. Sein Gesichtsausdruck ist neutral und er blickt mit gespitzten Ohren in die Kamera. Im Hintergrund sieht man eine beige und eine schwarze Wand."
  },
  {
    "id": "0188",
    "file": "https://i.imgur.com/wAj64Zc.jpg",
    "portuguese": "Um gato de pelo bege e marrom sentado (literalmente, sentado apenas sobre as patas traseiras) em um chão de cerâmica clara. Ele usa uma coleira rosa e ao fundo é possível ver uma bacia prateada cheia de água e uma parede branca. A expressão dele é quase indecifrável, mas ele parece entediado.",
    "english": "A beige and brown fur cat sitting (literally, sitting only on its hind legs) on a light ceramic floor. He wears a pink collar and in the background you can see a silver basin full of water and a white wall. His expression is almost unreadable, but he looks bored.",
    "spanish": "Un gato de piel beige y marrón sentado (literalmente, sentado solo sobre sus patas traseras) en un piso de cerámica clara. Lleva un collar rosa y al fondo se puede ver una palangana plateada llena de agua y una pared blanca. Su expresión es casi ilegible, pero parece aburrido.",
    "german": "Eine beige-braune Fellkatze sitzt (buchstäblich nur auf den Hinterbeinen sitzend) auf einem hellen Keramikboden. Er trägt ein rosafarbenes Halsband und im Hintergrund sieht man ein silbernes Becken voller Wasser und eine weiße Wand. Sein Gesichtsausdruck ist fast unlesbar, aber er sieht gelangweilt aus."
  },
  {
    "id": "0189",
    "file": "https://i.imgur.com/M8BolcP.jpg",
    "portuguese": "Um gato branco de olhos verdes está sentado sobre uma manta cinza olhando diretamente para a câmera. A expressão dele é raivosa e é possível ver um prato branco com alface e um pouco de tomate cereja na sua frente. O ângulo da câmera é um pouco alto.",
    "english": "A white cat with green eyes is sitting on a gray blanket looking straight at the camera. His expression is angry and you can see a white plate with lettuce and some cherry tomatoes in front of him. The camera angle is a little high.",
    "spanish": "Un gato blanco con ojos verdes está sentado sobre una manta gris mirando directamente a la cámara. Su expresión es de enfado y se puede ver un plato blanco con lechuga y unos tomates cherry frente a él. El ángulo de la cámara es un poco alto.",
    "german": "Eine weiße Katze mit grünen Augen sitzt auf einer grauen Decke und blickt direkt in die Kamera. Sein Gesichtsausdruck ist wütend und man sieht einen weißen Teller mit Salat und ein paar Kirschtomaten vor sich. Der Kamerawinkel ist etwas hoch."
  },
  {
    "id": "0190",
    "file": "https://i.imgur.com/eAvkxPt.jpg",
    "portuguese": "Foto tirada de baixo onde um gato mostra apenas seu rosto. Ele é bege e encaram a câmera com seus olhos esverdeados bem abertos e uma expressão de curiosidade. Suas orelhas pontudas são bem pequenas e seu nariz possui umas manchinhas pretas. O fundo é um teto bege com um círculo.",
    "english": "Photo taken from below where a cat only shows its face. He is beige and they face the camera with their greenish eyes wide open and an expression of curiosity. His pointed ears are very small and his nose has black spots. The background is a beige ceiling with a circle.",
    "spanish": "Foto tomada desde abajo donde un gato solo muestra su rostro. Él es de color beige y mira a la cámara con sus ojos verdosos bien abiertos y una expresión de curiosidad. Sus orejas puntiagudas son muy pequeñas y su nariz tiene manchas negras. El fondo es un techo beige con un círculo.",
    "german": "Foto von unten, wo eine Katze nur ihr Gesicht zeigt. Er ist beige und sie blicken mit weit geöffneten grünlichen Augen und einem neugierigen Ausdruck in die Kamera. Seine spitzen Ohren sind sehr klein und seine Nase hat schwarze Flecken. Der Hintergrund ist eine beige Decke mit einem Kreis."
  },
  {
    "id": "0191",
    "file": "https://i.imgur.com/ZqcO4Xc.jpg",
    "portuguese": "Gato branco sentado de frente para a câmera. Sua cabeça é um pouco grande e seus olhos azuis levemente vesgos encaram a câmera. Ele usa uma fita vermelha no pescoço. O todo de sua cabeça é de um cinza bem clarinho.",
    "english": "White cat sitting facing the camera. His head is a little big and his blue eyes slightly cross-eyed stare at the camera. He wears a red ribbon around his neck. His whole head is a very light gray.",
    "spanish": "Gato blanco sentado frente a la cámara. Su cabeza es un poco grande y sus ojos azules ligeramente bizcos miran fijamente a la cámara. Lleva una cinta roja alrededor de su cuello. Toda su cabeza es de un gris muy claro.",
    "german": "Weiße Katze sitzt vor der Kamera. Sein Kopf ist etwas zu groß und seine blauen Augen starren leicht schielend in die Kamera. Um den Hals trägt er ein rotes Band. Sein ganzer Kopf ist sehr hellgrau."
  },
  {
    "id": "0192",
    "file": "https://i.imgur.com/9kmN54P.jpg",
    "portuguese": "Foto de um gato dentro de uma caixa retangular estreita e alta. Ela é branca, permitindo ser a silhueta do gato do lado de dentro. Ele possui a parte de baixo branca e as costas bege. Suas 4 patas estão encostadas na caixa. Na parte de cima dela, há um buraco feito para segurá-la, e é possível ver os grandes olhos do gato através dele. No topo, fora da caixa, também é possível ver as orelhas.",
    "english": "Photo of a cat inside a tall, narrow rectangular box. It is white, allowing it to be the silhouette of the cat inside. It has a white bottom and a beige back. Its 4 paws are leaning against the box. At the top of it, there is a hole made to hold it, and you can see the big eyes of the cat through it. At the top, outside the box, you can also see the ears.",
    "spanish": "Foto de un gato dentro de una caja rectangular alta y estrecha. Es de color blanco, lo que le permite ser la silueta del gato en su interior. Tiene un fondo blanco y un dorso beige. Sus 4 patas están apoyadas contra la caja. En la parte superior, hay un agujero hecho para sostenerlo, y puedes ver los grandes ojos del gato a través de él. En la parte superior, fuera de la caja, también se pueden ver las orejas.",
    "german": "Foto einer Katze in einer hohen, schmalen rechteckigen Kiste. Es ist weiß, wodurch es die Silhouette der Katze im Inneren darstellen kann. Es hat eine weiße Unterseite und eine beige Rückseite. Seine 4 Pfoten lehnen an der Kiste. Oben ist ein Loch, um es zu halten, und Sie können die großen Augen der Katze durch es sehen. Oben, außerhalb der Box, sieht man auch die Ohren."
  },
  {
    "id": "0193",
    "file": "https://i.imgur.com/zZPSnss.jpg",
    "portuguese": "Foto de um hamster laranja em cima de uma mesa, em frente a um prato com pedaços de torrada. Ao fundo, uma caneca branca desfocada.",
    "english": "Photo of an orange hamster on top of a table, in front of a plate with pieces of toast. In the background, a blurred white mug.",
    "spanish": "Foto de un hámster naranja encima de una mesa, frente a un plato con tostadas. En el fondo, una taza blanca borrosa.",
    "german": "Foto eines orangefarbenen Hamsters auf einem Tisch vor einem Teller mit Toaststücken. Im Hintergrund ein unscharfer weißer Becher."
  },
  {
    "id": "0194",
    "file": "https://i.imgur.com/DSVqNQn.jpg",
    "portuguese": "Foto de uma piscina com uma boia de jacaré. Em cima dela, um crocodilo descansa, tomando sol. Sua cabeça está deitada no rabo da boia e sua boca está aberta.",
    "english": "Photo of a swimming pool with an alligator float. On top of it, a crocodile rests, basking in the sun. Its head is lying on the buoy's tail and its mouth is open.",
    "spanish": "Foto de una piscina con un flotador de cocodrilo. Encima de él, descansa un cocodrilo, tomando el sol. Su cabeza descansa sobre la parte inferior del flotador y su boca está abierta.",
    "german": "Foto eines Schwimmbeckens mit Alligatorschwimmer. Darauf ruht ein Krokodil und sonnt sich in der Sonne. Sein Kopf liegt auf dem Schwanz der Boje und sein Maul ist offen."
  },
  {
    "id": "0195",
    "file": "https://i.imgur.com/4tSrE6G.jpg",
    "portuguese": "Foto de um gato branco da barriga para cima. Ele é gordinho e está deitado de lado, virado para a esquerda. Suas patinhas estão recolhidas próximo ao corpo, como os bracinhos de um t-rex, e seus nariz está encostado na parede branca, estando levemente amassado. O fundo é uma cama com um lençol colorido em verde, branco, azul e rosa.",
    "english": "Photo of a white cat from the belly up. He is chubby and is lying on his side, facing left. His paws are tucked close to his body, like the arms of a t-rex, and his nose is leaning against the white wall, being slightly dented. The background is a bed with a sheet colored in green, white, blue and pink.",
    "spanish": "Foto de un gato blanco de panza arriba. Es gordito y está acostado de lado, mirando hacia la izquierda. Sus patas están pegadas a su cuerpo, como los brazos de un t-rex, y su nariz está apoyada contra la pared blanca, ligeramente abollada. El fondo es una cama con una sábana de color verde, blanco, azul y rosa.",
    "german": "Foto einer weißen Katze vom Bauch aufwärts. Er ist pummelig und liegt auf der Seite mit dem Gesicht nach links. Seine Pfoten sind eng an seinen Körper gezogen wie die Arme eines T-Rex, und seine Nase lehnt an der weißen Wand und ist leicht verbeult. Der Hintergrund ist ein Bett mit einem in Grün, Weiß, Blau und Rosa gefärbten Laken."
  },
  {
    "id": "0196",
    "file": "https://i.imgur.com/0Lm9L9E.jpg",
    "portuguese": "Foto de dois gatos, um de frente para o outro. O da esquerda é siamês, tendo sua pelagem rala de um bege bem claro e suas patas e focinho marrons. Ele estende sua cabeça para a direita, mostrando apenas a parte de baixo da mesa. Está cheirando o fucinho do outro, que é de um bege acinzentado. Ele é mais gordo e está deitado por cima de sua pata, retribuindo o cheiro que está recebendo. À frente deles há uma grade de ferro.",
    "english": "Photo of two cats, facing each other. The one on the left is Siamese, with a light beige thin coat and brown paws and muzzle. He extends his head to the right, showing only the underside of the table. He's sniffing the other's muzzle, which is a greyish beige. He's fatter and is lying on top of his paw, returning the scent he's getting. Ahead of them is an iron grate.",
    "spanish": "Foto de dos gatos, uno frente al otro. El de la izquierda es siamés, con un pelaje fino de color beige claro y patas y hocico marrones. Extiende la cabeza hacia la derecha, mostrando solo la parte inferior de la mesa. Está olfateando el hocico del otro, que es de un beige grisáceo. Está más gordo y está acostado sobre su pata, devolviendo el olor que está recibiendo. Delante de ellos hay una reja de hierro.",
    "german": "Foto von zwei Katzen, die sich gegenüberstehen. Der linke ist Siam, mit hellbeigem, dünnem Fell und braunen Pfoten und Schnauze. Er streckt seinen Kopf nach rechts und zeigt nur die Unterseite des Tisches. Er schnüffelt an der graubeigen Schnauze des anderen. Er ist dicker und liegt auf seiner Pfote und gibt den Duft zurück, den er bekommt. Vor ihnen ist ein Eisengitter."
  },
  {
    "id": "0197",
    "file": "https://i.imgur.com/5VIV8OI.jpg",
    "portuguese": "Gata preta bastante peluda dentro de uma sacola. Seus olhos são amarelos e ela está enrolada, olhando para a direita. A sacola é marrom claro e de papel. Uma pessoa de pele branca segura ambas as alças da sacola com as mãos, deixando-a aberta. O fundo é um chão cinza e uma parede levemente desgastada.",
    "english": "Pretty furry black cat inside a bag. Her eyes are yellow and she is curled up, looking to the right. The bag is light brown and paper. A white-skinned person holds both handles of the bag with his hands, leaving it open. The background is a gray floor and a slightly worn wall.",
    "spanish": "Bonito gato negro peludo dentro de una bolsa. Sus ojos son amarillos y está acurrucada, mirando hacia la derecha. La bolsa es de color marrón claro y papel. Una persona de piel blanca sujeta con las manos las dos asas de la bolsa, dejándola abierta. El fondo es un piso gris y una pared ligeramente desgastada.",
    "german": "Ziemlich pelzige schwarze Katze in einer Tasche. Ihre Augen sind gelb und sie ist zusammengerollt und schaut nach rechts. Die Tasche ist hellbraun und aus Papier. Eine weißhäutige Person hält beide Griffe der Tasche mit den Händen und lässt sie offen. Der Hintergrund ist ein grauer Boden und eine leicht abgenutzte Wand."
  },
  {
    "id": "0198",
    "file": "https://i.imgur.com/IV4hrtw.jpg",
    "portuguese": "Foto de um cachorro em um gramado. Ele está sentado, coberto por um lençol branco que mostra apenas seus olhos e fucinho. É bege, e segura em sua boca um balde laranja com uma abóbora desenhada.",
    "english": "Photo of a dog on a lawn. He is seated, covered by a white sheet that only shows his eyes and snout. It's beige, and it holds in its mouth an orange bucket with a pumpkin on it.",
    "spanish": "Foto de un perro en un césped. Está sentado, cubierto por una sábana blanca de la que sólo se ven los ojos y el hocico. Es de color beige y tiene en la boca un balde naranja con una calabaza dibujada.",
    "german": "Foto eines Hundes auf einer Wiese. Er sitzt, bedeckt von einem weißen Laken, das nur seine Augen und seine Schnauze zeigt. Es ist beige und hält in seinem Maul einen orangefarbenen Eimer mit einem Kürbis darauf."
  },
  {
    "id": "0199",
    "file": "https://i.imgur.com/VEuk6fp.jpg",
    "portuguese": "Um patinho amarelo e de bico rosa sentado, com a cabeça apoiada sobre si mesmo. No topo de sua cabeça há uma folha verde cortada em forma de coração e seus olhos estão fechados em uma expressão sonolenta. Ao fundo, vemos um cenário muito escuro e desfocado.",
    "english": "A yellow duckling with a pink beak is sitting with its head resting on itself. On top of his head is a green leaf cut into a heart shape and his eyes are closed in a sleepy expression. In the background, we see a very dark and blurred scene.",
    "spanish": "Un patito amarillo con un pico rosado está sentado con la cabeza apoyada sobre sí mismo. En la parte superior de su cabeza hay una hoja verde cortada en forma de corazón y sus ojos están cerrados con una expresión somnolienta. Al fondo, vemos una escena muy oscura y borrosa.",
    "german": "Ein gelbes Entlein mit einem rosa Schnabel sitzt mit auf sich selbst ruhendem Kopf. Auf seinem Kopf befindet sich ein grünes Blatt, das in Herzform geschnitten ist, und seine Augen sind in einem schläfrigen Ausdruck geschlossen. Im Hintergrund sehen wir eine sehr dunkle und unscharfe Szene."
  },
  {
    "id": "0200",
    "file": "https://i.imgur.com/zn9L5GX.jpg",
    "portuguese": "Um gatinho filhote de pé em duas patas. Ele é laranja, com a barriga branca. Seus olhos escuros encaram a câmera e seus bracinhos estão junto ao seu corpo. Em cima, em inglês, está escrito \"texto de cima\" e embaixo está escrito \"texto de baixo\".",
    "english": "A kitten standing on two paws. He is orange, with a white belly. His dark eyes stare at the camera and his little arms are close to his body. Above, in English, it says \"text from above\" and below it is written \"text from below\".",
    "spanish": "Un gatito parado sobre dos patas. Es de color naranja, con el vientre blanco. Sus ojos oscuros miran fijamente a la cámara y sus bracitos están pegados a su cuerpo. Arriba, en inglés, dice \"text from above\" y abajo está escrito \"text from below\".",
    "german": "Ein Kätzchen, das auf zwei Pfoten steht. Er ist orange, mit einem weißen Bauch. Seine dunklen Augen starren in die Kamera und seine kleinen Ärmchen sind eng an seinem Körper. Oben steht auf Englisch „Text von oben“ und darunter „Text von unten“."
  },
  {
    "id": "0201",
    "file": "https://i.imgur.com/oFxGJVx.jpg",
    "portuguese": "Foto de um filhote de pastor alemão olhando para frente. Ele é bem pequeno, tem pelos castanhos na maior parte do corpo, nas costas o pelo é mais escuro, na cor preta, e nas patinhas é mais claro, igual um caramelo. Seu fucinho também é preto. O fundo é um quintal, com alguns vasos de planta.",
    "english": "Photo of a German Shepherd puppy looking straight ahead. He is very small, has brown fur on most of his body, on his back the fur is darker, in black, and on his paws it is lighter, like a caramel. His muzzle is also black. The back is a backyard, with some potted plants.",
    "spanish": "Foto de un cachorro de pastor alemán mirando al frente. Es muy pequeño, tiene pelaje marrón en la mayor parte de su cuerpo, en su espalda el pelaje es más oscuro, de color negro, y en sus patas es más claro, como un caramelo. Su hocico también es negro. La parte de atrás es un patio trasero, con algunas plantas en macetas.",
    "german": "Foto eines Schäferhundwelpen, der geradeaus schaut. Er ist sehr klein, hat auf dem größten Teil seines Körpers braunes Fell, auf dem Rücken ist das Fell dunkler, in Schwarz, und auf seinen Pfoten ist es heller, wie Karamell. Seine Schnauze ist ebenfalls schwarz. Die Rückseite ist ein Hinterhof mit einigen Topfpflanzen."
  },
  {
    "id": "0202",
    "file": "https://i.imgur.com/qTZ71Zv.jpg",
    "portuguese": "Foto de um gato laranja com um gorro de natal. O gorro é bem maior do que a cabeça dele, vermelho com as bordas brancas. Ele usa também uma coleira com um sininho e um óculos de sol branco. O fundo mostra algumas árvores desfocadas.",
    "english": "Photo of an orange cat with a Christmas hat. The hat is much bigger than his head, red with white edges. He also wears a collar with a bell and white sunglasses. The background shows some blurred trees.",
    "spanish": "Foto de un gato naranja con gorro navideño. El sombrero es mucho más grande que su cabeza, rojo con bordes blancos. También lleva un collar con cascabel y gafas de sol blancas. El fondo muestra algunos árboles borrosos.",
    "german": "Foto einer orange Katze mit einem Weihnachtshut. Der Hut ist viel größer als sein Kopf, rot mit weißen Rändern. Außerdem trägt er ein Halsband mit Glocke und eine weiße Sonnenbrille. Der Hintergrund zeigt einige unscharfe Bäume."
  },
  {
    "id": "0203",
    "file": "https://i.imgur.com/epjQ39q.jpg",
    "portuguese": "Foto de um gato cinza listrado em uma árvore de natal. Ele está no meio dos galhos, com seus olhos azuis dilatados olhando para além da câmera. A árvore está enfeitada com luzes pisca-pisca e bolas pretas e pratas.",
    "english": "Photo of a gray striped cat on a Christmas tree. He's in the middle of the branches, his blue eyes dilated looking past the camera. The tree is decorated with twinkling lights and black and silver balls.",
    "spanish": "Foto de un gato rayado gris en un árbol de Navidad. Está en medio de las ramas, sus ojos azules dilatados mirando más allá de la cámara. El árbol está decorado con luces parpadeantes y bolas negras y plateadas.",
    "german": "Foto einer grauen gestreiften Katze auf einem Weihnachtsbaum. Er steht mitten im Geäst, seine blauen Augen sind weit aufgerissen und blicken an der Kamera vorbei. Der Baum ist mit funkelnden Lichtern und schwarzen und silbernen Kugeln geschmückt."
  },
  {
    "id": "0204",
    "file": "https://i.imgur.com/ZL2oh4s.jpg",
    "portuguese": "Foto de um ouriço na areia, sentado. Sua barriga é branca e está virada para a câmera. Seus braços e pernas estão abertos e seu rostinho olha para nós. Ao fundo, o mar e o céu de uma mesma tonalidade.",
    "english": "Photo of a hedgehog in the sand, sitting. His belly is white and is facing the camera. Her arms and legs are open and her little face looks at us. In the background, the sea and the sky of the same hue.",
    "spanish": "Foto de un erizo en la arena, sentado. Su vientre es blanco y está frente a la cámara. Sus brazos y piernas están abiertos y su carita nos mira. Al fondo, el mar y el cielo de la misma tonalidad.",
    "german": "Foto eines sitzenden Igels im Sand. Sein Bauch ist weiß und steht vor der Kamera. Ihre Arme und Beine sind offen und ihr kleines Gesicht sieht uns an. Im Hintergrund das Meer und der Himmel im gleichen Farbton."
  },
  {
    "id": "0205",
    "file": "https://i.imgur.com/hyAPDM9.jpg",
    "portuguese": "Foto de uma calopsita no braço de uma pessoa. Ela é gorda, com as penas inferiores brancas e a cabeça amarela. Olha para a câmera e a posição de suas asas se assemelham a alguém pondo o braço na cintura, trazendo uma pose desafiadora. O fundo é uma parede desfocada.",
    "english": "Photo of a cockatiel on a person's arm. She is plump, with white lower feathers and a yellow head. She looks at the camera and the position of her wings resembles someone putting their arm around their waist, bringing a defiant pose. The background is a blurred wall.",
    "spanish": "Foto de una cacatúa en el brazo de una persona. Es regordeta, con las plumas inferiores blancas y la cabeza amarilla. Ella mira a la cámara y la posición de sus alas se asemeja a alguien que pone su brazo alrededor de su cintura, trayendo una pose desafiante. El fondo es una pared borrosa.",
    "german": "Foto eines Nymphensittichs auf dem Arm einer Person. Sie ist rundlich, mit weißen unteren Federn und einem gelben Kopf. Sie schaut in die Kamera und die Position ihrer Flügel ähnelt einer Person, die ihren Arm um ihre Taille legt und eine trotzige Pose einnimmt. Der Hintergrund ist eine unscharfe Wand."
  },
  {
    "id": "0206",
    "file": "https://i.imgur.com/Rbhkc7r.jpg",
    "portuguese": "Foto de um gato cinza deitado em um colchão. Ele é tigrado, com listras pretas, usa um óculos de sol rosa que deixa apenas um de seus olhos verde-amarelados à mostra e possui diversas notas de dinheiro sobre si, em sua cabeça e corpo.",
    "english": "Photo of a gray cat lying on a mattress. He is brindle, with black stripes, wears pink sunglasses that show only one of his yellow-green eyes, and has several bills of money on his head and body.",
    "spanish": "Foto de un gato gris acostado en un colchón. Es atigrado, con rayas negras, usa anteojos de sol rosados ​​que muestran solo uno de sus ojos amarillo verdosos y tiene varios billetes de dinero en la cabeza y el cuerpo.",
    "german": "Foto einer grauen Katze, die auf einer Matratze liegt. Er ist gestromt, mit schwarzen Streifen, trägt eine rosa Sonnenbrille, die nur eines seiner gelbgrünen Augen zeigt, und hat mehrere Geldscheine auf Kopf und Körper."
  },
  {
    "id": "0207",
    "file": "https://i.imgur.com/woP5PgX.jpg",
    "portuguese": "Foto de um gato preto que aparece do busto para cima, virado para a esquerda. Sua boca está aberta, como se estivesse preste a atacar, e mostra 4 presas, duas em cima e duas embaixo. Ele usa uma capa de vampiro preta e vermelha. O fundo mostra uma árvore e algumas folhas.",
    "english": "Photo of a black cat that appears from the bust up, facing left. Its mouth is open, as if about to attack, and shows 4 fangs, two above and two below. He wears a black and red vampire cape. The background shows a tree and some leaves.",
    "spanish": "Foto de un gato negro que aparece de busto hacia arriba, mirando hacia la izquierda. Su boca está abierta, como si fuera a atacar, y muestra 4 colmillos, dos arriba y dos abajo. Lleva una capa de vampiro negra y roja. El fondo muestra un árbol y algunas hojas.",
    "german": "Foto einer schwarzen Katze, die von oben nach links zeigt. Sein Maul ist offen, als wolle es angreifen, und zeigt 4 Reißzähne, zwei oben und zwei unten. Er trägt einen schwarz-roten Vampirumhang. Der Hintergrund zeigt einen Baum und einige Blätter."
  },
  {
    "id": "0208",
    "file": "https://i.imgur.com/0R4dsDE.jpg",
    "portuguese": "Uma ovelha de pé em um gramado. Ela é branca, está levemente virada para a direita e olha para a câmera com seus olhinhos pretos. Usa um casaquinho azul com detalhes em vermelho e amarelo e uma touca combinando com um pompom na ponta.",
    "english": "A sheep standing on a lawn. She is white, is turned slightly to the right and looks at the camera with her little black eyes. She wears a blue cardigan with red and yellow accents and a matching bonnet with a pompom at the end.",
    "spanish": "Una oveja de pie sobre un césped. Es blanca, está ligeramente girada hacia la derecha y mira a la cámara con sus ojitos negros. Lleva un cárdigan azul con detalles en rojo y amarillo y un gorro a juego con un pompón al final.",
    "german": "Ein Schaf, das auf einer Wiese steht. Sie ist weiß, leicht nach rechts gedreht und schaut mit ihren kleinen schwarzen Augen in die Kamera. Sie trägt eine blaue Strickjacke mit roten und gelben Akzenten und eine passende Haube mit Bommel am Ende."
  },
  {
    "id": "0209",
    "file": "https://i.imgur.com/atQfpOB.jpg",
    "portuguese": "Ouriço deitado em um sofá. Ele está encostado no encontro do braço do sofá com o encosto, bem encolhidinho e com uma carinha um pouco triste.",
    "english": "Hedgehog lying on a sofa. He's leaning against the arm of the sofa and the backrest, curled up tight and with a slightly sad face.",
    "spanish": "Erizo acostado en un sofá. Está apoyado en el brazo del sofá y el respaldo, muy acurrucado y con una cara un poco triste.",
    "german": "Igel liegt auf einem Sofa. Er lehnt an der Armlehne des Sofas und der Rückenlehne, eng zusammengerollt und mit einem leicht traurigen Gesicht."
  },
  {
    "id": "0210",
    "file": "https://i.imgur.com/iJlwZM8.jpg",
    "portuguese": "Cachorrinho branco sentado no banco dianteiro de um carro, ele é tão pequeno que mal alcança o volante. Possui o pelo ralo e olhos pretos arregalados encarando a câmera, além de usar uma blusa preta com um desenho de uma coroa. Suas patas dianteiras estão no volante do carro.",
    "english": "Little white dog sitting in the front seat of a car, he is so small he can barely reach the steering wheel. He has thin fur and wide black eyes staring at the camera, in addition to wearing a black blouse with a design of a crown. His front paws are on the steering wheel of the car.",
    "spanish": "Perrito blanco sentado en el asiento delantero de un coche, es tan pequeño que apenas puede alcanzar el volante. Tiene pelaje fino y grandes ojos negros mirando fijamente a la cámara, además de usar una blusa negra con un diseño de corona. Sus patas delanteras están en el volante del coche.",
    "german": "Kleiner weißer Hund, der auf dem Vordersitz eines Autos sitzt, er ist so klein, dass er kaum das Lenkrad erreichen kann. Er hat dünnes Fell und große schwarze Augen, die in die Kamera starren, außerdem trägt er eine schwarze Bluse mit dem Design einer Krone. Seine Vorderpfoten sind auf dem Lenkrad des Autos."
  },
  {
    "id": "0211",
    "file": "https://i.imgur.com/pY6Jvsg.png",
    "portuguese": "Foto de um gato bem peludo cinza com a barriga e fucinho brancos. Ele está deitado em uma coberta azul e encostado em uma parede branca, e à sua frente há o livro dO Manifesto Comunista, por Karl Marx e Friedrich Engels. Seus olhos claros encaram a página do livro com atenção.",
    "english": "Photo of a very furry gray cat with a white belly and muzzle. He is lying on a blue blanket and leaning against a white wall, and in front of him is the book The Communist Manifesto, by Karl Marx and Friedrich Engels. His pale eyes stare at the page of the book intently.",
    "spanish": "Foto de un gato gris muy peludo con el vientre y el hocico blancos. Está acostado sobre una manta azul y apoyado contra una pared blanca, y frente a él está el libro El Manifiesto Comunista, de Karl Marx y Friedrich Engels. Sus ojos claros miran fijamente la página del libro.",
    "german": "Foto einer sehr haarigen grauen Katze mit weißem Bauch und weißer Schnauze. Er liegt auf einer blauen Decke und lehnt an einer weißen Wand, vor ihm liegt das Buch Das Kommunistische Manifest von Karl Marx und Friedrich Engels. Seine blassen Augen starren aufmerksam auf die Seite des Buches."
  },
  {
    "id": "0212",
    "file": "https://i.imgur.com/S5DL0rz.jpg",
    "portuguese": "Foto de um gato laranja filhote sentado. Seus pelos são arrepiados, seus olhos são claros e ele tem cara de sono. Há um arco-íris nele e o título \"gay\" no centro da imagem.",
    "english": "Photo of a sitting orange kitten cat. His hair stands on end, his eyes are clear and he looks sleepy. There is a rainbow on it and the title \"gay\" in the center of the image.",
    "spanish": "Foto de un gatito naranja sentado. Su pelaje es erizado, sus ojos son claros y parece somnoliento. Tiene un arcoíris y el título \"gay\" en el centro de la imagen.",
    "german": "Foto einer sitzenden orange Kätzchenkatze. Sein Haar steht zu Berge, seine Augen sind klar und er sieht müde aus. Darauf befindet sich ein Regenbogen und in der Mitte des Bildes der Titel „gay“."
  },
  {
    "id": "0213",
    "file": "https://i.imgur.com/ifNh8RO.jpg",
    "portuguese": "Foto de um guaxinim em cima de um patinete rosa choque. O bicho é gordo, com os pelos cinzas, e está de pé no veículo, segurando no guidão e olhando para a direita. O fundo é um corredor.",
    "english": "Photo of a raccoon on top of a hot pink scooter. The animal is fat, with gray fur, and is standing in the vehicle, holding the handlebars and looking to the right. The background is a hallway.",
    "spanish": "Foto de un mapache en la parte superior de un scooter de color rosa fuerte. El animal es gordo, de pelaje gris, y está parado en el vehículo, agarrado del manubrio y mirando hacia la derecha. El fondo es un pasillo.",
    "german": "Foto eines Waschbären auf einem Pinkroller. Das Tier ist dick, mit grauem Fell, steht im Fahrzeug, hält den Lenker und schaut nach rechts. Der Hintergrund ist ein Flur."
  },
  {
    "id": "0214",
    "file": "https://i.imgur.com/pLaEX5M.png",
    "portuguese": "Foto de um gato branco gordo com manchas marrons e beges. Ele está de pé, andando e levemente virado para a esquerda, e segura com a boca uma haste com a bandeira lésbica, que consiste de cinco faixas horizontais nas cores vermelho, laranja, branco, rosa claro e rosa escuro, respectivamente. O fundo é um tapete.",
    "english": "Photo of a fat white cat with brown and beige spots. He is standing, walking and slightly turned to the left, and holds in his mouth a pole with the lesbian flag, which consists of five horizontal stripes in red, orange, white, light pink and dark pink, respectively. The background is a rug.",
    "spanish": "Foto de un gato blanco y gordo con manchas marrones y beige. Está de pie, caminando y ligeramente girado hacia la izquierda, y sostiene en su boca un asta con la bandera lesbiana, que consta de cinco franjas horizontales en rojo, naranja, blanco, rosa claro y rosa oscuro, respectivamente. El fondo es una alfombra.",
    "german": "Foto einer dicken weißen Katze mit braunen und beigen Flecken. Er steht, geht und ist leicht nach links gedreht und hält im Mund eine Stange mit der Lesbenflagge, die aus fünf horizontalen Streifen in Rot, Orange, Weiß, Hellrosa und Dunkelrosa besteht. Der Hintergrund ist ein Teppich."
  },
  {
    "id": "0215",
    "file": "https://i.imgur.com/ZaGDBPt.jpg",
    "portuguese": "Foto de um patinho em cima de várias vitória régias. Ele é amarelo e bem pequeno, com as penas arrepiadas, e está virado para a direita. Há uma florzinha branca à sua frente e as plantas estão molhadas.",
    "english": "Photo of a duckling on top of several water lilies. It is yellow and very small, with ruffled feathers, and it faces to the right. There is a little white flower in front of you and the plants are wet.",
    "spanish": "Foto de un patito encima de varios nenúfares. Es amarillo y muy pequeño, con el plumaje erizado, y mira hacia la derecha. Hay una pequeña flor blanca frente a el y las plantas están mojadas.",
    "german": "Foto eines Entleins auf einigen Seerosen. Es ist gelb und sehr klein, mit zerzausten Federn, und es zeigt nach rechts. Vor dir steht eine kleine weiße Blume und die Pflanzen sind nass."
  },
  {
    "id": "0216",
    "file": "https://i.imgur.com/EZbX6qC.jpg",
    "portuguese": "Foto de uma cabrinha branca com as patas marrons. Ela está de frente para a câmera e usa um agasalho laranja com gola alta. O fundo é uma parede branca e feno.",
    "english": "Photo of a white goat with brown paws. She is facing the camera and is wearing an orange sweatshirt with a high collar. The background is a white wall and hay.",
    "spanish": "Foto de una cabra blanca con patas marrones. Está frente a la cámara y lleva un saco. naranja con cuello alto. El fondo es una pared blanca y heno.",
    "german": "Foto einer weißen Ziege mit braunen Pfoten. Sie steht vor der Kamera und trägt ein orangefarbenes Sweatshirt mit hohem Kragen. Der Hintergrund ist eine weiße Wand und Heu."
  },
  {
    "id": "0217",
    "file": "https://i.imgur.com/DTeoYdf.jpg",
    "portuguese": "Foto de um cachorro branco com manchas marrons. Ele olha para o alto, para a câmera, e balança o rabo bem rápido, sendo possível ver apenas o reflexo do rabo como um leque. O fundo é um chão preto.",
    "english": "Photo of a white dog with brown spots. He looks up at the camera and wags his tail very quickly, with only the reflection of the tail visible as a fan. The background is a black floor.",
    "spanish": "Foto de un perro blanco con manchas marrones. Mira hacia la cámara y mueve la cola muy rápidamente, con solo el reflejo de la cola visible como un abanico. El fondo es un suelo negro.",
    "german": "Foto eines weißen Hundes mit braunen Flecken. Er schaut in die Kamera und wedelt sehr schnell mit seinem Schwanz, wobei nur die Spiegelung des Schwanzes als Fächer sichtbar ist. Der Hintergrund ist ein schwarzer Boden."
  },
  {
    "id": "0218",
    "file": "https://i.imgur.com/E7KC9h7.png",
    "portuguese": "Foto de dois gatinhos um ao lado do outro. O da esquerda é laranja, e está de frente para a câmera com os olhos fechados e a cabeça levemente inclinada para a esquerda. O da direita é branco na barriga, pescoço e focinho/nariz e meio marrom na parte superior e usa uma coleira vermelha. Ele morde a bochecha do outro gato, sem exercer força. O fundo é uma parede e uma bolsa preta.",
    "english": "Photo of two kittens next to each other. The one on the left is orange, and is facing the camera with eyes closed and head tilted slightly to the left. The one on the right is white on the belly, neck and snout/nose and half brown on top and wears a red collar. He bites the other cat's cheek, not exerting force. The background is a wall and a black bag.",
    "spanish": "Foto de dos gatitos uno al lado del otro. El de la izquierda es naranja y mira a la cámara con los ojos cerrados y la cabeza ligeramente inclinada hacia la izquierda. El de la derecha es blanco en el vientre, el cuello y el hocico/nariz y medio marrón en la parte superior y lleva un collar rojo. Muerde la mejilla del otro gato, sin ejercer fuerza. El fondo es una pared y una bolsa negra.",
    "german": "Foto von zwei Kätzchen nebeneinander. Der linke ist orange und blickt mit geschlossenen Augen und leicht nach links geneigtem Kopf in die Kamera. Der rechte ist an Bauch, Hals und Schnauze/Nase weiß und oben halbbraun und trägt ein rotes Halsband. Er beißt der anderen Katze in die Wange, ohne Gewalt anzuwenden. Der Hintergrund ist eine Wand und eine schwarze Tasche."
  },
  {
    "id": "0219",
    "file": "https://i.imgur.com/7fou7SU.jpg",
    "portuguese": "Foto de duas mãos segurando um gatinho recém-nascido. Seus pelos são brancos e bem ralinhos, e não cobrem o topo de sua cabeça. Seus olhos estão fechados.",
    "english": "Photo of two hands holding a newborn kitten. His fur is white and very fine, and does not cover the top of his head. His eyes are closed.",
    "spanish": "Foto de dos manos sosteniendo un gatito recién nacido. Su pelaje es blanco y muy fino, y no cubre la parte superior de su cabeza. Sus ojos están cerrados.",
    "german": "Foto von zwei Händen, die ein neugeborenes Kätzchen halten. Sein Fell ist weiß und sehr fein und bedeckt nicht die Oberseite seines Kopfes. Seine Augen sind geschlossen."
  },
  {
    "id": "0220",
    "file": "https://i.imgur.com/hjHOBeL.png",
    "portuguese": "Foto de um gatinho filhote dentro de um copo de plástico. Ele é branco na parte de baixo e marrom e preto nas costas e topo da cabeça. Está dormindo, com os olhinhos fechados e a boca levemente aberta, e suas patinhas estão apoiadas na parede do copo transparente. O copo está em uma mesa de madeira, e atrás dele há outro gatinho dormindo, dessa vez todo preto com as patinhas brancas. O fundo mostra uma moto.",
    "english": "Photo of a kitten inside a plastic cup. It is white on the underside and brown and black on the back and top of the head. He is sleeping, with his eyes closed and his mouth slightly open, and his paws are leaning against the wall of the transparent glass. The cup is on a wooden table, and behind it is another sleeping kitten, this time all black with white paws. The background shows a motorcycle.",
    "spanish": "Foto de un gatito dentro de un vaso de plástico. Es blanco en la parte inferior y marrón y negro en la parte posterior y superior de la cabeza. Está durmiendo, con los ojos cerrados y la boca entreabierta, y sus patas están apoyadas contra la pared del cristal transparente. La taza está sobre una mesa de madera, y detrás hay otro gatito durmiendo, esta vez todo negro con patas blancas. El fondo muestra una motocicleta.",
    "german": "Foto eines Kätzchens in einem Plastikbecher. Es ist auf der Unterseite weiß und auf dem Hinter- und Oberkopf braun und schwarz. Er schläft mit geschlossenen Augen und leicht geöffnetem Mund, und seine Pfoten lehnen an der Wand des durchsichtigen Glases. Die Tasse steht auf einem Holztisch und dahinter ein weiteres schlafendes Kätzchen, diesmal ganz schwarz mit weißen Pfoten. Der Hintergrund zeigt ein Motorrad."
  },
  {
    "id": "0221",
    "file": "https://i.imgur.com/ZJrIwtE.jpg",
    "portuguese": "Foto de um filhote de gato cinza. Ele é gordinho e sua expressão é uma mistura de triste e bravo. Suas orelhas são arredondadas e seu rabo está para cima. Ele está num carpete branco em frente a uma janela.",
    "english": "Photo of a gray kitten. He is chubby and his expression is a mixture of sad and angry. Its ears are rounded and its tail is up. He's on a white carpet in front of a window.",
    "spanish": "Foto de un gatito gris. Es gordito y su expresión es una mezcla de tristeza y enfado. Sus orejas son redondeadas y su cola está hacia arriba. Está sobre una alfombra blanca frente a una ventana.",
    "german": "Foto eines grauen Kätzchens. Er ist mollig und sein Gesichtsausdruck ist eine Mischung aus traurig und wütend. Seine Ohren sind abgerundet und sein Schwanz ist nach oben gerichtet. Er liegt auf einem weißen Teppich vor einem Fenster."
  },
  {
    "id": "0222",
    "file": "https://i.imgur.com/RBYsE81.jpg",
    "portuguese": "Foto de uma capivara e um pato se encarando. Ela está na parte esquerda superior da imagem, virada para a direita, e aparece só da cintura para cima. É pequena, mas tem um olhar de superioridade. Ele está na parte direito inferior, quase de costas para a câmera. Parece acuado.",
    "english": "Photo of a capybara and a duck facing each other. She is in the upper left part of the image, facing right, and appears only from the waist up. She is petite but has a superior look. He's in the lower right, almost with his back to the camera. He looks cornered.",
    "spanish": "Foto de un carpincho y un pato uno frente al otro. Ella está en la parte superior izquierda de la imagen, mirando hacia la derecha, y aparece solo de cintura para arriba. Ella es pequeña pero tiene un aspecto superior. El está abajo a la derecha, casi de espaldas a la cámara. Se ve acorralado.",
    "german": "Foto eines Wasserschweins und einer Ente, die sich gegenüberstellen. Sie befindet sich im oberen linken Teil des Bildes, blickt nach rechts und erscheint nur von der Taille aufwärts. Sie ist zierlich, sieht aber überlegen aus. Er ist unten rechts, fast mit dem Rücken zur Kamera. Er sieht in die Enge getrieben aus."
  },
  {
    "id": "0223",
    "file": "https://i.imgur.com/BcLhoTy.jpg",
    "portuguese": "Foto de um ouriço em cima de uma coberta peludinha. Ele é pequenininho e está de frente para a câmera, segurando na coberta com uma das patinhas enquanto morde a ponta dela. O fundo é um sofá cinza.",
    "english": "Photo of a hedgehog on top of a furry blanket. He is tiny and stands for the camera, holding it in front with one of his paws as he bites the end of it. The background is a gray sofa.",
    "spanish": "Foto de un erizo encima de una manta peluda. Es pequeño y está en frente de la cámara, sosteniéndola al frente con una de sus patas mientras muerde el extremo. El fondo es un sofá gris.",
    "german": "Foto eines Igels auf einer pelzigen Decke. Er ist winzig und steht neben der Kamera, hält sie mit einer seiner Pfoten vor sich, während er auf das Ende beißt. Der Hintergrund ist ein graues Sofa."
  },
  {
    "id": "0224",
    "file": "https://i.imgur.com/aHDuW8F.png",
    "portuguese": "Foto tirada do alto de uma girafa muito perto da câmera, dando a sensação de que o focinho é maior do que deveria e o corpo menor. Ao fundo, outra girafa, de costas, além de um chão de areia e alguns arbustos.",
    "english": "Photo taken from the top of a giraffe very close to the camera, giving the feeling that the snout is bigger than it should be and the body smaller. In the background, another giraffe, on its back, in addition to a sandy floor and some bushes.",
    "spanish": "Foto tomada desde lo alto de una jirafa muy cerca de la cámara, dando la sensación de que el hocico es más grande de lo que debería ser y el cuerpo más pequeño. Al fondo, otra jirafa, de espaldas, además de un suelo de arena y unos arbustos.",
    "german": "Das Foto wurde von der Spitze einer Giraffe ganz nah an der Kamera aufgenommen und vermittelt das Gefühl, dass die Schnauze größer ist als sie sein sollte und der Körper kleiner. Im Hintergrund eine weitere Giraffe auf dem Rücken neben einem Sandboden und einigen Büschen."
  },
  {
    "id": "0225",
    "file": "https://i.imgur.com/hg5FLYA.png",
    "portuguese": "Foto de um tubarão branco tirada de um ângulo de baixo. Ele é branco embaixo e acinzentado de cima, e está parado no centro da imagem, olhando para a câmera e sorrindo. O fundo é o mar.",
    "english": "Photo of a great white shark taken from a low angle. He's white below and gray above, and he's standing in the center of the image, looking at the camera and zooming in. The background is the sea.",
    "spanish": "Foto de un gran tiburón blanco tomada desde un ángulo bajo. Es blanco abajo y gris arriba, está en el centro de la imagen, mirando a la cámara y sonriendo. El fondo es el mar.",
    "german": "Foto eines Weißen Hais aus einem niedrigen Winkel. Er ist unten weiß und oben grau, und er steht in der Mitte des Bildes, schaut in die Kamera und zoomt hinein. Der Hintergrund ist das Meer."
  },
  {
    "id": "0226",
    "file": "https://i.imgur.com/sIEKvUj.png",
    "portuguese": "Foto tirada de cima mostrando um gatinho laranja sentado, virado para a direita. Nas suas costas, uma mochilinha azul com uma estampa do mapa mundi.",
    "english": "Photo taken from above showing an orange kitten sitting, facing right. On his back, a blue backpack with a print of the world map.",
    "spanish": "Foto tomada desde arriba que muestra un gatito naranja sentado, mirando hacia la derecha. En su espalda, una mochila azul con un estampado del mapamundi.",
    "german": "Das Foto von oben zeigt ein sitzendes orangefarbenes Kätzchen, das nach rechts zeigt. Auf seinem Rücken ein blauer Rucksack mit einem Aufdruck der Weltkarte."
  },
  {
    "id": "0227",
    "file": "https://i.imgur.com/uficBAb.jpg",
    "portuguese": "Foto de uma mamãe capivara com sete filhotes. Eles estão deitados numa cama de feno. Capivaras são grandes roedores, inofensivos, de pelo marrom a aparência fofa.",
    "english": "Photo of a mother capybara with seven cubs. They are lying on a bed of hay. Capybaras are large, harmless rodents with brown fur and fluffy appearance.",
    "spanish": "Foto de una madre carpincho con siete cachorros. Están acostados en una cama de heno. Los capibaras son roedores grandes e inofensivos con pelaje marrón y apariencia esponjosa.",
    "german": "Foto einer Capybara-Mutter mit sieben Jungen. Sie liegen auf einem Bett aus Heu. Wasserschweine sind große, harmlose Nagetiere mit braunem Fell und flauschigem Aussehen."
  },
  {
    "id": "0228",
    "file": "https://i.imgur.com/TXq8bOg.png",
    "portuguese": "Foto de um gato laranja muito peludo com cara de bravo. Ele está numa caixinha azul ao lado de um prato alimentador rosa.",
    "english": "Photo of a very furry orange cat with an angry face. It's in a blue box next to a pink feeding plate.",
    "spanish": "Foto de un gato naranja muy peludo con cara de enfado. Está en una caja azul junto a un plato de alimentación rosa.",
    "german": "Foto einer sehr pelzigen orange Katze mit einem verärgerten Gesicht. Es ist in einer blauen Schachtel neben einem rosa Futterteller."
  },
  {
    "id": "0229",
    "file": "https://i.imgur.com/cVRYx5Z.png",
    "portuguese": "Foto de um filhote de gato branco e peludo. Ele faz cara de choro com seus olhos grandes. Ele está sentado num tecido roxo.",
    "english": "Photo of a furry white kitten. He makes a crying face with his big eyes. He's sitting on a purple cloth.",
    "spanish": "Foto de un gatito blanco peludo. Hace una cara de llanto con sus grandes ojos. Está sentado sobre un paño morado.",
    "german": "Foto eines pelzigen weißen Kätzchens. Er macht mit seinen großen Augen ein weinendes Gesicht. Er sitzt auf einem lila Tuch."
  },
  {
    "id": "0230",
    "file": "https://i.imgur.com/1YMyMnl.jpg",
    "portuguese": "Foto de um cão Corgi filhote deitado de barriga para cima num tapete felpudo cinza. Ele tem a boca aberta numa expressão feliz.",
    "english": "Photo of a puppy Corgi dog lying on its back on a gray shag rug. He has his mouth open in a happy expression.",
    "spanish": "Foto de un cachorro Corgi acostado boca arriba sobre una alfombra de pelo gris. Tiene la boca abierta en una expresión feliz.",
    "german": "Foto eines Corgi-Hündchens, das auf dem Rücken auf einem grauen Shag-Teppich liegt. Er hat seinen Mund in einem glücklichen Ausdruck geöffnet."
  },
  {
    "id": "0231",
    "file": "https://i.imgur.com/EaClQ2r.jpg",
    "portuguese": "Foto de um panda vermelho em cima de um tronco. Ele está com a boca aberta como num sorriso.",
    "english": "Photo of a red panda on top of a log. He has his mouth open as if in a smile.",
    "spanish": "Foto de un panda rojo encima de un tronco. Tiene la boca abierta como en una sonrisa.",
    "german": "Foto eines roten Pandas auf einem Baumstamm. Er hat den Mund offen wie zu einem Lächeln."
  },
  {
    "id": "0232",
    "file": "https://i.imgur.com/QXlhhUH.jpg",
    "portuguese": "Foto de um furão branco na neve. Ele está de pé olhando para a câmera numa expressão séria.",
    "english": "Photo of a white ferret in the snow. He is standing looking at the camera with a serious expression.",
    "spanish": "Foto de un hurón blanco en la nieve. Él está de pie mirando a la cámara con una expresión seria.",
    "german": "Foto eines weißen Frettchens im Schnee. Er steht da und blickt mit ernster Miene in die Kamera."
  },
  {
    "id": "0233",
    "file": "https://i.imgur.com/2jSjAgr.jpg",
    "portuguese": "Foto de um filhote de foca na neve. Ele tem o pelo cinza e branco, olhos grandes e pretos. Ele olha para a câmera serenamente.",
    "english": "Photo of a baby seal in the snow. He has gray and white fur, big black eyes. He looks at the camera serenely.",
    "spanish": "Foto de una cría de foca en la nieve. Tiene pelaje gris y blanco, grandes ojos negros. Mira a la cámara con serenidad.",
    "german": "Foto eines Robbenbabys im Schnee. Er hat grau-weißes Fell, große schwarze Augen. Er blickt gelassen in die Kamera."
  },
  {
    "id": "0234",
    "file": "https://i.imgur.com/Suqp1Mu.jpg",
    "portuguese": "Foto de uma lontra com as mão juntas perto da boca. Ela tem olhos marrons, pelo escuro e tem uma expressão triste.",
    "english": "Photo of an otter with its hands together near its mouth. She has brown eyes, dark fur and a sad expression.",
    "spanish": "Foto de una nutria con las manos juntas cerca de la boca. Ella tiene ojos marrones, pelaje oscuro y una expresión triste.",
    "german": "Foto eines Otters mit zusammengelegten Händen in der Nähe seines Mauls. Sie hat braune Augen, dunkles Fell und einen traurigen Ausdruck."
  },
  {
    "id": "0235",
    "file": "https://i.imgur.com/ehXWRT7.jpg",
    "portuguese": "Foto de uma raposa vermelha sentada num corrimão de madeira. Ela está com os olhos fechados e a boca aberta com a língua para fora. Ao fundo uma floresta.",
    "english": "Photo of a red fox sitting on a wooden banister. She has her eyes closed and her mouth open with her tongue sticking out. In the background a forest.",
    "spanish": "Foto de un zorro rojo sentado en una barandilla de madera. Tiene los ojos cerrados y la boca abierta con la lengua fuera. Al fondo un bosque.",
    "german": "Foto eines roten Fuchses, der auf einem hölzernen Geländer sitzt. Sie hat ihre Augen geschlossen und ihren Mund offen, wobei ihre Zunge herausragt. Im Hintergrund ein Wald."
  },
  {
    "id": "0236",
    "file": "https://i.imgur.com/LnjAXIT.jpg",
    "portuguese": "Foto de um guepardo bem de perto, como se ele estivesse tirando uma selfie. Ele tem o focinho preto, olhos amarelos e uma expressão de curiosidade.",
    "english": "Close-up photo of a cheetah, as if he was taking a selfie. He has a black muzzle, yellow eyes and a curious expression.",
    "spanish": "Foto de primer plano de un guepardo, como si se estuviera tomando una selfie. Tiene un hocico negro, ojos amarillos y una expresión curiosa.",
    "german": "Nahaufnahme eines Geparden, als würde er ein Selfie machen. Er hat eine schwarze Schnauze, gelbe Augen und einen neugierigen Ausdruck."
  },
  {
    "id": "0237",
    "file": "https://i.imgur.com/XM8mmJM.jpg",
    "portuguese": "Foto de um Quokka com uma folha na boca. Ele está de pé na areia e olha para a câmera feliz. Ao fundo uma floresta. O quokka, também conhecido como wallaby de cauda curta, é um pequeno macrópode do tamanho de um gato doméstico.",
    "english": "Photo of a Quokka with a leaf in its mouth. He is standing on the sand and looking at the camera happily. In the background a forest. The quokka, also known as the short-tailed wallaby, is a small macropod about the size of a house cat.",
    "spanish": "Foto de un Quokka con una hoja en la boca. Está parado en la arena y mirando felizmente a la cámara. Al fondo un bosque. El quokka, también conocido como canguro de cola corta, es un pequeño macrópodo del tamaño de un gato doméstico.",
    "german": "Foto eines Quokka mit einem Blatt im Maul. Er steht auf dem Sand und schaut glücklich in die Kamera. Im Hintergrund ein Wald. Das Quokka, auch kurzschwänziges Wallaby genannt, ist ein kleiner Makropode von der Größe einer Hauskatze."
  },
  {
    "id": "0238",
    "file": "https://i.imgur.com/9UMQCnl.png",
    "portuguese": "Foto de um guepardo filhote lambendo a boca. Ele olha para a direita com uma expressão curiosa.",
    "english": "Photo of a baby cheetah licking its mouth. He looks to the right with a curious expression.",
    "spanish": "Foto de un guepardo bebé lamiéndose la boca. Mira a la derecha con expresión curiosa.",
    "german": "Foto eines Babygeparden, der seinen Mund leckt. Er schaut mit einem neugierigen Ausdruck nach rechts."
  },
  {
    "id": "0239",
    "file": "https://i.imgur.com/Kk7cpJS.jpg",
    "portuguese": "Foto de um filhote de labrador ao vento. Ele está sentado na grama, próximo à uma praia, e está com os olhos fechados por causa do vento.",
    "english": "Photo of a labrador puppy in the wind. He's sitting on the grass, next to a beach, and his eyes are closed against the wind.",
    "spanish": "Foto de un cachorro labrador en el viento. Está sentado en la hierba, junto a una playa, y tiene los ojos cerrados contra el viento.",
    "german": "Foto eines Labrador-Welpen im Wind. Er sitzt im Gras, neben einem Strand, und seine Augen sind gegen den Wind geschlossen."
  },
  {
    "id": "0240",
    "file": "https://i.imgur.com/RkoCPUg.jpg",
    "portuguese": "Foto de uma lhama de pelo branco olhando para a câmera. Ela tem uma expressão feliz. Ao fundo uma fazenda.",
    "english": "Photo of a white fur llama looking at the camera. She has a happy expression. In the background a farm.",
    "spanish": "Foto de una llama de piel blanca mirando a la cámara. Ella tiene una expresión feliz. Al fondo una finca.",
    "german": "Foto eines weißen Pelzlamas, das die Kamera betrachtet. Sie hat einen glücklichen Ausdruck. Im Hintergrund ein Bauernhof."
  },
  {
    "id": "0241",
    "file": "https://i.imgur.com/v7tHjwA.jpg",
    "portuguese": "Foto de um filhote de urso polar na neve. Ele está sentado e tem as mãos juntas próximo da boca.",
    "english": "Photo of a polar bear cub in the snow. He is seated and has his hands together near his mouth.",
    "spanish": "Foto de un cachorro de oso polar en la nieve. Está sentado y tiene las manos juntas cerca de la boca.",
    "german": "Foto eines Eisbärjungen im Schnee. Er sitzt und hat seine Hände in der Nähe seines Mundes zusammengelegt."
  },
  {
    "id": "0242",
    "file": "https://i.imgur.com/yM1SJrB.jpg",
    "portuguese": "Foto de uma lontra de pé numa pedra com duas pedras pequenas nas mãos. Ele tem o pelo marrom no corpo e branco no peito. Ao fundo um rio.",
    "english": "Photo of an otter standing on a rock with two small rocks in its hands. He has brown fur on his body and white on his chest. In the background a river.",
    "spanish": "Foto de una nutria de pie sobre una roca con dos pequeñas rocas en sus manos. Tiene pelaje marrón en el cuerpo y blanco en el pecho. Al fondo un río.",
    "german": "Foto eines Otters, der auf einem Felsen mit zwei kleinen Steinen in seinen Händen steht. Er hat braunes Fell am Körper und weißes auf der Brust. Im Hintergrund ein Fluss."
  },
  {
    "id": "0243",
    "file": "https://i.imgur.com/uCj6WHt.jpg",
    "portuguese": "Foto de um filhote de pinguim na neve. Ele tem o pelo cinza e preto. Ele está com os olhos fechados. Mais pinguins ao fundo.",
    "english": "Photo of a penguin chick in the snow. He has gray and black fur. He has his eyes closed. More penguins in the background.",
    "spanish": "Foto de un polluelo de pingüino en la nieve. Tiene pelaje gris y negro. Tiene los ojos cerrados. Más pingüinos al fondo.",
    "german": "Foto eines Pinguinkükens im Schnee. Er hat graues und schwarzes Fell. Er hat seine Augen geschlossen. Weitere Pinguine im Hintergrund."
  },
  {
    "id": "0244",
    "file": "https://i.imgur.com/W8D24Yn.jpg",
    "portuguese": "Foto de cima de um cão husky sentado no asfalto olhando para  câmera. Ele tem o pelo preto e branco, focinho longo e uma expressão feliz.",
    "english": "Top shot of a husky dog sitting on the asphalt looking at camera. He has black and white fur, a long snout and a happy expression.",
    "spanish": "Captura superior de un perro husky sentado en el asfalto mirando a la cámara. Tiene pelaje blanco y negro, un hocico largo y una expresión feliz.",
    "german": "Obere Aufnahme eines heiseren Hundes, der auf dem Asphalt sitzt und die Kamera anschaut. Er hat schwarz-weißes Fell, eine lange Schnauze und einen fröhlichen Ausdruck."
  },
  {
    "id": "0245",
    "file": "https://i.imgur.com/IDeMPdt.jpg",
    "portuguese": "Foto de um gato laranja no colo de uma pessoa. Ele está um o lado direito do rosto amassado como se estivesse muito vento. Ao fundo ha casas.",
    "english": "Photo of an orange cat on a person's lap. He's got the right side of his face crumpled as if it's been too windy. In the background there are houses.",
    "spanish": "Foto de un gato naranja en el regazo de una persona. Tiene el lado derecho de la cara arrugado como si hubiera hecho demasiado viento. Al fondo hay casas.",
    "german": "Foto einer orangefarbenen Katze auf dem Schoß einer Person. Die rechte Gesichtshälfte ist zerknittert, als ob es zu windig gewesen wäre. Im Hintergrund sind Häuser."
  },
  {
    "id": "0246",
    "file": "https://i.imgur.com/OYL8weu.jpg",
    "portuguese": "Foto de um filhote de gato preto e branco sentado num degrau de escada com carpete cinza.",
    "english": "Photo of a black and white kitten sitting on a stair step with gray carpet.",
    "spanish": "Foto de un gatito blanco y negro sentado en un escalón con alfombra gris.",
    "german": "Foto eines schwarz-weißen Kätzchens, das auf einer Treppenstufe mit grauem Teppich sitzt."
  },
  {
    "id": "0247",
    "file": "https://i.imgur.com/OjRvTKR.jpg",
    "portuguese": "Foto de um gato branco sentado numa cama. Ele está sob uma luz roxa e tem uma expressão de susto.",
    "english": "Photo of a white cat sitting on a bed. He is under a purple light and has a startled expression.",
    "spanish": "Foto de un gato blanco sentado en una cama. Está bajo una luz violeta y tiene una expresión de sorpresa.",
    "german": "Foto einer weißen Katze, die auf einem Bett sitzt. Er steht unter einem violetten Licht und hat einen erschrockenen Ausdruck."
  },
  {
    "id": "0248",
    "file": "https://i.imgur.com/n6OlWKK.jpg",
    "portuguese": "Foto de um cão Lulu da pomerânia branco. Ele tem seu pelo cortado arredondado que o deixa parecendo um ovo. Ele está com a boca aberta e parece feliz.",
    "english": "Photo of a white Pomeranian dog Lulu. He has a rounded cut coat that makes him look like an egg. He has his mouth open and looks happy.",
    "spanish": "Foto de un perro Pomerania blanco. Tiene un pelaje de corte redondeado que lo hace parecer un huevo. Tiene la boca abierta y se ve feliz.",
    "german": "Foto eines weißen pommerschen Hundes Lulu. Er hat ein rund geschnittenes Fell, das ihn wie ein Ei aussehen lässt. Er hat seinen Mund offen und sieht glücklich aus."
  },
  {
    "id": "0249",
    "file": "https://i.imgur.com/yXxeHs9.png",
    "portuguese": "Foto de perto de um cão Husky. Seu focinho e pelo preto e branco está com alguns flocos de neve. Ele olha fixamente para a câmera.",
    "english": "Close up photo of a Husky dog. His muzzle and black and white fur are covered in snowflakes. He stares at the camera.",
    "spanish": "Foto cercana de un perro Husky. Su hocico y pelaje blanco y negro están cubiertos de copos de nieve. Él mira a la cámara.",
    "german": "Nahaufnahmefoto eines Husky-Hundes. Seine Schnauze und sein schwarz-weißes Fell sind mit Schneeflocken bedeckt. Er starrt in die Kamera."
  },
  {
    "id": "0250",
    "file": "https://i.imgur.com/4YS0Zr9.jpg",
    "portuguese": "Foto de uma mamãe gato e seu filhote. Eles têm o pelo cinza e estão sentados numa poltrona de feltro branco.",
    "english": "Photo of a mother cat and her kitten. They have gray fur and are sitting in a white felt armchair.",
    "spanish": "Foto de una madre gata y su gatito. Tienen pelaje gris y están sentados en un sillón de fieltro blanco.",
    "german": "Foto einer Mutterkatze und ihres Kätzchens. Sie haben graues Fell und sitzen in einem weißen Filzsessel."
  },
  {
    "id": "0251",
    "file": "https://i.imgur.com/nCVwxdN.jpg",
    "portuguese": "Foto de um pássaro pequeno de penas brancas em um galho de árvore. Ele tem olhos pretos com penas amarelas redor e um bico pequeno e preto.",
    "english": "Photo of a small white-feathered bird on a tree branch. It has black eyes with yellow feathers around it and a small, black beak.",
    "spanish": "Foto de un pequeño pájaro de plumas blancas en la rama de un árbol. Tiene ojos negros con plumas amarillas alrededor y un pico pequeño y negro.",
    "german": "Foto eines kleinen weiß-mit Federn versehenen Vogels auf einem Baumast. Es hat schwarze Augen mit gelben Federn drumherum und einen kleinen, schwarzen Schnabel."
  },
  {
    "id": "0252",
    "file": "https://i.imgur.com/9I0Wy54.jpg",
    "portuguese": "Foto de um gato laranja com asas de fada. Ele olha para uma luz na direita. Ele tem olhos marrons e focinho rosa.",
    "english": "Photo of an orange cat with fairy wings. He looks at a light on the right. He has brown eyes and a pink muzzle.",
    "spanish": "Foto de un gato naranja con alas de hada. Mira una luz a la derecha. Tiene los ojos marrones y el hocico rosado.",
    "german": "Foto einer orange Katze mit feenhaften Flügeln. Er blickt auf ein Licht auf der rechten Seite. Er hat braune Augen und eine rosa Schnauze."
  },
  {
    "id": "0253",
    "file": "https://i.imgur.com/DNUL7eZ.jpg",
    "portuguese": "Foto de um tubarão branco em meio à peixes pequenos. Ele está com a boca meio aberta e tem uma expressão feliz.",
    "english": "Photo of a white shark among small fish. He has his mouth half open and has a happy expression.",
    "spanish": "Foto de un tiburón blanco entre peces pequeños. Tiene la boca entreabierta y tiene una expresión feliz.",
    "german": "Foto eines weißen Hais zwischen kleinen Fischen. Er hat seinen Mund halb geöffnet und hat einen glücklichen Ausdruck."
  },
  {
    "id": "0254",
    "file": "https://i.imgur.com/73cDOJa.jpg",
    "portuguese": "Foto de um guaxinim de pé ao lado de uma pintura pequena. Ele aponta para a pintura com sua pata direita como se para mostrar que ele a pintou.",
    "english": "Photo of a raccoon standing next to a small painting. He points at the painting with his right paw as if to show that he has painted it.",
    "spanish": "Foto de un mapache junto a un pequeño cuadro de pintura. Señala el cuadro con la pata derecha como para mostrar que lo ha pintado.",
    "german": "Foto eines Waschbären, der neben einem kleinen Gemälde steht. Er zeigt mit seiner rechten Pfote auf das Gemälde, als wolle er zeigen, dass er es gemalt hat."
  },
  {
    "id": "0255",
    "file": "https://i.imgur.com/vFMcSff.jpg",
    "portuguese": "Foto de um filhote de gato apoiado sobre um controle de playstation 4 em cima da cama. O gato é marrom com listras pretas, tem olhos verdes e as patas brancas. O controle é preto e está com uma luz azul. O lençol da cama é branco com desenhos rosa.",
    "english": "Photo of a kitten leaning on a playstation 4 controller on top of the bed. The cat is brown with black stripes, has green eyes and white paws. The control is black and has a blue light. The bed sheet is white with pink designs.",
    "spanish": "Foto de un gatito apoyado en un control de playstation 4 sobre la cama. El gato es marrón con rayas negras, tiene los ojos verdes y las patas blancas. El control es negro y tiene una luz azul. La sábana es blanca con diseños rosas.",
    "german": "Foto eines Kätzchens, das sich auf einen Playstation 4-Controller auf dem Bett stützt. Die Katze ist braun mit schwarzen Streifen, hat grüne Augen und weiße Pfoten. Die Steuerung ist schwarz und hat ein blaues Licht. Das Bettlaken ist weiß mit rosa Mustern."
  },
  {
    "id": "0256",
    "file": "https://i.imgur.com/V1zpRrt.jpg",
    "portuguese": "Foto de um filhote de gato em cima da cama, próximo a um notebook branco. O gato é marrom e branco com listras pretas. Ele olha para a esquerda da câmera com seus olhos grandes e verdes.",
    "english": "Photo of a kitten on the bed, next to a white notebook. The cat is brown and white with black stripes. He looks to the left of the camera with his big green eyes.",
    "spanish": "Foto de un gatito en la cama, junto a un portátil blanco. El gato es marrón y blanco con rayas negras. Mira a la izquierda de la cámara con sus grandes ojos verdes.",
    "german": "Foto eines Kätzchens auf dem Bett neben einem weißen Notizbuch. Die Katze ist braun und weiß mit schwarzen Streifen. Er schaut mit seinen großen grünen Augen nach links von der Kamera."
  },
  {
    "id": "0257",
    "file": "https://i.imgur.com/5uiAaiV.jpg",
    "portuguese": "Foto de um filhote de cachorro tentando subir num sofá. O cão é preto com pintas brancas e marrons e tem uma expressão de curiosidade. O sofá é cinza.",
    "english": "Photo of a puppy trying to climb onto a couch. The dog is black with white and brown spots and has a curious expression. The sofa is gray.",
    "spanish": "Foto de un cachorro intentando subirse a un sofá. El perro es negro con manchas blancas y marrones y tiene una expresión curiosa. El sofá es gris.",
    "german": "Foto eines Welpen, der versucht, auf eine Couch zu klettern. Der Hund ist schwarz mit weißen und braunen Flecken und hat einen neugierigen Ausdruck. Das Sofa ist grau."
  },
  {
    "id": "0258",
    "file": "https://i.imgur.com/hoJsVmb.png",
    "portuguese": "Foto de um filhote de pitbull sentado numa caixinha de transporte azul, dentro de um carro. O cão tem o pelo marrom, olhos verdes e parece muito feliz. Ele olha para a câmera com a boca aberta, como num sorriso.",
    "english": "Photo of a pit bull puppy sitting in a blue transport box inside a car. The dog has brown fur, green eyes and looks very happy. He looks at the camera with his mouth open, as if in a smile.",
    "spanish": "Foto de un perrito pitbull sentado en una caja de transporte azul dentro de un coche. El perro tiene pelaje marrón, ojos verdes y parece muy feliz. Mira a la cámara con la boca abierta, como si sonriera.",
    "german": "Foto eines Pitbull-Welpen, der in einer blauen Transportbox in einem Auto sitzt. Der Hund hat braunes Fell, grüne Augen und sieht sehr glücklich aus. Er blickt mit offenem Mund in die Kamera, als würde er lächeln."
  },
  {
    "id": "0259",
    "file": "https://i.imgur.com/V65CgBq.png",
    "portuguese": "Foto de um filhote de pitbull marrom dormindo. Ele tem o pelo marrom e está com os olhos fechados e a língua para fora. Ele está deitado numa almofada cinza.",
    "english": "Photo of a brown pitbull puppy sleeping. He has brown fur and has his eyes closed and his tongue hanging out. He is lying on a gray pillow.",
    "spanish": "Foto de un perrito pitbull marrón durmiendo. Tiene el pelaje marrón, los ojos cerrados y la lengua fuera. Está tumbado sobre una almohada gris.",
    "german": "Foto eines braunen Pitbull-Welpen, der schläft. Er hat braunes Fell und hat seine Augen geschlossen und seine Zunge hängt heraus. Er liegt auf einem grauen Kissen."
  },
  {
    "id": "0260",
    "file": "https://i.imgur.com/GFp5Sgl.jpg",
    "portuguese": "Foto de um gato laranja muito peludo. Ele tem olhos verdes e está sentado olhando para a esquerda da câmera.",
    "english": "Photo of a very furry orange cat. He has green eyes and is sitting looking to the left of the camera.",
    "spanish": "Foto de un gato naranja muy peludo. Tiene los ojos verdes y está sentado mirando a la izquierda de la cámara.",
    "german": "Foto einer sehr pelzigen orange Katze. Er hat grüne Augen und sitzt links neben der Kamera."
  },
  {
    "id": "0261",
    "file": "https://i.imgur.com/PCAw2IO.jpg",
    "portuguese": "Foto de um filhote de gato deitado no colo de uma pessoa. O gato é marrom com listras pretas e a barriga branca. Ele está deitado de barriga para cima com uma expressão feliz.",
    "english": "Photo of a kitten lying on a person's lap. The cat is brown with black stripes and a white belly. He is lying on his back with a happy expression.",
    "spanish": "Foto de un gatito acostado en el regazo de una persona. El gato es marrón con rayas negras y un vientre blanco. Él está acostado boca arriba con una expresión feliz.",
    "german": "Foto eines Kätzchens, das auf dem Schoß einer Person liegt. Die Katze ist braun mit schwarzen Streifen und einem weißen Bauch. Er liegt mit einem glücklichen Ausdruck auf dem Rücken."
  },
  {
    "id": "0262",
    "file": "https://i.imgur.com/UQEYrBl.jpg",
    "portuguese": "Foto de dois gatinhos abraçados. O da esquerda é maior, já adulto, bege meio alaranjado com manchas pretas e olhos verdes. Ele segura o filhote com as duas patinhas dianteiras pela barriga. O filhote é bem semelhante ao maior, porém possui o pelo mais claro. Seus olhos são azuis e estão arregalados.",
    "english": "Photo of two embracing kittens. The one on the left is larger, already an adult, half-orange beige with black spots and green eyes. He holds the puppy with both front paws by the belly. The puppy is very similar to the larger one, but has lighter fur. His eyes are blue and wide.",
    "spanish": "Foto de dos gatitos abrazados. El de la izquierda es más grande, ya adulto, beige medio anaranjado con manchas negras y ojos verdes. Sostiene al cachorro con ambas patas delanteras por el vientre. El cachorro es muy similar al más grande, pero tiene un pelaje más claro. Sus ojos son azules y muy abiertos.",
    "german": "Foto von zwei umarmenden Kätzchen. Der linke ist größer, schon erwachsen, halb orange-beige mit schwarzen Flecken und grünen Augen. Er hält den Welpen mit beiden Vorderpfoten am Bauch. Der Welpe ist dem größeren sehr ähnlich, hat aber ein helleres Fell. Seine Augen sind blau und weit."
  },
  {
    "id": "0263",
    "file": "https://i.imgur.com/AvizTOJ.jpg",
    "portuguese": "Foto de dois ratinhos brancos em uma pequena rede preta. O da direita é um pouco mais gordo e está levemente abaixado, com o olho esquerdo meio fechado. O da esquerda é mais magro e possui o pelo muito ralo, sendo quase pelado. Ele recosta sua cabeça no topo da cabeça do amigo e levanta a patinha esquerda.",
    "english": "Photo of two white mice in a small black net. The one on the right is a little fatter and is slightly bent over, with the left eye half closed. The one on the left is thinner and has very thin fur, being almost naked. He leans his head on top of his friend's head and lifts his left paw.",
    "spanish": "Foto de dos ratones blancos en una pequeña red negra. El de la derecha es un poco más gordo y ligeramente encorvado, con el ojo izquierdo medio cerrado. El de la izquierda es más delgado y tiene un pelaje muy fino, estando casi desnudo. Apoya su cabeza sobre la cabeza de su amigo y levanta su pata izquierda.",
    "german": "Foto von zwei weißen Mäusen in einem kleinen schwarzen Netz. Der rechte ist etwas dicker und leicht vornübergebeugt, das linke Auge halb geschlossen. Der linke ist dünner und hat ein sehr dünnes Fell und ist fast nackt. Er lehnt seinen Kopf auf den Kopf seines Freundes und hebt seine linke Pfote."
  },
  {
    "id": "0264",
    "file": "https://i.imgur.com/5x3RHXD.jpg",
    "portuguese": "Foto tirada do alto mostrando um gatinho em uma posição na qual ele não está nem completamente de pé, nem completamente sentado. Ele é laranja, mas seu peito, focinho e patas são brancos. Seus olhos verdes olham para além da câmera e sua boca está entreaberta, como se ele estivesse em espera. Seu rabinho está para cima e suas orelhas são grandes, desproporcionais à sua cabeça.",
    "english": "Photo taken from above showing a kitten in a position in which it is neither fully standing nor fully seated. He is orange, but his chest, snout and paws are white. His green eyes look past the camera and his mouth is slightly open, as if he's been on hold. Its tail is up and its ears are large, disproportionate to its head.",
    "spanish": "Foto tomada desde arriba que muestra a un gatito en una posición en la que no está completamente parado ni completamente sentado. Es naranja, pero su pecho, hocico y patas son blancos. Sus ojos verdes miran más allá de la cámara y su boca está ligeramente abierta, como si hubiera estado en espera. Su cola está levantada y sus orejas son grandes, desproporcionadas con respecto a su cabeza.",
    "german": "Von oben aufgenommenes Foto, das ein Kätzchen in einer Position zeigt, in der es weder vollständig steht noch vollständig sitzt. Er ist orange, aber Brust, Schnauze und Pfoten sind weiß. Seine grünen Augen blicken an der Kamera vorbei und sein Mund ist leicht geöffnet, als wäre er in der Warteschleife. Sein Schwanz ist hoch und seine Ohren sind groß und stehen in keinem Verhältnis zu seinem Kopf."
  },
  {
    "id": "0265",
    "file": "https://i.imgur.com/TczPalY.jpg",
    "portuguese": "Foto tirada do alto mostrando dois gatinhos. O de cima é grande e gordo, laranja e bem peludo. Seus olhos estão bem dilatados e ele encara algo além da câmera com cara de atenção. Está deitado de lado, mas como se estivesse pronto para se levantar. O de baixo está levemente afastado, da diagonal do outro gato. Ele é pequeno, menor do que a metade do amigo. É magro e com o pelo cinza, com manchas pretas. Para olhar para a câmera ele tem que virar quase todo o pescoço para cima, e suas orelhas são bem grandes.",
    "english": "Photo taken from above showing two kittens. The top one is big and fat, orange and very hairy. His eyes are very dilated and he stares at something beyond the camera with a look of attention. He's lying on his side, but like he's ready to get up. The bottom one is slightly away from the diagonal of the other cat. He is small, smaller than half of his friend. He is thin and gray fur with black spots. To look at the camera he has to turn his neck almost all the way up, and his ears are pretty big.",
    "spanish": "Foto tomada desde arriba que muestra dos gatitos. El de arriba es grande y gordo, naranja y muy peludo. Sus ojos están muy dilatados y mira algo más allá de la cámara con una mirada de atención. Está acostado de lado, pero como si estuviera listo para levantarse. El de abajo está ligeramente alejado de la diagonal del otro gato. Es pequeño, más pequeño que la mitad de su amigo. Es de pelaje fino y gris, con manchas negras. Para mirar a la cámara tiene que girar el cuello casi completamente hacia arriba y sus orejas son bastante grandes.",
    "german": "Von oben aufgenommenes Foto mit zwei Kätzchen. Der obere ist groß und fett, orange und sehr behaart. Seine Augen sind sehr geweitet und er starrt mit einem aufmerksamen Blick auf etwas hinter der Kamera. Er liegt auf der Seite, aber als wollte er aufstehen. Die untere ist etwas von der Diagonale der anderen Katze entfernt. Er ist klein, kleiner als die Hälfte seines Freundes. Es ist ein dünnes und graues Fell mit schwarzen Flecken. Um in die Kamera zu schauen, muss er seinen Hals fast ganz nach oben drehen, und seine Ohren sind ziemlich groß."
  },
  {
    "id": "0266",
    "file": "https://i.imgur.com/KOXh44L.png",
    "portuguese": "Foto de um panda vermelho dormindo em uma casinha em uma árvore. Ele não é muito grande, e a casinha parece um ninho grande e com teto.",
    "english": "Photo of a red panda sleeping in a little house in a tree. He's not very big, and the little house looks like a big, roofed nest.",
    "spanish": "Foto de un panda rojo durmiendo en una casita en un árbol. No es muy grande, y la casita parece un gran nido techado.",
    "german": "Foto eines roten Pandas, der in einem kleinen Haus in einem Baum schläft. Er ist nicht sehr groß, und das Häuschen sieht aus wie ein großes, überdachtes Nest."
  },
  {
    "id": "0267",
    "file": "https://i.imgur.com/GYYE9i1.jpg",
    "portuguese": "Foto de uma mão segurando um morceguinho. Ele está de cabeça para baixo e encara a câmera. Só é possível ver sua cabeça e parte de suas asinhas. O fundo é todo branco.",
    "english": "Photo of a hand holding a bat. He is upside down and facing the camera. You can only see his head and part of his wings. The background is all white.",
    "spanish": "Fotografía de una mano sujetando un bate. Él está boca abajo y frente a la cámara. Solo es posible ver su cabeza y parte de sus alas. El fondo es todo blanco.",
    "german": "Foto einer Hand, die einen Schläger hält. Er steht auf dem Kopf und blickt in die Kamera. Man sieht nur seinen Kopf und einen Teil seiner Flügel. Der Hintergrund ist ganz weiß."
  },
  {
    "id": "0268",
    "file": "https://i.imgur.com/VknHk2W.jpg",
    "portuguese": "Foto de um morceguinho comendo uma fruta. Ele está bem próximo da câmera e morde a fruta vermelha enquanto olha para ela. O fundo está desfocado.",
    "english": "Photo of a little bat eating a fruit. He is very close to the camera and bites the red fruit while looking at it. The background is blurred.",
    "spanish": "Foto de un pequeño murciélago comiendo una fruta. Está muy cerca de la cámara y muerde la fruta roja mientras la mira. El fondo está borroso.",
    "german": "Foto einer kleinen Fledermaus, die eine Frucht isst. Er ist ganz nah an der Kamera und beißt die rote Frucht, während er sie ansieht. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0269",
    "file": "https://i.imgur.com/CmPe74M.png",
    "portuguese": "Foto de um cachorrinho na neve. Ele é filhote, com o pelo bege ralo e o focinho preto sujo de neve. Está de pé e usa uma coleira preta.",
    "english": "Photo of a puppy in the snow. He is a puppy, with thin beige fur and a black muzzle smeared with snow. He is standing and wearing a black collar.",
    "spanish": "Foto de un cachorro en la nieve. Es un cachorro, de fino pelaje beige y hocico negro manchado de nieve. Está de pie y lleva un collar negro.",
    "german": "Foto eines Welpen im Schnee. Er ist ein Welpe mit dünnem beigefarbenem Fell und einer schwarzen, schneeverschmierten Schnauze. Er steht und trägt ein schwarzes Halsband."
  },
  {
    "id": "0270",
    "file": "https://i.imgur.com/T3hxjwD.jpg",
    "portuguese": "Foto de um cachorro da raça Pastor Alemão sentado perto do mar. Ele tem uma coleira marrom e segura uma faixa vermelha escrito \"segundo lugar\" com a boca. Ao fundo, pedras e pedaços de madeira.",
    "english": "Photo of a German Shepherd dog sitting by the sea. He has a brown collar and holds a red \"second place\" band in his mouth. In the background, stones and pieces of wood.",
    "spanish": "Foto de un perro pastor alemán sentado junto al mar. Tiene un collar marrón y tiene una banda roja de \"segundo lugar\" en la boca. Al fondo, piedras y trozos de madera.",
    "german": "Foto eines deutschen Schäferhundes, der am Meer sitzt. Er hat ein braunes Halsband und hält ein rotes \"Zweitplatz\"-Band im Mund. Im Hintergrund Steine ​​und Holzstücke."
  },
  {
    "id": "0271",
    "file": "https://i.imgur.com/iDXo8za.png",
    "portuguese": "Uma gata cinza e seu filhote deitados num muro de tijolos. A mãe tem uma expressão brava e tem olhos verdes. O filhote tem uma expressão de curiosidade e  olhos azuis. No fundo um vaso de flores vermelhas.",
    "english": "A gray cat and her kitten lying on a brick wall. The mother has an angry expression and has green eyes. The puppy has a curious expression and blue eyes. In the background a vase of red flowers.",
    "spanish": "Un gato gris y su gatito tirados en una pared de ladrillos. La madre tiene una expresión de enojo y tiene ojos verdes. El cachorro tiene una expresión curiosa y ojos azules. Al fondo un jarrón de flores rojas.",
    "german": "Eine graue Katze und ihr Kätzchen, die auf einer Backsteinmauer liegen. Die Mutter hat einen wütenden Ausdruck und grüne Augen. Der Welpe hat einen neugierigen Ausdruck und blaue Augen. Im Hintergrund eine Vase mit roten Blumen."
  },
  {
    "id": "0272",
    "file": "https://i.imgur.com/0Tz5yFq.png",
    "portuguese": "Foto de um guaxinim deitado em uma cadeira de praia. Ele é bem peludinho e encara a câmera com seus olhos pretos, fazendo uma cara bem fofa de pidão. A cadeira possui um arco-íris. O fundo é um gramado sintético.",
    "english": "Photo of a raccoon lying on a beach chair. He is very furry and faces the camera with his black eyes, making a very cute pity face. The chair has a rainbow. The background is a synthetic lawn.",
    "spanish": "Foto de un mapache acostado en una silla de playa. Es muy peludo y mira a la cámara con sus ojos negros, haciendo una cara de lástima muy linda. La silla tiene un arcoíris. El fondo es un césped sintético.",
    "german": "Foto eines Waschbären, der auf einem Strandkorb liegt. Er ist sehr pelzig und blickt mit seinen schwarzen Augen in die Kamera, was ein sehr süßes, mitleidiges Gesicht macht. Der Stuhl hat einen Regenbogen. Der Hintergrund ist ein Kunstrasen."
  },
  {
    "id": "0273",
    "file": "https://i.imgur.com/GTgKw5p.png",
    "portuguese": "Foto tirada do alto mostrando um gatinho laranja. Ele está sentado, encarando a câmera com seus olhos verdes levemente vesgos. Seu pelo é rente ao corpo e usa uma coleira azul. O fundo mostra um chão de madeira desfocado.",
    "english": "Photo taken from above showing an orange kitten. He's sitting up, facing the camera with his green eyes slightly crossed. His fur is close to the body and he wears a blue collar. The background shows a blurred wooden floor.",
    "spanish": "Foto tomada desde arriba que muestra un gatito naranja. Está sentado, frente a la cámara con sus ojos verdes ligeramente cruzados. Su pelaje está pegado al cuerpo y lleva un collar azul. El fondo muestra un piso de madera borroso.",
    "german": "Von oben aufgenommenes Foto mit einem orangefarbenen Kätzchen. Er sitzt aufrecht und blickt mit leicht gekreuzten grünen Augen in die Kamera. Sein Fell liegt eng am Körper an und er trägt einen blauen Kragen. Der Hintergrund zeigt einen verschwommenen Holzboden."
  },
  {
    "id": "0274",
    "file": "https://i.imgur.com/gezBTVY.png",
    "portuguese": "Foto de um labrador dormindo em um acampamento. Ele está em cima de um pano cinza, na direita inferior da imagem, e aparece apenas do \"busto\" para cima. É gordo e possui várias dobras, especialmente em seu rosto que está encolhido em direção ao corpo.",
    "english": "Photo of a labrador sleeping in a camp. It is on top of a gray cloth, in the lower right of the image, and appears only from the \"bust\" up. He is plump and has several folds, especially on his face which is shrunk towards his body.",
    "spanish": "Foto de un labrador durmiendo en un campamento. Está encima de una tela gris, en la parte inferior derecha de la imagen, y aparece solo del \"busto\" hacia arriba. Es regordete y tiene varios pliegues, especialmente en la cara que está encogida hacia su cuerpo.",
    "german": "Foto eines Labradors, der in einem Lager schläft. Es befindet sich oben rechts im Bild auf einem grauen Tuch und erscheint nur von der \"Büste\" nach oben. Er ist rundlich und hat mehrere Falten, besonders im Gesicht, das zum Körper hin geschrumpft ist."
  },
  {
    "id": "0275",
    "file": "https://i.imgur.com/FkV1CPC.png",
    "portuguese": "Foto de três bodes de pé em cima de uma espécie de gangorra de madeira. Duas delas são grandes, uma na esquerda e uma na direita, e a terceira é filhotes, sem chifres, se escondendo debaixo da mão. Todas são marrons com as patas e focinhos pretos. O fundo mostra um gramado e uma cerca.",
    "english": "Photo of three goats standing on top of a kind of wooden seesaw. Two of them are large, one on the left and one on the right, and the third is puppies, without horns, hiding under the hand. All are brown with black paws and muzzles. The background shows a lawn and a fence.",
    "spanish": "Foto de tres cabras paradas encima de una especie de balancín de madera. Dos de ellos son grandes, uno a la izquierda y otro a la derecha, y el tercero son cachorros, sin cuernos, escondidos debajo de la mano. Todos son marrones con patas y hocicos negros. El fondo muestra un césped y una valla.",
    "german": "Foto von drei Ziegen, die auf einer Art Holzwippe stehen. Zwei von ihnen sind groß, einer links und einer rechts, und der dritte sind Welpen ohne Hörner, die sich unter der Hand verstecken. Alle sind braun mit schwarzen Pfoten und Schnauzen. Der Hintergrund zeigt einen Rasen und einen Zaun."
  },
  {
    "id": "0276",
    "file": "https://i.imgur.com/sWYBgSQ.png",
    "portuguese": "Foto de um ratinho de pé atrás de um pequeno cavalete com uma mini-pintura abstrata nas cores preto, roxo, azul e rosa. O ratinho segura o cavalete, orgulhoso, encarando a câmera com a boquinha aberta. O fundo é branco.",
    "english": "Photo of a mouse standing behind a small easel with a mini abstract painting in black, purple, blue and pink. The mouse proudly holds the easel, staring at the camera with its mouth open. The background is white.",
    "spanish": "Foto de un ratón parado detrás de un pequeño caballete con una mini pintura abstracta en negro, violeta, azul y rosa. El ratón sostiene con orgullo el caballete, mirando a la cámara con la boca abierta. El fondo es blanco.",
    "german": "Foto einer Maus, die hinter einer kleinen Staffelei mit einem abstrakten Mini-Gemälde in Schwarz, Lila, Blau und Pink steht. Die Maus hält stolz die Staffelei und starrt mit offenem Mund in die Kamera. Der Hintergrund ist weiß."
  },
  {
    "id": "0277",
    "file": "https://i.imgur.com/slsKhCZ.png",
    "portuguese": "Foto de um gato com a cara na câmera. Ele é bege e branco com algumas listras pretas. Seus olhos esverdeados encaram a câmera e ele faz uma cara de poucos amigos, como se estivesse ameaçando quem o encara. O fundo é o céu azul.",
    "english": "Photo of a cat with its face in the camera. It is beige and white with some black stripes. His green eyes stare at the camera and he makes a face of few friends, as if he's threatening whoever looks at him. The background is the blue sky.",
    "spanish": "Foto de un gato con la cara en la cámara. Es de color beige y blanco con algunas rayas negras. Sus ojos verdes miran fijamente a la cámara y pone cara de pocos amigos, como si estuviera amenazando a quien lo mira. El fondo es el cielo azul.",
    "german": "Foto einer Katze mit ihrem Gesicht in der Kamera. Es ist beige und weiß mit einigen schwarzen Streifen. Seine grünen Augen starren in die Kamera und er macht ein paar Freundesgesichter, als bedrohe er jeden, der ihn ansieht. Der Hintergrund ist der blaue Himmel."
  },
  {
    "id": "0278",
    "file": "https://i.imgur.com/UYfiykN.png",
    "portuguese": "Foto de um gato muito perto da câmera. Ele é marrom/bege com listras pretas. Seus olhos caramelos olham para algo além da câmera e sua cara é fechada, mas ele é bem bochechudo e não parece uma ameaça. O fundo é o céu azul.",
    "english": "Photo of a cat very close to the camera. It is brown/beige with black stripes. His caramel eyes look beyond the camera and his face is frowning, but he's quite chubby and doesn't look like a threat. The background is the blue sky.",
    "spanish": "Foto de un gato muy cerca de la cámara. Es de color marrón/beige con rayas negras. Sus ojos color caramelo miran más allá de la cámara y su rostro frunce el ceño, pero es bastante gordito y no parece una amenaza. El fondo es el cielo azul.",
    "german": "Foto einer Katze ganz nah an der Kamera. Es ist braun/beige mit schwarzen Streifen. Seine karamellfarbenen Augen blicken über die Kamera hinaus und sein Gesicht runzelt die Stirn, aber er ist ziemlich pummelig und sieht nicht wie eine Bedrohung aus. Der Hintergrund ist der blaue Himmel."
  },
  {
    "id": "0279",
    "file": "https://i.imgur.com/ztHzOT4.png",
    "portuguese": "Foto de um gato muito perto da câmera. Ele é branco com o topo da cabeça laranja. Seus olhos são azuis e seu nariz, pela proximidade, está imenso. Está sentado e faz cara de curioso.",
    "english": "Photo of a cat very close to the camera. He is white with an orange top of his head. His eyes are blue and his nose, due to the proximity, is huge. He's sitting up and looks curious.",
    "spanish": "Foto de un gato muy cerca de la cámara. Es blanco con una parte superior naranja en la cabeza. Sus ojos son azules y su nariz, debido a la proximidad, es inmensa. Está sentado y parece curioso.",
    "german": "Foto einer Katze ganz nah an der Kamera. Er ist weiß mit einem orangefarbenen Scheitel. Seine Augen sind blau und seine Nase aufgrund der Nähe riesig. Er sitzt und sieht neugierig aus."
  },
  {
    "id": "0280",
    "file": "https://i.imgur.com/q1LGYgf.png",
    "portuguese": "Foto de um cachorrinho lulu da pomerânia sentado em um sofá. Ele é bem pequeno, marrom acinzentado, possui os olhos pretos e está com a boca aberta numa mistura de bocejo e felicidade. Usa uma coleira azul. O fundo mostra o sofá, coberto por alguns panos.",
    "english": "Photo of a Pomeranian puppy sitting on a sofa. He is very small, greyish brown, has black eyes and has his mouth open in a mixture of yawn and happiness. He wears a blue collar. The background shows the sofa, covered by some cloths.",
    "spanish": "Foto de un cachorro de Pomerania sentado en un sofá. Es muy pequeño, de color marrón grisáceo, tiene ojos negros y tiene la boca abierta en una mezcla de bostezo y felicidad. Usa un collar azul. El fondo muestra el sofá, cubierto por unos paños.",
    "german": "Foto eines pommerschen Welpen, der auf einem Sofa sitzt. Er ist sehr klein, graubraun, hat schwarze Augen und den Mund in einer Mischung aus Gähnen und Freude offen. Tragen Sie einen blauen Kragen. Der Hintergrund zeigt das Sofa, bedeckt von einigen Tüchern."
  },
  {
    "id": "0281",
    "file": "https://i.imgur.com/YXlLAFQ.png",
    "portuguese": "Foto de uma onça pintada lambendo seu filhote. O filhote está sentado no centro da imagem, com a carinha achatada pela língua da mãe, que só mostra o focinho e uma das patas dianteiras. O fundo está desfocado.",
    "english": "Photo of a jaguar licking its cub. The puppy is sitting in the center of the image, with the face flattened by the mother's tongue, which only shows the snout and one of the front paws. The background is blurred.",
    "spanish": "Foto de un jaguar lamiendo a su cachorro. El cachorro está sentado en el centro de la imagen, con la cara aplastada por la lengua de la madre, que solo deja ver el hocico y una de las patas delanteras. El fondo está borroso.",
    "german": "Foto eines Jaguars, der sein Junges leckt. Der Welpe sitzt in der Mitte des Bildes, das Gesicht von der Zunge der Mutter plattgedrückt, die nur die Schnauze und eine der Vorderpfoten zeigt. Der Hintergrund ist verschwommen."
  },
  {
    "id": "0282",
    "file": "https://i.imgur.com/ygYLScO.png",
    "portuguese": "Foto de um corgi sentado em um sofá olhando para a câmera. Ele é branco com o topo da cabeça bege e mostra a língua em uma espécie de sorrido. O fundo é uma sala.",
    "english": "Photo of a corgi sitting on a couch looking at the camera. He is white with a beige top of his head and shows his tongue in a sort of grin. The background is a room.",
    "spanish": "Foto de un corgi sentado en un sofá mirando a la cámara. Es blanco con la parte superior de la cabeza beige y muestra la lengua en una especie de sonrisa. El fondo es una habitación.",
    "german": "Foto eines Corgis, der auf einer Couch sitzt und in die Kamera schaut. Er ist weiß mit einem beigen Scheitel und zeigt seine Zunge in einer Art Grinsen. Der Hintergrund ist ein Raum."
  },
  {
    "id": "0283",
    "file": "https://i.imgur.com/7vNWoVe.png",
    "portuguese": "Foto de um gatinho gordo sentado em uma escrivaninha. Ele é bege meio acinzentado e olha para a direita. Usa um lencinho vermelho e branco no pescoço. Apesar de gordo, é relativamente pequeno. O fundo mostra um computador e um enfeite de girafa.",
    "english": "Photo of a fat kitten sitting at a desk. He is grayish beige and looks to the right. He wears a red and white scarf around his neck. Despite being fat, he is relatively small. The background shows a computer and a giraffe ornament.",
    "spanish": "Foto de un gatito gordo sentado en un escritorio. Es de color beige grisáceo y mira a la derecha. Lleva un pañuelo rojo y blanco alrededor del cuello. A pesar de ser gordo, es relativamente pequeño. El fondo muestra una computadora y un adorno de jirafa.",
    "german": "Foto eines fetten Kätzchens, das an einem Schreibtisch sitzt. Er ist graubeige und schaut nach rechts. Um den Hals trägt sie ein rot-weißes Taschentuch. Obwohl es dick ist, ist es relativ klein. Der Hintergrund zeigt einen Computer und eine Giraffenverzierung."
  },
  {
    "id": "0284",
    "file": "https://i.imgur.com/VuQoYqV.png",
    "portuguese": "Foto de um ratinho cheirando a câmera apoiado em um pedaço de milho. É possível ver apenas sua cabeça. Ele é branco e está com a boca entreaberta mostrando dois de seus dentinhos. Há outras comidas pelo local.",
    "english": "Photo of a mouse sniffing the camera leaning on a piece of corn. You can only see his head. He is white and has his mouth slightly open, showing two of his little teeth. There are other foods around the place.",
    "spanish": "Foto de un ratón olfateando la cámara apoyado en un trozo de maíz. Solo puedes ver tu cabeza. Es blanco y tiene la boca entreabierta, mostrando dos de sus pequeños dientes. Hay otros alimentos alrededor del lugar.",
    "german": "Foto einer Maus, die die Kamera schnüffelt und sich auf ein Stück Mais stützt. Du kannst nur deinen Kopf sehen. Er ist weiß und hat seinen Mund leicht geöffnet, sodass zwei seiner kleinen Zähne zu sehen sind. Es gibt andere Lebensmittel rund um den Ort."
  },
  {
    "id": "0285",
    "file": "https://i.imgur.com/tJ3zGCm.jpg",
    "portuguese": "Foto de dois bezerros brancos deitados juntos numa cama de feno.",
    "english": "Photo of two white calves lying together on a bed of hay.",
    "spanish": "Foto de dos terneros blancos acostados juntos en un lecho de heno.",
    "german": "Foto von zwei weißen Kälbern, die zusammen auf einem Heubett liegen."
  },
  {
    "id": "0286",
    "file": "https://i.imgur.com/ZCeMcbB.jpg",
    "portuguese": "Foto de um passarinho pequeno num galho. Ele é branco com a barriga laranja e as costas cinza.",
    "english": "Photo of a small bird on a branch. He is white with an orange belly and a gray back.",
    "spanish": "Foto de un pequeño pájaro en una rama. Es blanco con el vientre anaranjado y la espalda gris.",
    "german": "Foto eines kleinen Vogels auf einer Niederlassung. Er ist weiß mit einem orangefarbenen Bauch und einem grauen Rücken."
  },
  {
    "id": "0287",
    "file": "https://i.imgur.com/lTfGvRL.png",
    "portuguese": "Dois gatos na escada de uma casa. O primeiro gato é branco e está de pé na parte mais alta. Ele olha para a câmera com um olhar confuso. O segundo gato está deitado um degrau abaixo. Ele é branco com manchas laranjas. Nos cantos da escada há vasos de plantas com flores laranjas e rosas.",
    "english": "Two cats on the stairs of a house. The first cat is white and is standing on the highest part. He looks at the camera with a confused look. The second cat is lying one step down. He is white with orange spots. In the corners of the stairs are potted plants with orange and pink flowers.",
    "spanish": "Dos gatos en las escaleras de una casa. El primer gato es blanco y está parado en la parte más alta. Mira a la cámara con una mirada confundida. El segundo gato está acostado un escalón más abajo. Es blanco con manchas anaranjadas. En las esquinas de las escaleras hay macetas con flores naranjas y rosas.",
    "german": "Zwei Katzen auf der Treppe eines Hauses. Die erste Katze ist weiß und steht auf dem höchsten Teil. Verwirrt blickt er in die Kamera. Die zweite Katze liegt eine Stufe tiefer. Er ist weiß mit orangen Flecken. In den Ecken der Treppe stehen Topfpflanzen mit orangen und rosa Blüten."
  },
  {
    "id": "0288",
    "file": "https://i.imgur.com/oRnNacn.jpg",
    "portuguese": "Foto tirada dentro de um ônibus. Mostra um cão no banco à frente olhando para a câmera. Ele tem uma expressão curiosa, mas feliz.",
    "english": "Photo taken inside a bus. It shows a dog in the front seat looking at the camera. He has a curious but happy expression.",
    "spanish": "Foto tomada en el interior de un autobús. Muestra a un perro en el asiento delantero mirando a la cámara. Tiene una expresión curiosa pero feliz.",
    "german": "Das Foto wurde in einem Bus aufgenommen. Es zeigt einen Hund auf dem Vordersitz, der in die Kamera schaut. Er hat einen neugierigen, aber glücklichen Ausdruck."
  },
  {
    "id": "0289",
    "file": "https://i.imgur.com/pvIBZRa.jpg",
    "portuguese": "Foto de uma vaca deitada na grama. A foto foi tirada de perto e mostra o focinho rosa e a face de pelo branco da vaca.",
    "english": "Photo of a cow lying on the grass. The photo was taken up close and shows the cow's pink snout and white fur face.",
    "spanish": "Foto de una vaca tirada en el pasto. La foto fue tomada de cerca y muestra el hocico rosado de la vaca y la cara de pelaje blanco.",
    "german": "Foto einer Kuh, die auf dem Gras liegt. Das Foto wurde aus der Nähe aufgenommen und zeigt die rosa Schnauze und das weiße Fellgesicht der Kuh."
  },
  {
    "id": "0290",
    "file": "https://i.imgur.com/sBTJfId.jpg",
    "portuguese": "Foto de um pato branco se sacudindo em cima de uma pedra. Ele parece ter acabado de sair do lago ao fundo.",
    "english": "Photo of a white duck bobbing on top of a rock. He looks like he's just come out of the lake in the background.",
    "spanish": "Foto de un pato blanco flotando sobre una roca. Parece que acaba de salir del lago en el fondo.",
    "german": "Foto einer weißen Ente, die auf einem Felsen auf und ab hüpft. Er sieht aus, als wäre er gerade aus dem See im Hintergrund gekommen."
  },
  {
    "id": "0291",
    "file": "https://i.imgur.com/4EWy4O7.jpg",
    "portuguese": "Foto de um bebê rinoceronte brincando na lama. Ele está emlameado da barriga pra baixo e também no focinho.",
    "english": "Photo of a baby rhino playing in the mud. He is muddy from the belly down and also on the snout.",
    "spanish": "Foto de un rinoceronte bebé jugando en el barro. Está embarrado de vientre para abajo y también en el hocico.",
    "german": "Foto eines Nashornbabys, das im Schlamm spielt. Er ist vom Bauch abwärts und auch an der Schnauze matschig."
  },
  {
    "id": "0292",
    "file": "https://i.imgur.com/iI2Z20E.jpg",
    "portuguese": "Foto de uma mão apertando carinhosamente a bochecha de um gatinho laranja. Ele é filhote e parece estar dormindo.",
    "english": "Photo of a hand affectionately squeezing the cheek of an orange kitten. He is a puppy and appears to be sleeping.",
    "spanish": "Foto de una mano apretando cariñosamente la mejilla de un gatito naranja. Es un cachorro y parece estar durmiendo.",
    "german": "Foto einer Hand, die liebevoll die Wange eines orangefarbenen Kätzchens drückt. Er ist ein Welpe und scheint zu schlafen."
  },
  {
    "id": "0293",
    "file": "https://i.imgur.com/Ijf1g3y.jpg",
    "portuguese": "Imagem de uma lontra dormindo na perna de uma pessoa. Ela está com os olhinhos fechados e apoia a cabeça e uma das patinhas na perna da pessoa. O fundo é uma cama.",
    "english": "Image of an otter sleeping on a person's leg. She has her eyes closed and supports her head and one of her paws on the person's leg. The bottom is a bed.",
    "spanish": "Imagen de una nutria durmiendo en la pierna de una persona. Tiene los ojos cerrados y apoya la cabeza y una de sus patas en la pierna de la persona. El fondo es una cama.",
    "german": "Bild eines Otters, der auf dem Bein einer Person schläft. Sie hat ihre Augen geschlossen und stützt ihren Kopf und eine ihrer Pfoten auf dem Bein der Person. Unten ist ein Bett."
  },
  {
    "id": "0294",
    "file": "https://i.imgur.com/1Bl7ucn.jpg",
    "portuguese": "Foto de coelhos brancos da neve. Quatro estão deitados e um está de pé. O coelho da neve tem pernas longas, diferente dos coelhos comuns.",
    "english": "Photo of white snow bunnies. Four are lying down and one is standing. The snow rabbit has long legs, unlike common rabbits.",
    "spanish": "Foto de conejitos de nieve blanca. Cuatro están acostados y uno está de pie. El conejo de las nieves tiene patas largas, a diferencia de los conejos comunes.",
    "german": "Foto von weißen Schneehäschen. Vier liegen und einer steht. Der Schneehase hat im Gegensatz zu gewöhnlichen Kaninchen lange Beine."
  },
  {
    "id": "0295",
    "file": "https://i.imgur.com/cVvICDW.jpg",
    "portuguese": "Foto de uma foca com o rosto enfiado nas barras de uma grade. Ela tem o pelo cinza e olhos pretos. Ela olha para a câmera com uma expressão feliz.",
    "english": "Photo of a seal with its face buried in the bars of a crate. She has gray fur and black eyes. She looks at the camera with a happy expression.",
    "spanish": "Foto de una foca con la cara enterrada en los barrotes de una caja. Ella tiene pelaje gris y ojos negros. Ella mira a la cámara con una expresión feliz.",
    "german": "Foto einer Robbe, deren Gesicht in den Gitterstäben einer Kiste vergraben ist. Sie hat graues Fell und schwarze Augen. Sie schaut mit einem glücklichen Ausdruck in die Kamera."
  },
  {
    "id": "0296",
    "file": "https://i.imgur.com/kdgrUyQ.jpg",
    "portuguese": "Foto de perto do rosto de um gato branco. Ele tem olhos pretos e parece curioso com a câmera.",
    "english": "Close-up photo of a white cat's face. He has black eyes and looks curious with the camera.",
    "spanish": "Foto de primer plano de la cara de un gato blanco. Tiene los ojos negros y parece curioso con la cámara.",
    "german": "Nahaufnahmefoto des Gesichts einer weißen Katze. Er hat schwarze Augen und schaut neugierig in die Kamera."
  },
  {
    "id": "0297",
    "file": "https://i.imgur.com/hwLuO2k.jpg",
    "portuguese": "Foto de um pequeno sapo verde na mão de um pessoa. O sapo está com as mãos juntas e tem um pequeno chapéu preto em forma de cone.",
    "english": "Photo of a small green frog in a person's hand. The frog has its hands together and has a small black cone-shaped hat.",
    "spanish": "Foto de una pequeña rana verde en la mano de una persona. La rana tiene las manos juntas y tiene un pequeño sombrero negro en forma de cono.",
    "german": "Foto eines kleinen grünen Frosches in der Hand einer Person. Der Frosch hat seine Hände zusammen und hat einen kleinen schwarzen kegelförmigen Hut."
  },
  {
    "id": "0298",
    "file": "https://i.imgur.com/hSC6x5I.jpg",
    "portuguese": "Foto de um filhote de anta brincando na lama. O filhote de anta tem o pêlo marrom com listras escuras.",
    "english": "Photo of a baby tapir playing in the mud. The baby tapir has brown fur with dark stripes.",
    "spanish": "Foto de un tapir bebé jugando en el barro. El tapir bebé tiene pelaje marrón con rayas oscuras.",
    "german": "Foto eines Babytapirs, der im Schlamm spielt. Der Babytapir hat braunes Fell mit dunklen Streifen."
  },
  {
    "id": "0299",
    "file": "https://i.imgur.com/MZMJPxF.jpg",
    "portuguese": "Foto de um filhote de foca num grande terreno cheio de capim. Ele olha para a câmera com um olhar confuso.",
    "english": "Photo of a seal pup in a large patch of grass. He looks at the camera with a confused look.",
    "spanish": "Foto de una cría de foca en un gran trozo de hierba. Mira a la cámara con una mirada confundida.",
    "german": "Foto eines Robbenjungen in einer großen Grasfläche. Verwirrt blickt er in die Kamera."
  },
  {
    "id": "0300",
    "file": "https://i.imgur.com/FLaidYg.jpg",
    "portuguese": "Foto de perto do rosto de um gato malhado. Ele tem o focinho rosa, a bochecha esquerda laranja e a testa preta.",
    "english": "Close-up photo of a tabby cat's face. He has a pink muzzle, an orange left cheek, and a black forehead.",
    "spanish": "Foto de primer plano de la cara de un gato atigrado. Tiene un hocico rosado, una mejilla izquierda naranja y una frente negra.",
    "german": "Nahaufnahme des Gesichts einer getigerten Katze. Er hat eine rosa Schnauze, eine orangefarbene linke Wange und eine schwarze Stirn."
  },
  {
    "id": "0301",
    "file": "https://i.imgur.com/UpsnEBw.jpg",
    "portuguese": "Foto de um filhote de passarinho na areia. Ele tem plumas brancas com pintas amarelas e o bico amarelo. Ele corre com as asas abertas.",
    "english": "Photo of a baby bird in the sand. It has white feathers with yellow spots and a yellow beak. He runs with open wings.",
    "spanish": "Foto de un pajarito en la arena. Tiene plumas blancas con manchas amarillas y un pico amarillo. Corre con las alas abiertas.",
    "german": "Foto eines Babyvogels im Sand. Es hat weiße Federn mit gelben Flecken und einen gelben Schnabel. Er läuft mit offenen Flügeln."
  },
  {
    "id": "0302",
    "file": "https://i.imgur.com/v7sRlFG.jpg",
    "portuguese": "Foto de um filhote de cão da raça corgi. Ele está numa calçada molhada e veste uma pequena capa de chuva amarela.",
    "english": "Photo of a corgi puppy. He is on a wet sidewalk and is wearing a small yellow raincoat.",
    "spanish": "Foto de un cachorro corgi. Está en una acera mojada y lleva puesto un pequeño impermeable amarillo.",
    "german": "Foto eines Corgiwelpen. Er ist auf einem nassen Bürgersteig und trägt einen kleinen gelben Regenmantel."
  },
  {
    "id": "0303",
    "file": "https://i.imgur.com/lyJI84t.jpg",
    "portuguese": "Foto de um casal de pássaros amarelos num galho. O da esquerda faz carinho no outro com o bico.",
    "english": "Photo of a couple of yellow parrots on a branch. The parrot on the left is petting the other with its beak.",
    "spanish": "Foto de un par de loros amarillos en una rama. El loro de la izquierda acaricia al otro con su pico.",
    "german": "Foto von ein paar gelben Papageien auf einer Niederlassung. Der linke Papagei streichelt den anderen mit seinem Schnabel."
  },
  {
    "id": "0304",
    "file": "https://i.imgur.com/nEuXAAd.jpg",
    "portuguese": "Foto de um gato marrom listrado de pé nas patas traseiras. Ele está com os braços estendidos e a boca aberta como se fizesse uma reclamação explosiva. Ao fundo, um gramado e casas.",
    "english": "Photo of a brown striped cat standing on its hind legs. He has his arms outstretched and his mouth is open as if making an explosive claim. In the background, a lawn and houses.",
    "spanish": "Foto de un gato con rayas marrones parado sobre sus patas traseras. Tiene los brazos extendidos y la boca abierta como si hiciera una afirmación explosiva. Al fondo, césped y casas.",
    "german": "Foto einer braun gestreiften Katze, die auf ihren Hinterbeinen steht. Er hat seine Arme ausgestreckt und sein Mund ist offen, als würde er eine explosive Behauptung aufstellen. Im Hintergrund ein Rasen und Häuser."
  },
  {
    "id": "0305",
    "file": "https://i.imgur.com/9eShOV3.jpg",
    "portuguese": "Foto de um gato branco com manchas marrons num sofá cinza. Ele está apoiado na pata direita e está com a esquerda dobrada na barriga. Como uma mãe observando seus filhos aprontar.",
    "english": "Photo of a white cat with brown spots on a gray sofa. He is leaning on his right paw and his left leg is tucked into his belly. Like a mother watching her children play.",
    "spanish": "Foto de un gato blanco con manchas marrones en un sofá gris. Está apoyado en su pata derecha y su pierna izquierda está metida en su vientre. Como una madre viendo jugar a sus hijos.",
    "german": "Foto einer weißen Katze mit braunen Flecken auf einem grauen Sofa. Er stützt sich auf seine rechte Pfote und sein linkes Bein ist in seinen Bauch gesteckt. Wie eine Mutter, die ihren Kindern beim Spielen zuschaut."
  },
  {
    "id": "0306",
    "file": "https://i.imgur.com/Jcyq4AT.jpg",
    "portuguese": "Foto tirada do alto em que um cachorro aparece dentro de um rio. Ele é marrom com o peito e focinho branco. Está todo molhado e com algumas plantas grudadas em seu peito. Sua boca está aberta em uma expressão alegre.",
    "english": "Photo taken from above where a dog appears in a river. He is brown with a white chest and muzzle. He's all wet and with some plants stuck to his chest. His mouth is open in a joyful expression.",
    "spanish": "Foto tomada desde arriba donde aparece un perro en un río. Es marrón con el pecho y el hocico blancos. Está todo mojado y con unas plantas pegadas al pecho. Su boca está abierta en una expresión alegre.",
    "german": "Foto von oben, wo ein Hund in einem Fluss auftaucht. Er ist braun mit weißer Brust und Schnauze. Er ist ganz nass und einige Pflanzen kleben an seiner Brust. Sein Mund ist in einem fröhlichen Ausdruck geöffnet."
  },
  {
    "id": "0307",
    "file": "https://i.imgur.com/LugL1vo.jpg",
    "portuguese": "Cachorrinho filhote deitado. Ele é bege e possui os pelos bem ralos, parece um labrador. Está dormindo com o rosto virado para a direita. Há um reflexo de arco-íris na sua cara. À sua esquerda, uma pelúcia de girafa. O fundo é uma cama.",
    "english": "Puppy puppy lying down. He is beige and has very thin fur, he looks like a Labrador. He is sleeping with his face turned to the right. There's a rainbow reflection on his face. To his left, a plush giraffe. The bottom is a bed.",
    "spanish": "Cachorro cachorro acostado. Es beige y tiene un pelaje muy fino, parece un labrador. Está durmiendo con la cara vuelta hacia la derecha. Hay un reflejo del arcoíris en tu cara. A su izquierda, una jirafa de peluche. El fondo es una cama.",
    "german": "Welpe Welpe, der sich hinlegt. Er ist beige und hat sehr dünnes Fell, er sieht aus wie ein Labrador. Er schläft mit nach rechts gedrehtem Gesicht. Es gibt eine Regenbogenreflexion auf deinem Gesicht. Zu Ihrer Linken eine Plüschgiraffe. Unten ist ein Bett."
  },
  {
    "id": "0308",
    "file": "https://i.imgur.com/StSFoYM.jpg",
    "portuguese": "Uma mão segurando um furão usando roupa de bruxa. Ele possui um colarinho roxo e preto e um chapéu roxo pontudo. Encara a câmera com uma expressão séria. O fundo é uma porta.",
    "english": "A hand holding a ferret wearing a witch outfit. He has a purple and black collar and a pointed purple hat. He faces the camera with a serious expression. The bottom is a door.",
    "spanish": "Una mano sosteniendo un hurón vestido con un traje de bruja. Tiene un collar morado y negro y un sombrero morado puntiagudo. Se enfrenta a la cámara con una expresión seria. El fondo es una puerta.",
    "german": "Eine Hand, die ein Frettchen hält, das ein Hexenoutfit trägt. Er hat einen lila-schwarzen Kragen und einen spitzen lila Hut. Er blickt mit ernster Miene in die Kamera. Unten ist eine Tür."
  },
  {
    "id": "0309",
    "file": "https://i.imgur.com/Mgo1jMJ.jpg",
    "portuguese": "Foto tirada do alto em que um cachorro aparece sentado no meio de uma sala de estar, coberto por um lençol branco mal cortado que deixa apenas seus olhos, focinho e patas dianteiras à mostra.",
    "english": "Photo taken from above in which a dog appears sitting in the middle of a living room, covered by a poorly cut white sheet that leaves only its eyes, snout and front paws exposed.",
    "spanish": "Foto tomada desde arriba en la que aparece un perro sentado en medio de una sala de estar, cubierto por una sábana blanca mal cortada que deja al descubierto sólo los ojos, el hocico y las patas delanteras.",
    "german": "Von oben aufgenommenes Foto, auf dem ein Hund mitten in einem Wohnzimmer zu sitzen scheint, bedeckt von einem schlecht geschnittenen weißen Laken, das nur seine Augen, seine Schnauze und seine Vorderpfoten freilässt."
  },
  {
    "id": "0310",
    "file": "https://i.imgur.com/EBGVc0r.jpg",
    "portuguese": "Foto de dois cachorros sentados no quintal. Ambos estão cobertos por lençóis brancos. O da esquerda é alto e branco, mostrando apenas os olhos e focinho, e sua boca aberta se assemelha a um sorriso. O da esquerda é mais baixinho, e além dos olhos e do focinho também é possível ver um tufo de cabelo (pelo) preso ao alto de sua cabeça. O fundo mostra uma cerca de madeira.",
    "english": "Photo of two dogs sitting in the backyard. Both are covered in white sheets. The one on the left is tall and white, showing only its eyes and snout, and its open mouth resembles a smile. The one on the left is shorter, and in addition to the eyes and muzzle, it is also possible to see a tuft of hair (fur) attached to the top of its head. The background shows a wooden fence.",
    "spanish": "Foto de dos perros sentados en el patio trasero. Ambos están cubiertos con sábanas blancas. El de la izquierda es alto y blanco, mostrando solo los ojos y el hocico, y su boca abierta parece una sonrisa. El de la izquierda es más corto, y además de los ojos y el hocico, también es posible ver un mechón de pelo (pelo) adherido a la parte superior de la cabeza. El fondo muestra una valla de madera.",
    "german": "Foto von zwei Hunden, die im Hinterhof sitzen. Beide sind mit weißen Laken bedeckt. Der linke ist groß und weiß und zeigt nur seine Augen und seine Schnauze, und sein offener Mund ähnelt einem Lächeln. Der linke ist kürzer und zusätzlich zu den Augen und der Schnauze kann man auch ein Haarbüschel (Fell) sehen, das an der Oberseite seines Kopfes befestigt ist. Der Hintergrund zeigt einen Holzzaun."
  },
  {
    "id": "0311",
    "file": "https://i.imgur.com/f9OuUK0.jpg",
    "portuguese": "Foto de um cachorro vestido de fantasma. Ele usa um lençol branco que arrasta no chão e mostra apenas seus olhos e focinho. Com a boca, segura um balde laranja com o desenho de uma abóbora. O fundo é um gramado com folhas no chão",
    "english": "Photo of a dog dressed as a ghost. He wears a white sheet that drags on the floor and shows only his eyes and snout. With his mouth, he holds an orange bucket with a pumpkin design. The background is a lawn with leaves on the ground",
    "spanish": "Foto de un perro disfrazado de fantasma. Lleva una sábana blanca que arrastra por el suelo y deja ver sólo los ojos y el hocico. En su boca, sostiene un balde naranja con un diseño de calabaza. El fondo es un césped con hojas en el suelo.",
    "german": "Foto eines Hundes, der als Geist verkleidet ist. Er trägt ein weißes Laken, das über den Boden schleift und nur seine Augen und seine Schnauze zeigt. In ihrem Mund hält sie einen orangefarbenen Eimer mit Kürbisdesign. Der Hintergrund ist ein Rasen mit Blättern auf dem Boden"
  },
  {
    "id": "0312",
    "file": "https://i.imgur.com/RIDSDHA.jpg",
    "portuguese": "Há um gato preto sentado com cara de bravo. Ele usa um chapéu roxo pontudo com flores brancas que deixa suas orelhas à mostra através de dois buraquinhos. É bem magro e seu pelo é ralo. O fundo é um tapete.",
    "english": "There is a black cat sitting there with an angry face. He wears a pointy purple hat with white flowers that exposes his ears through two small holes. It is very thin and its fur is thin. The background is a rug.",
    "spanish": "Hay un gato negro sentado allí con cara de enfado. Lleva un sombrero puntiagudo de color púrpura con flores blancas que expone sus orejas a través de dos pequeños agujeros. Es muy delgado y su pelaje es fino. El fondo es una alfombra.",
    "german": "Dort sitzt eine schwarze Katze mit einem wütenden Gesicht. Er trägt einen spitzen lila Hut mit weißen Blumen, der seine Ohren durch zwei kleine Löcher freilegt. Es ist sehr dünn und sein Fell ist dünn. Der Hintergrund ist ein Teppich."
  },
  {
    "id": "0313",
    "file": "https://i.imgur.com/5LyZJQ1.jpg",
    "portuguese": "Há um gato preto sentado com cara de bravo. Ele usa um chapéu roxo pontudo com flores brancas que deixa suas orelhas à mostra através de dois buraquinhos. Ele olha para a direita com ar de metido ou bravo, numa expressão similar a \"não quero falar com você\".",
    "english": "There is a black cat sitting there with an angry face. He wears a pointy purple hat with white flowers that exposes his ears through two small holes. He looks to the right with an air of self-importance or annoyance, in an expression similar to \"I don't want to talk to you.",
    "spanish": "Hay un gato negro sentado allí con cara de enfado. Lleva un sombrero puntiagudo de color púrpura con flores blancas que expone sus orejas a través de dos pequeños agujeros. Mira a la derecha con aire de engreimiento o fastidio, en una expresión similar a \"no quiero hablar contigo\".",
    "german": "Dort sitzt eine schwarze Katze mit einem wütenden Gesicht. Er trägt einen spitzen lila Hut mit weißen Blumen, der seine Ohren durch zwei kleine Löcher freilegt. Er schaut nach rechts mit einem Hauch von Selbstgefälligkeit oder Verärgerung, in einem Ausdruck ähnlich wie „Ich möchte nicht mit dir reden“."
  },
  {
    "id": "0314",
    "file": "https://i.imgur.com/ndO9DKV.jpg",
    "portuguese": "Foto de um ouriço vestido de vampiro. Ele usa uma blusinha branca e uma capa preta do lado de fora e vermelha do lado de dentro, com uma gola dobrada maior do que sua cabeça. Sua expressão é neutra.",
    "english": "Photo of a hedgehog dressed as a vampire. He wears a white tank top and a black cape on the outside and a red cape on the inside, with a collar folded over his head. His expression is neutral.",
    "spanish": "Foto de un erizo disfrazado de vampiro. Viste una camiseta sin mangas blanca y una capa negra por fuera y una capa roja por dentro, con un cuello doblado sobre su cabeza. Su expresión es neutra.",
    "german": "Foto eines als Vampir verkleideten Igels. Er trägt ein weißes Tanktop und einen schwarzen Umhang außen und einen roten Umhang innen, mit einem über den Kopf gefalteten Kragen. Sein Gesichtsausdruck ist neutral."
  },
  {
    "id": "0315",
    "file": "https://i.imgur.com/DCKbYtM.png",
    "portuguese": "Foto tirada de baixo de um gatinho super perto da câmera, mostrando apenas da boca para cima. Seus olhos arregalados olham para cima. Por estar muito perto da câmera, a imagem está desfocada.",
    "english": "Photo taken from below of a kitten super close to the camera, showing only from the mouth up. Her wide eyes look up. Being too close to the camera, the image is blurred.",
    "spanish": "Foto tomada desde abajo de un gatito muy cerca de la cámara, mostrando solo de la boca hacia arriba. Sus grandes ojos miran hacia arriba. Al estar demasiado cerca de la cámara, la imagen se ve borrosa.",
    "german": "Von unten aufgenommenes Foto eines Kätzchens ganz nah an der Kamera, das nur vom Maul nach oben zu sehen ist. Ihre großen Augen blicken nach oben. Zu nah an der Kamera ist das Bild verschwommen."
  },
  {
    "id": "0316",
    "file": "https://i.imgur.com/TJTsjh7.png",
    "portuguese": "Foto da cara de um gatinho. Ele encara a câmera com os olhos dilatados e arregalados e está tremido.",
    "english": "Photo of a kitten's face. He's staring at the camera with his eyes dilated and wide and he's shaking.",
    "spanish": "Foto de la cara de un gatito. Está mirando a la cámara con los ojos dilatados y muy abiertos y está temblando.",
    "german": "Foto vom Gesicht eines Kätzchens. Er starrt mit geweiteten und weit aufgerissenen Augen in die Kamera und zittert."
  },
  {
    "id": "0317",
    "file": "https://i.imgur.com/9aUCqnC.png",
    "portuguese": "Foto tirada de baixo do rosto de um gatinho todo branco. Ele olha para a frente com seus olhos verdes e sua boca está levemente entreaberta.",
    "english": "Photo taken from under the face of an all-white kitten. He looks straight ahead with his green eyes and his mouth is slightly parted.",
    "spanish": "Foto tomada debajo de la cara de un gatito completamente blanco. Mira al frente con sus ojos verdes y su boca está ligeramente entreabierta.",
    "german": "Foto unter dem Gesicht eines ganz weißen Kätzchens. Er blickt mit seinen grünen Augen geradeaus und sein Mund ist leicht geöffnet."
  },
  {
    "id": "0318",
    "file": "https://i.imgur.com/OHcBelA.png",
    "portuguese": "Foto do rosto de um gatinho tirada muito de perto da câmera. Está tremida. Seus olhos estão arregalados e sua boca entreaberta trás a sensação de surpresa ou curiosidade.",
    "english": "Photo of a kitten's face taken very close to the camera. It's shaky. His eyes are wide and his mouth is slightly open with a feeling of surprise or curiosity.",
    "spanish": "Foto de la cara de un gatito tomada muy cerca de la cámara. es inestable Sus ojos están muy abiertos y su boca está ligeramente abierta, trayendo una sensación de sorpresa o curiosidad.",
    "german": "Foto des Gesichts eines Kätzchens, das sehr nahe an der Kamera aufgenommen wurde. Es ist wackelig. Seine Augen sind weit und sein Mund leicht geöffnet, was ein Gefühl der Überraschung oder Neugier hervorruft."
  },
  {
    "id": "0319",
    "file": "https://i.imgur.com/SYDxEDk.jpg",
    "portuguese": "Foto de um cão labrador olhando para a câmera de cima para baixo. Ele tem um olhar curioso, com a cabeça um pouco inclinada.",
    "english": "Photo of a labrador dog looking at the camera from above. He has a curious look in his eyes, with his head tilted a little.",
    "spanish": "Foto de un perro labrador mirando a la cámara desde arriba. Tiene una mirada curiosa en sus ojos, con la cabeza un poco inclinada.",
    "german": "Foto eines Labrador-Hundes, der die Kamera von oben betrachtet. Er hat einen neugierigen Ausdruck in seinen Augen, mit leicht geneigtem Kopf."
  },
  {
    "id": "0320",
    "file": "https://i.imgur.com/1AqT5TT.png",
    "portuguese": "Foto de um gato laranja com uma cauda laranja de sereia. Ele está deitado enconstado numa janela e parece não estar gostando muito da fantasia.",
    "english": "Photo of an orange cat with an orange mermaid tail. He's lying against a window and doesn't seem to be enjoying the costume very much.",
    "spanish": "Foto de un gato naranja con cola de sirena naranja. Está recostado contra una ventana y no parece estar disfrutando mucho el disfraz.",
    "german": "Foto einer orangefarbenen Katze mit einem orangefarbenen Meerjungfrauenschwanz. Er liegt an einem Fenster und scheint das Kostüm nicht besonders zu genießen."
  },
  {
    "id": "0321",
    "file": "https://i.imgur.com/v83dakH.jpg",
    "portuguese": "Foto de perto de um gato laranja. Ele está sentado na pia do banheiro e parece estar cheirando a câmera.",
    "english": "Close-up photo of an orange cat. He's sitting on the bathroom sink and seems to be sniffing at the camera.",
    "spanish": "Foto de primer plano de un gato naranja. Está sentado en el lavabo del baño y parece oler la cámara.",
    "german": "Nahaufnahmefoto einer orangefarbenen Katze. Er sitzt auf dem Waschbecken im Badezimmer und scheint in die Kamera zu schnüffeln."
  },
  {
    "id": "0322",
    "file": "https://i.imgur.com/WTbmajb.jpg",
    "portuguese": "Foto de um gato branco e laranja usando umsa camisa amarela do Brasil, com a parte das costas com a bandeira do Brasil e alguns detalhes verdes. Ele está em cima de uma cama.",
    "english": "Photo of a white and orange cat wearing a yellow Brazilian shirt, with the Brazilian flag on the back and some green details. He is on top of a bed.",
    "spanish": "Foto de un gato blanco y naranja con una camiseta amarilla de Brasil, con la bandera de Brasil en la espalda y algunos detalles en verde. Está encima de una cama.",
    "german": "Foto einer weiß-orangefarbenen Katze, die ein gelbes brasilianisches Hemd trägt, mit der brasilianischen Flagge auf dem Rücken und einigen grünen Details. Er liegt auf einem Bett."
  },
  {
    "id": "0323",
    "file": "https://i.imgur.com/mjRCt90.jpg",
    "portuguese": "Foto de um gato preto sentado usando uma echarpe amarela e verde do Brasil. Seus olhos amarelo-esverdeados olham para cima. O fundo é uma janela",
    "english": "Photo of a sitting black cat wearing a yellow and green scarf from Brazil. His yellow-green eyes look up. The background is a window",
    "spanish": "Foto de un gato negro sentado con una bufanda amarilla y verde de Brasil. Sus ojos amarillo verdosos miran hacia arriba. el fondo es una ventana",
    "german": "Foto einer sitzenden schwarzen Katze, die einen gelb-grünen Schal aus Brasilien trägt. Seine gelbgrünen Augen blicken nach oben. Der Hintergrund ist ein Fenster"
  },
  {
    "id": "0324",
    "file": "https://i.imgur.com/DXJE1Jl.jpg",
    "portuguese": "Foto de um Yorkshire usando um crocs branco como chapéu. Ele é peludinho, marrom, encara a câmera de frente com os olhos pretos e mostra a língua. Usa uma coleira vermelha. O fundo é uma parede branca.",
    "english": "Photo of a Yorkshire terrier wearing a white crocs hat. He is furry, brown, faces the camera head on with black eyes and sticks out his tongue. He wears a red collar. The background is a white wall.",
    "spanish": "Foto de un Yorkshire terrier con un sombrero de crocs blanco. Es peludo, moreno, mira de frente a la cámara con ojos negros y saca la lengua. Lleva un collar rojo. El fondo es una pared blanca.",
    "german": "Foto eines Yorkshire-Terriers, der einen weißen Crocs-Hut trägt. Er ist pelzig, braun, blickt mit schwarzen Augen in den Kamerakopf und streckt die Zunge heraus. Trägt einen roten Kragen. Der Hintergrund ist eine weiße Wand."
  },
  {
    "id": "0325",
    "file": "https://i.imgur.com/9NbddBv.jpg",
    "portuguese": "Foto de um pato e uma capivara se encarando. A capivara está na esquerda, com uma das patas para a frente como se estivesse avançando, e o pato, branco, está na direita, olhando de forma ameaçadora. Estão na terra.",
    "english": "Photo of a duck and a capybara facing each other. The capybara is on the left, with one of its paws forward as if advancing, and the duck, white, is on the right, looking menacingly. They are on earth.",
    "spanish": "Foto de un pato y un carpincho uno frente al otro. El capibara está a la izquierda, con una de sus patas hacia adelante como si avanzara, y el pato, blanco, está a la derecha, mirando amenazante. Ellos están en la tierra.",
    "german": "Foto einer Ente und eines Capybara, die sich gegenüberstellen. Das Capybara ist auf der linken Seite, mit einer seiner Pfoten nach vorne, als würde es vorankommen, und die Ente, weiß, ist auf der rechten Seite und sieht bedrohlich aus. Sie sind auf der Erde."
  },
  {
    "id": "0326",
    "file": "https://i.imgur.com/f14SsTp.jpg",
    "portuguese": "Foto de uma capivara num rio com apenas a cabeça e um pedaço das costas para fora. Em cima dela, um pássaro preto, como se a capivara fosse um barco.",
    "english": "Photo of a capybara in a river with just the head and part of the back sticking out. On top of it, a black bird, as if the capybara were a boat.",
    "spanish": "Foto de un carpincho en un río del que sobresale sólo la cabeza y parte de la espalda. Encima, un pájaro negro, como si el carpincho fuera un barco.",
    "german": "Foto eines Wasserschweins in einem Fluss, bei dem nur der Kopf und ein Teil des Rückens herausragen. Darauf ein schwarzer Vogel, als wäre das Capybara ein Boot."
  },
  {
    "id": "0327",
    "file": "https://i.imgur.com/IE4sTty.jpg",
    "portuguese": "Foto de dois coelhinhos (muito pequenininhos) dormindo, um em cima do outro. O de baixo é branco e está virado para a câmera. O de cima é bege e ele se apoia na cabeça do outro. O fundo é um sofá.",
    "english": "Photo of two bunnies (very tiny) sleeping, one on top of the other. The bottom one is white and faces the camera. The top one is beige and it rests on the other's head. The background is a sofa.",
    "spanish": "Foto de dos conejitos (muy pequeños) durmiendo, uno encima del otro. El de abajo es blanco y mira hacia la cámara. El de arriba es beige y descansa sobre la cabeza del otro. El fondo es un sofá.",
    "german": "Foto von zwei Häschen (sehr klein), die übereinander schlafen. Der untere ist weiß und zeigt zur Kamera. Das obere ist beige und ruht auf dem Kopf des anderen. Der Hintergrund ist ein Sofa."
  },
  {
    "id": "0328",
    "file": "https://i.imgur.com/VCw7FBU.jpg",
    "portuguese": "Foto de um gatinho bege com um chapéu do Pikachu. Ele está com cara de bravo, virado para a direita. O Pikachu é um pokemon amarelo com bochecas rosas e uma \"orelha\" pontuda.",
    "english": "Photo of a beige kitten wearing a Pikachu hat. He's looking angry, facing right. Pikachu is a yellow pokemon with pink cheeks and a pointy \"ear\".",
    "spanish": "Foto de un gatito beige con un gorro de Pikachu. Se ve enojado, mirando a la derecha. Pikachu es un Pokémon amarillo con mejillas rosadas y una \"oreja\" puntiaguda.",
    "german": "Foto eines beigefarbenen Kätzchens, das einen Pikachu-Hut trägt. Er sieht wütend aus und blickt nach rechts. Pikachu ist ein gelbes Pokémon mit rosa Wangen und einem spitzen \"Ohr\"."
  },
  {
    "id": "0329",
    "file": "https://i.imgur.com/urhbK3v.jpg",
    "portuguese": "Foto de um gato preso na tela de uma janela, tirada da janela seguinte. Ele faz cara de quem está reclamando (miando), com um dos olhos abertos e o outro semi-fechado prensado à tela.",
    "english": "Photo of a cat trapped in a window screen, taken from the next window. He makes a complaining face (meowing), with one eye open and the other half-closed pressed to the screen.",
    "spanish": "Foto de un gato atrapado en la pantalla de una ventana, tomada desde la ventana de al lado. Hace cara de queja (maullido), con un ojo abierto y el otro medio cerrado pegado a la pantalla.",
    "german": "Foto einer Katze, die in einem Fenstergitter gefangen ist, aufgenommen vom nächsten Fenster. Er macht ein klagendes Gesicht (Miauen), wobei er ein Auge offen und das andere halb geschlossen auf den Bildschirm drückt."
  },
  {
    "id": "0330",
    "file": "https://i.imgur.com/rcwmR6X.jpg",
    "portuguese": "Foto de um gato bege com o focinho branco. Ele está atrás de grades, encarando a câmera com seus olhos amarelos. À sua frente, uma placa com o nome Charlie.",
    "english": "Photo of a beige cat with a white muzzle. He is behind bars, staring at the camera with his yellow eyes. In front of him, a plaque with the name Charlie.",
    "spanish": "Foto de un gato beige con hocico blanco. Está tras las rejas, mirando a la cámara con sus ojos amarillos. Frente a ti, una placa con el nombre de Charlie.",
    "german": "Foto einer beige Katze mit einer weißen Schnauze. Er sitzt hinter Gittern und starrt mit seinen gelben Augen in die Kamera. Vor Ihnen eine Tafel mit dem Namen Charlie."
  },
  {
    "id": "0331",
    "file": "https://i.imgur.com/WZ2DHNh.jpg",
    "portuguese": "Foto de um crocodilo em cima de uma boia em formato de crocodilo, em uma piscinha. A boia está virada para a direita e ele está deitado para a esquerda, de modo que sua cabeça está no rabo da boia de crocodilo.",
    "english": "Photo of a crocodile on top of a crocodile-shaped float in a pool. The float is facing to the right and he is lying to the left, so his head is on the tail of the crocodile float.",
    "spanish": "Foto de un cocodrilo encima de un flotador con forma de cocodrilo en una piscina. El flotador mira hacia la derecha y él está acostado hacia la izquierda, por lo que su cabeza está en la cola del cocodrilo.",
    "german": "Foto eines Krokodils auf einem krokodilförmigen Schwimmer in einem Pool. Der Schwimmer zeigt nach rechts und er liegt nach links, sodass sein Kopf auf dem Schwanz des Krokodils liegt."
  },
  {
    "id": "0332",
    "file": "https://i.imgur.com/wMtKZ0A.jpg",
    "portuguese": "Foto de um gatinho filhote bege com detalhes brancos. Ele está em cima de um tronco de árvore, virado para a direita, e uma mão branca encosta o dedo no topo de sua testa. Seus olhinhos estão fechados e seu rabinho erguido forma um gancho. O fundo mostra uma casa e algumas árvores e está de dia.",
    "english": "Photo of a beige kitten with white details. He is on top of a tree trunk, facing to the right, and a white hand touches the top of his forehead. Its eyes are closed and its tail is raised and forms a hook. The background shows a house and some trees and it's daytime.",
    "spanish": "Foto de un gatito beige con detalles en blanco. Está encima del tronco de un árbol, mirando hacia la derecha, y una mano blanca toca la parte superior de su frente. Sus ojos están cerrados y su cola está levantada y forma un gancho. El fondo muestra una casa y algunos árboles y es de día.",
    "german": "Foto eines beige Kätzchens mit weißen Details. Er steht auf einem Baumstamm, blickt nach rechts, und eine weiße Hand berührt seine Stirn. Seine Augen sind geschlossen und sein Schwanz ist angehoben und bildet einen Haken. Der Hintergrund zeigt ein Haus und einige Bäume und es ist Tag."
  },
  {
    "id": "0333",
    "file": "https://i.imgur.com/mld2stq.jpg",
    "portuguese": "Foto de um cachorrinho bege, parece ser um labrador. Ele está no colo, com cara de sonolento, e usa um chapéu de tubarão cinza, de modo que parece que o tubarão está comendo sua cabeça. O fundo é um teto branco de um quarto.",
    "english": "Photo of a beige puppy, it seems to be a labrador. He's on your lap, looking sleepy, and he's wearing a gray shark hat, so it looks like the shark is eating his head. The background is a white bedroom ceiling.",
    "spanish": "Foto de un cachorro beige, parece ser un labrador. Está en tu regazo, luce somnoliento y lleva un sombrero de tiburón gris, por lo que parece que el tiburón le está comiendo la cabeza. El fondo es el techo de un dormitorio blanco.",
    "german": "Foto eines beigen Welpen, es scheint ein Labrador zu sein. Er liegt auf deinem Schoß, sieht verschlafen aus und trägt einen grauen Haifischhut, also sieht es so aus, als ob der Hai seinen Kopf frisst. Der Hintergrund ist eine weiße Schlafzimmerdecke."
  },
]

module.exports.data = data