
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  return (
    <div className="bg-page bg-services container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Our Catering Services</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        We offer a variety of catering services to make your event special with authentic Indian cuisine.
      </p>

      {/* Services Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {cateringServices.map((service) => (
          <Card key={service.id} className="border-t-4 border-t-spice-red">
            <CardHeader>
              <div className="mb-4">
                <div className="w-16 h-16 bg-spice-red/10 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted mb-4 rounded-md overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-muted-foreground">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-spice-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-spice-red hover:bg-spice-red/90">
                <Link to="/contact">Enquire Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-spice-red text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-spice-red/30 -translate-x-8">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
                    <svg className="h-4 w-4 text-spice-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Custom Menus */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Custom Menu Options</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We offer a variety of menu options to suit different tastes and dietary requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuTypes.map((menu) => (
            <div key={menu.id} className="bg-secondary/30 rounded-lg p-6 border border-spice-red/20">
              <div className="aspect-video bg-muted mb-4 rounded-md overflow-hidden">
                <img 
                  src={menu.image} 
                  alt={menu.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-xl mb-3">{menu.title}</h3>
              <p className="text-muted-foreground mb-4">{menu.description}</p>
              <Link 
                to="/menu" 
                className="text-spice-red hover:underline inline-flex items-center"
              >
                View Menu
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Pricing</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We offer competitive pricing options to suit various budgets and requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`border rounded-lg overflow-hidden ${
                plan.popular ? 'border-spice-red shadow-lg relative' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-spice-red text-white text-center text-sm py-1">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">₹{plan.price}</span>
                  <span className="text-muted-foreground"> / person</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-spice-red hover:bg-spice-red/90'
                      : 'bg-spice-brown hover:bg-spice-brown/90'
                  }`}
                >
                  <Link to="/book">Book Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          * Prices may vary depending on specific requirements, venue location, and seasonal availability.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-spice-red to-spice-brown p-8 rounded-lg text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Make Your Event Special?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact us today to discuss your catering needs and let us create a customized menu for your event.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="secondary">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button asChild className="bg-white text-spice-red hover:bg-gray-100">
            <Link to="/book">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

// Services data
const cateringServices = [
  {
    id: 1,
    title: "Wedding Catering",
    description: "Make your special day memorable with our exquisite Indian cuisine.",
    icon: <svg className="h-8 w-8 text-spice-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>,
    features: [
      "Customized menu planning",
      "Elegant presentation",
      "Live cooking stations",
      "Dedicated service staff",
      "Complete setup and cleanup"
    ],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Impress your clients and colleagues with our professional catering.",
    icon: <svg className="h-8 w-8 text-spice-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>,
    features: [
      "Flexible menu options",
      "Punctual delivery",
      "Professional presentation",
      "Buffet or boxed meals",
      "Accommodates dietary restrictions"
    ],
    image: "https://www.brillianteventsinc.com/wp-content/uploads/2019/05/event_cater_fi.jpg"
  },
  {
    id: 3,
    title: "Private Parties",
    description: "Celebrate special occasions with authentic Indian cuisine.",
    icon: <svg className="h-8 w-8 text-spice-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>,
    features: [
      "Personalized menu planning",
      "Various serving styles",
      "Theme-based presentations",
      "Flexible serving times",
      "Options for all group sizes"
    ],
    image: "https://www.thelightsapphire.com/wp-content/uploads/2016/08/Private-Party-01.jpg"
  },
  {
    id: 4,
    title: "Festival Catering",
    description: "Bring the festive spirit with specially curated traditional menus.",
    icon: <svg className="h-8 w-8 text-spice-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>,
    features: [
      "Seasonal and festive specialties",
      "Traditional recipes",
      "Festive decoration options",
      "Cultural performances arrangements",
      "Customized sweet boxes"
    ],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Outdoor & Garden Events",
    description: "Perfect catering solutions for outdoor celebrations and garden parties.",
    icon: <svg className="h-8 w-8 text-spice-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V17m0 0v2.5M12 17h2.5M12 17h-2.5" />
    </svg>,
    features: [
      "Weather-appropriate setup",
      "Portable cooking equipment",
      "Elegant outdoor dining arrangements",
      "Lighting and ambiance creation",
      "Backup plans for weather changes"
    ],
    image: "https://www.fermag.com/wp-content/uploads/2020/06/How-to-Prepare-for-the-Outdoor-Catering-Season.jpg"
  },
  {
    id: 6,
    title: "Cooking Workshops",
    description: "Learn the art of Indian cooking with our expert chefs.",
    icon: <svg className="h-8 w-8 text-spice-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>,
    features: [
      "Hands-on cooking experience",
      "Recipe booklets to take home",
      "Spice knowledge sessions",
      "Team-building cooking challenges",
      "Custom workshop themes"
    ],
    image: "https://www.papillesetpupilles.fr/wp-content/uploads/2005/09/Cours-de-cuisine-%C2%A9Syda-Productions-shutterstock.jpg"
  }
];

// Process steps
const processSteps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "We discuss your event details, preferences, and dietary requirements."
  },
  {
    id: 2,
    title: "Menu Planning",
    description: "Our chefs design a customized menu based on your preferences."
  },
  {
    id: 3,
    title: "Confirmation",
    description: "We finalize all details and secure your booking with a deposit."
  },
  {
    id: 4,
    title: "Execution",
    description: "We deliver, set up, and serve delicious food for your event."
  }
];

// Menu types
const menuTypes = [
  {
    id: 1,
    title: "North Indian Dish",
    description: "Rich, creamy curries, tandoori specialties, and bread varieties from Northern India.",
    image: "https://st2.depositphotos.com/5653638/11520/i/950/depositphotos_115208152-stock-photo-indian-thali-indian-food-thali.jpg"
  },
  {
    id: 2,
    title: "South Indian Dish",
    description: "Flavorful dosas, idlis, and coconut-based curries from Southern India.",
    image: "https://c8.alamy.com/comp/M841GX/south-indian-thali-or-meals-which-is-traditionally-served-on-a-banana-M841GX.jpg"
  },
  {
    id: 3,
    title: "Vegetarian Special",
    description: "Extensive selection of vegetarian dishes that don't compromise on flavor.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Non-Vegetarian Delights",
    description: "Succulent meat and seafood dishes prepared with aromatic spices.",
    image: "https://t3.ftcdn.net/jpg/03/61/02/44/360_F_361024401_whhOCNdEPi0LlQz1lvbyY0dvZuno3aVp.jpg"
  },
  {
    id: 5,
    title: "Street Food Experience",
    description: "Popular Indian street food items for a casual and fun dining experience.",
    image: "http://images.deliveryhero.io/image/foodpanda/recipes/pani-puri-recipe-1.png"
  },
  {
    id: 6,
    title: "Fusion Menu",
    description: "Creative dishes that blend Indian flavors with international cuisine.",
    image: "https://kiolyn-image-store-production.s3-us-west-1.amazonaws.com/20052017573567/1590104905089"
  }
];

// Pricing plans
const pricingPlans = [
  {
    id: 1,
    title: "Basic Package",
    price: "600",
    description: "Perfect for small gatherings and informal events.",
    features: [
      "4 Appetizers",
      "2 Main Courses",
      "1 Dal",
      "Rice & Bread",
      "1 Dessert",
      "Basic Serving Equipment"
    ],
    popular: false
  },
  {
    id: 2,
    title: "Premium Package",
    price: "950",
    description: "Our most popular option for medium-sized events.",
    features: [
      "6 Appetizers",
      "3 Main Courses",
      "2 Dals",
      "Rice Varieties & Bread",
      "2 Desserts",
      "Full Service Staff",
      "Premium Serving Equipment"
    ],
    popular: true
  },
  {
    id: 3,
    title: "Luxury Package",
    price: "1500",
    description: "The ultimate Indian dining experience for special occasions.",
    features: [
      "8 Appetizers",
      "5 Main Courses",
      "2 Dals & Raita",
      "Multiple Rice & Bread Options",
      "3 Desserts",
      "Full Service Staff",
      "Premium Serving Equipment",
      "Live Cooking Stations"
    ],
    popular: false
  }
];

export default Services;
