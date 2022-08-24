const data = [
  {
    "id": "0001",
    "file": "https://i.imgur.com/RS7BPaf.jpg",
    "altPT": "A imagem apresenta um gato branco deitado sobre um pedaço de madeira, de frente para a câmera. Seus olhos estão fechados e ele possui um sorrisinho no rosto, além de flores laranjas sobre a cabeça. O fundo é o céu azul e algumas árvores.",
    "altEN": "The image features a white cat lying on a piece of wood, facing the camera. His eyes are closed and he has a little smile on his face, as well as orange flowers on his head. The background is blue sky and some trees."
  },
  {
    "id": "0002",
    "file": "https://i.imgur.com/iaBlbkI.png",
    "altPT": "A imagem mostra um cachorro da raça golden retriever. Ele possui o pelo bege, meio dourado, e esta deitado no chão de madeira clara. Está com a boca aberta, quase que sorrindo. Usa uma coleira escrito \"Bear\" e possui beijos de batom por ele inteiro.",
    "altEN": "The image shows a golden retriever dog. He has beige, half-golden fur, and is lying on the light wooden floor. He has his mouth open, almost smiling. He wears a collar that says \"Bear\" and has lipstick kisses all over him."
  },
  {
    "id": "0003",
    "file": "https://i.imgur.com/oae8w28.png",
    "altPT": "A imagem mostra um ouriço filhote. Ele está sentado. Usa um chapéu de morango, vermelho com bolinhas amarelas, e segura um moranguinho de pano com as patinhas que seriam as mãos. Também parece estar sorrindo. O fundo é branco.",
    "altEN": "The image shows a baby hedgehog. He's sitting. He wears a strawberry hat, red with yellow polka dots, and holds a little cloth strawberry with the paws that would be his hands. He also seems to be smiling. The background is white."
  },
  {
    "id": "0004",
    "file": "https://i.imgur.com/4xkM2kw.png",
    "altPT": "Foto da parte superior de um gato laranja. Ele está com a cara afastada da câmera. Seus olhos são verdes, o nariz é rosa com sardas e sua língua está com a ponta pra fora. O fundo é uma parede branca.",
    "altEN": "Photo of the upper part of an orange cat. He has his face away from the camera. His eyes are green, his nose is pink with freckles and his tongue is sticking out. The background is a white wall."
  },
  {
    "id": "0005",
    "file": "https://i.imgur.com/3GmMWMD.jpg",
    "altPT": "Foto de um hamster cinza bem pequeno. Ele está dentro de um potinho de comida, segurando um pedaço de cenoura com as mãos e mordendo. Está meio deitado para a direita. É bem peludinho e redondinho.",
    "altEN": "Photo of a very small gray hamster. He's inside a little food jar, holding a piece of carrot in his hands and biting into it. He's half lying to the right. It's very fluffy and round."
  },
  {
    "id": "0006",
    "file": "https://i.imgur.com/bkFxJQA.jpg",
    "altPT": "Foto de um patinho dormindo por cima de outro. Ele apoia a cabeça no irmãozinho. São amarelos e bem pequenos, mas seu bico rosa é grande. Em cima da sua cabeça há uma folha em formato de coração. O fundo está desfocado.",
    "altEN": "Photo of a duckling sleeping on top of another. He rests his head on his little brother. They are yellow and very small, but their pink beak is large. On top of your head is a heart-shaped leaf. The background is blurred."
  },
  {
    "id": "0007",
    "file": "https://i.imgur.com/UUxaA70.jpg",
    "altPT": "A foto mostra um sapinho de frente para uma mini penteadeira, se olhando no espelho. É verde e de tamanho médio, e está de costas. No espelho, sua cara está séria. Usa um lacinho rosa acima da cabeça. A penteadeira é amarela e o fundo é branco.",
    "altEN": "The photo shows a little frog in front of a mini dressing table, looking in the mirror. It is green and of medium size, and it is on its back. In the mirror, her face is serious. Wear a pink bow above your head. The dressing table is yellow and the background is white."
  },
  {
    "id": "0008",
    "file": "https://i.imgur.com/LWJ6xQV.jpg",
    "altPT": "A imagem mostra um coelhinho branco bem pequeno e peludinho. Ele está encostado em uma árvore, comendo um pedacinho de grama.",
    "altEN": "The picture shows a very small and furry white bunny. He's leaning against a tree, eating a bit of grass."
  },
  {
    "id": "0009",
    "file": "https://i.imgur.com/z7lsUIM.jpg",
    "altPT": "A foto mostra um cachorro bebendo água na mão de uma pessoa. Ele possui o pelo baixo, branco no corpo e bege na barriga, e a ponta do fucinho preta. Seus olhos estão fixos na mão, que está em formato de concha e recebe água de uma garrafa plástica. É possível ver sua língua. O fundo possui alguns matos, porém está desfocado.",
    "altEN": "The photo shows a dog drinking water from a person's hand. It has low fur, white on the body and beige on the belly, and the tip of the muzzle is black. His eyes are fixed on his hand, which is cupped and receives water from a plastic bottle. You can see his language. The background has some weeds, but is blurred."
  },
  {
    "id": "0010",
    "file": "https://i.imgur.com/Kg1qloq.jpg",
    "altPT": "A foto mostra um furão pequeno e branco deitado sobre algumas cobertas cinzas. Ele usa um suéter amarelo e suas patinhas (mãos) estão juntas. Sua cabeça está meio de lado e seus olhos estão quase se fechando.",
    "altEN": "The photo shows a small, white ferret lying on some gray blankets. He wears a yellow sweater and his paws (hands) are together. His head is half to the side and his eyes are almost closing."
  },
  {
    "id": "0011",
    "file": "https://i.imgur.com/8OtCaWX.jpg",
    "altPT": "A foto mostra um sirizinho. Ele é bem pequeno e está levemente de lado, é branco em baixo e vermelho em cima. Suas garras estão para o alto e parece que está comemorando, e usa um chapéu de caubói. Está sobre uma mesa branca, e há um vasinho de suculentas atrás dele e uma janela.",
    "altEN": "The photo shows a little crab. It is quite small and is slightly to the side, it is white on the bottom and red on the top. His claws are up and he looks like he's celebrating, and he's wearing a cowboy hat. It's on a white table, and there's a vase of succulents behind it and a window."
  },
  {
    "id": "0012",
    "file": "https://i.imgur.com/4bhq1yy.jpg",
    "altPT": "A foto mostra uma ovelhinha. Ela é pequena e branca, e está no meio da grama, cheirando algumas flores amarelas.",
    "altEN": "The photo shows a little sheep. She's small and white, and she's in the middle of the grass, smelling some yellow flowers."
  },
  {
    "id": "0013",
    "file": "https://i.imgur.com/ZOAXesY.jpg",
    "altPT": "A foto foi tirada do alto e mostra duas gatinhas deitadas. A primeira é preta, bem peluda e com olhar verdes. À direita, colada com ela, está uma gata branca com manchas pretas no topo da cabeça, no fim do corpo e no rabo, ela é mais longa e magra e possui o pelo mais colado, e seus olhos são amarelos. Ambas estão olhando para a câmera. Ao seu redor, vasos de plantas.",
    "altEN": "The photo was taken from above and shows two kittens lying down. The first is black, very hairy and with green eyes. On the right, next to her, is a white cat with black spots on the top of her head, at the end of her body and on her tail, she is longer and thinner and has a tighter coat, and her eyes are yellow. Both are looking at the camera. Around him, potted plants."
  },
  {
    "id": "0014",
    "file": "https://i.imgur.com/8cUNEkZ.png",
    "altPT": "A foto mostra uma iguana da metade do corpo até a cabeça; recebendo carinho. Ela é de um verde bem vivo, sendo menos vibrante no papo. Seus olhos estão fechados e ela está levantando a cabeça em direção à mão que lhe faz carinho. O fundo é uma porta de madeira.",
    "altEN": "The photo shows an iguana from half its body to its head; receiving affection. It is of a very vivid green, being less vibrant in the chat. Her eyes are closed and she is lifting her head towards the caressing hand. The background is a wooden door."
  },
  {
    "id": "0015",
    "file": "https://i.imgur.com/freKZeK.jpg",
    "altPT": "A foto mostra um panda em cima de uma árvore. Ele é pequeno e gordinho, branco com as patas e o arredor dos olhos pretos. Está dormindo inclinado em um galho da árvore, abraçando-o. É possível ver o resto da árvore, porém o fundo está desfocado.",
    "altEN": "The photo shows a panda on top of a tree. He is small and chubby, white with black paws and eyes around him. He is sleeping leaning on a tree branch, hugging him. You can see the rest of the tree, but the background is blurred."
  },
  {
    "id": "0016",
    "file": "https://i.imgur.com/AxqbmeJ.jpg",
    "altPT": "A foto mostra um coelhinho e um patinho. Os dois são filhotes e estão em um campo. O coelhinho, que está na esquerda, é preto com algumas manchinhas brancas. Seu olho pretinho está aberto e suas orelhas levantadas, e está meio de lado. O patinho está ao lado, quase atrás. Suas peninhas amarelas estão levemente arrepiadas. No campo há também algumas flores brancas.",
    "altEN": "The photo shows a bunny and a duckling. The two are puppies and are in a field. The bunny, which is on the left, is black with some white spots. His little black eye is open and his ears are up, and he's half on his side. The duckling is to the side, almost behind. Its yellow feathers are slightly ruffled. In the field there are also some white flowers."
  },
  {
    "id": "0017",
    "file": "https://i.imgur.com/4HuCZzu.png",
    "altPT": "A foto mostra um gatinho tricolor deitado em cima de um livro. Ele é branco com manchas beges e pretas, e está dormindo com a cabeça sobre o livro de capa preta, cujo não dá para ver o título.",
    "altEN": "The photo shows a tricolor kitten lying on top of a book. He's white with beige and black spots, and he's sleeping with his head over the black-covered book, whose title you can't see."
  },
  {
    "id": "0018",
    "file": "https://i.imgur.com/zjgRPG8.png",
    "altPT": "A foto mostra duas mãos segurando um hamster bege com um chapéu de caubói. Ele é bem pequeno e gordinho. Suas mãos estão apoiadas em uma das mãos da pessoa e seus olhinhos estão fechados. O fundo é um móvel e alguns brinquedos para hamster, desfocados.",
    "altEN": "The photo shows two hands holding a beige hamster in a cowboy hat. He is very small and chubby. His hands are resting on one of the person's hands and his little eyes are closed. The background is a piece of furniture and some hamster toys, out of focus."
  },
  {
    "id": "0019",
    "file": "https://i.imgur.com/Rj2XEVc.jpg",
    "altPT": "A foto mostra uma calopsita amarela. Ela está de frente para a cama e usa um chapéu verde de sapinho feito de crochê, com um olho de cada lado do mesmo. O fundo é um armário branco desfocado.",
    "altEN": "The photo shows a yellow cockatiel. She is facing the bed and wears a crocheted green little frog hat, with an eye on each side of it. The background is a blurred white cabinet."
  },
  {
    "id": "0020",
    "file": "https://i.imgur.com/LCMcA1F.png",
    "altPT": "A foto mostra um cachorro semelhante a um labrador, pequeno e bege. Ele está andando em direção à câmera com uma flor roxa na boca. Seu rosto está levemente virado para a esquerda e seus rabinho está balançando. O fundo é um caminho de terra em meio à grama.",
    "altEN": "The photo shows a small, beige, labrador-like dog. He is walking towards the camera with a purple flower in his mouth. His face is turned slightly to the left and his tail is wagging. The background is a dirt path through the grass."
  },
  {
    "id": "0021",
    "file": "https://i.imgur.com/nLvv2SB.jpg",
    "altPT": "A foto mostra dois patinhos filhotes de costas. O primeiro, da esquerda, é todo amarelinho. O da direita, mais magrinho, é amarelo e marrom, e possui o olho maior. Ambos estão olhando para algum lugar fora da câmera. O chão é branco e ao fundo há uma janela mostrando algumas árvores.",
    "altEN": "The photo shows two baby ducklings from the back. The first one, on the left, is all yellow. The one on the right, thinner, is yellow and brown, and has the biggest eye. Both are looking somewhere off camera. The floor is white and in the background there is a window showing some trees."
  },
  {
    "id": "0022",
    "file": "https://i.imgur.com/rEpcW1c.jpg",
    "altPT": "A foto mostra uma vaquinha peluda. Ela é marrom, quase bege, e possui as patinhas curtas. Está de frente para a câmera e acima da cabeça o seu pelo está levemente bagunçado. O fundo é um campo verde e o céu, que está rosado.",
    "altEN": "The photo shows a furry baby cow. She is brown, almost beige, and has short paws. She is facing the camera and above her head her fur is slightly messy. The background is a green field and the sky, which is pink."
  },
  {
    "id": "0023",
    "file": "https://i.imgur.com/AaD7FfX.jpg",
    "altPT": "A foto mostra uma pombinha branca deitada em um gramado. Ela é gordinha e está cheirando uma flor branca bem pequenininha, estendida a ela por uma mão. O fundo mostra algumas árvores desfocadas.",
    "altEN": "The photo shows a white dove lying on a lawn. She is chubby and is smelling a very tiny white flower, held out to her by a hand. The background shows some blurred trees."
  },
  {
    "id": "0024",
    "file": "https://i.imgur.com/8KaF4xi.jpg",
    "altPT": "A foto mostra uma pombinha branca deitada em um gramado. Sua cabeça está abaixada e a florzinha branca agora está sobre ela.",
    "altEN": "The photo shows a white dove lying on a lawn. Her head is down and the little white flower is now on her."
  },
  {
    "id": "0025",
    "file": "https://i.imgur.com/WNprrN8.jpg",
    "altPT": "A foto mostra um gato sphynx, conhecido como gato pelado. Ele é marrom e bege, possuindo algumas partes mais escurar e algumas mais claras. Aparece da metade para cima e possui orelhas grandes. Seu olhos são azuis bem claros e ele está olhando para fora da câmera. Uma mão branca usando um casaco encosta de leve em seu pescoço. Em um dos dedos há um anel cuja pedra é da mesma cor dor olhos do gato.",
    "altEN": "The photo shows a sphynx cat, known as a hairless cat. It is brown and beige, with some darker parts and some lighter parts. It appears from the middle up and has large ears. His eyes are very light blue and he is looking off camera. A white hand wearing a coat touches his neck lightly. On one of his fingers is a ring whose stone is the same color as the cat's eyes."
  },
  {
    "id": "0026",
    "file": "https://i.imgur.com/fwaJd9l.jpg",
    "altPT": "A foto mostra um guaxinim em um gramadinho. Ele é bem peludinho, marrom com a cara bege e manchas pretas ao redor dos olhos, que são pretos como duas jabuticabas. Em cima de sua cabeça há uma coroa de flores brancas.",
    "altEN": "The photo shows a raccoon in a small lawn. He is very hairy, brown with a beige face and black spots around his eyes, which are as black as two jabuticabas. On top of her head is a wreath of white flowers."
  },
  {
    "id": "0027",
    "file": "https://i.imgur.com/QUBbCvL.jpg",
    "altPT": "A foto mostra um cachorrinho em um carrinho de supermercado vermelho. Ele é bege e pequeno, e está sentado na área para bebês. Suas patinhas traseiras estão encaixadas no buraco das pernas e suas patinhas dianteiras seguram no carrinho. Seus olhos são pretos e encaram algo fora da câmera. O fundo está desfocado.",
    "altEN": "The photo shows a puppy in a red grocery cart. He's beige and small, and he's sitting in the baby area. Its back paws are fitted into the leg hole and its front paws hold the stroller. His eyes are black and staring at something off camera. The background is blurred."
  },
  {
    "id": "0028",
    "file": "https://i.imgur.com/VjqOiSL.jpg",
    "altPT": "A foto mostra um furão em uma banheira, podendo ser visto apenas da metade para cima. Seu pelo branco está molhado e arrepiado, com um pouco de espuma, também presente no resto da banheira. Seus olhos vermelhos olham para algum lugar fora da câmera, à esquerda.",
    "altEN": "The photo shows a ferret in a bathtub, which can only be seen from the middle up. His white fur is wet and ruffled, with a little foam, also present in the rest of the tub. Its red eyes look somewhere off-camera to the left."
  },
  {
    "id": "0029",
    "file": "https://i.imgur.com/R31vPob.jpg",
    "altPT": "A foto mostra um panda vermelho dando língua. Ele se assemelha à um guaxinim, possuindo a cabeça maior. Sua pelagem é laranja em cima e preta em baixo, e ele possui algumas partes brancas em volta do fucinho e perto dos olhos. Seus olhos estão levemente fechados. À sua frente há alguns matinhos. O fundo é bege, porém está desfocado.",
    "altEN": "The photo shows a red panda sticking out its tongue. It resembles a raccoon, having a larger head. Its fur is orange on top and black on the bottom, and it has some white patches around its muzzle and near its eyes. His eyes are slightly closed. In front of him are some bushes. The background is beige, but it's out of focus."
  },
  {
    "id": "0030",
    "file": "https://i.imgur.com/w2H25lR.jpg",
    "altPT": "Uma cadela de pelos castanho escuro bem rentes ao corpo. Seu rosto e suas patas são cor de caramelo e a cachorrinha possui olhos castanhos e rabo e focinho preto, e está olhando para cima.  O chão do ambiente é marrom e a parede é branca.",
    "altEN": "A dog with dark brown fur close to her body. Its face and paws are caramel color and the little dog has brown eyes and a black tail and muzzle, and is looking up. The room floor is brown and the wall is white."
  },
  {
    "id": "0031",
    "file": "https://i.imgur.com/PLWILL0.jpg",
    "altPT": "A foto mostra um sapinho verde e bem pequeno na mão de uma pessoa. Ele é cerca de um quarto do tamanho da palma e possui uma flor maior do que o mesmo na cabeça, em um tom bem claro de rosa. A pessoa que o segura usa luva. O fundo está desfocado.",
    "altEN": "The photo shows a very small, green frog on a person's hand. It is about a quarter the size of the palm and has a flower larger than the palm on its head, in a very light shade of pink. The person holding it wears gloves. The background is blurred."
  },
  {
    "id": "0032",
    "file": "https://i.imgur.com/AylhXLl.jpg",
    "altPT": "A foto mostra uma rolinha em uma janela. Ela está de lado e bem encolhidinha, olhando janela afora. Suas penas são marrons. O fundo mostra algumas árvores desfocadas.",
    "altEN": "The photo shows a dove in a window. She's on her side and curled up, looking out the window. Her feathers are brown. The background shows some blurred trees."
  },
  {
    "id": "0033",
    "file": "https://i.imgur.com/2WAcLHD.jpg",
    "altPT": "A foto mostra um gatinho bege bem claro, com a parte de baixo branca. Ele está enrolado em um lençol branco, então só da para ver o seu rosto. Seus olhos pretos são bem grandes e estão dilatados e também não é possível ver as suas orelhas. O fundo é uma cama e uma parede bege.",
    "altEN": "The photo shows a very light beige cat, with a white underside. He's wrapped in a white sheet, so you can only see his face. Its black eyes are very large and dilated and it is also not possible to see its ears. The background is a bed and a beige wall."
  },
  {
    "id": "0034",
    "file": "https://i.imgur.com/dcnKE3A.jpg",
    "altPT": "A foto mostra um ouriço deitado de barriga para cima em um cobertor colorido. Ele é bem pequeno e segura um mini violão com as mãos. Está encarando a câmera e sua boca está aberta como se estivesse sorrindo.",
    "altEN": "The photo shows a hedgehog lying on its back on a colorful blanket. He is very small and holds a mini guitar in his hands. He's facing the camera and his mouth is open as if he's smiling."
  },
  {
    "id": "0035",
    "file": "https://i.imgur.com/SDQqaYR.jpg",
    "altPT": "A foto mostra um coelhinho bege agachado no chão. Suas orelhinhas estão caídas ao lado da cabeça e está levemente de lado, olhando para algo fora da câmera. Ao fundo, há grama e algumas flores rosas.",
    "altEN": "The photo shows a beige bunny crouching on the floor. Her little ears are drooping to the side of her head and she's slightly to one side, looking at something off-camera. In the background, there is grass and some pink flowers."
  },
  {
    "id": "0036",
    "file": "https://i.imgur.com/VDFRUHn.jpg",
    "altPT": "A foto mostra uma tartaruguinha na mão de uma pessoa. Seu casco possui tons beges e marrons e ela está abaixada comendo alguns matinhos.",
    "altEN": "The photo shows a little turtle in a person's hand. Her hull has beige and brown tones and she is bent over eating some weeds."
  },
  {
    "id": "0037",
    "file": "https://i.imgur.com/SatLmEX.jpg",
    "altPT": "A foto mostra um hamster dentro de uma caneca vermelha do starbucks. Ele é bege e está comendo algo não-identificável, segurando com as duas mãos para levar à boca. O fundo está desfocado.",
    "altEN": "The photo shows a hamster inside a red starbucks mug. He is beige and is eating something unidentifiable, holding it with both hands to bring it to his mouth. The background is blurred."
  },
  {
    "id": "0038",
    "file": "https://i.imgur.com/jSnvfcA.jpg",
    "altPT": "A foto mostra uma cabrinha bege em uma caixa de madeira, em pé com a cabeça para fora. Ela possui alguns pelos brancos nas pernas e no fucinho. Suas orelhas são grandes e está olhando para a câmera com os olhinhos pretos. Em sua cabeça há algumas flores azuis.",
    "altEN": "The photo shows a beige goat in a wooden box, standing with its head out. She has some white hairs on her legs and muzzle. Her ears are big and she is looking at the camera with her little black eyes. On her head are some blue flowers."
  },
  {
    "id": "0039",
    "file": "https://i.imgur.com/DOUPx5F.jpg",
    "altPT": "A foto mostra um gatinho tricolor dentro de um pote transparente de bala. Ele é branco com marrom e preto e está enrolado dentro do pote. Seus olhos amarelos estão bem dilatados. O fundo é um cômodo com algumas caixas de papelão.",
    "altEN": "The photo shows a tricolor kitten inside a transparent candy jar. It is white with brown and black and is rolled up inside the pot. His yellow eyes are well dilated. The bottom is a room with some cardboard boxes."
  },
  {
    "id": "0040",
    "file": "https://i.imgur.com/Hbvkb6N.jpg",
    "altPT": "A foto mostra um gato branco dentro de pote de vidro circular, menos na base e maior no topo. Seu rabo é muito peludo e está para fora do pote, e sua cabeça está levemente achatada contra o vidro. O fundo é uma parede bege.",
    "altEN": "The photo shows a white cat inside a circular glass pot, less at the base and bigger at the top. Its tail is very furry and sticks out of the pot, and its head is slightly flattened against the glass. The background is a beige wall."
  },
  {
    "id": "0041",
    "file": "https://i.imgur.com/8Iw1ZMs.jpg",
    "altPT": "A foto mostra um gato bege bem peludo dentro de um pote circular. Ele está de frente e mal cabe no pote de vidro, estando com o rabo e metade da cabeça para fora. Sua carinha é achatada e sua boca está colada no vidro.",
    "altEN": "The photo shows a very furry beige cat inside a circular pot. He is facing forward and barely fits in the glass jar, with his tail and half of his head sticking out. His face is flattened and his mouth is glued to the glass."
  },
  {
    "id": "0042",
    "file": "https://i.imgur.com/PpDSbkh.jpg",
    "altPT": "A foto mostra um gato branco bem peludo dormindo dentro de uma cesta circular cinza. Foi tirada de cima. O gato está completamente redondo, sendo possível diferenciar apenas o seu rostinho. Uma luz o ilumina. O fundo é um tapete meio esverdeado.",
    "altEN": "The photo shows a furry white cat sleeping inside a gray circular basket. It was taken from above. The cat is completely round, and it is only possible to distinguish its face. A light illuminates you. The background is a greenish carpet."
  },
  {
    "id": "0043",
    "file": "https://i.imgur.com/cf5GbZT.jpg",
    "altPT": "Gatinho deitado dentro de um pote retangular transparente. Ele é branco em baixo e bege em cima. Sua cabeça está encostada na lateral direita do vidro e suas patinhas estão prensadas contra o mesmo.",
    "altEN": "Kitten lying inside a transparent rectangular pot. It is white on the bottom and beige on top. His head is leaning against the right side of the glass and his paws are pressed against it."
  },
  {
    "id": "0044",
    "file": "https://i.imgur.com/6rtCa3W.jpg",
    "altPT": "Gatinho dentro de um balde transparente. Ele é branco em baixo e cinza em cima, com umas listras mais escuras. Está com cara de mau, os olhos, fora do balde e levemente abertos, são verdes. Suas patinhas estão prensadas contra o material do balde.",
    "altEN": "Kitten inside a transparent bucket. It is white on the bottom and gray on top, with darker stripes. He looks mean, his eyes, out of the bucket and slightly open, are green. Its paws are pressed against the material of the bucket."
  },
  {
    "id": "0045",
    "file": "https://i.imgur.com/7SPA5mZ.jpg",
    "altPT": "Gatinho sentado dentro de uma panela em cima de um fogão (desligado, claro). Ele é marrom com algumas manchas pretas, e a parte de baixo é branca. Está olhando para a câmera com a cabeça levemente virada. O fogão é branco, igualmente à parede.",
    "altEN": "Kitten sitting inside a pot on top of a stove (off, of course). It is brown with some black spots, and the underside is white. She is looking at the camera with her head turned slightly. The stove is white, similar to the wall."
  },
  {
    "id": "0046",
    "file": "https://i.imgur.com/RoNmRmk.jpg",
    "altPT": "Gatinho dentro de uma caixa de papelão. Ele está meio de lado, meio com a barriga para cima. É cinza com manchas pretas e suas patas e barriga são brancos. Suas patas dianteiras estão esticadas acima da cabeça e ele está olhando para cima. O fundo é um chão de madeira e um tapete.",
    "altEN": "Kitten inside a cardboard box. He's half on his side, half belly up. It is gray with black spots and its paws and belly are white. His front paws are stretched above his head and he is looking up. The background is a wooden floor and a rug."
  },
  {
    "id": "0047",
    "file": "https://i.imgur.com/eW5YE7t.jpg",
    "altPT": "Gatinho branco dormindo dentro de uma piada de banheiro, também branca. Ele é bem peludo e está um pouco sujo. Está bem encolhido e com um de seus olhos azuis abertos, olhando para a câmera. Sua pata esconde levemente o seu rosto.",
    "altEN": "White kitten sleeping inside a bathroom joke, also white. He's very hairy and a little dirty. He's curled up tight and with one of his blue eyes open, looking at the camera. His paw slightly hides his face."
  },
  {
    "id": "0048",
    "file": "https://i.imgur.com/q0ivdBk.jpg",
    "altPT": "Gatinho dormindo dentro de um aquário redondo. Ele é peludo, cinza claro com algumas manchas mais escuras no rosto, patas e orelhas. Sua cabeça está para fora e ele está encarando a câmera. Uma de suas patas está apoiada no vidro. O fundo é um carpete bege.",
    "altEN": "Kitten sleeping inside a round aquarium. He is furry, light gray with some darker spots on his face, paws, and ears. His head is out and he's facing the camera. One of his paws is resting on the glass. The background is a beige carpet."
  },
  {
    "id": "0049",
    "file": "https://i.imgur.com/n2OHK3y.jpg",
    "altPT": "A imagem mostra um gatinho laranja bem pequeno dentro de um grande pote com moedas. Ele está sentado, olhando para a câmera, e está embaçado devido ao vidro. Sua barriga é branca e ele não é muito peludo.",
    "altEN": "The image shows a very small orange kitten inside a large jar of coins. He's sitting, looking at the camera, and it's fogged up by the glass. His belly is white and he is not very hairy."
  },
  {
    "id": "0050",
    "file": "https://i.imgur.com/dvGbpcH.jpg",
    "altPT": "A foto mostra Luna, uma gata preta dentro de uma caixa de papelão. Ela aparece do \"busto\" para cima, é bem peluda e seus olhos verdes estão um pouco dilatados. O fundo é uma parede bege e um sofá cinza, com alguns porta retratos.",
    "altEN": "The photo shows Luna, a black cat inside a cardboard box. She appears from the \"bust\" up, is very hairy and her green eyes are a little dilated. The background is a beige wall and a gray sofa, with some picture frames."
  },
  {
    "id": "0051",
    "file": "https://i.imgur.com/AX6EqqK.jpg",
    "altPT": "A foto mostra Luna, uma gata preta dentro de uma caixa de papelão. Ela aparece do \"busto\" para cima, é bem peluda e seus olhos verdes estão um pouco dilatados. Ela olha para o lado, um pouco vesga. O fundo é uma parede bege e um sofá cinza, com alguns porta retratos.",
    "altEN": "The photo shows Luna, a black cat inside a cardboard box. She appears from the \"bust\" up, is very hairy and her green eyes are a little dilated. She looks to the side, a little cross-eyed. The background is a beige wall and a gray sofa, with some picture frames."
  },
  {
    "id": "0052",
    "file": "https://i.imgur.com/C6nAjKP.jpg",
    "altPT": "A foto mostra um gatinho cinza dentro de um pote de vidro. Ele está apertado, com metade da cabeça para fora e o olho levemente esbugalhado. Um outro gato, branco, tenta apertá-lo para também entrar no pote.",
    "altEN": "The photo shows a gray kitten inside a glass jar. He's tight, with half his head out and his eye slightly bulging. Another cat, white, tries to squeeze him to also enter the pot."
  },
  {
    "id": "0053",
    "file": "https://i.imgur.com/XRWrRrH.jpg",
    "altPT": "Gatinho branco dentro de um pote redondo de vidro, parecido com um aquário. Ele é bem peludo e mal cabe no pote. Seus olhos estão para fora, bem dilatados.",
    "altEN": "White kitten inside a round glass pot, similar to an aquarium. He is very furry and barely fits in the pot. His eyes are out, well dilated."
  },
  {
    "id": "0054",
    "file": "https://i.imgur.com/lLUBQOs.jpg",
    "altPT": "A foto mostra um gato cinza dentro de um pote retangular esbranquiçado. Sua cabeça, branca, está apoiada na lateral do pote, formando uma pose engraçada. Seus olhos verdes estão arregalados e sua boca está entreaberta. O fundo é um piso de madeira.",
    "altEN": "The photo shows a gray cat inside an off-white rectangular pot. His head, white, is leaning against the side of the pot, forming a funny pose. Her green eyes are wide and her mouth is parted. The background is a wooden floor."
  },
  {
    "id": "0055",
    "file": "https://i.imgur.com/h9iSrPa.jpg",
    "altPT": "Gatinho bebendo água em uma torneira. Sua barriga e cabeça são brancas e a parte de cima é marrom com manchas escuras. Seus olhos estão levemente fechados e sua linguinha está à mostra. O fundo está desfocado.",
    "altEN": "Kitten drinking water from a faucet. Its belly and head are white and the upper part is brown with dark spots. His eyes are slightly closed and his tongue is showing. The background is blurred."
  },
  {
    "id": "0056",
    "file": "https://i.imgur.com/yw1v6KB.jpg",
    "altPT": "Patinho filhote amarelo dormindo de pé. Ele está encolhidinho, com os olhos fechados, e a foto da a impressão de que está tombando. Suas penas estão arrepiadas e a parte de baixo está úmida.",
    "altEN": "Yellow baby duckling sleeping standing up. He's curled up, eyes closed, and the photo looks like he's toppling over. His feathers are ruffled and his underside is damp."
  },
  {
    "id": "0057",
    "file": "https://i.imgur.com/1AD0WCX.png",
    "altPT": "Gabázinho enrolado em uma toalha, aparecendo apenas da cabeça para cima. Seu focinho está bem próximo da câmera e sua pelagem é bege com algumas partes pretas. Seus olhos estão entreabertos e sua orelha é bem grande. Segura a toalha rosa com uma de suas patinhas.",
    "altEN": "Possum wrapped in a towel, showing only from the head up. Its muzzle is very close to the camera and its coat is beige with some black parts. His eyes are half-closed and his ear is quite large. Hold the pink towel with one of your paws."
  },
  {
    "id": "0058",
    "file": "https://i.imgur.com/dEA5LKL.jpg",
    "altPT": "A foto mostra um beija-flor se alimentando. Ele é bem pequeno, com as penas em alguns tons de verde. Seu rosto e asas possuem penas pretas. Está em movimento, fazendo suas asas estarem borradas. Seu bico está em uma flor roxa e rosa, próxima de algumas outras iguais. O fundo está desfocado.",
    "altEN": "The photo shows a hummingbird feeding. He is quite small, with feathers in a few shades of green. Its face and wings have black feathers. It's in motion, making its wings blurry. Its beak is in a purple and pink flower, next to some other similar ones. The background is blurred."
  },
  {
    "id": "0059",
    "file": "https://i.imgur.com/OXbDGqn.jpg",
    "altPT": "Cachorra porte médio branca deitada em uma cama. O sol que entra pela janela bate apenas em sua cabeça e suas patas dianteiras. Ela está em cima da cama e da pra ver a sombra da grade da janela. Está deitada de forma meio curvada e olhando diretamente para a direção de onde vem a luz.",
    "altEN": "Medium-sized white dog lying on a bed. The sun coming in through the window only hits its head and front paws. She is on top of the bed and you can see the shadow of the window grille. She is lying hunched over and looking directly in the direction the light is coming from."
  },
  {
    "id": "0060",
    "file": "https://i.imgur.com/pA7DN0l.jpg",
    "altPT": "Uma vaquinha filhote de pé em meio à grama. Ela é branca com manchinhas pretas, peludinha, e está olhando para a esquerda, para um pedaço maior de grama (provavelmente pensando em comer).",
    "altEN": "A baby cow standing in the grass. She is white with black spots, furry, and is looking to her left at a larger patch of grass (probably thinking about eating)."
  },
  {
    "id": "0061",
    "file": "https://i.imgur.com/bIf8ulG.jpg",
    "altPT": "Coelhinho bege em cima de uma cama bagunçada. Ele é bem pequeno e está virado para a esquerda, com as duas orelhas em pé. Apenas um de seus olhinhos pretos aparece na imagem, olhando para próximo da cama.",
    "altEN": "Beige bunny on top of a messy bed. He is quite small and is facing to the left, with both ears pricked up. Only one of her little black eyes appears in the image, looking at the bed next to her."
  },
  {
    "id": "0062",
    "file": "https://i.imgur.com/2AOesa7.png",
    "altPT": "A foto levemente tremida mostra um gato de porte médio branco com manchas marrons na cabeça. Seus olhos azuis olham para baixo e está em cima de um sofá azul escuro. No sofá tem algumas almofadas, ao fundo tem um chão branco, duas plantas e um quadro na parede amarelada.",
    "altEN": "The slightly blurred photo shows a medium-sized white cat with brown spots on its head. His blue eyes look down and he's on top of a dark blue couch. On the sofa there are some pillows, in the background there is a white floor, two plants and a picture on the yellowed wall."
  },
  {
    "id": "0063",
    "file": "https://i.imgur.com/egHgS7m.jpg",
    "altPT": "Gato cinza e branco gordo deitado em cima da bunda de gato escaminha peludo. O gato cinza se encontra mostrando a barriga e de olhos fechados, enquanto o outro possui os olhos verdes e abertos. Os dois estão em cima de uma cama e a parede atrás deles é branca.",
    "altEN": "Fat gray and white cat lying on top of furry scaling cat ass. The gray cat is showing its belly and eyes closed, while the other has green and open eyes. The two are on top of a bed and the wall behind them is white."
  },
  {
    "id": "0064",
    "file": "https://i.imgur.com/HGXn9Jx.jpg",
    "altPT": "Foto de um hamster bege bem comprido, com o pelo ralo. Ele está de frente para um mini-notebook da apple, encarando a tela com seus olhinhos pretos. O fundo é uma poltrona verde de couro.",
    "altEN": "Photo of a very long beige hamster, with thin fur. He's in front of an apple mini-notebook, staring at the screen with his little black eyes. The background is a green leather armchair."
  },
  {
    "id": "0065",
    "file": "https://i.imgur.com/8M9oTpf.jpg",
    "altPT": "Foto de um coelhinho bege usando um pijama azul claro que consiste de uma blusinha de botão e um chapéu no estilo papai noel. Ele está em uma caminha de madeira com travesseiro e lençóis quadriculados na cor azul. Tem também uma almofada amarela de estrela e uma ovelhinha de pelúcia. Sua patinha segura na beirada da cama.",
    "altEN": "Photo of a beige bunny wearing light blue pajamas consisting of a button-up top and a Santa-style hat. He is on a wooden bed with a pillow and blue checkered sheets. He also has a yellow star pillow and a plush sheep. His paw grips the edge of the bed."
  },
  {
    "id": "0066",
    "file": "https://i.imgur.com/yCP0i0G.jpg",
    "altPT": "Foto de um coelhinho bege usando um pijama azul claro que consiste de uma blusinha de botão e um chapéu no estilo papai noel. Ele está em uma caminha de madeira com travesseiro e lençóis quadriculados na cor azul. Ele está deitado no travesseiro, com os olhinhos fechados. O fundo é uma parede bege.",
    "altEN": "Photo of a beige bunny wearing light blue pajamas consisting of a button-up top and a Santa-style hat. He is on a wooden bed with a pillow and blue checkered sheets. He is lying on the pillow, eyes closed. The background is a beige wall."
  },
  {
    "id": "0067",
    "file": "https://i.imgur.com/HIusFLC.jpg",
    "altPT": "Ouriço ao lado de um patinho de borracha, com alguns centímetros de água ao chão. Ele é bem pequeno e está olhando levemente para a cima. O patinho amarelo parece encaram a câmera. Há um pouco de espuma na água.",
    "altEN": "Hedgehog next to a rubber ducky, with a few inches of water on the floor. He is quite small and is looking up slightly. The yellow duckling seems to stare at the camera. There is a little foam in the water."
  },
  {
    "id": "0068",
    "file": "https://i.imgur.com/LSvBYiZ.png",
    "altPT": "Gato branco com a região dos olhos e orelha marrons. Está deitado em um braço e a pessoa está abraçando-o. Há algumas cobertas também. A foto tem um tom alaranjado.",
    "altEN": "White cat with brown eyes and ears. It is lying on one arm and the person is hugging it. There are some covers too. The photo has an orange tint."
  },
  {
    "id": "0069",
    "file": "https://i.imgur.com/tqHwTWR.jpg",
    "altPT": "A imagem mostra dois gatos com algumas flores na frente. O primeiro, branco, está na esquerda, cheirando as flores, que são brancas. O segundo, cinza em cima e branco em baixo, está cheirando o gato branco, com as orelhas para baixo. O fundo é um grande jardim, com grama baixa e algumas árvores.",
    "altEN": "The image shows two cats with some flowers in front. The first one, white, is on the left, smelling the flowers, which are white. The second, gray above and white below, is sniffing the white cat, ears down. The background is a large garden, with low grass and some trees."
  },
  {
    "id": "0070",
    "file": "https://i.imgur.com/bxWVt2J.jpg",
    "altPT": "Sapinho pendurado em um galho fino. O ângulo mostra que sua parte de baixo é meio rosada e ele está olhando para a esquerda. Segura no galho com suas perninhas e mãozinhas. Em cima de sua cabecinha verde há uma borboleta laranja, com algumas bolinhas pretas nas asas. O fundo está desfocado.",
    "altEN": "Little frog hanging on a thin branch. The angle shows that his underside is kind of pink and he's looking to the left. He holds on to the branch with his little legs and hands. On top of its little green head is an orange butterfly, with some black polka dots on its wings. The background is blurred."
  },
  {
    "id": "0071",
    "file": "https://i.imgur.com/IwmUIGC.jpg",
    "altPT": "Guaxinim escondido atrás de umas pedras, mostrando apenas a sua cabeça e bocejando. Ele é marrom, com manchas pretas nos olhos, e suas orelhas e parte do fucinho e redor dos olhos é bege. Está com os olhos fechados e a boca em aberta, mostrando a língua. Seus bigodinhos estão vem evidentes. O fundo está desfocado.",
    "altEN": "Raccoon hiding behind some rocks, showing only its head and yawning. He is brown, with black spots on his eyes, and his ears and part of his muzzle and around his eyes are beige. He has his eyes closed and his mouth open, showing his tongue. His whiskers are evident. The background is blurred."
  },
  {
    "id": "0072",
    "file": "https://i.imgur.com/lySJwHK.jpg",
    "altPT": "Vaquinha marrom peluda no colo de uma pessoa. Ela é filhotinha e aparece apenas da metade do corpo para cima. Uma das patinhas está esticada em direção à câmera e está dando língua. A pessoa segurando ela usa um casaco preto.",
    "altEN": "Furry brown cow on a person's lap. She is a puppy and appears only halfway up. One of the paws is stretched out towards the camera and is chuckling. The person holding her wears a black coat."
  },
  {
    "id": "0073",
    "file": "https://i.imgur.com/HcsYkCE.jpg",
    "altPT": "Tartaruguinha em cima de um mini-skate, sob uma bancada. Sua cabecinha está erguida e seus bracinhos esticados. É verde musgo e está virada quase que na direção da câmera, levemente para a esquerda.",
    "altEN": "Little turtle on top of a mini-skateboard, under a bench. Her little head is up and her little arms are outstretched. It is moss green and is facing almost towards the camera, slightly to the left."
  },
  {
    "id": "0074",
    "file": "https://i.imgur.com/VFmGvEu.jpg",
    "altPT": "Patinho com um pé no chão e outro em um mini-skate. Ele é amarelo e bem pequeno, suas asinhas estão rente ao corpo e seus olhinhos pretos encaram a câmera. O skate possui uma roda vermelha e outra azul. O fundo é um chão de blocos e uma parede de tijolos.",
    "altEN": "Duckling with one foot on the ground and the other on a mini-skateboard. He is yellow and very small, his wings are close to his body and his little black eyes face the camera. The skateboard has a red and a blue wheel. The background is a block floor and a brick wall."
  },
  {
    "id": "0075",
    "file": "https://i.imgur.com/zL6zfE0.jpg",
    "altPT": "Ratinho em cima de um skate, no ar. Ele é cinza escuro, com algumas manchinhas rosa claro. O skate no ar está levemente virado para cima. O ratinho segura o skate com suas patinhas e olha para a frente. O fundo está embaçado.",
    "altEN": "Mouse on top of a skateboard, in the air. It is dark gray with some light pink spots. The skateboard in the air is facing slightly upwards. The mouse holds the skateboard in its paws and looks ahead. The background is blurry."
  },
  {
    "id": "0076",
    "file": "https://i.imgur.com/qTonYak.png",
    "altPT": "Cachorro salsicha em cima de um skate. Ele é longo e marrom, com o fucinho e orelhas também longas. Está sentado no skate e usa uma coleirinha azul com um coração rosa no pescoço. Olha para a esquerda e está com a linguinha para fora. O fundo é uma calçada de concreto com um pouco de grama logo depois.",
    "altEN": "Sausage dog on top of a skateboard. He is long and brown, with a long muzzle and ears. He is sitting on a skateboard and wears a blue collar with a pink heart around his neck. He looks to the left and has his tongue out. The background is a concrete driveway with some grass just beyond."
  },
  {
    "id": "0077",
    "file": "https://i.imgur.com/saHOxQO.png",
    "altPT": "Gato escaminha peludo, com olhos verdes e arregalados, olhando para fora da tela. Está deitado em cima de uma cama meio descoberta, mostrando as patas grandes. Ele se encontra de perfil. O fundo é uma parede branca.",
    "altEN": "A furry scaly cat, with wide green eyes, looking out of the screen. He is lying on top of a bed half uncovered, showing his big paws. He is in profile. The background is a white wall."
  },
  {
    "id": "0078",
    "file": "https://i.imgur.com/FqVOe4L.png",
    "altPT": "A foto mostra um porquinho filhote dentro de uma banheira com apenas dois dedinhos de água. Ele é rosado e está mordendo um brinquedinho rosa que consiste em um barco de porquinho com três porquinhos menores dentro.",
    "altEN": "The photo shows a baby pig in a bathtub with just two fingers of water. He is pink and is biting a little pink toy that consists of a piggy boat with three smaller pigs inside."
  },
  {
    "id": "0079",
    "file": "https://i.imgur.com/82X0kfA.png",
    "altPT": "A imagem mostra um gato de pelagem branca com manchas marrons dormindo abraçando as patas traseiras, formando um caracol. Foi tirada de uma vista frontal. Ao fundo há uma parede branca e duas pelúcias, sendo a da esquerda um urso branco com as patas e nariz bege tamanho médio e a da direita uma vaca de pelúcia branca com preto e detalhes marrons (como o chifre e as narinas). O gato está sobre uma cama, o lençol é branco com desenhos de coelhos.",
    "altEN": "The image shows a white fur cat with brown spots sleeping hugging its hind legs, forming a snail. It was taken from a front view. In the background there is a white wall and two plush toys, the one on the left is a white bear with medium-sized beige paws and nose and the one on the right is a white plush cow with black and brown details (such as the horn and nostrils). The cat is on a bed, the sheet is white with drawings of rabbits."
  },
  {
    "id": "0080",
    "file": "https://i.imgur.com/SRkeYWo.jpg",
    "altPT": "Cachorro deitado de frente para a câmera. É pequeno, bege e peludo, com o meio do rosto e as patas brancas. Seus olhos pretos dilatados encaram a câmera e está dando língua. Suas patinhas dianteiras estão juntas. Está deitado sobre uma bancada de madeira, e o fundo desfocado mostra uma sala com algumas plantas.",
    "altEN": "Dog lying down facing the camera. He is small, beige and furry, with the middle of his face and white paws. His dilated black eyes stare at the camera and he's chuckling. Their front paws are together. He is lying on a wooden bench, and the blurred background shows a room with some plants."
  },
  {
    "id": "0081",
    "file": "https://i.imgur.com/JyTPU2I.jpg",
    "altPT": "A foto mostra um cachorrinho bege bem pequeno, visto de cima. Ele está sentado e olhando para a frente. Seu pelo é ralo e vai ficando um pouco mais escuro perto do focinho e seus olhinhos pretos estão brilhando. Acima dele é possível ver a parte de trás de um cachorro bem maior. Está de lado e o seu pelo preto também é bem ralo. Seu rabo está tremido, indicando movimento. O chão é verde e a parede atrás dos cachorros é branca, e há uma corrente no chão.",
    "altEN": "The photo shows a very small beige puppy, seen from above. He is sitting and looking straight ahead. Its fur is thin and gets a little darker near the muzzle and its little black eyes are shining. Above him you can see the back of a much larger dog. It is on its side and its black fur is also very thin. His tail is quivering, indicating movement. The floor is green and the wall behind the dogs is white, and there is a chain on the floor."
  },
  {
    "id": "0082",
    "file": "https://i.imgur.com/yvOkUlA.jpg",
    "altPT": "A foto mostra um coelhinho bege. Seus pelos são ralos e suas orelhas levantadas são iluminadas por uma janela atrás de si, mostrando suas veias. Seu rostinho está meio virado para a esquerda, sendo possível ver apenas um de seus olhinhos pretos. Seus bigodes são bem longos.",
    "altEN": "The photo shows a beige bunny. His fur is sparse and his raised ears are lit by a window behind him, showing his veins. His little face is half turned to the left, and you can only see one of his little black eyes. Their whiskers are very long."
  },
  {
    "id": "0083",
    "file": "https://i.imgur.com/R6rZFhD.jpg",
    "altPT": "A foto está tremida e mostra um gatinho bege filhote. Seus olhos pretos estão dilatados e suas patinhas agarram um morando quase do tamanho de sua cabeça. É possível também ver dois dedinhos de uma pessoa segurando o morando. O fundo é uma parede bege.",
    "altEN": "The photo is blurry and shows a baby beige kitten. Its black eyes are dilated and its paws grasp a moray almost the size of its head. It is also possible to see two little fingers of a person holding the morando. The background is a beige wall."
  },
  {
    "id": "0084",
    "file": "https://i.imgur.com/oLOR32q.jpg",
    "altPT": "A foto mostra um furão na praia. Seu pelo é bege bem claro, indo para o branco próximo à cabeça e para o marrom nas patas. Está olhando para algum lugar à esquerda, além da câmera. Seus patinhas dianteiras o apoiam na areia. Ao fundo, apenas o céu azul.",
    "altEN": "The photo shows a ferret on the beach. Its fur is very light beige, going to white near the head and brown on the feet. He's looking somewhere to the left, beyond the camera. Its front paws support it on the sand. In the background, just the blue sky."
  },
  {
    "id": "0085",
    "file": "https://i.imgur.com/qN2eQQ0.jpg",
    "altPT": "A foto mostra um gatinho abraçado a uma tartaruga. O gato é pequeno e cinza, com muito pelo. Está dormindo virado para cima, seus olhinhos fechados e sua boca levemente aberta, revelando alguns dentinhos. Ele segura a tartaruguinha também pequena, verde. Estão no colo de alguém, que possui a pele clara e usa uma blusa branca de estrelas.",
    "altEN": "The photo shows a kitten hugging a turtle. The cat is small and gray, with a lot of fur. He's sleeping face up, his little eyes closed and his mouth slightly open, revealing some tiny teeth. He holds the also small, green turtle. They are on someone's lap, who has fair skin and wears a white blouse with stars."
  },
  {
    "id": "0086",
    "file": "https://i.imgur.com/d70w4tW.jpg",
    "altPT": "Uma cadela vira-lata de pelagem preta e espessa, com o rosto e focinho cinza. Está dormindo deitada em forma de bola, em cima de um tapete vermelho menor do que ela. O chão é de cerâmica branca.",
    "altEN": "A stray dog ​​with a thick black coat, with a gray face and muzzle. She's sleeping lying in a ball, on a red carpet smaller than she is. The floor is white ceramic."
  },
  {
    "id": "0087",
    "file": "https://i.imgur.com/d4HA8Qd.png",
    "altPT": "Gato sentado em cima de uma estante preta. Ele é magro e longo, branco, e possui a cara cinza, exceto pela boca. O arranjo dos pelos faz parecer que está usando uma máscara, como a do batman. Seus olhos azuis escaram algo além da câmera, à direita, e o modo que está sentado é levemente torto. À esquerda, na parede, há uma televisão ligada, e aos fundos alguns móveis.",
    "altEN": "Cat sitting on top of a black bookcase. He is thin and long, white, and has a gray face, except for his mouth. The arrangement of the fur makes it look like he's wearing a mask, like Batman's. His blue eyes glare at something beyond the camera on the right, and the way he's sitting is slightly crooked. To the left, on the wall, there is a television on, and in the back some furniture."
  },
  {
    "id": "0088",
    "file": "https://i.imgur.com/kcT1h1a.jpg",
    "altPT": "A foto mostra um coelhinho bege usando roupinhas de detetive. A blusa marrom possui uma camisa de botões branca e uma gravata vermelha por dentro. Por cima, uma capa quadriculada em marrom e branco. Na cabeça, suas orelhinhas estão abaixadas, e há um chapéu quadriculado da mesma cor. Está sentado, levemente virado para a direita. O fundo desfocado mostra uma árvore de folhas alaranjadas.",
    "altEN": "The photo shows a beige bunny wearing detective clothes. The brown blouse has a white button-down shirt and a red tie inside. On top, a checkered cover in brown and white. On her head, her little ears are down, and there is a checkered hat of the same color. He is seated, slightly turned to the right. The blurred background shows a tree with orange leaves."
  },
  {
    "id": "0089",
    "file": "https://i.imgur.com/FhvNSrk.jpg",
    "altPT": "A foto tirada de cima mostra um guaxinim pegando comida de dentro de um pote. Ele é cinza e possui manchas pretas ao redor dos olhos. Uma de suas patinhas dianteiras segura o pote preto que contém ração, bananas picadas e pasta de amendoim, enquanto a outra segura uma banana. Seus olhinhos pretos encaram a câmera. O fundo é um chão preto.",
    "altEN": "The photo taken from above shows a raccoon taking food out of a pot. He is gray and has black spots around his eyes. One of its front paws holds the black pot that contains food, chopped bananas and peanut butter, while the other holds a banana. His little black eyes stare at the camera. The background is a black floor."
  },
  {
    "id": "0090",
    "file": "https://i.imgur.com/ICdLqSS.png",
    "altPT": "Gatinho deitado em um sofá. Ele é gordinho, branco com algumas manchinhas cinzas na cabeça, rabo e final do corpo. Está de lado, para a direita, uma das patinhas esticadas e os olhos fechados. O sofá é marrom e possui algumas almofadas estampadas.",
    "altEN": "Kitten lying on a sofa. He is chubby, white with some gray spots on his head, tail and end of his body. It is on its side, to the right, one of its paws stretched out and its eyes closed. The sofa is brown and has some patterned pillows."
  },
  {
    "id": "0091",
    "file": "https://i.imgur.com/GUT8HmF.jpg",
    "altPT": "A foto mostra uma galinha branca deitada no chão. À sua volta, cerca de 20 filhotes, variando entre pintinhos e patinhos. Alguns são amarelos. Outros, marrons ou beges.",
    "altEN": "The photo shows a white chicken lying on the ground. Around him, about 20 chicks, ranging from chicks and ducklings. Some are yellow. Others, brown or beige."
  },
  {
    "id": "0092",
    "file": "https://i.imgur.com/Oxmwyoo.jpg",
    "altPT": "A foto mostra uma tartaruga. Ela é bem grande e está de frente para a câmera, olhando. É marrom e possui um chapéu de cone na cabeça, escrito \"Happy Birthday\". O chapéu é vermelho e possui a ilustração de um bolo e algumas velas. Ao fundo, é possível ver os pés de uma pessoa.",
    "altEN": "The photo shows a turtle. She's quite big and she's facing the camera, looking. It is brown and has a cone hat on its head that says \"Happy Birthday\". The hat is red and has an illustration of a cake and some candles. In the background, you can see a person's feet."
  },
  {
    "id": "0093",
    "file": "https://i.imgur.com/FHFQSg6.png",
    "altPT": "Cachorro pinscher preto com sobrancelhas, focinhos e patas marrons. Usa uma roupinha preta com detalhes amarelos e está debruçado sobre uma pelúcia cinza. O fundo é um sofá, com algumas almofadas verdes.",
    "altEN": "Black pinscher dog with brown eyebrows, muzzle and paws. He wears a black outfit with yellow details and is hunched over a gray plush. The background is a sofa, with some green pillows."
  },
  {
    "id": "0094",
    "file": "https://i.imgur.com/0Ab4Kzp.jpg",
    "altPT": "A foto mostra um gatinho bege. Sua cabeça está dentro de um abacate de pelúcia. Seus olhos estão dilatados e está lambendo a almofada. O fundo é uma parede bege.",
    "altEN": "The photo shows a beige kitten. His head is inside a plush avocado. His eyes are dilated and he's licking the pillow. The background is a beige wall."
  },
  {
    "id": "0095",
    "file": "https://i.imgur.com/kb4E82F.png",
    "altPT": "A foto mostra um cachorro preto longo e magro, bem peludo. Está deitado de costas, com a cabeça para a direita. Em sua barriga, bem encolhido, está um gatinho também preto. Ele é bem pequeno e encara a câmera com seus olhinhos verdes. Estão deitados no chão, em cima de um tapete azul e branco.",
    "altEN": "The photo shows a long, skinny, very hairy black dog. He is lying on his back with his head to the right. In her belly, well shrunk, is a black kitten. He is very small and stares at the camera with his little green eyes. They are lying on the floor, on top of a blue and white rug."
  },
  {
    "id": "0096",
    "file": "https://i.imgur.com/NvwSbza.png",
    "altPT": "Dois gatos deitados em uma cama. A primeiro, mais próximo à cama, é branco com algumas manchas pretas na cabeça e nas costas. Está virado para a direita, com o rabo para perto e a cabeça para longe da câmera. O segundo, deitado enrolado em si mesmo, é tricolor, nas cores branco, bege e preto.",
    "altEN": "Two cats lying on a bed. The first, closest to the bed, is white with some black spots on the head and back. He is facing right, with his tail close and his head away from the camera. The second, lying curled up, is tricolor, in white, beige and black."
  },
  {
    "id": "0097",
    "file": "https://i.imgur.com/FMMVwcy.png",
    "altPT": "Foto em que Nina, uma calopsita cinza com manchas brancas e topete amarelo, aparece de lado. Ela está apoiada na mão de uma pessoa branca, olhando para a câmera. O fundo é um quarto, com uma parede vermelha e um guarda-roupa. É possível ver também um pé.",
    "altEN": "Photo in which Nina, a gray cockatiel with white spots and a yellow topknot, appears from the side. She is leaning on a white person's hand, looking at the camera. The background is a bedroom, with a red wall and a wardrobe. You can also see a foot."
  },
  {
    "id": "0098",
    "file": "https://i.imgur.com/K8OxOzb.jpg",
    "altPT": "A foto mostra dois coelhinhos vestidos como se fossem casar. Ambos são beges, bem claros. O da esquerda usa um terninho preto e cinza e uma gravata borboleta branca, e está abaixado. O da direita usa um véu branco com flores da mesma cor, e suas orelhas são menores e estão em pé. Eles estão sobre um banquinho de madeira, e o fundo desfocado mostra arbustos",
    "altEN": "The photo shows two bunnies dressed as if they were going to get married. Both are beige, very light. The one on the left wears a black and gray pantsuit and a white bow tie, and is down. The one on the right wears a white veil with flowers of the same color, and its ears are smaller and stand on end. They are on a wooden stool, and the blurred background shows bushes."
  },
  {
    "id": "0099",
    "file": "https://i.imgur.com/7bjoK1Q.jpg",
    "altPT": "Dois gatinhos sentados lado a lado num campo. O de esquerda é branco com o topo da cabeça cinza. Usa uma coleira vermelha com um sininho e seus olhos, super azuis, encaram o outro gato. Este, na direita, é também branco, mais gordo, com o redor da orelha laranja. Seus olhos estão cerrados, fazendo sua cara ficar engraçada e meio ranzinza. À esquerda dos dois há diversos girassóis, maiores do que eles. O fundo é o céu, tão claro que parece branco.",
    "altEN": "Two kittens sitting side by side in a field. The one on the left is white with a gray top of the head. He wears a red collar with a bell and his eyes, super blue, stare at the other cat. This one, on the right, is also white, fatter, with orange around the ear. His eyes are closed, making his face look funny and a little grumpy. To the left of the two are several sunflowers, larger than they are. The background is the sky, so clear it looks white."
  },
  {
    "id": "0100",
    "file": "https://i.imgur.com/zmTk8RT.jpg",
    "altPT": "A foto mostra um cachorrinho deitado em um sofá, com a barriga para cima. Ele é bege bem claro e se assemelha a um labrador. Está recostado no braço do sofá e usa um pijama macacão de patinhos. Ao seu lado, um pato de borracha bem grande, da altura do braço do sofá, que é cinza.",
    "altEN": "The photo shows a puppy lying on a sofa, with its belly up. He is very light beige and resembles a Labrador. He's leaning back on the arm of the couch and wearing a pair of duckling pajamas. Beside him is a very large rubber duck, as tall as the arm of the sofa, which is gray."
  },
  {
    "id": "0101",
    "file": "https://i.imgur.com/I28A8Xv.jpg",
    "altPT": "A foto tirada de cima mostra um sapinho em um pedaço de madeira. Ele é verde bem clarinho, e sua barriga é branca. Seus olhos são amarelo claro e vesguinhos, e seus patas parecem mãos e segundam na madeira. O fundo está desfocado.",
    "altEN": "The photo taken from above shows a little little frog on a piece of wood. He is very light green, and his belly is white. His eyes are pale yellow and cross-eyed, and his paws look like hands and second on wood. The background is blurred."
  },
  {
    "id": "0102",
    "file": "https://i.imgur.com/xc0NTah.jpg",
    "altPT": "A foto mostra um hamster laranja com a barriga cinza. Ele está sentado e tapa seus olhinhos com as patas, olhando para a câmera de maneira tímida e fofa.",
    "altEN": "The photo shows an orange hamster with a gray belly. He is sitting and covering his eyes with his paws, looking at the camera in a shy and cute way."
  },
  {
    "id": "0103",
    "file": "https://i.imgur.com/IcrZYOv.jpg",
    "altPT": "A foto mostra um patinho amarelo dormindo no meio de umas folhas. Ele é super pequeno e está de lado. Em cima de sua cabeça há uma florzinha laranja, como se fosse um chapéu.",
    "altEN": "The photo shows a yellow duckling sleeping in the middle of some leaves. He's super small and on his side. On top of his head is a little orange flower, like a hat."
  },
  {
    "id": "0104",
    "file": "https://i.imgur.com/PaTlPVx.jpg",
    "altPT": "A imagem mostra uma tartaruguinha olhando pela janela. Ela está de pé, apoiada no vidro, e possui diferentes tons de verde e alguns de amarelo. Do lado de fora da janela, está de dia, porém chovendo.",
    "altEN": "The image shows a little turtle looking out the window. She is standing, leaning against the glass, and has different shades of green and some of yellow. Outside the window, it is daylight, but raining."
  },
  {
    "id": "0105",
    "file": "https://i.imgur.com/pJXFc7B.jpg",
    "altPT": "Um panda de cabeça para baixo em um balanço de pneu. Ele é pequeno e gordinho, e seus pés estão jogados para a frente, encostando nas correntes do balanço. O fundo é um gramadinho.",
    "altEN": "An upside-down panda on a tire swing. He's small and chubby, and his feet are thrown forward, brushing against the swing's chains. The background is a grass."
  },
  {
    "id": "0106",
    "file": "https://i.imgur.com/KxyLCzM.jpg",
    "altPT": "A foto mostra um passarinho azul em um galho. Ele é pequeno e gordinho, e a sua parte de baixo possui as penas alaranjadas. Há um círculo branco bem fino ao redor de seu olho.",
    "altEN": "The photo shows a blue bird on a branch. He is small and chubby, and his underside has orange feathers. There is a very thin white circle around his eye."
  },
  {
    "id": "0107",
    "file": "https://i.imgur.com/cJXU92g.jpg",
    "altPT": "Uma gata preta no meio de algumas plantas. Ela está sentada e é super peluda. Olha para a frente com seus olhos verdes, mas não diretamente para a câmera. À sua frente um pequeno vaso com uma planta meio seca, à esquerda um grande vaso de planta e á direita algumas folhas. O fundo é uma parede bege.",
    "altEN": "A black cat in the middle of some plants. She's sitting up and she's super furry. She looks straight ahead with her green eyes, but not directly at the camera. In front of her is a small pot with a half-dry plant, on the left a large potted plant and on the right some leaves. The background is a beige wall."
  },
  {
    "id": "0108",
    "file": "https://i.imgur.com/5YYsBVR.jpg",
    "altPT": "Uma gata preta no meio de algumas plantas. Ela está sentada e é super peluda. Olha para a direita com seus olhos verdes, mas não diretamente para a câmera. À sua frente um pequeno vaso com uma planta meio seca, à esquerda um grande vaso de planta e á direita algumas folhas. O fundo é uma parede bege.",
    "altEN": "A black cat in the middle of some plants. She's sitting up and she's super furry. She looks to the right with her green eyes, but not directly at the camera. In front of you is a small pot with a half-dry plant, on the left a large potted plant and on the right some leaves. The background is a beige wall."
  },
  {
    "id": "0109",
    "file": "https://i.imgur.com/CdmHAIj.jpg",
    "altPT": "Gato branco do busto para cima. Usa uma blusinha rosa bebê e uma máscara de skincare no rosto, mostrando apenas seus olhos, boca e nariz. Ele também possui um óculos redondo de lente amarela, que está em sua testa. O fundo é um sofá.",
    "altEN": "White cat from the bust up. She wears a baby pink blouse and a skincare mask on her face, showing only her eyes, mouth and nose. He also has round, yellow-lensed glasses, which are on his forehead. The background is a sofa."
  },
  {
    "id": "0110",
    "file": "https://i.imgur.com/TAeiJ14.jpg",
    "altPT": "Sirizinho laranja e bem pequeno usando um chapéu de palha. Suas garrinhas estão levantadas e ele parece feliz. Atrás dele há uma bandeira LGBTQ+, que consiste de 6 faixas horizontais nas cores vermelho, laranja, amarelo, verde, azul e roxo, respectivamente.",
    "altEN": "Little orange crab in a straw hat. His claws are up and he looks happy. Behind him is an LGBTQ+ flag, which consists of 6 horizontal stripes in red, orange, yellow, green, blue and purple respectively."
  },
  {
    "id": "0111",
    "file": "https://i.imgur.com/VE1RIcu.jpg",
    "altPT": "A foto mostra uma parede e uma janela da parte externa de uma casa. A janela possui a moldura roxa e uma placa escrito \"Por favor, não deixe o gato sair\". Ao lado da placa, ainda do lado de fora da casa, o gato está deitado sobre o batente da janela. Ele é magro e não muito grande, marrom e preto, e está bem encolhido.",
    "altEN": "The photo shows a wall and window from the outside of a house. The window has a purple frame and a \"Please don't let the cat out\" sign. Next to the sign, still outside the house, the cat is lying on the windowsill. He's thin and not too big, brown and black, and he's shriveled up nicely."
  },
  {
    "id": "0112",
    "file": "https://i.imgur.com/AGsdHCl.jpg",
    "altPT": "Gatinho filhote dentro de uma meia bem grossa, amarela com detalhes azuis. Ele é bege e mostra apenas sua cabeça, a unica parte para fora da meia. Seus olhos são acinzentados. O fundo é uma caminha bege.",
    "altEN": "Kitten inside a very thick, yellow sock with blue details. He is beige and shows only his head, the only part sticking out of the sock. His eyes are gray. The background is a beige bed."
  },
  {
    "id": "0113",
    "file": "https://i.imgur.com/zhMqSmM.jpg",
    "altPT": "Hamster laranja abaixadinho. Ele é gordinho e tenta enfiar um morango inteiro na boca, empurrando com as duas mãos. Seus olhos estão meio arregalados e sua boca está super aberta. Ao seu lado há um outro hamster, mas está cortado para fora da foto.",
    "altEN": "Squatting orange hamster. He's chubby and tries to stuff a whole strawberry into his mouth, pushing with both hands. His eyes are kind of wide and his mouth is wide open. Next to him is another hamster, but it's cropped out of the picture."
  },
  {
    "id": "0114",
    "file": "https://i.imgur.com/DxkQRu4.jpg",
    "altPT": "A foto mostra 4 patinhos deitados no colo de uma criança, que usa um vestido branco. Eles são bem pequenininhos e amarelos. Um deles mostra apenas o topo da cabeça, outro está abaixado e se apoiando num terceiro. O quarto está um pouco mais à frente, e é acariciado pela criança.",
    "altEN": "The photo shows 4 ducklings lying on the lap of a child, who is wearing a white dress. They are very tiny and yellow. One of them only shows the top of his head, another is bent down and leaning on a third. The fourth is a little further on, and is petted by the child."
  },
  {
    "id": "0115",
    "file": "https://i.imgur.com/3HwsnN4.jpg",
    "altPT": "A foto mostra um cachorro corgi. Ele é branco embaixo e laranjinha em cima. Seus olhos estão levemente abertos e sua língua está para fora. À sua frente há flores brancas, sendo seguradas por alguém. Uma delas está em sua língua. O fundo desfocado mostra uma árvore e uma pessoa.",
    "altEN": "The photo shows a corgi dog. It is white underneath and orange on top. His eyes are slightly open and his tongue is hanging out. In front of him are white flowers, being held by someone. One of them is in his language. The blurred background shows a tree and a person."
  },
  {
    "id": "0116",
    "file": "https://i.imgur.com/Y0YX2iJ.png",
    "altPT": "A foto mostra um gato laranja sentado em uma mesa. Ele usa um lenço quadriculado azul e vermelho no pescoço e um chapéuzinho de palha. Seus olhos mel encaram a câmera. Na mesa há enfeites de arraiá, como fogueirinha, chapéu de palha e milho. Atrás dele há uma parede branca e um balão.",
    "altEN": "The photo shows an orange cat sitting on a table. He wears a blue and red checkered scarf around his neck and a straw hat. Her honey eyes stare at the camera. On the table there are arraiá decorations, such as a small fire, straw hat and corn. Behind him is a white wall and a balloon."
  },
  {
    "id": "0117",
    "file": "https://i.imgur.com/5wwFa4a.jpg",
    "altPT": "Coelhinho marrom olhando para a direita. Seus olhos são pretos e suas orelhas estão abaixadas para trás. Ele possui duas flores brancas na boca. Abaixo, há vários outras flores iguais. O fundo é um gramado desfocado.",
    "altEN": "Brown bunny looking to the right. Its eyes are black and its ears are lowered back. It has two white flowers in its mouth. Below, there are several other similar flowers. The background is a blurred lawn."
  },
  {
    "id": "0118",
    "file": "https://i.imgur.com/WBk3OD1.jpg",
    "altPT": "Um gatinho preto e branco, com sobrancelha e bigodes brancos, olhos esverdeados e focinho rosado, segura uma pedaço de pão de forma na boca. Ele está encima do que parece um teto de madeira escura e o fundo é um céu branco.",
    "altEN": "A black and white kitten, with white eyebrows and whiskers, greenish eyes and pink muzzle, holds a piece of loaf of bread in its mouth. It's on top of what looks like a dark wooden ceiling and the background is a white sky."
  },
  {
    "id": "0119",
    "file": "https://i.imgur.com/czdYsTm.jpg",
    "altPT": "Dois furões abraçados. Um deles é bege bem claro, quase branco. Ele abraça o outro e cheira o topo de sua cabeça. Seus olhos pretos estão abertos. O outro é branco com manchas cinzas. Está apoiado no primeiro, com os olhos fechados. O fundo é um carpete cinza.",
    "altEN": "Two ferrets embracing. One of them is very light beige, almost white. He hugs the other and sniffs the top of his head. His black eyes are open. The other is white with gray spots. He is leaning on the first, with his eyes closed. The background is a gray carpet."
  },
  {
    "id": "0120",
    "file": "https://i.imgur.com/hBjr7J8.jpg",
    "altPT": "Um pequeno hamster de pelo alaranjado e bege e olhos pretos segura uma mini revista intitulada \"Mouse's Health\". Na capa, vemos a edição de uma cabeça de hamster em um torso humano musculoso. Na contracapa, há a edição de outra cabeça de hamster em um corpo de biquini vermelho, segurando uma taça de cerveja. O chão e o fundo da foto são brancos.",
    "altEN": "A small hamster with orange and beige fur and black eyes holds a mini magazine entitled \"Mouse's Health\". On the cover, we see the edit of a hamster head on a muscular human torso. On the back cover is an edit of another hamster head on a red bikini body, holding a beer glass. The floor and background of the photo are white."
  },
  {
    "id": "0121",
    "file": "https://i.imgur.com/GpJPFQw.jpg",
    "altPT": "Um coelhinho cinza claro está comendo uma folha verde. Ele está sobre um tapete verde-musgo e é possível ver uma almofada com estampa florida verde e rosa. Uma mão branca alimenta ele e seus olhos pretos estão bem abertos.",
    "altEN": "A light gray bunny is eating a green leaf. It is on a moss green rug and you can see a cushion with a green and pink flower print. A white hand feeds him and his black eyes are wide open."
  },
  {
    "id": "0122",
    "file": "https://i.imgur.com/eS7Z8sU.jpg",
    "altPT": "Um gato preto sentado em cima da uma moto, que está de lado. Ele é bem peludo e seus olhos verdes encaram algo para além da câmera. A moto é toda preta. O fundo é uma parede bege.",
    "altEN": "A black cat sitting on top of a motorcycle, which is on its side. He is very hairy and his green eyes stare beyond the camera. The bike is all black. The background is a beige wall."
  },
  {
    "id": "0123",
    "file": "https://i.imgur.com/cb43ZAS.jpg",
    "altPT": "Um gatinho de pelo cinza escuro e branco está deitado sobre uma almofada branca. Uma braço de pele clara envolto em um casaco marrom segura sua cabeça. A expressão do gato é sonolenta, com os olhos fechados e o focinho relaxado, e com as patas dianteiras juntas em frente ao corpo.",
    "altEN": "A dark gray and white fur kitten is lying on a white pillow. A pale-skinned arm wrapped in a brown coat holds his head. The cat's expression is sleepy, with eyes closed and muzzle relaxed, and with the front paws together in front of the body."
  },
  {
    "id": "0124",
    "file": "https://i.imgur.com/SvTA9Ej.jpg",
    "altPT": "Dois ratinhos dormindo juntos. O primeiro, da esquerda, é cinza e é possível ver apenas a sua cabeça. Seus olhos estão fechados e usa um chapéu marrom. O segundo, à direita, é branquinho. Usa um vestido branco uma flor em cima da cabeça. Ao lado, um brinquedo de uma tartaruga em um carrinho. Estão deitados em um pano branco.",
    "altEN": "Two mice sleeping together. The first one on the left is gray and you can only see its head. His eyes are closed and he wears a brown hat. The second, on the right, is white. Wears a white dress with a flower on top of her head. Next to it, a toy of a turtle in a cart. They are lying on a white cloth."
  },
  {
    "id": "0125",
    "file": "https://i.imgur.com/g3C24kW.jpg",
    "altPT": "Dois gatinhos filhotes brincando em cima de um colchão. O primeiro é bege, bem clarinho, e está deitado em uma meia lua. Um de seus olhos está aberto, enquanto o outro está fechado. O segundo é laranjinha, e está deitado de barriga para cima. Sua cabeça está na barriga do primeiro, suas patinhas estão esticadas e sua boca aberta da a entender que ele vai morder o amiguinho.",
    "altEN": "Two kittens playing on top of a mattress. The first is beige, very light, and is lying on a half moon. One of his eyes is open, while the other is closed. The second is orange, and is lying on its back. His head is on the first one's belly, his paws are stretched out and his open mouth gives the impression that he is going to bite his little friend."
  },
  {
    "id": "0126",
    "file": "https://i.imgur.com/iEyy8rG.jpg",
    "altPT": "Um gato cinza com listras pretas. Ele está de lado, virado para a esquerda, e abraça um cobertor azul. Sua língua está presa na coberta, e ele está puxando para trás em busca de soltá-lo, o que faz com que tenha uma cara de desespero. Seus olhos verdes bem claro está arregalados e sua boca está bem aberta.",
    "altEN": "A gray cat with black stripes. He's on his side, facing left, and hugs a blue blanket. His tongue is stuck in the blanket, and he's pulling back to get it out, which makes him look desperate. Her bright green eyes are wide and her mouth is wide open."
  },
  {
    "id": "0127",
    "file": "https://i.imgur.com/s46Po1p.jpg",
    "altPT": "Foto de duas gatas deitadas em uma cama. A da esquerda é maior e toda preta. É bem peluda e seus olhos estão quase inteiramente pretos. Ao seu lado, uma gata branca. Sua parte traseira e o topo de sua cabeça são pretos, juntamente com uma manchinha em seu queixo. Seu pelo é ralo e seus olhos estão fechados. A cama possui um lençol branco e o fundo é uma cortinha roxa. À esquerda, algumas roupas.",
    "altEN": "Photo of two cats lying on a bed. The one on the left is bigger and all black. It is quite furry and its eyes are almost entirely black. Beside him, a white cat. Its back and the top of its head are black, along with a spot on its chin. His fur is thin and his eyes are closed. The bed has a white sheet and the background is a purple curtain. On the left, some clothes."
  },
  {
    "id": "0128",
    "file": "https://i.imgur.com/3E6hGUa.jpg",
    "altPT": "A foto mostra um urso panda do busto para cima. Ele está à direita, sua cabeça é branca e seu corpo é preto, tal qual suas orelhas e o redor de seus olhos. Sua boca está levemente aberta e ele come um pedaço de folha, que sai do chão. O fundo está desfocado e é verde.",
    "altEN": "The photo shows a panda bear from the bust up. He is on the right, his head is white and his body is black, as are his ears and around his eyes. His mouth is slightly open and he eats a piece of leaf, which comes out of the ground. The background is blurred and is green."
  },
  {
    "id": "0129",
    "file": "https://i.imgur.com/5BGWa6M.jpg",
    "altPT": "Um filhote de gato de pelo laranja está sobre as quatro patas encima de uma cama. A roupa de cama é branca e a parede ao fundo é marrom claro. Editadas sobre a cabeça dele estão duas antenas lilás e sobre as costas, um par de asas translúcidas roxas e verdes. A expressão dele é neutra e ele não olha pra câmera.",
    "altEN": "An orange fur kitten is on all fours on top of a bed. The bedding is white and the back wall is light brown. Edited over his head are two lilac antennae and over his back, a pair of translucent purple and green wings. His expression is neutral and he doesn't look at the camera."
  },
  {
    "id": "0130",
    "file": "https://i.imgur.com/4dWse2X.jpg",
    "altPT": "A foto mostra um gato preto de costas. Está deitado em cima de um pano quadriculado, com o rosto para a esquerda. O pelo dele é bem ralinho e possui algumas partes laranjas. O fundo é um gramado e um par de tênis laranja.",
    "altEN": "The photo shows a black cat from the back. He is lying on top of a checkered cloth, with his face to the left. His fur is very thin and has some orange parts. The background is a lawn and a pair of orange sneakers."
  },
  {
    "id": "0131",
    "file": "https://i.imgur.com/TCePZ1o.jpg",
    "altPT": "A foto mostra um gatinho deitado em um chão de madeira. Ele é bem peludo. Sua parte de baixo é branca e a parte de cima é laranja com algumas manchas cinzas. Seus olhos são verdes e encaram a câmera. O fundo é uma parede branca, há uma caixa preta e um objeto de madeira.",
    "altEN": "The photo shows a kitten lying on a wooden floor. He's very hairy. Its underside is white and the upper half is orange with some gray spots. His eyes are green and staring at the camera. The background is a white wall, there is a black box and a wooden object."
  },
  {
    "id": "0132",
    "file": "https://i.imgur.com/3cjSb6V.jpg",
    "altPT": "Um hamster pequeno, de pelo marrom-acinzentado e branco, deitado em um sofá de courino amarelo claro. Ele olha em direção a câmera.",
    "altEN": "A small gray-brown and white hamster lying on a pale yellow leatherette sofa. He looks towards the camera."
  },
  {
    "id": "0133",
    "file": "https://i.imgur.com/LhHudEn.jpg",
    "altPT": "Um gatinho branco dormindo abraçado com um golfinho de pelúcia azul com estrelinhas azuis, rosas, verdes e amarelas em um tom mais brilhoso. O gato está deitado em uma cama com lençol também branco e no canto se vê outro lençol bege e um cobertor vermelho.",
    "altEN": "A white kitten sleeping cuddled with a blue plush dolphin with blue, pink, green and yellow stars in a brighter shade. The cat is lying on a bed with a white sheet and in the corner there is another beige sheet and a red blanket."
  },
  {
    "id": "0134",
    "file": "https://i.imgur.com/O9H9fss.png",
    "altPT": "A foto mostra um jacaré em uma madeira. Ele aparece da metade para cima, sua parte de baixo é mais clara e possui umas manchar pretas. Seus olhos estão fechadas e sua boca aberta em algo que parece um sorriso de felicidade. Em sua volta há diversas borboletas, especialmente amarelas, laranjas e cinzas, algumas pousadas em sua cabeça. O fundo desfocado mostra um lado.",
    "altEN": "The photo shows an alligator in a wood. It appears from the middle up, its underside is lighter and has some black spots. His eyes are closed and his mouth is open in what looks like a happy smile. Around him are several butterflies, especially yellow, orange and gray, some perched on his head. Blurred background shows one side."
  },
  {
    "id": "0135",
    "file": "https://i.imgur.com/zxcj76v.jpg",
    "altPT": "Um gatinho de pelo laranja está sentado de frente para a camera enquanto olha para o seu lado esquerdo. Editada por cima da foto estão asas de fada transparentes saindo das costas do bichnho. Ao fundo, é possível ver uma cabeceira branca, edredons cinza e uma parede também branca.",
    "altEN": "An orange fur kitten is sitting facing the camera as it looks to its left side. Edited over the photo are transparent fairy wings sticking out of the pet's back. In the background, you can see a white headboard, gray comforters and a white wall."
  },
  {
    "id": "0136",
    "file": "https://i.imgur.com/mV9S9vU.png",
    "altPT": "Prints de uma postagem de @contextkittens. Há uma imagem de um gatinho branco filhote de costas, sentado em cima de um notebook, encarando a tela do mesmo. A legenda diz \"shh ele está se concentrando\".",
    "altEN": "Prints from a post by @contextkittens. There is an image of a white kitten on its back, sitting on top of a notebook, staring at its screen. The caption reads \"shh he's concentrating\"."
  },
  {
    "id": "0137",
    "file": "https://i.imgur.com/YO2gaWv.png",
    "altPT": "Um notebook branco de lado, aberto. Em seu teclado, um gatinho bem pequeno está deitado. Ele é branco e a sua parte de cima é um pouco cinza. Ele encara a tela.",
    "altEN": "A white notebook on its side, open. On your keyboard, a very small kitten is lying down. It is white and its upper part is a little gray. He stares at the screen."
  },
  {
    "id": "0138",
    "file": "https://i.imgur.com/y2eWngX.png",
    "altPT": "Um gatinho sentado no teclado de um notebook. Ele é cinza com listras pretas, e sua parte de baixo é branca. É bem peludo e maior do que o notebook, apesar de aparentar ainda ser filhote. Duas de suas patas encostam na tela, e ele está olhando para além da câmera.",
    "altEN": "A kitten sitting at the keyboard of a notebook. It is gray with black stripes, and its underside is white. It's quite furry and bigger than the notebook, despite still looking like a puppy. Two of his paws touch the screen, and he's looking past the camera."
  },
  {
    "id": "0139",
    "file": "https://i.imgur.com/ff9RYYk.png",
    "altPT": "Um monitor branco com um gato deitado em cima. Ele é cinza com listras pretas, e sua parte de baixo é branca. Suas patas estão caídas à frente do monitor e sua boca está aberta. Na tela, outra foto do mesmo gato deitado no mesmo lugar, um pouco menor. O fundo é uma parede bege.",
    "altEN": "A white monitor with a cat lying on top. It is gray with black stripes, and its underside is white. His paws are down in front of the monitor and his mouth is open. On the screen, another photo of the same cat lying in the same place, a little smaller. The background is a beige wall."
  },
  {
    "id": "0140",
    "file": "https://i.imgur.com/gLb5ySm.png",
    "altPT": "Uma pessoa amarela mexendo em um computador. Ela usa uma blusa rosa e está com a cabeça curvada para a frente, em direção à tela. Em cima de seu cabelo preto, um gatinho está deitado. Ele é branco e bem pequeno. Suas patas traseiras estão na testa da pessoa, e ele encara o pescoço da mesma.",
    "altEN": "A yellow person working on a computer. She wears a pink blouse and has her head bent forward, towards the screen. On top of her black hair, a kitten is lying. He is white and very small. His hind legs are on the person's forehead, and he is staring at the person's neck."
  },
  {
    "id": "0141",
    "file": "https://i.imgur.com/YPoS2O1.png",
    "altPT": "Um computador em uma escrivaninha. Em cima do teclado branco há uma proteção, como se fosse uma prateleira. Ela é transparente e, em cima, há um gato laranja sentado. Ele é bem grande e peludo. Encara a esquerda com cara de bravo. As pontas de suas patinhas são brancas.",
    "altEN": "A computer on a desk. On top of the white keyboard there is a protection, as if it were a shelf. She is transparent and, on top, there is an orange cat sitting. He is very big and hairy. Face the left with an angry face. His paw tips are white."
  },
  {
    "id": "0142",
    "file": "https://i.imgur.com/0EbvRfA.png",
    "altPT": "Um notebook aberto na foto de um gatinho. Ele é branco, com apenas o topo da cabeça preto, e aparece do \"busto\" para cima, encarando a câmera com seus olhos claros. Fora do computador, o mesmo gato aparece, um pouco maior. Ele olha a foto, confuso.",
    "altEN": "An open notebook on a picture of a kitten. He is white, with only the top of his head black, and appears from the \"bust\" up, facing the camera with his pale eyes. Outside the computer, the same cat appears, slightly larger. He looks at the photo, confused."
  },
  {
    "id": "0143",
    "file": "https://i.imgur.com/lFjw5ml.png",
    "altPT": "Foto em uma qualidade bem duvidosa. Há um notebook cinza aberto no facebook, e um gatinho marrom com manchas pretas deitado em cima do mesmo. Ele é bem pequeno e está virado contra a tela, encarando a câmera.",
    "altEN": "Photo in very questionable quality. There is a gray notebook open on facebook, and a brown kitten with black spots lying on top of it. He's quite small and he's leaning against the screen, facing the camera."
  },
  {
    "id": "0144",
    "file": "https://i.imgur.com/t1jY65H.png",
    "altPT": "Uma escrivaninha com um computador em cima. Na cadeira de madeira, há um gato em pé. Ele é branco na parte de baixo e preto na parte de cima Apoia suas patas dianteiras no encosto e olha para baixo com seus olhos amarelos.",
    "altEN": "A desk with a computer on top. On the wooden chair, there is a cat standing. It is white on the underside and black on the top. It rests its front paws on the backrest and looks down with its yellow eyes."
  },
  {
    "id": "0145",
    "file": "https://i.imgur.com/GxWQzvz.png",
    "altPT": "Dois gatinhos de frente à tela de um computador. O primeiro, mais para a frente, é laranja bem claro, com algumas listras mais escuras e a parte de baixo branca. O de trás possui a parte inferior branca e a superior preta. Ambos estão de pé na tela, apoiando as patas dianteiras na mesma.",
    "altEN": "Two kittens in front of a computer screen. The first one, towards the front, is a very light orange, with some darker stripes and a white underside. The back has a white bottom and a black top. Both are standing on the canvas, supporting their front paws on it."
  },
  {
    "id": "0146",
    "file": "https://i.imgur.com/rEoRG7I.png",
    "altPT": "Uma escrivaninha com um computador branco antigo. Em cima do teclado, um gato fica de pé, apoiando as patas dianteiras no monitor e encarando o mesmo. Ele possui um tamanho médio e é cinza, com algumas listras pretas. O fundo é uma parede bege.",
    "altEN": "A desk with an old white computer. On top of the keyboard, a cat stands, supporting its front paws on the monitor and facing the same. It is medium in size and gray with some black stripes. The background is a beige wall."
  },
  {
    "id": "0147",
    "file": "https://i.imgur.com/6GE8dG4.png",
    "altPT": "Um notebook em cima de uma cama. À sua frente, um gatinho filhote cinza está sentado. Ele é bem pequeno e gordinho, e encara a câmera com seus olhos azuis. O computador parece gigante em comparação ao seu tamanho.",
    "altEN": "A notebook on top of a bed. In front of you, a gray pup kitten is sitting. He is quite small and chubby, and he faces the camera with his blue eyes. The computer looks gigantic compared to its size."
  },
  {
    "id": "0148",
    "file": "https://i.imgur.com/0GPSwOE.png",
    "altPT": "Um gatinho laranja sentado em cima de um teclado. Ele é um pouquinho menor do que o monitor, e encara a tela fixamente, estando de costas para a câmera.",
    "altEN": "An orange kitten sitting on top of a keyboard. It is slightly smaller than the monitor, and it stares at the screen with its back to the camera."
  },
  {
    "id": "0149",
    "file": "https://i.imgur.com/HS7FQ7K.png",
    "altPT": "Um monitor antigo sem a tela da frente. Dentro dele, há alguns paninhos e um gato deitado. Ele é laranja com manchas pretas e a parte de baixo branca. Está encolhido em formato de bola, dormindo.",
    "altEN": "An old monitor without the front screen. Inside it, there are some cloths and a lying cat. It is orange with black spots and a white underside. He's curled up into a ball, sleeping."
  },
  {
    "id": "0150",
    "file": "https://i.imgur.com/bq6YoBB.png",
    "altPT": "Um gato em cima de um monitor preto. Sua parte de baixo é branca e sua parte de cima é cinza com listras pretas, e ele usa uma colheirinha rosa. Está se segurando no monitor, quase caindo devido à grossura do mesmo, e encara algo fora da imagem, que, pela claridade, parece ser uma janela.",
    "altEN": "A cat on top of a black monitor. His bottom is white and his top is gray with black stripes, and he wears a pink spoon. He is holding on to the monitor, almost falling over due to its thickness, and stares at something outside the image, which, by the brightness, appears to be a window."
  },
  {
    "id": "0151",
    "file": "https://i.imgur.com/RHnkmG1.png",
    "altPT": "Um notebook preto aberto em cima de uma cama. Em cima do teclado há um gatinho branco com algumas manchas cinzas. Ele é bem pequeno e peludo, e seus olhinhos azuis são vesgos. No canto inferior direito há uma data, indicando 4 de novembro de 2006, às 3:54h.",
    "altEN": "An open black notebook on top of a bed. On top of the keyboard is a white kitten with some gray spots. He is very small and furry, and his little blue eyes are cross-eyed. In the lower right corner is a date, indicating November 4, 2006 at 3:54 am."
  },
  {
    "id": "0152",
    "file": "https://i.imgur.com/mw8KiGF.png",
    "altPT": "Um notebook preto em cima de uma escrivaninha. Em cima do teclado há um gato preto. Seu pelo é ralo e ele vira o pescoço para trás, encarando a câmera com seus olhos amarelos. É um pouco maior do que a tela.",
    "altEN": "A black notebook on top of a desk. On top of the keyboard is a black cat. His fur is thin and he cranes his neck back, staring at the camera with his yellow eyes. It's a little bigger than the screen."
  },
  {
    "id": "0153",
    "file": "https://i.imgur.com/5E2V2pE.png",
    "altPT": "Um gato laranja filhote em cima de um notebook. Ele está de costas, bem perto da câmera, e encara a tela.",
    "altEN": "An orange kitten on top of a notebook. He's on his back, very close to the camera, and he's staring at the screen."
  },
  {
    "id": "0154",
    "file": "https://i.imgur.com/nVAdLUX.png",
    "altPT": "Um notebook meio rosado aberto em uma aba do facebook. Um gatinho preto com a parte de baixo branca está subindo no teclado, Ele posiciona suas patinhas dianteiras, olhando cuidadosamente as teclas.",
    "altEN": "A pinkish notebook open in a facebook tab. A black kitten with a white underside is climbing up on the keyboard. It positions its front paws, carefully looking at the keys."
  },
  {
    "id": "0155",
    "file": "https://i.imgur.com/IohljaU.png",
    "altPT": "Um notebook aberto um cima de uma mesa. Deitado sobre ele, há um gato preto com o pelo ralo. O gato é bem grande, cobrindo o teclado por inteiro. A mesa está bem bagunçada.",
    "altEN": "An open notebook on top of a table. Lying on top of it is a black cat with thin fur. The cat is quite large, covering the entire keyboard. The table is very messy."
  },
  {
    "id": "0156",
    "file": "https://i.imgur.com/kTV67AX.png",
    "altPT": "Um gato branco deitado em cima de um notebook fechado. Ele é pequeno e está deitado na ponta, e a sua cabeça está caindo para fora do mesmo.",
    "altEN": "A white cat lying on top of a closed notebook. He's small and he's lying on the edge, and his head is sticking out of it."
  },
  {
    "id": "0157",
    "file": "https://i.imgur.com/BE4agoB.png",
    "altPT": "Um notebook preto com três gatinhos em cima. O da esquerda é branco com manchas pretas, especialmente na parte superior, e está abaixado. O do centro é preto com o peito branco, e está sentado. O da direita é todo preto, e está deitado. A qualidade da imagem não está muito boa, pois uma janela atrás do computador faz claridade.",
    "altEN": "A black notebook with three kittens on top. The one on the left is white with black spots, especially on the top, and is lowered. The one in the center is black with a white chest, and is sitting. The one on the right is all black, and it's lying down. The image quality is not very good, as a window behind the computer makes light."
  },
  {
    "id": "0158",
    "file": "https://i.imgur.com/TbUXD6F.png",
    "altPT": "Um gato laranja de frente para um notebook. Suas patas estão no teclado, fazendo parecer que ele está digitando. Na tela, a foto de um esquilo.",
    "altEN": "An orange cat in front of a notebook. His paws are on the keyboard, making it look like he's typing. On the screen, a picture of a squirrel."
  },
  {
    "id": "0159",
    "file": "https://i.imgur.com/rQaucv5.png",
    "altPT": "Um notebook sendo mostrado de lado. Olhando para a tela, um gato bem peludo, branco na parte de baixo e preto na de cima. Ele aproxima o rosto e uma das patas da tela, como se quisesse pegá-la. No monitor, há a imagem de um gato branco lambendo a pata.",
    "altEN": "A notebook being shown from the side. Looking at the screen, a very furry cat, white on the bottom and black on the top. He brings his face and one of his paws to the canvas, as if he wants to catch it. On the monitor, there is an image of a white cat licking its paw."
  },
  {
    "id": "0160",
    "file": "https://i.imgur.com/XT7XkZA.png",
    "altPT": "Um notebook semi-aberto. Entre o teclado e a tela, há um gatinho filhote. Ele possui o pelo cinza claro e está dormindo, sendo possível ver apenas a sua cabeça e uma de suas patas.",
    "altEN": "A half-open notebook. Between the keyboard and the screen, there is a kitten. It has light gray fur and is sleeping, with only its head and one of its paws visible."
  },
  {
    "id": "0161",
    "file": "https://i.imgur.com/Vg81X2D.png",
    "altPT": "Um gatinho em cima de um notebook aberto. Ele é bem pequeno, o lado direito de seu rosto é cinza e o esquerdo é branco. Seu peito também é branco. Ele aproxima a cabeça da câmera, encarando-a com seus olhos grandes.",
    "altEN": "A kitten on top of an open notebook. He is quite small, the right side of his face is gray and the left side is white. His chest is also white. He puts his head closer to the camera, staring at it with his big eyes."
  },
  {
    "id": "0162",
    "file": "https://i.imgur.com/y6t6V5O.png",
    "altPT": "Um notebook sobre o parapeito de uma janela. Está aberto em um texto e há uma mão repousada do lado dele. Ao lado, apoiando a cabeça na mão, um gato laranja dorme. Ele é bem grande e sua cabeça cobre a mão quase inteira.",
    "altEN": "A notebook on a windowsill. It is open on a text and there is a hand resting beside it. Next to it, resting its head on its hand, an orange cat sleeps. He is quite large and his head covers almost his entire hand."
  },
  {
    "id": "0163",
    "file": "https://i.imgur.com/zGp0Hio.png",
    "altPT": "Um notebook aberto em um desenho infantil. Nele, há um gato laranja ronronando em um campo. Olhando fixamente para a tela, um gatinho filhote, também laranja, está deitado ao lado do teclado.",
    "altEN": "An open notebook in a children's drawing. In it, there is an orange cat purring in a field. Staring at the screen, a kitten, also orange, is lying next to the keyboard."
  },
  {
    "id": "0164",
    "file": "https://i.imgur.com/4pJ0f3l.png",
    "altPT": "Um notebook aberto. Em cima dele, um gatinho branco bem peludo. Ele é maior do que o notebook, mas a impressão é que o notebook é menor do que deveria ser. O filhote encara a câmera com seus olhos claros e sua patinha direita está levantada.",
    "altEN": "An open notebook. On top of it, a very furry white kitten. It is larger than the notebook, but the impression is that the notebook is smaller than it should be. The puppy faces the camera with its clear eyes and its right paw is raised."
  },
  {
    "id": "0165",
    "file": "https://i.imgur.com/GCB8iPQ.png",
    "altPT": "Um notebook aberto em uma tela de descanso. Em cima dele, um gatinho escaminha dorme. Ele está todo enrolado, abraçando a si mesmo com o rabo e usando a pata traseira de travesseiro.",
    "altEN": "An open notebook on a rest screen. On top of him, a scaly kitten sleeps. He's all curled up, hugging himself with his tail and using his hind leg as a pillow."
  },
  {
    "id": "0166",
    "file": "https://i.imgur.com/C9HCLT4.png",
    "altPT": "Um notebook preto aberto no youtube, em uma aba de sugestão de vídeos. Um gato escaminha está sentado no teclado, encarando a tela, como se estivesse escolhendo o que assistir. Seu pelo é bem rente e ele está de costas.",
    "altEN": "A black notebook open on youtube, in a video suggestion tab. A scaly cat is sitting at the keyboard, staring at the screen, as if he's choosing what to watch. His fur is very close and he is on his back."
  },
  {
    "id": "0167",
    "file": "https://i.imgur.com/Pq4CSEL.png",
    "altPT": "Um notebook aberto aparece de lado, bem e perto. Vindo de trás do mesmo, um gatinho mostra a sua cabeça. Ele é cinza e possui umas listras pretas, e seu fucinho é branco. Seus olhos estão dilatados e meio vesguinhos, e seu reflexo aparece na tela.",
    "altEN": "An open notebook appears from the side, close and wide. Coming from behind it, a kitten shows its head. He is gray and has black stripes, and his muzzle is white. His eyes are dilated and squinted, and his reflection appears on the screen."
  },
  {
    "id": "0168",
    "file": "https://i.imgur.com/7fBzwPZ.png",
    "altPT": "Parte de um monitor com uma webcam em cima. Apoiado nele, um gatinho. Ele é laranja e seu focinho é branco. Olha para baixo com seus olhos amarelos, e apoia suas patas dianteiras no topo da tela. Elas são brancas.",
    "altEN": "Part of a monitor with a webcam on top. Leaning on it, a kitten. He is orange and his muzzle is white. It looks down with its yellow eyes, and braces its front paws at the top of the screen. They are white."
  },
  {
    "id": "0169",
    "file": "https://i.imgur.com/76thfHG.png",
    "altPT": "A tela mostra um gatinho deitado apoiando a cabeça no teclado de um notebook. Ele é bege com listras pretas. Seus olhos estão fechados e sua língua está para fora.",
    "altEN": "The screen shows a kitten lying down resting its head on a notebook keyboard. It is beige with black stripes. His eyes are closed and his tongue is out."
  },
  {
    "id": "0170",
    "file": "https://i.imgur.com/qj31EWO.png",
    "altPT": "Um notebook completamente aberto, como se fosse plano. Deitado na tela, um gato bem peludo olha para trás, encarando a câmera. Sua parte de cima é preta, e sua parte de baixo e rosto são brancas. Ele é bem bigodudo, e seus olhos são grandes.",
    "altEN": "A notebook completely open, as if it were flat. Lying on the screen, a furry cat looks back, facing the camera. His top is black, and his underside and face are white. He is very mustachioed, and his eyes are large."
  },
  {
    "id": "0171",
    "file": "https://i.imgur.com/a1gGvSx.png",
    "altPT": "Um gato preto deitado em cima de um notebook branco. Ele está esticado e com a barriga para cima. Seus olhos amarelos encaram a câmera e sua boca está aberta. A tela mostra uma aba do firefox.",
    "altEN": "A black cat lying on top of a white notebook. He is stretched out and on his stomach. His yellow eyes stare at the camera and his mouth is open. The screen shows a firefox tab."
  },
  {
    "id": "0172",
    "file": "https://i.imgur.com/zGOrWfn.png",
    "altPT": "Um gatinho branco com manchas pretas está deitado em cima de um notebook branco aberto. Sua cabeça está próxima da câmera, apoiada em uma de suas patas, e a outra está esticada.",
    "altEN": "A white kitten with black spots is lying on top of an open white notebook. His head is close to the camera, resting on one of his paws, and the other is stretched out."
  },
  {
    "id": "0173",
    "file": "https://i.imgur.com/MGROm2a.png",
    "altPT": "Um notebook aberto. Na tela, há a foto de um gatinho bem pequeno. Sua barriga é branca e suas costas e cabeça são de um cinza escuro. Ele está dormindo todo enroladinho. Em cima do teclado do notebook, o mesmo gato dorme. Ele está um pouco maior e está esticado, com o queixo virado pra cima.",
    "altEN": "An open notebook. On the screen is a picture of a very small kitten. His belly is white and his back and head are a dark gray. He's sleeping all curled up. On top of the notebook keyboard, the same cat sleeps. He's a little bigger and he's stretched out with his chin up."
  },
  {
    "id": "0174",
    "file": "https://i.imgur.com/23Xyhl5.png",
    "altPT": "Foto do teclado de um notebook cinza. Vindo de trás dele, uma pata branca com as garras à mostra.",
    "altEN": "Photo of a gray notebook keyboard. Coming from behind him, a white paw with claws showing."
  },
  {
    "id": "0175",
    "file": "https://i.imgur.com/cMg6GtB.png",
    "altPT": "Um suporte na cama apoiando um notebook. No lençol, um outro teclado. Debaixo do suporte, um gato bege está deitado virado para cima. Suas orelhas e focinho são marrons, e ele encara a câmera com seus olhos dilatados, com o queixo para cima. Suas patas dianteiras estão apoiadas no suporte do pc.",
    "altEN": "A bed stand supporting a notebook. On the sheet, another keyboard. Under the stand, a beige cat is lying face up. His ears and muzzle are brown, and he faces the camera with his eyes dilated, his chin up. His front paws are resting on the pc stand."
  },
  {
    "id": "0176",
    "file": "https://i.imgur.com/f3ve2tO.png",
    "altPT": "Uma mesa de madeira com um computador branco antigo. Em frente à ela, um gatinho está sentado. Ele é escaminha e sua parte de baixo é branca. É bem pequeno, sendo sua altura sentado metade da altura do monitor. Seu rabinho está caído para fora da mesa, que está super bagunçada.",
    "altEN": "A wooden table with an old white computer. In front of her, a kitten is sitting. It is scaly and its underside is white. It is quite small, being its sitting height half the height of the monitor. His tail is hanging off the table, which is super messy."
  },
  {
    "id": "0177",
    "file": "https://i.imgur.com/dDaNVdQ.png",
    "altPT": "Um gatinho filhote sentado em uma mini cadeira. Ele possui o peito branco e as coisas cinza, e usa uma coleirinha preta e branca. À sua frente, uma mini mesa com um mini computador. Uma de suas patinhas está no teclado, e a outra no mouse.",
    "altEN": "A kitten sitting on a mini chair. He has a white chest and gray things, and wears a black and white collar. In front of him, a mini table with a mini computer. One of his paws is on the keyboard, the other on the mouse."
  },
  {
    "id": "0178",
    "file": "https://i.imgur.com/GJcp11B.jpg",
    "altPT": "Um coala em uma árvore. Ele é cinza, bem peludinho, e está dormindo debruçado no tronco. Suas patinhas abraçam ela, e o fundo são folhas verdes.",
    "altEN": "A koala in a tree. He's gray, very furry, and he's sleeping on the trunk. His paws hug her, and the background is green leaves."
  },
  {
    "id": "0179",
    "file": "https://i.imgur.com/aE0JhHs.jpg",
    "altPT": "Um cachorro mostra apenas a cabeça. Ele é bege e seu fucinho é longo. Usa um gorro russo preto com o símbolo do comunismo, que consiste de uma foice e um martelo cruzados. Ao fundo, uma bandeira vermelha con o mesmo símbolo.  O cachorro está em um quarto.",
    "altEN": "A dog shows only its head. He is beige and his muzzle is long. He wears a black Russian beanie with the symbol of communism, which consists of a crossed hammer and sickle. In the background, a red flag with the same symbol. The dog is in a room."
  },
  {
    "id": "0180",
    "file": "https://i.imgur.com/xlPkiFA.jpg",
    "altPT": "Uma lontra deitada em um chão de madeira. Ela aparece apenas da metade para cima e encara a câmera. Com suas patinhas, abraça uma lontra de pelúcia.",
    "altEN": "An otter lying on a wooden floor. She appears only halfway up and faces the camera. With her paws, she hugs a stuffed otter."
  },
  {
    "id": "0181",
    "file": "https://i.imgur.com/OShUvYv.jpg",
    "altPT": "Imagem dividida em dois quadros. No superior, um coelhinho branco aparece de frente para um computador, encarando o monitor. Ele é bem pequeno, seus olhinhos são castanhos e suas orelhas estão abaixadas. O fundo é uma parede cinza. A parte de baixo possui uma imagem semelhante. Nesta, o coelhinho olha para a frente, como se estivesse encarando quem está olhando. Sua expressão lembra uma cara de bravo ou de confuso.",
    "altEN": "Image divided into two frames. At the top, a white bunny appears in front of a computer, staring at the monitor. He is quite small, his eyes are brown and his ears are down. The background is a gray wall. The bottom has a similar image. In this one, the bunny looks straight ahead, as if staring at whoever is looking. His expression resembles an angry or confused face."
  },
  {
    "id": "0182",
    "file": "https://i.imgur.com/56YllYN.jpg",
    "altPT": "Uma pessoa deitada em uma banheira cheia, mostrando apenas as pernas. Próximo ao pé, um gato. Ele é grandinho, com a parte de baixo branca e a de cima laranja. A água bate em sua barriga e ele olha para algo do lado de fora da banheira. A foto possui uma legenda, que está escrito \"então isso aconteceu...\" em inglês.",
    "altEN": "A person lying in a full bathtub, showing only their legs. Next to the foot, a cat. It's big, with a white bottom and orange top. The water hits his belly and he looks at something outside the tub. The photo has a caption, which reads \"so this happened..."
  },
  {
    "id": "0183",
    "file": "https://i.imgur.com/hxzxceg.jpg",
    "altPT": "Na imagem, um gatinho cinza deitado de barriga pra cima aparece em um sofá marrom. As suas patas dianteiras estão viradas de forma que a parte superior de seu corpo está virada para a vera. Ele exibe uma cara de satisfação e felicidade. Ao fundo, é possível ver o piso de cerâmicas marrom, uma parede branca e uma pequena parte de uma porta, também marrom.",
    "altEN": "In the image, a gray kitten lying on its back appears on a brown sofa. His front legs are turned so that his upper body is facing the vera. He wears a face of satisfaction and happiness. In the background, you can see the brown ceramic floor, a white wall and a small part of a door, also brown."
  },
  {
    "id": "0184",
    "file": "https://i.imgur.com/wIydwv8.png",
    "altPT": "Um gato bege em cima de uma cama. Ele é bem peludo e sua orelha e rosto são mais escuros, alaranjados. Está de pé, vindo da direita para a esquerda, e encara a câmera com os olhos dilatados. A cama está bagunçada e o fundo é uma parece cinza.",
    "altEN": "A beige cat on top of a bed. He is very hairy and his ear and face are darker, orange. He's standing, coming from right to left, and staring at the camera with dilated eyes. The bed is messy and the background is a gray look."
  },
  {
    "id": "0185",
    "file": "https://i.imgur.com/VvfQzVV.jpg",
    "altPT": "Um panfleto impresso. Na parte superior está escrito \"Cachorro perdido\". Na parte de baixo, uma lista de três itens, sendo 1. não late muito, 2. muito bem comportado e 3. gosta de Metallica. No centro, a foto do suposto cachorro: branco com um rabinho curto e um longo bico, de pé sobre duas patas. No entanto, não é um cachorro, e sim um pato.",
    "altEN": "A printed pamphlet. At the top it says \"Lost Dog\". At the bottom, a list of three items, being 1. doesn't bark a lot, 2. very well behaved and 3. likes Metallica. In the center, the photo of the supposed dog: white with a short tail and a long beak, standing on two legs. However, he is not a dog, but a duck."
  },
  {
    "id": "0186",
    "file": "https://i.imgur.com/SOeinhX.jpg",
    "altPT": "Dois axolotes abraçadinhos. O da esquerda é preto e está com as patinhas abertas. O da direita é branco com as guelras rosas, e está encostado em um vidro. Estão dentro do que parece um aquário, e há flores artificialismo rosas ao fundo.",
    "altEN": "Two hugging axolotls. The one on the left is black and has its paws open. The one on the right is white with pink gills, and it's leaning against a glass. They are inside what looks like an aquarium, and there are artificial pink flowers in the background."
  },
  {
    "id": "0187",
    "file": "https://i.imgur.com/PlHl1U1.jpg",
    "altPT": "Um filhote de girafa sentado em um chão de feno. A sua expressão é neutra e ele olha para a câmera com as orelhas erguidas. Ao fundo, é possível ver uma parede bege e uma preta.",
    "altEN": "A baby giraffe sitting on a hay floor. His expression is neutral and he looks at the camera with his ears pricked. In the background, you can see a beige and a black wall."
  },
  {
    "id": "0188",
    "file": "https://i.imgur.com/wAj64Zc.jpg",
    "altPT": "Um gato de pelo bege e marrom sentado (literalmente, sentado apenas sobre as patas traseiras) em um chão de cerâmica clara. Ele usa uma coleira rosa e ao fundo é possível ver uma bacia prateada cheia de água e uma parede branca. A expressão dele é quase indecifrável, mas ele parece entediado.",
    "altEN": "A beige and brown fur cat sitting (literally, sitting only on its hind legs) on a light ceramic floor. He wears a pink collar and in the background you can see a silver basin full of water and a white wall. His expression is almost unreadable, but he looks bored."
  },
  {
    "id": "0189",
    "file": "https://i.imgur.com/M8BolcP.jpg",
    "altPT": "Um gato branco de olhos verdes está sentado sobre uma manta cinza olhando diretamente para a câmera. A expressão dele é raivosa e é possível ver um prato branco com alface e um pouco de tomate cereja na sua frente. O ângulo da câmera é um pouco alto.",
    "altEN": "A white cat with green eyes is sitting on a gray blanket looking straight at the camera. His expression is angry and you can see a white plate with lettuce and some cherry tomatoes in front of him. The camera angle is a little high."
  },
  {
    "id": "0190",
    "file": "https://i.imgur.com/eAvkxPt.jpg",
    "altPT": "Foto tirada de baixo onde um gato mostra apenas seu rosto. Ele é bege e encaram a câmera com seus olhos esverdeados bem abertos e uma expressão de curiosidade. Suas orelhas pontudas são bem pequenas e seu nariz possui umas manchinhas pretas. O fundo é um teto bege com um círculo.",
    "altEN": "Photo taken from below where a cat only shows its face. He is beige and they face the camera with their greenish eyes wide open and an expression of curiosity. His pointed ears are very small and his nose has black spots. The background is a beige ceiling with a circle."
  },
  {
    "id": "0191",
    "file": "https://i.imgur.com/ZqcO4Xc.jpg",
    "altPT": "Gato branco sentado de frente para a câmera. Sua cabeça é um pouco grande e seus olhos azuis levemente vesgos encaram a câmera. Ele usa uma fita vermelha no pescoço. O todo de sua cabeça é de um cinza bem clarinho.",
    "altEN": "White cat sitting facing the camera. His head is a little big and his blue eyes slightly cross-eyed stare at the camera. He wears a red ribbon around his neck. His whole head is a very light gray."
  },
  {
    "id": "0192",
    "file": "https://i.imgur.com/9kmN54P.jpg",
    "altPT": "Foto de um gato dentro de uma caixa retangular estreita e alta. Ela é branca, permitindo ser a silhueta do gato do lado de dentro. Ele possui a parte de baixo branca e as costas bege. Suas 4 patas estão encostadas na caixa. Na parte de cima dela, há um buraco feito para segurá-la, e é possível ver os grandes olhos do gato através dele. No topo, fora da caixa, também é possível ver as orelhas.",
    "altEN": "Photo of a cat inside a tall, narrow rectangular box. It is white, allowing it to be the silhouette of the cat inside. It has a white bottom and a beige back. Its 4 paws are leaning against the box. At the top of it, there is a hole made to hold it, and you can see the big eyes of the cat through it. At the top, outside the box, you can also see the ears."
  },
  {
    "id": "0193",
    "file": "https://i.imgur.com/zZPSnss.jpg",
    "altPT": "Foto de um hamster laranja em cima de uma mesa, em frente a um prato com pedaços de torrada. Ao fundo, uma caneca branca desfocada.",
    "altEN": "Photo of an orange hamster on top of a table, in front of a plate with pieces of toast. In the background, a blurred white mug."
  },
  {
    "id": "0194",
    "file": "https://i.imgur.com/DSVqNQn.jpg",
    "altPT": "Foto de uma piscina com uma boia de jacaré. Em cima dela, um crocodilo descansa, tomando sol. Sua cabeça está deitada no rabo da boia e sua boca está aberta.",
    "altEN": "Photo of a swimming pool with an alligator float. On top of it, a crocodile rests, basking in the sun. Its head is lying on the buoy's tail and its mouth is open."
  },
  {
    "id": "0195",
    "file": "https://i.imgur.com/4tSrE6G.jpg",
    "altPT": "Foto de um gato branco da barriga para cima. Ele é gordinho e está deitado de lado, virado para a esquerda. Suas patinhas estão recolhidas próximo ao corpo, como os bracinhos de um t-rex, e seus nariz está encostado na parede branca, estando levemente amassado. O fundo é uma cama com um lençol colorido em verde, branco, azul e rosa.",
    "altEN": "Photo of a white cat from the belly up. He is chubby and is lying on his side, facing left. His paws are tucked close to his body, like the arms of a t-rex, and his nose is leaning against the white wall, being slightly dented. The background is a bed with a sheet colored in green, white, blue and pink."
  },
  {
    "id": "0196",
    "file": "https://i.imgur.com/0Lm9L9E.jpg",
    "altPT": "Foto de dois gatos, um de frente para o outro. O da esquerda é siamês, tendo sua pelagem rala de um bege bem claro e suas patas e focinho marrons. Ele estende sua cabeça para a direita, mostrando apenas a parte de baixo da mesa. Está cheirando o fucinho do outro, que é de um bege acinzentado. Ele é mais gordo e está deitado por cima de sua pata, retribuindo o cheiro que está recebendo. À frente deles há uma grade de ferro.",
    "altEN": "Photo of two cats, facing each other. The one on the left is Siamese, with a light beige thin coat and brown paws and muzzle. He extends his head to the right, showing only the underside of the table. He's sniffing the other's muzzle, which is a greyish beige. He's fatter and is lying on top of his paw, returning the scent he's getting. Ahead of them is an iron grate."
  },
  {
    "id": "0197",
    "file": "https://i.imgur.com/5VIV8OI.jpg",
    "altPT": "Gata preta bastante peluda dentro de uma sacola. Seus olhos são amarelos e ela está enrolada, olhando para a direita. A sacola é marrom claro e de papel. Uma pessoa de pele branca segura ambas as alças da sacola com as mãos, deixando-a aberta. O fundo é um chão cinza e uma parede levemente desgastada.",
    "altEN": "Pretty furry black cat inside a bag. Her eyes are yellow and she is curled up, looking to the right. The bag is light brown and paper. A white-skinned person holds both handles of the bag with his hands, leaving it open. The background is a gray floor and a slightly worn wall."
  },
  {
    "id": "0198",
    "file": "https://i.imgur.com/IV4hrtw.jpg",
    "altPT": "Foto de um cachorro em um gramado. Ele está sentado, coberto por um lençol branco que mostra apenas seus olhos e fucinho. É bege, e segura em sua boca um balde laranja com uma abóbora desenhada.",
    "altEN": "Photo of a dog on a lawn. He is seated, covered by a white sheet that only shows his eyes and snout. It's beige, and it holds in its mouth an orange bucket with a pumpkin on it."
  },
  {
    "id": "0199",
    "file": "https://i.imgur.com/VEuk6fp.jpg",
    "altPT": "Um patinho amarelo e de bico rosa sentado, com a cabeça apoiada sobre si mesmo. No topo de sua cabeça há uma folha verde cortada em forma de coração e seus olhos estão fechados em uma expressão sonolenta. Ao fundo, vemos um cenário muito escuro e desfocado.",
    "altEN": "A yellow duckling with a pink beak is sitting with its head resting on itself. On top of his head is a green leaf cut into a heart shape and his eyes are closed in a sleepy expression. In the background, we see a very dark and blurred scene."
  },
  {
    "id": "0200",
    "file": "https://i.imgur.com/zn9L5GX.jpg",
    "altPT": "Um gatinho filhote de pé em duas patas. Ele é laranja, com a barriga branca. Seus olhos escuros encaram a câmera e seus bracinhos estão junto ao seu corpo. Em cima, em inglês, está escrito \"texto de cima\" e embaixo está escrito \"texto de baixo\".",
    "altEN": "A kitten standing on two paws. He is orange, with a white belly. His dark eyes stare at the camera and his little arms are close to his body. Above, in English, it says \"text from above\" and below it is written \"text from below\"."
  },
  {
    "id": "0201",
    "file": "https://i.imgur.com/oFxGJVx.jpg",
    "altPT": "Foto de um filhote de pastor alemão olhando para frente. Ele é bem pequeno, tem pelos castanhos na maior parte do corpo, nas costas o pelo é mais escuro, na cor preta, e nas patinhas é mais claro, igual um caramelo. Seu fucinho também é preto. O fundo é um quintal, com alguns vasos de planta.",
    "altEN": "Photo of a German Shepherd puppy looking straight ahead. He is very small, has brown fur on most of his body, on his back the fur is darker, in black, and on his paws it is lighter, like a caramel. His muzzle is also black. The back is a backyard, with some potted plants."
  },
  {
    "id": "0202",
    "file": "https://i.imgur.com/qTZ71Zv.jpg",
    "altPT": "Foto de um gato laranja com um gorro de natal. O gorro é bem maior do que a cabeça dele, vermelho com as bordas brancas. Ele usa também uma coleira com um sininho e um óculos de sol branco. O fundo mostra algumas árvores desfocadas.",
    "altEN": "Photo of an orange cat with a Christmas hat. The hat is much bigger than his head, red with white edges. He also wears a collar with a bell and white sunglasses. The background shows some blurred trees."
  },
  {
    "id": "0203",
    "file": "https://i.imgur.com/epjQ39q.jpg",
    "altPT": "Foto de um gato cinza listrado em uma árvore de natal. Ele está no meio dos galhos, com seus olhos azuis dilatados olhando para além da câmera. A árvore está enfeitada com luzes pisca-pisca e bolas pretas e pratas.",
    "altEN": "Photo of a gray striped cat on a Christmas tree. He's in the middle of the branches, his blue eyes dilated looking past the camera. The tree is decorated with twinkling lights and black and silver balls."
  },
  {
    "id": "0204",
    "file": "https://i.imgur.com/ZL2oh4s.jpg",
    "altPT": "Foto de um ouriço na areia, sentado. Sua barriga é branca e está virada para a câmera. Seus braços e pernas estão abertos e seu rostinho olha para nós. Ao fundo, o mar e o céu de uma mesma tonalidade.",
    "altEN": "Photo of a hedgehog in the sand, sitting. His belly is white and is facing the camera. Her arms and legs are open and her little face looks at us. In the background, the sea and the sky of the same hue."
  },
  {
    "id": "0205",
    "file": "https://i.imgur.com/hyAPDM9.jpg",
    "altPT": "Foto de uma calopsita no braço de uma pessoa. Ela é gorda, com as penas inferiores brancas e a cabeça amarela. Olha para a câmera e a posição de suas asas se assemelham a alguém pondo o braço na cintura, trazendo uma pose desafiadora. O fundo é uma parede desfocada.",
    "altEN": "Photo of a cockatiel on a person's arm. She is plump, with white lower feathers and a yellow head. She looks at the camera and the position of her wings resembles someone putting their arm around their waist, bringing a defiant pose. The background is a blurred wall."
  },
  {
    "id": "0206",
    "file": "https://i.imgur.com/Rbhkc7r.jpg",
    "altPT": "Foto de um gato cinza deitado em um colchão. Ele é tigrado, com listras pretas, usa um óculos de sol rosa que deixa apenas um de seus olhos verde-amarelados à mostra e possui diversas notas de dinheiro sobre si, em sua cabeça e corpo.",
    "altEN": "Photo of a gray cat lying on a mattress. He is brindle, with black stripes, wears pink sunglasses that show only one of his yellow-green eyes, and has several bills of money on his head and body."
  },
  {
    "id": "0207",
    "file": "https://i.imgur.com/woP5PgX.jpg",
    "altPT": "Foto de um gato preto que aparece do busto para cima, virado para a esquerda. Sua boca está aberta, como se estivesse preste a atacar, e mostra 4 presas, duas em cima e duas embaixo. Ele usa uma capa de vampiro preta e vermelha. O fundo mostra uma árvore e algumas folhas.",
    "altEN": "Photo of a black cat that appears from the bust up, facing left. Its mouth is open, as if about to attack, and shows 4 fangs, two above and two below. He wears a black and red vampire cape. The background shows a tree and some leaves."
  },
  {
    "id": "0208",
    "file": "https://i.imgur.com/0R4dsDE.jpg",
    "altPT": "Uma ovelha de pé em um gramado. Ela é branca, está levemente virada para a direita e olha para a câmera com seus olhinhos pretos. Usa um casaquinho azul com detalhes em vermelho e amarelo e uma touca combinando com um pompom na ponta.",
    "altEN": "A sheep standing on a lawn. She is white, is turned slightly to the right and looks at the camera with her little black eyes. She wears a blue cardigan with red and yellow accents and a matching bonnet with a pompom at the end."
  },
  {
    "id": "0209",
    "file": "https://i.imgur.com/atQfpOB.jpg",
    "altPT": "Ouriço deitado em um sofá. Ele está encostado no encontro do braço do sofá com o encosto, bem encolhidinho e com uma carinha um pouco triste.",
    "altEN": "Hedgehog lying on a sofa. He's leaning against the arm of the sofa and the backrest, curled up tight and with a slightly sad face."
  },
  {
    "id": "0210",
    "file": "https://i.imgur.com/iJlwZM8.jpg",
    "altPT": "Cachorrinho branco sentado no banco dianteiro de um carro, ele é tão pequeno que mal alcança o volante. Possui o pelo ralo e olhos pretos arregalados encarando a câmera, além de usar uma blusa preta com um desenho de uma coroa. Suas patas dianteiras estão no volante do carro.",
    "altEN": "Little white dog sitting in the front seat of a car, he is so small he can barely reach the steering wheel. He has thin fur and wide black eyes staring at the camera, in addition to wearing a black blouse with a design of a crown. His front paws are on the steering wheel of the car."
  },
  {
    "id": "0211",
    "file": "https://i.imgur.com/pY6Jvsg.png",
    "altPT": "Foto de um gato bem peludo cinza com a barriga e fucinho brancos. Ele está deitado em uma coberta azul e encostado em uma parede branca, e à sua frente há o livro dO Manifesto Comunista, por Karl Marx e Friedrich Engels. Seus olhos claros encaram a página do livro com atenção.",
    "altEN": "Photo of a very furry gray cat with a white belly and muzzle. He is lying on a blue blanket and leaning against a white wall, and in front of him is the book The Communist Manifesto, by Karl Marx and Friedrich Engels. His pale eyes stare at the page of the book intently."
  },
  {
    "id": "0212",
    "file": "https://i.imgur.com/S5DL0rz.jpg",
    "altPT": "Foto de um gato laranja filhote sentado. Seus pelos são arrepiados, seus olhos são claros e ele tem cara de sono. Há um arco-íris nele e o título \"gay\" no centro da imagem.",
    "altEN": "Photo of a sitting orange kitten cat. His hair stands on end, his eyes are clear and he looks sleepy. There is a rainbow on it and the title \"gay\" in the center of the image."
  },
  {
    "id": "0213",
    "file": "https://i.imgur.com/ifNh8RO.jpg",
    "altPT": "Foto de um guaxinim em cima de um patinete rosa choque. O bicho é gordo, com os pelos cinzas, e está de pé no veículo, segurando no guidão e olhando para a direita. O fundo é um corredor.",
    "altEN": "Photo of a raccoon on top of a hot pink scooter. The animal is fat, with gray fur, and is standing in the vehicle, holding the handlebars and looking to the right. The background is a hallway."
  },
  {
    "id": "0214",
    "file": "https://i.imgur.com/pLaEX5M.png",
    "altPT": "Foto de um gato branco gordo com manchas marrons e beges. Ele está de pé, andando e levemente virado para a esquerda, e segura com a boca uma haste com a bandeira lésbica, que consiste de cinco faixas horizontais nas cores vermelho, laranja, branco, rosa claro e rosa escuro, respectivamente. O fundo é um tapete.",
    "altEN": "Photo of a fat white cat with brown and beige spots. He is standing, walking and slightly turned to the left, and holds in his mouth a pole with the lesbian flag, which consists of five horizontal stripes in red, orange, white, light pink and dark pink, respectively. The background is a rug."
  },
  {
    "id": "0215",
    "file": "https://i.imgur.com/ZaGDBPt.jpg",
    "altPT": "Foto de um patinho em cima de várias vitória régias. Ele é amarelo e bem pequeno, com as penas arrepiadas, e está virado para a direita. Há uma florzinha branca à sua frente e as plantas estão molhadas.",
    "altEN": "Photo of a duckling on top of several water lilies. It is yellow and very small, with ruffled feathers, and it faces to the right. There is a little white flower in front of you and the plants are wet."
  },
  {
    "id": "0216",
    "file": "https://i.imgur.com/EZbX6qC.jpg",
    "altPT": "Foto de uma cabrinha branca com as patas marrons. Ela está de frente para a câmera e usa um agasalho laranja com gola alta. O fundo é uma parede branca e feno.",
    "altEN": "Photo of a white goat with brown paws. She is facing the camera and is wearing an orange sweatshirt with a high collar. The background is a white wall and hay."
  },
  {
    "id": "0217",
    "file": "https://i.imgur.com/DTeoYdf.jpg",
    "altPT": "Foto de um cachorro branco com manchas marrons. Ele olha para o alto, para a câmera, e balança o rabo bem rápido, sendo possível ver apenas o reflexo do rabo como um leque. O fundo é um chão preto.",
    "altEN": "Photo of a white dog with brown spots. He looks up at the camera and wags his tail very quickly, with only the reflection of the tail visible as a fan. The background is a black floor."
  },
  {
    "id": "0218",
    "file": "https://i.imgur.com/E7KC9h7.png",
    "altPT": "Foto de dois gatinhos um ao lado do outro. O da esquerda é laranja, e está de frente para a câmera com os olhos fechados e a cabeça levemente inclinada para a esquerda. O da direita é branco na barriga, pescoço e focinho/nariz e meio marrom na parte superior e usa uma coleira vermelha. Ele morde a bochecha do outro gato, sem exercer força. O fundo é uma parede e uma bolsa preta.",
    "altEN": "Photo of two kittens next to each other. The one on the left is orange, and is facing the camera with eyes closed and head tilted slightly to the left. The one on the right is white on the belly, neck and snout/nose and half brown on top and wears a red collar. He bites the other cat's cheek, not exerting force. The background is a wall and a black bag."
  },
  {
    "id": "0219",
    "file": "https://i.imgur.com/7fou7SU.jpg",
    "altPT": "Foto de duas mãos segurando um gatinho recém-nascido. Seus pelos são brancos e bem ralinhos, e não cobrem o topo de sua cabeça. Seus olhos estão fechados.",
    "altEN": "Photo of two hands holding a newborn kitten. His fur is white and very fine, and does not cover the top of his head. His eyes are closed."
  },
  {
    "id": "0220",
    "file": "https://i.imgur.com/hjHOBeL.png",
    "altPT": "Foto de um gatinho filhote dentro de um copo de plástico. Ele é branco na parte de baixo e marrom e preto nas costas e topo da cabeça. Está dormindo, com os olhinhos fechados e a boca levemente aberta, e suas patinhas estão apoiadas na parede do copo transparente. O copo está em uma mesa de madeira, e atrás dele há outro gatinho dormindo, dessa vez todo preto com as patinhas brancas. O fundo mostra uma moto.",
    "altEN": "Photo of a kitten inside a plastic cup. It is white on the underside and brown and black on the back and top of the head. He is sleeping, with his eyes closed and his mouth slightly open, and his paws are leaning against the wall of the transparent glass. The cup is on a wooden table, and behind it is another sleeping kitten, this time all black with white paws. The background shows a motorcycle."
  },
  {
    "id": "0221",
    "file": "https://i.imgur.com/ZJrIwtE.jpg",
    "altPT": "Foto de um filhote de gato cinza. Ele é gordinho e sua expressão é uma mistura de triste e bravo. Suas orelhas são arredondadas e seu rabo está para cima. Ele está num carpete branco em frente a uma janela.",
    "altEN": "Photo of a gray kitten. He is chubby and his expression is a mixture of sad and angry. Its ears are rounded and its tail is up. He's on a white carpet in front of a window."
  },
  {
    "id": "0222",
    "file": "https://i.imgur.com/RBYsE81.jpg",
    "altPT": "Foto de uma capivara e um pato se encarando. Ela está na parte esquerda superior da imagem, virada para a direita, e aparece só da cintura para cima. É pequena, mas tem um olhar de superioridade. Ele está na parte direito inferior, quase de costas para a câmera. Parece acuado.",
    "altEN": "Photo of a capybara and a duck facing each other. She is in the upper left part of the image, facing right, and appears only from the waist up. She is petite but has a superior look. He's in the lower right, almost with his back to the camera. He looks cornered."
  },
  {
    "id": "0223",
    "file": "https://i.imgur.com/BcLhoTy.jpg",
    "altPT": "Foto de um ouriço em cima de uma coberta peludinha. Ele é pequenininho e está de frente para a câmera, segurando na coberta com uma das patinhas enquanto morde a ponta dela. O fundo é um sofá cinza.",
    "altEN": "Photo of a hedgehog on top of a furry blanket. He is tiny and stands for the camera, holding it in front with one of his paws as he bites the end of it. The background is a gray sofa."
  },
  {
    "id": "0224",
    "file": "https://i.imgur.com/aHDuW8F.png",
    "altPT": "Foto tirada do alto de uma girafa muito perto da câmera, dando a sensação de que o focinho é maior do que deveria e o corpo menor. Ao fundo, outra girafa, de costas, além de um chão de areia e alguns arbustos.",
    "altEN": "Photo taken from the top of a giraffe very close to the camera, giving the feeling that the snout is bigger than it should be and the body smaller. In the background, another giraffe, on its back, in addition to a sandy floor and some bushes."
  },
  {
    "id": "0225",
    "file": "https://i.imgur.com/hg5FLYA.png",
    "altPT": "Foto de um tubarão branco tirada de um ângulo de baixo. Ele é branco embaixo e acinzentado de cima, e está parado no centro da imagem, olhando para a câmera e sorrindo. O fundo é o mar.",
    "altEN": "Photo of a great white shark taken from a low angle. He's white below and gray above, and he's standing in the center of the image, looking at the camera and zooming in. The background is the sea."
  },
  {
    "id": "0226",
    "file": "https://i.imgur.com/sIEKvUj.png",
    "altPT": "Foto tirada de cima mostrando um gatinho laranja sentado, virado para a direita. Nas suas costas, uma mochilinha azul com uma estampa do mapa mundi.",
    "altEN": "Photo taken from above showing an orange kitten sitting, facing right. On his back, a blue backpack with a print of the world map."
  },
]

module.exports.data = data