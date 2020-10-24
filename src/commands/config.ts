import {Command, flags} from '@oclif/command'
const fs = require('fs')
import * as fsx from 'fs-extra'
import * as path from 'path'
import cli from 'cli-ux'

export default class Config extends Command {
  static description = 'configure keepcli with your node\'s operator address'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    fs.mkdir(this.config.configDir, {recursive: true}, (err: any) => {
      if (err) throw err
    })

    const {args, flags} = this.parse(Config)
    const configFile = await path.join(this.config.configDir, 'config.json')
    const opAddr = await cli.prompt('What is your address?')

    this.log(`please find your config file at ${configFile}`)
    fs.writeFile(configFile, JSON.stringify({address: `${opAddr}`}), function (err: any) {
      // eslint-disable-next-line no-console
      if (err) return console.log(`Sorry, couldn't write config.\nError: ${err}`)
    })
  }
}
