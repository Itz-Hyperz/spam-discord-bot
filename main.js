/* 
Built By: Hyperz#0001 
And calebrwalk5#6969
*/

const Discord = require ('discord.js');
const config = require ('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("Bot is now active, waiting for a message to be sent.")
  client.user.setPresence({ activity: { name: `You get spammed lol`, type: `WATCHING` }, status: `dnd` })
}).catch(console.error);

client.on('message', message => {
  const bruh = message.author
  if(message.author = bruh){
  message.channel.send("k");
  } else console.log("Something went wrong, waiting for a new message.")
}).catch(console.error);

client.on('message', message => {
  if(message.content.includes === 'randy')
  wehaterandy();
});

// Caleb's fun functions
client.on('message', message => {
  if(message.content.includes === 'anusO1')
    calebiscool();
});
function wehaterandy() {
  client.channels.get('747930604624150532').send('we all hate Randy, he stole Hyperz bot code and requested a refund :(');
  client.users.get("Hyperz#0001").send("we hate randy message sent");
}
function calebiscool() {
  message.channel.send("anusO1 is very cool");
}

// End of Caleb's fun functions
client.login(token)

/* 
Built By: Hyperz#0001 
And anusO1#6969
*/
