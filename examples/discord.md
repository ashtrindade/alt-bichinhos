# Requesting API data from Discord

**Get random images with alt text using Discord.js v14 Interactions:**

<p align="center"><img alt='Flow chat with the following elements from left to right: database, rapid api, api request, discord interaction, user.' src="https://github.com/ashtrindade/altbichinhos/blob/main/media/discord-flow.png"></p>

## Requirements

1. Install `axios` and `dotenv`:
```
npm i axios dotenv
```

2. Import modules:
```js
const { AttachmentBuilder } = require('discord.js') // Attach the file
const wait = require('node:timers/promises').setTimeout // Set timers
const axios = require('axios') // HTTP Requests
const dotenv = require('dotenv') // Save your keys
dotenv.config()
```

## Receiving Interactions

1. Defer the reply: 

```js
await interaction.deferReply()
```

2. Request the API:
```js
await interaction.deferReply()

// API request
const api = {
    method: 'GET',
    url: 'https://alt-bichinhos.p.rapidapi.com/en', // You can change the language just by replacing 'en' with 'pt'
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY, // The key you saved on the .env file (check if it has the same name)
        'X-RapidAPI-Host': 'alt-bichinhos.p.rapidapi.com'
    }
    }
    axios.request(api).then(function (response) {
    const responseData = response.data 
    const data = responseData
    module.exports.data = data // Exporting data
}).catch(function (error) {
    console.error(error)
})
```

3. Placeholder message:
```js
// Loading message
await interaction.editReply({content: `Searching the best image 🔍`})
await wait(4000)
```

4. Receiving the API:
```js
// Handling data        
const data = this.data
const id = data[Math.floor(Math.random() * data.length)].id // Select the array ID
const pet = data.findIndex((img) => img.id == id) // Get elements by its array ID
```

5. Send the file:
```js
// Interaction Reply
const file = new AttachmentBuilder()
    .setFile(data[pet].file)
    .setDescription(data[pet].alt)

await interaction.editReply({ content: ``, files: [file]}) // Leave 'content' blank to remove the placeholder message
```

## Example:
<img alt='Gif of a discord bot replying the command called pet with an image of a cat.' src='https://i.imgur.com/dSWmUTA.gif'>

## Tips and notes:
- You can go beyond and add a cron job to send an image at a determined time.
- You can't set interaction ephemeral using this format because ephemeral messages can't be edited or deleted.
- Feel free to use embeds, you can the alt text as the description, field or footer.