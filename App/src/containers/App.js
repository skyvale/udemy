import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// CONTAINERS manage the state and manipulate the state!

class App extends Component {

  // state only works in class-based components that extend Component
  // if the state is changed, the DOM will re-render
  state = {
    persons: [
      {id: 'asdsf', name: 'Max', age: 28},
      {id: 'qweqwe', name: 'Manu', age: 29},
      {id: 'zxczxc', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other values',
    showPersons: false
  }


  /*
    This handler will change Manu's name when the use types in the input box
      1. First you have to set the state to the target's value
      2. Then you have to add this handler to the jsx element (Manu, in this case)
      3. Finally, in the Person component, you add the onChange event to the input and use props to attach
        this handler to the input.
  */
  nameChangedHandler = (event, id) => {

    // .findIndex is part of javascript
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // remember to use a spread operator to avoid altering the original data
    const person = {
      ...this.state.persons[personIndex]
    };
    
    // note, the persons used here is the COPY of persons 
    // also note that the TARGET is the input that you typed
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // update the persons array with the copy of persons array that we made
    this.setState({persons : persons})
  } 

  // deletes person when clicked on
  deletePersonHandler = (personIndex) => {
    // create a copy of persons array before changing data by using ... <- spread operator
    // this changes the data immutably
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  

  // display the div that holds the Persons
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // =====================================================================


  // *note* .THIS refers to the App function
  render() {

    // CONDITIONAL JSX
    // whenever the page renders, checks the state and decides whether or not to render jsx
    // if showPersons is true, it will render
    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />

        // make sure when using .map to include a unique key-- dont use the index since the index' of a list can change    
        /*
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id} >
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ ErrorBoundary>
          } )}   
        </div> 
        */
      );

    }


    // ============================================================

    return (
      <div className="App">

        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />

        {persons}
   
      </div>
    ); 
  }
}

export default App;
