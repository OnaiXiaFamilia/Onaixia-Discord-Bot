import { GuardFunction, SimpleCommandMessage } from 'discordx'

export const IsAdmin: GuardFunction<SimpleCommandMessage, unknown> = async (message, _, next) => {
    if (message.message.author.id === message.message.guild?.ownerId) {
        await next()
        return
    }

    return
}
