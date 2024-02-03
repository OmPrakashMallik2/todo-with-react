import React, { useState } from 'react'
import './App.css'

function Todo() {

    return (
        <div className='todo'>

            <h1>Todo Web App</h1>

            <div className='main'>

                <div className='todo-input'>
                    <div className='todo-input-stuff'>
                        <lebel>Task</lebel>
                        <input type='text' placeholder='Enter your task' />
                    </div>
                    <div className='todo-input-stuff'>
                        <lebel>Description</lebel>
                        <input type='text' placeholder='Enter your task' />
                    </div>
                    <div className='todo-input-stuff'>
                        <button className='mainBtn'>Add</button>
                    </div>
                </div>


                <div className='btn-area'>
                    <button className='btn2'>Todo</button>
                    <button className='btn2'>Completed</button>
                </div>


                <div className='todo-list'>
                    <div className='todo-item'>
                        <h2>task1</h2>
                        <p>description </p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Todo
