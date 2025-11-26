'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function TeamMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Main content slides in
            anime({
              targets: contentRef.current,
              opacity: [0, 1],
              translateY: [60, 0],
              duration: 1200,
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });

            // Pillars cascade in
            if (pillarsRef.current) {
              anime({
                targets: pillarsRef.current.children,
                opacity: [0, 1],
                translateY: [40, 0],
                scale: [0.9, 1],
                duration: 1000,
                delay: anime.stagger(120, { start: 400 }),
                easing: 'spring(1, 80, 10, 0)',
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      title: 'Bridge',
      subtitle: 'Design & Technology',
      description: 'Seamlessly integrate aesthetic excellence with technical precision to create solutions that are both beautiful and functional.'
    },
    {
      title: 'Solve',
      subtitle: 'Real-World Challenges',
      description: 'Apply interdisciplinary knowledge to tackle pressing industry problems with practical, implementable solutions.'
    },
    {
      title: 'Collaborate',
      subtitle: 'Across Disciplines',
      description: 'Unite diverse perspectives from engineering, design, and computing to generate innovative breakthroughs.'
    },
    {
      title: 'Deliver',
      subtitle: 'Measurable Impact',
      description: 'Transform concepts into tangible outcomes that create value for partners and society at large.'
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="mission-section"
      className="section-spacing relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(248, 249, 250, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-15" />
      </div>

      <div className="relative z-10">
        <div className="max-w-grid mx-auto px-12">
          {/* Section Header */}
          <div className="mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                Our Mission
              </span>
              <div className="h-px bg-primary mt-2 w-12" />
            </div>
            <h2 className="text-display font-semibold text-neutral-900 mb-4 tracking-tight max-w-content">
              Team PRSM Mission
            </h2>
          </div>

          {/* Mission Statement */}
          <div ref={contentRef} className="opacity-0 mb-20">
            <div className="max-w-content mx-auto text-center">
              <div className="glass-secondary border-2 border-secondary p-12 rounded-3xl">
                <p className="text-h3 font-semibold text-neutral-900 leading-relaxed">
                  We aim to bridge design and technology to create impactful solutions that address real-world challenges through interdisciplinary collaboration and innovative thinking.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Pillars - Swiss Grid */}
          <div>
            <h3 className="text-h3 font-semibold text-neutral-900 mb-12 text-center">
              How We Achieve Our Mission
            </h3>
            <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="opacity-0">
                  <div className="glass-card p-8 h-full rounded-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-primary">
                    <div className="text-6xl font-bold text-primary mb-2 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h4 className="text-h4 font-semibold text-neutral-900 mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wide">
                      {pillar.subtitle}
                    </p>
                    <div className="h-px bg-gradient-to-r from-neutral-200 to-transparent mb-4" />
                    <p className="text-body-sm text-neutral-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
