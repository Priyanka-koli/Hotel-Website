import React from 'react';
import image from './ht.jpg';
import Rooms from './rooms';
import Cards from './ourhotels';
import Footer from './Footer';
import './home.css';
import './ourhotels.css'
{ /*import image1 from './Mumbai.jpg';
import image2 from './Rooms_bed.jpg';
import image3 from './Rooms_double.jpg';
import CardItems from './cardItems'; */}


function Home(){
    return (<div>
    <div><h2>WELCOME TO THE GRAND HOTEL</h2></div>
    <div className="h-container">
    <img className="image" src={image} alt="hello"/>
    </div>
     <div><Cards  /> </div> 
     <div><Rooms  /> </div>
    

      {/*
    <div className='cards'>
      <h1>Check out our Some of the Locations ! </h1>
      <p><center>For more location details plese visit Our Hotels in navigation</center></p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src={image1}
              text='Visit Mumbais GRAND hotel'
              label='Visit Here'
              path='/OurHotels_Mumbai'
              
            />
            <CardItems
              src={image1}
              text='Visit Delhi GRAND hotel'
              label='Visit Here'
              path='/OurHotels_Delhi'
            />
            </ul>
            </div>
        </div>
    </div>
    <div className='cards'>
      <h1>Check out our Some of the Rooms here ! </h1>
      <p><center>For more rooms details plese visit Our Hotels in navigation</center></p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src={image2}
              text='SINGLE BED ROOMS'
              label='Visit Here'
              path='/OurHotels_Mumbai'
              
            />
            <CardItems
              src={image3}
              text='DOUBLE BED ROOMS'
              label='Visit Here'
              path='/OurHotels_Delhi'
            />
            </ul>
            </div>
        </div>
    </div> */}
    </div>
    );
}
export default Home;

