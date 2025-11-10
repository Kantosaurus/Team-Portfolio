'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function PastWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (projectsRef.current) {
              anime({
                targets: projectsRef.current.children,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                delay: anime.stagger(150),
                easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
              });
            }

            if (statsRef.current) {
              anime({
                targets: statsRef.current.children,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                delay: anime.stagger(100, { start: 600 }),
                easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'GreenTrack - Sustainability App',
      category: 'Mobile Application',
      description: 'Carbon footprint tracking app with gamification elements. Won Best Sustainability Solution at SUTD Innovation Challenge 2024.',
      award: '1st Place - SUTD Innovation Challenge',
      tech: ['React Native', 'Firebase', 'ML'],
      image: '🌱',
    },
    {
      title: 'SafeRoute - Emergency Navigation',
      category: 'IoT & Web Platform',
      description: 'Real-time emergency routing system using crowd-sourced data and AI predictions. Recognized at Singapore Smart Nation Hackathon.',
      award: '2nd Place - Smart Nation Hackathon',
      tech: ['Next.js', 'Python', 'IoT Sensors'],
      image: '🚨',
    },
    {
      title: 'EduConnect - Learning Platform',
      category: 'Full-Stack Web App',
      description: 'Peer-to-peer learning platform connecting students across disciplines. Deployed to 500+ SUTD students.',
      award: 'Featured in SUTD Showcase',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '📚',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="past-work-section"
      className="relative py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            A showcase of our team's achievements and proven track record.
          </p>
        </div>

        {/* Projects - No cards */}
        <div ref={projectsRef} className="space-y-16 mb-32">
          {projects.map((project, index) => (
            <div key={index} className="opacity-0">
              <div className="flex items-start gap-6 mb-6">
                <div className="text-5xl">{project.image}</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-base text-gray-900 font-semibold mb-4">
                    {project.award}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-900 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats - Clean numbers */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { number: '12+', label: 'Projects Completed' },
            { number: '5', label: 'Awards Won' },
            { number: '1000+', label: 'Users Impacted' },
            { number: '8', label: 'Industry Partners' },
          ].map((stat, index) => (
            <div key={index} className="text-center opacity-0">
              <div className="text-5xl font-semibold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
