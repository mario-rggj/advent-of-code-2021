import fs from 'fs'
import {ExerciseRunnerResult} from '../utils/exercise-runner-result'
import * as exerciseRunner from './exercise-runner'

describe('Exercise 1', () => {
  describe('Given a valid depth measurements report', () => {
    const testFilePath = './inputs/1-test.txt'

    beforeEach(() => {
      fs.writeFileSync(testFilePath, '199\n200\n208\n210\n200\n207\n240\n269\n260\n263')
    })

    afterEach(() => {
      fs.rmSync(testFilePath)
    })

    it('should calculate how many times the depth increased', () => {
      const
        exerciseResult: ExerciseRunnerResult = exerciseRunner.run(testFilePath),
        expectedResult: ExerciseRunnerResult = {partOne: 7, partTwo: 5}

      expect(exerciseResult).toEqual(expectedResult)
    })

  })
})
