import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Filter } from 'lucide-react';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Dashboard',
      description: 'Modern admin dashboard with AI-driven analytics and real-time data visualization. Features include predictive analytics, user behavior tracking, and automated reporting.',
      tags: ['React', 'Python', 'AI/ML', 'Tailwind'],
      category: 'AI',
      image: '/placeholder.svg',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with advanced filtering, payment integration, and inventory management. Built with modern web technologies.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      category: 'Frontend',
      image: '/placeholder.svg',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Database Management System',
      description: 'Custom DBMS solution with optimized query processing, transaction management, and data integrity features. Supports complex relational operations.',
      tags: ['Python', 'SQL', 'Database Design'],
      category: 'Backend',
      image: '/placeholder.svg',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Open Source UI Library',
      description: 'Reusable component library with accessibility-first design, comprehensive documentation, and TypeScript support. Used by 500+ developers.',
      tags: ['React', 'TypeScript', 'CSS', 'Documentation'],
      category: 'Open Source',
      image: '/placeholder.svg',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced task tracking capabilities.',
      tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
      category: 'Frontend',
      image: '/placeholder.svg',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool with prompt engineering, template management, and multi-format output generation for creative professionals.',
      tags: ['Python', 'AI/ML', 'React', 'API Design'],
      category: 'AI',
      image: '/placeholder.svg',
      github: '#',
      demo: '#'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'AI', 'Open Source'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical expertise through real-world solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Filter className="h-4 w-4" />
            Filter by category:
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`transition-all duration-200 ${
                  activeFilter === category 
                    ? 'bg-gradient-primary shadow-glow' 
                    : 'hover:bg-primary/10 hover:border-primary/50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-gradient-card border-border/50 hover:shadow-elegant hover:border-primary/20 transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-muted h-48">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-accent transition-all duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="hover:bg-primary/10 hover:border-primary/50 hover:shadow-accent transition-all duration-300"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};