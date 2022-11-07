import React from 'react';

interface props {
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  handleAdd: ()=>void
}

const InputField:React.FC<props> = ({todo,setTodo,handleAdd}) => {
  console.log("todos",todo)
  return (
    <div className='flex'>
      <input className='w-[600px] h-[30px] rounded-lg border-gray-400 focus:border-none border-2 pl-2' placeholder='Enter here' value={todo} onChange={(e)=>setTodo(e.target.value)} />
      <button className='w-[60px] h-[30px] bg-red-400 rounded-lg' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default InputField;