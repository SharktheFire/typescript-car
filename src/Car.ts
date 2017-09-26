export default class Car {

    private statusName: string
    private speedNumber: number = 0

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

    public speed() {
        return this.speedNumber
    }

    public drive(speed: number, distance: number) {

        if (this.statusName === 'running' || this.statusName === 'driving') {

            this.statusName = 'driving'
            this.speedNumber += speed

            if (this.speedNumber > this.maxSpeed) {
                this.speedNumber = this.maxSpeed
            }

            if (this.speedNumber <= 0) {
                this.speedNumber = 0
                this.statusName = 'running'
            }
        }
    }
}

