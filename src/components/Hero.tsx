import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Hero() {
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

          {/* Subtitle */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#475569] mt-6 mb-8 animate-fadeInUp delay-200">
            Full Stack Developer & UI/UX Enthusiast
          </h2>

          {/* Description */}
          <p className="text-lg text-[#64748b] max-w-[700px] mx-auto leading-relaxed mb-12 animate-fadeInUp delay-300">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code, exceptional user experiences, and continuous
            learning.
          </p>

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
