'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function TeamVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Content slides in from left
            anime({
              targets: contentRef.current,
              opacity: [0, 1],
              translateX: [-60, 0],
              duration: 1200,
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });

            // Visual element slides in from right
            anime({
              targets: visualRef.current,
              opacity: [0, 1],
              translateX: [60, 0],
              duration: 1200,
              delay: 300,
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });

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

  return (
    <section
      ref={sectionRef}
      id="vision-section"
      className="section-spacing relative overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-40 right-40 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-15" />
      </div>

      <div className="relative z-10">
        <div className="max-w-grid mx-auto px-12">
          {/* Section Header */}
          <div className="mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                Our Vision
              </span>
              <div className="h-px bg-primary mt-2 w-12" />
            </div>
            <h2 className="text-display font-semibold text-neutral-900 mb-4 tracking-tight max-w-content">
              Team PRSM Vision
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-12">
            {/* Left Column - Vision Statement */}
            <div ref={contentRef} className="col-span-12 lg:col-span-7 opacity-0">
              <div className="glass-primary border-l-4 border-primary pl-12 py-10 rounded-r-3xl">
                <p className="text-h3 font-semibold text-neutral-900 leading-relaxed mb-8">
                  To illuminate complexity through innovation, refracting singular challenges into multifaceted solutions that create lasting impact.
                </p>
                <div className="h-px bg-gradient-to-r from-primary/30 to-transparent mb-8" />
                <div className="space-y-6 text-body-lg text-neutral-700 leading-relaxed">
                  <p>
                    Like a prism that transforms a single beam of light into a spectrum of colors, we believe the most powerful solutions emerge when diverse perspectives converge on a common purpose.
                  </p>
                  <p>
                    Our vision is to become catalysts for transformative change—turning ambiguity into clarity, complexity into elegance, and ideas into reality that serves humanity.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div ref={visualRef} className="col-span-12 lg:col-span-5 opacity-0">
              <div className="space-y-8">
                {/* Key Principles */}
                {[
                  { number: '01', title: 'Illuminate', description: 'Bring clarity to complex challenges' },
                  { number: '02', title: 'Innovate', description: 'Transform ideas into tangible solutions' },
                  { number: '03', title: 'Impact', description: 'Create meaningful change for society' },
                ].map((principle, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-bold text-primary flex-shrink-0">
                        {principle.number}
                      </div>
                      <div>
                        <h4 className="text-h4 font-semibold text-neutral-900 mb-2">
                          {principle.title}
                        </h4>
                        <p className="text-body-sm text-neutral-600 leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
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
