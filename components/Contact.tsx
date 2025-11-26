'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Contact cards cascade in
            if (contentRef.current) {
              const cards = contentRef.current.querySelectorAll('.contact-card');
              anime({
                targets: cards,
                opacity: [0, 1],
                translateX: [-60, 0],
                rotateY: [-30, 0],
                duration: 1000,
                delay: anime.stagger(150),
                easing: 'spring(1, 80, 10, 0)',
              });
            }

            // CTA morphs in with scale
            anime({
              targets: ctaRef.current,
              opacity: [0, 1],
              scale: [0.85, 1],
              translateY: [40, 0],
              duration: 1200,
              delay: 500,
              easing: 'spring(1, 80, 10, 0)',
            });

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

  return (
    <section
      ref={sectionRef}
      id="contact-section"
      className="section-spacing relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(248, 249, 250, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-15" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary rounded-full filter blur-3xl opacity-10" />
      </div>
      <div className="relative z-10">
      <div className="max-w-grid mx-auto px-12">
        {/* Section Header */}
        <div className="mb-24">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Contact
            </span>
            <div className="h-px bg-primary mt-2 w-12" />
          </div>
          <h2 className="text-display font-semibold text-neutral-900 mb-4 tracking-tight max-w-content">
            Get in Touch
          </h2>
          <p className="text-h4 text-neutral-600 font-normal max-w-narrow">
            Ready to partner with us? Let's discuss your project.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Information */}
          <div ref={contentRef} className="opacity-0">
            <div className="space-y-8">
              {/* Email */}
              <div className="contact-card glass-card p-8 opacity-0 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
                  Email
                </div>
                <a
                  href="mailto:capstone.prsm@sutd.edu.sg"
                  className="text-h4 font-semibold text-primary hover:text-primary-dark transition-colors block"
                >
                  capstone.prsm@sutd.edu.sg
                </a>
              </div>

              {/* LinkedIn */}
              <div className="contact-card glass-card p-8 opacity-0 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
                  LinkedIn
                </div>
                <a
                  href="https://linkedin.com/company/team-prsm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-h4 font-semibold text-primary hover:text-primary-dark transition-colors block"
                >
                  linkedin.com/company/team-prsm →
                </a>
              </div>

              {/* GitHub */}
              <div className="contact-card glass-card p-8 opacity-0 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
                  GitHub
                </div>
                <a
                  href="https://github.com/team-prsm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-h4 font-semibold text-primary hover:text-primary-dark transition-colors block"
                >
                  github.com/team-prsm →
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="opacity-0 flex flex-col justify-center">
            <div className="glass-card p-12 rounded-2xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-h2 font-semibold text-neutral-900 mb-6">
                Ready to Collaborate?
              </h3>
              <p className="text-body-lg text-neutral-700 mb-8 leading-relaxed">
                Download our team brochure or schedule a meeting to discuss partnership opportunities
              </p>
              <div className="space-y-4">
                <button className="w-full px-8 py-4 bg-primary text-white text-sm font-semibold tracking-wide hover:bg-primary-dark transition-colors">
                  DOWNLOAD BROCHURE
                </button>
                <a
                  href="mailto:capstone.prsm@sutd.edu.sg?subject=Partnership Inquiry"
                  className="block w-full px-8 py-4 border border-neutral-300 text-neutral-900 text-sm font-semibold tracking-wide text-center hover:border-neutral-900 transition-colors"
                >
                  SCHEDULE MEETING
                </a>
              </div>
            </div>

            {/* SUTD Affiliation */}
            <div className="mt-12 text-center lg:text-left">
              <p className="text-body text-neutral-700 font-medium mb-1">
                Singapore University of Technology and Design
              </p>
              <p className="text-body-sm text-neutral-500">
                Capstone Project Team © 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
