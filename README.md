<p align="center">
<img  alt="Alt Bicinhos API logo. Grey background with a cartoon of a cat robot." src="./media/logo.png" width=250></a>
</p>
<p align="center">
<a href="https://github.com/ashtrindade/altbichinhos/blob/main/LICENSE.md"><img alt="License MIT" src="https://img.shields.io/apm/l/atomic-design-ui.svg?"></a>
<a href="https://rapidapi.com/ashtrindade/api/alt-bichinhos"><img alt="Rapid API" src="https://img.shields.io/badge/-RapidAPI-1d4371"></a>
</p>

# Alt Bichinhos API <a href="https://www.buymeacoffee.com/onlyashd"><img src="https://i.imgur.com/f1dRT70.png" alt="Buy me a coffee" width=125></a>
Welcome to the Alt Pets API! A collection of pet images with alt text!

- Monthly updates. 
- Currently **254** images.
- More languages coming in the future. **Spanish coming soon!**

### Feel free to submit your pet to our <a href="https://twitter.com/altbichinhos">Tweet account.</a> Pre-writen alt text are aways apretiated ♥.
<a href="https://twitter.com/altbichinhos"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/altbichinhos?label=%40altbichinhos&style=social"></a>

---

## Endpoints
### You can choose the main endpoint with all languages:

```json
[
  {
    "id": "0095",
    "file": "https://i.imgur.com/kb4E82F.png",
    "portuguese": "A foto mostra um cachorro preto longo e magro, bem peludo. Está deitado de costas, com a cabeça para a direita. Em sua barriga, bem encolhido, está um gatinho também preto. Ele é bem pequeno e encara a câmera com seus olhinhos verdes. Estão deitados no chão, em cima de um tapete azul e branco.",
    "english": "The photo shows a long, skinny, very hairy black dog. He is lying on his back with his head to the right. In her belly, well shrunk, is a black kitten. He is very small and stares at the camera with his little green eyes. They are lying on the floor, on top of a blue and white rug.",
  }
]
```
### Or an especifc language:

**English Endpoint:**
```json
[
  {
    "id": "0095",
    "file": "https://i.imgur.com/kb4E82F.png",
    "alt": "The photo shows a long, skinny, very hairy black dog. He is lying on his back with his head to the right. In her belly, well shrunk, is a black kitten. He is very small and stares at the camera with his little green eyes. They are lying on the floor, on top of a blue and white rug."
  }
]
```

**Brazilian Portuguese Endpoint:**
```json
[
  {
    "id": "0095",
    "file": "https://i.imgur.com/kb4E82F.png",
    "alt": "A foto mostra um cachorro preto longo e magro, bem peludo. Está deitado de costas, com a cabeça para a direita. Em sua barriga, bem encolhido, está um gatinho também preto. Ele é bem pequeno e encara a câmera com seus olhinhos verdes. Estão deitados no chão, em cima de um tapete azul e branco."
  }
]
```
