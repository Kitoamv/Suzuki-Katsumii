
const emojiRegex = /^(?:<a?:\w{2,32}:)?(\d{17,19})>?$/

async function emojiResolver(client, mention) {
const emoji = emojiRegex.test(mention)
    ? client.emojis.resolve(emojiRegex.exec(mention))
    : null;
if(emoji) return emoji;
throw new Error(`Emoji Inválido: ${mention}`)
}

exports.emojiResolver = emojiResolver
