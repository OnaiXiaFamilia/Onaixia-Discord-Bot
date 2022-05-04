import { Discord, SimpleCommand, SimpleCommandMessage } from 'discordx'

@Discord()
export class GeneralCommands {
    @SimpleCommand('hello', { aliases: ['hi'] })
    hello(command: SimpleCommandMessage) {
        command.message.reply(`👋 Hello ${command.message.member}`)
    }
}
