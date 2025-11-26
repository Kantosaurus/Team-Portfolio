'use client';

import { useState } from 'react';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from './ui/resizable-navbar';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: sectionId === 'hero' ? 0 : section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'SUTD', link: '#sutd-section' },
    { name: 'About', link: '#about-section' },
    { name: 'Team', link: '#team-section' },
    { name: 'Expertise', link: '#expertise-section' },
    { name: 'Projects', link: '#capstone-section' },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="relative z-20 flex items-center gap-3 px-2 py-1 group"
        >
          <svg className="w-8 h-8 text-black dark:text-white" viewBox="0 0 512 512" fill="currentColor">
            <path d="M256,136.5L85.1,426.5h341.8L256,136.5z M256,180.5l147.8,246H108.2L256,180.5z"/>
            <path d="M0,332h140l-30-50H0V332z"/>
            <path d="M256,332l130,100l20-30l-130-100L256,332z"/>
            <path d="M256,332l130,40l10-35l-130-40L256,332z"/>
            <path d="M256,332l130-20l-5-35l-130,20L256,332z"/>
            <path d="M256,332l130-80l-15-30l-130,80L256,332z"/>
          </svg>
          <span className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
            PRSM
          </span>
        </button>

        {/* Navigation Items */}
        <NavItems
          items={navItems}
          onItemClick={(e) => {
            e.preventDefault();
            const href = e.currentTarget.getAttribute('href');
            if (href) {
              const sectionId = href.replace('#', '');
              scrollToSection(sectionId);
            }
          }}
        />

        {/* Contact Button */}
        <button
          onClick={() => scrollToSection('contact-section')}
          className="relative z-20 px-6 py-2 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-600 rounded-full hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-all duration-200"
        >
          Contact
        </button>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 px-2 py-1 group"
          >
            <svg className="w-8 h-8 text-black dark:text-white" viewBox="0 0 512 512" fill="currentColor">
              <path d="M256,136.5L85.1,426.5h341.8L256,136.5z M256,180.5l147.8,246H108.2L256,180.5z"/>
              <path d="M0,332h140l-30-50H0V332z"/>
              <path d="M256,332l130,100l20-30l-130-100L256,332z"/>
              <path d="M256,332l130,40l10-35l-130-40L256,332z"/>
              <path d="M256,332l130-20l-5-35l-130,20L256,332z"/>
              <path d="M256,332l130-80l-15-30l-130,80L256,332z"/>
            </svg>
            <span className="text-xl font-bold text-neutral-900 dark:text-white">
              PRSM
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <div className="px-2">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                const sectionId = item.link.replace('#', '');
                scrollToSection(sectionId);
              }}
              className="w-full text-left px-4 py-2 text-neutral-900 hover:text-primary transition-colors font-medium dark:text-neutral-100"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => scrollToSection('contact-section')}
            className="w-full px-6 py-3 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-all duration-200"
          >
            Contact
          </button>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
