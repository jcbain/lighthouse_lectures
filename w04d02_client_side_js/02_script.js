// let's just play around with this first
// can we just get a console log to work?
console.log('does this work?');

// now let's try and bring in our script that
// we wrote to add an item to our ul
const channelsUl = document.getElementById('channels')
const node = document.createElement('li');
const textNode = document.createTextNode('O Network');
node.appendChild(textNode)
channelsUl.appendChild(node); // null at this point until we move script down WHY? 