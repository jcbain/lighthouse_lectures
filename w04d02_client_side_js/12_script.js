// 00 now we need to discuss document ready
// 00 document ready is a special event that fires
// 00 when the dom is completely loaded

// 01 and when we do this, it just says
// 01 hey don't execute this script until
// 01 the dom is fully loaded
$(document).ready(() => {

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
  
  const $newChannelInput = $("#new-channel-input");
  $newChannelInput.on('keypress', (event) => {
  
    console.log(event.target.value)
  })
})