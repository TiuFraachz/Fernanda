const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
    message.delete();

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Você não possui permissão para usar este comando.');

    let channel = message.guild.channels.find(c => c.name === '📋punições');
        try {
            if (!channel) {
          
                channel = await message.guild.createChannel('📋punições', 'text', [{
                id: message.guild.id
      
            }])
            
            channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
      
        })
            await message.channel.send(`${message.author}, não encontrei o canal 📋punições, então criei o canal automaticamente.`);
        
        }
        
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!member) {
            return message.channel.send("**Por favor, insira o usuário!**")
 
        }

        let reason = args.slice(1).join(' ');
            if (!reason) {
                return message.channel.send("**Por favor, insira o motivo!**")
     
            }
        
            await member.ban(reason).catch(error => message.channel.send(`Desculpe, ocorreu algum erro. Error: ${error}`));
     
            if (!member) return message.channel.send('**Por favor, mencione o membro a ser banido!**');
            if (!member.bannable) return message.channel.send('**Você não pode banir esse usuário por ele ser de um cargo maior ou igual ao seu!**');


            let channel2 = member.guild.channels.find('name','📋punições');
            if (!channel2) return;

        let creator = 'Fraachz_#4191';

        let emj = '<:Banido:564249639092486156>';
        let emj2 = '<:remove_member:564251280139354113>';
        let emj3 = '<:icons8administradormasculino401:562373044719452170>';
        let emj4 = '<:MotivosparaViver:564252741304582160>';

        let bans = new Discord.RichEmbed()
        
            .setTitle(`${emj} | Jogador Banido\n`)
            .setDescription(`${emj2} **| Usuário:** ${member}
            **${emj3} | Punido Por:** ${message.author.tag}
            **${emj4} | Motivo:** ${reason}`)
            .setTimestamp(new(Date))
            .setThumbnail(client.user.displayAvatarURL)
            .setColor(`4D00FF`)
            .setFooter(`${creator} • © 2019`, client.user.displayAvatarURL)

        channel.send(bans)

        return message.channel.send(`**O usuário foi punido com sucesso.**`)
        
    } catch(error) {
    
        console.log(error);
    } 
}

module.exports.help = {
    name: "sugestao"
    }