export default class Car {

    private statusName: string
    private speedNumber: number = 0
    private mileageNumber: number = 0

    constructor(private brand: string, private maxSpeed: number, private maxMileage: number) {
        this.statusName = 'parking'
    }

    public status(): string {
        return this.statusName
    }

    public start() {
        if (this.status() === 'parking') {
            this.statusName = 'running'
        }
    }

    public stop() {
        this.statusName = 'parking'
    }

    public speed() {
        return this.speedNumber
    }

    public mileage() {
        return this.mileageNumber
    }

    public drive(speed: number, distance: number) {

        if (this.statusName === 'running' || this.statusName === 'driving') {

            if (distance > 0) {
                this.statusName = 'driving'
                this.speedNumber += speed
                this.mileageNumber += distance

                if (this.speedNumber > this.maxSpeed) {
                    this.speedNumber = this.maxSpeed
                }

                if (this.speedNumber <= 0) {
                    this.speedNumber = 0
                    this.mileageNumber = 0
                    this.statusName = 'running'
                }

                if (this.mileageNumber > this.maxMileage) {
                    this.mileageNumber = this.maxMileage
                    this.speedNumber = 0
                    this.statusName = 'broken'
                }
            }
        }
    }
}

