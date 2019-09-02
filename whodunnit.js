/* Episode 1

const character = {
  character: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The character is ${character.name}.`;
}

const verdict = declareMurderer();
console.log(verdict);

Murderer is Miss Scarlet.



Episode 2

const character = 'Professor Plum';

const changeMurderer = function() {
  character = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The character is ${character}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

Murderer is Professor Plum as character is set as const globally and cannot be amended even within a function.



Episode 3

let character = 'Professor Plum';

const declareMurderer = function() {
  let character = 'Mrs. Peacock';
  return `The character is ${character}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The character is ${character}.`;
console.log('Second Verdict: ', secondVerdict);

First verdict: Mrs Peacock because the initial variable character is set as let, which means it can be overwritten within a function, though this is only set within the confines of firstVerdict.

Second verdict: Professor Plum because the secondVerdict is drawing from the initial character, as it cannot access the character from the firstVerdict.



Episode 4

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

Suspect 3 is Mrs Peacock because the redefinition of suspectThree within declareAllSuspects is defining a new variable, not rewriting the initial variable.

AllSuspects are Scarlet, Plum and Mustard



Episode 5

const character = {
  character: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  character.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${character.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

Weapon is the Revolver, as const on character will still allow the weapon to be overwritten as a string, but will not allow a new object?



Episode 6

let character = 'Colonel Mustard';

const changeMurderer = function() {
  character = 'Mr. Green';

  const plotTwist = function() {
    character = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The character is ${character}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

Mrs White is the character because PlotTwist is called as a final action in the changeMurder method, this allows for the character (let) to be overwritten.



Episode 7

let character = 'Professor Plum';

const changeMurderer = function() {
  character = 'Mr. Green';

  const plotTwist = function() {
    let character = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      character = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The character is ${character}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


Mr Green is the character as plotTwist defines a new character with let, and it is this that is being overwritten when unexpected outcome occurs.



Episode 8

const character = {
  character: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  character.name = 'Mrs. Peacock';
  character.room = 'Dining Room';

  const plotTwist = function(room) {
    if (character.room === room) {
      character.name = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(character) {
      if (character.name === character) {
        character.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${character.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

Weapon is the candlestick through a chain of matching statements within change character.



Episode 9

let character = 'Professor Plum';

if (character === 'Professor Plum') {
  let character = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The character is ${character}.`;
}

const verdict = declareMurderer();
console.log(verdict);

Murderer is Professor Plum, because within the if statement we define a new variable with let rather than writing over character.



Extensions

Make up your own episode!


*/

const characters = [
    {
    name: 'Miss Scarlet',
    room: 'Lounge',
    weapon: 'Ladle',
    anger_level: 10
  },
  {
    name: 'Mr Green',
    room: 'Bedroom',
    weapon: 'Revolver',
    anger_level: 18
  },
  {
    name: 'Mrs White',
    room: 'Bathroom',
    weapon: 'Bar of Soap',
    anger_level: 8
  },
  {
    name: 'Professor Plum',
    room: 'Dining Room',
    weapon: 'Cup of Scolding Hot Coffee',
    anger_level: 7
  },
];

const controlsAnger = function(character) {
  character.anger_level -= 4
}

const uncomfortableConversation = function(character) {
  character.anger_level += 2
}

const impoliteDisagreement = function(character) {
  character.anger_level += 10
}

function situation() {
    for (const character of characters) {
    if (character.name === "Professor Plum") {
      controlsAnger(character);
      uncomfortableConversation(character);
    } else if (character.name === "Miss Scarlet") {
      uncomfortableConversation(character);
      uncomfortableConversation(character);
    } else if (character.name === "Mrs White") {
      controlsAnger(character);
      impoliteDisagreement(character);
      impoliteDisagreement(character);
      impoliteDisagreement(character);
    } else {
      controlsAnger(character);
      controlsAnger(character);
      controlsAnger(character);
      impoliteDisagreement(character);
    }
  }
};

const theresBeenAMurder = function() {
  for (const character of characters) {
    if (character.anger_level > 30) {
        character.attribute = 'Murderer!';
    } else if (character.anger_level < 8) {
        character.name = `Spirit of ${character.name}`
        character.attribute = 'Victim';
    } else {
        character.attribute = 'Survivor';
    }
  }
};

const oneMoreThing = function() {
  for (const character of characters) {
    if (character.attribute === 'Murderer!') {
      console.log(`Just one more thing ${character.name}... I believe you are the ${character.attribute}`);
    } else if (character.attribute === "Victim") {
      console.log(`And a word to our poor victim, who exists with us as the ${character.name}.`)
    } else {
    }
  }
}

situation();
theresBeenAMurder();
oneMoreThing();
