const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

module.exports.run = (bot, message, args) => {
    
    message.delete();

    let duration = moment.duration(bot.uptime).format('D [d], H [h], m [m], s [s]');
    
    let emj = '<:cargos:562390866799624235>'
    let emj2 = '<:relogio:562374617679790080>';

    let embed = new Discord.RichEmbed()

    .setTitle(emj2 + " **Tempo Online**")
    .setColor("6B74E7")
    .addField(emj + " Meu tempo online:", duration)
    .setTimestamp(new(Date))
    .setFooter("Comando Requisitado por: ", message.author.avatarURL);

    message.channel.send(embed);
}
module.exports.help = {
    name: "ontime"
}