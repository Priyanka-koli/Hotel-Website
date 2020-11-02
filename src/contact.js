import React from 'react'; 
import contacti from './ht.jpg';
import './contact.css';
import Form from './Form.js';
  
function Contact (){ 
 return (
    <div className="contact_container">
         <h1>Contact Grand Hotel, Mumbai</h1>
         <div className="contact">
            <img className="contacti" src={contacti} alt="hello"/>
                <div className="details_element2">
                    <p className="headings">Address:</p>
                    <p className="p2">Grand Hotel Resort</p> 
                    <p className="p2">Mumbai Near ABC School,</p>
                    <p className="p2"> Pune-Mumbai Road,- 410301.</p>
                    <p className="headings">Emails:</p>
                    <p className="p2">ABC@gmail.com <b>|</b> XYZ@gmail.com <b>|</b> PQR@gmail.com</p>
                    <p className="headings">Contact Numbers:</p>
                    <p className="p2">+98989895<b>|</b>+98565656<b>|</b>+98525256<b>|</b>+98515151</p>
                 </div>
         </div> 
         <div>
             <center><h2 className="h1">!!You can also reach out to us!!</h2></center>
             <div className="form_element1"><Form /></div>
         </div>
    </div>
 );
} 
 
export default Contact; 