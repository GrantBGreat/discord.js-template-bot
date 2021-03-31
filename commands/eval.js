const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) { // check if the member is not administrator
        message.reply("you do not have permission to use this command.")
        return;
    } else {
        // then the member is administrator and we feel safe to evaluate
        var result = args.join(" ") // join together the array into a string
        let evaled = eval(result); // use the eval() funtion to evaluate the string
        console.warn(`${message.author.tag} running eval command:`)
        console.log(`Input: ${result}`)
        console.log(`Output: ${evaled}`)

        // return message.channel.send(`result:\n${evaled}`) // <-- to send without an embed
        const evalEmbed = new Discord.MessageEmbed()
            .setColor('#0027b3')
            .setTitle('Evaluation')
            .setDescription(`Input:\n\`\`\`js\n${result}\n\`\`\`\nOutput:\n\`\`\`\n${evaled}\n\`\`\``)
            .setTimestamp()
            .setFooter('Evaluated by Template Bot', 'https://i.imgur.com/wSTFkRM.png');

        return message.channel.send(evalEmbed);
    }
}

module.exports.help = {
  name: "eval",
  description: "Admin only command to evaluate JavaScript code."
}
