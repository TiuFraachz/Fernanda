const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    message.delete(); 
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        message.channel.send("Você não tem permissão para utilizar esse comando!");
        return 0;
    }

    message.channel.setTopic(args[0])
    
    let concluir = new Discord.RichEmbed()

    .setTitle("**Topico Mudado! ✅**")
    .setDescription("**\nSeu Topico Foi Alterado Para: " + message.channel.topic + "**")
    .setTimestamp(new(Date))
    .setColor("#07ed66")
    .setFooter("Enviado Por: " + message.author.tag)

    message.channel.send(concluir);
}
module.exports.help = {
    name: "topico"
}