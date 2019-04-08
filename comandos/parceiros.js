const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let creator = 'Fraachz_#4191';

    let emj = '<:partner:556680355277438977>';
    let emj2 = '<:bot:538163542260580352>';
    let emj3 = '<:MotivosparaViver:564252741304582160>';

    let parc = new Discord.RichEmbed()
    
    .setTitle(`**${emj} | Parceiros**`)
    
    .setDescription(`${emj2} **| Servers Aliados:**\n
    
    **Fernanda 🍓 | Suporte » https://discord.gg/6uW7CYE**
    **Bots Para Discord » https://discord.gg/t5qzWQB**\n

    **${emj3} | Como tornar-se parceiro:**\n

    **Metodo 1 » Divulgando nosso bot.**
    **Metodo 2 » Doando ou comprando vips.**
    **Metodo 3 » Ter uma guild com 100 membros ou mais (Minimo).**\n

    **Venha ser parceiro tambem!**
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