import React from 'react';
import { useState } from 'react';
import InputField from './components/InputField';
import Todolist from './components/Todolist';

interface todos{
  id:number,
  todo:string,
  isDone:boolean,

}

const App:React.FC = () => {
  const [todo,setTodo] = useState<string>("");
  const [todos,setTodos] = useState<todos[]>([]);

  const handleAdd = () =>{
    if (todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("");
    }
  }

  return (
    <div className="">
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Todolist todos={todos} />
    </div>
  );
}

export default App;
