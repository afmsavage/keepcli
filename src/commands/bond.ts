/* eslint-disable no-console */
import {Command, flags} from '@oclif/command'

const ethers = require('ethers')
const KeepBonding = require('@keep-network/keep-ecdsa/artifacts/KeepBonding.json')
import * as path from 'path'

async function getBond(address: any) {
  try {
    const ip = new ethers.providers.InfuraProvider('homestead', '8461f7340a2a42d2b670eba6bcbd5e9f')
    let addr
    try {
      addr = ethers.utils.getAddress(address)
    } catch (error) {
      console.error(`Invalid address supplied: ${error}`)
    }

    const keepBondingContract = new ethers.Contract(KeepBonding.networks['1'].address, KeepBonding.abi, ip)
    const available = await keepBondingContract.unbondedValue(addr)
    return `ETH available for bonding: ${ethers.utils.formatEther(available)} in wallet ${addr}`
  } catch (error) {
    console.error(`Could not authorize: ${error.message}`)
  }
}

export default class Bond extends Command {
  static description = 'Check free bond of ECDSA Signing node. Leave address off if you want to check the bond of the configured address'

  static examples = [
    `$ keepcli bond 0x0000000000000000000000000000000000000000
> eth available for bonding: 20.2345
`,
  ]

    static flags = {
      help: flags.help({char: 'h'}),
      // flag with a value (-a, --addr=VALUE)
    }

  static args = [{
    name: 'address',
    required: false,
    description: 'operator address to check',
  }]

  async run() {
    const {args} = this.parse(Bond)

    const cliConfig = require(path.join(this.config.configDir, 'config.json'))
    const addr = args.address ?? cliConfig.address
    this.log(await getBond(addr))
  }
}
