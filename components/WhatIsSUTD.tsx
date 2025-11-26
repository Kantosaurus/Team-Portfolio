'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { LinkPreview } from '@/components/ui/link-preview';

export default function WhatIsSUTD() {
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

  const pillars = [
    {
      title: 'Technology',
      description: 'Strong foundation in mathematics, science, and cutting-edge technology'
    },
    {
      title: 'Design',
      description: 'Human-centered approach to problem-solving and innovation'
    },
    {
      title: 'Innovation',
      description: 'Entrepreneurial mindset and creative solutions for real-world challenges'
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="sutd-section"
      className="section-spacing relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/teaser-sutd-campus-generic.webp"
          alt="SUTD Campus"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10">
        <div className="max-w-grid mx-auto px-12">
          {/* Section Header */}
          <div className="mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold tracking-widest text-neutral-300 uppercase">
                Our University
              </span>
              <div className="h-px bg-primary mt-2 w-12" />
            </div>
            <h2 className="text-display font-semibold text-white mb-4 tracking-tight max-w-content">
              What is SUTD
            </h2>
            <p className="text-h4 text-neutral-200 font-normal max-w-narrow">
              Trailblazing a Better World by Design
            </p>
          </div>

          {/* Main Content */}
          <div ref={contentRef} className="opacity-0 mb-20">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8">
                <div className="space-y-6 text-body-lg text-white leading-relaxed">
                  <p>
                    <LinkPreview url="https://www.sutd.edu.sg/" className="font-bold !text-white">
                      Singapore University of Technology and Design (SUTD)
                    </LinkPreview> is the 4th public university in Singapore. We are pioneers of innovation, creators of tomorrow, and architects of change.
                  </p>
                  <p>
                    Focusing strongly on technology and building a strong foundation in design and innovation, we aim to educate technologically grounded leaders who are steeped in the fundamentals of mathematics, science and technology.
                  </p>
                  <p>
                    We aim to create a diverse space that builds the future of tomorrow — where students from different disciplines collaborate, innovate, and push boundaries to solve the world's most pressing challenges.
                  </p>
                </div>
              </div>

              {/* Stats Box */}
              <div className="col-span-12 lg:col-span-4">
                <div className="bg-white/10 backdrop-blur-md border-l-2 border-primary pl-8 py-6 rounded-r-2xl h-full flex flex-col justify-center">
                  <div className="text-xs font-semibold tracking-widest text-neutral-300 uppercase mb-6">
                    By the Numbers
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-5xl font-bold text-primary mb-1">4th</div>
                      <div className="text-sm text-neutral-200">Public University in Singapore</div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-primary/40 to-transparent" />
                    <div>
                      <div className="text-5xl font-bold text-secondary mb-1">2009</div>
                      <div className="text-sm text-neutral-200">Established in collaboration with MIT</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div>
            <h3 className="text-h3 font-semibold text-white mb-12">
              Our Core Pillars
            </h3>
            <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="opacity-0">
                  <div className="bg-white/10 backdrop-blur-md p-8 h-full rounded-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-2 border-primary">
                    <div className="text-4xl font-bold text-primary mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h4 className="text-h4 font-semibold text-white mb-3">
                      {pillar.title}
                    </h4>
                    <p className="text-body-sm text-neutral-200 leading-relaxed">
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
