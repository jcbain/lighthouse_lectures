// what is window?
// well, window is just reference for this tab
// it's an api that exposes some functionality for
// us to interact with this window

// window is huge
window.location // gives us some information about where we are
// window is mutable so we could do something like
window.location = "https://homestarrunner.com"

// we can also check out this tab's history
window.history
// window.history === history; // > true
// we can even navigate through our history
window.history.back()
window.history.forward()

// we can also get information about the browser through the navigator
window.navigator
// through this, we can actually get other information
// like the user's location
navigator.geolocation.getCurrentPosition(data => console.log(data));
// or we could get the batter life
navigator.getBattery().then(res => console.log(res))

// now a very important child of the window is document
window.document
// the document represents the DOM
// DOCUMENT OBJECT MODEL
// so when we send our html up to the browser
// it gets read into memory and line by line
// gets converted into the DOM, so we are not 
// directly interacting with our html anymore
// see outline
// https://lucid.app/lucidchart/c2e551f9-4436-47f5-a02e-b9968d653db5/edit?beaconFlowId=287948C34F5AE235&invitationId=inv_48132f45-3735-47c6-a5ac-10bc6b0dd508&page=0_0#

//
console.dir(document)
// so the document has a ton of children
// we can see things like [all] which gives us all of the elements
// curious about any of it, just check mdn

// now if we want to grab something, we are going to use
// document.get...
document.getElementById("channels")
// and we get back our <ul>
const channelsUl = document.getElementById('channels')

// how might i now add a child
// google add a child node to dom element
// only time w3schools is more helpful than mdn
const node = document.createElement('li');
const textNode = document.createTextNode('O Network');
node.appendChild(textNode)
channelsUl.appendChild(node);

// now lets dow this in a script
