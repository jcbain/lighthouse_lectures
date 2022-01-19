import React from 'react';
import Header from './components/Header';
import CounterComponent from './components/CounterComponent';

const App = () => {
  console.log('pizza time');
  console.log('another pizza time');
  const links = [
    {path: '/', name: 'home'},
    {path: '/buttons', name: 'buttons'}
  ];
  
  return React.createElement("div", 
    {className: 'App'},
    React.createElement(Header, {links}),
    React.createElement(CounterComponent, null)
  )
};

export default App;