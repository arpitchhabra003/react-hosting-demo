import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';
import './App.css'; // We'll update this file

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
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "Customer Service",
        "email": "hello@mywebsite.com"
      }
    };

    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  const NavBar = () => (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-header">
          <h1 className="logo">MyWebsite</h1>
          
          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`nav-button ${currentPage === item.id ? 'active' : ''}`}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`mobile-nav-button ${currentPage === item.id ? 'active' : ''}`}
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
    <div className="hero-section">
      <div className="container">
        <header className="hero-content">
          <h2 className="hero-title">
            Welcome to MyWebsite - Professional Web Development Services
          </h2>
          <p className="hero-description">
            Expert web development services using React, modern hosting solutions, and digital marketing strategies. 
            Build responsive websites with professional design and optimal performance for your business success.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => setCurrentPage('about')}
              className="btn btn-primary"
              aria-label="Learn more about our services"
            >
              Learn More
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="btn btn-secondary"
              aria-label="Contact us for a free consultation"
            >
              Get in Touch
            </button>
          </div>
        </header>
        
        <section className="features-grid" aria-label="Our key services">
          <article className="feature-card">
            <div className="feature-icon blue">
              <User size={24} aria-hidden="true" />
            </div>
            <h3>About Our Team</h3>
            <p>Learn more about our experienced web development team and our mission to create amazing digital experiences.</p>
          </article>
          
          <article className="feature-card">
            <div className="feature-icon green">
              <Briefcase size={24} aria-hidden="true" />
            </div>
            <h3>Web Development Services</h3>
            <p>Discover our comprehensive web development, hosting, and digital marketing services designed to grow your business.</p>
          </article>
          
          <article className="feature-card">
            <div className="feature-icon purple">
              <Mail size={24} aria-hidden="true" />
            </div>
            <h3>Contact Us</h3>
            <p>Get in touch with our professional team for a free consultation and start your project today.</p>
          </article>
        </section>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="page-section">
      <div className="container">
        <header>
          <h2 className="page-title">About Our Web Development Company</h2>
        </header>
        
        <main>
          <article className="content-card">
            <h3>Our Story & Mission</h3>
            <p>
              Welcome to our professional web development company! We are passionate about creating amazing web experiences 
              and helping businesses establish their strong online presence. Our team specializes in React development, 
              modern hosting solutions, and comprehensive digital marketing strategies.
            </p>
            <p>
              Our experienced team consists of skilled developers, creative designers, and digital strategists 
              who work together to deliver exceptional results. We believe in the power of 
              good design, clean code, and effective SEO to make a lasting impact on your business success.
            </p>
          </article>

          <div className="two-column">
            <section className="content-card">
              <h3>Our Mission</h3>
              <p>
                To provide high-quality web development services, reliable hosting solutions, and effective digital marketing 
                strategies that help businesses grow and succeed in the competitive digital landscape.
              </p>
            </section>
            
            <section className="content-card">
              <h3>Our Vision</h3>
              <p>
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
    <div className="page-section">
      <div className="container">
        <header className="page-header">
          <h2 className="page-title">Professional Web Development Services</h2>
          <p className="page-description">
            We offer a comprehensive range of web development, hosting, and digital marketing services 
            to meet all your business needs and drive online success.
          </p>
        </header>

        <main className="services-grid">
          <article className="service-card">
            <div className="service-icon blue">
              <Home size={24} />
            </div>
            <h3>React Web Development</h3>
            <p>
              Custom websites and web applications built with modern React technology, ensuring 
              fast performance, excellent user experience, and mobile responsiveness.
            </p>
            <ul>
              <li>Mobile-First Responsive Design</li>
              <li>Modern JavaScript & React Frameworks</li>
              <li>SEO Optimization & Performance</li>
              <li>Cross-Browser Compatibility</li>
            </ul>
          </article>

          <article className="service-card">
            <div className="service-icon green">
              <Briefcase size={24} />
            </div>
            <h3>Professional Web Hosting</h3>
            <p>
              Reliable and fast hosting solutions powered by modern cloud infrastructure to keep your website 
              running smoothly 24/7 with excellent uptime and security.
            </p>
            <ul>
              <li>99.9% Uptime Guarantee</li>
              <li>Free SSL Certificates</li>
              <li>Daily Automated Backups</li>
              <li>24/7 Technical Support</li>
            </ul>
          </article>

          <article className="service-card">
            <div className="service-icon purple">
              <User size={24} />
            </div>
            <h3>Digital Marketing Consulting</h3>
            <p>
              Expert advice on web strategy, SEO optimization, social media marketing, and digital 
              transformation to help your business grow and reach your target audience effectively.
            </p>
            <ul>
              <li>SEO Strategy & Implementation</li>
              <li>Social Media Marketing</li>
              <li>Performance Analytics & Optimization</li>
              <li>Digital Strategy Consulting</li>
            </ul>
          </article>
        </main>

        <div className="cta-section">
          <button
            onClick={() => setCurrentPage('contact')}
            className="btn btn-primary"
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
      <div className="page-section">
        <div className="container">
          <header className="page-header">
            <h2 className="page-title">Contact Our Web Development Team</h2>
            <p className="page-description">
              Ready to start your web development project? Get in touch with us today for a free consultation 
              and discover how we can help grow your business online!
            </p>
          </header>

          <main className="contact-content">
            <section className="contact-form-section">
              <h3>Send us a message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your web development project and requirements"
                    aria-required="true"
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary full-width"
                  aria-label="Send your message to our team"
                >
                  Send Message
                </button>
              </form>
            </section>

            <section className="contact-info-section">
              <h3>Get in touch</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <Mail className="contact-icon" size={20} aria-hidden="true" />
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:hello@mywebsite.com">hello@mywebsite.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Home className="contact-icon" size={20} aria-hidden="true" />
                  <div>
                    <h4>Office Address</h4>
                    <address>
                      123 Web Street<br />
                      Digital City, DC 12345<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="contact-item">
                  <User className="contact-icon" size={20} aria-hidden="true" />
                  <div>
                    <h4>Business Hours</h4>
                    <p>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h4>Ready to get started?</h4>
                <p>
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
    <div className="app">
      <NavBar />
      <main role="main">
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <p>&copy; 2025 MyWebsite. All rights reserved.</p>
          <p className="footer-tagline">
            Professional Web Development Services • React Development • Modern Hosting Solutions
          </p>
          <nav aria-label="Footer navigation" className="footer-nav">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;