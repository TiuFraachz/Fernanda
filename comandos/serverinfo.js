const Discord = require("discord.js");
const moment = require("moment");
moment.locale('pt-BR');


module.exports.run = (client, message, args) => {
 
    message.delete(); 
    
    let creator = 'Fraachz_#4191';

    let emj = '⭐️';
    let emj2 = '📖';
    let emj5 = '<:online:562373117671112714>';
    let emj6 = '<:offline:562373270876192771>';
    let emj7 = '<:ocupado:562373350220103680>';
    let emj8 = '<:ausenteBRR:562373405467475978>';
    let emj10 = '<:membros:562396014388969624>';

    let embed = new Discord.RichEmbed()

    .setTitle(`${emj} **| Informações sobre nosso servidor:**`)
    .setDescription(`**Aqui** você irá encontrar algumas informações do servidor.\n\n${emj2} **| ID do servidor:**\n\n᠉ ${message.guild.id}\n\n**Membros do(a) ${message.guild.name}:**\n\n${emj5} **| Online: ${message.guild.members.filter(o => o.presence.status === 'online').size}**\n**${emj8} | Ausente: ${message.guild.members.filter(i => i.presence.status === 'idle').size}**\n**${emj7} | Ocupado: ${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}**\n**${emj6} | Offline: ${message.guild.members.filter(off => off.presence.status === 'offline').size}**\n\n**${emj10} | Membros no total: ${message.guild.memberCount}**\n\n**Data de criação:**\nServidor criado em: ${moment(message.guild.createdAt).format('ll')}`)
    .setTimestamp(new(Date))
    .setColor(`A200FF`)
    .setFooter(`${creator} • © 2019`, client.user.displayAvatarURL)

    message.channel.send(embed);
}

module.exports.help = {
    name: "serverinfo"
}