'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Spotlight } from '@/components/ui/spotlight-new';

export default function WhyPartner() {
  const sectionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Value cards flip in like cards being dealt
            if (valuesRef.current) {
              anime({
                targets: valuesRef.current.children,
                opacity: [0, 1],
                translateY: [60, 0],
                rotateX: [60, 0],
                scale: [0.8, 1],
                duration: 1000,
                delay: anime.stagger(150, { from: 'center' }),
                easing: 'spring(1, 70, 10, 0)',
              });
            }

            // Benefits slide in from left
            anime({
              targets: benefitsRef.current,
              opacity: [0, 1],
              translateX: [-40, 0],
              duration: 1000,
              delay: 600,
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });

            // Stats slide in from right
            anime({
              targets: statsRef.current,
              opacity: [0, 1],
              translateX: [40, 0],
              duration: 1000,
              delay: 800,
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });

            // Animate checkmarks
            anime({
              targets: '.benefit-check',
              scale: [0, 1],
              rotate: [45, 0],
              duration: 600,
              delay: anime.stagger(80, { start: 900 }),
              easing: 'easeOutElastic(1, .5)',
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

    // Floating animation for value cards
    const handleScroll = () => {
      if (!valuesRef.current) return;

      const rect = valuesRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const cards = valuesRef.current.children;
        const scrollProgress = 1 - (rect.top / window.innerHeight);

        Array.from(cards).forEach((card, index) => {
          const float = Math.sin(scrollProgress * Math.PI * 2 + index) * 5;
          (card as HTMLElement).style.transform = `translateY(${float}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const values = [
    {
      number: '01',
      title: 'Cross-Disciplinary Expertise',
      description: 'Our team spans 4 core SUTD pillars: Computer Science, Engineering Systems, Engineering Product Design, and Architecture—bringing diverse perspectives to every challenge',
    },
    {
      number: '02',
      title: 'Cutting-Edge Technical Skills',
      description: 'From AI/ML and cybersecurity to robotics, IoT, and data analytics, we combine emerging technologies with proven engineering fundamentals',
    },
    {
      number: '03',
      title: 'Real-World Project Experience',
      description: 'Proven track record with autonomous systems, AI-driven applications, interactive dashboards, smart infrastructure, and embedded systems across multiple industries',
    },
    {
      number: '04',
      title: 'Innovation with Integrity',
      description: 'Guided by core values of integrity, curiosity, collaboration, sustainability, and equity—we build solutions that are ethical, inclusive, and impactful',
    },
  ];

  const benefits = [
    'Access to 6 highly skilled students across multiple engineering disciplines',
    'Full academic year of dedicated development (equivalent to 2 semesters)',
    '100% intellectual property rights belong to your organization',
    'Cost-effective innovation at SGD 6,000 participation fee',
    'Fresh perspectives combining academic research with practical application',
    'Potential pipeline for recruiting top emerging talent',
    'Contribution to education while solving real business challenges',
    'Support from SUTD faculty mentors and university resources',
  ];

  const stats = [
    { number: '6', label: 'Team Members' },
    { number: '4', label: 'SUTD Disciplines' },
    { number: '12+', label: 'Technical Skills' },
    { number: '100%', label: 'Your IP' },
  ];

  return (
    <section
      ref={sectionRef}
      id="partner-section"
      className="section-spacing relative overflow-hidden bg-black/[0.96]"
    >
      {/* Spotlight Background */}
      <Spotlight />

      <div className="relative z-10">
      <div className="max-w-grid mx-auto px-12">
        {/* Section Header */}
        <div className="mb-24">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-widest text-neutral-300 uppercase">
              Partnership
            </span>
            <div className="h-px bg-primary mt-2 w-12" />
          </div>
          <h2 className="text-display font-semibold text-white mb-4 tracking-tight max-w-content">
            Why Partner With Us
          </h2>
          <p className="text-h4 text-neutral-200 font-normal max-w-narrow">
            A skunkworks of positive impact—transforming complex challenges into purposeful, innovative solutions.
          </p>
        </div>

        {/* Value Propositions - Swiss Grid */}
        <div ref={valuesRef} className="grid md:grid-cols-2 gap-8 mb-24">
          {values.map((value, index) => (
            <div key={index} className="opacity-0 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-6">{value.number}</div>
              <h3 className="text-h3 font-semibold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-body text-neutral-200 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Benefits Section */}
          <div ref={benefitsRef} className="opacity-0">
            <h3 className="text-h3 font-semibold text-white mb-8">
              Partnership Benefits
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="benefit-check flex-shrink-0 w-6 h-6 border-swiss bg-primary flex items-center justify-center mt-1">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <p className="text-body text-neutral-200 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className="opacity-0">
            <div className="bg-white/10 backdrop-blur-md border-2 border-primary p-10 rounded-2xl h-full">
              <div className="text-xs font-semibold tracking-widest text-neutral-300 uppercase mb-8">
                Team at a Glance
              </div>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-bold text-primary mb-3">
                      {stat.number}
                    </div>
                    <div className="text-sm text-neutral-200 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/20">
                <h4 className="text-h4 font-semibold text-white mb-4">
                  Our Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Robotics', 'AI/ML', 'Cybersecurity', 'IoT', 'Data Analytics', 'Cloud Infrastructure', 'Computer Vision', 'System Optimization'].map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-medium text-neutral-100 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-2xl hover:shadow-2xl transition-all duration-500">
          <h3 className="text-h3 font-semibold text-white mb-4">
            Ready to Innovate Together?
          </h3>
          <p className="text-body text-neutral-200 mb-8 max-w-2xl mx-auto">
            Partner with Team PRSM for your 2025 Capstone project. We combine diverse disciplines, cutting-edge skills, and ethical innovation to deliver solutions that make a real impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact-section"
              className="inline-block px-8 py-3.5 bg-primary text-white text-sm font-semibold tracking-wide hover:bg-primary-dark transition-colors"
            >
              GET IN TOUCH
            </a>
            <a
              href="#requirements-section"
              className="inline-block px-8 py-3.5 border border-white/40 text-white text-sm font-semibold tracking-wide hover:border-white hover:bg-white/10 transition-colors"
            >
              VIEW REQUIREMENTS
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
