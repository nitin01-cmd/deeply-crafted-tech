import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Brain, Palette, Settings, Globe } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Frontend Development',
      color: 'text-primary',
      skills: [
        { name: 'HTML/CSS', level: 90, description: 'Semantic markup and modern styling' },
        { name: 'JavaScript', level: 85, description: 'ES6+, DOM manipulation, async programming' },
        { name: 'React', level: 80, description: 'Components, hooks, state management' },
        { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS framework' },
        { name: 'Bootstrap', level: 75, description: 'Responsive grid systems and components' }
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Database & Backend',
      color: 'text-accent',
      skills: [
        { name: 'SQL/DBMS', level: 85, description: 'Query optimization and database design' },
        { name: 'Python', level: 80, description: 'Data structures, algorithms, OOP' },
        { name: 'API Design', level: 75, description: 'RESTful services and integration' },
        { name: 'Data Modeling', level: 80, description: 'ERD design and normalization' }
      ]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'AI & Emerging Tech',
      color: 'text-primary',
      skills: [
        { name: 'Prompt Engineering', level: 85, description: 'AI tool optimization and automation' },
        { name: 'Machine Learning', level: 70, description: 'Basic ML concepts and applications' },
        { name: 'AI Integration', level: 75, description: 'Incorporating AI into web applications' },
        { name: 'Data Analysis', level: 70, description: 'Python libraries for data processing' }
      ]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Design & UX',
      color: 'text-accent',
      skills: [
        { name: 'Figma', level: 80, description: 'UI/UX design and prototyping' },
        { name: 'Responsive Design', level: 90, description: 'Mobile-first approach' },
        { name: 'User Experience', level: 75, description: 'User research and usability' },
        { name: 'Animation', level: 70, description: 'CSS animations and micro-interactions' }
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Development Tools',
      color: 'text-primary',
      skills: [
        { name: 'Git/GitHub', level: 85, description: 'Version control and collaboration' },
        { name: 'VS Code', level: 90, description: 'IDE mastery and extensions' },
        { name: 'Terminal/CLI', level: 75, description: 'Command line proficiency' },
        { name: 'DevTools', level: 80, description: 'Browser debugging and optimization' }
      ]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Soft Skills',
      color: 'text-accent',
      skills: [
        { name: 'Problem Solving', level: 90, description: 'Analytical thinking and debugging' },
        { name: 'Communication', level: 85, description: 'Technical writing and presentation' },
        { name: 'Leadership', level: 80, description: 'Team collaboration and mentoring' },
        { name: 'Learning Agility', level: 95, description: 'Adapting to new technologies' }
      ]
    }
  ];

  const certifications = [
    { name: 'CCBP 4.0 Full Stack Development', issuer: 'NxtWave', year: '2024', verified: true },
    { name: 'Frontend Development', issuer: 'Multiple Platforms', year: '2024', verified: true },
    { name: 'Database Management', issuer: 'Self-Study', year: '2023', verified: false },
    { name: 'AI/ML Fundamentals', issuer: 'Online Courses', year: '2024', verified: false }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and continuous learning journey
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:shadow-elegant hover:border-primary/20 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                      style={{
                        background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)`
                      }}
                    />
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Certifications & <span className="bg-gradient-primary bg-clip-text text-transparent">Learning</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-accent transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + skillCategories.length) * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground">{cert.name}</h4>
                    {cert.verified && (
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Source Contributions */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-card rounded-2xl border border-border/50 shadow-elegant">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🌟</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Open Source Contributor</h3>
                <p className="text-muted-foreground">Active in GSSoC'25, Open Source Connect, and community projects</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {['GirlScript', 'Open Source Connect', 'Community Projects', 'Documentation'].map((badge, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors duration-200"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};