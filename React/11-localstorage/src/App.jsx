import React from 'react'

const App = () => {


// it has four methods
// JSON.stringify
// JSON.parse
const user = {
  username:'prem',
  age:21,
  city:'Mathura'
}
localStorage.setItem('user',JSON.stringify(user))

const user = JSON.parse(localStorage.getItem('user'))

console.log(user)

  return (
    <div>App</div>
  )
}

export default App