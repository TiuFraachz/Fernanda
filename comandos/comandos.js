const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete(); 
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

    let comandos = new Discord.RichEmbed()

    .setTitle("Meus Comandos 🔖")
    .setColor("C1FF00")
    .setDescription("**Comandos:** \n$convite\n$privado\n$say\n$doar\n$servidores\n$ontime\n$sugestao\n$info\n$total\n$reload")
    .setFooter("Comando Requisitado por: " + nomeeapelido, message.author.avatarURL)
    .setTimestamp(new(Date))

    message.channel.send(comandos);
}
module.exports.help = {
    name: "comandos"
}