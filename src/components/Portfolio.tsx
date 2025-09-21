import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: '3-Page Business Site',
      description: 'Modern business website with service pages, contact forms, and lead generation features.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Tailwind', 'Contact Forms'],
      category: 'Website'
    },
    {
      title: 'Custom Login Flow',
      description: 'Secure user authentication system with social login and password recovery.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Authentication', 'Security', 'API'],
      category: 'Web App'
    },
    {
      title: 'E-commerce Mini App',
      description: 'Complete shopping experience with cart, checkout, and payment integration.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      tags: ['E-commerce', 'Payment', 'Shopping Cart'],
      category: 'Web App'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses like yours succeed online
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                        <Code className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;