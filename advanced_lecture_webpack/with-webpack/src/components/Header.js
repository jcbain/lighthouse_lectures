import React from 'react';

// const Header = (props) => {
//   const {links, ...rest} = props;
//   const clickLinks = links.map((link, i) => {
//     return React.createElement('a', {key: i, href: link.path}, link.name)
//   })

//   return React.createElement('header', {...rest}, 
//     React.createElement('h2', null, "Cool Clarissa's Calculated Counter"),
//     React.createElement('nav', null, ...clickLinks) 
//   )
// }

const Header = (props) => {
  const {links, ...rest} = props;
  const clickLinks = links.map((link, i) => {
    return <a key={i} href={link.path}>{link.name}</a> 
  })

  return (
    <header>
      <h2>Cool Clarissa's Calculated Counter</h2>
      <nav>
        {clickLinks}
      </nav>
    </header>
  )
}

export default Header;