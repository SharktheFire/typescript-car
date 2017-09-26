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

        if (this.statusName === 'running') {
            if (speed === 0) {
                this.statusName = 'running'
                this.speedNumber = speed
            } else {
                this.statusName = 'driving'
                this.speedNumber = speed
            }

            if (speed <= 0) {
                this.speedNumber = 0
            }

            if (speed > this.maxSpeed) {
                this.speedNumber = this.maxSpeed
            }
        }
    }

    public speed() {
        return this.speedNumber
    }
}

