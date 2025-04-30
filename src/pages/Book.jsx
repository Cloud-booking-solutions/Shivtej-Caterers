import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

const Book = () => {
  const { toast } = useToast();
  const [date, setDate] = useState(null);
  const [step, setStep] = useState(1);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you would handle form submission here
    toast({
      title: "Booking Submitted!",
      description: "We'll contact you soon to confirm your catering request.",
      duration: 5000,
    });
    
    // Reset form
    e.target.reset();
    setDate(null);
    setStep(1);
  };

  return (
    <div className="bg-page bg-book container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Book Our Catering Services</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Fill out the form below to request our catering services for your event.
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className={`text-sm font-medium ${step >= 1 ? 'text-spice-red' : 'text-gray-400'}`}>
                Event Details
              </span>
              <span className={`text-sm font-medium ${step >= 2 ? 'text-spice-red' : 'text-gray-400'}`}>
                Menu Preferences
              </span>
              <span className={`text-sm font-medium ${step >= 3 ? 'text-spice-red' : 'text-gray-400'}`}>
                Contact Information
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-spice-red rounded-full transition-all" 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Event Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Select a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today;
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700">Event Time</label>
                    <Input id="eventTime" name="eventTime" type="time" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (hours)</label>
                    <Input id="duration" name="duration" type="number" min="1" max="24" defaultValue="4" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Event Type</label>
                  <Select name="eventType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
                  <Input id="guests" name="guests" type="number" min="10" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="venue" className="block text-sm font-medium text-gray-700">Venue Address</label>
                  <Textarea id="venue" name="venue" required placeholder="Enter the full address of your event" />
                </div>
                
                <Button 
                  type="button" 
                  className="w-full bg-spice-red hover:bg-spice-red/90"
                  onClick={() => setStep(2)}
                >
                  Next: Menu Preferences
                </Button>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Menu Preferences</h2>
                
                <div className="space-y-2">
                  <label htmlFor="packageType" className="block text-sm font-medium text-gray-700">Catering Package</label>
                  <Select name="packageType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Package (₹600 per person)</SelectItem>
                      <SelectItem value="premium">Premium Package (₹950 per person)</SelectItem>
                      <SelectItem value="luxury">Luxury Package (₹1500 per person)</SelectItem>
                      <SelectItem value="custom">Custom Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="cuisineType" className="block text-sm font-medium text-gray-700">Cuisine Preference</label>
                  <Select name="cuisineType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cuisine type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north">North Indian</SelectItem>
                      <SelectItem value="south">South Indian</SelectItem>
                      <SelectItem value="mixed">Mixed Indian</SelectItem>
                      <SelectItem value="fusion">Indo-Fusion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700">Dietary Restrictions</label>
                  <Textarea 
                    id="dietaryRestrictions" 
                    name="dietaryRestrictions" 
                    placeholder="Please list any dietary restrictions or allergies we should be aware of"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">Special Requests</label>
                  <Textarea 
                    id="specialRequests" 
                    name="specialRequests" 
                    placeholder="Any special requests or additional details about your menu preferences"
                  />
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setStep(1)}
                  >
                    Back: Event Details
                  </Button>
                  
                  <Button 
                    type="button" 
                    className="bg-spice-red hover:bg-spice-red/90"
                    onClick={() => setStep(3)}
                  >
                    Next: Contact Information
                  </Button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" name="email" type="email" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <Input id="phone" name="phone" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="referral" className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
                  <Select name="referral">
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="friend">Friend/Family</SelectItem>
                      <SelectItem value="event">Previous Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setStep(2)}
                  >
                    Back: Menu Preferences
                  </Button>
                  
                  <Button 
                    type="submit" 
                    className="bg-spice-red hover:bg-spice-red/90"
                  >
                    Submit Booking Request
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
        
        <div className="mt-8 bg-secondary/60 rounded-lg p-6 shadow">
          <h3 className="font-semibold text-lg mb-2">Note About Booking</h3>
          <p className="text-muted-foreground">
            This form submits a booking request only. Our team will review your request and contact you within 24 hours to confirm details and provide a detailed quote. A deposit may be required to secure your date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
