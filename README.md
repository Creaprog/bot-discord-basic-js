# bot-discord-basic-js

Basic Bot Discord with discord.js



## Installation
**First of all** - Make a discord Bot
 * Go to https://discordapp.com/developers/docs/intro
 * MyApplications > login > New Application.
 * Complete the form. Once that's done, click "Create Application".
 * Click "Create a Bot User", and then click "Yes, do it!"
 * Now add your bot to your Discord Server. Remeber to Replace "[Place your bot's Client ID]" with your bot's client ID
 `https://discordapp.com/oauth2/authorize?client_id=[Place your bot's Client ID]&scope=bot&permissions=0`

 Now you have your bot inside, have fun


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
