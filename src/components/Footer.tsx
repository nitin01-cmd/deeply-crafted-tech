import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', action: scrollToTop },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Projects', action: () => scrollToSection('projects') },
    { label: 'Experience', action: () => scrollToSection('experience') },
    { label: 'Skills', action: () => scrollToSection('skills') },
    { label: 'Contact', action: () => scrollToSection('contact') }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/deepjyoti-saha',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com/in/deepjyoti-saha',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:deepjyoti.saha@example.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Deepjyoti Saha
              </h3>
              <p className="text-muted-foreground mt-2">
                Frontend Developer | DBMS Expert | AI Enthusiast
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Passionate about creating digital experiences that make a difference. 
              Always learning, always building, always growing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={link.action}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Let's Connect</h4>
            <p className="text-sm text-muted-foreground">
              Follow my journey and connect for collaborations, opportunities, or just to say hi!
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-primary/10 hover:border-primary/50 hover:shadow-accent transition-all duration-300"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Deepjyoti Saha — Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Coffee className="h-4 w-4 text-amber-500" />
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Fun GitHub Contributions Placeholder */}
        <div className="mt-8 p-4 bg-muted/30 rounded-lg text-center">
          <div className="text-sm text-muted-foreground mb-2">
            📊 GitHub Activity
          </div>
          <div className="text-xs text-muted-foreground">
            Contributions chart coming soon...
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full bg-gradient-primary shadow-glow hover:shadow-accent transition-all duration-300"
        >
          <span className="text-lg">↑</span>
        </Button>
      </div>
    </footer>
  );
};