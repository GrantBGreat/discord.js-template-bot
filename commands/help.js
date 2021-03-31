const Discord = require('discord.js')
const config = require("./config.json") // load the config so we know what the prefix is

module.exports.run = async (client, message, args) => {
  prefix = config.prefix // get the prefix from the config file
  let helpEmbed = new Discord.MessageEmbed()
      .setColor('#0027b3')
      .setTitle('Help')
      .setDescription(`The prefix for this bot is \`${prefix}\`.`)
      .setTimestamp()
      .setFooter('Template Bot', 'https://i.imgur.com/wSTFkRM.png')

  if (args.length === 0) { // if there are no arguments...
    helpEmbed.addFields(
        { 
          name: 'Eval:', 
          value: 'An admin only command for creating JavaScript evaluations.' 
        },
        {
          name: 'Google:',
          value: 'Get a google query'
        },
        { 
          name: '\u200B', // this is the code for a blank space
          value: `To get more information about a command, run \`${prefix}help <command name>\`.` 
        }

      )
  } else {
    try {
      // if there are arguments try getting them from the command list
      helpEmbed.addField(
          `${args[0]}:`, 
          client.commands.get(args[0]).help.description,
          false
        )
    } catch (err) {
      // catch the error if they are not found, and tell them the arguments are not valid
      console.error("Help command -- Invalid args")
      return message.channel.send(`Sorry ${message.author}, but ${args[0]} does not seem to be a valid command.`)
    }
  }

  return message.channel.send(helpEmbed)
}

module.exports.help = {
  name: "help",
  description: "You know what this command does :/"
}
