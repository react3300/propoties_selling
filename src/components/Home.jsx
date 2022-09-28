import { Carousel,Row,Col } from 'antd';
import '../assets/scss/App.scss';
import {Link} from "react-router-dom";
import {PrimaryButton} from './ButtonControl/ButtonControl'

const Home = () => {
  
  const car1 = () => {
    console.log("CAR1")
  }
  const car2 = () => {
    console.log("CAR2")
  }
  
  return (
    <>
     <Carousel>
    <div className="contentStyle1">
      <h1 className='main-desc'>BMW</h1>
      <h3 className='small-desc'>Know the best price in your city</h3>
      
      
      <PrimaryButton onClick={car1} children='Book A Test Drive Now' />
      
    </div>
    <div className="contentStyle2">
    <h1 className='main-desc'>AUDI</h1>
    <h3 className='small-desc'>Know the best price in your city</h3>
    <PrimaryButton onClick={car2} children='Book A Test Drive Now' />
    </div>
    
  </Carousel>
  <Row>
    <Link to="/car-details" className="go-with"><Col xs={2} sm={4} md={6} lg={8} xl={10}>
      I will go with BMW
    </Col>
    </Link>
    <Col >
    </Col>
    <Link className="go-with">
    <Col  xs={2} sm={4} md={6} lg={8} xl={10}>
      I will go with AUDI
    </Col>
    </Link>
  </Row>
    </>
  )
}

export default Home
