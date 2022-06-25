import fs from 'fs'
import { InputParser } from "./input-parser"

describe("InputParser",() => {

    const testFilePath: string = "./src/utils/test.txt"
    const testFileLines: string = "123\n123\n321\n"
    const expetedParsedLines: number[] = [123,123,321]

    beforeEach(()=>{
        fs.writeFileSync(testFilePath,testFileLines)
    })

    afterEach(()=>{
       fs.rmSync(testFilePath)
    })

    it("should parser a array of strings to number",() => {

        const inputParser : InputParser = new InputParser()
        
        const parsedLines = inputParser.parseToNumber(testFilePath);

        expect(parsedLines).toEqual(expetedParsedLines)

    })

})