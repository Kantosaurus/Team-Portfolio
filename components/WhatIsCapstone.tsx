'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { LinkPreview } from '@/components/ui/link-preview';

export default function WhatIsCapstone() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Content fades in from left
            anime({
              targets: contentRef.current,
              opacity: [0, 1],
              translateX: [-60, 0],
              duration: 1200,
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });

            // Stats counter animation
            if (statsRef.current) {
              anime({
                targets: statsRef.current.children,
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 800,
                delay: anime.stagger(100, { start: 400 }),
                easing: 'spring(1, 80, 10, 0)',
              });
            }

            // Highlights slide from right
            if (highlightsRef.current) {
              anime({
                targets: highlightsRef.current.children,
                opacity: [0, 1],
                translateX: [60, 0],
                duration: 1000,
                delay: anime.stagger(120, { start: 600 }),
                easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
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
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/capstone-prog-3.webp"
          alt="Capstone Project"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10">
        <div className="max-w-grid mx-auto px-12">
        {/* Header with centered layout */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-widest text-neutral-300 uppercase">
              Final Year Project
            </span>
            <div className="h-px bg-primary mt-2 w-12 mx-auto" />
          </div>
          <h2 className="text-display font-semibold text-white mb-4 tracking-tight drop-shadow-2xl">
            What is Capstone
          </h2>
          <p className="text-h4 text-white font-normal max-w-2xl mx-auto drop-shadow-lg">
            Where academic excellence meets industry innovation.
          </p>
        </div>

        {/* Main Content - Different Layout */}
        <div className="mb-24">
          {/* Stats Row - Horizontal at top */}
          <div ref={statsRef} className="flex flex-wrap justify-center gap-16 mb-16">
            <div className="opacity-0 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/20 backdrop-blur-sm border-2 border-secondary mb-4">
                <span className="text-4xl font-bold text-white">5-7</span>
              </div>
              <p className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">Students per Team</p>
            </div>
            <div className="opacity-0 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary mb-4">
                <span className="text-4xl font-bold text-white">1</span>
              </div>
              <p className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">Full Academic Year</p>
            </div>
          </div>

          {/* Text Content - Full Width Centered */}
          <div ref={contentRef} className="opacity-0 max-w-4xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-10">
              <div className="space-y-6 text-body-lg text-white leading-relaxed text-center drop-shadow-md">
                <p>
                  The <LinkPreview url="https://www.sutd.edu.sg/education/undergraduate/capstone/overview/" className="font-bold !text-white">Capstone project</LinkPreview> is a University-Industry partnership whereby students work in cross-functional teams to solve real-world challenges.
                </p>
                <p>
                  Working in teams of 5 to 7 students, these final-year undergraduate students will learn to apply the principles, concepts, and techniques that they have learnt to investigate your technical and business challenges.
                </p>
                <p>
                  This immersive experience bridges the gap between academic learning and professional practice, allowing students to demonstrate their expertise while delivering tangible value to industry partners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights - Horizontal Cards */}
        <div>
          <h3 className="text-h3 font-semibold text-white mb-12 text-center">
            Key Highlights
          </h3>
          <div ref={highlightsRef} className="space-y-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="opacity-0">
                <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-l-4 border-secondary">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-3xl">
                        {highlight.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-h4 font-semibold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-body text-neutral-200 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-6xl font-bold text-white/10">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
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
