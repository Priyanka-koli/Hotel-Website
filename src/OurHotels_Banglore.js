import React from 'react';
import img1 from './Banglore.jpg'
import HotelInfo from './hotelinfo';

export default function OurHotels_Banglore (){ 
    return (
        <div>
            <HotelInfo 
                    text1="BANGLORE's GRAND HOTEL"
                    alt="Banglore" 
                    src={img1}
                    text2="WELCOME HERE" 
                    text3="THE GRAND HOTEL,"
                    text4="NEAR PQR BUILDING "
                    text5= "XYZ MARG, BANGLORE- 916 786"
            />
        </div>
    );
   } 

   