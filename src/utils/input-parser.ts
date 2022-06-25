import { InputReader } from "./input-reader";

export class InputParser {
    
    constructor(private inputReader: InputReader = new InputReader())   {
    }

    parseToNumber(filePath: string): number[] {
        return this.inputReader.readLines(filePath).map((line)=>parseInt(line))
    }
}