// even though dogs isn't created here, it has access
// to the variables created in the scripts before it
console.log(`I have a dog and it's name is ${dogs[0]}`);

const channelsUl = document.getElementById('channels')
const node = document.createElement('li');
const textNode = document.createTextNode(dogs[1]);
node.appendChild(textNode)
channelsUl.appendChild(node);
