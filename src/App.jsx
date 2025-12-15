import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Briefcase, Code, Cloud, Server, Database, Menu, X, Mail, Phone, MapPin, Linkedin, Github, Zap, TrendingUp, Cpu } from 'lucide-react';

// -- DATA CONSTANTS --
const WAI_OO_AUNG_DATA = {
    name: "Wai Oo Aung",
    title: "Senior Full Stack Developer",
    summary: "Senior Web Developer with 6+ years of experience developing robust web applications. Adept in NodeJs, NestJS, PHP, Python, and JavaScript, I translate client requirements into technical solutions. Proven track record in database management, cloud server integration, and performance optimization.",
    contact: {
        phone: "(+971) 528241776",
        email: "waiooaung.sea@gmail.com",
        linkedin: "https://www.linkedin.com/in/wai-oo-aung-31b409185",
        github: "https://github.com/waiooaung",
        location: "Sharjah, UAE",
    },
    skills: [
        { category: "Languages", icon: Code, items: ["PHP", "JavaScript", "Python", "TypeScript"] },
        { category: "Frameworks", icon: Cpu, items: ["Laravel", "Node.js (NestJS, Express.js)", "React.js", "Next.js", "Django"] },
        { category: "Databases", icon: Database, items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
        { category: "Cloud & DevSecOps", icon: Cloud, items: ["AWS (EC2, S3)", "Digital Ocean", "Docker", "Kubernetes", "Git/GitHub/GitLab"] },
        { category: "APIs & Servers", icon: Server, items: ["RESTful APIs", "GraphQL", "Nginx", "Apache"] },
    ],
    experience: [
        {
            title: "Full Stack Developer",
            company: "Go Smart AI Solution",
            location: "Dubai",
            period: "Feb 2025 - Present",
            description: [
                "Designed and built a currency exchange platform supporting flat and crypto currency exchange.",
                "Utilized NestJs, NextJs, and REST APIs to deliver high-quality software solutions.",
                "Managed cloud server integration and optimized database queries for enhanced performance.",
            ]
        },
        {
            title: "Team Lead",
            company: "APP.COM.MM Company Limited",
            location: "Myanmar",
            period: "May 2023 - Jun 2024",
            description: [
                "Led a team to deliver high-quality e-commerce and POS systems (Achievement: Promoted to Team Lead within a year).",
                "Designed and built a robust e-commerce platform, POS system, and customized software with advanced features.",
                "Utilized PHP (Laravel), NodeJs, JavaScript (jQuery), and REST APIs.",
            ]
        },
        {
            title: "Senior Web Developer",
            company: "ALJ Myanmar Company Limited",
            location: "Myanmar",
            period: "Sep 2022 - May 2023",
            description: [
                "Designed and built a robust e-commerce platform with advanced features like reporting, filtering, and API integrations.",
                "Utilized PHP (Laravel) and JavaScript (jQuery).",
                "Managed cloud server integration and optimized database queries.",
            ]
        },
    ],
    projects: [
        {
            name: "API for Trading Application",
            technologies: "Node.js, Express.js, MongoDB, AWS S3",
            link: "https://kucoinbtv.com",
            description: "Architected a high-performance trading platform featuring comprehensive Spot and Contract Trading, advanced User KYC, and a robust User Wallet system.",
        },
        {
            name: "Multi-Vendor E-commerce Platform",
            technologies: "PHP (Laravel 10), HTML, CSS (Bootstrap), JavaScript",
            link: "#",
            description: "Developed a feature-rich platform including integrated reporting, advanced filtering, notification services, and a fully responsive user interface.",
        },
        {
            name: "Royal Express Company Website",
            technologies: "PHP (Laravel), HTML, CSS (Bootstrap), JavaScript, jQuery",
            link: "https://www.royalx.net",
            description: "A fully responsive site with geolocation API integration, dynamic price calculations, and robust mailing services.",
        },
        {
            name: "Go-Go Travel Mobile App API",
            technologies: "PHP (Laravel 10), REST APIs",
            link: "#",
            description: "Focused on advanced reporting, filtering, and a notification system for a travel mobile application backend.",
        },
    ]
};

// -- COMPONENTS --

const Header = ({ name, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const accentColorClass = `text-teal-500 hover:text-teal-600`;

    return (
        <header className={`fixed top-0 left-0 right-0 bg-zinc-950/90 backdrop-blur-md shadow-2xl shadow-black/50 z-50 transition duration-300`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <a href="#hero" className={`text-2xl font-extrabold ${accentColorClass} transition duration-300 tracking-wider`}>
                    {name.split(' ')[0]} <span className="text-white">DEV</span>
                </a>
                <nav className="hidden md:flex space-x-8">
                    {links.map(({ id, label }) => (
                        <a key={id} href={`#${id}`} className={`text-zinc-300 hover:text-white font-medium transition duration-300 relative group`}>
                            {label}
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className={`text-zinc-300 hover:text-white focus:outline-none p-2 rounded-md transition duration-300`}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-zinc-900 shadow-lg border-t border-zinc-700">
                    <nav className="px-4 pt-2 pb-4 space-y-2">
                        {links.map(({ id, label }) => (
                            <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-teal-500 transition duration-150`}>
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

const Section = ({ id, title, children, className = '' }) => (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
        <h2 className="text-4xl font-extrabold text-white mb-10 text-center relative pb-3">
            {title}
            <span className={`block w-24 h-1 bg-teal-500 mx-auto mt-2 rounded-full shadow-lg shadow-teal-500/50`}></span>
        </h2>
        {children}
    </section>
);

const Hero = ({ data }) => {
    return (
        <div id="hero" className={`pt-40 pb-24 md:pt-48 md:pb-32 bg-linear-to-br from-zinc-950 to-zinc-900 min-h-screen flex items-center relative overflow-hidden`}>
             {/* Background Grid and Blur */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 120 120\'%3E%3Cpath fill=\'%23a1a1aa\' fill-opacity=\'0.1\' d=\'M120 0H0V120h120V0zM60 0v120M0 60h120\'/%3E%3C/svg%3E")',
                backgroundSize: '30px 30px'
            }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    {/* Text Content */}
                    <div className="md:col-span-8 text-white">
                        <p className={`text-xl text-teal-500 font-semibold mb-3 flex items-center tracking-wider`}>
                            <Zap className="w-5 h-5 mr-2" /> Welcome to my Portfolio
                        </p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
                            Hi, I'm <span className={`text-teal-500 block mt-1`}>{data.name}</span>
                        </h1>
                        <h2 className="text-3xl sm:text-4xl font-light text-zinc-300 mb-6 border-s-4 border-zinc-700 pl-4">
                            {data.title}
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                            {data.summary}
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#projects" className={`inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-xl shadow-2xl text-zinc-900 bg-teal-500 hover:bg-teal-600 transition duration-300 transform hover:scale-[1.05] focus:outline-none focus:ring-4 ring-teal-500/50 animate-pulse`}>
                                View Solutions <TrendingUp className="w-5 h-5 ml-2" />
                            </a>
                            <a href="#contact" className={`inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-xl border-2 border-teal-500 text-teal-500 bg-zinc-900 hover:bg-zinc-800 transition duration-300 transform hover:scale-[1.05] focus:outline-none focus:ring-4 ring-teal-500/50`}>
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    {/* Profile Links & Placeholder */}
                    <div className="md:col-span-4 flex flex-col items-center">
                        <div className={`w-64 h-64 bg-zinc-800/50 backdrop-blur-sm rounded-full shadow-2xl shadow-black/70 mb-8 border-4 border-teal-500/50 overflow-hidden`}>
                            <img
                                src="https://avatars.githubusercontent.com/u/61152025?v=4"
                                alt="Wai Oo Aung"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex space-x-6">
                            <SocialLink Icon={Linkedin} href={data.contact.linkedin} color="text-blue-500" />
                            <SocialLink Icon={Github} href={data.contact.github} color="text-zinc-300" />
                            <SocialLink Icon={Mail} href={`mailto:${data.contact.email}`} color="text-red-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SocialLink = ({ Icon, href, color }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full bg-zinc-800 shadow-lg shadow-black/50 hover:shadow-xl ${color} hover:text-white transition duration-300 transform hover:scale-110 border border-zinc-700`}>
        <Icon size={24} />
    </a>
);

const Skills = ({ data }) => (
    <Section id="skills" title="Technical Expertise" className={`bg-zinc-800`}>
        <p className="text-center text-zinc-400 mb-12 max-w-3xl mx-auto text-lg">
            A versatile full stack profile spanning multiple languages, modern frameworks, and DevOps tools, enabling end-to-end development of robust applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.skills.map((skill, index) => (
                <div key={index} className={`bg-zinc-800 p-6 rounded-2xl shadow-2xl shadow-black/50 hover:shadow-teal-500/10 transition duration-500 border border-zinc-700/50 hover:border-teal-500 transform hover:-translate-y-2`}>
                    <div className="flex items-center mb-4 border-b border-zinc-700 pb-3">
                        <skill.icon className={`w-8 h-8 text-teal-500 mr-3`} />
                        <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                    </div>
                    <ul className="space-y-2">
                        {skill.items.map((item, i) => (
                            <li key={i} className={`text-zinc-300 bg-zinc-700/50 px-3 py-1 rounded-lg text-sm font-medium transition duration-200 border border-zinc-700 hover:bg-teal-500/20 hover:text-teal-500`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
);

const Experience = ({ data }) => (
    <Section id="experience" title="Professional Journey" className={`bg-zinc-900`}>
        <ol className="relative border-s border-teal-500/50 ml-4 md:ml-0 max-w-4xl mx-auto">
            {data.experience.map((job, index) => (
                <li key={index} className="mb-12 ms-6">
                    <span className={`absolute flex items-center justify-center w-6 h-6 bg-teal-500/20 rounded-full -start-3 ring-8 ring-zinc-900 shadow-lg shadow-black/50`}>
                        <Briefcase className={`w-3 h-3 text-teal-500`} />
                    </span>
                    <div className="p-6 bg-zinc-800 rounded-xl shadow-2xl shadow-black/70 hover:shadow-teal-500/20 transition duration-500 border border-zinc-700 transform hover:scale-[1.01] hover:translate-x-1">
                        <div className="flex justify-between items-start flex-wrap mb-2">
                            <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                            <time className={`text-sm font-semibold text-teal-500`}>{job.period}</time>
                        </div>
                        <div className="text-lg font-medium text-zinc-300 mb-3">{job.company} | <span className="text-zinc-400">{job.location}</span></div>
                        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
                            {job.description.map((desc, i) => (
                                <li key={i} className="text-sm">{desc}</li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ol>
        <div className="mt-12 text-center">
            <p className="text-zinc-500 italic">6+ years of professional experience driving digital solutions.</p>
        </div>
    </Section>
);

const Projects = ({ data }) => (
    <Section id="projects" title="Featured Projects" className={`bg-zinc-800`}>
        <p className="text-center text-zinc-400 mb-12 max-w-3xl mx-auto text-lg">
            Showcasing diverse expertise across trading platforms, e-commerce, and responsive web applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </Section>
);

const ProjectCard = ({ project }) => (
    <div className={`bg-zinc-800 rounded-2xl shadow-2xl shadow-black/70 overflow-hidden transition duration-500 border border-zinc-700/50 flex flex-col hover:border-teal-500 transform hover:scale-[1.02]`}>
        <div className="p-6 grow">
            <h3 className={`text-xl font-bold text-teal-500 mb-3`}>{project.name}</h3>
            <p className="text-zinc-400 mb-4 grow text-sm">{project.description}</p>
        </div>
        <div className="p-6 pt-0 border-t border-zinc-700">
            <p className="text-sm font-medium text-zinc-500 mb-3">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.split(',').map((tech, i) => (
                    <span key={i} className={`bg-zinc-700 text-zinc-200 text-xs font-semibold px-3 py-1 rounded-full border border-zinc-600`}>{tech.trim()}</span>
                ))}
            </div>
            {project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`text-teal-500 hover:text-white font-semibold flex items-center transition duration-300 group`}>
                    View Live Project
                    <svg className={`w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
            )}
        </div>
    </div>
);

const Contact = ({ data }) => (
    <Section id="contact" title="Let's Connect" className={`bg-zinc-900`}>
        <div className={`bg-zinc-800 p-8 rounded-2xl shadow-2xl shadow-black/70 max-w-4xl mx-auto border border-zinc-700`}>
            <p className="text-center text-xl text-zinc-300 mb-10">
                I am actively seeking new opportunities and challenges. Feel free to reach out to discuss potential projects or roles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <ContactItem Icon={Mail} text={data.contact.email} href={`mailto:${data.contact.email}`} />
                <ContactItem Icon={Phone} text={data.contact.phone} href={`tel:${data.contact.phone.replace(/[\s\(\)]/g, '')}`} />
                <ContactItem Icon={MapPin} text={data.contact.location} />
            </div>
            <div className="mt-10 flex justify-center space-x-6">
                <SocialLink Icon={Linkedin} href={data.contact.linkedin} color="text-blue-500" />
                <SocialLink Icon={Github} href={data.contact.github} color="text-zinc-300" />
            </div>
        </div>
    </Section>
);

const ContactItem = ({ Icon, text, href }) => (
    <div className={`flex flex-col items-center p-4 bg-zinc-900 rounded-xl shadow-lg shadow-black/50 hover:shadow-teal-500/10 transition duration-300 border border-zinc-700`}>
        <Icon className={`w-8 h-8 text-teal-500 mb-3`} />
        {href ? (
            <a href={href} className={`text-lg font-medium text-white hover:text-teal-500 transition duration-300`}>{text}</a>
        ) : (
            <p className="text-lg font-medium text-white">{text}</p>
        )}
    </div>
);

const Footer = ({ name }) => (
    <footer className="bg-zinc-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-zinc-500 text-sm">
                &copy; {new Date().getFullYear()} {name}. All rights reserved.
            </p>
            <p className="text-zinc-600 text-xs mt-2">
                Designed & Developed with React and Tailwind CSS.
            </p>
        </div>
    </footer>
);


// -- MAIN APP COMPONENT --
const App = () => {
    const navLinks = useMemo(() => [
        { id: 'hero', label: 'Home' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ], []);

    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the scroll-to-top button
    const toggleVisibility = useCallback(() => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [toggleVisibility]);


    return (
        <div className={`min-h-screen bg-zinc-900 font-sans text-white antialiased`}>
            {/* Tailwind CSS Script for CDN */}
            <script src="https://cdn.tailwindcss.com"></script>
            <style>{`
                /* Configure Tailwind to recognize custom colors (needed for dynamic classes) */
                /* WARNING: This block is necessary for JIT-like compilation in the browser environment */
                /* DO NOT remove these classes from the CSS properties here or the design will break */
                
                html { scroll-behavior: smooth; }
                body { font-family: 'Inter', sans-serif; }
                
                /* Force-include dynamic classes for Tailwind JIT emulation */
                .text-teal-500, .hover:text-teal-600, .bg-teal-500, .hover:bg-teal-600, .ring-teal-500\/50, .shadow-teal-500\/10, .shadow-teal-500\/20, .border-teal-500 {
                    color: #14b8a6; /* teal-500 */
                    background-color: #14b8a6; /* teal-500 */
                }
                .text-zinc-900 { color: #18181b; }
                .bg-zinc-950 { background-color: #09090b; }
                .bg-zinc-900 { background-color: #18181b; }
                .bg-zinc-800 { background-color: #27272a; }
                .text-zinc-300 { color: #d4d4d8; }
                .text-zinc-400 { color: #a1a1aa; }
                .bg-zinc-700\/50:hover { background-color: rgba(20, 184, 166, 0.2); }
                .text-teal-500:hover { color: #0d9488; } /* teal-600 */

            `}</style>

            <Header name={WAI_OO_AUNG_DATA.name} links={navLinks} />

            <main>
                <Hero data={WAI_OO_AUNG_DATA} />
                <Skills data={WAI_OO_AUNG_DATA} />
                <Experience data={WAI_OO_AUNG_DATA} />
                <Projects data={WAI_OO_AUNG_DATA} />
                <Contact data={WAI_OO_AUNG_DATA} />
            </main>

            <Footer name={WAI_OO_AUNG_DATA.name} />

            {/* Scroll-to-Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-6 right-6 p-3 bg-teal-500 text-white rounded-full shadow-lg shadow-black/50 hover:bg-teal-600 transition duration-300 focus:outline-none z-50 transform hover:scale-110`}
                    aria-label="Scroll to top"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                </button>
            )}
        </div>
    );
};

export default App;