# bot-discord-basic-js

Basic Bot Discord with discord.js

#Installation

Requires node 0.12+

`npm install --save discord.js`

If you don't need voice support:

`npm install --save --no-optional discord.js`

A list of other Discord API libraries can be found [here](https://discordapp.com/developers/docs/reference)

#Exemple of message

`bot.on("message", msg => {

      // Command /help
     if (msg.content.startsWith(prefix + "help")) {
      msg.channel.sendMessage("```List of commands : \n\n /version  | Version  \n /help | All Commands  \n    ```");
      console.log("Command executed: /help")
    }
});`

#Login With Token

`//Login with TOKEN for Bot
bot.login(" YOUR TOKEN HERE "); // Find your token > https://discordapp.com/developers/applications/me`

# Set a prefix for all commands

`// Set the prefix
let prefix = "/ ";`

#Links

[NPM](http://npmjs.com/package/discord.js)
