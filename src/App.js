
import './App.css';
import Main from './pages/main';
import OurCoffee from './pages/our-coffee';
import NavMenu from './components/header/nav-menu';
import Footer from './components/footer/footer';
import AboutIt from './pages/about-it';
import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';


class App extends Component  {

     constructor (props){
      super(props);
      this.state = {
        cardsData : [
          {name:"AROMISTICO Coffee 1 kg",
          price: "6.99$",  
          country: "Brasil" , 
          src: require('./images/card-img.png'), 
          alt: "altImg1", 
          id: '1', 
          descr: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." , 
          cardImg: require('./images/item-img.jpg')},
  
          {name:"AROMISTICO Coffee 2 kg",
           price: "7.99$",  
           country: "Keniya" , 
           src: require('./images/card-img.png'), 
           alt: "altImg1", id: '2', 
           descr: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
           cardImg: require('./images/item-img.jpg') },
          {name:"TAROMISTICO Coffee 1 kg", 
          price: "6.99$",  
          country: "Columbia" , 
          src: require('./images/card-img.png'), 
          alt: "altImg1", 
          id: '3', 
          descr: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
          cardImg: require('./images/item-img.jpg') },
          {name:"AROMISTICO Coffee 3 kg", 
          price: "13.69$",  
          country: "Brasil" , 
          src: require('./images/card-img.png'), 
          alt: "altImg1",
          id: '4', 
          descr: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
          cardImg: require('./images/item-img.jpg') },
          {name:"AROMISTICO Coffee 4 kg", 
          price: "6.99$",  
          country: "Brasil" , 
          src: require('./images/card-img.png'), 
          alt: "altImg1", 
          id: '5', 
          descr: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
          cardImg: require('./images/item-img.jpg')},
          {name:"BAROMISTICO Coffee 1 kg", 
          price: "6.99$",  
          country: "Brasil" , 
          src: require('./images/card-img.png'), 
          alt: "altImg1",
          id: '6', 
          descr: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
          cardImg: require('./images/item-img.jpg') },
        ],
        actual: '',
  
       } 
     }

     onCardSelect = (value) => {
      console.log(value);
      this.setState({actual: value});

     }
    

    render () {
      return (
        <div>
          <NavMenu/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/our-coffee' element={<OurCoffee cardsData={this.state.cardsData} onCardSelect={this.onCardSelect}/>}/>
            <Route path='/about-it/:id' element={<AboutIt cardsData={this.state.cardsData} actualCard={this.state.actual}/>}/>
          </Routes>
          <Footer/>  
        </div>
      ) 
    }
    

}

export default App;
