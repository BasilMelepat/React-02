import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';

function Root() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Container className="flex-grow-1 mt-4">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default Root;