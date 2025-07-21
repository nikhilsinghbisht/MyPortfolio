

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { projectsData, skillsData, experienceData, educationData, achievementsData, socialLinks, SocialIcons, blogPosts, avatarUrl, aboutMeAvatarUrl, aboutMeText } from './constants';
import type { Experience, Education, Achievement, Theme, Skill } from './types';

const Section: React.FC<{ id: string; title: string; children: React.ReactNode; className?: string }> = ({ id, title, children, className = '' }) => (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
        <div className="container mx-auto px-6">
            <div className="animated-element animation-fadeInUp">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12 md:mb-16">
                    {title} <span className="text-primary-500">.</span>
                </h2>
            </div>
            {children}
        </div>
    </section>
);

const TimelineItem: React.FC<{ item: Experience | Education; style: React.CSSProperties }> = ({ item, style }) => (
    <div 
        className="relative pl-8 sm:pl-32 py-6 group last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-200 dark:after:bg-slate-700 after:border-4 after:box-content after:border-white dark:after:border-slate-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 transition-all duration-300 group-hover:after:bg-primary-500 group-hover:after:scale-125 animated-element animation-fadeInUp"
        style={style}
    >
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-primary-600 bg-primary-100 dark:bg-primary-900/50 dark:text-primary-300 rounded-full">{item.period}</time>
        
        <div className="flex items-center gap-4 mb-2">
            {('icon' in item && item.icon) && (
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md">
                    {item.icon}
                </div>
            )}
            <div className="flex-grow">
                <div className="text-xl font-bold text-slate-800 dark:text-white">{'role' in item ? item.role : item.degree}</div>
                <div className="text-slate-600 dark:text-slate-400">{'company' in item ? item.company : item.institution}</div>
            </div>
        </div>

        {'grade' in item ? (
            <div className="text-slate-500 dark:text-slate-500 sm:pl-16">{item.grade}</div>
        ) : (
             <ul className="list-disc list-inside text-slate-500 dark:text-slate-400 space-y-1 sm:pl-16">
                {(item as Experience).description.map((desc, i) => <li key={i}>{desc}</li>)}
            </ul>
        )}
    </div>
);

