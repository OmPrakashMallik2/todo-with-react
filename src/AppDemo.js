import React, { useState } from 'react'

function AppDemo() {

    const [stuff, setStuff] = useState("Ek")

    return (
        <div className='p-5'>
            <div className='flex justify-around'>

                <button onClick={() => { setStuff("Ek") }}>One</button>
                <button onClick={() => { setStuff("Do") }}>Two</button>
                <button onClick={() => { setStuff("Teen") }}>Three</button>
            </div>
            <h1 className='text-5xl mt-10 font-bold text-center'>{stuff}</h1>
        </div>
    )
}

export default AppDemo


// const img = "https://i.pinimg.com/564x/3f/ed/04/3fed0423a3ec6b7befff7848ecdc8e18.jpg";