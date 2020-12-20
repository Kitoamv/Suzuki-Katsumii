///////////////////////////////////////////////////////////////////////////////
//               Requisitos para que o bot consiga funcionar                 //
///////////////////////////////////////////////////////////////////////////////
const { Client, Collection, MessageEmbed, MessageAttachment, Util } = require('discord.js');
const Discord = require("discord.js");
const { config } = require("dotenv");
const chalk = require('chalk')

const ms = require('ms');
const path = require("path");
const moment = require('moment');
const os = require('os');

const Guild = require("./models/guild");
const Message = require("./models/message");

const { settings } = require('cluster');
const fs = require("fs");
const botconfig = require("./JSON/config.json");
const client = new Client({ disableEveryone: false });
const queue = new Map();
require('dotenv').config()
const cfg = require('./JSON/config.js');
const { load } = require("./utils/utils")

///////////////////////////////////////////////////////////////////////////////

client.aliases = new Discord.Collection();
client.afk = new Map();
client.commands = new Collection();
client.alias = new Collection();
client.categories = fs.readdirSync("./commands/")

let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 5;

config({
    path: __dirname + "/.env"
});

///////////////////////////////////////////////////////////////////////////////
//                        get config values.                                 //
///////////////////////////////////////////////////////////////////////////////

client.coonfig = {
    TRN_APIKEY: process.env.TRN_APIKEY,
    YOUTUBE_APIKEY: process.env.YOUTUBE_APIKEY,
    IGNORE_CHANNELS: cfg.config.IGNORE_CHANNELS
};

client.loadEvents = () => {
    const events = fs.readdirSync("./events/");
    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        if (event.match(/\.js$/)) {
            delete require.cache[require.resolve(`./events/${event}`)];
            const theEvent = require(`./events/${event}`);
            theEvent.deregister(client);
            theEvent.register(client);
        }
    }
    console.log(`Loaded ${events.length} events!`);
};

///////////////////////////////////////////////////////////////////////////////
//            Recursos Necessários para o uso de alguns comandos             //
///////////////////////////////////////////////////////////////////////////////

const flags = {
  DISCORD_EMPLOYEE: 'Discord Employee',
  DISCORD_PARTNER: 'Discord Partner',
  BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
  BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
  HYPESQUAD_EVENTS: 'HypeSquad Events',
  HOUSE_BRAVERY: 'House of Bravery',
  HOUSE_BRILLIANCE: 'House of Brilliance',
  HOUSE_BALANCE: 'House of Balance',
  EARLY_SUPPORTER: 'Early Supporter',
  TEAM_USER: 'Team User',
  SYSTEM: 'System',
  VERIFIED_BOT: 'Verified Bot',
  VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

const filterLevels = {
  DISABLED: 'Off',
  MEMBERS_WITHOUT_ROLES: 'No Role',
  ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
  NONE: 'None',
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: '(╯°□°）╯︵ ┻━┻',
  VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const defaultSettings = {
    logChannel: null,
    verifyRole: null,
    jailRole: null,
    modRoles: [],
    logFlags: 0,
    badWords: [],
    badNames: [],
    antiSpam: false
};

///////////////////////////////////////////////////////////////////////////////
//             Reconhecimento de Todos os Comandos Presentes                 //
///////////////////////////////////////////////////////////////////////////////

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

///////////////////////////////////////////////////////////////////////////////
//          Mensagem Personalizada para aparecer no Console do Bot          //
///////////////////////////////////////////////////////////////////////////////

client.on("ready", () => {
    console.log("+--------------+");
    console.log("|  BOT ONLINE  |");
    console.log("+--------------+");
    console.log(`| commands: ${client.commands.size} |`);
    console.log(`| guilds:   ${client.guilds.array().length}  |`);
    console.log(`| channels: ${client.channels.array().length} |`);
    console.log("+--------------+");
});

//////////////////////////////////////////////
//             Console Chalk                //
//////////////////////////////////////////////

client.devsLog = `${chalk.cyanBright('[Devs - Log]')}`
client.devsError = `${chalk.redBright('[Devs - Error]')}`
client.websLog = `${chalk.greenBright('[Devs Web - Log]')}`

///////////////////////////////////////////////////////////////////////////////
//                           Prefixo do Bot                                  //
///////////////////////////////////////////////////////////////////////////////

client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("Você tem que esperar 5 segundos entre os comandos.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }

///////////////////////////////////////////////////////////////////////////////


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
});

///////////////////////////////////////////////////////////////////////////////
///              O Bot Entrou ou saiu em algum servidor                     ///
///////////////////////////////////////////////////////////////////////////////

client.on("guildMemberAdd", async (member) => {

    const getData = await Guild.findOne({

        guildID: member.guild.id

    }).catch(err => console.error(err));

    const getMessage = await Message.findOne({

        guildID: member.guild.id

    }).catch(err => console.error(err));

    let welcomeChannel = getData.welcomeChannelID;

    let welcomeEmbed = new MessageEmbed()
    .setColor("#55efc4")

    if(getData.welcome === 'on') {

        if(!getMessage.welcomemsg) {

            let welcomemsg = `<@${member.id}> joined the server.`;
            welcomeEmbed.setDescription(welcomemsg)
            client.channels.cache.get(welcomeChannel).send(welcomeEmbed)

        } else {

            let welcomemsg = getMessage.welcomemsg.replace(/-/, `<@${member.id}>`);
            welcomeEmbed.setDescription(welcomemsg)
            client.channels.cache.get(welcomeChannel).send(welcomeEmbed)

        }

    } else if(getData.welcome === 'off'){

        return;

    }

    if(member.guild.id == '549789888115900428') {

        let role = member.guild.roles.cache.find(role => role.name.toLowerCase() === "apprenti ninja");
        member.roles.add(role)

    }

})

client.on("guildMemberRemove", async (member) => {

    const getData = await Guild.findOne({

        guildID: member.guild.id

    }).catch(err => console.error(err))

    const getMessage = await Message.findOne({

        guildID: member.guild.id

    }).catch(err => console.error(err))

    let goodbyeChannel = getData.goodbyeChannelID;

    let goodbyeEmbed = new MessageEmbed()
    .setColor("#ffeaa7")

    if(getData.goodbye === 'on') {

        if(!getMessage.goodbyemsg) {

            let goodbyemsg = `<@${member.id}> left the server.`;
            goodbyeEmbed.setDescription(goodbyemsg)
            client.channels.cache.get(goodbyeChannel).send(goodbyeEmbed)

        } else {

            console.log(goodbyeChannel)
            let goodbyemsg = getMessage.goodbyemsg.replace(/-/, `<@${member.id}>`);
            goodbyeEmbed.setDescription(goodbyemsg)
            console.log(goodbyemsg)
            client.channels.cache.get(goodbyeChannel).send(goodbyeEmbed)

        }

    } else if(getData.goodbye === 'off') {

        return;

    }

})

client.mongoose.init();
client.login(process.env.TOKEN);
