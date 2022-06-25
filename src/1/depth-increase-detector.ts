export class DepthIncreaseDetector {

  detect(measurements: number[]): number {
    return measurements.reduce(this.increasedMeasurementAccumulator.bind(this), 0);
  }

  detectGroups(measurements: number[]): number {
    let measurementGroups: number[] = []
    const measurementGroupsSum: number[] = []

    measurements.forEach((currentMeasurement, currentIndex) => {
      if (currentIndex > 2) {
        measurementGroupsSum.push(measurementGroups.shift()!)
      }
      measurementGroups = measurementGroups.map(measurementGroup => measurementGroup + currentMeasurement)
      measurementGroups.push(currentMeasurement)

      if (currentIndex === measurements.length - 1) {
        measurementGroupsSum.push(measurementGroups.shift()!)
      }
    })

    return measurementGroupsSum.reduce((previousValue, currentValue, currentIndex) => {
      if (currentValue > measurementGroupsSum[currentIndex - 1]) {
        return ++previousValue
      }
      return previousValue
    }, 0)
  }

  private increasedMeasurementAccumulator(timesDepthIncreased: number, depthMeasurement: number, index: number, array: number[]): number {
    const isNotFirstMeasurement: boolean = index != 0

    if (isNotFirstMeasurement) timesDepthIncreased += this.measurementIncreased(depthMeasurement, array[index - 1])

    return timesDepthIncreased;
  }

  private measurementIncreased(currentMeasurement: number, previousMeasurement: number): number {
    if (currentMeasurement > previousMeasurement) {
      return 1
    }
    return 0
  }

}

