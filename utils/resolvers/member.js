const userOrMemberRegex = /^(?:<@!?)?(\d{17,19})>?$/

async function memberResolver(message, mention) {
const member = userOrMemberRegex.test(mention)
    ? await message.guild.members.fetch(
        userOrMemberRegex.exec(mention)[1]
    ).catch(() => null): null
    if(member) return member;

    throw new Error(`Usuário Inválido: ${mention}. Lembre-se, existem membros na guilda`)
}

exports.memberResolver = memberResolver
