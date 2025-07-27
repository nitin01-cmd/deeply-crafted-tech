import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Web Developer',
      company: 'Zidio Development',
      type: 'Internship',
      location: 'Remote',
      duration: '2024 - Present',
      description: 'Developing responsive web applications using modern frameworks. Working on client projects with focus on user experience and performance optimization.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      logo: '🚀'
    },
    {
      id: 2,
      role: 'Open Source Contributor',
      company: 'GirlScript Summer of Code',
      type: 'Contributor',
      location: 'Global',
      duration: '2025',
      description: 'Contributing to open source projects, mentoring newcomers, and building community-driven solutions. Focus on frontend development and documentation.',
      technologies: ['JavaScript', 'React', 'Documentation', 'Git'],
      logo: '👩‍💻'
    },
    {
      id: 3,
      role: 'Open Source Contributor',
      company: 'Open Source Connect',
      type: 'Contributor',
      location: 'Global',
      duration: '2024 - Present',
      description: 'Active contributor to various open source projects. Building reusable components and improving existing codebases.',
      technologies: ['Open Source', 'JavaScript', 'React', 'CSS'],
      logo: '🌐'
    },
    {
      id: 4,
      role: 'Core Team Member',
      company: 'Piratage (Ethical Hacking Club)',
      type: 'Leadership',
      location: 'College',
      duration: '2024 - Present',
      description: 'Leading technical initiatives, organizing workshops, and mentoring students in cybersecurity and ethical hacking practices.',
      technologies: ['Cybersecurity', 'Linux', 'Python', 'Networking'],
      logo: '🔐'
    },
    {
      id: 5,
      role: 'Campus Ambassador',
      company: 'Multiple Organizations',
      type: 'Ambassador',
      location: 'Various',
      duration: '2023 - 2024',
      description: 'Represented organizations including Internshala, LetsUpgrade, and others. Organized events, workshops, and promoted tech education.',
      technologies: ['Community Building', 'Event Management', 'Public Speaking'],
      logo: '🎯'
    },
    {
      id: 6,
      role: 'Intern',
      company: 'MyCaptain & Others',
      type: 'Internship',
      location: 'Remote',
      duration: '2023 - 2024',
      description: 'Completed multiple internships at MyCaptain, Internshala, Kainosverse, and Muskurahat Foundation. Gained diverse experience in web development, content creation, and project management.',
      technologies: ['Web Development', 'Content Creation', 'Project Management'],
      logo: '💼'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through diverse roles and contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-primary opacity-30"></div>

            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex items-center mb-12 animate-fade-in-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <Card className="bg-gradient-card border-border/50 hover:shadow-elegant hover:border-primary/20 transition-all duration-300 group">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{exp.logo}</div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Building className="h-4 w-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                          </div>
                        </div>
                        <Badge 
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/30"
                        >
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="text-xs hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-full text-primary-foreground font-medium shadow-glow">
            <span>🎯</span>
            <span>Open to new opportunities and collaborations</span>
          </div>
        </div>
      </div>
    </section>
  );
};