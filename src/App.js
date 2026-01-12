import React, { useState } from 'react';
import { Menu, X, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';




export default function PersonalWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-50">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <div 
              className="bg-purple-500/30 backdrop-blur-sm border border-purple-400/50"
              style={{
                width: `${10 + Math.random() * 15}px`,
                height: `${10 + Math.random() * 15}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fall {
          animation: fall linear infinite;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
      
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20 animate-slideDown">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Harish Kandavell
          </h1>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-purple-400 transition-colors ${
                  activeSection === section ? 'text-purple-400' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize hover:text-purple-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl">
          <div className="mb-8 animate-fadeInUp">
<img 
  src="/1762746786523.jpg" 
  alt="Harish Kandavell"
  className="w-53 h-53 mx-auto rounded-full object-cover border-4 border-purple-500/50 animate-pulse-slow shadow-xl shadow-purple-500/50"
/>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fadeInUp delay-100 animate-gradient">
            Hello, I'm Harish Kandavell
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeInUp delay-200">
            Computing Student @ Queen's University | Web Developer | Toronto, Canada
          </p>
          <div className="flex justify-center space-x-4 animate-fadeInUp delay-300">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-500 hover:bg-purple-500/20 rounded-full transition-all hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-6">
              I'm a Queen's Honors Computing student passionate about technology and software development. 
              Based in Toronto, Canada, I love creating innovative solutions and building projects that make a difference.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Currently, I'm expanding my skills in web development and Python programming. I enjoy tackling challenging problems 
              and continuously learning new technologies to stay at the forefront of the computing field.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {['Web Development', 'Python', 'React', 'JavaScript'].map((skill, index) => (
                <div 
                  key={skill} 
                  className={`bg-purple-600/20 rounded-lg p-4 text-center border border-purple-500/30 hover:bg-purple-600/30 hover:scale-105 transition-all animate-fadeInUp delay-${(index + 1) * 100}`}
                >
                  <span className="font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">My Projects & Experience</h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-purple-400 animate-fadeInUp">Featured Project</h3>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fadeInUp delay-100">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center animate-gradient">
                <span className="text-4xl font-bold animate-float">Bubble Sort Visualizer</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Bubble Sorting Algorithm Visualizer</h3>
                <p className="text-gray-300 mb-4">
                  An interactive visualization tool that demonstrates how the bubble sort algorithm works. 
                  Built as part of CISC121 coursework, this project helps users understand sorting algorithms through visual representation.
                </p>
                <p className="text-gray-400 mb-4 text-sm">Technologies: Python, Algorithm Visualization</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Harish-Kan/CISC121-Final-Assignment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-all hover:scale-110"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-400 animate-fadeInUp">Experience</h3>
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 hover:shadow-xl animate-fadeInUp delay-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-slow">
                    <span className="text-xl font-bold">QH</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">Operations Officer</h4>
                    <p className="text-purple-400 mb-2">QHacks</p>
                    <p className="text-gray-400 text-sm mb-2">Sep 2025 - Present · 5 mos · Hybrid</p>
                    <p className="text-gray-300">Assisted with Outreach & Merch</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 hover:shadow-xl animate-fadeInUp delay-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-slow">
                    <span className="text-xl font-bold">QK</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">Software - Computer Vision</h4>
                    <p className="text-purple-400 mb-2">Queen's Knights Robotics Team</p>
                    <p className="text-gray-400 text-sm mb-2">Sep 2025 - Present · 5 mos</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 hover:shadow-xl animate-fadeInUp delay-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-slow">
                    <span className="text-xl font-bold">QA</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">Perception</h4>
                    <p className="text-purple-400 mb-2">Queen's AutoDrive Team</p>
                    <p className="text-gray-400 text-sm mb-2">Sep 2025 - Present · 5 mos</p>
                    <p className="text-gray-300">Localization, Mapping & Semantic Segmentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-8 text-center">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="mb-8 text-center space-y-2">
              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">Personal:</span>{' '}
                <a href="mailto:harishkan999@gmail.com" className="hover:text-purple-400 transition-colors">
                  harishkan999@gmail.com
                </a>
              </p>
              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">University:</span>{' '}
                <a href="mailto:harish.kandavell@queensu.ca" className="hover:text-purple-400 transition-colors">
                  harish.kandavell@queensu.ca
                </a>
              </p>
            </div>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:harishkan999@gmail.com" className="p-3 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-all hover:scale-110 hover:rotate-6" title="Personal Email">
                <Mail size={24} />
              </a>
              <a href="https://github.com/Harish-Kan" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-all hover:scale-110 hover:rotate-6" title="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/harish-kandavell/" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-all hover:scale-110 hover:rotate-6" title="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-semibold"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900/80 backdrop-blur-md border-t border-purple-500/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2026 Harish Kandavell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


