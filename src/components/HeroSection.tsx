import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';
import profileAvatar from '@/assets/profile-avatar.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="relative mx-auto w-32 h-32 lg:w-40 lg:h-40">
              <img
                src={profileAvatar}
                alt="Profile"
                className="w-full h-full object-cover rounded-full shadow-glow ring-4 ring-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow" />
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Ideas in
              <span className="block text-gradient-accent">Motion</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Providing digital solutions grounded in advanced design principles and modern technologies, 
              focused on creating measurable and effective outcomes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={scrollToPortfolio}
              className="bg-gradient-primary hover:bg-gradient-primary/90 text-white border-0 shadow-elegant hover-lift px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToAbout}
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-3"
            >
              Learn More
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors hover-scale"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors hover-scale"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors hover-scale"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;