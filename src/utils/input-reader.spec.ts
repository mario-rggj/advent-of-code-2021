import fs from 'fs'
import { InputReader } from './input-reader'

describe('InputReader', () => {
  const testFilePath: string = './src/utils/test.txt'
  const testFileLines: string = '123\n123\n321'

  beforeEach(() => {
    fs.writeFileSync(testFilePath, testFileLines)
  })

  afterEach(() => {
    fs.rmSync(testFilePath)
  })

  it('should open a file and return an array of lines', () => {
    const expectedParsedLines: string[] = testFileLines.split('\n')
    const inputReader: InputReader = new InputReader()

    const fileParsedLines = inputReader.readLines(testFilePath)

    expect(fileParsedLines).toEqual(expectedParsedLines)
  })
})
