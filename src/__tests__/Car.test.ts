import Car from '../Car'
import FakeService from '../FakeService'

describe('Car', () => {

  let car: Car

  beforeEach(() => {
    const brand: string = 'VW'
    const maxSpeed: number = 250
    const maxMileage: number = 1000

    car = new Car(brand, maxSpeed, maxMileage)
  })

  it('should have status parking after creation', () => {
     expect(car.status()).toEqual('parking')
  })

  it('should start the car', () => {
    car.start()
    expect(car.status()).toEqual('running')
  })

  it('should stop the car', () => {
    car.start()
    expect(car.status()).toEqual('running')
    car.stop()
    expect(car.status()).toEqual('parking')
  })

  it('should drive the car', () => {
    car.start()
    expect(car.status()).toEqual('running')
    car.drive(30, 50)
    expect(car.status()).toEqual('driving')
  })

  it('should not drive with negative speed', () => {
    car.start()
    expect(car.status()).toEqual('running')
    car.drive(-30, 50)
    expect(car.speed()).toEqual(0)
  })

  it('should not drive faster than max speed', () => {
    car.start()
    car.drive(300, 100)
    expect(car.speed()).toEqual(car.maxSpeed)
  })

  it('should leave status to running', () => {
    car.start()
    car.drive(0, 100)
    expect(car.status()).toEqual('running')
  })

  it('should not drive before car was started', () => {
    car.drive(100, 100)
    expect(car.status()).toEqual('parking')
  })

  it('should increase and decrease speed', () => {
    expect(car.speed()).toEqual(0)
    car.start()
    car.drive(50, 150)
    expect(car.speed()).toEqual(50)
    car.drive(-25, 150)
    expect(car.speed()).toEqual(25)
  })

  it('should return the mileage', () => {
    expect(car.mileage()).toEqual(0)
    car.start()
    car.drive(50, 150)
    expect(car.mileage()).toEqual(150)
  })

  it('should ignore negative distance', () => {
    expect(car.mileage()).toEqual(0)
    car.start()
    car.drive(50, -150)
    expect(car.mileage()).toEqual(0)
  })

  it('should not drive further than planned obsolesence', () => {
    car.start()
    car.drive(50, 1001)
    expect(car.mileage()).toEqual(car.maxMileage)
  })

  it('should stop driving if planned obsolescence is reached', () => {
    car.start()
    car.drive(50, 1001)
    expect(car.speed()).toEqual(0)
    expect(car.status()).toEqual('broken')
  })

  it('should not cover distance not driving', () => {
    car.start()
    expect(car.mileage()).toEqual(0)
    car.drive(0, 10)
    expect(car.mileage()).toEqual(0)
  })

  it('should not start if broken status', () => {
    car.start()
    car.drive(50, 1001)
    expect(car.status()).toEqual('broken')
    car.start()
    expect(car.status()).toEqual('broken')
  })

  it('should not stop if driving', () => {
    car.start()
    car.drive(50, 100)
    expect(car.status()).toEqual('driving')
    car.stop()
    expect(car.status()).toEqual('driving')
  })

  it('should not stop if broken', () => {
    car.start()
    car.drive(50, 1001)
    expect(car.status()).toEqual('broken')
    car.stop()
    expect(car.status()).toEqual('broken')
  })

  it('should not set speed if car is broken', () => {
    car.start()
    car.drive(50, 1001)
    expect(car.speed()).toEqual(0)
    car.drive(100, 50)
    expect(car.speed()).toEqual(0)
  })

  it('should have brand', () => {
    expect(car.brand()).toEqual('VW')
  })

  it('should give secret key to service', () => {
    const fakeService: FakeService = new FakeService()
    const carWithService = new Car('BMW', 200, 10000, fakeService)
    const secretNumber = Math.random().toString(36).substr(2, 9)

    fakeService.secretKey(carWithService, secretNumber)

    expect(fakeService.secretKeyNumber.length).toEqual(secretNumber.length)
  })

  it('should reset mileage only with secret key', () => {
    const fakeService: FakeService =  new FakeService()
    const carWithService: Car = new Car('BMW', 200, 10000, fakeService)

    carWithService.start()
    carWithService.drive(50, 100)
    carWithService.resetMileage('1')
    expect(carWithService.mileage()).toEqual(100)

    carWithService.resetMileage(fakeService.secretKeyNumber)
    expect(carWithService.mileage()).toEqual(0)
  })
})