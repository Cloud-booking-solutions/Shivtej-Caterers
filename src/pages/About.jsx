
import React from 'react';

const About = () => {
  return (
    <div className="bg-page bg-about container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Shivtej Caterers</h1>
        
        <div className="mb-10 rounded-lg overflow-hidden">
          <img 
            src="https://www.vivakebabsandgrill.com.au/ressources/images/46c0c3577192.jpg" 
            alt="Shivtej Caterers Team" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-spice-red mb-4">Our Story</h2>
          <p className="mb-6">
            Shivtej Caterers was founded in 2010 by Chef Rajesh Kumar, who brought his passion for authentic Indian cuisine from the vibrant streets of Mumbai to create a catering service that celebrates the rich and diverse culinary heritage of India.
          </p>
          
          <p className="mb-6">
            What began as a small family business has now grown into one of the most respected Indian catering services in the region. Our journey has been fueled by our commitment to authenticity, quality, and the joy of sharing traditional Indian flavors with our community.
          </p>
          
          <h2 className="text-2xl font-semibold text-spice-red mb-4 mt-10">Our Philosophy</h2>
          <p className="mb-6">
            At Shivtej Caterers, we believe that food is more than just sustenance—it's an experience that brings people together. Every dish we prepare tells a story of cultural heritage, family traditions, and culinary craftsmanship passed down through generations.
          </p>
          
          <p className="mb-6">
            We are committed to using fresh, high-quality ingredients and authentic spices imported directly from various regions of India. Our chefs meticulously prepare each dish, balancing traditional techniques with modern presentations to create an unforgettable dining experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div className="bg-secondary/50 p-6 rounded-lg text-center">
              <div className="text-spice-red text-4xl font-bold mb-2">12+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg text-center">
              <div className="text-spice-red text-4xl font-bold mb-2">1000+</div>
              <p className="text-gray-600">Events Catered</p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg text-center">
              <div className="text-spice-red text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-600">Signature Dishes</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-spice-red mb-4">Meet Our Team</h2>
          <p className="mb-10">
            Our team consists of passionate culinary experts who share a common love for Indian cuisine. From our experienced chefs to our dedicated service staff, each member plays a crucial role in delivering exceptional catering experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-spice-red">{member.role}</p>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-semibold text-spice-red mb-4">Our Commitment</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Quality:</strong> We use only the freshest ingredients and authentic spices.</li>
            <li><strong>Authenticity:</strong> Our recipes stay true to their regional origins across India.</li>
            <li><strong>Customization:</strong> We adapt our menus to meet your specific preferences and dietary requirements.</li>
            <li><strong>Service:</strong> We provide professional, attentive service from planning to execution.</li>
            <li><strong>Sustainability:</strong> We strive to minimize our environmental impact through responsible practices.</li>
          </ul>
          
          <p className="mt-10 text-center text-lg font-medium">
            We look forward to bringing the authentic flavors of India to your next event!
          </p>
        </div>
      </div>
    </div>
  );
};

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Founder & Executive Chef",
    image: "https://www.forbesindia.com/media/images/2022/Dec/img_199417_sanjay-vazirani_900x600.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Head Chef",
    image: "https://media.istockphoto.com/id/1449552590/photo/portrait-of-indian-woman-enjoying-while-cooking-meal-in-the-kitchen-stock-photo.jpg?s=170667a&w=0&k=20&c=nq3nApvYJcT6j5Vw7C_nhYgWn9957dl5WWMj6r2bkBw="
  },
  {
    id: 3,
    name: "Anand Patel",
    role: "Event Coordinator",
    image: "http://www.event-lobang.com/wp-content/uploads/2016/01/shutterstock_339627554.jpg"
  }
];

export default About;
