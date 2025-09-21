import React from 'react';
import { Code, Mail, Phone, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/img/21API_Modular_Grid_Option3.png" alt="21API Logo" className="h-12 w-30" />
              <img src="/img/21API_Logo_White_Transparent.png" alt="21API Logo" className="h-8 w-30" />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Fast, affordable, scalable web solutions for startups, small businesses, and entrepreneurs. 
              Delivered in days, not months.
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} 21API. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web Applications</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-commerce Sites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                kcac619@gmail.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +91 90240 78753
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Available
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>Built with ❤️ in India | Serving clients worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;