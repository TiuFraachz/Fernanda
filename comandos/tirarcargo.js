const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send({embed: {description: "``Você não tem permissão para este comando.``", color: 0x00F40101}})

    let user = message.mentions.users.first()
    let role = message.guild.roles.find(r => r.name === args.slice(1).join(' ')) || message.guild.roles.get(args[0]) || message.mentions.roles.first()

    if(!user) return message.channel.send("**Você não mencionou ninguém para remover algum cargo.**");
    if(!role) return message.channel.send("**Você não mencionou nenhum cargo para ser removido no usuário.**")

    message.guild.member(user.id).removeRole(role.id)
    return message.channel.send(`**Cargo acaba de ser removido.**`);
}

module.exports.help = {
    name: 'tirarcargos'
}