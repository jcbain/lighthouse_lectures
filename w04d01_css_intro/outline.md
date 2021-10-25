## Preamble
- no server side rendering this week. Everything we are doing is client side for week 4!
- we will learn how to style them and how to bring in javascript to add functionality to our application 
- Week 4, so by this point, we really expect for you all to start becoming comfortable with Googling your issues


## Tweeter app
- demonstrate twitter clone, what it will look like, its functionality etc.
- responsive design

## html overview
- we don't actually talk about html in bootcamp because it is fairly straight-forward once we wrap our head around it.
- but today we are going to have a brief overview of it just so we are familiar with writing it.
- befor html 5, we were limited in our html elements and most common of them was a `div` (still super popular)
- we can think of html as a bunch of blocks. Blocks in blocks. Everything is a block. Use tweeter as an example.
- start example with divs

## semantic html
- so i hand you this page and you are like, what is this content. A header?
- google "html semantic elements mdn"
- start replacing elements with more appropriate tags

## inline styles
- now let's say i wanted to add some styles to my page. Well, that's where css comes in.

## style element
- search mdn style element
- put in a style without a selector

## selectors
- we talked a little bit about selectors
- we can now asign rules to an html element
- what if we want to target only one heading?
- classes

## box-model
- treat everything as if it were a box
- each element is a box and a box can contain more boxes
- the box model is that almost every element on the page has these attributes
- it has a width and a height
- padding (space around the content) if we think of a house, this would be the yard
- border, like a fence around a yard
- margin (space away from other elements how to push other elements away), it would be the space between your lot and the next lot
- show devtools box-model
- play with in devtools

- now how big is our element
- well you will notice that if we specify a width and we use the selector tool and hover over it, our width is the width of the content + the padding + the border
- makes it hard to figure out the absolute size of our elements
- we used to have to do the math to figure out how large our elements should be
- this leads us to `box-sizing`
- go to http://guyroutledge.github.io/box-model/
- the default for `box-sizing` is `content-box`
- but we can switch to `border-box` which makes the width the total of the padding and border and content
- highly recommend to make this the default on your entire page using wild card
- easier for layouts 

## External stylesheets
- now we want to divorce our html from our css so instead we can create an external stylesheet to keep our styles and import them into our html
- what if we had multiple html pages but want to use the same style?
