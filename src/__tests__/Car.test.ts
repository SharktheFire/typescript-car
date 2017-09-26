import Car from '../Car'

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
})
//     public function itShouldHaveBrand()
//     {
//         $car = new Car('BMW', 220.0, 5000.0);
//         $this->assertEquals('BMW', $car->brand());
//     }
//     /**
//      * @test
//      */
//     public function itShouldReturnStats()
//     {
//         $maxSpeed = 250.0;
//         $maxMileage = 6000.0;
//         $brand = 'BMW';
//         $car = new Car($brand, $maxSpeed, $maxMileage);
//         $expectedStats = [
//             'brand' => 'BMW',
//             'maxSpeed' => $maxSpeed,
//             'maxMileage' => $maxMileage,
//             'speed' => 0.0,
//             'mileage' => 0.0,
//             'status' => 'parking',
//         ];
//         $this->assertEquals($expectedStats, $car->stats());
//         $car->start();
//         $expectedStats['status'] = 'running';
//         $this->assertEquals($expectedStats, $car->stats());
//         $car->drive(180.0, 6000.0);
//         $expectedStats['status'] = 'driving';
//         $expectedStats['speed'] = 180.0;
//         $expectedStats['mileage'] = 6000.0;
//         $this->assertEquals($expectedStats, $car->stats());
//         $car->drive(10.0, 0.1);
//         $expectedStats['status'] = 'broken';
//         $expectedStats['speed'] = 0.0;
//         $expectedStats['mileage'] = 6000.0;
//         $this->assertEquals($expectedStats, $car->stats());
//     }
//     /**
//     * @test
//     */
//     public function itShouldBeRunningWhenSpeedIsZero()
//     {
//         $this->car->start();
//         $this->car->drive(50.0, 30.0);
//         $this->assertEquals('driving', $this->car->status());
//         $this->car->drive(-50.0, 30.0);
//         $this->assertEquals(0.0, $this->car->speed());
//         $this->assertEquals('running', $this->car->status());
//     }
//     /**
//      * @test
//      */
//     public function itShouldGiveSecretKeyToService()
//     {
//         $fakeService = new FakeService();
//         $car = new Car('BMW', 180.0, 5000.0, $fakeService);
//         $this->assertEquals(
//             strlen(uniqid('BMW')),
//             strlen($fakeService->secretKey)
//         );
//     }
//     /**
//      * @test
//      */
//     public function itShouldResetMileageOnlyWithSecretKey()
//     {
//         $fakeService = new FakeService();
//         $car = new Car('BMW', 180.0, 5000.0, $fakeService);
//         $car->start();
//         $car->drive(50.0, 1000.0);
//         $this->assertEquals(1000.0, $car->mileage());
//         $car->resetMileage('a wrong key');
//         $this->assertEquals(1000.0, $car->mileage());
//         $car->resetMileage($fakeService->secretKey);
//         $this->assertEquals(0.0, $car->mileage());
//     }
// }
