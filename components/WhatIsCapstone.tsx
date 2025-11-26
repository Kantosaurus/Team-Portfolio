'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { LinkPreview } from '@/components/ui/link-preview';

export default function WhatIsCapstone() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);

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

            // Highlights cascade in
            if (highlightsRef.current) {
              anime({
                targets: highlightsRef.current.children,
                opacity: [0, 1],
                translateY: [40, 0],
                scale: [0.9, 1],
                duration: 1000,
                delay: anime.stagger(150, { start: 400 }),
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

  const highlights = [
    {
      icon: '🤝',
      title: 'University-Industry Partnership',
      description: 'Collaborative projects bridging academic learning with real-world business challenges'
    },
    {
      icon: '👥',
      title: 'Cross-Functional Teams',
      description: 'Teams of 5-7 students from diverse disciplines working together'
    },
    {
      icon: '🎯',
      title: 'Real-World Impact',
      description: 'Apply technical and business knowledge to solve actual industry problems'
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="what-capstone-section"
      className="section-spacing relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(248, 249, 250, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)',
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
                Final Year Project
              </span>
              <div className="h-px bg-primary mt-2 w-12" />
            </div>
            <h2 className="text-display font-semibold text-neutral-900 mb-4 tracking-tight max-w-content">
              What is Capstone
            </h2>
            <p className="text-h4 text-neutral-600 font-normal max-w-narrow">
              Where academic excellence meets industry innovation.
            </p>
          </div>

          {/* Main Content */}
          <div ref={contentRef} className="opacity-0 mb-20">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8">
                <div className="space-y-6 text-body-lg text-neutral-700 leading-relaxed">
                  <p>
                    The <LinkPreview url="https://www.sutd.edu.sg/education/undergraduate/capstone/overview/" className="font-bold !text-neutral-900">Capstone project</LinkPreview> is a University-Industry partnership whereby students work in cross-functional teams to solve real-world challenges.
                  </p>
                  <p>
                    Working in teams of 5 to 7 students, these final-year undergraduate students will learn to apply the principles, concepts, and techniques that they have learnt to investigate your technical and business challenges.
                  </p>
                  <p>
                    This immersive experience bridges the gap between academic learning and professional practice, allowing students to demonstrate their expertise while delivering tangible value to industry partners.
                  </p>
                </div>
              </div>

              {/* Info Box */}
              <div className="col-span-12 lg:col-span-4">
                <div className="glass-primary border-l-2 border-secondary pl-8 py-6 rounded-r-2xl h-full flex flex-col justify-center">
                  <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-6">
                    Program Details
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-5xl font-bold text-secondary mb-1">5-7</div>
                      <div className="text-sm text-neutral-600">Students per Team</div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-secondary/20 to-transparent" />
                    <div>
                      <div className="text-5xl font-bold text-primary mb-1">1</div>
                      <div className="text-sm text-neutral-600">Full Academic Year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-h3 font-semibold text-neutral-900 mb-12">
              Key Highlights
            </h3>
            <div ref={highlightsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="opacity-0">
                  <div className="glass-card p-8 h-full rounded-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-2 border-secondary">
                    <div className="text-5xl mb-4">
                      {highlight.icon}
                    </div>
                    <h4 className="text-h4 font-semibold text-neutral-900 mb-3">
                      {highlight.title}
                    </h4>
                    <p className="text-body-sm text-neutral-600 leading-relaxed">
                      {highlight.description}
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
