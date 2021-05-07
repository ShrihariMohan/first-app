import React from 'react';
import reactDom from 'react-dom';

function Firstcomponent() {
  return <h1> This is my frist Component</h1>
}
const Secondcomponent = () => {
  return React.createElement('h1' , {} , 'Hello world this is a second component');
}

function Thirdcomponent () {
  return (<div> 
    <h1>
      Hello parent = div 
    </h1>
  </div>)
}

const Fourthcomponent = () => {
  return React.createElement('div' , {} , React.createElement('h1' , {} , 'Hello fourth component'))
}
reactDom.render(<Fourthcomponent/>,document.getElementById('root'));
