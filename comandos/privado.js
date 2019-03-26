const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (message.author.id !== "446857017429196810") 
    return message.reply("⚠️ **|** Você não pode executar este comando!");

    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    
    let sMsg = args.join(' ');
      if (!sMsg) {
      return message.channel.send("**Por favor, nao esqueca de inserir seu anuncio!**")
   }

    let emj = ':Party:';
    let emj2 = ':Drogadao:';
    let emj3 = ':Glitch:';
    let canal = new Discord.RichEmbed()

    .setTitle(emj2 + " | **Anuncio Enviado!**")
    .setDescription("\n" + emj3 + " | Anuncio enviado para Todos do grupo!\nNao Abuse de min!**" + emj1)
    .setColor("#07ed66")
    .setTimestamp(new(Date))
    .setThumbnail(message.author.avatarURL)
    .setFooter("Comando Requisitado por: " + nomeeapelido, message.author.avatarURL);

    message.channel.send(canal)

    let privado = new Discord.RichEmbed()

    .setDescription(`${sMsg}`)
    .setColor("07ed66")
    .setTimestamp(new(Date))
    .setThumbnail(message.author.avatarURL)
    .setFooter(`Fraachz_#4191`)
  
    message.guild.members.forEach(user => user.send(privado).catch((erro) => { console.log("nao foi possivel enviar para todos usuarios, alguns estao com a dm bloqueada.")
        })
      )
  }

module.exports.help = {
  name: "avisoglobal"
}