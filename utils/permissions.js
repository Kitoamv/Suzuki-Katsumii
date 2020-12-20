const { botOwner } = require("../JSON/config.json")

function checkPermission(message, permission) {
    if (!message.member.hasPermission(permission)) {
        throw new Error(`Parece que você precisar ser um \`${permission}\` para poder utilizar este comando!`)+message.channel.send(`Parece que você precisar ser um \`${permission}\` para poder utilizar este comando!`)
      }
}

function checkBotPermission(message, permission) {
    if (!message.guild.me.hasPermission(permission)) {
        throw new Error(`Isso requer que eu tenha \`${permission}\` permissões, mas eu não as tenho!`)+message.channel.send(`Isso requer que eu tenha \`${permission}\` permissões, mas eu não as tenho!`)
      }
}

function checkBotOwner(message) {
    if (!botOwner.includes(message.author.id)) {
        throw new Error(`Este comando só pode ser usado pelo proprietário do bot`)+message.channel.send(`Este comando só pode ser usado pelo proprietário do bot`)
    }
}

exports.checkBotPermission = checkBotPermission
exports.checkBotOwner = checkBotOwner
exports.checkPermission = checkPermission
