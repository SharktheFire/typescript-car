export default class Car {

    private statusName: string
    private speedNumber: number

    constructor(private brand: string, private maxSpeed: number, private maxMileage: number) {
        this.statusName = 'parking'
    }

    public status(): string {
        return this.statusName
    }

    public start() {
        this.statusName = 'running'
    }

    public stop() {
        this.statusName = 'parking'
    }

    public drive(speed: number, distance: number) {

        if (speed <= 0) {
            this.speedNumber = 0
        } else {
            this.speedNumber = speed
        }

        if (speed > this.maxSpeed) {
            this.speedNumber = this.maxSpeed
        }

        this.statusName = 'driving'
    }

    public speed() {
        return this.speedNumber
    }
}

