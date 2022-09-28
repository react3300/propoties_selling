import React,{useState,useEffect} from 'react'
import {Row,Col,Select,Form,Image } from 'antd';
import carData from '../services/carData'
import { useStatesContext } from '../utils/AppStates';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
const { Option } = Select

const CarDetails = () => {
    const dispatch = useDispatch();
    const {carDetailing} = bindActionCreators(actionCreators,dispatch)
    const  {allStates}  = useStatesContext();
    const [ form ] = Form.useForm();
    const carDets = useSelector(state=>state.carNameForDetails)
    
    useEffect(()=>{
        allStates?.setVechileData(carData)
    })
    const handleCarDetails = (e) => {
        carDetailing(e)
        allStates?.setCarDataWithImage(allStates?.vechileData.filter((carName)=>carName?.name===e));
    }
  return (
    <>
  <Row>
    <Col className="car-details-design" xs={2} sm={4} md={6} lg={8} xl={10}>
    <Form form={form}>
        <Form.Item
        name="carDet"
        >
        <Select
            placeholder="Select Your Car"
            onChange={handleCarDetails}
        >
        {
            allStates?.vechileData?.map((car,index)=>{
                return <Option key={index} style={{fontFamily:'fantasy'}} value={car?.name}>{car?.name}</Option>
            })
        }
            
        </Select>
        </Form.Item>
    
</Form>
    </Col>
    
    <Col >
    </Col>
    <Col  xs={2} sm={4} md={6} lg={8} xl={10}>
        <span>
        {
            carDets!==0 &&
            carDets?.map((item,index)=>{
            return ( 
            <>
            <Image src={item?.image} preview={false} />
            {
                item?.location_wise_price?.map((item2,index2)=>{
                    return <p key={item2?.id}><b>City : </b>{item2?.city} <b>Price :</b>{item2?.price}</p>

                })
            }

            
            </>
            )

            })
        }
        </span>
    
    {/* <span>{carDets}</span> */}
    </Col>
    
  </Row>
  
 </>
  )
}

export default CarDetails
