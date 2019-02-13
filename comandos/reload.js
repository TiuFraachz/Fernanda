const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
if (message.author.id !== "446857017429196810") return message.reply("⚠️ **|** Você não pode executar este comando!");

try {
} catch (erro) {
  console.log(erro)
}
    
    if (!args || args.length < 1)
      return message.reply("⚠️ **|** Escreva o comando que deseja reiniciar!");
  
      const commandName = args[0];
  
      if(!bot.commands.has(commandName)) {
        return message.reply("⚠️  **|** Comando inexistente!");
      }
  
      delete require.cache[require.resolve(`./${commandName}.js`)];
  
      bot.commands.delete(commandName);
      const props = require(`./${commandName}.js`);
      bot.commands.set(commandName, props);
      message.reply(`:computer:  O comando ${commandName} está sendo recarregado espere um momento por favor!`).then(message => { 
        message.delete()
              message.channel.send(`:bookmark_tabs:  O comando ${commandName} foi resetado com sucesso!! `)
        })
  };
  module.exports.help = {
    name: "reload"
  }