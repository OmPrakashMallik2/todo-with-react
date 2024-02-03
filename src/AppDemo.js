import React from 'react'

function AppDemo({persons}) {

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

