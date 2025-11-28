import React, { useEffect, useRef } from 'react';
import { Phone, Mail, Github, Linkedin, Code, Layers, TerminalSquare } from 'lucide-react';
import * as Lucide from 'lucide-react'


const getGsap = () => window.gsap;
const getScrollTrigger = () => window.ScrollTrigger;


const loadGsap = () => {
  if (window.gsap && window.ScrollTrigger) return; 

  const gsapScript = document.createElement('script');
  gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
  document.head.appendChild(gsapScript);

  gsapScript.onload = () => {
    const stScript = document.createElement('script');
    stScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
    document.head.appendChild(stScript);
    
    stScript.onload = () => {
        if (window.gsap && window.ScrollTrigger) {
            window.gsap.registerPlugin(window.ScrollTrigger);
        }
    };
  };
};


const CONTACT_INFO = {
  email: "gautameshaan02@gmail.com",
  phone: "8506816103",
  github: "https://github.com/GautamEshaan",
  linkedin: "https://www.linkedin.com/in/eshaan-gautam/",
  profileImageUrl: "https://placehold.co/200x200/1e293b/06b6d4?text=EG", 
};

const PROJECTS = [
  {
    title: "DESIGN STUDIO (WEBPAGE)",
    tech: ["HTML", "CSS", "JS", "Locomotive", "GSAP"],
    description: "An interactive webpage developed to help businesses enhance their digital branding. Features integrated smooth scrolling and complex GSAP animations for a unique and engaging user experience, showcasing expertise in advanced web animation techniques.",
    color: "text-cyan-400",
    url: CONTACT_INFO.github, 
  },
  {
    title: "Notes App (FRONT-END)",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    description: "Built a fast and responsive Notes App using modern React and Vite. It includes core features like note creation, editing, and deletion, styled meticulously with Tailwind CSS for a clean UI and smooth, modern user experience.",
    color: "text-purple-400",
    url: CONTACT_INFO.github,
  },
  {
    title: "GYM MANAGEMENT WEBSITE",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "A dynamic, front-end gym website developed with interactive features to enhance user engagement. Implemented smooth navigation transitions and a fully responsive design, ensuring optimal viewing and usability across all device types.",
    color: "text-fuchsia-400",
    url: CONTACT_INFO.github, 
  },
  
  {
    title: "GALLERY PROJECT",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    description: "A responsive image gallery project demonstrating modern layout techniques and a smooth browsing experience for large collections of media.",
    color: "text-yellow-400",
    url: "https://github.com/GautamEshaan/Gallery-Project-",
  },
];

const SKILLS = [
  { category: "Language", items: ["Java", "JavaScript"] },
  
  { category: "Web Technologies", items: ["HTML", "CSS", "React.js", "Tailwind CSS"] },
  { category: "Database", items: ["MySQL"] },
  { category: "Tools", items: ["Git-Github", "Vite", "VS Code"] },
];

const useGsapAnimation = (animationCallback) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const gsapInstance = getGsap();
    const ScrollTriggerInstance = getScrollTrigger();

    if (!gsapInstance || !ScrollTriggerInstance) {
        
        const checkGsap = setInterval(() => {
            if (getGsap() && getScrollTrigger()) {
                clearInterval(checkGsap);
                initializeAnimation(getGsap(), getScrollTrigger());
            }
        }, 100);
        return () => clearInterval(checkGsap);
    }
    
    initializeAnimation(gsapInstance, ScrollTriggerInstance);

    function initializeAnimation(gsap, ScrollTrigger) {
        const context = gsap.context(() => {
            animationCallback(gsap, ScrollTrigger);
        }, elementRef);

        return () => context.revert();
    }

  }, [animationCallback]);

  return elementRef;
};


