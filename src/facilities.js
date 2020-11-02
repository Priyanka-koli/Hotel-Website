import React from 'react';
import './ourhotels.css';
import CardItems from './cardItems';
import image from './gamezone.jpg';
import image1 from './conferencerooms.jpg';
import image2 from './carparking.jpg';
import image3 from './garden.jpg';
import image4 from './internet.jpg';
import image5 from './roomservices.jpg';
import image6 from './restaurant.jpg';
import image7 from './swimmingpool.jpg';
export default function Facilities() {
  return (
    <div className='cards'>
      <h1>!Facilities At Grand Hotel!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
                <CardItems
                    src={image}
                    text='GAME ZONE'
                    label='Visit Here'
                    path='/OurHotels_Mumbai'
                />
                <CardItems
                    src={image1}
                    text='CONFERENCE ROOOMS'
                    label='Visit Here'
                    path='/OurHotels_Delhi'
                />
            </ul>
            <ul className='cards__items'>
                <CardItems
                    src={image2}
                    text='CAR PARKING'
                    label='Visit Here'
                    path='/OurHotels_Chennai'
                />
                <CardItems
                    src={image3}
                    text='GARDEN'
                    label='Visit Here'
                    path='/OurHotels_Banglore'
                />
            </ul>
            <ul className='cards__items'>
                <CardItems
                    src={image4}
                    text='INTERNET'
                    label='Visit Here'
                    path='/OurHotels_Mumbai'
                />
                <CardItems
                    src={image5}
                    text='ROOM SERVICES'
                    label='Visit Here'
                    path='/OurHotels_Delhi'
                />
            </ul>

            <ul className='cards__items'>
                <CardItems
                    src={image6}
                    text='RESTAURANTS'
                    label='Visit Here'
                    path='/OurHotels_Chennai'
                />
                <CardItems
                    src={image7}
                    text='SWIMMING POOL'
                    label='Visit Here'
                    path='/OurHotels_Banglore'
                />
            </ul>

        </div>
      </div>
    </div>
  );
}

