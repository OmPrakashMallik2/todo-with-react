import React, { useState } from 'react'
import './App.css'
import { AiOutlineDelete } from "react-icons/ai"
import { FaCheck } from "react-icons/fa";

function Todo() {

    // const [isCompleteScreen, setIsCompleteScreen] = useState(false);
    const [allToDo, setAllToDo] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');


    const todoAdd = () => {
        let newTodoItem = {
            title: newTitle,
            description: newDesc
        }
        let updatedTodo = [...allToDo];
        updatedTodo.push(newTodoItem);
        setAllToDo(updatedTodo);
    }


    return (
        <div className='todo'>

            <h1>Todo Web App</h1>

            <div className='main'>

                <div className='todo-input'>
                    <div className='todo-input-stuff'>
                        <lebel>Task</lebel>
                        <input className='text-black font-bold' type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='Enter your task' />
                    </div>
                    <div className='todo-input-stuff'>
                        <lebel>Description</lebel>
                        <input className='text-black font-bold' type='text' value={newDesc} onChange={(e) => setNewDesc(e.target.value)} placeholder='Enter your task' />
                    </div>
                    <div className='todo-input-stuff'>
                        <button className='mainBtn bg-green-500' onClick={todoAdd}>Add</button>
                    </div>
                </div>


                <div className='btn-area mb-4'>
                    <button className='btn2 bg-green-500'>Todo</button>
                    <button className='btn2 bg-slate-950'>Completed</button>
                </div>


                <div className='flex flex-col justify-between'>
                    {allToDo.map((item, index) => {
                        return (
                            <div key={index} className='bg-black m-1 flex justify-between'>

                                <div className='flex flex-col  p-6 pb-2.5 py-2.5 mb-2.5 justify-between'>
                                    <h3 className='text-green-500 text-2xl font-bold m-0'>{item.title}</h3>
                                    <p className='text-base text-gray-500 font-medium mt-2 '>{item.description}</p>
                                </div>

                                <div className='flex items-center p-6 pb-2.5 py-2.5 mb-2.5 justify-between'>
                                    <AiOutlineDelete className='text-3xl cursor-pointer text-red-400 hover:text-red-600' />
                                    <FaCheck className='ml-2.5 text-2xl cursor-pointer text-green-500 hover:text-green-300' />
                                </div>
                            </div>
                        )
                    })}
                </div>




            </div>
        </div>
    )
}

export default Todo
