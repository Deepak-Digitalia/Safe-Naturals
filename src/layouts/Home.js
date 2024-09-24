import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import hmeIcon1 from '../img/hme-icon-1.png';
import hmeIcon2 from '../img/hme-icon-2.png';
import caticon1 from '../img/cat-1.png';
import caticon2 from '../img/cat-2.png';
import caticon3 from '../img/cat-3.png';
import caticon4 from '../img/cat-4.png';
import Spldealimg1 from '../img/spl-crd-1.png'
import Spldealimg2 from '../img/spl-crd-2.png'
import Spldealimg3 from '../img/spl-crd-3.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel.min.js';
import './home.css'
import Arror_left from '../img/left.png';
import Arror_right from '../img/right.png';




const carouselOptions = {
  loop: true,
  margin: 10,
  autoplay: true, // Enable auto-play
  autoplayTimeout: 3000, // Time in milliseconds (3 seconds)
  autoplayHoverPause: true, // Pause on hover
  navText: [
    `<img src="${Arror_left}" alt="Previous" />`,
    `<img src="${Arror_right}" alt="Next" />`
  ],
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4
    }
    
  }
};

const cards = [
  { id: 1, discount: '10% Off', image: Spldealimg1, title: 'Apple Kashmir 250 gram', description: 'Natural', originalPrice: '₹200.00', salePrice: '₹150.00' },
  { id: 2, discount: '10% Off', image: Spldealimg2, title: 'Apple Kashmir 250 gram', description: 'Natural', originalPrice: '₹200.00', salePrice: '₹150.00' },
  { id: 3, discount: '10% Off', image: Spldealimg3, title: 'Apple Kashmir 250 gram', description: 'Natural', originalPrice: '₹200.00', salePrice: '₹150.00' },
  { id: 4, discount: '10% Off', image: Spldealimg1, title: 'Apple Kashmir 250 gram', description: 'Natural', originalPrice: '₹200.00', salePrice: '₹150.00' },
  { id: 5, discount: '10% Off', image: Spldealimg2, title: 'Apple Kashmir 250 gram', description: 'Natural', originalPrice: '₹200.00', salePrice: '₹150.00' },
  { id: 6, discount: '10% Off', image: Spldealimg3, title: 'Apple Kashmir 250 gram', description: 'Natural', originalPrice: '₹200.00', salePrice: '₹150.00' },
  { id: 7, discount: '10% Off', image: Spldealimg1, title: 'Apple Kashmir 250 gram', description: 'Natural', originalPrice: '₹200.00', salePrice: '₹150.00' },
  { id: 8, discount: '10% Off', image: Spldealimg2, title: 'Apple Kashmir 250 gram', description: 'Natural', originalPrice: '₹200.00', salePrice: '₹150.00' },
  // Add more cards if needed
];


const CarouselCard = ({ discount, image, title, description, originalPrice, salePrice }) => (
  <div className='spl-crd'>
    <span>{discount}</span>
    <img src={image} alt='product' />
    <p>{title}</p>
    <p>{description}</p>
    <div className='d-flex justify-content-start pricing_wrapper'>
      <strike>{originalPrice}</strike>
      <div>{salePrice}</div>
    </div>
    <button>Add To Cart</button>
  </div>
);

