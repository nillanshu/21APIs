import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 border border-blue-200">
              <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800">Fast, Affordable, Scalable Web Solutions</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"> Digital Presence</span>
            <br />
            In Days, Not Months
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We build websites and apps for startups, small businesses, and entrepreneurs — delivered in days, not months. 
            Professional, responsive, and ready to scale with your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              Book a Free Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-blue-600 font-semibold text-lg transition-colors underline underline-offset-4"
            >
              View Our Work
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">7 Days</div>
              <div className="text-gray-600">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;