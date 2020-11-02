import React from "react";
import Home from "./home";
import CardItems from "./cardItems";
import image from './Rooms_bed.jpg';
import image1 from './Rooms_double.jpg';
import image2 from './Rooms_simple.jpg';
import image3 from './Rooms_Deluxe.jpg';
export default function Rooms(){ 
    return(<div>
        <div className='cards'>
      <h1>Check out the Rooms!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src={image}
              text='Single Bed Rooms here'
              label='Visit Here'
              path='/'
              
            />
            <CardItems
              src={image1}
              text='Double Bed Rooms here'
              label='Visit Here'
              path='/OurHotels_Delhi'
            />
            </ul>
            <ul className='cards__items'>
            <CardItems
              src={image2}
              text='Simple Rooms here'
              label='Visit Here'
              path='/OurHotels_Chennai'
            />
            <CardItems
              src={image3}
              text='Deluxe Rooms here'
              label='Visit Here'
              path='/OurHotels_Banglore'
            />
            
          </ul>
        </div>
      </div>
      </div>
      </div>);
}