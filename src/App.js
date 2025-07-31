import React, { useState } from 'react';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'about', name: 'About', icon: User },
    { id: 'services', name: 'Services', icon: Briefcase },
    { id: 'contact', name: 'Contact', icon: Mail }
  ];

  const NavBar = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">MyWebsite</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to MyWebsite
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This is a sample 4-page React website perfect for learning web hosting. 
            Explore our pages to see different content and layouts.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => setCurrentPage('about')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <User className="text-blue-600" size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-gray-600">Learn more about our mission and values.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="text-green-600" size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Services</h3>
            <p className="text-gray-600">Discover what we can do for you.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-purple-600" size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-600">Get in touch with our team.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Welcome to our company! We are passionate about creating amazing web experiences 
            and helping businesses establish their online presence. This sample website 
            demonstrates the kind of clean, professional design we create for our clients.
          </p>
          <p className="text-gray-700">
            Our team consists of experienced developers, designers, and digital strategists 
            who work together to deliver exceptional results. We believe in the power of 
            good design and clean code to make a lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To provide high-quality web solutions that help businesses grow and succeed 
              in the digital world.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the leading provider of innovative web solutions that make the internet 
              a better place for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of web development and hosting services 
            to meet all your digital needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Home className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Custom websites built with modern technologies like React, ensuring 
              fast performance and great user experience.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Responsive Design</li>
              <li>• Modern Frameworks</li>
              <li>• SEO Optimization</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Web Hosting</h3>
            <p className="text-gray-600 mb-4">
              Reliable and fast hosting solutions to keep your website running 
              smoothly 24/7 with excellent uptime.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• 99.9% Uptime</li>
              <li>• SSL Certificates</li>
              <li>• Daily Backups</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <User className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Consulting</h3>
            <p className="text-gray-600 mb-4">
              Expert advice on web strategy, technology choices, and digital 
              transformation to help your business grow.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Strategy Planning</li>
              <li>• Technology Advice</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleSubmit = () => {
      alert('Thanks for your message! This is just a demo form.');
      setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Ready to start your project? Get in touch with us today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project"
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">hello@mywebsite.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Home className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">
                      123 Web Street<br />
                      Digital City, DC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <User className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Ready to host?</h3>
                <p className="text-blue-700 text-sm">
                  This React website is ready to be hosted on platforms like Netlify, 
                  Vercel, or GitHub Pages. Simply build the project and deploy!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      {renderPage()}
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 MyWebsite. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Built with React • Perfect for learning web hosting
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;