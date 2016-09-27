# bot-discord-basic-js

Basic Bot Discord with discord.js


## How to set-up
1. Download node.js from http://nodejs.org

2. Make a bot here https://discordapp.com/developers/applications/me 

After this, you should have a token

3. Make the bot join your place with this URL: 
https://discordapp.com/oauth2/authorize?&client_id=CLIENT_ID&scope=bot
(Please replace the CLIENT_ID with your bot client ID )

4. Now you have your bot inside, have fun


Requires node 0.12+

`npm install --save discord.js`

If you don't need voice support:

`npm install --save --no-optional discord.js`

A list of other Discord API libraries can be found [here](https://discordapp.com/developers/docs/reference)

#Exemple of message

```js
bot.on("message", msg => {

      // Command /help
     if (msg.content.startsWith(prefix + "help")) {
      msg.channel.sendMessage("```List of commands : \n\n /version  | Version  \n /help | All Commands```");
      console.log("Command executed: /help")
    }
});
```

#Login With Token

```js
//Login with TOKEN for Bot
bot.login(" YOUR TOKEN HERE "); // Find your token > https://discordapp.com/developers/applications/me
```

# Set a prefix for all commands

```js
// Set the prefix
let prefix = "/ ";
```

#Links

[NPM](http://npmjs.com/package/discord.js)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/gluten-free.svg)](http://forthebadge.com)
