import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="font-playfair text-2xl font-semibold text-gradient-primary">
              Portfolio
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Passionate about creating exceptional digital experiences through innovative design 
              and cutting-edge technology. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors hover-scale"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors underline-animate"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>San Francisco, CA</p>
              <a 
                href="mailto:hello@example.com" 
                className="block hover:text-foreground transition-colors underline-animate"
              >
                hello@example.com
              </a>
              <a 
                href="tel:+15551234567" 
                className="block hover:text-foreground transition-colors underline-animate"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Portfolio. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and lots of coffee.</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors underline-animate"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors underline-animate"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="text-primary hover:text-primary/80 transition-colors font-medium underline-animate"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;