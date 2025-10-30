import { Award, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certification {
  id: number;
  name: string;
  organization: string;
  date: string;
  icon: string;
  verifyUrl: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "AWS Certified Developer",
      organization: "Amazon Web Services",
      date: "October 2024",
      icon: "☁️",
      verifyUrl: "https://aws.amazon.com",
    },
    {
      id: 2,
      name: "Google Analytics Certified",
      organization: "Google",
      date: "August 2024",
      icon: "📊",
      verifyUrl: "https://google.com",
    },
    {
      id: 3,
      name: "React Advanced Certification",
      organization: "Meta",
      date: "June 2024",
      icon: "⚛️",
      verifyUrl: "https://meta.com",
    },
    {
      id: 4,
      name: "Professional Scrum Master",
      organization: "Scrum.org",
      date: "May 2024",
      icon: "🎯",
      verifyUrl: "https://scrum.org",
    },
    {
      id: 5,
      name: "Docker Certified Associate",
      organization: "Docker Inc.",
      date: "March 2024",
      icon: "🐳",
      verifyUrl: "https://docker.com",
    },
    {
      id: 6,
      name: "Best Intern Award 2023",
      organization: "TechCorp Inc.",
      date: "December 2023",
      icon: "🏆",
      verifyUrl: "https://example.com",
    },
    {
      id: 7,
      name: "UX Design Professional",
      organization: "Nielsen Norman Group",
      date: "November 2023",
      icon: "🎨",
      verifyUrl: "https://nngroup.com",
    },
    {
      id: 8,
      name: "MongoDB Certified Developer",
      organization: "MongoDB University",
      date: "September 2023",
      icon: "🍃",
      verifyUrl: "https://mongodb.com",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-[hsl(var(--stats-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Certifications & Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and recognitions demonstrating continuous learning and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-card rounded-xl p-6 border border-border card-hover animate-fadeIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className="text-5xl mb-2">{cert.icon}</div>

                {/* Certificate Name */}
                <h3 className="font-bold text-lg text-foreground">{cert.name}</h3>

                {/* Organization */}
                <p className="text-muted-foreground text-sm font-medium">
                  {cert.organization}
                </p>

                {/* Date */}
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  {cert.date}
                </p>

                {/* Verify Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto"
                  onClick={() => window.open(cert.verifyUrl, "_blank")}
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Verify
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
