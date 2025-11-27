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
import FAQ from '@/components/FAQ';

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
    role: 'Architectural Designer & Systems Innovator',
    discipline: 'Architecture and Sustainable Design',
    bio: 'A multidisciplinary designer driven by human-centred innovation, she creates spaces and systems that blend technology, sustainability, and meaningful social impact. Her work spans architectural design, parametric structural optimization, and community-focused food solutions—ranging from suspended bridge prototypes to vertical farming systems and nature-integrated libraries. With a strong foundation in computational tools like Grasshopper, Python, and structural simulation plug-ins, she brings together technical rigor and thoughtful design to craft experiences that connect people, support well-being, and empower resilient communities.',
    image: '/team/leo.jpg',
    skills: ['Grasshopper', 'Python', 'Parametric Design', 'Sustainable Architecture'],
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

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Footer - Minimal Clean Design */}
      <footer className="bg-white border-t border-neutral-200">
        <div className="max-w-grid mx-auto px-12 py-16">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* About */}
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 mb-6 tracking-widest uppercase">Navigation</h3>
              <ul className="space-y-3">
                <li><a href="#hero" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#sutd-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">SUTD</a></li>
                <li><a href="#what-capstone-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Capstone Program</a></li>
                <li><a href="#about-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#team-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Meet the Team</a></li>
              </ul>
            </div>

            {/* Partnership */}
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 mb-6 tracking-widest uppercase">Partnership</h3>
              <ul className="space-y-3">
                <li><a href="#expertise-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Our Expertise</a></li>
                <li><a href="#partner-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Why Partner</a></li>
                <li><a href="#requirements-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Requirements</a></li>
                <li><a href="#contact-section" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">Get in Touch</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 mb-6 tracking-widest uppercase">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:woo_ainsley@mymail.sutd.edu.sg" className="text-body-sm text-neutral-600 hover:text-primary transition-colors">
                    woo_ainsley@mymail.sutd.edu.sg
                  </a>
                </li>
                <li className="text-body-sm text-neutral-600">
                  Singapore University of Technology and Design
                </li>
                <li className="text-body-sm text-neutral-600">
                  8 Somapah Road, Singapore 487372
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M256,136.5L85.1,426.5h341.8L256,136.5z M256,180.5l147.8,246H108.2L256,180.5z"/>
                  <path d="M0,332h140l-30-50H0V332z"/>
                  <path d="M256,332l130,100l20-30l-130-100L256,332z"/>
                  <path d="M256,332l130,40l10-35l-130-40L256,332z"/>
                  <path d="M256,332l130-20l-5-35l-130,20L256,332z"/>
                  <path d="M256,332l130-80l-15-30l-130,80L256,332z"/>
                </svg>
                <div>
                  <p className="text-lg font-bold text-neutral-900 tracking-widest uppercase">PRSM</p>
                  <p className="text-xs text-neutral-500">Capstone 2025</p>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-body-sm text-neutral-500">
                  © {new Date().getFullYear()} Team PRSM. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
