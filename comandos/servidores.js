const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    
    message.delete().catch(O_o=>{});
    
    let bicon = client.user.displayAvatarURL;
    let string = '';
    
    client.guilds.forEach(guild => {
    string += guild.name + '\n';})
    
    let bt = client.user.username;
    let emj = '<:listagem:562394814574755903>';


    let botembed = new Discord.RichEmbed()
    
        .setColor("6B74E7")
        .addField(emj + " **Servidores que estou:**", string)
        .setTimestamp(new(Date))
        .setFooter("Comando Requisitado por: ", message.author.avatarURL);
    
        message.channel.send(botembed);
}
module.exports.help = {
    name: "servidores"
    }