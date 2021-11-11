
console.log(`I have a dog and it's name is ${dogs[0]}`);


// 00 we can go ahead and comment this out. We are not going to use jquery 
// 00 to do this
// const channelsUl = document.getElementById('channels')
// const node = document.createElement('li');
// const textNode = document.createTextNode(dogs[1]);
// node.appendChild(textNode)
// channelsUl.appendChild(node);

console.log(`jQuery === $`, jQuery == $);

// 01 grabbing an element
// 01 well above we grabbed it by its id
const channels = $("#channels");
console.log(channels);

// 02 notice how this looks just a little different
// 02 because it doesn't just give us back the dom node
// 02 it actually wraps that dom node in jquery 

// 03 for example, let's say i wanted to add a class to this 
// 03 element progromatically 
// 03 first let's create a new rule in our css
// 03 then we just google jquery add a class
channels.addClass("celebration");

// 03 and to remove a class
setTimeout(() => {
 channels.removeClass("celebration");
}, 3000)

// 04 now, what you will conventionally see
// 04 for these jquery wrapped dom elements
// 04 is a semantic naming convention
// 04 in which we put a $ in front of our variable 
// 04 name
const $channels = $("#channels");