import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
 function Footer(){
      return (
        <div>
        <div className="footer_background">
            <div className="details_element">
                <p className="head">Emails:</p>
                <p className="p1">ABC@gmail.com</p>
                <p className="p1">XYZ@gmail.com</p>
                <p className="p1">PQR@gmail.com</p>
            </div>
            <div className="details_element1">
                <p className="head">Contact Numbers:</p>
                <p className="p1">+98989898</p>
                <p className="p1">+98565656</p>
                <p className="p1">+98525252</p>
                <p className="p1">+98515151</p>
            </div>
            <div className="nav-links1" >
            <ul className="nav-links2">
                <p className="head">Visit Here:</p>
                <Link className="link1" to="/"><li>HOME</li></Link>
                <Link className="link1" to="/ourhotels"><li>OUR HOTELS</li></Link>
                <Link className="link1" to="/rooms"><li>ROOMS</li></Link>
                <Link className="link1" to="/facilities"><li>FACILITIES</li></Link>
                <Link className="link1" to="/contact"><li>CONTACT US</li></Link>
                <Link className="link1" to="/aboutus"><li>ABOUT US</li></Link>
            </ul>
            </div>
            <div className="address">
            <p className="head">Address:</p>
                <p className="p1">Grand Hotel Resort</p> 
                <p className="p1">Mumbai Near ABC School,</p>
                <p className="p1">Pune-Mumbai Road,- 410301.</p>
            </div>
            </div>
       </div>
      );
    }
  
  
  export default Footer;
  /*<label className="label">Room Type: </label>
  <select className="select" multiple value={this.state.room} onChange={this.handleChange3} >
<option value="Simple">Simple</option>
                                <option value="Deluxe">Deluxe</option>
                            </select> */