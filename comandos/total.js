const Discord = require('discord.js')

exports.run = (client, message, args) => {

        message.channel.send(new Discord.RichEmbed()
        .setDescription("<a:carregando:536319256384765972> | Estou coletando minhas informações, aguarde."))
    .then(msg => {
    setTimeout(()=>{
        msg.edit(new Discord.RichEmbed()
        .setColor("#a32aff")
        .setTitle(`<:SedexBot_EasyResize:544602569314664458> | SedexBot`)
        .setThumbnail("https://cdn.discordapp.com/attachments/538076734948376578/544598590706679808/Screenshot_631.png")
        .setDescription(`**Tenho o total  dê:** \n\n<:029list:531575602982158366>Canais: \`\`\n${client.channels.size}\`\`\n<:bote:531535895732420628>Servidores:  \`\`\n${client.guilds.size}\`\`\n<:membros:531533969901223937>Usuários:  \`\`\n${client.users.size}\`\`\n<a:508786928481599490:532731628754305045>Emojis:  \`\`\n${client.emojis.size}\`\`\n`)
        .setTimestamp()
    )


})
})}
module.exports.help = {
    name: "total"
}