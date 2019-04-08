const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Você não tem permissão para usar esse comando!");
  
    if (!args.join(" ")) return message.reply("Digite algo!");
  
    let say = args.join(' ');

    message.mentions.users.forEach((u) => say = say.replace(u.toString(),"@"+u.tag))
    message.mentions.roles.forEach((r) => say = say.replace(r.toString(),"@"+r.name))
    message.channel.send(say,{disableEveryone:true});
}

//agr vc n vai precisar disso preciso sim, o meu reload pega isso
module.exports.help = {
    name: "say"
}