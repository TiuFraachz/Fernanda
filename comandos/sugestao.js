const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

      let sMsg = args.join(' ');
        if (!sMsg) {
        return message.channel.send("**Por favor, insira sua sugestão!**")
     }

    let emj = '<:convite:562375148712362056>';
    let sug = new Discord.RichEmbed()

    .setTitle(emj + " **Feh | Sugestoes**")
    .setDescription(`${sMsg}`)
    .setTimestamp(new(Date))
    .setColor("#07ed66")
    .setThumbnail(message.author.avatarURL)
    .setFooter("Mensagem executada na guild: " + message.guild)

    client.users.get('446857017429196810').send(sug)
    message.reply('**Obrigada bb, vou enviar para meu dono! Da proxima brincamos mais um pouquinho! s2**');   

    }
module.exports.help = {
    name: "sugestao"
}