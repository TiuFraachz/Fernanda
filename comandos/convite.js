const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete(); 

    let clienticon = client.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setTitle("<:email:531064750000308224> | Convite")
    .setColor("RANDOM")
    .addField("Me adicione em seu servidor;", `<:nuvempreta:531066201644990464> [[Clique Aqui]](https://discordapp.com/oauth2/authorize?client_id=543911140187701287&scope=bot&permissions=8)`)
    .setFooter("Comando Requisitado por: ", message.author.avatarURL)
    .setTimestamp(new(Date))
    
    message.channel.send(embed);
}
module.exports.help = {
    name: "convite"
}