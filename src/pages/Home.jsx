
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-page bg-home">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-spice-yellow/20 to-spice-orange/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-spice-brown">
                Authentic Indian Catering Service for Your Special Events
              </h1>
              <p className="text-lg mb-8 text-gray-700">
                Experience the rich flavors and aromatic spices of India with our premium catering services. 
                From intimate gatherings to grand celebrations, we bring the authentic taste of India to your table.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-spice-red hover:bg-spice-red/90 text-white">
                  <Link to="/menu">Explore Our Menu</Link>
                </Button>
                <Button asChild variant="outline" className="border-spice-red text-spice-red hover:bg-spice-red/10">
                  <Link to="/book">Book Now</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://formalyonconseil.com/wp-content/uploads/2021/07/waiter-serving-table-restaurant-preparing-receive-guests.jpg" 
                  alt="Indian Feast Catering" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-secondary/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-spice-red text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <div className="aspect-video bg-muted mb-4 rounded-md overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-spice-red hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-spice-brown/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-spice-red">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            From weddings to corporate events, let us make your occasion special with authentic Indian cuisine.
          </p>
          <Button asChild className="bg-white text-spice-red hover:bg-gray-100">
            <Link to="/book">Book Our Services Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

// Services data
const services = [
  {
    id: 1,
    title: "Wedding Catering",
    description: "Make your special day memorable with our exquisite Indian cuisine prepared specially for weddings.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Impress your clients and colleagues with our professional catering services for business meetings and events.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    image: "https://www.brillianteventsinc.com/wp-content/uploads/2019/05/event_cater_fi.jpg"
  },
  {
    id: 3,
    title: "Private Parties",
    description: "Celebrate birthdays, anniversaries, or any special occasion with our customized catering options.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    image: "https://www.thelightsapphire.com/wp-content/uploads/2016/08/Private-Party-01.jpg"
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "Indian Feast catered my wedding and the food was absolutely amazing! Our guests are still talking about the butter chicken and naan.",
    image: "https://as2.ftcdn.net/v2/jpg/05/73/43/47/1000_F_573434786_u5oTtQo07UomjUEkpx8OP57jwDW8nZDL.jpg"
  },
  {
    id: 2,
    name: "Raj Kumar",
    rating: 5,
    text: "We hired Indian Feast for our corporate event and they were incredibly professional. The variety of options accommodated everyone's dietary preferences.",
    image: "https://thumbs.dreamstime.com/b/indian-men-portrait-emotional-young-business-man-isolated-white-background-42019159.jpg"
  },
  {
    id: 3,
    name: "Anil Patel",
    rating: 4,
    text: "The food was authentic and delicious. My only regret is not ordering more of the gulab jamun dessert, which was divine!",
    image: "https://media.istockphoto.com/photos/business-man-picture-id618360638?k=6&m=618360638&s=612x612&w=0&h=N4KE6fP2uqJyES6dSpsx-0Ty02E-iDqQ5x8zBjZLJJs="
  }
];

export default Home;
