import React, { useState, useEffect } from 'react';
import { CarIcon } from './Icons';

interface NavLink {
    name: string;
    href: string;
}

interface HeaderProps {
    language: 'vi' | 'en';
    toggleLanguage: () => void;
    navLinks: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 text-3xl font-serif font-bold text-white hover:text-amber-400 transition">
              <CarIcon className="h-8 w-8 text-amber-400" />
              <span>American 3H LLC</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={toggleLanguage}
                className="border border-amber-500 text-amber-500 font-bold py-2 px-4 rounded-full text-sm hover:bg-amber-500 hover:text-gray-900 transition"
                aria-label="Change language"
              >
                {language === 'vi' ? 'EN' : 'VI'}
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800/50 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/95" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition"
              >
                {link.name}
              </a>
            ))}
             <button 
                onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                }}
                className="w-full text-left text-amber-500 hover:bg-gray-700 hover:text-amber-400 block px-3 py-3 rounded-md text-base font-bold transition"
                aria-label="Change language"
              >
                {language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
              </button>
          </div>
        </div>
      )}
    </header>
  );
};