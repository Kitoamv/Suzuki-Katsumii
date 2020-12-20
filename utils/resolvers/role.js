const roleRegex = /^(?:<@&)?(\d{17,19})>?$/

async function roleResolver(message, mention) {
const role = roleRegex.test(mention)
    ? await message.guild.roles
        .fetch(roleRegex.exec(mention)[1]
        )
    : null

    if(role) return role;

    throw new Error(`Papel inválido: ${mention} Lembre-se, o bot só pode resolver funções da mesma guilda.`)
}

exports.roleResolver = roleResolver
