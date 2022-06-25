import { DepthIncreaseDetector } from './depth-increase-detector'

describe('DepthIncreaseDetector', () => {
  const measurementsTestScenarios: Array<[number[], number]> = [
    [[199, 200, 208, 210, 200, 207, 240, 269, 260, 263], 7],
    [[199, 200, 208, 210, 200, 207, 240, 269, 260, 263, 300], 8],
    [[199, 200], 1],
    [[199], 0],
    [[], 0]
  ]

  const groupedMeasurementsTestScenarios: Array<[number[], number]> = [
    [[199, 200, 208, 210, 200, 207, 240, 269, 260, 263], 5]
  ]

  it.each(measurementsTestScenarios)('should return how many times measurement increased', (depthMeasurements: number[], expectedReturn: number) => {
    const depthIncreaseDetector: DepthIncreaseDetector = new DepthIncreaseDetector()

    const timesDepthIncreased: number = depthIncreaseDetector.detect(depthMeasurements)

    expect(timesDepthIncreased).toEqual(expectedReturn)
  })

  it.each(groupedMeasurementsTestScenarios)('should return how many times depth measurement groups increased', (depthMeasurements, expectedReturn) => {
    const depthIncreaseDetector: DepthIncreaseDetector = new DepthIncreaseDetector()

    const timesDepthIncreased: number = depthIncreaseDetector.detectGroups(depthMeasurements)

    expect(timesDepthIncreased).toEqual(expectedReturn)
  })
})
