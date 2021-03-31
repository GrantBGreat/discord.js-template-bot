const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let url = `https://www.google.com/search?q=${args.join("+")}`

    const googleEmbed = new Discord.MessageEmbed()
        .setColor('#0027b3')
        .setTitle('Google it.')
        .setURL(url)
        .setImage('https://tenor.com/view/levar-burton-reading-rainbow-google-that-shit-google-gif-15062945')
        .setTimestamp()
        .setFooter('BrainBot', 'https://i.imgur.com/wSTFkRM.png');

    return message.channel.send(googleEmbed);
}

//The command's name
module.exports.help = {
  name: "google",
  description: "google it."
}
