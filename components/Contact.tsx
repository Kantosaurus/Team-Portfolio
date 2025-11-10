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
            anime({
              targets: [contentRef.current, ctaRef.current],
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 1000,
              delay: anime.stagger(200),
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
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
      className="relative py-32 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            Ready to partner with us? Let's discuss your project.
          </p>
        </div>

        {/* Contact Information - Clean layout */}
        <div ref={contentRef} className="mb-24 opacity-0">
          <div className="space-y-12">
            {/* Email */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Email
              </h3>
              <a
                href="mailto:capstone.prsm@sutd.edu.sg"
                className="text-xl text-blue-600 hover:opacity-70 transition-opacity"
              >
                capstone.prsm@sutd.edu.sg
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                LinkedIn
              </h3>
              <a
                href="https://linkedin.com/company/team-prsm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-600 hover:opacity-70 transition-opacity"
              >
                linkedin.com/company/team-prsm
              </a>
            </div>

            {/* GitHub */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                GitHub
              </h3>
              <a
                href="https://github.com/team-prsm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-600 hover:opacity-70 transition-opacity"
              >
                github.com/team-prsm
              </a>
            </div>
          </div>
        </div>

        {/* CTA - Glassmorphic */}
        <div ref={ctaRef} className="mb-16 opacity-0">
          <div className="glass border border-gray-200/50 rounded-3xl p-12 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Ready to Collaborate?
            </h3>
            <p className="text-xl text-gray-600 mb-10">
              Download our team brochure or schedule a meeting to discuss partnership opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                Download Brochure
              </button>
              <a
                href="mailto:capstone.prsm@sutd.edu.sg?subject=Partnership Inquiry"
                className="px-8 py-4 bg-white border border-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-colors"
              >
                Schedule Meeting
              </a>
            </div>
          </div>
        </div>

        {/* SUTD Affiliation */}
        <div className="text-center">
          <p className="text-base text-gray-600 mb-2">
            Singapore University of Technology and Design
          </p>
          <p className="text-sm text-gray-500">
            This portfolio represents a Capstone project team. All rights reserved © 2025
          </p>
        </div>
      </div>
    </section>
  );
}
