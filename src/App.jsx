import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Code, Cloud, Server, Database, Menu, X, Mail, Phone, MapPin, Linkedin, Github, Brain, Sparkles, Layers, Plug, ArrowRight, ArrowUp } from 'lucide-react';
import profilePhoto from './assets/profile-bw.jpg';

// -- DATA CONSTANTS --
const WAI_OO_AUNG_DATA = {
    name: "Wai Oo Aung",
    title: "Senior Backend Developer",
    tagline: "I design and build APIs, SaaS platforms and AI-powered systems that scale. Backend first, comfortable across the full stack.",
    summary: "Senior Backend Developer with 6+ years of experience designing, building and scaling web platforms, APIs and cloud-hosted business systems. Expert in Node.js (NestJS, Express) and PHP (Laravel) with strong PostgreSQL, MySQL, MongoDB and Redis design. I've built multi-tenant SaaS products, POS and inventory engines, an AI-powered CRM and a currency exchange platform, and I'm comfortable shipping across the full stack.",
    contact: {
        phone: "(+971) 55 241 7780",
        email: "waiooaung.sea@gmail.com",
        linkedin: "https://www.linkedin.com/in/wai-oo-aung-31b409185",
        github: "https://github.com/waiooaung",
        location: "Al Nahda, Dubai, UAE",
    },
    skills: [
        { category: "Backend", icon: Server, items: ["Node.js (NestJS, Express.js, Fastify)", "TypeScript", "PHP (Laravel, Core PHP)", "Python (Django)"] },
        { category: "AI & LLMs", icon: Brain, items: ["OpenAI & Anthropic Claude APIs (prompt design, tool calling)", "RAG with LangChain / LlamaIndex", "Vector DBs (pgvector, Pinecone, Qdrant)", "AI Agents & MCP", "n8n"] },
        { category: "AI Dev Tools", icon: Sparkles, items: ["GitHub Copilot", "Cursor", "Claude Code"] },
        { category: "Architecture", icon: Layers, items: ["SaaS & Multi-Tenant Systems", "RESTful & GraphQL APIs", "Microservices", "Clean Code & MVC"] },
        { category: "Databases & Caching", icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Schema design, indexing & query tuning"] },
        { category: "Cloud & DevOps", icon: Cloud, items: ["AWS (EC2, S3)", "DigitalOcean", "Docker", "Nginx, PM2 & Linux", "GitHub Actions CI/CD"] },
        { category: "Integrations", icon: Plug, items: ["Payment Gateways", "POS", "RBAC / Access Control", "Push Notifications", "CRM / HR Modules", "OpenAI & Messaging APIs"] },
        { category: "Frontend", icon: Code, items: ["Next.js", "React.js", "React Native", "Vue.js", "Tailwind CSS"] },
    ],
    experience: [
        {
            title: "Full Stack Developer",
            company: "Go Smart AI Solution",
            location: "Dubai",
            period: "Feb 2025 - Present",
            description: [
                "Designed and built a currency exchange platform supporting fiat and cryptocurrency exchange, covering both frontend and backend.",
                "Developed scalable REST APIs and web applications with NestJS and Next.js, applying clean, modular architecture.",
                "Built an AI-powered omnichannel CRM integrating WhatsApp, Messenger and Instagram with OpenAI.",
                "Set up and maintained cloud hosting environments and optimised database queries for performance.",
            ]
        },
        {
            title: "Team Lead (Backend)",
            company: "APP.COM.MM Company Limited",
            location: "Myanmar",
            period: "May 2023 - Jun 2024",
            description: [
                "Led a team of developers in the planning and delivery of an e-commerce platform, POS system and custom business software (promoted to Team Lead within a year of joining).",
                "Developed backend modules and APIs with PHP (Laravel), Node.js and REST, including reporting, filtering and third-party integrations.",
                "Configured and maintained web servers and cloud hosting, and optimised MySQL queries for performance.",
                "Conducted code reviews, enforced Clean Code standards and documented solutions for quality assurance.",
            ]
        },
        {
            title: "Senior Web Developer",
            company: "ALJ Myanmar Company Limited",
            location: "Myanmar",
            period: "Sep 2022 - May 2023",
            description: [
                "Designed and built a robust e-commerce platform in PHP (Laravel) with advanced reporting, filtering and API integrations.",
                "Built responsive frontend interfaces with HTML5, CSS3 and JavaScript (jQuery).",
                "Managed cloud server setup and deployments, and optimised database queries for performance.",
            ]
        },
        {
            title: "Web Developer",
            company: "Royal Express Company Limited",
            location: "Myanmar",
            period: "Mar 2020 - Sep 2022",
            description: [
                "Developed and maintained multiple web applications using PHP (Laravel), HTML, CSS (Bootstrap) and JavaScript.",
                "Implemented role-based access control, geolocation APIs and integrated mailing services.",
                "Enhanced existing web projects with a focus on responsive design and performance optimisation.",
            ]
        },
        {
            title: "Freelance Web Developer",
            company: "Self-employed",
            location: "Myanmar",
            period: "Jan 2019 - Mar 2020",
            description: [
                "Developed and maintained websites and web applications for clients using PHP (Laravel), HTML, CSS (Bootstrap) and JavaScript.",
                "Handled hosting setup, deployment and ongoing maintenance for client projects.",
            ]
        },
    ],
    projects: [
        {
            name: "Stablewire: P2P Currency Exchange",
            technologies: "NestJS, PostgreSQL, Next.js, React Native",
            link: "#",
            description: "Designed the full-stack architecture, database models and backend endpoints for a peer-to-peer fiat and crypto exchange, with secure authentication and real-time transaction tracking.",
        },
        {
            name: "GoSmartAI: AI-Powered Omnichannel CRM",
            technologies: "NestJS, Next.js, PostgreSQL, OpenAI",
            link: "#",
            description: "Integrated WhatsApp Business, Facebook Messenger and Instagram DM with LLMs for automated customer support, lead qualification, real-time message syncing, smart agent escalation and automated analytics.",
        },
        {
            name: "Enterprise POS & Inventory System",
            technologies: "PHP (Laravel), Node.js, MySQL, REST APIs",
            link: "#",
            description: "End-to-end POS with real-time inventory updates, automated sales summaries, multi-tier access control and cashier/terminal workflows, integrated with the company's e-commerce platform.",
        },
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
    ],
    education: [
        { degree: "B.Sc. in Computer Science (In Progress)", school: "University of the People", period: "" },
        { degree: "B.Sc. (Hons) in Geology", school: "Dagon University, Yangon, Myanmar", period: "" },
        { degree: "Professional Web Developer Certificate", school: "Fairway Technology, Yangon, Myanmar", period: "Oct 2019 - Dec 2019" },
        { degree: "Programming Basic Certificate", school: "Fairway Technology, Yangon, Myanmar", period: "Jun 2019 - Aug 2019" },
    ],
};


// -- COMPONENTS --

// Fades an element up when it scrolls into view. Content stays visible if JS
// or IntersectionObserver is unavailable, and motion is skipped for reduced-motion users.
const useReveal = () => {
    useEffect(() => {
        const els = document.querySelectorAll('[data-reveal]');
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce || !('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        els.forEach((el) => {
            // Only hide what is still below the fold, so the first screen never flashes.
            if (el.getBoundingClientRect().top > window.innerHeight) {
                el.classList.add('reveal');
                observer.observe(el);
            }
        });
        return () => observer.disconnect();
    }, []);
};

