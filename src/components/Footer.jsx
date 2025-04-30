
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-spice-brown text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Shivtej Caterers</h3>
            <p className="mb-4">Authentic Indian cuisine for all your catering needs. From intimate gatherings to grand celebrations.</p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="bg-white text-spice-brown p-2 rounded-full hover:bg-gray-200 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.061c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.859c0-2.506 1.492-3.891 3.777-3.891 1.094 0 2.238.195 2.238.195v2.459h-1.262c-1.242 0-1.629.77-1.629 1.562v1.875h2.771l-.443 2.892h-2.328v6.987C18.343 21.189 22 17.052 22 12.061z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="bg-white text-spice-brown p-2 rounded-full hover:bg-gray-200 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123s-.012 3.056-.06 4.123c-.049 1.064-.218 1.791-.465 2.427-.25.668-.644 1.272-1.153 1.772-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06s-3.056-.012-4.123-.06c-1.064-.049-1.791-.218-2.427-.465-.668-.25-1.272-.644-1.772-1.153-.509-.5-.902-1.104-1.153-1.772-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.317c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.25-.668.644-1.272 1.153-1.772.5-.509 1.104-.902 1.772-1.153.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.123-.06z M16 12a4 4 0 11-8 0 4 4 0 018 0"></path>
                </svg>
              </a>
              <a href="https://wa.me/9021470231" target="_blank" rel="noopener noreferrer"
                className="bg-white text-spice-brown p-2 rounded-full hover:bg-gray-200 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.667 0 5.17 1.035 7.055 2.91 1.887 1.859 2.93 4.35 2.93 6.985-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="bg-white text-spice-brown p-2 rounded-full hover:bg-gray-200 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zM8.27 18.5v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-spice-yellow transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-spice-yellow transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-spice-yellow transition-colors">Services</Link></li>
              <li><Link to="/menu" className="hover:text-spice-yellow transition-colors">Menu</Link></li>
              <li><Link to="/contact" className="hover:text-spice-yellow transition-colors">Contact</Link></li>
              <li><Link to="/book" className="hover:text-spice-yellow transition-colors">Book Now</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-spice-yellow" />
                <a href="tel:+123456789" className="hover:text-spice-yellow transition-colors">+91 9021470231</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-spice-yellow" />
                <a href="mailto:info@indianfeast.com" className="hover:text-spice-yellow transition-colors">shivtejcaterers@gmail.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-spice-yellow" />
                <span>Punawale, Kate Wasti Chowk, Pimpri-Chinchwad, Maharashtra, 411033</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Shivtej Caterers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
