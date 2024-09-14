import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Blog.css'; 

const Blog = () => {
  return (
    <Container fluid className="blog-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="blog-title">Our Blog</h2>
          <p className="blog-subtitle">
            Stay updated with the latest trends, tips, and news in the world of e-commerce, product curation, and online shopping!
          </p>
          <div className="blog-content">
            <article className="blog-article">
              <h3>1. Top 10 Must-Have Gadgets for 2024</h3>
              <p>
                Explore the top gadgets that will revolutionize your lifestyle. From smart home devices to the latest tech innovations, we bring you the best picks for 2024.
              </p>
            </article>

            <article className="blog-article">
              <h3>2. Fashion Trends of the Season</h3>
              <p>
                Discover the hottest fashion trends of 2024, from eco-friendly clothing to bold streetwear styles that make a statement.
              </p>
            </article>

            <article className="blog-article">
              <h3>3. How to Shop Smart</h3>
              <p>
                Learn how to make the most of your shopping experience with tips on finding deals, comparing prices, and saving money.
              </p>
            </article>

            <article className="blog-article">
              <h3>4. Sustainable Shopping at EcoMart</h3>
              <p>
                At EcoMart, we're committed to sustainability. Discover how we're making a positive environmental impact through eco-friendly practices.
              </p>
            </article>

            <article className="blog-article">
              <h3>5. Customer Stories: EcoMart Success Stories</h3>
              <p>
                Read inspiring stories from our customers about how EcoMart has made their lives easier and better with our top-quality products.
              </p>
            </article>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
