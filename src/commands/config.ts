import {Command, flags} from '@oclif/command'
const fs = require('fs')
import * as path from 'path'

export default class Config extends Command {
  static description = 'Configure keepcli with your node\'s operator address.'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{
    name: 'address',
    required: true,
    description: 'operator address to configure CLI with',
  }]

  async run() {
    fs.mkdir(this.config.configDir, {recursive: true}, (err: any) => {
      if (err) throw err
    })

    const {args} = this.parse(Config)
    const configFile = await path.join(this.config.configDir, 'config.json')
    this.log(`CLI is now configured with address: ${args.address}`)
    this.log(`Your config file is located at ${configFile}`)
    fs.writeFile(configFile, JSON.stringify({address: `${args.address}`}),  (err: any) => {
      if (err) return this.log(`Sorry, couldn't write config.\nError: ${err}`)
    })
  }
}
