1.
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

This declares 'The murderer is Miss Scarlet' because declareMurderer can see scenario const.

2.
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Error
// Reason - A constant is a value that cannot be altered by the program during normal execution. It cannot change through re-assignment, and it can't be redeclared.

// Actual - Type Error Assignment to constant variable at line 19.

3.
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// Predicted First Verdict: Mrs Peacock
// let variables can change to new person.
//          Second Verdict: Professor Plum
// As let is only visible from outside the function

4.
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// first console would give 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard'
// return statement is only changinging for the declareAllSuspects constant which is now suspects.
// second console is 'Suspect three is (still) Mrs Peacock' as it is not a part of the middle function.

5.
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
// The Weapon is the Revolover
// Can change the value in a const just not the full object.

6.
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  // Mr Green is murderer at this point

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }


  plotTwist();
  // murderer changes at this point to Mrs White. BEFORE closing bracket.
}
// as this is all in same function the it regards Mrs White as final murderer.
const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
// function is called to change murderer from Colonel Mustard to Mrs White

const verdict = declareMurderer();
console.log(verdict);
// murderer is Mrs White

7.
let murderer = 'Professor Plum';

const changeMurderer = function() { //opening bracket
  murderer = 'Mr. Green';
  // murderer Mr Green

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';
    // Colonel Mustard is murderer outside of function

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }
    // here should be colonel mustard as murderer
    unexpectedOutcome();
    // here should be Miss Scarlet as murderer
    // but only before this closing bracket
  }
  plotTwist();
  // here should be back as Mr Green
} // closing bracket

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}
// nothing is in the function as was in the bracket so should revert to Professor Plum

changeMurderer();
// Function called that makes Mr Green as murderer
const verdict = declareMurderer();
console.log(verdict);

// Mr Green

8.
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory', // changeScenario to Dining Room
  weapon: 'Lead Pipe'
};

const changeScenario = function() {   //opening bracket 1
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';  // this has changed the room to dining room

  const plotTwist = function(room) {  // opening bracket 2
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard'); // this calls on unexpectedOutcome which changes weapon to Candle Stick
  } //closing bracket 2

  plotTwist('Dining Room'); // this has called on changeScenario which calls on plot twist which changes murderer to Colonel Mustard.
} //closing bracket 1

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
// Candle Stick

9.
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//professor plum as if statement isnt wrapped in a variable

10.
const scenario = {
  murderer: 'Colonel Mustard',
  room: 'Living Room',
  weapon: 'Lead Pipe'
};

const changeMurderer = function(newMurderer) {
  scenario.murderer = newMurderer;
}

const declareMurderer = function() {
  return `The weapon is the ${scenario.murderer}.`;
}

changeMurderer('Mrs. Peacock');
const verdict = declareMurderer();
console.log(verdict);
