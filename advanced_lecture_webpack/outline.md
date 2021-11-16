## Preamble

## Life without Webpack/bundlers
- Think back to week 4 when we learned how the browser reads in files
- How did we handle something like a file that was dependent on another file?
  - just made sure that the dependency was loaded first

## Getting Started
- Download our initial dependencies
```sh
> yarn init -y
> yarn add --dev webpack webpack-cli
> yarn add react react-dom
```

- Now we can take a look out webpack's default behavior without configuration
```sh
> ./node_modules/.bin/webpack  # build development bundle
```
- By default, webpack will look for `src/index.js` as it's entry point for the dependency tree
- it will then build a bundle script named main under a directory called `dist/`
- let's create an `dist/index.html` and include our script tag for this new `main.js`
- you will also notice that webpack also handles **es6** module syntax natively (`import ... from`, `export default`)

## Entry

- let's first modify our `package.json` because we are not taking advantage of scripts. Let's add one.

```json
...,
"scripts": {
  "start": "webpack"
},
...
```
- this will run webpack with all the defaults but let's say we want to modify the configuration of our bundles.
  - let's first create a configuration file for webpack

```sh
touch webpack.config.js
```

- we can specify a different entrypoint however, now we need to specify that we want to use this configuration file when we run the "start" script

```json
...,
"scripts": {
  "start": "webpack --config webpack.config.js"
},
...
```

## Mode
- notice that the webpack output says `'mode' option has not been set, webpack will fallback to 'production' for this value`
- this will mean that our bundle will be minified, which is great for production but maybe we want this to be more clear for development builds
- let's change it to 'development' for now in our config
  - this will unminify our code
  - `devtool : false` will ensure we don't have those eval blocks for our code. It is a bit slower to build but easier to inspect the build


## Output
If we can modify the entrypoint, surely we can modify the output. Let's take a look at our `webpack.config.js` again.

- we can specify where we want the build to be made
- and what file we want it to be outputted to

### Cache busting
- if our file names stay the same every single build in production, it is possible that people making request for that resource with their browsers will just be told to use the bundle that have cached meaning that they may be using an outdated version of the code.
- during our builds, we can have webpack hash the content of our bundles and since hashes are 1:1, only if our code changes will the filename change


## Plugins
- so, there are a couple things that are pretty annoying right now: 
  1. everytime a new bundle is generated I have to change the `src` attribute in my `index.html`
  2. there is no clean up from previously build bundles
- Plugins are here to help us out with our management of assets (amont other things)
- first let's install a couple of these plugins before we start to use them to help us out.

```sh
yarn add --dev clean-webpack-plugin html-webpack-plugin
// make new directory with your template
mkdir public && touch public/index.html
```
- As you can see, HtmlWebpackPlugin takes in a template and injects our bundle's script into it automatically
- CleanWebpackPlugin will remove any file not built from the most recent bundle

## Loaders
- Webpack only knows how to understand javascript and json files, so any other type of file, we have to give webpack a special set of instructions on how to process it into a valid module to be used by your application.
- let's take a look. Let's see what happens when we try to add `App.css` to our dependency graph
- To handle a css file, we need to bring in a couple of loaders

```sh
yarn add --dev style-loader css-loader
```
- so we're going to be using the `module` key in our config and we are going to specify a rule. 
  1. a rule takes a `test` (generally a regex for the types of files these rules apply to)
  2. and a `use` which will specify which loaders to handle
    - these loaders are just functions. If chained, they next one will take the preceeding ones output as input in reverse order.

### adding Sass
- well, the browser can't handle sass, but can we compile it to css first then use css-loader? Yes

```sh
yarn add --dev sass-loader sass
```

### add jsx and Babel
- what is Babel? It is a transpiler. Our browsers don't know all the fancy things that is the javascript ecosystem these days. JSX, typescript, es6 in IE? Well, Babel takes our js and transpiles it to js that browsers understand.

- need to download dependencies

```sh
yarn add --dev @babel/core babel-loader

```

- so we are going to transpile our jsx and js code. 
- However, we are still unable to use jsx in our code
- we need a couple of more libraries to specify some options for us

```sh
yarn add --dev @babel/preset-env @babel/preset-react
```

- we can actually write our `use` and pass it an object so that we can give it some options


## Dev server
- right now it is kind of annoying that we have to build and serve manually when we are developing. 
- you know from working with CRA that we have a hot-reloading dev server always listening for file changes
- well, webpack allows us to serve by adding on a command

```sh
yarn add --dev webpack-dev-server
```

```json
"start": "webpack server --config webpack.config.js --open"
```
## Different Modes

- Now has come the time where we can actually start to think about partitioning our bundles.
- perhaps we want a development bundle serving up a hot-reloading dev server while we are developing
- and perhaps we want some file output that are compressed for a production build
- well we can do that. We just need a couple of config files and one shared one that has all of the configuration that would be shared between the two. Let's start with creating a dev version

```sh
yarn add --dev webpack-merge
```

- now we can specify different options depending on the configuration.
- for a production build, we just want the bundled assets
- for a development build, the assets only need to be loaded into memory

