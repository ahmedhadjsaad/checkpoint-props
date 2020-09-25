import React, { Component } from 'react';
import './App.css';
import Profil from './Profil/components/Profil';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }
  render() { 
    let person={FullName:"Ahmed",Bio:"",Profession:"Ingénieur"}

    return ( <div>
      <Profil FullName={person.FullName} Bio={person.Bio} Profession={person.Profession} />
    </div> );
  }
}
 
export default App;