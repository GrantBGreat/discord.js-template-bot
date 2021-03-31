# How do I test it?
Instead of running `node .` to start the bot, take advantage of the `nodemon` dev dependancy that you installed while running `npm i`. By using `nodemon .` to run the bot, instead of `node .` nodemon will restart the bot every time you save changes, making developement that much easier and quicker. For more information on nodemon, click [here](https://www.npmjs.com/package/nodemon).

# What's included?
I have included 3 basic commands for this bot.<br>
`help` returns a list of commands and their descriptions. You can add more to the base help command under [line 13](https://github.com/GrantBGreat/discord.js-template-bot/blob/main/commands/help.js#L13). If given arguments, the command looks for the command name given and grabs the description for it.<br>
`google` returns a google search query based off the arguments given. If no arguments are given, it brings you to google's main page.<br>
`eval` evaluates code for you. This command is set to only work for administrators as it can be easily exploited.

# How do I add commands?
You can add commands easly using the following template in a new `CommandName.js` folder in this directory:
```javascript
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  // do stuff
  return
}

module.exports.help = {
  name: "This is the command name", // the command's name
  description: "This is a description" // the command's description
}
```
The command name is used for how the command is called and both the name and description are used by the `help` command.

### For more information on discord.js, visit the guide [here](https://discordjs.guide/#before-you-begin).

# Useful code snippets
### For embeds:
```javascript
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(exampleEmbed);
```
(from [here](https://discordjs.guide/popular-topics/embeds.html#using-the-richembedmessageembed-constructor))

### Using VC:
```javascript
if (message.member.voice.channel) {
  const connection = await message.member.voice.channel.join();
}

const dispatcher = connection.play('audio.mp3');

dispatcher.on('start', () => {
	console.log('audio.mp3 is now playing!');
});

dispatcher.on('finish', () => {
	console.log('audio.mp3 has finished playing!');
});
```
(from [here](https://discordjs.guide/voice/the-basics.html#joining-voice-channels))
