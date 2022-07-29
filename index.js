///////////////////////////////////////////////////////////////////////////////
//               Requisitos para que o bot consiga funcionar                 //
///////////////////////////////////////////////////////////////////////////////
const { Client, Collection, MessageEmbed, MessageAttachment, Util } = require('discord.js');
const Discord = require("discord.js");
const { config } = require("dotenv");

const ms = require('ms');
const path = require("path");
const moment = require('moment');
const os = require('os');
const chalk = require('chalk');

const Guild = require("./models/guild");
const Message = require("./models/message");

const { settings } = require('cluster');
const fs = require("fs");
const botconfig = require("./JSON/config.json");
const client = new Client({ disableEveryone: false });
const queue = new Map();
require('dotenv').config()
const cfg = require('./JSON/config.js');

///////////////////////////////////////////////////////////////////////////////

client.aliases = new Discord.Collection();
client.afk = new Map();
client.commands = new Collection();
client.alias = new Collection();
client.categories = fs.readdirSync("./commands/")
client.mongoose = require("./utils/mongoose.js");

let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 5;

config({
    path: __dirname + "/.env"
});

//////////////////////////////////////////////
//             Console Chalk                //
//////////////////////////////////////////////

client.devsLog = `${chalk.cyanBright('[Devs - Log]')}`
client.devsError = `${chalk.redBright('[Devs - Error]')}`
client.websLog = `${chalk.greenBright('[Devs Web - Log]')}`

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

///////////////////////////////////////////////////////////////////////////////

client.on("message", async message => {
    const prefix = "_";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});


client.mongoose.init();
client.login("TOKEN");
