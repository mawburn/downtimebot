const unchecked = '⭕️'
const checked = '✅'

const commands = {
  create: ['create', 'make', 'start'],
  assign: ['assign', 'add', 'include'],
  remove: ['remove'],
  cancel: ['cancel', 'stop', 'end'],
  roll: ['r', 'roll'],
  help: ['h', 'help'],
}

const mods = {
  add: ['+', '-'],
  notWild: ['-w', '-wild', 'not wild'],
}

interface RollHistory {
  user: string
  result: string
  timestamp: number
}

interface Progress {
  successes: number
  rolls: RollHistory[]
}

interface Project {
  name: string
  description: string
  rollRate: string
  progress: Progress
  critFail: string
  skill: string[]
  cost: string[]
  mats: string[]
  tools: string[]
  requirements: string[]
  assignees: string[]
}
