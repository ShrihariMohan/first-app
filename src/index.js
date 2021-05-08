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

const Fifth = () => {
  return (
    <React.Fragment>
      <div> First Block</div>
      <div> Second Block </div>
    </React.Fragment>
  )
}

const Sixth = () => {
  return (
    <>
      <div> First Block</div>
      <div> Second Block </div>
    </>
  )
}

// const ThisWillNotWork = () => {
//   return (
//     <div> First Block</div>
//     <div> Second block</div>
//   )
// }

// JSX Rules 
// Must always return a single element 
// <div> </div > and another block cannot be returned
// follow semantics for good readability
// Each html attr must need camelcase
// that is onclick => onClick
// and also className instead of class because there is difference between html and jsx
// Close every single element must 


const NestedElements = () => {
  return (
    <div>
      <NavBar />
      <Body />
      <Body/>
    </div>
  )
}

const NavBar = () => {
  return (
  <h1> this will be a Nav bar component</h1>
  )
}

const Body = () => {
  return (
  <h2> just to explain nested components this can be another component and
  this can help in re usability</h2>
  )
}
reactDom.render(<NestedElements/>,document.getElementById('root'));
