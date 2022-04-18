import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import config from './config'

const commands = []

const rest = new REST({ version: '9' }).setToken(config.token)

rest
  .put(Routes.applicationGuildCommands(config.clientId, config.guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
