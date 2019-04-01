const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if(message.guild.members.get(message.author.id).roles.find("name" , "DIV")) {        

    let sMsg = args.join(' ');
      if (!sMsg) {
      return message.channel.send("**Por favor, nao esqueca de inserir seu anuncio!**")
   }

    let emj1 = '<:convite:562375148712362056>';
    let emj2 = '<:7514_Visto:562387455626444865>';
    let emj3 = '<:administrador:562372878562099282>';
    let canal = new Discord.RichEmbed()

    .setTitle(emj2 + " | **Anuncio Enviado!**")
    .setDescription("\n" + emj3 + " **| Anuncio enviado para Todos do grupo!\nNão Abuse de min! **" + emj1)
    .setColor("#07ed66")
    .setTimestamp(new(Date))
    .setThumbnail(message.author.avatarURL)
    .setFooter("Comando Requisitado por: ", message.author.avatarURL);

    message.channel.send(canal)
  
    message.guild.members.forEach(user => user.send(sMsg).catch((erro) => { console.log("nao foi possivel enviar para todos usuarios, alguns estao com a dm bloqueada.")
        })
      )
    } else {
      
      return message.reply("⚠️ **|** Você não pode executar este comando, crie um cargo 'DIV' (Coloque tudo maiusculo para funcionar) e coloque em você e teste novamente!");
    }
  }

module.exports.help = {
  name: "privado"
}