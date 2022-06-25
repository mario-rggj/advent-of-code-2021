import { DepthIncreaseDetector } from "./depth-increase-detector";

describe("DepthIncreaseDetector", () => {
    it.each([
        [[199,200,208,210,200,207,240,269,260,263],7],
        [[199,200,208,210,200,207,240,269,260,263,300],8],
        [[199,200],1],
        [[199],0],
        [[],0],
    ])("should return how many times measurement increased", (depthMeasurements,expectedReturn) => {
        const depthIncreseDetector: DepthIncreaseDetector = new DepthIncreaseDetector();
        
        const timesDepthIncreased: number = depthIncreseDetector.detect(depthMeasurements);

        expect(timesDepthIncreased).toEqual(expectedReturn)
    })
})