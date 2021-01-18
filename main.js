const Discord = require ('discord.js');
const config = require (./config.json);
const client = new Discord.Client();

client.on('ready', => {
  console.log("Bot is now active, waiting for a message to be sent.")
});

client.on('message', message => {
  const bruh = message.author
  if(message = bruh){
  message.channel.send("k");
  } else console.log("Something went wrong, waiting for a new message.")
});

client.login(token)
