const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete(); 

    let usuario = '<:icons8administradormasculino401:562373044719452170>';

    let embed = new Discord.RichEmbed()
    
    .setTitle(usuario + "| Doar")
    .setDescription("**Me doando, voce consegue vantagens comigo na cama :3** \n**E me ajuda pagar meu apartamento.**")
    .addField("Me doe 5 Reais;", `<:013review:535064516233396225> [[Clique Aqui]](https://www.mercadopago.com/mlb/checkout/start?pref_id=333126709-a47d6d10-7264-4c89-8d39-d384b88d99c0)`)
    .addField("Me doe 10 Reais;", `<:013review:535064516233396225> [[Clique Aqui]](https://www.mercadopago.com/mlb/checkout/start?pref_id=333126709-93d5c226-cbb4-437c-9b8f-3504c5b06aaf)`)
    .addField("Me doe 15 Reais;", `<:013review:535064516233396225> [[Clique Aqui]](https://www.mercadopago.com/mlb/checkout/start?pref_id=333126709-a10cb5a6-a588-4b54-8bad-6d586132daba)`)
    .setColor("C1FF00")
    .setFooter("Comando Requisitado por: ", message.author.avatarURL)
    .setTimestamp(new(Date))
    
    message.channel.send(embed);
}
module.exports.help = {
    name: "doar"
}