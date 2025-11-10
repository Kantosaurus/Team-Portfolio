'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function CapstoneProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: [titleRef.current, contentRef.current],
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 1000,
              delay: anime.stagger(200),
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });

            if (showcaseRef.current) {
              anime({
                targets: showcaseRef.current,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 1000,
                delay: 400,
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

  const technologies = [
    'React & Next.js',
    'Python & TensorFlow',
    'IoT Sensors',
    'AWS Cloud',
    'PostgreSQL',
    'Docker',
  ];

  const mentors = [
    { name: 'Dr. Jane Smith', role: 'Technical Advisor', affiliation: 'SUTD' },
    { name: 'Prof. John Doe', role: 'Academic Supervisor', affiliation: 'SUTD' },
  ];

  return (
    <section
      ref={sectionRef}
      id="capstone-section"
      className="relative py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
            Capstone Project
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            Building sustainable urban solutions through connected technology.
          </p>
        </div>

        {/* Project Title */}
        <div ref={titleRef} className="mb-16 opacity-0">
          <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            SmartCity IoT Platform
          </h3>
          <p className="text-xl text-gray-600">
            Real-time urban management powered by AI and IoT
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 mb-24">
          {/* Left Column - Project Details */}
          <div ref={contentRef} className="space-y-12 opacity-0">
            {/* Problem Statement */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Problem Statement
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Urban environments face critical challenges in resource management, environmental monitoring, and infrastructure optimization. Current systems lack integration and real-time responsiveness.
              </p>
            </div>

            {/* Objectives */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Objectives
              </h4>
              <div className="space-y-3">
                {[
                  'Deploy IoT sensor network for real-time urban data collection',
                  'Develop AI-powered analytics for predictive insights',
                  'Create user-friendly dashboard for city planners',
                  'Reduce resource consumption by 30% through optimization',
                ].map((objective, index) => (
                  <div key={index} className="text-lg text-gray-600">
                    {objective}
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcomes */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Expected Outcomes
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                A fully functional IoT platform with ML-driven insights, deployed across a pilot urban zone. Demonstrable improvements in energy efficiency, waste management, and traffic flow optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Live Demo', 'Research Paper', 'Open Source'].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-900 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Showcase */}
          <div ref={showcaseRef} className="opacity-0">
            {/* Glassmorphic Project Showcase */}
            <div className="glass border border-gray-200/50 rounded-3xl p-12 mb-12">
              <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏙️</div>
                  <p className="text-gray-600 font-medium">Project Prototype</p>
                  <p className="text-sm text-gray-500 mt-2">Live demo coming soon</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {['Progress: 60%', 'Sprint 4/6', 'Q2 2025'].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-sm font-medium text-gray-900">{stat}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-gray-900 font-medium border border-gray-200"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Mentors */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                Mentors & Advisors
              </h4>
              <div className="space-y-4">
                {mentors.map((mentor, index) => (
                  <div key={index}>
                    <p className="text-lg font-semibold text-gray-900">{mentor.name}</p>
                    <p className="text-base text-gray-600">{mentor.role} • {mentor.affiliation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
