import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('button is clicked');
  }

  
  return (
    <div>
      <h1>Hello, Sarthak!</h1>

  <button onDoubleClick={btnClicked}>change user</button> 
      <button onClick={() => {
        console.log('Button is clicked');
      }}>hii prem</button>
    </div>
  )
}

export default App