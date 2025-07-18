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
      description: 'Boundary-pushing problem wrangler with a knack for logic-bending, obsessive tinkering, and delightfully offbeat design—remixing data, conjuring clever code, and unleashing creative prototypes. Fueled by curiosity and a dash of chaos, big ideas, stubborn bugs, and quirky side projects get zapped into notorious digital weirdcraft..'
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
            Boldly experiments in the weirder corners of technology, embracing complexity and uncertainty to unlock new solutions..
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p> The tech obsession kicked off in college—where code curiosity collided with creative chaos, and a fascination for what makes websites tick spiraled into full-on digital tinkering. That initial spark launched an ongoing quest: remixing logic and creativity to architect unconventional user experiences. </p> 
              <p> From scrappy startup hackathons to wrangling enterprise-scale projects, every new collaboration has been a fresh level-up—proving time and again that legendary codepunk marvels start with understanding real user quests. </p> 
              <p> When not conjuring clever code, expect me deep in the pixel puzzle mines, unleashing open-source weirdcraft, or zapping knowledge through the dev community with writing and mentorship side quests. </p>
              
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                San Francisco, CA
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                The time it takes light to cross 189 trillion kilometers
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Award className="h-4 w-4 mr-2" />
                A cache loaded with completed solutions
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