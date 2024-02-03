import React, { useState } from 'react'
import './App.css';

function App2() {

    const [count, setCount] = useState(0);

    function clickHere() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={clickHere}>Clicked {count} times</button>
        </div>
    )
}

export default App2