// Banner content 
 const HomePage = () => {
    return (
        <div>
        <section className='ban-sec' >
    
            <Container fluid className='ban-con'>
            <Row>
            <Col xs='6'>
         <div className='shop'>Shop with </div>
         <h1 className='text-white ban-head'>Safe Naturals</h1>
         <div className='ban-txt'>with </div>
         <span>35% OFF </span>
         </Col>
         <Col xs='6'>

         </Col>
        </Row>

      
         </Container>
      
        </section>
{/* icon section starts  */}
<section>
  <Container>
  <Row className='justify-content-around bor-row '>
  <div className='deals-wrapper' >
   <Col xs={12} lg={5} md={6}>
 
          <div className='deals-crd'>
          
            <p>Today Deals</p>
            <img className='img-fluid ' src={hmeIcon1} alt="icon" />
          </div>

        </Col>
        <Col className='mt-3 mt-md-0' xs={12} lg={5} md={6} >
 
          <div className='deals-crd'>
            <p>Wishlist</p>
            <img className='img-fluid' src={hmeIcon2} alt="icon" />
          </div>
        </Col>
        </div>
        </Row>
  </Container>
</section>

{/* category section starts  */}
    <section className='cat-sec'>
      <Container>
      <div className='cat-heading-por'>
        <h2>Category</h2>
        <p>Browse all Available Categories</p>
        </div>
        <Row>
          <Col className='mt-3 mt-xl-0' lg={6} xl={3}  md={6} xs={12}  >
            <div className='cat-crd'>
         <img src={caticon1}  alt='icon' />
          <h5>Fruits &
          Vegetables</h5>
          <p>Upto 30% OFF</p>

                     </div>
          </Col>
          <Col  className='mt-3 mt-xl-0' lg={6} xl={3}  md={6} xs={12}   >
          <div className='cat-crd'>
         <img src={caticon2}  alt='icon' />
          <h5>Dry Fruits &
          Snaks</h5>
          <p>Upto 30% OFF</p>

                     </div>
          </Col>
          <Col className='mt-3 mt-xl-0' lg={6} xl={3}  md={6} xs={12}  >
          <div className='cat-crd'>
         <img src={caticon3}  alt='icon' />
          <h5>Meats Fish &
          Eggs</h5>
          <p>Upto 30% OFF</p>

                     </div>
          </Col>
          <Col  className='mt-3 mt-xl-0' lg={6} xl={3}  md={6} xs={12}  >
          <div className='cat-crd'>
         <img src={caticon4}  alt='icon' />
          <h5>Fruits &
          Vegetables</h5>
          <p>Upto 30% OFF</p>

                     </div>
          </Col>
        </Row>
      </Container>
    </section>


    {/* !!!!! special deals starts !!!!!!! */}
    <section className='spl-deal-sec'>
      <Container>
      <div className='text-white text-center'>
        <h2 className='' >Special Deals </h2>
      </div>
    
      {/* OwlCarousel section */}
      <OwlCarousel className='owl-theme owl_car' {...carouselOptions}>
            {cards.map(card => (
              <div key={card.id} className='item'>
                <CarouselCard
                  discount={card.discount}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  originalPrice={card.originalPrice}
                  salePrice={card.salePrice}
                />
              </div>
            ))}
          </OwlCarousel>
      </Container>
    </section>

    {/* our products  */}
    <section className='products_sec' >
      <Container>
      <div className='text-center mt-5'>
        <h2>Our Products</h2>
        <p>Browse all Available Products</p>
      </div>
        <Row className='mt-3'>
          <Col className='mt-3' lg={4} xl={3} md={6}>
        <div className='prt-crd'>
       <span>10% Off</span>
       <img className='' src={Spldealimg1}   />
       <p>Apple Kashmir 250 gram</p>
       <p>Natural</p>
       <div className='d-flex justify-content-start pricing_wrapper' >
       <strike>₹200.00</strike>
       <div>₹150.00</div>
       </div>
       <button>Add to Cart </button>
        </div>
          </Col>
          <Col className='mt-3' lg={4} xl={3} md={6}>
        <div className='prt-crd'>
       <span>10% Off</span>
       <img className='img-fluid ' src={Spldealimg1}   />
       <p>Apple Kashmir 250 gram</p>
       <p>Natural</p>
       <div className='d-flex justify-content-start pricing_wrapper' >
       <strike>₹200.00</strike>
       <div>₹150.00</div>
       </div>
       <button>Add to Cart </button>
        </div>
          </Col>
          <Col className='mt-3' lg={4} xl={3} md={6}>
        <div className='prt-crd'>
       <span>10% Off</span>
       <img className='img-fluid ' src={Spldealimg1}   />
       <p>Apple Kashmir 250 gram</p>
       <p>Natural</p>
       <div className='d-flex justify-content-start pricing_wrapper' >
       <strike>₹200.00</strike>
       <div>₹150.00</div>
       </div>
       <button>Add to Cart </button>
        </div>
          </Col>
          <Col className='mt-3' lg={4} xl={3} md={6}>
        <div className='prt-crd'>
       <span>10% Off</span>
       <img className='img-fluid ' src={Spldealimg1}   />
       <p>Apple Kashmir 250 gram</p>
       <p>Natural</p>
       <div className='d-flex justify-content-start pricing_wrapper' >
       <strike>₹200.00</strike>
       <div>₹150.00</div>
       </div>
       <button>Add to Cart </button>
        </div>
          </Col>
          <Col className='mt-3' lg={4} xl={3} md={6}>
        <div className='prt-crd'>
       <span>10% Off</span>
       <img className='img-fluid ' src={Spldealimg1}   />
       <p>Apple Kashmir 250 gram</p>
       <p>Natural</p>
       <div className='d-flex justify-content-start pricing_wrapper' >
       <strike>₹200.00</strike>
       <div>₹150.00</div>
       </div>
       <button>Add to Cart </button>
        </div>
          </Col>
          <Col  className='mt-3' lg={4} xl={3} md={6}>
        <div className='prt-crd'>
       <span>10% Off</span>
       <img className='img-fluid ' src={Spldealimg1}   />
       <p>Apple Kashmir 250 gram</p>
       <p>Natural</p>
       <div className='d-flex justify-content-start pricing_wrapper' >
       <strike>₹200.00</strike>
       <div>₹150.00</div>
       </div>
       <button>Add to Cart </button>
        </div>
          </Col>
          <Col className='mt-3' lg={4} xl={3} md={6}>
        <div className='prt-crd'>
       <span>10% Off</span>
       <img className='img-fluid ' src={Spldealimg1}   />
       <p>Apple Kashmir 250 gram</p>
       <p>Natural</p>
       <div className='d-flex justify-content-start pricing_wrapper' >
       <strike>₹200.00</strike>
       <div>₹150.00</div>
       </div>
       <button>Add to Cart </button>
        </div>
          </Col>
          <Col className='mt-3' lg={4} xl={3} md={6}>
        <div className='prt-crd'>
       <span>10% Off</span>
       <img className='img-fluid ' src={Spldealimg1}   />
       <p>Apple Kashmir 250 gram</p>
       <p>Natural</p>
       <div className='d-flex justify-content-start pricing_wrapper' >
       <strike>₹200.00</strike>
       <div>₹150.00</div>
       </div>
       <button>Add to Cart </button>
        </div>
          </Col>
        </Row>
      </Container>
    </section>

        </div>

    ) ;
 }

export default HomePage ;





