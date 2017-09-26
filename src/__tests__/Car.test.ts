import Car from '../Car'

describe('Car', () => {

  beforeEach(() => {

    const brand: string = 'VW'
    const maxSpeed: number = 250
    const maxMileage: number = 1000

    const car: Car = new Car(brand, maxSpeed, maxMileage)
  })

  it('should have status parking after creation', () => {
    const car: Car = new Car('Audi', 100, 200)
    expect(car.status()).toEqual('parking')
  })
})