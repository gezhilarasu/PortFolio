import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Globe, Mail, Phone, MapPin, ExternalLink, Menu, X } from 'lucide-react';
import './main.css'
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const aiProjects = [
    {
      title: "YouTube Comment Analyzer",
      tech: "Python, TensorFlow, Streamlit, NLP, LSTM",
      year: "2025",
      description: "Developed a website for analyzing YouTube comments for sentiment and emotions. Built separate LSTM models for each task, integrated via a user-friendly Streamlit frontend. Data processed from YouTube API and enabled CSV/Excel export of analysis results.",
      github: "https://github.com/gezhilarasu/youTube-Comment-Analyser",
      live: "https://commentinsight.streamlit.app/"
    },
    {
      title: "Intelligent Vehicle Entry-Exit Monitoring System",
      tech: "Python, OpenCV, YOLOv8, NumPy, Matplotlib",
      year: "2025",
      description: "Built an AI-driven system to detect and track vehicles from video streams using YOLOv8 object detection. Implemented directional counting logic to monitor with real-time bounding box visualization. Processed video feeds with OpenCV and generated annotated output videos.",
      github: "https://github.com/gezhilarasu/Vision-Based-Vehicle-Entry-Exit-Monitoring-System",
      live: "https://vehiclecount.streamlit.app/"
    },
    {
      title: "AI-Powered Document Query System using RAG",
      tech: "Python, Streamlit, FAISS, Sentence-Transformers, LangChain, Gemini API",
      year: "2025",
      description: "Developed an intelligent document query system using Retrieval-Augmented Generation (RAG). Implemented PDF text extraction, vector embeddings with FAISS indexing, and integrated Google Gemini API for accurate document-based question answering with semantic search capabilities.",
      github: "https://github.com/gezhilarasu/AI-Powered-Document-Query-System-using-RAG",
      live: "#"
    },
    {
      title: "AI WordFixer",
      tech: "Flask, Streamlit, NLTK, Levenshtein, Joblib",
      year: "2025",
      description: "Built an intelligent word correction system using natural language processing. Implemented edit distance algorithms with Levenshtein for spell checking and correction. Features include real-time word suggestions, context-aware corrections, and persistent data handling for improved accuracy.",
      github: "https://github.com/gezhilarasu/AI-WordFixer",
      live: "#"
    }
  ];

  const fullStackProjects = [
    {
      title: "SQL Query Generator",
      tech: "Python, Flask, React.js, Gemini API, MySQL",
      description: "Built a full-stack AI-powered SQL generator website that converts natural language queries into executable SQL. Users can connect their own MySQL DB and download query results in CSV/Excel format. Integrated Gemini LLMs for prompt-based query generation.",
      github: "https://github.com/gezhilarasu/sql-query-generator",
      live: "https://querycraft-sql.vercel.app"
    },
    {
      title: "BlogNest Website",
      tech: "MERN Stack: React.js, Node.js, REST API, MongoDB",
      description: "Developed a scalable blog platform with post creation, commenting, and interactive features. Implemented JWT authentication and user-specific actions like likes, favorites, and analytics. Enhanced engagement with responsive UI and performance-optimized API endpoints.",
      github: "https://github.com/gezhilarasu/blogNest-website",
      live: "https://blognest1.vercel.app"
    },
    {
      title: "Expense Tracker",
      tech: "MERN Stack: React.js, Node.js, REST API, MongoDB",
      description: "Developed a real-time expense tracking platform with category-based filtering and analytics. Implemented dashboards, reports, and alerts to enhance budgeting efficiency. Designed a mobile-responsive UI with seamless UX and persistent data handling.",
      github: "https://github.com/gezhilarasu/Expense_Tracker",
      live: "https://exptr.vercel.app"
    },
    {
  title: "Personal Portfolio Website",
  tech: "React.js, Vite, CSS3, HTML5, Vercel",
  description: "Designed and developed a fully responsive personal portfolio website to showcase my projects, skills, and contact information. Features a clean UI, smooth navigation, and optimized performance. Includes dedicated sections for About, Projects, Skills, and Contact, with a modern design and emoji-based favicon for a personal touch.",
  github: "https://github.com/gezhilarasu/PortFolio",
  live: "https://ezhilarasu24.vercel.app/"
},

    {
      title: "QuickMark Extension",
      tech: "JavaScript, Chrome Extension API, HTML/CSS",
      description: "Developed a YouTube bookmark extension that allows users to save and organize their favorite YouTube videos with timestamps. Features include quick access bookmarks, category organization, and seamless integration with YouTube's interface for enhanced user experience.",
      github: "https://github.com/gezhilarasu/QuickMark-Extension",
      live: "#"
    }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>G</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </div>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div class="home-container">
            <div class="home-content">
                <div class="home-text">
                    <div class="availability-badge">
                        <div class="status-dot"></div>
                        Available for new opportunities
                    </div>
                    
                    <h1 class="home-greeting">Hey, there</h1>
                    
                    <h2 class="home-name">I AM<br />EZHILARASU</h2>
                
                    <p class="home-description">
                        Specialized in Machine Learning, AI Development, and Full-Stack Web Development.
                    </p>
                </div>

                <div class="home-right">
                    <div class="home-image">
                        <img src="/IMG_20250812_133520MAGICCUTOUT.png" alt="Ezhilarasu" class="profile-img"></img>
                    </div>
                    
                    <div class="home-title">
                        AI & WEB<br />DEVELOPER
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Motivated and detail-oriented developer passionate about AI and full-stack web development. 
                Eager to apply my technical skills to solve real-world problems, continuously learn emerging 
                technologies, and contribute meaningfully to impactful projects.
              </p>
              
              <div className="education">
                <h3>Education </h3>
                <div className="education-item">
                  <h4>B.Tech in Artificial Intelligence and Machine Learning <span style={{ color: 'green' }}>Pursuing</span></h4>
                  <p>Kongu Engineering College, Erode | 2022 - 2026 | CGPA: 8.00</p>
                </div>

                <div className="education-item">
                  <h4>HSC <span style={{ color: 'green' }}>Completed</span></h4>
                  <p>I.V.L Matric Higher Secondary School, Dharmapuri | 2021 - 2022 | Percentage: 88.33%</p>
                </div>

                <div className="education-item">
                  <h4>SSLC <span style={{ color: 'green' }}>Completed</span></h4>
                  <p>I.V.L Matric Higher Secondary School, Dharmapuri | 2019 - 2020 | Percentage: 90%</p>
                </div>

              </div>


              <div className="experience">
                <h3>Experience</h3>
                <div className="experience-item">
                  <h4>AI Intern - Generative AI Consortium</h4>
                  <p>Nov 2024 - April 2025 | Remote</p>
                  <ul>
                    <li>Completed a 6-week internship under the Joint Tech Internship Community Program</li>
                    <li>Showcased strong capabilities in machine learning through theoretical knowledge</li>
                    <li>Recognized for consistent contributions and problem-solving skills in generative AI contexts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span>Python</span>
                <span>Java</span>
                <span>C</span>
                <span>SQL</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>AI/ML</h3>
              <div className="skill-tags">
                <span>Machine Learning</span>
                <span>Deep Learning</span>
                <span>NLP</span>
                <span>Scikit-learn</span>
                <span>TensorFlow</span>
                <span>NLTK</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skill-tags">
                <span>HTML</span>
                <span>Javascript</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>Rest API</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Databases/Tools</h3>
              <div className="skill-tags">
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Power BI</span>
                <span>GitHub</span>
                <span>PostMan</span>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          {/* AI/ML Projects */}
          <div className="project-category">
            <h3 className="category-title">
              <span className="category-icon">🤖</span>
              Artificial Intelligence & Machine Learning
            </h3>
            <div className="projects-grid">
              {aiProjects.map((project, index) => (
                <div key={`ai-${index}`} className="project-card">
                  <div className="project-header">
                    <h4>{project.title}</h4>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                      {project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="project-tech">{project.tech}</p>
                  <p className="project-description">{project.description}</p>
                  
                </div>
              ))}
            </div>
          </div>

          {/* Full-Stack Projects */}
          <div className="project-category">
            <h3 className="category-title">
              <span className="category-icon">💻</span>
              Full-Stack Development
            </h3>
            <div className="projects-grid">
              {fullStackProjects.map((project, index) => (
                <div key={`fs-${index}`} className="project-card">
                  <div className="project-header">
                    <h4>{project.title}</h4>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                      {project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="project-tech">{project.tech}</p>
                  <p className="project-description">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+91 9345714463</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>gezhilarasu24@gmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Tamil Nadu, India</span>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/gezhilarasu" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/gezhilarasu" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href="https://leetcode.com/gezhilarasu24" target="_blank" rel="noopener noreferrer">
                  <Globe size={24} />
                </a>
              </div>

            </div>
            
          </div>
          
        </div>
      </section>
      <section id="footer">
  <div className="container footer-container">
    <p className="footer-text">
      © {new Date().getFullYear()} Ezhilarasu G — All Rights Reserved.
    </p>
    <p className="footer-subtext">
      Designed and developed by Ezhilarasu G using React.js.
    </p>
    <p className="footer-message">
      Passionate about building interactive, user-friendly web applications and AI-powered solutions.
    </p>
    <p className="footer-thankyou">
      Thank you for visiting my portfolio. Have a wonderful day! 
    </p>
  </div>
</section>

    </div>
  );
};

export default Portfolio;