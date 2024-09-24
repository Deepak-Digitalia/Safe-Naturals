import React from 'react';
import './footer.css'
import Container  from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../img/fot-logo.png';
import locationicon from '../img/icon-1.png';
import phoneicon from '../img/icon-2.png';
import mailicon from '../img/icon-3.png';
import footermail from '../img/fot-mail.png';
import footerarrow from '../img/mail-arrow.png';
import socialmedia1 from '../img/soc-1.png';
import socialmedia2 from '../img/soc-2.png';
import socialmedia3 from '../img/soc-3.png';
import socialmedia4 from '../img/soc-4.png';

const footer = () => {
    return (
        <footer className="safe-footer">
            <Container>
            <div>
            <img 
    src={logo} 
    className='img footer_img' 
    alt='Logo' 
/>

             
            </div>
        <Row>
            <Col lg={3} >
                <p className='text-white' >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                <div className='d-flex justify-content-around' >
                <img className='location_icon' src={locationicon} alt='location'  />
                <p className='text-white' >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loever since the 1500s,</p>
                </div>
                <div className='d-flex  mt-4' >
                <img className='location_icon' src={phoneicon} alt='location'  />
                <p className='text-white' > +12345 6789
            </p>
                </div>
                <div className='d-flex mt-4 ' >
                <img className='location_icon' src={mailicon} alt='location'  />
                <p className='text-white' > example@gmail.com
            </p>
                </div>
                
            </Col>
            <Col  lg={9}  >
         
             <Row>
             <Col className='mt-3 mt-xl-0' md={6} lg={5} xl={2} >
             <div className='fot_link' >
              <h3>Links</h3>
              <li>Product page</li>
              <li>about page</li>
              <li>  Category</li>
              <li>Contact us</li>
              <li>Log in</li>
             </div>
             </Col>
             <Col className='mt-3 mt-xl-0' md={6} lg={5} xl={3} >
             <div className='our_policy' >
              <h3>Our policy</h3>
              <li>Privacy policy</li>
              <li>Terms and condition</li>
              <li>  Return policy</li>
              <li>Shipping policy</li>
        
             </div>
             </Col>
             <Col className='mt-3 mt-xl-0' md={6} lg={5} xl={3} >
             <div className='custom_care' >
              <h3>Customer care</h3>
              <li>Trustpilot Reviews</li>
              <li>Secure Checkout</li>
              <li>  Data Protection</li>
              <li>100% Authentic Products</li>
        
             </div>
             </Col>
             <Col className='mt-3 mt-xl-0' md={6} lg={5} xl={4}>
             <div className='news_letter'>
    <h3>Newsletter Signup</h3>
    <div className='input-container'>
        <img src={footermail} alt="Mail Icon" className='img-fluid fot_inp_mail' />
        <input placeholder='Enter Your Email id' />
        <button className='submit-button'>
            <img src={footerarrow} alt="Arrow Icon" className='img-fluid fot_mail_arrow' />
        </button>
       
    </div>
    <div className='d-flex justify-content-evenly mt-4' >
          <img  src={socialmedia4} alt='social-media icon' className='img-fluid '  ></img>
          <img  src={socialmedia2} alt='social-media icon' className='img-fluid '  ></img>
          <img  src={socialmedia3} alt='social-media icon' className='img-fluid '  ></img>
          <img  src={socialmedia1} alt='social-media icon' className='img-fluid '  ></img>
        </div>
             </div>
              </Col>
             </Row>
            </Col>
        </Row>
            </Container>
        </footer>
    );
    
}
export default footer;