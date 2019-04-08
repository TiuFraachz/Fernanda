const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let creator = 'Fraachz_#4191';

    let parc = new Discord.RichEmbed()
    
    .setTitle(`** | Parceiros**`)
    
    .setDescription(`**Servidores Aliados:**\n
    
    **BotsParaDiscord » https://discord.gg/t5qzWQB**
    **Em Breve...**
    `)

    .setTimestamp(new(Date))
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(`4D00FF`)
    .setFooter(`${creator} • © 2019`, client.user.displayAvatarURL)

    message.channel.send(parc)
}

module.exports.help = {
    name: 'parceiros'
}