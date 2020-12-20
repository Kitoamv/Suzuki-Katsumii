var GuildConfig = require("./../database/models/GuildConfig.js")

async function send(type, guild, content, options){
    var GuildSettings = await GuildConfig.findOne({ guildID: guild.id })
    if(!GuildSettings[type]) return;

    const channel = guild.channels.resolve(GuildSettings[type])
    if(!channel){
        console.log(`Tentei enviar uma mensagem no ${type} do ${guild.id}, mas o canal não existe`)
        return
    }
    return await channel.send(content, options)
}

async function removeRole(member, role, reason){
    var guildSettings = await member.guild.settings();

    // Configuração não definida? Saindo.
    if (!guildSettings[role]) return false;

    // Definição definida, mas a função não existe? Retorna falso.
    if (!member.guild.roles.cache.has(guildSettings[role]))
      return false;

    // Se o membro tiver a função, retorna falso.
    if (member.roles.cache.has(guildSettings[role])) return true;

    // Se chegarmos aqui, remova a função.
    await member.roles.remove(guildSettings[role], reason);
    return true;
}

async function addRole(message, member, role, reason){
    var guildSettings = await message.guild.settings();
    member = message.guild.members.cache.get(member)

    // Configuração não definida? Saindo.
    if (!guildSettings[role]) return false;

    // Definição definida, mas a função não existe? Retorna falso.
    if (!message.guild.roles.cache.has(guildSettings[role]))
      return false;

    // Se o membro tiver a função, retorna falso.
    if (member.roles.cache.has(guildSettings[role])) return true;

    // Se chegarmos aqui, adicione a função.
    await member.roles.add(guildSettings[role], reason);
    return true;
}


exports.send = send
exports.removeRole = removeRole
exports.addRole = addRole
