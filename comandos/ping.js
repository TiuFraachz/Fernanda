const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    message.delete(); 

    let creator = 'Fraachz_#4191';

        let pign = new Discord.RichEmbed()
    
            .setTitle('***Pong 🏓***')
            .setColor('RANDOM')
            .setThumbnail(message.guild.iconURL)
            .setDescription(`**Meu ping?**\n
            Checkado! Minha Latência é de **${Math.round(client.ping)}ms.**`)
            .setImage("https://cdn.discordapp.com/attachments/529064545478508544/547041937073373194/rainbow.gif") 
            .setFooter(`${creator} • © 2019`, client.user.displayAvatarURL)
    
            message.channel.send(pign)

        }

exports.help = {
	name: "ping" 
}