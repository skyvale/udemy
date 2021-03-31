import React from 'react';
import styled from 'styled-components';
import './Cockpit.css';

// uses third party library called 'styled components' which is an alternative to CSS modules
// you can use ${} to create dynamic styles with turnery conditions
const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 2px solid #ccc;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }
`;

const cockpit = (props) => {

    const classes = [];
    if (props.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return(
        <div className='Cockpit'>
            <h1>I'm a React app.</h1>
            <p className={classes.join(' ')} >This is really working!</p>

            <button className='button'> Random Button</button>

            <StyledButton alt={props.showPersons} onClick={props.clicked}>
                Toggle People
            </StyledButton>    

            {/* an alternative way to add an argument to switchName function using an anonymous function, but it is less efficient 
            <button onClick={() => this.switchNameHandler('Max the Second')}>Switch Name?</button>
            */}
            
        </div>
    );
};

export default cockpit;