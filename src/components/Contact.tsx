import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', projectDetails: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const whatsappMessage = `Hi CodeSpark Agency! I'm interested in discussing a web development project. My name is ${formData.name} and here are the details: ${formData.projectDetails}`;
  const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Talk About Your Project!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business with a stunning website? Get in touch and let's make it happen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={5}
                    required
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project, budget, timeline, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch instantly</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-3 rounded-xl mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">hello@codespark.agency</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-3 rounded-xl mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-3 rounded-xl mr-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">Quick response guaranteed</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a
                href={`mailto:hello@codespark.agency?subject=Project Inquiry&body=Hi CodeSpark Agency, I'm interested in discussing a web development project.%0D%0A%0D%0AProject Details:%0D%0A${encodeURIComponent(formData.projectDetails)}`}
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-600 hover:to-blue-700 text-gray-700 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center border"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-2">Free Consultation</h4>
              <p className="text-gray-600 text-sm">
                Get a free 30-minute consultation to discuss your project requirements and get expert advice on the best solution for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;