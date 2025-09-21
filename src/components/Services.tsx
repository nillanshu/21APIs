import React from 'react';
import { Globe, Puzzle, Wrench, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Landing Pages & Websites',
      description: 'Professional websites that convert visitors into customers. Responsive, fast, and SEO-optimized.',
      price: 'Starting at ₹15,000',
      features: ['Responsive Design', 'SEO Optimized', '5+ Pages', 'Contact Forms', 'Analytics Setup']
    },
    {
      icon: Puzzle,
      title: 'App Features & Integrations',
      description: 'Custom web applications, API integrations, and interactive features tailored to your needs.',
      price: 'Custom Pricing',
      features: ['API Integration', 'User Authentication', 'Payment Gateway', 'Database Setup', 'Custom Features']
    },
    {
      icon: Wrench,
      title: 'Maintenance & Monthly Support',
      description: 'Keep your website running smoothly with regular updates, backups, and technical support.',
      price: 'Starting at ₹3,000/month',
      features: ['Regular Updates', 'Security Monitoring', 'Backup Management', 'Bug Fixes', '24/7 Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to establish and grow your online presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-100 to-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              
              <div className="mb-6">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
                  {service.price}
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-600 hover:to-blue-700 text-gray-700 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;