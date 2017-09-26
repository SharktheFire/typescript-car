export default class Car {

    private statusName: string

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
        this.statusName = 'driving'
    }
}

