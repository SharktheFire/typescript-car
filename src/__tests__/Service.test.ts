import Service from '../Car/Service'
import Car from '../Car'

describe('Service', () => {

    let service: Service

    beforeEach (() => {
        service = new Service()
    })

    it('should return a car', () => {
        const brand = 'BMW'
        const car = service.newCar(brand)
        expect(car.brand()).toEqual(brand)
    })

    it('should reset mileage', () => {
        const carOne = service.newCar('BMW')
        const carTwo = service.newCar('VW')

        carOne.start()
        carOne.drive(100, 100)

        carTwo.start()
        carTwo.drive(111, 123)

        service.resetMileage(carOne)
        expect(carOne.mileage()).toEqual(0)

        service.resetMileage(carTwo)
        expect(carTwo.mileage()).toEqual(0)
    })
})