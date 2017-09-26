export default class Car {

    private statusName: string

    constructor(private brand: string, private maxSpeed: number, private maxMileage: number) {
        this.statusName = 'parking'
    }

    public status(): string {
        return this.statusName
    }
}

