keepcli
=======

CLI Tool used to request information about running nodes on the Keep Network

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/keepcli.svg)](https://npmjs.org/package/keepcli)
[![Downloads/week](https://img.shields.io/npm/dw/keepcli.svg)](https://npmjs.org/package/keepcli)
[![License](https://img.shields.io/npm/l/keepcli.svg)](https://github.com/afmsavage/keepcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @pantsme/keepcli
$ keepcli COMMAND
running command...
$ keepcli (-v|--version|version)
@pantsme/keepcli/0.0.1 linux-x64 node-v12.18.4
$ keepcli --help [COMMAND]
USAGE
  $ keepcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`keepcli bond [ADDRESS]`](#keepcli-bond-address)
* [`keepcli config [FILE]`](#keepcli-config-file)
* [`keepcli help [COMMAND]`](#keepcli-help-command)
* [`keepcli keeps [FILE]`](#keepcli-keeps-file)
* [`keepcli liquidations [FILE]`](#keepcli-liquidations-file)
* [`keepcli tdts [FILE]`](#keepcli-tdts-file)

## `keepcli bond [ADDRESS]`

Check free bond of ECDSA Signing node

```
USAGE
  $ keepcli bond [ADDRESS]

ARGUMENTS
  ADDRESS  operator address to check

OPTIONS
  -a, --addr=addr  operator address to check
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ keepcli bond 0x0000000000000000000000000000000000
  eth available for bonding: 20.2345
```

_See code: [src/commands/bond.ts](https://github.com/afmsavage/keepcli/blob/v0.0.1/src/commands/bond.ts)_

## `keepcli config [FILE]`

configure keepcli with your node's operator address

```
USAGE
  $ keepcli config [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/config.ts](https://github.com/afmsavage/keepcli/blob/v0.0.1/src/commands/config.ts)_

## `keepcli help [COMMAND]`

display help for keepcli

```
USAGE
  $ keepcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `keepcli keeps [FILE]`

describe the command here

```
USAGE
  $ keepcli keeps [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/keeps.ts](https://github.com/afmsavage/keepcli/blob/v0.0.1/src/commands/keeps.ts)_

## `keepcli liquidations [FILE]`

describe the command here

```
USAGE
  $ keepcli liquidations [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/liquidations.ts](https://github.com/afmsavage/keepcli/blob/v0.0.1/src/commands/liquidations.ts)_

## `keepcli tdts [FILE]`

describe the command here

```
USAGE
  $ keepcli tdts [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/tdts.ts](https://github.com/afmsavage/keepcli/blob/v0.0.1/src/commands/tdts.ts)_
<!-- commandsstop -->
