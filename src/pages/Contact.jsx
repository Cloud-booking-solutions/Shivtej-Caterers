import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you would handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    e.target.reset();
  };

  return (
    <div className="bg-page bg-contact container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have questions about our catering services? Get in touch with us and we'll be happy to assist you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <Input id="firstName" name="firstName" required placeholder="Enter your first name" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <Input id="lastName" name="lastName" required placeholder="Enter your last name" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input id="email" name="email" type="email" required placeholder="Enter your email" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Input id="phone" name="phone" placeholder="Enter your phone number" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <Input id="subject" name="subject" required placeholder="What is this regarding?" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea 
                id="message" 
                name="message" 
                required 
                placeholder="Please provide details about your inquiry..." 
                rows={5}
              />
            </div>
            
            <Button type="submit" className="w-full bg-spice-red hover:bg-spice-red/90">
              Send Message
            </Button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div>
          <div className="bg-spice-red text-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p>+91 9021470231</p>
                  {/* <p className="text-sm opacity-80 mt-1">Mon-Fri, 9am-6pm</p> */}
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p>shivtejcaterers@gmail.com</p>
                  <p className="text-sm opacity-80 mt-1">We'll respond as soon as possible</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p>Punawale, Kate Wasti Chowk, Pimpri-Chinchwad, Maharashtra, 411033</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  {/* <p>Monday-Friday: 9am-6pm<br />Saturday: 10am-4pm<br />Sunday: Closed</p> */}
                  <p>Opens 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="bg-secondary rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <h3 className="font-semibold text-spice-red mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      
      {/* Map (Placeholder) */}
      <div className="rounded-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8546233202833!2d73.73091837496557!3d18.6256074824885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e1971e5aa5%3A0xd9c6545e72bd9bbf!2sShivtej%20Caterer!5e0!3m2!1sen!2sin!4v1745586123074!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
      </div>
    </div>
  );
};

// FAQs data
const faqs = [
  {
    id: 1,
    question: "How far in advance should I book your catering services?",
    answer: "We recommend booking at least 2-4 weeks in advance for small events and 2-3 months for larger events like weddings."
  },
  {
    id: 2,
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes, we can accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergies. Please inform us when booking."
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer: "Cancellations made 7 days or more before the event receive a full refund of the deposit. Cancellations within 7 days of the event forfeit the deposit."
  },
  {
    id: 4,
    question: "Do you provide staffing for events?",
    answer: "Yes, we offer staffing options including servers, bartenders, and chefs for an additional fee based on your event requirements."
  }
];

export default Contact;
