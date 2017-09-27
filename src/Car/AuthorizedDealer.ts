import Car from '../Car'

export default interface AuthorizedDealer
{
    public secretKey(car: Car, secretKey: string)

    public resetMileage(car: Car)
}