const hastebin = require('hastebin-gen');
const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    message.delete()

  hastebin(args.join(' '), "js").then(r => {

      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      
      .setColor(0xFFF000)
      .setURL(hastLink)
      .addField('Link Gerado: ', `${hastLink}`)
       
      message.channel.send({embed: hastEmb})
  
    }).catch(console.error);  
}

module.exports.help = {
    name: 'hastebin'
}