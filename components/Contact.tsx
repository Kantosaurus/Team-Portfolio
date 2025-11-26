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
            Ready to transform your vision into reality? Let's discuss how Team PRSM can help solve your challenges.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Information */}
          <div ref={contentRef} className="opacity-0">
            <h3 className="text-h3 font-semibold text-neutral-900 mb-8">
              Ways to Reach Us
            </h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="contact-card glass-card p-8 opacity-0 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">
                      Email Us
                    </div>
                    <a
                      href="mailto:woo_ainsley@mymail.sutd.edu.sg"
                      className="text-body-lg font-semibold text-primary hover:text-primary-dark transition-colors block"
                    >
                      woo_ainsley@mymail.sutd.edu.sg
                    </a>
                    <p className="text-body-sm text-neutral-600 mt-2">
                      For partnership inquiries and project discussions
                    </p>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-card glass-card p-8 opacity-0 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">
                      Connect on LinkedIn
                    </div>
                    <a
                      href="https://linkedin.com/company/team-prsm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-lg font-semibold text-primary hover:text-primary-dark transition-colors block"
                    >
                      linkedin.com/company/team-prsm →
                    </a>
                    <p className="text-body-sm text-neutral-600 mt-2">
                      Follow us for updates and team insights
                    </p>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-card glass-card p-8 opacity-0 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">
                      View Our Code
                    </div>
                    <a
                      href="https://github.com/team-prsm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-lg font-semibold text-primary hover:text-primary-dark transition-colors block"
                    >
                      github.com/team-prsm →
                    </a>
                    <p className="text-body-sm text-neutral-600 mt-2">
                      Explore our open-source projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="opacity-0 flex flex-col justify-center">
            <div className="glass-card rounded-2xl hover:shadow-2xl transition-all duration-500 border-l-4 border-primary p-12">
              <h3 className="text-h2 font-semibold text-neutral-900 mb-6">
                Start Your Partnership
              </h3>
              <p className="text-body-lg text-neutral-700 mb-8 leading-relaxed">
                We're seeking industry partners for our 2025 Capstone project. Partner with us to tackle real challenges with innovative, cross-disciplinary solutions.
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-4">
                  What Happens Next?
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-body-sm text-neutral-700">
                    <span className="flex-shrink-0 text-primary font-bold">1.</span>
                    <span>Send us an email with your project idea or challenge</span>
                  </li>
                  <li className="flex gap-3 text-body-sm text-neutral-700">
                    <span className="flex-shrink-0 text-primary font-bold">2.</span>
                    <span>We'll respond within 3-5 business days to schedule a discussion</span>
                  </li>
                  <li className="flex gap-3 text-body-sm text-neutral-700">
                    <span className="flex-shrink-0 text-primary font-bold">3.</span>
                    <span>Together, we'll explore how Team PRSM can bring value to your organization</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:woo_ainsley@mymail.sutd.edu.sg?subject=Partnership Inquiry - 2025 Capstone Project"
                  className="block w-full px-8 py-4 bg-primary text-white text-sm font-semibold tracking-wide text-center hover:bg-primary-dark transition-colors"
                >
                  SEND PARTNERSHIP INQUIRY
                </a>
                <a
                  href="#requirements-section"
                  className="block w-full px-8 py-4 border border-neutral-300 text-neutral-900 text-sm font-semibold tracking-wide text-center hover:border-neutral-900 transition-colors"
                >
                  VIEW REQUIREMENTS
                </a>
              </div>
            </div>

            {/* SUTD Affiliation */}
            <div className="mt-12">
              <div className="glass-subtle p-6 rounded-xl border border-neutral-200">
                <p className="text-body text-neutral-700 font-medium mb-2">
                  Singapore University of Technology and Design
                </p>
                <p className="text-body-sm text-neutral-600">
                  8 Somapah Road, Singapore 487372
                </p>
                <p className="text-body-sm text-neutral-500 mt-2">
                  Capstone Project Team © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
