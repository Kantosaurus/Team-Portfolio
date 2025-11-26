'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function ESDPortfolio() {
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
      title: 'Airplane Seat Configuration Optimisation',
      category: 'Operations Research',
      description: 'Developed an integer linear programming model to optimise seat configurations for an Airbus A350-900 operating on the London-Delhi route. Evaluated space, weight, and demand constraints to maximise overall profitability, refining model parameters and validating results against real-world operational data.',
      skills: ['Mathematical Modelling', 'Operations Research', 'Data-Driven Analysis', 'Scenario Validation'],
      impact: 'Maximised profitability'
    },
    {
      title: 'DGCT Performance Dashboard',
      category: 'Data Analytics & Forecasting',
      description: 'Collaborated with Digital Content Technologies (DGCT) to develop an interactive dashboard visualising storage, bandwidth usage, and system performance metrics. Performed data cleaning and analysis using MySQL and Excel to identify usage patterns and inefficiencies, applying XGBoost and exponential smoothing for storage growth projections.',
      skills: ['MySQL', 'Excel', 'XGBoost', 'Forecasting', 'Dashboard Design'],
      impact: 'Improved scalability planning'
    },
    {
      title: 'Project Babysteps',
      category: 'Business Intelligence',
      description: 'Developed an interactive sales dashboard for Beauty Mums & Babies using PowerBI, analyzing over 10,000 sales records to identify key trends in sales performance and customer demographics. Delivered actionable insights to support targeted marketing strategies and business growth.',
      skills: ['PowerBI', 'Data Analytics', 'Customer Segmentation', 'Sales Trends'],
      impact: '10,000+ records analyzed'
    },
    {
      title: 'Project GrowTrackRun',
      category: 'Gamified IoT System',
      description: 'Created a gamified running system to boost motivation and social interaction among runners. Featured Light Pacer, checkpoint displays, infrared sensors, live leaderboard, and a Figma-designed companion app that enhanced safety, engagement, and friendly competition.',
      skills: ['IoT Sensors', 'System Design', 'Figma Prototyping', 'Gamification'],
      impact: 'Enhanced user engagement'
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="esd-portfolio-section"
      className="py-32 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-sm font-semibold text-accent-teal uppercase tracking-wider">
            Pillar Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mt-4 mb-6">
            ESD Portfolio
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Engineering Systems and Design
          </p>
        </div>

        {/* Projects List */}
        <div ref={projectsRef} className="space-y-24">
          {projects.map((project, index) => (
            <div key={`esd-project-${index}`} className="opacity-0">
              <div className="grid lg:grid-cols-12 gap-12 items-start border-l-4 border-accent-teal pl-8">
                {/* Number & Category */}
                <div className="lg:col-span-2">
                  <div className="text-7xl font-bold text-accent-teal/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-sm font-semibold text-accent-teal uppercase tracking-wider mt-4">
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
                  <div className="text-2xl font-bold text-accent-teal">
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
