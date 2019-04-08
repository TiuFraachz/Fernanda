const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let comandos = new Discord.RichEmbed()

    .setTitle("**Meus Comandos 🔖\n\n**")
    .setColor("C1FF00")
    .setDescription(`

    - Prefix:

    • s!

    - Novos Comandos:\n\n

    • s!perfil 
    • s!hastebin
    • s!serverinfo
    • s!spotify\n\n

    - Comandos:\n\n

    • s!convite ➣ **Me convidar para seu servidor.**
    • s!say ➣ **Deixe eu falar por você.**
    • s!doar ➣ **Me ajuda a ficar online! Doe e me ajude.**
    • s!servidores ➣ **Veja a minha lista de servidores.**
    • s!ontime ➣ **Veja meu tempo online.**
    • s!sugestao ➣ **Enive uma sugestao para meu dono :3.**
    • s!info ➣ **Veja minhas informacoes.**
    • s!total ➣ **Veja aonde eu cheguei.**
    • s!perfil ➣ **Veja oque se amigo esta jogando, verifique se ele esta on ou off, etc...**
    • s!ping ➣ **Veja minha Latência.**
    • s!spotify ➣ **Veja oque seu amigo esta ouvindo no spotify.**
    • s!serverinfo ➣ **Veja as informações de seu servidor com facilidade!**
    • s!hastebin ➣ **Upe codigos no hastebin com facilidade!**
    • s!avatar ➣ **Roube o avatar de seu amigo e use voce tambem! RsRs**
    • s!setartopico ➣ **Sete o topico do canal, sem dificuldades!**
    • s!novidades ➣ **Veja minhas novidades, tudo em primeira mao!**
    • s!ban ➣ **Bana algum membro indisciplinar.**
    • s!unban ➣ **Puniu errado? Aproveite de min! Desbana o seu amigo que puniu "Sem querer".**
    • s!darcargo ➣ **De um cargo especial para aquele seu amigo, sem medo de dar errado!**
    • s!tirarcargo ➣ **Retire o cargo de algum amigo que so faz merda sem pensar 2 vezes.**
    • s!parceiros ➣ **Veja os servidores que me divulgam e me ajudam.**\n\n
    
    - Comandos Para Owners:\n\n
    
    • s!reload ➣ **Reinicie meu sistema.**
    • s!addvip ➣ **Adicione um membro como PREMIUM.**
    • s!addstaff ➣ **Adicione um membro como STAFF.**
    • s!adddev ➣ **Adicione um membro como DEV.**`)
    .setFooter("Comando Requisitado por: " + message.author.tag, message.author.avatarURL)
    .setTimestamp(new(Date))

    message.channel.send(comandos);
}
module.exports.help = {
    name: "comandos"
}