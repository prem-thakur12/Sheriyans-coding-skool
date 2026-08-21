// import React from 'react'
import axios from 'axios'

const App = () => {

  // two methods of api
  //fetch and axios

  //1.fetch
  //  async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  //
  // const getData = async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const data = await response.json()
  //   console.log(data)
  // }

  //2.Axios
  const getData = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    
    console.log(data)
  }
  return (
    <div>
      <button onClick={getData}>Get data</button>
    </div>
  )
}

export default App