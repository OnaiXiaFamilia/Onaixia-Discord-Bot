import { Discord, SimpleCommand, SimpleCommandMessage } from 'discordx'
import { getEmbed } from '../lib/embed'

@Discord()
export class GeneralCommands {
    @SimpleCommand('hello', { aliases: ['hi'] })
    hello(command: SimpleCommandMessage) {
        command.message.reply(`👋 Hello ${command.message.member}`)
    }

    // to add a new command, you can use the @SimpleCommand decorator

    @SimpleCommand('embed')
    embed(command: SimpleCommandMessage) {
        command.message.channel.send({
            embeds: [getEmbed('asdfghjukiohgfds', 'B', 0x00ff00)]
        })
    }
}
