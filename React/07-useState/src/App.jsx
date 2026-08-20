// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(12)
//   const [username, setUsername] = useState('prem')

//   function changeNum(){
//     setNum(30)
//     setUsername('Raaz')
//   }

//   return (
//     <div>
//       <h1>Value of num is {num} <br />value of user is {username}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App

// project
// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)

//   function increaseNum(){
//     setNum(num+1)
//   }

//     function decreaseNum(){
//     setNum(num-1)
//   }

//   function jumpby5(){
//     setNum(num+5)
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseNum}>increase</button>
//       <button onClick={decreaseNum}>decrease</button>
//       <button onClick={jumpby5}>jump by 5</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'Prem',age:21})

  const btnClicked =()=>{
    const newNum = {...num};
    console.log(newNum)
    newNum.user='Aman'
    newNum.age =23
    setNum(newNum)
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App