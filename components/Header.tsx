import React, { useState, useEffect } from 'react';
import type { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      )}
    </button>
  );
};


interface HeaderProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-slate-800 dark:text-white">
          Nikhil Singh Bisht
          <span className="text-primary-500">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center">
            <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;