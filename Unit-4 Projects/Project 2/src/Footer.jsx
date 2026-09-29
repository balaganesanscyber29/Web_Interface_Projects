import React from 'react';
import { myDetails } from './portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {myDetails.name}. Simple Student Portfolio.</p>
      </div>
    </footer>
  );
}
