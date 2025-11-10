'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutTeam from '@/components/AboutTeam';
import ExpertiseMatrix from '@/components/ExpertiseMatrix';
import TeamMemberCard from '@/components/TeamMemberCard';
import CapstoneProject from '@/components/CapstoneProject';
import WhyPartner from '@/components/WhyPartner';
import PastWork from '@/components/PastWork';
import Contact from '@/components/Contact';

const teamMembers = [
  {
    name: 'Akash',
    role: 'Full Stack Developer',
    discipline: 'Engineering Products and Design',
    bio: 'Passionate about creating seamless user experiences with modern web technologies. Bridges frontend and backend with expertise in cloud architecture.',
    image: '/team/alex.jpg',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    linkedin: 'https://linkedin.com/in/alexthompson',
    github: 'https://github.com/alexthompson',
  },
  {
    name: 'Baddipadige Amith Reddy',
    role: 'UI/UX Designer',
    discipline: 'Computer Science and Design',
    bio: 'Design enthusiast with a keen eye for aesthetics and user-centered design principles. Specialized in creating intuitive, accessible interfaces.',
    image: '/team/sarah.jpg',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'UX Research'],
    linkedin: 'https://linkedin.com/in/sarahchen',
  },
  {
    name: 'Berlyn',
    role: 'Backend Engineer',
    discipline: 'Engineering Systems and Design',
    bio: 'Systems architect focused on building scalable and robust backend solutions. Expert in microservices architecture and database optimization.',
    image: '/team/michael.jpg',
    skills: ['Python', 'PostgreSQL', 'Docker', 'Kubernetes'],
    github: 'https://github.com/mrodriguez',
    linkedin: 'https://linkedin.com/in/michaelrodriguez',
  },
  {
    name: 'Goh Xun Yi Joey',
    role: 'Product Manager',
    discipline: 'Engineering Systems and Design',
    bio: 'Strategic thinker bridging the gap between technical teams and business goals. Passionate about delivering value and measurable impact.',
    image: '/team/emily.jpg',
    skills: ['Agile', 'Product Strategy', 'Analytics', 'Stakeholder Mgmt'],
    linkedin: 'https://linkedin.com/in/emilywatson',
  },
  {
    name: 'Leo Nyuk Sze',
    role: 'DevOps Engineer',
    discipline: 'Architecture and Sustainable Design',
    bio: 'Infrastructure specialist ensuring smooth deployments and system reliability. Expert in CI/CD pipelines and cloud infrastructure automation.',
    image: '/team/david.jpg',
    skills: ['Jenkins', 'Terraform', 'AWS', 'Monitoring'],
    github: 'https://github.com/davidkim',
    linkedin: 'https://linkedin.com/in/davidkim',
  },
  {
    name: 'Woo Jon Hou Ainsley',
    role: 'Frontend Developer',
    discipline: 'Computer Science and Design',
    bio: 'Creative developer bringing designs to life with clean, performant code. Specialized in modern JavaScript frameworks and smooth animations.',
    image: '/team/lisa.jpg',
    skills: ['React', 'CSS', 'Web Animations', 'Performance'],
    github: 'https://github.com/lisaanderson',
    linkedin: 'https://linkedin.com/in/lisaanderson',
  },
];

export default function Home() {
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionSubtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Observer for section title animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: sectionTitleRef.current,
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0.8, 1],
              duration: 1000,
              easing: 'easeOutExpo',
            });

            anime({
              targets: sectionSubtitleRef.current,
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              delay: 200,
              easing: 'easeOutQuad',
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionTitleRef.current) {
      observer.observe(sectionTitleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />

      <div id="hero">
        <Hero />
      </div>

      {/* About Team Section */}
      <AboutTeam />

      {/* Team Section - Apple style */}
      <section
        id="team-section"
        className="relative py-32 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-24">
            <h2
              ref={sectionTitleRef}
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 opacity-0 tracking-tight"
            >
              Meet the Team
            </h2>
            <p
              ref={sectionSubtitleRef}
              className="text-xl text-gray-600 max-w-2xl opacity-0 font-normal"
            >
              Diverse expertise, unified vision — the individuals powering Team PRSM.
            </p>
          </div>

          {/* Team Grid - No cards, clean spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Matrix Section */}
      <ExpertiseMatrix />

      {/* Capstone Project Section */}
      <CapstoneProject />

      {/* Why Partner With Us Section */}
      <WhyPartner />

      {/* Past Work Section */}
      <PastWork />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Footer Links */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#hero" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
                <li><a href="#about-section" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#team-section" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Team</a></li>
                <li><a href="#capstone-section" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Capstone</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#expertise-section" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Expertise</a></li>
                <li><a href="#past-work-section" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Projects</a></li>
                <li><a href="#partner-section" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Partnership</a></li>
                <li><a href="#contact-section" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-600">capstone.prsm@sutd.edu.sg</li>
                <li className="text-sm text-gray-600">Singapore University of Technology and Design</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/team-prsm" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/team-prsm" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Built with Next.js, Tailwind CSS, and Anime.js
            </p>
            <p className="text-sm text-gray-600 mb-2">
              A Capstone project by Team PRSM | Singapore University of Technology and Design
            </p>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Team PRSM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
