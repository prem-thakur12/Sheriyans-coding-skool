import { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])


  const submitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task];
    
    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote=(idx)=>{
    const copyTask = [...task]

    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

       {/* PEHLA INPUT FOR HEADING */}
          <input
        type='text'
        placeholder='Enter Notes Heading'
        className='px-5 py-2 w-full font-medium border-2 outline-none rounded '
        value = {title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

       {/* DETAILED WALA INPUT */}
        <textarea
        type='text'
        className='px-5 h-32 w-full py-2 font-medium border-2 outline-none rounded'
        placeholder='Write Details Here'
        value ={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}

        />

        <button 
        className='bg-white
        font-medium
        text-black
        cursor-pointer
        active:bg-gray-400
        w-full
        px-5 py-2
        rounded'>Add Notes</button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
       <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
       {task.map(function(elem, idx){

        return <div key={idx} className=" relative h-53 w-40 bg-cover rounded-xl text-black px-4 py-8 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] ">
          <h2 onClick={()=>{
            deleteNote(idx)
          }} className=' cursor-pointer active:scale-95 absolute top-6 right-0 bg-red-500 rounded-full text-xs'><X /></h2>
          <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
          <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
           </div>
       })}
       
       </div>
      </div>
    </div>
  )
}

export default App