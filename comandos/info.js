const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.delete()

    let creator = 'Fraachz_#4191';
    let eusou = '<@543911140187701287>';

    let version = '• v1.0';
    let ling = '• Javascript';
    let suporte = '• Em Breve';
    let loc = '• Brasil ';
    let dev = '• <@446857017429196810>';

    let emj = '🤖';
    let emj2 = '💻';
    
    let emj3 = '<:javascript:530939753156050954>';
    let emj4 = '<a:EngrenagemGif:530939630439366657>';
    let emj5 = '<:brasil:560197448669331456>';

    let inf = new Discord.RichEmbed()

    .setTitle(`**INFORMAÇÃO DO BOT**`)
    .setDescription(`Olá eu sou o ${eusou}, sou programado em\nJavaScript. Caso esteja perdido ou achar algum BUG utilize o \nnosso suporte abaixo:`)
    .addField(`${emj} VERSAO DO BOT:`, `${version}`)
    .addField(`${emj3} LINGUAGEM:`, `${ling}`)
    .addField(`${emj4} SUPORTE:`, `${suporte}`)
    .addField(`${emj5} LOCALIZAÇÃO:`, `${loc}`)
    .addField(`${emj2} DESENVOLVEDOR:`, `${dev}`)
    .setThumbnail(client.user.displayAvatarURL)
    .setTimestamp(new(Date))
    .setFooter(`${creator} • © 2019`, client.user.displayAvatarURL)

    message.channel.send(inf).then(message => {
        message.react(`🔥`)
    })
}

module.exports.help = {
    name: 'info'
}