// Each letter rises out of a mask, one after another.
const SplitText = ({ text }) => (
    <span aria-hidden="true" className="block">
        {text.split(' ').map((word, w, words) => (
            <span key={w} className="inline-block overflow-hidden align-bottom pb-[0.08em]">
                {[...word].map((ch, c) => {
                    const index = words.slice(0, w).join('').length + c;
                    return (
                        <span key={c} className="inline-block animate-letter-rise" style={{ animationDelay: `${150 + index * 45}ms` }}>{ch}</span>
                    );
                })}
                {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
            </span>
        ))}
    </span>
);

const prefersFinePointer = () =>
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// A small dot that follows the pointer, drawing a thin cream line behind it
// that fades and tapers away. The dot grows over links and buttons.
const TRAIL_LIFETIME = 450; // ms a point stays on the trail

const Cursor = () => {
    const canvasRef = useRef(null);
    const dotRef = useRef(null);
    const [enabled] = useState(prefersFinePointer);
    const [state, setState] = useState({ hover: false, hidden: true, down: false });

    useEffect(() => {
        if (!enabled) return;
        document.documentElement.classList.add('has-custom-cursor');
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const points = [];
        const pos = { x: -100, y: -100 };
        let frame;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();

        const onMove = (e) => {
            pos.x = e.clientX;
            pos.y = e.clientY;
            points.push({ x: e.clientX, y: e.clientY, t: performance.now() });
            const hover = !!e.target.closest('a, button');
            setState((prev) => (prev.hover === hover && !prev.hidden ? prev : { ...prev, hover, hidden: false }));
        };
        const onLeave = () => {
            points.length = 0;
            setState((prev) => ({ ...prev, hidden: true }));
        };
        const onDown = () => setState((prev) => ({ ...prev, down: true }));
        const onUp = () => setState((prev) => ({ ...prev, down: false }));

        const tick = () => {
            const now = performance.now();
            while (points.length && now - points[0].t > TRAIL_LIFETIME) points.shift();

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            for (let i = 1; i < points.length; i++) {
                const life = 1 - (now - points[i].t) / TRAIL_LIFETIME;
                ctx.strokeStyle = `rgba(232, 228, 220, ${life * 0.85})`;
                ctx.lineWidth = 0.5 + life * 2;
                ctx.beginPath();
                ctx.moveTo(points[i - 1].x, points[i - 1].y);
                ctx.lineTo(points[i].x, points[i].y);
                ctx.stroke();
            }

            if (dotRef.current) dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseleave', onLeave);
        window.addEventListener('mousedown', onDown);
        window.addEventListener('mouseup', onUp);
        return () => {
            cancelAnimationFrame(frame);
            document.documentElement.classList.remove('has-custom-cursor');
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
            window.removeEventListener('mousedown', onDown);
            window.removeEventListener('mouseup', onUp);
        };
    }, [enabled]);

    if (!enabled) return null;

    const dotSize = state.hover ? 'w-4 h-4 bg-cream/90' : 'w-2 h-2 bg-cream';
    return (
        <div aria-hidden="true" className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300 ${state.hidden ? 'opacity-0' : 'opacity-100'}`}>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            <div ref={dotRef} className="absolute top-0 left-0">
                <div className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out ${dotSize} ${state.down ? 'scale-75' : 'scale-100'}`} />
            </div>
        </div>
    );
};

// Buttons marked data-magnetic lean toward the pointer when it comes close.
const useMagnetic = () => {
    useEffect(() => {
        if (!prefersFinePointer()) return;
        const els = [...document.querySelectorAll('[data-magnetic]')];
        const onMove = (e) => {
            els.forEach((el) => {
                const r = el.getBoundingClientRect();
                const dx = e.clientX - (r.left + r.width / 2);
                const dy = e.clientY - (r.top + r.height / 2);
                const near = Math.hypot(dx, dy) < 80;
                el.style.transform = near ? `translate(${dx * 0.3}px, ${dy * 0.3}px)` : '';
            });
        };
        window.addEventListener('mousemove', onMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMove);
    }, []);
};

const Header = ({ name, links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#hero" className="font-serif text-2xl text-cream tracking-wide">{name}</a>
                <nav className="hidden md:flex gap-10">
                    {links.map(({ id, label }) => (
                        <a key={id} href={`#${id}`} className="text-xs uppercase tracking-[0.2em] text-cream/60 hover:text-cream transition-colors duration-300">
                            {label}
                        </a>
                    ))}
                </nav>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cream/80 hover:text-cream p-2" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
                    {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
                </button>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-ink border-t border-line px-6 py-4 flex flex-col">
                    {links.map(({ id, label }) => (
                        <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)} className="py-3 text-sm uppercase tracking-[0.2em] text-cream/70 hover:text-cream">
                            {label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

const Section = ({ id, eyebrow, title, children }) => (
    <section id={id} className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div data-reveal className="mb-14 md:mb-20">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/50 mb-4">{eyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">{title}</h2>
        </div>
        {children}
    </section>
);

const RoundArrow = ({ href, label, external = false }) => (
    <a
        href={href}
        aria-label={label}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        data-magnetic
        className="inline-flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-cream text-ink hover:bg-white transition-[background-color,transform] duration-300 ease-out"
    >
        <ArrowRight size={18} strokeWidth={1.5} />
    </a>
);

const Hero = ({ data }) => (
    <section id="hero" className="max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="grid md:grid-cols-12 gap-14 md:gap-10 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
                <p className="text-xs uppercase tracking-[0.25em] text-cream/50 mb-6 animate-fade-up">{data.title} · {data.contact.location.split(', ').slice(-2).join(', ')}</p>
                <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl text-cream leading-[1.05] mb-8" aria-label={data.name}>
                    <SplitText text={data.name} />
                </h1>
                <p className="text-lg md:text-xl text-cream/70 font-light leading-relaxed max-w-xl mb-12 animate-fade-up [animation-delay:700ms]">
                    {data.tagline}
                </p>
                <div className="flex items-center gap-8 animate-fade-up [animation-delay:850ms]">
                    <div className="flex items-center gap-4">
                        <RoundArrow href="#projects" label="View projects" />
                        <span className="text-sm text-cream/80">View my work</span>
                    </div>
                    <a href="#contact" className="text-sm text-cream/60 hover:text-cream border-b border-cream/30 hover:border-cream pb-1 transition-colors duration-300">
                        Get in touch
                    </a>
                </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2 animate-fade-up [animation-delay:200ms]">
                <div className="group mx-auto max-w-[15rem] md:max-w-[19rem] rounded-[2rem] bg-panel p-3 shadow-2xl shadow-black/40">
                    <div className="rounded-[1.5rem] bg-ink overflow-hidden aspect-[4/5] animate-photo-reveal [animation-delay:300ms]">
                        <img src={profilePhoto} alt={data.name} className="w-full h-full object-cover object-top grayscale scale-105 group-hover:scale-100 transition-transform duration-[1200ms] ease-out" />
                    </div>
                    <div className="px-3 pt-5 pb-3 flex items-center justify-between gap-4">
                        <div>
                            <p className="font-serif text-xl text-cream">6+ years</p>
                            <p className="text-xs text-cream/50 mt-1">Node.js · NestJS · Laravel</p>
                        </div>
                        <div className="flex gap-2">
                            <IconLink Icon={Linkedin} href={data.contact.linkedin} label="LinkedIn" />
                            <IconLink Icon={Github} href={data.contact.github} label="GitHub" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const IconLink = ({ Icon, href, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full border border-line text-cream/70 hover:text-cream hover:border-cream/60 flex items-center justify-center transition-colors duration-300">
        <Icon size={16} strokeWidth={1.5} />
    </a>
);

const About = ({ data }) => (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-line">
        <p data-reveal className="font-serif text-2xl md:text-4xl text-cream/90 leading-snug max-w-4xl">
            {data.summary}
        </p>
    </section>
);

const Skills = ({ data }) => (
    <Section id="skills" eyebrow="What I work with" title="Skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.skills.map((skill, i) => (
                <div key={skill.category} data-reveal style={{ '--reveal-delay': `${(i % 4) * 90}ms` }} className="bg-panel rounded-2xl p-6 hover:bg-panel-hover transition-colors duration-300">
                    <skill.icon size={20} strokeWidth={1.25} className="text-cream/60 mb-6" />
                    <h3 className="font-serif text-xl text-cream mb-4">{skill.category}</h3>
                    <ul className="space-y-2">
                        {skill.items.map((item) => (
                            <li key={item} className="text-sm text-cream/60 font-light leading-snug">{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
);

const Experience = ({ data }) => (
    <Section id="experience" eyebrow="Where I've worked" title="Experience">
        <ol className="border-t border-line">
            {data.experience.map((job) => (
                <li key={`${job.company}-${job.period}`} data-reveal className="grid md:grid-cols-12 gap-4 md:gap-10 py-10 border-b border-line">
                    <div className="md:col-span-3">
                        <time className="text-xs uppercase tracking-[0.2em] text-cream/50">{job.period}</time>
                    </div>
                    <div className="md:col-span-9">
                        <h3 className="font-serif text-2xl md:text-3xl text-cream">{job.title}</h3>
                        <p className="text-sm text-cream/60 mt-2 mb-5">{job.company} · {job.location}</p>
                        <ul className="space-y-3">
                            {job.description.map((desc) => (
                                <li key={desc} className="text-cream/70 font-light leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-px before:bg-cream/40">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ol>
    </Section>
);

const Projects = ({ data }) => (
    <Section id="projects" eyebrow="Selected work" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.projects.map((project, i) => (
                <article key={project.name} data-reveal style={{ '--reveal-delay': `${(i % 2) * 120}ms` }} className="group bg-panel rounded-2xl p-8 flex flex-col hover:bg-panel-hover transition-colors duration-300">
                    <h3 className="font-serif text-2xl text-cream mb-4">{project.name}</h3>
                    <p className="text-cream/65 font-light leading-relaxed mb-8 grow">{project.description}</p>
                    <div className="flex items-end justify-between gap-6">
                        <p className="text-xs uppercase tracking-[0.15em] text-cream/45 leading-loose">
                            {project.technologies.split(',').map((t) => t.trim()).join(' · ')}
                        </p>
                        {project.link !== '#' && <RoundArrow href={project.link} label={`Open ${project.name}`} external />}
                    </div>
                </article>
            ))}
        </div>
    </Section>
);

const Education = ({ data }) => (
    <Section id="education" eyebrow="Learning" title="Education">
        <div className="grid md:grid-cols-2 gap-x-10 border-t border-line">
            {data.education.map((item) => (
                <div key={item.degree} data-reveal className="py-8 border-b border-line">
                    <h3 className="font-serif text-xl text-cream">{item.degree}</h3>
                    <p className="text-sm text-cream/60 mt-2">{item.school}</p>
                    {item.period && <p className="text-xs uppercase tracking-[0.2em] text-cream/40 mt-3">{item.period}</p>}
                </div>
            ))}
        </div>
    </Section>
);

const Contact = ({ data }) => (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div data-reveal className="bg-panel rounded-[2rem] p-8 md:p-16">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/50 mb-6">Contact</p>
            <h2 className="font-serif text-4xl md:text-6xl text-cream mb-6 max-w-3xl">Let's build something together.</h2>
            <p className="text-cream/65 font-light text-lg max-w-2xl mb-12">
                I'm looking for backend and full stack roles in Dubai and the UAE. Feel free to reach out about a role or a project.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 border-t border-line pt-10">
                <ContactItem Icon={Mail} label="Email" text={data.contact.email} href={`mailto:${data.contact.email}`} />
                <ContactItem Icon={Phone} label="Phone" text={data.contact.phone} href={`tel:${data.contact.phone.replace(/[\s()]/g, '')}`} />
                <ContactItem Icon={MapPin} label="Location" text={data.contact.location} />
            </div>
        </div>
    </section>
);

const ContactItem = ({ Icon, label, text, href }) => (
    <div className="min-w-0">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/45 mb-3">
            <Icon size={14} strokeWidth={1.5} /> {label}
        </p>
        {href ? (
            <a href={href} className="text-cream hover:text-white break-words border-b border-transparent hover:border-cream/50 transition-colors duration-300">{text}</a>
        ) : (
            <p className="text-cream break-words">{text}</p>
        )}
    </div>
);

const Footer = ({ data }) => (
    <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-line flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p className="text-xs text-cream/40">&copy; {new Date().getFullYear()} {data.name}</p>
        <div className="flex gap-2">
            <IconLink Icon={Linkedin} href={data.contact.linkedin} label="LinkedIn" />
            <IconLink Icon={Github} href={data.contact.github} label="GitHub" />
            <IconLink Icon={Mail} href={`mailto:${data.contact.email}`} label="Email" />
        </div>
    </footer>
);


// -- MAIN APP COMPONENT --
const App = () => {
    const navLinks = useMemo(() => [
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ], []);

    const [showTop, setShowTop] = useState(false);
    const toggleTop = useCallback(() => setShowTop(window.scrollY > 600), []);

    useEffect(() => {
        window.addEventListener('scroll', toggleTop, { passive: true });
        return () => window.removeEventListener('scroll', toggleTop);
    }, [toggleTop]);

    useReveal();
    useMagnetic();

    return (
        <div className="min-h-screen bg-ink text-cream font-sans antialiased">
            <Cursor />
            <Header name={WAI_OO_AUNG_DATA.name} links={navLinks} />

            <main>
                <Hero data={WAI_OO_AUNG_DATA} />
                <About data={WAI_OO_AUNG_DATA} />
                <Skills data={WAI_OO_AUNG_DATA} />
                <Experience data={WAI_OO_AUNG_DATA} />
                <Projects data={WAI_OO_AUNG_DATA} />
                <Education data={WAI_OO_AUNG_DATA} />
                <Contact data={WAI_OO_AUNG_DATA} />
            </main>

            <Footer data={WAI_OO_AUNG_DATA} />

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
                className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-cream text-ink flex items-center justify-center shadow-lg shadow-black/40 hover:bg-white transition-all duration-500 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
                <ArrowUp size={18} strokeWidth={1.5} />
            </button>
        </div>
    );
};

export default App;
