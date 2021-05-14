// load some dependancys
require('dotenv').config();
const Discord = require('discord.js');
const fs = require("fs");
// load the config from the config.json file
const config = require("./config.json")
// create the client object
const client = new Discord.Client();
// create a collection of commands
client.commands = new Discord.Collection();

try {
  if (!fs.existsSync('./.env')) {
    // .env file does not exist
    fs.appendFileSync('.env', 'TOKEN=your_token_here', function (err) {
      if (err) throw err;
    });
    console.log('Your .env file has been created. Please replace \'your_token_here\' with an appropriate token.');
    return process.exit(22);
  }
} catch(err) {
  console.error(err)
}

// get the token from the .env file
const TOKEN = process.env.TOKEN;

// check if the token has not been set
if (TOKEN == 'your_token_here') {
  console.log('Please replace \'your_token_here\' with an appropriate token.');
  return process.exit(22);
}

fs.readdir("./commands/", (err, files) => {
    // this sorts through the files in the commands folder and creates a list of .js files
    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.error("Couldn't find commands.");
      return;
    }
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.info(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
  
});

client.on('ready', () => {
    console.info(`\nLogged in as ${client.user.tag}!\n`);

    // Set the presence of the bot
    client.user.setPresence({ activity: { name: config.statusmessage }, status: config.status })
      .then(console.log)
      .catch(console.error);
});

var cooldown = false;
client.on('message', message => {
  // General checks:
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return; // remove this line if you want to bot to respond to direct messages

  if (cooldown == true) {
    //bot is on cooldown
    console.warn("Bot is on cooldown.")
    let cooldownEmbed = new Discord.MessageEmbed()
      .setColor('#8f0707')
      .setTitle('Cooldown')
      .setDescription('You are still on cooldown!')
    return message.channel.send(cooldownEmbed)
  } else {
    // bot is not on cooldown, continue
    // Common vars
    let content = message.content.split(" ");
    let command = content[0].toLowerCase();
    //console.log(`running command ${command}`) // <-- if you want to print when a command is run (sometimes useful during testing)
    let args = content.slice(1);
    let prefix = config.prefix;

    if (command.substring(0,prefix.length) != prefix) return;

    // Checks if message contains a command and runs it
    let commandfile = client.commands.get(command.slice(prefix.length));
    if(commandfile) {
      commandfile.run(client,message,args)
      cooldown = true;
      setTimeout(() => {
        cooldown = false
      }, config.cooldown); // Cooldown for the given amount of milliseconds
    } else {
      console.warn(`Command ${command.slice(prefix.length)} does not exist.`)
    }
  }
});

// start the bot using the token taken from the .env file you created:
client.login(TOKEN);