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
})

//     /**
//      * @test
//      */
//     public function itShouldNotDriveFasterThanMaxSpeed()
//     {
//         $maxSpeed = 200.0;
//         $maxMileage = 1000.0;
//         $car = new Car('BMW', $maxSpeed, $maxMileage);
//         $car->start();
//         $car->drive(220.0, 42.0);
//         $this->assertEquals($maxSpeed, $car->speed());
//     }
//     /**
//      * @test
//      */
//     public function itShouldLeaveStatusToRunning()
//     {
//         $this->car->start();
//         $this->assertEquals('running', $this->car->status());
//         $this->car->drive(0.0, 42.0);
//         $this->assertEquals('running', $this->car->status());
//     }
//     /**
//      * @test
//      */
//     public function itShouldNotDriveBeforeCarWasStarted()
//     {
//         $this->car->drive(10.0, 42.0);
//         $this->assertEquals('parking', $this->car->status());
//     }
//     /**
//      * @test
//      */
//     public function itShouldIncreaseAndDecreaseSpeed()
//     {
//         $this->assertEquals(0.0, $this->car->speed());
//         $this->car->start();
//         $this->car->drive(50.0, 55.0);
//         $this->assertEquals(50.0, $this->car->speed());
//         $this->car->drive(-25.0, 55.0);
//         $this->assertEquals(25.0, $this->car->speed());
//     }
//     /**
//      * @test
//      */
//     public function itShouldReturnTheMileage()
//     {
//         $this->assertEquals(0.0, $this->car->mileage());
//         $this->car->start();
//         $this->car->drive(50.0, 120.0);
//         $this->assertEquals(120.0, $this->car->mileage());
//     }
//     /**
//      * @test
//      */
//     public function itShouldIgnoreNegativeDistances()
//     {
//         $this->assertEquals(0.0, $this->car->mileage());
//         $this->car->start();
//         $this->car->drive(50.0, -120.0);
//         $this->assertEquals(0.0, $this->car->mileage());
//     }
//     /**
//      * @test
//      */
//     public function itShouldNotDriveFurtherThanPlannedObsolesence()
//     {
//         $maxMileage = 5000.0;
//         $car = new Car('BMW', 250.0, $maxMileage);
//         $this->assertEquals(0.0, $car->mileage());
//         $car->start();
//         $car->drive(180.0, 5000.1);
//         $this->assertEquals($maxMileage, $car->mileage());
//     }
//     /**
//      * @test
//      */
//     public function itShouldStopDrivingIfPlannedObsolescenceIsReached()
//     {
//         $maxMileage = 5000.0;
//         $car = new Car('BMW', 250.0, $maxMileage);
//         $car->start();
//         $car->drive(180.0, 5100.0);
//         $this->assertEquals(0.0, $car->speed());
//         $this->assertEquals('broken', $car->status());
//     }
//     /**
//      * @test
//      */
//     public function itShouldNotCoverDistanceNotDriving()
//     {
//         $this->car->start();
//         $this->assertEquals(0.0, $this->car->mileage());
//         $this->car->drive(0.0, 10.0);
//         $this->assertEquals(0.0, $this->car->mileage());
//     }
//     /**
//      * @test
//      */
//     public function itShouldNotStartIfBroken()
//     {
//         $maxMileage = 5000.0;
//         $car = new Car('BMW', 250.0, $maxMileage);
//         $car->start();
//         $car->drive(90.0, 5000.1);
//         $this->assertEquals('broken', $car->status());
//         $car->start();
//         $this->assertEquals('broken', $car->status());
//     }
//     /**
//      * @test
//      */
//     public function itShouldNotStartWhileDriving()
//     {
//         $this->car->start();
//         $this->car->drive(50.0, 100.0);
//         $this->assertEquals('driving', $this->car->status());
//         $this->car->start();
//         $this->assertEquals('driving', $this->car->status());
//     }
//     /**
//      * @test
//      */
//     public function itShouldNotStopIfDriving()
//     {
//         $this->car->start();
//         $this->car->drive(50.0, 100.0);
//         $this->assertEquals('driving', $this->car->status());
//         $this->car->stop();
//         $this->assertEquals('driving', $this->car->status());
//     }
//     /**
//      * @test
//      */
//     public function itShouldNotStopIfBroken()
//     {
//         $maxMileage = 1000.0;
//         $car = new Car('BMW', 250, $maxMileage);
//         $car->start();
//         $car->drive(50.0, 1000.1);
//         $this->assertEquals('broken', $car->status());
//         $car->stop();
//         $this->assertEquals('broken', $car->status());
//     }
//     /**
//      * @test
//      */
//     public function itShouldNotSetSpeedIfCarIsNotStarted()
//     {
//         $this->assertEquals(0.0, $this->car->speed());
//         $this->car->drive(50.0, 100.0);
//         $this->assertEquals(0.0, $this->car->speed());
//     }
//     /**
//      * @test
//      */
//     public function itShouldNotSetSpeedIfCarIsBroken()
//     {
//         $maxMileage = 1000.0;
//         $car = new Car('BMW', 250, $maxMileage);
//         $car->start();
//         $car->drive(50.0, 1000.1);
//         $this->assertEquals(0.0, $car->speed());
//         $car->drive(50.0, 500.0);
//         $this->assertEquals(0.0, $car->speed());
//     }
//     /**
//      * @test
//      */
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
