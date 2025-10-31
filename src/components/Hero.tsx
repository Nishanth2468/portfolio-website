import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [subtitleText, setSubtitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);

  const subtitle = "Full Stack Developer & UI/UX Enthusiast";
  const description = "I create beautiful, responsive web applications with modern technologies. Passionate about clean code, exceptional user experiences, and continuous learning.";

  useEffect(() => {
    // Typewriter for subtitle
    let subtitleIndex = 0;
    const subtitleTimer = setInterval(() => {
      if (subtitleIndex <= subtitle.length) {
        setSubtitleText(subtitle.slice(0, subtitleIndex));
        subtitleIndex++;
      } else {
        clearInterval(subtitleTimer);
        setShowCursor1(false);
        setShowCursor2(true);
        
        // Start description typing after subtitle is complete
        setTimeout(() => {
          let descriptionIndex = 0;
          const descriptionTimer = setInterval(() => {
            if (descriptionIndex <= description.length) {
              setDescriptionText(description.slice(0, descriptionIndex));
              descriptionIndex++;
            } else {
              clearInterval(descriptionTimer);
              setShowCursor2(false);
            }
          }, 30); // Faster typing for description
        }, 200); // Small delay before starting description
      }
    }, 50); // Typing speed for subtitle

    return () => {
      clearInterval(subtitleTimer);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-container w-full py-20 md:py-32">
        <div className="text-center">
          {/* Status Badge */}
          <div className="flex justify-center mb-8 animate-fadeInDown">
            <div className="status-badge">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>Available for new opportunities</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fadeInUp delay-100">
            <span className="block text-[#1e293b]">Hi, I'm</span>
            <span className="name-gradient">Thakklapally.Nishanth</span>
          </h1>

          {/* Subtitle with Typewriter Effect */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#475569] mt-6 mb-8 min-h-[3.5rem] flex items-center justify-center">
            <span>{subtitleText}</span>
            {showCursor1 && (
              <span className="inline-block w-0.5 h-8 md:h-10 bg-blue-500 ml-1 animate-pulse"></span>
            )}
          </h2>

          {/* Description with Typewriter Effect */}
          <div className="text-lg text-[#64748b] max-w-[700px] mx-auto leading-relaxed mb-12 min-h-[6rem] flex items-start justify-center">
            <p>
              {descriptionText}
              {showCursor2 && (
                <span className="inline-block w-0.5 h-5 bg-blue-500 ml-1 animate-pulse"></span>
              )}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fadeInUp delay-400">
            <button
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          {/* Social Icons with Decorative Lines */}
          <div className="flex items-center justify-center gap-6 animate-fadeInUp delay-500">
            <div className="hidden sm:block w-20 h-px bg-gradient-to-r from-transparent to-[#e2e8f0]"></div>
            
            <a
              href="https://github.com/Nishanth2468"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a
              href="mailto:nishanth.thakklapally@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            
            <div className="hidden sm:block w-20 h-px bg-gradient-to-l from-transparent to-[#e2e8f0]"></div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}
