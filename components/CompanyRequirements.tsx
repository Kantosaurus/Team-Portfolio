'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function CompanyRequirements() {
  const sectionRef = useRef<HTMLElement>(null);
  const requirementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Requirements cascade in
            if (requirementsRef.current) {
              anime({
                targets: requirementsRef.current.children,
                opacity: [0, 1],
                translateX: [-40, 0],
                duration: 800,
                delay: anime.stagger(120),
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

  const requirements = [
    {
      title: 'Site Visits & Employee Interviews',
      description: 'Arrange site visits for team to conduct interviews with employees if project requires, providing access to relevant stakeholders and work environments.',
    },
    {
      title: 'Digital Brand Asset Packs and Guidelines',
      description: 'Provide comprehensive brand assets including logos, color palettes, typography guidelines, and design systems for consistent project delivery.',
    },
    {
      title: 'Commercial Licenses for Software and Specialized Tools',
      description: 'Supply necessary commercial licenses for software and specialized tools required for project development and testing.',
    },
    {
      title: 'Dedicated Mentor',
      description: 'Assign a dedicated mentor from your organization to guide the team, provide domain expertise, and facilitate communication throughout the project.',
    },
    {
      title: 'Participation Fee',
      description: 'SGD 6,000 participation fee to support project development, resources, and operational costs.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="requirements-section"
      className="section-spacing relative overflow-hidden bg-white"
    >
      <div className="max-w-grid mx-auto px-12">
        {/* Section Header */}
        <div className="mb-24">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Partnership Criteria
            </span>
            <div className="h-px bg-primary mt-2 w-12" />
          </div>
          <h2 className="text-display font-semibold text-neutral-900 mb-4 tracking-tight max-w-content">
            Company Requirements
          </h2>
          <p className="text-h4 text-neutral-600 font-normal max-w-narrow">
            What we need from potential partners to ensure project success
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="mb-24">
          <h3 className="text-h3 font-semibold text-neutral-900 mb-12">
            Partnership Prerequisites
          </h3>
          <div ref={requirementsRef} className="grid md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="opacity-0">
                <div className="glass-card p-8 rounded-xl h-full hover:shadow-2xl transition-all duration-500 border-l-4 border-primary">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl font-bold text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h4 className="text-h4 font-semibold text-neutral-900 mb-3">
                    {req.title}
                  </h4>
                  <p className="text-body-sm text-neutral-600 leading-relaxed">
                    {req.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IP Ownership Notice */}
        <div>
          <div className="glass-secondary border-2 border-primary p-12 rounded-2xl">
            <div className="flex gap-6 items-start">
              <div className="text-5xl">📄</div>
              <div className="flex-1">
                <h3 className="text-h3 font-semibold text-neutral-900 mb-4">
                  Intellectual Property Rights
                </h3>
                <p className="text-body-lg text-neutral-700 leading-relaxed">
                  100% IP and all generated materials belong to partner organisation. Your organization retains full ownership and rights to all project deliverables, code, designs, documentation, and intellectual property created during the Capstone project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
