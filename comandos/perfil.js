const Discord = require('discord.js');
const moment = require("moment");
moment.locale('pt-BR');

module.exports.run = async (client, message, args) => {

    message.delete()

    let pessoa = message.mentions.users.first()
    if(!pessoa) return message.channel.send(message.author + " certifique-se de mencionar o membro!");

    let creator = 'Fraachz_#4191';

    let emj = '<:rindodevc:558410938752040961>';
    let emj2 = '<:setadireita:559225184327041046>';
    let emj3 = '<a:correto:531230897513431040>';
    let emj4 = '<:nao:530921728902168588>';
    let emj5 = '<:online:531534202789822485>';
    let emj6 = '<:offline:531534447821193218>';
    let emj7 = '<:ocupado:531534372147429378>';
    let emj8 = '<:ausente:531534303327420446>';
    let emj9 = '<:transmitindo:560594347918360576>';

    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    
    let administrador;
    if(member.hasPermission("ADMINISTRATOR") === true) administrador = emj3;
    if(member.hasPermission("ADMINISTRATOR") === false) administrador = emj4;

    let statusmebro;

    if(member.presence.status === "dnd") statusmebro = emj7;
    if(member.presence.status === "idle") statusmebro = emj8;
    if(member.presence.status === "stream") statusmebro = emj9;
    if(member.presence.status === "offline") statusmebro = emj6;
    if(member.presence.status === "online") statusmebro = emj5;

    message.channel.send(new Discord.RichEmbed()
    .setDescription("<a:carregando:536319256384765972> | Estou coletando as informações, aguarde."))
    .then(msg => {
    setTimeout(()=>{
    msg.edit(new Discord.RichEmbed()

    .setTitle(`**${emj} | O Perfil Foi Carregado!**`)
    .setDescription(`\n\n**${emj2} | ID: ${message.mentions.users.first().id}**\n**${emj2} | NickName: ${pessoa}**\n**${emj2} | Apelido:** ${member.nickname ? `${member.nickname}` : "**Nenhum no momento!**"}\n${emj2} **| Conta existe há: ${Math.round(Math.abs((member.user.createdAt.getTime() - new Date().getTime())/(24*60*60*1000)))} dias.**\n**${emj2} | Status:** ${statusmebro}\n**${emj2} | Jogando: ${member.user.presence.game ? member.user.presence.game.name : 'Jogando nada no momento'}**\n\n**${emj2} | Administrador: ${administrador}**\n\n**${emj2} | Cargo(s): **`+ message.guild.member(member.id).roles.filter(r => r.name != '@everyone').map(r => r))
    .setTimestamp(new(Date))
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(`4D00FF`)
    .setFooter(`${creator} • © 2019`, client.user.displayAvatarURL)

            )
        })
    })
}

module.exports.help = {
    name: 'perfil'
}