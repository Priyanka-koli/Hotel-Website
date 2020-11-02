import React from 'react';
import './hotelinfo.css';
function HotelInfo(props){
    return(
        <div>
            <div className="headingss">
                <center>{props.text1}</center>
            </div>
            <div>
                <center><img  className="imgs" alt={props.alt} src={props.src} /></center>
            </div>
            <div className="info">
                <center>{props.text2}</center>
            </div>
            <div className="adrs">
                <center>{props.text3} 
                 {props.text4}   
                 {props.text5} </center>
            </div>
            
        </div>
    );

}

export default HotelInfo;