import React from 'react';
import Person from './Person/Person';

// this component creates a list of the Person components

// in es6 you CAN optionally omit the return statement
const persons = (props) => ( props.persons.map( (person, index) => {
        return <Person
            click={() => props.clicked(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => props.changed(event, person.id)} />
        } )
);

export default persons;