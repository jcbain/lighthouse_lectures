// 00 now we need to discuss document ready
// 00 document ready is a special event that fires
// 00 okay, so finally what we want to do 
// 00 is actually build up so that we can take 
// 00 our input and add it to our list of channels
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
  
  // 01 so first, lets return to our button, because
  // 01 when we click this button, it will grab
  // 01 our value from our input and add it to the
  const $newChannelInput = $("#new-channel-input");

  const $button = $("#update-button");
  $button.on('click', () => {
    console.log("this button was clicked!")
    // 02 first we want to grab our value from our input
    // 02 search "get value from input jquery"
    const newChannel = $newChannelInput.val();
    const $ul = $('#channels'); // grab the ul
    const $li = $('<li>').text(newChannel); // create an li and a new text node
    $ul.append($li) // apend li to ul

    $newChannelInput.val("")
    $newChannelInput.focus(); // search "add focus to input jquery"

  })
  
  // $newChannelInput.on('keypress', (event) => {
  
  //   console.log(event.target.value)
  // })
})