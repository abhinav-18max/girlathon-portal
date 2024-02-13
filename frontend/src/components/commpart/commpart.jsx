import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './commpart.css'

export default function CommPart(){
    return(<section id='SPONSERS' className='commSec' style={{ position: "relative", overflow: "hidden",display:'flex',justifyContent:'center' }}>
         <img
        style={{
          position: "absolute",
          height: "100%",
          opacity: ".6",
          width: "100%",
          zIndex: "2",
        }}
        src="images/backgroundAbstarct.png"
      />
      <div style={{ zIndex:'4',position:'absolute' }}>
      <Container  style={{ padding:'1rem'}}>
      <Row style={{paddingTop:'2rem',paddingLeft:'2rem',rowGap:'2rem'}}>
        <Col sm={12}><h1 style={{textAlign:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">Previous sponsers</h1></Col>
          <Col lg={6}  md={6}  style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
          <a href='https://fossunited.org/' target="_blank" className="card1">
          <img src='/images/fossunited.png' style={{ width:'100%' }}/>
  <div className="card__content">
 
  </div>
</a>

          </Col>
          <Col  lg={6}  md={6}   style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
          <a href='https://techgentsia.com/' target="_blank" className="card1">
          <img src='/images/techgentsia.png' style={{ width:'90%' }}/>
  <div className="card__content">
 
  </div>
</a>
          </Col>
          <Col  lg={6}  md={6}  style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
          <a href='https://techmaghi.com/' target="_blank" className="card1">
          <img src='/images/techmaghi.png' style={{ width:'100%' }}/>
  <div className="card__content">
 
  </div>
</a>
          </Col>
          <Col lg={6} md={6}  style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
          <a href='https://kalkitech.com/' target='_blank' className="card1">
          <img src='/images/kalikitech.png' style={{ width:'90%' }}/>
  <div className="card__content">
 
  </div>
</a>

          </Col>
        </Row>
      </Container>
      </div>
    </section>)
}