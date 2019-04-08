const db = require('quick.db');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    
    //Se o usuário não tiver permissão administrador:
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Sem permissao!**`);
    
    //Se não forem colocados args[0]
    if (!args[0]) return message.channel.send(`**Coloque algum prefixo!**`);

    //Agora se tiver tudo, vou fazer um embed:
    let embed = new Discord.RichEmbed()
        .setDescription("O prefixo foi definido para **" + args[0] + "**");
    message.channel.send(embed);

    //Guardando na db:
    db.set(`servidorPrefixo_${message.guild.id}`, args[0]);
};

module.exports.help = {
    name: 'setprefix'
}//onde o code handler? De onde ? ;-;//da index ué