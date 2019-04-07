const Discord = require('discord.js');
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment") 
moment.locale('pt-BR')

module.exports.run = async(client, message, args) => {

    message.delete()

    let creator = 'Fraachz_#4191';
    let eusou = '<@543911140187701287>';

    let version = '• v2.5';
    let ling = '• Javascript';
    let suporte = '• Em Breve';
    let loc = '• Brasil ';
    let dev = '• <@446857017429196810> , <@406596101093982209>';

    let emj = '🤖';
    let emj2 = '💻';
    
    let emj3 = '<:Javascript:562380485423136768>';
    let emj4 = '<a:Engrenagem:562375919478767636>';
    let emj5 = '<:brasil:562375788695912449>';
    let emj6 = '<:1memoria:562417851147878400>';
    let emj7 = '<:plataformadeperfurao:562417940213792809>';
    let emj8 = '<:CPU:562418356779614265>';
    let emj9 = '<:Computer_display_cpu_device_moni:562418961262706699>';
    let emj10 = '<:8957_100_bits:562418802562695198>';

    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
          return console.log(err);
        }
       
       let secs = Math.floor(client.uptime % 60);
       let days = Math.floor((client.uptime % 31536000) / 86400);
       let hours = Math.floor((client.uptime / 3600) % 24);
       let mins = Math.floor((client.uptime / 60) % 60);


    let inf = new Discord.RichEmbed()

    .setTitle(`**INFORMAÇÃO DO BOT**`)
    .setDescription(`Olá eu sou o(a) ${eusou}, sou programado(a) em\nJavaScript. Caso esteja perdido ou achar algum BUG utilize o \nnosso suporte abaixo:`)
    .addField(`${emj} VERSAO DO BOT:`, `${version}`)
    .addField(`${emj3} LINGUAGEM:`, `${ling}`)
    .addField(`${emj4} SUPORTE:`, `${suporte}`)
    .addField(`${emj5} LOCALIZAÇÃO:`, `${loc}`)
    .addField(`${emj2} DESENVOLVEDOR(ES):`, `${dev}`)
    .addField(`${emj7} PLATAFORMA:`, `${os.platform()}`)
    .addField(`${emj6} MEMORIA LIVRE:`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`)
    .addField(`${emj8} CPU:`, `${os.cpus().map(i => `${i.model}`)[0]}`)
    .addField(`${emj9} CPU LIVRE:`, `${percent.toFixed(2)}%`)
    .addField(`${emj10} ARCH:`, `${os.arch()}`)
    .setThumbnail(client.user.displayAvatarURL)
    .setTimestamp(new(Date))
    .setFooter(`${creator} • © 2019`, client.user.displayAvatarURL)

    message.channel.send(inf).then(message => {
        message.react(`🔥`)
        })
    })
}

module.exports.help = {
    name: 'info'
}