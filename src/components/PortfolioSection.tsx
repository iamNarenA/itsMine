import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
      category: 'web',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    
    {
      id: 2,
      title: 'AI-Powered Analytics',
      description: 'Machine learning dashboard for business intelligence with predictive analytics and real-time data visualization.',
      category: 'web',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Unified dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking.',
      category: 'web',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Social APIs'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'IoT Home Automation',
      description: 'Smart home control system with voice commands, energy monitoring, and security features.',
      category: 'mobile',
      technologies: ['Flutter', 'Arduino', 'MQTT', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent projects, demonstrating expertise in full-stack development, 
            mobile applications, and user experience design.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Highlighted Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group shadow-card hover-lift overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" className="hover-scale">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="hover-scale border-white text-white hover:bg-white/20">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects with Filters */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h3 className="text-2xl font-semibold mb-4 sm:mb-0">All Projects</h3>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  className="transition-smooth"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group shadow-card hover-lift overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    {project.featured && (
                      <Badge className="bg-gradient-primary text-white">Featured</Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="hover-scale">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                        <Button size="sm" variant="ghost" className="hover-scale">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      </div>
                      <Button variant="link" size="sm" className="text-primary p-0">
                        Learn More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block shadow-elegant hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                I'm always excited to take on new challenges and collaborate on innovative projects.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90">
                Let's Connect
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;