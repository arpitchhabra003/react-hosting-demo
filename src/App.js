import React, { useState, useEffect } from 'react';
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

  // SEO: Update document title and meta description for each page
  useEffect(() => {
    const pageInfo = {
      home: {
        title: 'MyWebsite - Professional Web Development & Hosting Solutions',
        description: 'Expert web development services using React, modern hosting solutions, and digital marketing strategies. Build responsive websites with professional design and optimal performance.'
      },
      about: {
        title: 'About Us - MyWebsite | Professional Web Development Team',
        description: 'Learn about our experienced web development team. We create amazing web experiences and help businesses establish their online presence with modern technologies.'
      },
      services: {
        title: 'Web Development Services - MyWebsite | React, Hosting & SEO',
        description: 'Comprehensive web development services including React development, reliable hosting, SEO optimization, and digital marketing consulting for business growth.'
      },
      contact: {
        title: 'Contact Us - MyWebsite | Get Your Project Started Today',
        description: 'Ready to start your web development project? Contact our professional team for a free consultation. We offer web development, hosting, and digital marketing services.'
      }
    };

    const currentPageInfo = pageInfo[currentPage];
    document.title = currentPageInfo.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentPageInfo.description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = currentPageInfo.description;
      document.head.appendChild(metaDescription);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = `${window.location.origin}#${currentPage}`;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = `${window.location.origin}#${currentPage}`;
      document.head.appendChild(canonical);
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentPageInfo.title);
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', currentPageInfo.title);
      document.head.appendChild(ogTitle);
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', currentPageInfo.description);
    } else {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', currentPageInfo.description);
      document.head.appendChild(ogDescription);
    }

    // Add structured data for the current page
    updateStructuredData(currentPage);

  }, [currentPage]);

  // SEO: Add structured data
  const updateStructuredData = (page) => {
    let structuredData = document.querySelector('#structured-data');
    if (structuredData) {
      structuredData.remove();
    }

    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';

    let data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MyWebsite",
      "description": "Professional web development and hosting services",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "Customer Service",
        "email": "hello@mywebsite.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Web Street",
        "addressLocality": "Digital City",
        "addressRegion": "DC",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://twitter.com/mywebsite",
        "https://linkedin.com/company/mywebsite",
        "https://facebook.com/mywebsite"
      ]
    };

    if (page === 'services') {
      data["@type"] = "LocalBusiness";
      data["priceRange"] = "$$";
      data["hasOfferCatalog"] = {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development",
              "description": "Custom websites built with modern technologies like React"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Hosting",
              "description": "Reliable and fast hosting solutions with 99.9% uptime"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Consulting",
              "description": "Expert advice on web strategy and digital transformation"
            }
          }
        ]
      };
    }

    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  const NavBar = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>
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
                  aria-current={currentPage === item.id ? 'page' : undefined}
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
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
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
        <header className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to MyWebsite - Professional Web Development Services
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Expert web development services using React, modern hosting solutions, and digital marketing strategies. 
            Build responsive websites with professional design and optimal performance for your business success.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => setCurrentPage('about')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              aria-label="Learn more about our services"
            >
              Learn More
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="Contact us for a free consultation"
            >
              Get in Touch
            </button>
          </div>
        </header>
        
        <section className="mt-20 grid md:grid-cols-3 gap-8" aria-label="Our key services">
          <article className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <User className="text-blue-600" size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">About Our Team</h3>
            <p className="text-gray-600">Learn more about our experienced web development team and our mission to create amazing digital experiences.</p>
          </article>
          
          <article className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="text-green-600" size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development Services</h3>
            <p className="text-gray-600">Discover our comprehensive web development, hosting, and digital marketing services designed to grow your business.</p>
          </article>
          
          <article className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-purple-600" size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-600">Get in touch with our professional team for a free consultation and start your project today.</p>
          </article>
        </section>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <header>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Our Web Development Company</h2>
        </header>
        
        <main>
          <article className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Our Story & Mission</h3>
            <p className="text-gray-700 mb-4">
              Welcome to our professional web development company! We are passionate about creating amazing web experiences 
              and helping businesses establish their strong online presence. Our team specializes in React development, 
              modern hosting solutions, and comprehensive digital marketing strategies.
            </p>
            <p className="text-gray-700">
              Our experienced team consists of skilled developers, creative designers, and digital strategists 
              who work together to deliver exceptional results. We believe in the power of 
              good design, clean code, and effective SEO to make a lasting impact on your business success.
            </p>
          </article>

          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide high-quality web development services, reliable hosting solutions, and effective digital marketing 
                strategies that help businesses grow and succeed in the competitive digital landscape.
              </p>
            </section>
            
            <section className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading provider of innovative web solutions, cutting-edge hosting services, and result-driven 
                digital marketing that makes the internet a better place for businesses and their customers.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Web Development Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of web development, hosting, and digital marketing services 
            to meet all your business needs and drive online success.
          </p>
        </header>

        <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Home className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">React Web Development</h3>
            <p className="text-gray-600 mb-4">
              Custom websites and web applications built with modern React technology, ensuring 
              fast performance, excellent user experience, and mobile responsiveness.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Mobile-First Responsive Design</li>
              <li>• Modern JavaScript & React Frameworks</li>
              <li>• SEO Optimization & Performance</li>
              <li>• Cross-Browser Compatibility</li>
            </ul>
          </article>

          <article className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Professional Web Hosting</h3>
            <p className="text-gray-600 mb-4">
              Reliable and fast hosting solutions powered by modern cloud infrastructure to keep your website 
              running smoothly 24/7 with excellent uptime and security.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• 99.9% Uptime Guarantee</li>
              <li>• Free SSL Certificates</li>
              <li>• Daily Automated Backups</li>
              <li>• 24/7 Technical Support</li>
            </ul>
          </article>

          <article className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <User className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Marketing Consulting</h3>
            <p className="text-gray-600 mb-4">
              Expert advice on web strategy, SEO optimization, social media marketing, and digital 
              transformation to help your business grow and reach your target audience effectively.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• SEO Strategy & Implementation</li>
              <li>• Social Media Marketing</li>
              <li>• Performance Analytics & Optimization</li>
              <li>• Digital Strategy Consulting</li>
            </ul>
          </article>
        </main>

        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            aria-label="Contact us to get started with our services"
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

    const handleSubmit = (e) => {
      e.preventDefault();
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
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Our Web Development Team</h2>
            <p className="text-xl text-gray-600">
              Ready to start your web development project? Get in touch with us today for a free consultation 
              and discover how we can help grow your business online!
            </p>
          </header>

          <main className="grid md:grid-cols-2 gap-12">
            <section>
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    aria-required="true"
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                    aria-required="true"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your web development project and requirements"
                    aria-required="true"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  aria-label="Send your message to our team"
                >
                  Send Message
                </button>
              </form>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-blue-600 mt-1" size={20} aria-hidden="true" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:hello@mywebsite.com" className="text-blue-600 hover:underline">
                        hello@mywebsite.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Home className="text-blue-600 mt-1" size={20} aria-hidden="true" />
                  <div>
                    <h4 className="font-medium">Office Address</h4>
                    <address className="text-gray-600 not-italic">
                      123 Web Street<br />
                      Digital City, DC 12345<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <User className="text-blue-600 mt-1" size={20} aria-hidden="true" />
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Ready to get started?</h4>
                <p className="text-blue-700 text-sm">
                  This professional React website is optimized for SEO and ready to be hosted on platforms like Netlify, 
                  Vercel, or AWS. Contact us to discuss your hosting and development needs!
                </p>
              </div>
            </section>
          </main>
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
      <main role="main">
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 MyWebsite. All rights reserved.</p>
          <p className="text-gray-400 text-sm mb-4">
            Professional Web Development Services • React Development • Modern Hosting Solutions
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex justify-center space-x-6 text-sm">
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;