import AuthorizedDealer from './Car/AuthorizedDealer'

export default class Car {

    private statusName: string
    private speedNumber: number = 0
    private mileageNumber: number = 0
    private uniqueId: string = Math.random().toString(36).substr(2, 9)
    private secretKey: string


    constructor(private brandName: string, private maxSpeed: number, private maxMileage: number, private dealer?: AuthorizedDealer) {
        this.statusName = 'parking'

        if (this.dealer !== undefined) {
            const id = Math.random().toString(36).substr(2, 9)
            this.secretKey = id
            dealer.secretKey(this, this.secretKey)
        }
    }

    public status(): string {
        return this.statusName
    }

    public brand(): string {
        return this.brandName
    }

    public start() {
        if (this.status() === 'parking') {
            this.statusName = 'running'
        }
    }

    public stop() {
        if (this.status() === 'running') {
            this.statusName = 'parking'
        }
    }

    public speed(): number {
        return this.speedNumber
    }

    public mileage(): number {
        return this.mileageNumber
    }

    public drive(speed: number, distance: number) {

        if (this.statusName === 'running' || this.statusName === 'driving') {

            if (distance > 0) {
                this.statusName = 'driving'
                this.speedNumber += speed
                this.mileageNumber += distance

                if (this.speedNumber > this.maxSpeed) {
                    this.speedNumber = this.maxSpeed
                }

                if (this.speedNumber <= 0) {
                    this.speedNumber = 0
                    this.mileageNumber = 0
                    this.statusName = 'running'
                }

                if (this.mileageNumber > this.maxMileage) {
                    this.mileageNumber = this.maxMileage
                    this.speedNumber = 0
                    this.statusName = 'broken'
                }
            }
        }
    }

    public id() {
        return this.uniqueId
    }

    public resetMileage(onlyWithSecretKey: string) {
        if (onlyWithSecretKey === this.secretKey) {
            this.mileageNumber = 0
        }
    }
}

