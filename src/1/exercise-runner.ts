import { ExerciseRunnerResult } from '../utils/exercise-runner-result'
import {InputParser} from '../utils/input-parser'
import {DepthIncreaseDetector} from './depth-increase-detector'

export function run(filePath : string): ExerciseRunnerResult {
  const inputParser = new InputParser()
  const depthReadings = inputParser.parseToNumber(filePath)
  const depthIncreaseDetector = new DepthIncreaseDetector()
  return {
    partOne: depthIncreaseDetector.detect(depthReadings),
    partTwo: depthIncreaseDetector.detectGroups(depthReadings)
  }
}
