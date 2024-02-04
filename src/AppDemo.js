import React from 'react'

function AppDemo({persons}) {

    const img =  "https://i.pinimg.com/564x/3f/ed/04/3fed0423a3ec6b7befff7848ecdc8e18.jpg";

    const personList = persons.map(person =>
        <h1 key={person.id} > {person.id}. {person.name} : {person.age}</h1>
    )
    
    return (
        <div>
            <ul>{personList}</ul>
        </div>
    )
}

export default AppDemo

