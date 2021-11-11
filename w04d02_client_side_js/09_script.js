console.log(`I have a dog and it's name is ${dogs[0]}`);

// const channelsUl = document.getElementById('channels')
// const node = document.createElement('li');
// const textNode = document.createTextNode(dogs[1]);
// node.appendChild(textNode)
// channelsUl.appendChild(node);

console.log(`jQuery === $`, jQuery == $);

const $channels = $("#channels");

$channels.addClass("celebration");

setTimeout(() => {
 $channels.removeClass("celebration");
}, 3000)

// 00 Now it is time that we talk about events
// 00 the browser has lots and lots of events
// 00 let's google "mdn browser events"

// 01 lets say I wanted to listen to a click event
// 01 on a button. let's create that button
// 01 so first we will want to grab it
const $button = $("#update-button");
$button.on('click', () => {
  // lets test first
  console.log("this button was clicked!")
})

// 02 now how about we listen for when the mouse is moving
// 02 over our ul
$channels.on('mousemove', (event) => {
  // every single event hanlder get passed
  // the event
  // console.log(event)
})


