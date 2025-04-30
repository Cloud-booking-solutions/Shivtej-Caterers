
import React from 'react';
import { Phone } from 'lucide-react';

const CallNowButton = () => {
  return (
    <a 
      href="tel:+12345678900" 
      className="call-button"
      aria-label="Call now"
    >
      <Phone className="h-6 w-6" />
      <span className="ml-2 hidden md:inline">Call Now</span>
    </a>
  );
};

export default CallNowButton;
