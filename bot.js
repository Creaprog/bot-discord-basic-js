// Discord.js
var Discord = require("discord.js");

// autoReconnect is enabed
var bot = new Discord.Client({autoReconnect: true});


// Set the prefix
let prefix = "/ ";

// Ready? Set? Go!aha
bot.on('ready', () => {

    // set status
  bot.user.setStatus("online"," Your Game Here ") // ("status","game","url twitch")
   console.log('Initialization of statue \n')


  console.log("Newston ! The Bot is Online!");
});


bot.on("message", msg => {

      // Command /help
     if (msg.content.startsWith(prefix + "help")) {
      msg.channel.sendMessage("```List of commands : \n\n /version  | Version  \n /help | All Commands  \n    ```");
      console.log("Command executed: /help")
    }
    // Command /version
    if (msg.content.startsWith(prefix + "version")) {
      msg.channel.sendMessage("``` Bot Discord Basic - Version 1.0 \n Creator : Thomas Bnt | @Hyprimort#9520 \n GitHub :https://github.com/thomasbnt/bot-discord-basic-js  | ⚠  Please not erase the author name ```");
      console.log("Command executed : /version")
    }

});




//Login with TOKEN for Bot
bot.login(" YOUR TOKEN HERE "); // Find your token > https://discordapp.com/developers/applications/me
