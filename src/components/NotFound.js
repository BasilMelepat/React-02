import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container mt-4 text-center">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}

export default NotFound;