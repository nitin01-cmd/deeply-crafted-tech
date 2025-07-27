import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Palette, Users, Lightbulb } from 'lucide-react';

export const About = () => {
  const techStack = [
    { name: 'HTML', category: 'Web' },
    { name: 'CSS', category: 'Web' },
    { name: 'Tailwind CSS', category: 'Web' },
    { name: 'Bootstrap', category: 'Web' },
    { name: 'Python', category: 'Programming' },
    { name: 'Figma', category: 'Design' },
    { name: 'DBMS', category: 'Database' },
    { name: 'AI/ML', category: 'AI' }
  ];

  const traits = [
    { icon: <Lightbulb className="h-5 w-5" />, label: 'Proactive', color: 'bg-accent/10 text-accent-foreground border-accent/20' },
    { icon: <Palette className="h-5 w-5" />, label: 'Creative', color: 'bg-primary/10 text-primary-foreground border-primary/20' },
    { icon: <Brain className="h-5 w-5" />, label: 'Problem-solver', color: 'bg-secondary/10 text-secondary-foreground border-secondary/20' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate technologist crafting digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-muted-foreground">
                  DS
                </div>
              </div>
              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-elegant animate-float">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-elegant animate-float" style={{ animationDelay: '1s' }}>
                <Database className="h-5 w-5 text-accent" />
              </div>
              <div className="absolute -bottom-4 left-1/4 w-11 h-11 bg-card border border-border rounded-full flex items-center justify-center shadow-elegant animate-float" style={{ animationDelay: '2s' }}>
                <Brain className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Passionate about technology and innovation, I'm currently mastering 
                  <span className="text-primary font-semibold"> Full-Stack Development</span> with a 
                  specialization in 4.0 technologies at 
                  <span className="text-accent font-semibold"> NxtWave's CCBP 4.0 Academy</span>.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  My journey is defined by hands-on project experience, internships, and a 
                  constant curiosity for <span className="text-primary font-semibold">AI, prompt engineering, and UI/UX design</span>.
                </p>
              </CardContent>
            </Card>

            {/* Personality Traits */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Personality Traits</h3>
              <div className="flex flex-wrap gap-3">
                {traits.map((trait, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className={`${trait.color} px-4 py-2 text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-200`}
                  >
                    {trait.icon}
                    {trait.label}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-gradient-card border-border/50 text-center p-4 hover:shadow-accent transition-all duration-300">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </Card>
              <Card className="bg-gradient-card border-border/50 text-center p-4 hover:shadow-accent transition-all duration-300">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </Card>
              <Card className="bg-gradient-card border-border/50 text-center p-4 hover:shadow-accent transition-all duration-300">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Roles</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};