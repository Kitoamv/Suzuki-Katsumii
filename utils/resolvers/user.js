const userOrMemberRegex = /^(?:<@!?)?(\d{17,19})>?$/

async function userResolver(client, mention) {
    const user = userOrMemberRegex.test(mention)
    ? await client.users.fetch(userOrMemberRegex.exec(mention)[1]
        )
            .catch(() => null)
        : null;
    if(user) return user;
    throw new Error(`Usuário Inválido: ${mention}`)
}

exports.userResolver = userResolver
