# Alt Bichinhos API

API that provides images of animals with alt text for accessibility.

<center>

![License MIT](https://img.shields.io/github/license/ashtrindade/alt-bichinhos?labelColor=181717&logo=github)
![CodeQL](https://img.shields.io/github/actions/workflow/status/ashtrindade/alt-bichinhos/codeql.yml?label=CodeQL&labelColor=181717&logo=github)
![Tests](https://img.shields.io/github/actions/workflow/status/ashtrindade/alt-bichinhos/coverage.yml?label=Tests&labelColor=181717&logo=jest)

</center>

---

## Endpoints

- `/api/image/all` - Get all images
- `/api/image/random` - Get a random image
- `/api/image/{id}` - Get an image by id

### Filters

- `type` - Filter by type of animal
- `language` - Filter by language of alt text

### Example of response

```json
{
  "fileUrl": "https://example.com/image.jpg",
  "description": "A cute dog",
  "type": "dog",
  "alt": {
    "en": "A cute dog",
    "pt_br": "Um cachorro fofo",
    "es": "Un perro lindo",
    "de": "Ein süßer Hund"
  }
}
```

## Docs

- Visit the [Documentation](https://alt-bichinhos.onrender.com/api/docs/)
