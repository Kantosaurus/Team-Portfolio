'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function ASDPortfolio() {
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
      title: 'Sustainable Urban Design',
      category: 'Architecture',
      description: 'Innovative mixed-use development integrating green spaces with modern infrastructure.',
      skills: ['Parametric Design', 'BIM', 'Sustainability', 'Urban Planning'],
      impact: 'Reduced carbon footprint by 40%'
    },
    {
      title: 'Adaptive Building Systems',
      category: 'Smart Architecture',
      description: 'Climate-responsive facade systems using computational design and IoT integration.',
      skills: ['Computational Design', 'IoT', 'Energy Modeling', 'Automation'],
      impact: '30% energy efficiency improvement'
    },
    {
      title: 'Heritage Restoration',
      category: 'Conservation',
      description: 'Digital preservation and adaptive reuse of historical structures with modern techniques.',
      skills: ['3D Scanning', 'Heritage Conservation', 'Structural Analysis', 'Material Science'],
      impact: 'Preserved 5 heritage buildings'
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="asd-portfolio-section"
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
            Pillar Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mt-4 mb-6">
            ASD Portfolio
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Architecture and Sustainable Design
          </p>
        </div>

        {/* Projects List */}
        <div ref={projectsRef} className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="opacity-0">
              <div className="grid lg:grid-cols-12 gap-12 items-start border-l-4 border-accent-orange pl-8">
                {/* Number & Category */}
                <div className="lg:col-span-2">
                  <div className="text-7xl font-bold text-accent-orange/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-sm font-semibold text-accent-orange uppercase tracking-wider mt-4">
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
                  <div className="text-2xl font-bold text-accent-orange">
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
