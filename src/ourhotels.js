import React from 'react';
import './ourhotels.css';
import CardItems from './cardItems';
import image from './Mumbai.jpg';
import image1 from './Delhi.jpg';
import image2 from './Chennai.jpg';
import image3 from './Banglore.jpg';
function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the Locations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src={image}
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
            <ul className='cards__items'>
            <CardItems
              src={image2}
              text='Visit Banglore GRAND hotel'
              label='Visit Here'
              path='/OurHotels_Banglore'
            />
            <CardItems
              src={image3}
              text='Visit Chennai GRAND hotel'
              label='Visit Here'
              path='/OurHotels_Chennai'
            />
            
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;