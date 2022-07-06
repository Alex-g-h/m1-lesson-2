// initialization variables
const carName = 'VW';
let carMaxSpeed = 210;
let carOwner = 'Nick';

// output variables values
alert(`Car: \'${carName}\'`);
alert(`Car max speed: ${carMaxSpeed}`);
alert(`Car owner: \'${carOwner}\'`);

// change car max speed
changeCarMaxSpeed(190);
changeCarMaxSpeed(180);
changeCarMaxSpeed(215);


// change car owner
changeCarOwner('John');
changeCarOwner('Mike');
changeCarOwner('Edvard');

/**
 * Change car maximum speed and print it
 * @param {*} newSpeed New maximum car speed
 */
function changeCarMaxSpeed(newSpeed) {
  carMaxSpeed = newSpeed;
  console.log(`У машины изменилась максимальная скорость на значение ${carMaxSpeed} км/ч`);
}

/**
 * Change car owner and print it
 * @param {*} newOwner New car owner
 */
function changeCarOwner(newOwner) {
  carOwner = newOwner;
  console.log(`Новым владельцем машины стал \'${carOwner}\'`);
}
