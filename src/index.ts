import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
import {env, loadEnv} from './env.js'
import {add} from './doSomeStuff.js'
import process from 'process'

function main() {
  loadEnv()

  const argv = yargs(hideBin(process.argv)).parseSync()
  const args = argv._
  if (args.length !== 2) {
    console.error('Error: Command line must have 2 arguments')
  } else if (typeof args[0] !== 'number' || typeof args[1] !== 'number') {
    console.error('Error: Both arguments must be numbers')
  } else {
    console.log(`${args[0]} + ${args[1]} = `, add(args[0], args[1]))
  }
}
main()
