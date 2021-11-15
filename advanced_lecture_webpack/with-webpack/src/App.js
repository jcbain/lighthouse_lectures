import React from 'react';
import Header from './components/Header';
import CounterComponent from './components/CounterComponent';
import "./App.scss"; // line added during loader section

// const App = () => {
//   console.log('pizza time');
//   console.log('another pizza time');
//   const links = [
//     {path: '/', name: 'home'},
//     {path: '/buttons', name: 'buttons'}
//   ];
  
//   return React.createElement("div", 
//     {className: 'App'},
//     React.createElement(Header, {links}),
//     React.createElement(CounterComponent, null)
//   )
// };

const App = () => {
  const links = [
    {path: '/', name: 'home'},
    {path: '/buttons', name: 'buttons'}
  ];

  return (
    <div className="App">
      <Header links={links} />
      <CounterComponent />
    </div>
  )
}

export default App;