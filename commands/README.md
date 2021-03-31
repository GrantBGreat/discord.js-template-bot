# What's included?
I have included 3 basic commands for this bot.<br>
`help` returns a list of commands and their descriptions. You can add more to the base help command under [line 13](https://github.com/GrantBGreat/discord.js-template-bot/blob/main/commands/help.js#L13). If given arguments, the command looks for the command name given and grabs the description for it.<br>
`google` returns a google search query based off the arguments given. If no arguments are given, it brings you to google's main page.<br>
`eval` evaluates code for you. This command is set to only work for administrators as it can be easily exploited.

# How do I add commands?
You can add commands easly using the following template:
```javascript
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  // do stuff
}

module.exports.help = {
  name: "This is the command name", // the command's name
  description: "This is a description" // the command's description
}
```
