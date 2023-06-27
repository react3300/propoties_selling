import { Carousel } from 'antd'
import React from 'react'
import { AUDI_R8 } from '../utils/ImagePath';

const Home = () => {

    const contentStyle = {
        height: '460px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <Carousel autoplay>
            <div>  
                <img
                    src={AUDI_R8}
                    alt="AUDI_R8"
                    className="100%"
                />
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )
}

export default Home