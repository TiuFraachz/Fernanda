const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete(); 

    let usuario = '<:usere:531535895875158016>';

    let embed = new Discord.RichEmbed()
    
    .setTitle(usuario + "| Doar")
    .setDescription("**Me doando, voce consegue vantagens com o nosso bot!** \n**E nos ajuda a deixar o bot online para ajudar voce.**")
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