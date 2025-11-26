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
      title: 'Agriwave',
      category: 'Urban Agriculture',
      description: 'Developed in collaboration with a multidisciplinary team, this project focuses on vertical farming systems that strengthen community food security while supporting mental well-being. Contributions include generating design variations and technical drawings through custom Grasshopper scripts, enabling efficient exploration of scalable, community-friendly farming structures.',
      skills: ['Grasshopper Scripting', 'Parametric Design', 'Vertical Farming', 'Community Design'],
      impact: 'Enhanced food security'
    },
    {
      title: 'Parametric Bridge',
      category: 'Structural Engineering',
      description: 'Designed a suspended, geometrically dynamic bridge spanning 3+ meters, balancing structural integrity with architectural aesthetics under strict engineering constraints (60 kg load, end supports only). Developed custom Python scripts and performed structural optimization using Kangaroo and Galapagos in Grasshopper. Used Karamba for member stress assessment and participated in full fabrication—from material selection to assembly and load testing.',
      skills: ['Python Scripting', 'Grasshopper', 'Kangaroo', 'Galapagos', 'Karamba'],
      impact: 'Structural innovation'
    },
    {
      title: 'The Deep Library',
      category: 'Social Architecture',
      description: 'A library designed to foster human interaction while being secluded within and integrated with nature. Forces social interaction through unplanned encounters in traditionally ignored spaces like staircases, emphasizing the journey over the destination through carefully crafted views and light changes. Challenges the digital-first "Google it" culture by creating a physical space for collective knowledge sharing.',
      skills: ['Social Design', 'Nature Integration', 'Experience Design', 'Spatial Planning'],
      impact: 'Human-centered spaces'
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
            <div key={`asd-project-${index}`} className="opacity-0">
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
