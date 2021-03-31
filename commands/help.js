const Discord = require('discord.js')
const config = require("./config.json")

module.exports.run = async (client, message, args) => {
  prefix = config.prefix
  let helpEmbed = new Discord.MessageEmbed()
      .setColor('#0027b3')
      .setTitle('Help')
      .setDescription(`The prefix for this bot is \`${prefix}\`.`)
      .setTimestamp()
      .setFooter('Template Bot', 'https://i.imgur.com/wSTFkRM.png')

  console.log(args)
  if (args.length === 0) {
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
          name: '\u200B', 
          value: `To get more information about a command, run \`${prefix}help <command name>\`.` 
        }

      )
  } else {
    try {
      helpEmbed.addField(
          `${args[0]}:`, 
          client.commands.get(args[0]).help.description,
          false
        )
    } catch (err) {
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
