// why should we use objects?
// create an entity where values have a cohesive relationship

const creatureOne = 'bigfoot';
const nameOne = 'bigfoot';
const locationOne = 'U.S.'

const creatureTwo = 'el chupacabra';
const nameTwo = 'billie';
const locationTwo = 'Puerto Rico';

// ..creatureThree...creatureFour...creatureSixMillionThreeThousandTwentyFour 

// perhaps I could  make arrays for conceptually similar information
const creatures = ['bigfoot', 'el chupacabra', 'loch ness monster', 'unicorn'];
const names = ['harry', 'billie', 'lauren', 'alex']; 
const locations = ['U.S.', 'Puerto Rico', 'Scottland', 'Mongolia'];

// perhaps arrays of an entity?
// is this problematic
const bigfoot = ['bigfoot', 'harry', 'U.S.', true];
const elChupacabra = ['el chupacabra', 'billie', 'Puerto Rico', false];

// keys can hold semantic meaning that make our code easier to understand
const mythicalCreature = {
  type: 'bigfoot',
  name: 'harry',
  location: 'U.S.',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca']
};