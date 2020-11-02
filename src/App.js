import React from "react";
import ReactDOM from "react-dom";
import './ourhotels.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './home';
import Nav from './nav';
import Footer from './Footer';
import OurHotels from './ourhotels';
import Contact from './contact';
import Rooms from './rooms';
import Facilities from './facilities';
import AboutUs from './aboutus';
import OurHotels_Mumbai from './OurHotels_Mumbai';
import OurHotels_Delhi from './OurHotels_Delhi';
import OurHotels_Chennai from './OurHotels_Chennai';
import OurHotels_Banglore from './OurHotels_Banglore';

export default function App(){
  return(
    <Router>
      <div className="App">
      <div>   <Nav /></div>                                   {/*nav component*/}
       <Switch>
          <Route path="/" exact component={Home}/>  
          <Route path="/ourhotels"  component={OurHotels}/>  
          <Route path="/contact" component={Contact}/> 
          <Route path="/rooms" component={Rooms}/> 
          <Route path="/facilities" component={Facilities}/> 
          <Route path="/aboutus" component={AboutUs}/> 
          <Route path="/OurHotels_Mumbai" component={OurHotels_Mumbai}/> 
          <Route path="/OurHotels_Delhi" component={OurHotels_Delhi}/> 
          <Route path="/OurHotels_Chennai" component={OurHotels_Chennai}/> 
          <Route path="/OurHotels_Banglore" component={OurHotels_Banglore} /> 
     </Switch>
      </div>
      <div><Footer /> </div>
    </Router>
    
    
    );
}



   
  

