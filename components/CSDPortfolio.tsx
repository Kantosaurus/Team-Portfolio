'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function CSDPortfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (projectsRef.current) {
              anime({
                targets: projectsRef.current.children,
                opacity: [0, 1],
                translateY: [40, 0],
                duration: 1000,
                delay: anime.stagger(150),
                easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
              });
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Wandr',
      category: 'AI Travel Platform',
      description: 'A comprehensive travel companion that helps users discover, plan, and share their travel experiences. Using AI-powered recommendations and community-driven content, it creates personalized itineraries based on user preferences, budget, and travel style.',
      skills: ['AI Recommendations', 'Full-Stack Development', 'Community Features', 'Personalization'],
      impact: 'Personalized travel planning'
    },
    {
      title: 'Duck Duck Guess',
      category: 'Hardware-Software Integration',
      description: 'Developed a hardware-based reaction game where ducks light up in sequence, and players must hit them in the correct order. Designed and built the entire system from scratch, including the game logic, state machine architecture, and a custom Beta Assembly ALU to drive the game mechanics.',
      skills: ['Digital Design', 'Beta Assembly', 'State Machines', 'Hardware Integration'],
      impact: 'Custom ALU implementation'
    },
    {
      title: 'DripSeek',
      category: 'Computer Vision',
      description: 'A browser plugin that identifies clothes worn by actors in real time on streaming platforms, letting users instantly shop similar styles. An agentic computer vision solution that bridges entertainment and e-commerce seamlessly.',
      skills: ['Computer Vision', 'Browser Extension', 'Real-Time Processing', 'AI Agents'],
      impact: 'Real-time style detection'
    },
    {
      title: 'IELTS SenseAI',
      category: 'EdTech AI Platform',
      description: 'Uses advanced Gemini, Heylabs, and Elevenlabs to provide personalized and realistic IELTS preparation. The platform analyzes writing samples, provides detailed feedback, and generates practice questions tailored to each student\'s proficiency level.',
      skills: ['Gemini AI', 'Natural Language Processing', 'Educational Technology', 'Personalized Learning'],
      impact: 'AI-powered IELTS prep'
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="csd-portfolio-section"
      className="py-32 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">
            Pillar Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mt-4 mb-6">
            CSD Portfolio
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Computer Science and Design
          </p>
        </div>

        {/* Projects List */}
        <div ref={projectsRef} className="space-y-24">
          {projects.map((project, index) => (
            <div key={`csd-project-${index}`} className="opacity-0">
              <div className="grid lg:grid-cols-12 gap-12 items-start border-l-4 border-accent-blue pl-8">
                {/* Number & Category */}
                <div className="lg:col-span-2">
                  <div className="text-7xl font-bold text-accent-blue/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-sm font-semibold text-accent-blue uppercase tracking-wider mt-4">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7">
                  <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-sm font-medium text-neutral-700"
                      >
                        {skill}{idx < project.skills.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="lg:col-span-3">
                  <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    Impact
                  </div>
                  <div className="text-2xl font-bold text-accent-blue">
                    {project.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
