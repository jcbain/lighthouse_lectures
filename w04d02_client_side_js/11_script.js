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

const $button = $("#update-button");
$button.on('click', () => {
  console.log("this button was clicked!")
})

// 00 let's grab our input field now
const $newChannelInput = $("#new-channel-input");
$newChannelInput.on('keypress', (event) => {
  // console.log(event)
  // 01 if we take a look at this event
  // 01 we can see a key called target
  // 01 this is the element that the event happened to
  // 01 and if we look in target, we can see a value
  // 01 which is the target's value
  console.log(event.target.value)
  // 02 so its one character behind
  // 02 key press is both keydown and keyup
  // 02 now, this may or may not be what you want
  // 02 we can also listen for keyup, keydown and change
  // 02 experiment with these so you can see what they do
})