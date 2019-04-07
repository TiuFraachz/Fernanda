const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    
    const user = args[0];
    if (!user) return message.reply('Insira o id do membro para que eu possa retirar o seu ban.').catch(console.error);
    
    message.guild.unban(user);
    return message.channel.send(`**O <@${user}> foi despunido!**`)
};

module.exports.help = {
    name: 'unban'
}