const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete()

    let creator = 'Fraachz_#4191';

    let emj = '<a:novidades:564246317078020107>';
    let emj2 = '<:certo:562373850642382889>';
    let emj3 = '<:administrador:562372878562099282>';

    let novidades = new Discord.RichEmbed()

    .setTitle(`${emj} | Novidades\n`)

    .setDescription(`${emj2} | Recentes\n\n

    **☁ <@432626838393847809> adicionado como desenvolvedor.**
    **☁ Comando 'adddev' adicionado.**
    **☁ Comando 'addstaff' adicionado.**
    **☁ Comando 'parceiros' adicionado.**
    **☁ Comando 'convite' reformulado.**
    **☁ Comando 'perfil' reformulado.**
    **☁ Comando 'info' reformulado.**\n\n

    **${emj3} | Antigos\n\n**

    **☁ Comando 'privado' retirado.**
    **☁ Comando 'spotify' reformulado.**
    **☁ Comando 'ping' reformulado.**
    **☁ <@406596101093982209> adicionado como desenvolvedor.**
    `)

    .setTimestamp(new(Date))
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(`4D00FF`)
    .setFooter(`${creator} • © 2019`, client.user.displayAvatarURL)

    message.channel.send(novidades)
}

module.exports.help = {
    name: 'novidades'
}