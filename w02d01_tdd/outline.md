## Today
- today we are focussing on testing
- good news for you all is that you have been testing since we have started
- so we are going to build up from manually testing and finish up with testing frameworks

- let's begins simple
- touch `say_hi.js`

## Module Wrapper  (before break)
- introduce them to node's module wrapper (node module wrapper) https://nodejs.org/api/modules.html#the-module-wrapper
- all of our code that we are writing is first wrapped in this 
- function which is why we have access to these variables
  - exports, require, module ...

## Test runners
- we've cleaned up our code, but we still have to manually run our tests to see if they are working. But what if I could listen for changes in the file system that just runs my test for me when I change the function.
- search "npm mocha"
- npm is the wharehouse for all node javascript code
  - it allows me to pull down other people's code
  - show different things like stats/ where source code lives etc...
- show mocha documentation (https://mochajs.org/)
  - show section for installation
  - we are going to save it as a dev dependency
- but first we need a `package.json`
  - this will give all the information about our application including our dependencies
  - run `npm init`
  - step through the options
  - keywords are comma separated
  - and all this will do is create a `package.json`
- now `npm install mocha --save-dev`
- cool, and we can see that we got a couple of new files and directories

## gitignore
- also, mocha has its own dependencies
- and we can now see that `node_modules` is pretty big so we never want to commit it because we can always re-install from our package.json
- so we introduce a `.gitignore`
- touch `.gitignore`

## using mocha
- look at the "Getting Started" on the mocha docs
- make a new directory called `test`
  - `mkdir test`

- then we will create a test file
- `touch test/say_hi.test.js`
- and now we can run the mocha command 
- `./node_modules/mocha/bin/mocha`

