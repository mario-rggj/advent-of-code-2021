import { DepthIncreaseDetector } from "./src/1/depth-increase-detector";
import { InputParser } from "./src/utils/input-parser";

const depthIncreaseDetector: DepthIncreaseDetector = new DepthIncreaseDetector()
const inputParser : InputParser = new InputParser()

const day1response = depthIncreaseDetector.detect(inputParser.parseToNumber("../inputs/1.txt"))

console.log(`Day 1: Sonar Sweep -- Answer: ${day1response}`)
