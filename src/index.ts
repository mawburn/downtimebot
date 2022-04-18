import 'dotenv/config'

import { Client, Collection, Intents } from 'discord.js'

import config from './config'

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// @ts-expect-error
client.commands = new Collection()

client.once('ready', () => {
  console.log('Ready!')
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  // @ts-expect-error
  const command = client.commands.get(interaction.commandName)

  if (!command) return

  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    })
  }
})

client.login(config.token)
