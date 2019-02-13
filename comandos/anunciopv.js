const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Você não tem permissão para usar esse comando!");

    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    
    let sMsg = args.join(' ');
      if (!sMsg) {
      return message.channel.send("**Por favor, insira seu anuncio!**")
   }

    let emj = '<:cinto:535832268288032788>';
    let emj2 = '<:009advertising:535064510801903626>';
    let emj3 = '<a:carregando:536319256384765972>';
    let canal = new Discord.RichEmbed()

    .setTitle(emj + " **| Anuncio Enviado!**")
    .setDescription("**\nAnuncio enviado para Todos do grupo!\nNo momento estamos em beta!**" + emj3)
    .setColor("#07ed66")
    .setTimestamp(new(Date))
    .setThumbnail(message.author.avatarURL)
    .setFooter("Comando Requisitado por: " + nomeeapelido, message.author.avatarURL);

    message.channel.send(canal)

    let privado = new Discord.RichEmbed()

    .setTitle(emj2 + " **| Anuncio!**")
    .setDescription(`\n\n ${sMsg}`)
    .setColor("#07ed66")
    .setTimestamp(new(Date))
    .setThumbnail(message.author.avatarURL)
    .setFooter("Guild: " + message.guild)
  
    message.guild.members.forEach(user => user.send(privado).catch((erro) => { console.log("nao foi possivel enviar para todos usuarios, alguns estao com a dm bloqueada.")
        })
      )
  }

module.exports.help = {
  name: "anunciopv"
}