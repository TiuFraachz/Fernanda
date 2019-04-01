const Discord = require('discord.js');
const moment = require("moment");
moment.locale('pt-BR');

module.exports.run = async (client, message, args) => {

    message.delete()

    let pessoa =  message.mentions.users.first() || message.author;

    let creator = 'Fraachz_#4191';

    let emj = '<:perfil:562392624003284995>';
    let emj2 = '<:setadireita:559225184327041046>';
    let emj3 = '<a:correto:562373922075443200>';
    let emj4 = '<a:erradotbk:562374008809717768>';
    let emj5 = '<:online:562373117671112714>';
    let emj6 = '<:offline:562373270876192771>';
    let emj7 = '<:ocupado:562373350220103680>';
    let emj8 = '<:ausenteBRR:562373405467475978>';
    let emj9 = '<:transmitindo:562373447984873475>';
    
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

    let administrador;
    if(member.hasPermission("ADMINISTRATOR") === true) administrador = `${emj3} Sim`;
    if(member.hasPermission("ADMINISTRATOR") === false) administrador = `${emj4} Não`;

    let statusmebro;

    if(member.presence.status === "dnd") statusmebro = `${emj7} Ocupado`;
    if(member.presence.status === "idle") statusmebro = `${emj8} Ausente`;
    if(member.presence.status === "stream") statusmebro = `${emj9} Transmitindo`;
    if(member.presence.status === "offline") statusmebro = `${emj6} Offline`;
    if(member.presence.status === "online") statusmebro = `${emj5} Online`;

    message.channel.send(new Discord.RichEmbed()
    .setDescription("<a:carregando:536319256384765972> | Estou coletando as informações, aguarde."))
    .then(msg => {
    setTimeout(()=>{
    msg.edit(new Discord.RichEmbed()

    .setTitle(`**${emj} | O Perfil Foi Carregado!\n\n**`)
    .setDescription(`**${emj2} | ID:** ${pessoa.id}
    **${emj2} | NickName: ${pessoa}**
    **${emj2} | Apelido:** ${member.nickname ? `${member.nickname}` : "Nenhum no momento!"}
    ${emj2} **| Conta existe há:** ${Math.round(Math.abs((member.user.createdAt.getTime() - new Date().getTime())/(24*60*60*1000)))} dias.
    **${emj2} | Status:** ${statusmebro}
    **${emj2} | Jogando:** ${member.user.presence.game ? member.user.presence.game.name : 'Nada no momento'}\n\n
    **${emj2} | Administrador:** ${administrador}\n\n
    **${emj2} | Cargo(s):** ${message.guild.member(member.id).roles.filter(r => r.name != '@everyone').map(r => r)}`)
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