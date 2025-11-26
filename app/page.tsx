'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatIsSUTD from '@/components/WhatIsSUTD';
import WhatIsCapstone from '@/components/WhatIsCapstone';
import AboutTeam from '@/components/AboutTeam';
import ASDPortfolio from '@/components/ASDPortfolio';
import CSDPortfolio from '@/components/CSDPortfolio';
import EPDPortfolio from '@/components/EPDPortfolio';
import ESDPortfolio from '@/components/ESDPortfolio';
import PartnershipTimelineNew from '@/components/PartnershipTimelineNew';
import ProblemStatements from '@/components/ProblemStatements';
import CompanyRequirements from '@/components/CompanyRequirements';
import TeamMemberCard from '@/components/TeamMemberCard';
import WhyPartner from '@/components/WhyPartner';
import Contact from '@/components/Contact';

const teamMembers = [
  {
    name: 'Akash Subramani',
    role: 'Hardware & Robotics Engineer',
    discipline: 'Engineering Products and Design',
    bio: 'Known as the team\'s go-to hardware specialist, he has designed and built systems across robotics, fluid mechanics, power electronics, and space engineering. His portfolio includes the mechanical systems for an autonomous mushroom harvester addressing Singapore\'s food resilience, precision valve and servo assemblies for a fluid-based musical encoder, and a solar-powered lighting system deployed in a remote Cambodian village. He also contributed to the end-to-end development, launch, and telemetry collection of a compact Arduino-based satellite. With a strong focus on practical engineering and elegant problem-solving, he turns complex ideas into reliable, real-world hardware.',
    image: '/team/akash.jpg',
    skills: ['Robotics', 'Mechanical Design', 'Power Electronics', 'Embedded Systems'],
    linkedin: 'https://www.linkedin.com/in/akash-subramani/',
  },
  {
    name: 'Baddipadige Amith Reddy',
    role: 'Cybersecurity & Software Engineer',
    discipline: 'Computer Science and Design',
    bio: 'A cybersecurity major with a talent for building sharp, high-impact tech. He\'s created everything from a real-time computer vision plugin that identifies outfits on streaming platforms, to a full Unix shell built from scratch. His hardware experience includes a reaction game powered by a custom Beta Assembly ALU, and he also helped develop Wandr, an AI-driven travel companion app. He brings together low-level engineering, AI, and security know-how to turn ambitious ideas into polished systems.',
    image: '/team/amith.jpg',
    skills: ['Cybersecurity', 'Computer Vision', 'Systems Programming', 'AI/ML'],
    linkedin: 'https://www.linkedin.com/in/amith-reddy-7b440832b/',
    github: 'https://github.com/Amith1236',
  },
  {
    name: 'Berlyn Tan',
    role: 'Data Analyst & Optimization Engineer',
    discipline: 'Engineering Systems and Design',
    bio: 'An ESD student focused on optimisation and data-driven decision-making. She built an integer linear programming model to maximise profitability on an Airbus A350-900 route and developed an interactive performance dashboard with DGCT using MySQL, forecasting models, and analytics to guide scalable capacity planning. She combines strong modelling skills with practical insights to improve system efficiency and performance.',
    image: '/team/berlyn.jpg',
    skills: ['Python', 'MySQL', 'Optimization', 'Data Analytics'],
    linkedin: 'https://www.linkedin.com/in/berlyn-tan/',
  },
  {
    name: 'Goh Xun Yi Joey',
    role: 'Systems Engineer & IoT Specialist',
    discipline: 'Engineering Systems and Design',
    bio: 'A versatile engineer skilled in analytics, interactive systems, and smart infrastructure. She helped build a PowerBI sales dashboard for Beauty Mums & Babies, analyzing 10,000+ records to uncover trends for targeted marketing. She also co-developed a gamified running system featuring sensors, a live leaderboard, and a Figma-designed companion app to drive engagement. In Project Sun Bringer, she designed a low-maintenance remote lighting system using Wi-Fi routers, smart switches, and an integrated control app to improve accessibility and reduce manpower demands.',
    image: '/team/joey.jpg',
    skills: ['PowerBI', 'IoT', 'System Design', 'Data Visualization'],
    linkedin: 'https://www.linkedin.com/in/joey-goh-5778b5238/',
  },
  {
    name: 'Leo Nyuk Sze',
    role: 'DevOps Engineer',
    discipline: 'Architecture and Sustainable Design',
    bio: 'Infrastructure specialist ensuring smooth deployments and system reliability. Expert in CI/CD pipelines and cloud infrastructure automation.',
    image: '/team/leo.jpg',
    skills: ['Jenkins', 'Terraform', 'AWS', 'Monitoring'],
    linkedin: 'https://www.linkedin.com/in/nyuk-sze-leo-42a372334/',
  },
  {
    name: 'Ainsley Woo',
    role: 'Cybersecurity & AI Specialist',
    discipline: 'Computer Science and Design',
    bio: 'A cybersecurity major with an AI minor, he specializes in building robust, low-level systems and intelligent applications. His work ranges from developing a fully functional Unix shell from the ground up to engineering a hardware reaction game powered by a custom Beta Assembly ALU. He has also built AI-driven platforms such as Wandr, a smart travel companion, IELTS SenseAI for personalized language training, and a multilingual hate-speech detection ensemble using transformer models. With strengths across operating systems, hardware design, and applied machine learning, he delivers secure, high-performance solutions end to end.',
    image: '/team/ainsley.jpg',
    skills: ['Cybersecurity', 'AI/ML', 'Systems Programming', 'NLP'],
    github: 'https://github.com/Kantosaurus',
    linkedin: 'https://www.linkedin.com/in/ainsley-woo-094b3b19a/',
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

      {/* 1. Hero */}
      <div id="hero">
        <Hero />
      </div>

      {/* 2. What is SUTD */}
      <WhatIsSUTD />

      {/* 3. What is Capstone */}
      <WhatIsCapstone />

      {/* 4. Who we are */}
      <AboutTeam />

      {/* 5. Team Members Section - Swiss Design */}
      <section
        id="team-section"
        className="section-spacing relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.8) 100%)',
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-40 right-40 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-15" />
          <div className="absolute bottom-40 left-40 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-10" />
        </div>
        <div className="relative z-10">
        <div className="max-w-grid mx-auto px-12">
          {/* Section Header */}
          <div className="mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                Team
              </span>
              <div className="h-px bg-primary mt-2 w-12" />
            </div>
            <h2
              className="text-display font-semibold text-neutral-900 mb-4 tracking-tight max-w-content"
            >
              Members
            </h2>
            <p
              className="text-h4 text-neutral-600 max-w-narrow font-normal"
            >
              Diverse expertise, unified vision — the individuals powering Team PRSM.
            </p>
          </div>

          {/* Team Grid - Uniform Swiss Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* 6. ASD Portfolio */}
      <ASDPortfolio />

      {/* 7. CSD Portfolio */}
      <CSDPortfolio />

      {/* 8. EPD Portfolio */}
      <EPDPortfolio />

      {/* 9. ESD Portfolio */}
      <ESDPortfolio />

      {/* 10. Partnership Process Timeline */}
      <PartnershipTimelineNew />

      {/* 11. Problem Statements */}
      <ProblemStatements />

      {/* 12. Company Requirements */}
      <CompanyRequirements />

      {/* Why Partner With Us Section */}
      <WhyPartner />

      {/* Contact Section */}
      <Contact />

      {/* Footer - Swiss Design */}
      <footer className="glass-subtle border-t border-neutral-200">
        <div className="max-w-grid mx-auto px-12 py-16">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 mb-6 tracking-widest uppercase">Navigation</h3>
              <ul className="space-y-3">
                <li><a href="#hero" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#sutd-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">SUTD</a></li>
                <li><a href="#about-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">About</a></li>
                <li><a href="#team-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Team</a></li>
                <li><a href="#expertise-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Expertise</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 mb-6 tracking-widest uppercase">Projects</h3>
              <ul className="space-y-3">
                <li><a href="#what-capstone-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">What is Capstone</a></li>
                <li><a href="#capstone-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Our Project</a></li>
                <li><a href="#past-work-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#partner-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Partnership</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 mb-6 tracking-widest uppercase">Contact</h3>
              <ul className="space-y-3">
                <li><a href="mailto:capstone.prsm@sutd.edu.sg" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Email</a></li>
                <li><a href="#contact-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Get in Touch</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 mb-6 tracking-widest uppercase">Social</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/team-prsm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-card flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/team-prsm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-card flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary" />
                <span className="text-sm font-bold text-neutral-900 tracking-widest uppercase">PRSM</span>
              </div>

              <div className="text-center md:text-left">
                <p className="text-body-sm text-neutral-600 mb-1">
                  Singapore University of Technology and Design
                </p>
                <p className="text-body-sm text-neutral-500">
                  © {new Date().getFullYear()} Team PRSM. Built with Next.js, Tailwind CSS, and Anime.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
