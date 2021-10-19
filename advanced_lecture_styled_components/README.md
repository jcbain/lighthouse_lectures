# W10 - Advanced Topic -- Encapsulated Styles with styled components 

## Objectives
- [ ] encapsulated styles
- [ ] basic usage of styled components
- [ ] extending styles
- [ ] styling with props
- [ ] styling "other" components
- [ ] styling "our" components
- [ ] theming
- [ ] ...and more

## Our First styled-component

With `styled-components` we can embed our styles right into our rendered component. For example, if we take a look at the demo that the styled-components doc provides us.

```jsx
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
```

and now we have a styled button that we can move through out our app

```jsx
const SomeComponent = (props) => {

  return (
    <div>
      <Button>click me!!!!!!!<Button>
    </div>
  )
}
```

## Extending our styles

There are times in which our styles depend on the layout itself. For example, let's say we have a button that is normally a dark color but when it get's nested in a dark element, then we would want to change the color to be a bit more visible. Well, styled-components allows us to build that relationship and pass down the generated class of our div into our button's styles like so.

```jsx
const SpecialButtonContainer = styled.div`
  background: darkblue;
`;
const Button = styled.button`
  background: darkblue;
  color: white;
  border-radius: 3px;
  ${SpecialButtonContainer} & {
    background: white;
    color: black;
  }
`;
```

## Passing props

One of the huge benefits of `styled-components` is the ability to pass props to them, which means we can change them based off of values we pass to them much in the same way we pass props to our regular components.

```jsx
const ChangingDiv = styled.div`
  background: ${props => props.bg};
  height: 20px;
  width: 20px;
`

const RainbowDivs = (props) => {
  return (
    <div>
      <ChangingDiv bg="red" />
      <ChangingDiv bg="orange" />
      <ChangingDiv bg="yellow" />
      <ChangingDiv bg="green" />
      <ChangingDiv bg="blue" />
      <ChangingDiv bg="indigo" />
      <ChangingDiv bg="violet" />
    </div>
  )
}
```

This also means that we can conditionally render styles

```jsx
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: green;
  color: white;
  border-radius: 5px;
  ${props => props.secondary && css`
    background: white;
    border: 2px solid green;
    color: green;
  `}
`

<Button /> // green button with white text
<Button secondary /> // white button with green border
```


## Styling other components

We also have the ability to style other components as long as those components pass provide access to their `className` prop since that is how `styled-components` work by generating a className and passing it to the rendered component. 

For example, it is common to use virtual routing using `react-router-dom` and one of the components provided by this API is `Link`. Styling this with styled-components looks like so...

```jsx
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

<StyledLink />
```

## Theming

`styled-components` also gives us a convenient way to theme our applications allowing us to easily switch themes for user preference. 

```jsx
import styled, { ThemeProvider } from 'styled-components';

import SomeStyledComponent from './components/someStyledComponent';

const Button = styled.button`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.textColor};
`;

const darkTheme = {
  bg: '#000000',
  textColor: 'white'
};

const App = (props) => {

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <SomeStyledComponent />
        <Button />
      </div>
    </ThemeProvider>
  )
}
```

Notice how you have to bring in the `ThemeProvider` in order to extend the theme. What this will do is pass the theme down as a `theme` prop to every styled component nested underneath the `ThemeProvider`. Also notice how we don't have to explicity pass the theme prop to these components.

## Separation of Concerns

We've told you that *separation of concerns* is an important principle for maintaining our code and this is true. Up until this point, our apps have taken the structure of our `javascript` has been separated from our `css` which is separated from our `html`. However, there is an argument to be made that encapsulating our styles within our components reduces collisions in our styles. 😉

Take for example a project with the following structure:
```
src/
 |_ Button/
    |_ index.jsx
    |_ button.css
 |_ Input/
    |_ index.jsx
    |_ input.css
```

and our `button.css` and `input.css` have the a rule applied to a classes with the same name like so:

```css
/* button.css */
.active {
  background: red;
}

/* input.css */
.active {
  background: purple;
}
```

If both of these components are rendered at the same time, well, then there is a collision in our css rules and our browser doesn't know which rule belongs to which component.




## Links
- [styled components docs](https://styled-components.com/)
- [The styled-components Happy Path](https://www.joshwcomeau.com/css/styled-components/) by Josh Comeau. A blog post on a personal take of best practices for using styled-components
- [Demystifying styled-components](https://www.joshwcomeau.com/react/demystifying-styled-components/) by Josh Comeau. An "under the hood" look at how styled-components work.
- [JavaScript Tagged Templates](https://wesbos.com/tagged-template-literals) by Wes Bos. A post about tagged template literals, the ES6 feature that drives styled-components syntax.