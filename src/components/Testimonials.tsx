import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'Founder, GreenLeaf Organics',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'CodeSpark delivered our e-commerce website in just 5 days! The quality exceeded our expectations and our online sales have tripled since launch.'
    },
    {
      name: 'Rajesh Kumar',
      company: 'CEO, TechStartup Solutions',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Exceptional service and lightning-fast delivery. The team understood our requirements perfectly and created a stunning landing page that converts like crazy.'
    },
    {
      name: 'Anita Desai',
      company: 'Director, Creative Studios',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Professional, responsive, and incredibly talented team. They transformed our vision into a beautiful website that our clients absolutely love.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from businesses we've helped succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-blue-200" />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial, index) => (
                <img 
                  key={index}
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">
              Join 50+ satisfied clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;