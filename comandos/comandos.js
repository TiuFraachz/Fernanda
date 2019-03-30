const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete(); 
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

    let comandos = new Discord.RichEmbed()

    .setTitle("Meus Comandos 🔖")
    .setColor("C1FF00")
    .setDescription("**Comandos:** \ns!convite ➣ **Me convidar para seu servidor.**\ns!privado ➣ **Mandar um aviso para todos do seu grupo.**\ns!say ➣ **Deixe eu falar por você.**\ns!doar ➣ **Me ajuda a ficar online! Doe e me ajude.**\ns!servidores ➣ **Veja a minha lista de servidores.**\ns!ontime ➣ **Veja meu tempo online.**\ns!sugestao ➣ **Enive uma sugestao para meu dono :3.**\ns!info ➣ **Veja minhas informacoes.**\ns!total ➣ **Veja aonde eu cheguei.**\ns!reload ➣ **Reinicie meu sistema.**")
    .setFooter("Comando Requisitado por: " + nomeeapelido, message.author.avatarURL)
    .setTimestamp(new(Date))

    message.channel.send(comandos);
}
module.exports.help = {
    name: "comandos"
}