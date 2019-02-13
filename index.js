const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const configurar = require("./config.json"); 
const fs = require("fs");

client.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() =="js");
    
    console.log(arquivojs)
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`Comando ${f} carregado com sucesso.`)
        client.commands.set(props.help.name, props);
    });
});

let prefix = '$'
let status = [
    { name: `Deseja alguma ajuda com os comandos ? ${prefix}comandos 🌠`, type: 'STREAMING', url: 'https://www.twitch.tv/frachzin_' },
    { name: `Me doe usando $doar`, type: 'STREAMING', url: 'https://www.twitch.tv/frachzin_' },
  ];
  
  //STREAMING = TRANSMITINDO
  //LISTENING = OUVINDO
  //PLAYING = JOGANDO
  //WATCHING = ASSISTINDO
  

  client.on('ready', () => {
    console.log( `Estou em ${client.guilds.size} servidores com ${client.users.size} usuarios` );
  
    function setStatus() {
        let randomStatus = status[Math.floor(Math.random() * status.length)];
        client.user.setPresence({game: randomStatus});
    }
  
    setStatus();
    setInterval(() => setStatus(), 10000); //{1000/1s}\{10000/10s}\{100000/1m}
  });
  client.on('message', message => {

    if(message.content.includes(`<@${client.user.id}>`)) {

        let emj = '<:055notification:535064514576515082>';
        let embed = new Discord.RichEmbed()
    
            .setTitle(emj + " **Opa tudo bom?**")
            .setDescription("**\nUse " + prefix + "comandos para acessar meu menu!**")
            .setTimestamp(new(Date))
            .setColor("#07ed66")
            .setThumbnail(message.author.avatarURL)
            .setFooter(`Fraachz_#4191 • © 2019`, client.user.displayAvatarURL)
    
            message.channel.send(embed)
    }

    var autor = message.author;
    var msg = message.content.toUpperCase();
    var cont = message.content.slice(prefix.lenght).split('');

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {

        let embed = new Discord.RichEmbed()

        .setTitle('**Comando inválido!**')
        .setDescription("**\nDe " + prefix + "comandos para ver nossos comandos.**")
        .setTimestamp(new(Date))
        .setColor("#07ed66")
        .setThumbnail(message.author.avatarURL)
        .setFooter(`Fraachz_#4191 • © 2019`, client.user.displayAvatarURL)
        message.channel.send(embed)
        
        }
        client.on("guildCreate", guild => {

            let emj = '';
            let emj2 = '';

            let boiola = new Discord.RichEmbed()

            .setTitle('**TE AMU <3**')
            .setDescription("**\nEU TE AMO!\nObrigado pela preferencia <3**")
            .setTimestamp()
            .setColor("#07ed66")
            .setFooter(`Fraachz_#4191 • © 2019`)

            guild.owner.send(boiola)
        })
  })
client.login(configurar.token);