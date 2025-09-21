import React from 'react';
import { Zap, DollarSign, TrendingUp } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Get your website or app delivered in days, not months. We use proven processes and modern tools to speed up development.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'High-quality web solutions that fit your budget. Transparent pricing with no hidden costs or surprises.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Code',
      description: 'Built to grow with your business. Clean, maintainable code that can easily expand as your needs evolve.',
      color: 'from-blue-600 to-orange-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose 21API?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine speed, affordability, and quality to deliver exceptional web solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className={`bg-gradient-to-r ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-200 shadow-lg group-hover:shadow-2xl`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} w-20 h-20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-200`}></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join dozens of satisfied clients who've transformed their business with our web solutions.
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;