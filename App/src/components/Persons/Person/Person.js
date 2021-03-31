import React from 'react';
import styled from 'styled-components';
//import './Person.css';

// uses third party library called 'styled components' which is an alternative to CSS modules
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    } 
`;

// *note* the function should be named the same as the component, but lowercase

// PROPS are the attributes on the Person component being called in App.js
const person = (props) => {
    return (
        // <div className="Person">
        <StyledDiv>
            {/* note that props.CLICK and props.CHANGED refer to the attribute function of the parent in App.js! */}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>       
        </StyledDiv>
        // </div>
    )
};

export default person;