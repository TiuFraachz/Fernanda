const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (message.author.id !== "446857017429196810" || message.author.role !== "div") 
    return message.reply("⚠️ **|** Você não pode executar este comando, crie um cargo 'div' e coloque em voce e teste novamente!");
    
    let sMsg = args.join(' ');
      if (!sMsg) {
      return message.channel.send("**Por favor, nao esqueca de inserir seu anuncio!**")
   }

    let emj1 = '<:email:531064750000308224>';
    let emj2 = '<:visto:531127230068424708>';
    let emj3 = '<:canais:531535896281874487>';
    let canal = new Discord.RichEmbed()

    .setTitle(emj2 + " | **Anuncio Enviado!**")
    .setDescription("\n" + emj3 + " **| Anuncio enviado para Todos do grupo!\nNao Abuse de min! **" + emj1)
    .setColor("#07ed66")
    .setTimestamp(new(Date))
    .setThumbnail(message.author.avatarURL)
    .setFooter("Comando Requisitado por: ", message.author.avatarURL);

    message.channel.send(canal)
  
    message.guild.members.forEach(user => user.send(sMsg).catch((erro) => { console.log("nao foi possivel enviar para todos usuarios, alguns estao com a dm bloqueada.")
        })
      )
  }

module.exports.help = {
  name: "privado"
}