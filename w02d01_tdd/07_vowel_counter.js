// 00 lets fix that type error


// const vowelCounter = () => {}

// module.exports = vowelCounter;

// 01 and we will run our test again

// 02 so now we will implement
const vowelCounter = (str) => {
  if (!str) {
    return null;
  }
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for(const character of str.toLowerCase()) {
    if(vowels.includes(character)) {
      count++;
    }
  }
  return count;
}

// 03 and now we will bring in chai!
// 03 google search "chai npm"
// 03 go to docs https://www.chaijs.com/
// 03 click api and then assert and show that it
// 03 has a ton of assertions that we can check

module.exports = vowelCounter;