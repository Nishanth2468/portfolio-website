import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, url: "https://github.com", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fadeIn">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all peer"
                  placeholder=" "
                />
                <label
                  className={`floating-label ${
                    formData.name ? "floating-label-active" : ""
                  }`}
                >
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all peer"
                  placeholder=" "
                />
                <label
                  className={`floating-label ${
                    formData.email ? "floating-label-active" : ""
                  }`}
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all peer"
                  placeholder=" "
                />
                <label
                  className={`floating-label ${
                    formData.subject ? "floating-label-active" : ""
                  }`}
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all peer resize-none"
                  placeholder=" "
                />
                <label
                  className={`floating-label ${
                    formData.message ? "floating-label-active" : ""
                  }`}
                >
                  Message
                </label>
              </div>

              <Button
                type="submit"
                className="w-full button-primary py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:nishanth.thakklapally@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    nishanth.thakklapally@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 8919974353</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">India Telangana</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-semibold mb-4">Connect on Social Media</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-full border border-border hover:border-primary hover:text-primary transition-all card-hover"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
