const Discord= require('discord.js')

module.exports.run = async (client, message, args, ops) => {

message.delete(); 

let user = message.mentions.users.first() || message.author;
if(message.mentions.users.size < 0) return message.reply("você precisa mencionar alguém para eu mostrar o avatar.")

var embed =  new Discord.RichEmbed()

.setImage(user.displayAvatarURL)
  .setColor('RANDOM')
  .setTitle(':frame_photo: | Avatar')
  .setFooter(`message.guild.iconURL`)
  .setDescription(user+" |  **Clique "+"[aqui]("+user.displayAvatarURL+") para baixar a imagem!**" )
  .setFooter(`Comando executado por: ${message.author.username}`, message.author.displayAvatarURL)
  message.channel.send(embed);

}

module.exports.help = {
    name: "avatar"

}