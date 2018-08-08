class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }

  get address() {
    return this._address;
  }

  get costPerYear() {
    return this._costPerYear;
  }

  calculateMonthly() {
    return this.costPerYear / 12; 
  }
}

class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
  }

  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }

  static randomBorough() {
    const myBoroughs = ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'];
    return myBoroughs[Math.floor(Math.random() * 5)];
  }
}

let myApartment = new Apartment('1234 W 54th', 22000, 3);
function apartmentComplex() {
	let address = '14th street, New York, NY';
	const gym = "Inner-Section, Building 8";

	console.log("***Apartment Complex Information***");

	console.log(address);
	console.log(`Gym: ${gym}`);

	apartmentComplex.apartmentBuilding = apartmentBuilding;

	function apartmentBuilding() {
		let laundryRoom = "Basement";
		const mailRoom = "Room 1A";
		const buildingLaundryCode = 4927;
		address = '150';
		const buildingPhone = '(481) 516-2342';

		apartmentBuilding.myApartment = myApartment;

		function myApartment() {
			address = 42;
			const mailBoxNumber = "Box 3";
			laundryRoom = "In-unit";
			console.log("Mail box: " + mailBoxNumber + ",", "Laundry:" + laundryRoom);
			const myCoffeeMaker = 'Aeropress';
			const myCloset = 'extra coats in the back';
			const myRefrigerator = 'filled with veggies and dark chocolate.';
			const myDog = 'Nikko';
			const log = [
				`Room Number - ${address}`,
				`My coffee maker brand is ${myCoffeeMaker}`,
				`My dog's name is ${myDog}`,
				`My refrigerator is ${myRefrigerator}`,
				`My closet has ${myCloset}.`,
			];
			myApartment.log = log;
		}
		// Do not edit the code after this line
		console.log("\n**Apartment Building Information**");
		console.log("Laundry code: " + buildingLaundryCode + "\nPhone: " + buildingPhone + "\nMailing address: " + address + "\nLaundry Room: " + laundryRoom);

		console.log("\n*My Apartment Information*");
	}
}
apartmentComplex();
let seconds = 2;
let milliseconds = seconds * 1000;
setTimeout(function() {
	apartmentBuilding = apartmentComplex.apartmentBuilding;
	apartmentBuilding(); // Logic
}, milliseconds);
seconds++;
setTimeout(function() {
	myApartment = apartmentBuilding.myApartment;
	myApartment();
}, milliseconds);
seconds++;
let counter = 0;
const timer = setInterval(function() {
			
	console.log(myApartment.log[counter]);
	counter++;
	if (counter === myApartment.log.length) {
		clearInterval(timer);
	}
}, milliseconds);