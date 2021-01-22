const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

const config = require('./config.json');

client.once('ready', () => {
    console.log('bot is online!');
});


client.on('message', async message => {

    if (message.content === `${prefix}ping`){
        message.channel.send('Pong!');
    }else if (!element.id == "801285931868356658"){
        if(member.deaf){
            member.voice.setChannel('801285931868356658') 
        }
    }

    
    
});





client.login(token)
