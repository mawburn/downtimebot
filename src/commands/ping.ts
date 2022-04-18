import { SlashCommandBuilder } from '@discordjs/builders'

export const pingCommand = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Check if this interaction is responsive')
  .toJSON()
