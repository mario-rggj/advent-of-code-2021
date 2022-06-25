import {ExerciseRunnerResult} from '../utils/exercise-runner-result'
import {InputParser} from '../utils/input-parser'
import {Submarine} from './submarine'

export function run(filePath: string): ExerciseRunnerResult {
  const inputParser = new InputParser()
  const movementInstructions = inputParser.parseToMovements(filePath)
  const submarine1 = new Submarine()
  const submarine2 = new Submarine()
  return {
    partOne: submarine1.move(movementInstructions),
    partTwo: submarine2.moveWithAim(movementInstructions)
  }
}