import React from 'react';
import {Link} from 'react-router-dom';
import './mystyle.css';

export default function Nav(){
    return(
        <nav className="nav">
            <ul className="nav-links">
                <Link className="link" to="/"><li>HOME</li></Link>
                <Link className="link" to="/ourhotels"><li>OUR HOTELS</li></Link>
                <Link className="link" to="/rooms"><li>ROOMS</li></Link>
                <Link className="link" to="/facilities"><li>FACILITIES</li></Link>
                <Link className="link" to="/contact"><li>CONTACT US</li></Link>
                <Link className="link" to="/aboutus"><li>ABOUT US</li></Link>
            </ul>
        </nav>
    );
}



     
