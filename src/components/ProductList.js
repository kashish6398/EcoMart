import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductList.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [expandedProduct, setExpandedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleShowDetails = (product) => {
    console.log('Product clicked:', product); 
    setExpandedProduct(product);
  };

  const handleCloseDetails = () => {
    setExpandedProduct(null);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    console.log('Add to cart button clicked'); 
    if (expandedProduct) {
      console.log('Add to cart:', expandedProduct);
      alert('Added to cart: ' + expandedProduct.title);
    } else {
      alert('No product selected');
    }
  };

  const handleBuyNow = (e) => {
    e.stopPropagation(); 
    console.log('Buy now button clicked'); 
    if (expandedProduct) {
      console.log('Buy now:', expandedProduct);
      alert('Buying now: ' + expandedProduct.title);
    } else {
      alert('No product selected');
    }
  };

  return (
    <Container fluid className="py-5">
      <Row>
        {products.map(product => (
          <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
            <Card className="shadow-sm border-light" onClick={() => handleShowDetails(product)}>
              <Card.Img 
                variant="top" 
                src={product.image} 
                alt={product.title} 
                className="product-image"
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleShowDetails(product);
                }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="font-weight-bold">${product.price.toFixed(2)}</Card.Text>
                <Button 
                  variant="primary"
                  className='action-button'
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleAddToCart(e);
                  }}
                >
                  Add to Cart
                </Button>
                <Button 
                  variant="success"
                  className="ml-2 action-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBuyNow(e);
                  }}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {expandedProduct && (
        <Modal show={true} onHide={handleCloseDetails} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{expandedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={expandedProduct.image}
              alt={expandedProduct.title}
              className="img-fluid mb-3 product-image-large"
            />
            <p><strong>Description:</strong> {expandedProduct.description}</p>
            <p><strong>Price:</strong> ${expandedProduct.price.toFixed(2)}</p>
            <Button variant="primary" className="action-button" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="success" className="action-button ml-2" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default ProductList;
