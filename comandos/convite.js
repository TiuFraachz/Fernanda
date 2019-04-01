const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete(); 

    let clienticon = client.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setTitle("<:convite:562375148712362056> | Convite")
    .setColor("RANDOM")
    .addField("Me adicione em seu servidor:", `<:nuvempreta:562375513860079648> [[Clique Aqui]](https://discordapp.com/oauth2/authorize?client_id=543911140187701287&scope=bot&permissions=8)`)
    .setFooter("Comando Requisitado por: ", message.author.avatarURL)
    .setTimestamp(new(Date))
    
    message.channel.send(embed);
}
module.exports.help = {
    name: "convite"
}