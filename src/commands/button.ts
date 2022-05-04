import { ButtonInteraction, CommandInteraction, MessageButton, MessageActionRow, User, GuildMember } from 'discord.js'
import { ButtonComponent, Discord, Slash, SlashOption } from 'discordx'

@Discord()
export class ButtonExample {
    @Slash('hello')
    async hello(
        @SlashOption('user', { type: 'USER' })
        user: User | GuildMember | undefined,
        interaction: CommandInteraction
    ) {
        await interaction.deferReply()

        const helloBtn = new MessageButton()
            .setLabel('Hello')
            .setEmoji('👋')
            .setStyle('PRIMARY')
            .setCustomId('hello-btn')

        const row = new MessageActionRow().addComponents(helloBtn)

        interaction.editReply({
            content: `${user}, Say hello to Onaixiana`,
            components: [row]
        })
    }

    @ButtonComponent('hello-btn')
    helloBtn(interaction: ButtonInteraction) {
        interaction.reply(`👋 ${interaction.member}`)
    }
}
