import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Deepjyoti</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                (Deep) Saha
              </span>
            </h1>
          </div>

          {/* Role descriptions */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Frontend Developer | DBMS Expert | Aspiring Tech Entrepreneur
            </p>
          </div>

          {/* Tagline */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              "Crafting interfaces, cracking databases, and creating with AI."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent/50 hover:bg-accent/10 hover:border-accent transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up flex justify-center space-x-4" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:shadow-accent transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:shadow-accent transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:shadow-accent transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};