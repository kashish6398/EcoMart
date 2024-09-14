import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BriefAbout.css'; 

import BannerImage from './banner.png';

const BriefAbout = () => {
  return (
    <div>
      <div className="banner">
        <img src={BannerImage} alt="E-Store Banner" className="img-fluid" />
        <div className="banner-text">
          <h1>Welcome to EcoMart!</h1>
          <p>Your one-stop shop for the best deals and high-quality products.</p>
        </div>
      </div>
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center mb-4">Discover Our Range</h2>
            <p className="text-center mb-4">
              Explore a wide range of high-quality products tailored to your needs. Enjoy a seamless shopping experience with the best deals on top brands and unique items.
            </p>
            <Row>
              <Col md={6} lg={4} className="mb-4">
                <Card className="shadow-sm border-light">
                  <Card.Body>
                    <Card.Title>Explore Our Collection</Card.Title>
                    <Card.Text>
                      Our Collection, From electronics to fashion, our diverse product range caters to all your needs. Browse through our extensive collection and find exactly what you're looking for.
                    </Card.Text>
                    <Button variant="primary" href="/ProductList">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Card className="shadow-sm border-light">
                  <Card.Body>
                    <Card.Title>Exceptional Quality</Card.Title>
                    <Card.Text>
                      We prioritize quality in every product we offer. Each item is carefully curated to ensure you receive the best, whether it’s for personal use or a gift for someone special.
                    </Card.Text>
                    <Button variant="primary" href="/Blog">Explore Blog</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <Card className="shadow-sm border-light">
                  <Card.Body>
                    <Card.Title>Customer Satisfaction</Card.Title>
                    <Card.Text>
                      Our commitment to customer satisfaction means you can shop with confidence. Enjoy easy returns, fast shipping, and exceptional customer service every time you shop with us.
                    </Card.Text>
                    <Button variant="primary" href="/contact-us">Contact Us</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BriefAbout;
