const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        return message.channel.send(`**Você não possui permissão.**`)
    }

    if(!args[0]) return message.channel.send(":x: **Coloque a quantidade de mensagens para min limpar.**");
    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`:pencil2: ${args[0]} mensagens deletadas.`).then(msg => msg.delete(2000));
  
    });
}

module.exports.help = {
    name: 'limpar'
}