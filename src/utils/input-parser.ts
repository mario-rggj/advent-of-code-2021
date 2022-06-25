import { InputReader } from './input-reader'
import { Movement } from '../2/movement'
import { DIRECTIONS } from '../2/directions'

export class InputParser {
  constructor (private readonly inputReader: InputReader = new InputReader()) {
  }

  parseToNumber (filePath: string): number[] {
    return this.inputReader.readLines(filePath).map((line) => parseInt(line))
  }

  parseToMovements (filePath: string): Movement[] {
    return this.inputReader.readLines(filePath).map((line) => {
      const [direction, distance] = line.split(' ')
      return {
        direction: DIRECTIONS[direction as DIRECTIONS],
        distance: parseInt(distance)
      }
    })
  }
}
