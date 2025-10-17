import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, product management, and real-time inventory tracking.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop",
      category: "Web Apps",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team workflows, and project analytics.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
      category: "Web Apps",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Fitness Tracker Mobile",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with social features.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=450&fit=crop",
      category: "Mobile",
      technologies: ["React Native", "TypeScript", "GraphQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Brand Identity System",
      description: "Complete brand identity and design system for a sustainable fashion startup with comprehensive guidelines.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
      category: "Design",
      technologies: ["Figma", "Illustrator", "After Effects"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search filters, virtual tours, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=450&fit=crop",
      category: "Web Apps",
      technologies: ["Next.js", "PostgreSQL", "AWS", "Mapbox"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, radar maps, and severe weather alerts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=450&fit=crop",
      category: "Mobile",
      technologies: ["Flutter", "Dart", "OpenWeather API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  const filters = ["All", "Web Apps", "Mobile", "Design"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing expertise in web development, mobile apps, and design
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "button-primary" : ""}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border card-hover animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 gap-3">
                  <Button
                    size="sm"
                    className="bg-white text-foreground hover:bg-white/90"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
