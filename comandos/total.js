const Discord = require('discord.js')

exports.run = (client, message, args) => {

        message.channel.send(new Discord.RichEmbed()
        .setDescription("<a:carregando:562395113490481194> | Estou coletando minhas informações, aguarde."))
    .then(msg => {
    setTimeout(()=>{
        msg.edit(new Discord.RichEmbed()
        .setColor("#a32aff")
        .setTitle(`<:Informacoes:562398371743137793> | Fernanda Informações`)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(`**Tenho o total  dê:** \n\n<:canais:562395473462165535> **| Canais:** \`\`\n${client.channels.size}\`\`\n<:tServidores:562395700751761408> **| Servidores:**  \`\`\n${client.guilds.size}\`\`\n<:membros:562396014388969624> **| Usuários:**  \`\`\n${client.users.size}\`\`\n<a:MinecraftGif:562396962523971595> **| Emojis:**  \`\`\n${client.emojis.size}\`\`\n`)
        .setTimestamp()
    )


})
})}
module.exports.help = {
    name: "total"
}