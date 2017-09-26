import Car from '../Car'

export default class Service {

    public newCar(brand: string): Car
    {
        let maxSpeed: number
        let maxMileage: number
        switch (brand) {
            case 'BMW':
                maxSpeed = 100
                maxMileage = 1000.0
                break
            case 'VW':
                maxSpeed = 200
                maxMileage = 2000.0
                break
            default:
                maxSpeed = 300
                maxMileage = 3000.0
                break;
        }

        return new Car(brand, maxSpeed, maxMileage)
    }

    public resetMileage(car: Car) {
        car.resetMileage(car.id())
    }
}