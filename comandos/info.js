const Discord = require('discord.js')
const moment = require("moment");
moment.locale("pt-BR");

module.exports.run = async (client, message, args) => {

    var member = message.member;
    let bbUser = message.mentions.members.first();
    if(bbUser) {
        let guilda = await message.guild.fetchMembers();
        member = guilda.members.get(bbUser.id);
    } else {
        bbUser = message.member;
    }


    let emoji1 = "<:tudosobremodobountybrawlstarsdic:530939548549775421>"
    let emoji2 = "📇"
    let emoji3 = "📋" 
    let emoji4 = "<:javascript:530939753156050954>"

    let embed1 = new Discord.RichEmbed()

    .setTitle("**Minhas Caracteristicas:**" + emoji3)
    .setTimestamp(new(Date))
    .setColor(0x07ed66)
    .addField("**Meu Criador: 🤖**", "**Fraachz_#4191**")
    .addField("**Fui Formado Em 💻**", "**JavaScript**" + emoji4)
    .addField("**Servidores No Momento:**"+ emoji1 ,client.guilds.size)
    .addField("**Fui criado em:**" + emoji2, bbUser.user.createdAt)
    .addField("**Meu Prefix:**", "s!")
    .setFooter("Comando Requisitado por: ", message.author.avatarURL);

    message.channel.send(embed1);
}
module.exports.help = {
    name: "info"
}