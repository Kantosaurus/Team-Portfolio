'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function WhyPartner() {
  const sectionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (valuesRef.current) {
              anime({
                targets: valuesRef.current.children,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                delay: anime.stagger(100),
                easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
              });
            }

            anime({
              targets: [benefitsRef.current, testimonialRef.current],
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 1000,
              delay: anime.stagger(200, { start: 400 }),
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

  const values = [
    {
      icon: '🎯',
      title: 'Innovation-Driven',
      description: 'We bring fresh perspectives and cutting-edge solutions to complex challenges',
    },
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: 'Multiple awards in hackathons and design competitions across ASEAN region',
    },
    {
      icon: '⚡',
      title: 'Rapid Execution',
      description: 'Agile methodology ensures fast iteration and delivery without compromising quality',
    },
    {
      icon: '🔬',
      title: 'Research Excellence',
      description: 'Academic rigor meets practical application in every project we undertake',
    },
  ];

  const benefits = [
    'Access to cutting-edge research and innovation',
    'Skilled execution across multiple disciplines',
    'Cost-effective collaboration with emerging talent',
    'Fresh perspectives on industry challenges',
    'Potential for long-term partnership and recruitment',
    'Contribution to education and social impact',
  ];

  return (
    <section
      ref={sectionRef}
      id="partner-section"
      className="relative py-32 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
            Why Partner With Us
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            Transform your vision into reality with innovation, expertise, and impact.
          </p>
        </div>

        {/* Value Propositions - No cards */}
        <div ref={valuesRef} className="grid md:grid-cols-2 gap-x-16 gap-y-12 mb-32">
          {values.map((value, index) => (
            <div key={index} className="opacity-0">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-lg text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section - Clean list */}
        <div ref={benefitsRef} className="mb-32 opacity-0">
          <h3 className="text-3xl font-semibold text-gray-900 mb-12">
            Partnership Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-lg text-gray-600">
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial - Glassmorphic */}
        <div ref={testimonialRef} className="opacity-0 mb-16">
          <div className="glass border border-gray-200/50 rounded-3xl p-12 md:p-16">
            <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-8">
              "Working with Team PRSM exceeded our expectations. Their interdisciplinary approach and technical prowess delivered solutions we hadn't even imagined."
            </blockquote>
            <div className="text-lg text-gray-600">
              <p className="font-semibold text-gray-900">Dr. Michael Chen</p>
              <p>Industry Partner, TechCorp Innovation Lab</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact-section"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
          >
            Get Our Team Brochure
          </a>
          <p className="text-gray-600 mt-4 text-sm">
            Download our one-page PDF summary
          </p>
        </div>
      </div>
    </section>
  );
}