const SkillBar: React.FC<{ skill: Skill; style: React.CSSProperties }> = ({ skill, style }) => {
  return (
    <div className="animated-element animation-fadeInUp mb-7" style={style}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
            <div className="w-6 h-6 mr-3 text-slate-600 dark:text-slate-300">{skill.icon}</div>
            <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
        </div>
        <span className="text-sm font-bold text-primary-500 dark:text-primary-400">{skill.proficiency}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
        <div 
          className="skill-bar-fill bg-primary-500 h-2 rounded-full" 
          style={{ '--skill-level': `${skill.proficiency}%` } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('light');
    const [heroVisible, setHeroVisible] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.animated-element, .skill-bar-fill');
        elements.forEach((el) => {
            observer.observe(el);
        });
        
        return () => {
             elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    useEffect(() => {
        setTimeout(() => setHeroVisible(true), 100);
    }, []);

    return (
        <div className="text-slate-700 dark:text-slate-300 font-sans antialiased">
            <Header theme={theme} setTheme={setTheme} />
            
            <main>
                {/* Hero Section */}
                <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                    <div className="absolute inset-0 bg-white dark:bg-slate-900 -z-10">
                        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:opacity-30"></div>
                        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:opacity-30"></div>
                        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:opacity-30"></div>
                    </div>
                    <div className={`relative z-10 container mx-auto px-6 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <div className="animate-float">
                            <img src={avatarUrl} alt="Nikhil Singh Bisht" className="w-32 h-32 object-contain rounded-full mx-auto mb-6 shadow-2xl"/>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
                           Nikhil Singh Bisht
                        </h1>
                        <p className="text-lg md:text-xl font-medium text-primary-500 dark:text-primary-400 mb-6">
                           Software Engineer | Backend Developer | Web3 Enthusiast
                        </p>
                        <div className="flex justify-center items-center space-x-6 mb-8">
                           <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-transform duration-300 hover:scale-125">{SocialIcons.linkedin}</a>
                           <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-transform duration-300 hover:scale-125">{SocialIcons.github}</a>
                           <a href={socialLinks.email} className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-transform duration-300 hover:scale-125">{SocialIcons.email}</a>
                        </div>
                        <a href="https://drive.google.com/file/d/1S93-aSjnS1e0fVWlzLpQeWCjXB7wqdRh/view?usp=drive_link" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/40">
                           Request Resume
                        </a>
                    </div>
                </section>

                {/* About Section */}
                 <Section id="about" title="About Me" className="bg-slate-50 dark:bg-slate-900/50">
                    <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
                        <div className="md:col-span-2 animated-element animation-fadeInUp">
                            <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg shadow-xl backdrop-blur-sm">
                                <img src={aboutMeAvatarUrl} alt="A portrait of Nikhil Singh Bisht" className="rounded-lg w-full h-auto object-cover"/>
                            </div>
                        </div>
                        <div className="md:col-span-3 animated-element animation-fadeInUp text-left" style={{ animationDelay: '200ms' }}>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
                                Hi, I'm Nikhil! <span className="inline-block animate-wave">👋</span>
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed min-h-[180px] md:min-h-[144px]">
                                {aboutMeText}
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Skills Section */}
                <Section id="skills" title="Technical Proficiency">
                     <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {skillsData.map((skillCategory) => (
                            <div key={skillCategory.category} className="mb-6">
                                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-5 animated-element animation-fadeInUp">{skillCategory.category}</h3>
                                <div>
                                    {skillCategory.list.map((skill, index) => (
                                        <SkillBar 
                                            key={skill.name} 
                                            skill={skill}
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Experience & Education Section */}
                <Section id="experience" title="Career Journey" className="bg-slate-50 dark:bg-slate-900/50">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center animated-element animation-fadeInUp">Experience</h3>
                        {experienceData.map((item, index) => <TimelineItem key={index} item={item} style={{ animationDelay: `${index * 150}ms` }} />)}
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-16 mb-6 text-center animated-element animation-fadeInUp" style={{ animationDelay: '300ms' }}>Education</h3>
                        {educationData.map((item, index) => <TimelineItem key={index} item={item} style={{ animationDelay: `${(index + 2) * 150}ms` }} />)}
                    </div>
                </Section>


                {/* Projects Section */}
                <Section id="projects" title="Featured Projects">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project, index) => (
                            <ProjectCard 
                                key={index} 
                                project={project} 
                                style={{ animationDelay: `${index * 100}ms` }}
                                className="animated-element animation-fadeInUp"
                            />
                        ))}
                    </div>
                </Section>

                {/* Achievements Section */}
                <Section id="achievements" title="Achievements" className="bg-slate-50 dark:bg-slate-900/50">
                    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {achievementsData.map((achievement, index) => (
                             <div 
                                key={index} 
                                className="relative group animated-element animation-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white/70 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 flex items-start gap-5 transition-all duration-300 h-full">
                                    <div className="flex-shrink-0 text-primary-500 bg-primary-100 dark:bg-primary-900/50 rounded-full p-3">
                                        {achievement.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">{achievement.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">{achievement.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Blog Section */}
                <Section id="blog" title="From My Blog">
                     <div className="max-w-3xl mx-auto text-center">
                        <p className="text-slate-600 dark:text-slate-400 mb-8 animated-element animation-fadeInUp">I love to write about backend systems, automation, and my learning journeys. Here are some upcoming posts.</p>
                        <div className="space-y-4 text-left">
                            {blogPosts.map((post, index) => (
                                <a 
                                    key={index}
                                    href={post.link}
                                    className="block p-4 bg-white dark:bg-slate-800/50 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all animated-element animation-fadeInUp"
                                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                                >
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold text-slate-800 dark:text-white">{post.title}</h4>
                                        <span className="text-sm text-slate-500 dark:text-slate-400">{post.date}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </Section>
                
                {/* Contact Section */}
                <Section id="contact" title="Get In Touch" className="bg-slate-50 dark:bg-slate-900/50">
                     <div className="text-center max-w-xl mx-auto animated-element animation-fadeInUp">
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                            I'm currently seeking new opportunities and am open to collaboration. Feel free to reach out if you have a project in mind or just want to connect!
                        </p>
                        <a href={socialLinks.email} className="inline-block text-2xl font-semibold text-primary-500 hover:underline decoration-wavy underline-offset-4 transition-all hover:text-primary-600">
                            {socialLinks.email.replace('mailto:', '')}
                        </a>
                    </div>
                </Section>
            </main>

            <footer className="bg-slate-100 dark:bg-slate-900 py-8">
                <div className="container mx-auto px-6 text-center text-slate-500 dark:text-slate-400">
                    <div className="flex justify-center items-center space-x-6 mb-4">
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">{SocialIcons.linkedin}</a>
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">{SocialIcons.github}</a>
                        <a href={socialLinks.email} className="hover:text-primary-500 transition-colors">{SocialIcons.email}</a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Nikhil Singh Bisht. All Rights Reserved.</p>
                    <p className="text-sm mt-2">Designed & Built with ❤️ using React & Tailwind CSS.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;