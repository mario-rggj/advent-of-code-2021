export class DepthIncreaseDetector {

    detect(measurements: number[]): number {       
        return measurements.reduce(this.increasedMeasurementAccumulator.bind(this),0);
    }

    private increasedMeasurementAccumulator(timesDepthIncreased :number, depthMeasurement: number, index: number, array: number[]) : number {
        const isNotFirstMeasurement: boolean = index != 0

        if(isNotFirstMeasurement) timesDepthIncreased += this.measurementIncreased(depthMeasurement,array[index-1])

        return timesDepthIncreased;
    }

    private measurementIncreased(currentMeasurement :number, previousMeasurement: number) :number {
        if(currentMeasurement > previousMeasurement) {
            return 1
        }
        return 0
    }

}

