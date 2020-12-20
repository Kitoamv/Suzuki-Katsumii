const snowflakeRegex = /^(\d{17,19})$/

async function messageResolver(message, snowflake) {
const msg = snowflakeRegex.test(snowflake)
    ? await message.channel.messages
        .fetch(snowflake)
        .catch(() => null)
    : undefined
    if(msg) return msg;

    throw new Error(`Mensagem Inválida: ${snowflake} Lembre-se, o bot só pode resolver a mensagem no mesmo canal.`)
}

exports.messageResolver = messageResolver
