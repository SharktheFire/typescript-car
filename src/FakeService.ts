import Car from './Car'

export default class FakeService implements AuthorizedDealer {

    public secretKeyNumber: string
    private keychain: Array = []

    public secretKey(car: Car, secretNumber: string)
    {
        this.keychain[car.id()] = secretNumber
        this.secretKeyNumber = secretNumber
    }

    public resetMileage(car: Car)
    {
        car.resetMileage(this.keychain[car.id()])
    }
}