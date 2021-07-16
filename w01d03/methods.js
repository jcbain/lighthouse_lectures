// What are methods?
// functions that belong to objects

// have we seen them before?
// yup!
console.log('log is a method of the console object!!!');
console['log']("even though I can doesn't mean I should");

// what are things that a bigfoot would do? 
const alludeCamera = function() {
  console.log('byeeeeeee!')
}

const bigfoot = {
  name: 'harry',
  location: 'U.S.',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca'],
  growl: function() {
    console.log('get off my lawn!')
  },
  // alludeCamera
  alludeCamera: alludeCamera
};

bigfoot.growl();
bigfoot.alludeCamera();