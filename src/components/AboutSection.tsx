import { Calendar, MapPin, Award, Code, Palette, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AboutSection = () => {
  const skills = [
    { name: 'Code Gremlining', level: 95, icon: Code },
    { name: 'Byte Bansheeing', level: 90, icon: Palette },
    { name: 'Syntax Sorcerist', level: 85, icon: Code },
    { name: 'Data Goblining', level: 85, icon: Zap },
    { name: 'Entropy Wrangling', level: 85, icon: Palette },
    { name: 'Einsteinian Sidekicking', level: 80, icon: Code },
    { name: 'Idea Overclocking', level: 80, icon: Zap },
  ];

  const timeline = [
    {
      year: 'Time Beginning',
      title: 'Quantum Tinkerer',
      company: 'QT Inc',
      description: 'Leading development of cutting-edge web applications using modern technologies.'
    }
    
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a keen eye for design and a commitment to creating 
            exceptional digital experiences that solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My passion for technology began in college, where I discovered the perfect 
                intersection of creativity and logic in software development. What started 
                as curiosity about how websites work evolved into a full-fledged career 
                dedicated to crafting digital experiences.
              </p>
              <p>
                Over the years, I've had the privilege of working with diverse teams and 
                clients, from innovative startups to established enterprises. Each project 
                has taught me something new and reinforced my belief that great software 
                is built on the foundation of understanding user needs.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community through writing and mentoring.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                San Francisco, CA
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                5+ Years Experience
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Award className="h-4 w-4 mr-2" />
                50+ Projects Completed
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IconComponent className="h-5 w-5 mr-2 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                );
              })}
            </div>

            <Card className="mt-8 shadow-card hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">Professional Timeline</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold relative z-10">
                    {item.year.slice(-2)}
                  </div>
                  <Card className="flex-1 shadow-card hover-lift">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                          <span className="text-sm text-muted-foreground">{item.year}</span>
                        </div>
                        <p className="text-primary font-medium">{item.company}</p>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;