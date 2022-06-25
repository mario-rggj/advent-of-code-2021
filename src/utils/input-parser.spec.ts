import fs from 'fs'
import { InputParser } from './input-parser'
import { Movement } from '../2/movement'
import { DIRECTIONS } from '../2/directions'

describe('InputParser', () => {
  const testFilePath: string = './src/utils/test.txt'

  afterEach(() => {
    fs.rmSync(testFilePath)
  })

  it('should parser a array of strings to number', () => {
    const testFileLines: string = '123\n123\n321'
    const expectedParsedLines: number[] = [123, 123, 321]
    const inputParser: InputParser = new InputParser()
    fs.writeFileSync(testFilePath, testFileLines)

    const parsedLines = inputParser.parseToNumber(testFilePath)

    expect(parsedLines).toEqual(expectedParsedLines)
  })

  it('should parse an array of strings to movements', () => {
    const testFileLines: string = 'up 1\ndown 3\nforward 4'
    const expectedParsedLines: Movement[] = [
      {
        direction: DIRECTIONS.up,
        distance: 1
      }, {
        direction: DIRECTIONS.down,
        distance: 3
      }, {
        direction: DIRECTIONS.forward,
        distance: 4
      }
    ]
    const inputParser: InputParser = new InputParser()
    fs.writeFileSync(testFilePath, testFileLines)

    const parsedLines = inputParser.parseToMovements(testFilePath)

    expect(parsedLines).toEqual(expectedParsedLines)
  })
})
