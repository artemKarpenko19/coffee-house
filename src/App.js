import { Component } from 'react';
import './App.css';
import Main from './pages/main';
import OurCoffee from './pages/our-coffee';

class App extends Component {
 

  render () {

    return (<div>
          <Main/>
          <OurCoffee/>
        </div>
    ) 
  }
}

export default App;