// --- Components ---

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-md bg-gray-950/80 shadow-2xl shadow-emerald-900/50">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-2xl font-extrabold text-cyan-400 tracking-widest font-mono">
        &lt;EG/&gt;
      </div>
      <nav className="hidden md:flex space-x-6 text-gray-300 font-mono">
        {['Home', 'Projects', 'Skills', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition duration-300 transform hover:scale-105">
            {`// ${item}`}
          </a>
        ))}
      </nav>
      
      <div className="md:hidden text-cyan-400">
        <TerminalSquare className='w-6 h-6'/>
      </div>
    </div>
  </header>
);

const Hero = () => {
  const animationCallback = (gsap) => {

    gsap.timeline()
      .fromTo(".hero-photo", 
        { opacity: 0, scale: 0.5, rotation: -90 }, 
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }
      )
      .fromTo(".hero-line-text", 
        { y: '100%', opacity: 0 }, 
        { y: '0%', opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" },
        "-=0.7" 
      )
      .fromTo(".hero-summary", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        "-=0.5"
      )
      .fromTo(".hero-links a", 
        { opacity: 0, x: -10 }, 
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }, 
        "-=0.4"
      );
  };
  
  const heroRef = useGsapAnimation(animationCallback);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="hero-section min-h-screen flex items-center justify-center text-center bg-gray-950 pt-20 relative overflow-hidden"
    >
        
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #1f2937 0px, #1f2937 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, #1f2937 0px, #1f2937 1px, transparent 1px, transparent 30px)`,
            backgroundSize: '30px 30px',
        }}></div>

      <div className="p-4 max-w-5xl z-10">
        
        
        <div className="mb-8 flex justify-center">
            <img
                src={CONTACT_INFO.profileImageUrl}
                alt="Eshaan Gautam Profile"
                className="hero-photo w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-cyan-500 shadow-xl shadow-cyan-600/50 opacity-0"
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/200x200/505050/FFFFFF?text=EG"; 
                }}
            />
        </div>

        <div className="overflow-hidden">
          <h1 className="hero-line-text text-5xl sm:text-8xl font-extrabold text-white leading-tight font-mono tracking-tighter">
            ESHAAN GAUTAM
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h2 className="hero-line-text text-2xl sm:text-5xl font-light text-cyan-400 mt-4 font-mono">
            &lt;Web Technologies Developer /&gt;
          </h2>
        </div>
        
        <p className="hero-summary text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl mb-12 opacity-0 font-sans">
          // Passionate about clean code, problem-solving, and building performant, visually appealing web solutions using **GSAP** for smooth animations.
        </p>

        <div className="hero-links flex justify-center space-x-4">
          <a 
            href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 border border-cyan-500 text-white rounded-lg transition duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30 font-mono hover:bg-cyan-900/50"
          >
            <Github size={20} className='text-cyan-400'/>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a 
            href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 border border-cyan-500 text-white rounded-lg transition duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30 font-mono hover:bg-cyan-900/50"
          >
            <Linkedin size={20} className='text-cyan-400'/>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a 
            href="#contact"
            className="flex items-center space-x-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-gray-900 font-semibold rounded-lg transition duration-300 transform hover:scale-105 shadow-xl shadow-cyan-600/50 font-mono"
          >
            <Mail size={20} />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  
  const animationCallback = (gsap, ScrollTrigger) => {
    
    gsap.fromTo(cardRef.current,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%", 
          toggleActions: "play none none none",
        }
      }
    );
  };

  useGsapAnimation(animationCallback);


  return (
    
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      ref={cardRef} 
      className="bg-gray-900 p-6 rounded-xl border border-gray-700 block transition duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 font-mono transform hover:-translate-y-1"
    >
      <div className="flex items-center space-x-3 mb-4 border-b border-gray-700 pb-2">
        <Layers className={project.color} size={30} />
        <h3 className={`text-2xl font-bold ${project.color}`}>{project.title}</h3>
      </div>

      <p className="text-gray-400 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech.map((t, i) => (
          <span key={i} className="text-xs font-medium px-3 py-1 bg-gray-700/50 text-cyan-300 border border-cyan-800 rounded-full shadow-inner shadow-cyan-900/50">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4 font-mono">
          <span className="text-cyan-400">01.</span> Projects &lt;/&gt;
        </h2>
        <p className="text-center text-gray-400 mb-16 font-mono">
          // Showcasing proficiency in Web Technologies development, animation (GSAP), and clean UI/UX design.
        </p>
        
      
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} /> 
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const animationCallback = (gsap, ScrollTrigger) => {

    gsap.fromTo(".skill-item", 
      { opacity: 0, scale: 0.8, x: -20 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );
  };
  
  const skillRef = useGsapAnimation(animationCallback);
  
  return (
    <section id="skills" ref={skillRef} className="skills-section py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4 font-mono">
          <span className="text-cyan-400">02.</span> Technical Stack
        </h2>
        <p className="text-center text-gray-400 mb-16 font-mono">
          // Core competencies and development tools.
        </p>

        <div className="skills-grid grid md:grid-cols-2 gap-8">
          {SKILLS.map((skill, index) => (
            <div key={index} className="bg-gray-950 p-6 rounded-xl border-t-2 border-cyan-600 shadow-xl shadow-cyan-900/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 pb-2 flex items-center space-x-2 font-mono">
                <Code size={24} className='text-cyan-600'/>
                <span>{`# ${skill.category}`}</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="skill-item inline-block px-4 py-2 bg-cyan-900/30 text-cyan-300 font-medium rounded-md shadow-lg shadow-cyan-900/50 border border-cyan-800 opacity-0 font-mono text-sm hover:bg-cyan-900/50 transition duration-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const ContactSection = () => {
  const animationCallback = (gsap, ScrollTrigger) => {
    
    gsap.fromTo(".contact-item", 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        }
      }
    );
  };
  
  const contactRef = useGsapAnimation(animationCallback);
  
  return (
    <section id="contact" ref={contactRef} className="contact-section py-20 bg-gray-950">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 font-mono">
          <span className="text-cyan-400">03.</span> Get Connected
        </h2>
        <p className="text-gray-400 mb-12 font-mono">
          // Ready for a discussion or collaboration. Ping me!
        </p>

        <div className="contact-grid flex flex-col space-y-6">
          <div className="contact-item opacity-0">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center justify-center p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-500 hover:bg-cyan-900/40 transition duration-300 font-mono">
              <Mail className="text-cyan-400 mr-4" size={24} />
              <span className="text-white text-lg">{CONTACT_INFO.email}</span>
            </a>
          </div>
          <div className="contact-item opacity-0">
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center justify-center p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-500 hover:bg-cyan-900/40 transition duration-300 font-mono">
              <Phone className="text-cyan-400 mr-4" size={24} />
              <span className="text-white text-lg">{CONTACT_INFO.phone}</span>
            </a>
          </div>
          <div className="contact-item opacity-0">
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-500 hover:bg-cyan-900/40 transition duration-300 font-mono">
              <Github className="text-cyan-400 mr-4" size={24} />
              <span className="text-white text-lg">GitHub Profile</span>
            </a>
          </div>
          <div className="contact-item opacity-0">
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-500 hover:bg-cyan-900/40 transition duration-300 font-mono">
              <Linkedin className="text-cyan-400 mr-4" size={24} />
              <span className="text-white text-lg">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 py-6 text-center text-gray-500 text-sm border-t border-cyan-900">
    <div className="max-w-7xl mx-auto px-4 font-mono">
        <p>&copy; {new Date().getFullYear()} Eshaan Gautam. &lt;BuiltWith/&gt; React & GSAP.</p>
        <p>// Code is poetry. Animations are performance.</p>
    </div>
  </footer>
);


export default function App() {
  
  useEffect(() => {
    loadGsap();
  }, []);

  return (
    
    <div className="min-h-screen bg-gray-950 text-white font-mono">

      
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}