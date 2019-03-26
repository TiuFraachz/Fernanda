const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete(); 
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

    let comandos = new Discord.RichEmbed()

    .setTitle("Meus Comandos 🔖")
    .setColor("C1FF00")
    .setDescription("**Comandos:** \ns!convite\ns!privado\ns!say\ns!doar\ns!servidores\ns!ontime\ns!sugestao\ns!info\ns!total\ns!reload")
    .setFooter("Comando Requisitado por: " + nomeeapelido, message.author.avatarURL)
    .setTimestamp(new(Date))

    message.channel.send(comandos);
}
module.exports.help = {
    name: "comandos"
}