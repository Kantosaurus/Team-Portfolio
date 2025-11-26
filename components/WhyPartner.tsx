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

            // Testimonial slides in from right
            anime({
              targets: testimonialRef.current,
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
      title: 'Innovation-Driven',
      description: 'We bring fresh perspectives and cutting-edge solutions to complex challenges',
    },
    {
      number: '02',
      title: 'Proven Track Record',
      description: 'Multiple awards in hackathons and design competitions across ASEAN region',
    },
    {
      number: '03',
      title: 'Rapid Execution',
      description: 'Agile methodology ensures fast iteration and delivery without compromising quality',
    },
    {
      number: '04',
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
      className="section-spacing relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(248, 249, 250, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-40 left-40 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-15" />
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-10" />
      </div>
      <div className="relative z-10">
      <div className="max-w-grid mx-auto px-12">
        {/* Section Header */}
        <div className="mb-24">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Partnership
            </span>
            <div className="h-px bg-primary mt-2 w-12" />
          </div>
          <h2 className="text-display font-semibold text-neutral-900 mb-4 tracking-tight max-w-content">
            Why Partner With Us
          </h2>
          <p className="text-h4 text-neutral-600 font-normal max-w-narrow">
            Transform your vision into reality with innovation, expertise, and impact.
          </p>
        </div>

        {/* Value Propositions - Swiss Grid */}
        <div ref={valuesRef} className="grid md:grid-cols-2 gap-8 mb-24">
          {values.map((value, index) => (
            <div key={index} className="opacity-0 glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-6">{value.number}</div>
              <h3 className="text-h3 font-semibold text-neutral-900 mb-4">
                {value.title}
              </h3>
              <p className="text-body text-neutral-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Benefits Section */}
          <div ref={benefitsRef} className="opacity-0">
            <h3 className="text-h3 font-semibold text-neutral-900 mb-8">
              Partnership Benefits
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="benefit-check flex-shrink-0 w-6 h-6 border-swiss bg-primary flex items-center justify-center mt-1">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <p className="text-body text-neutral-700 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial - Swiss Quote Styling */}
          <div ref={testimonialRef} className="opacity-0">
            <div className="glass-secondary border-l-2 border-secondary pl-8 py-6 rounded-r-2xl">
              <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-6">
                Testimonial
              </div>
              <blockquote className="text-h4 font-medium text-neutral-900 leading-relaxed mb-8">
                "Working with Team PRSM exceeded our expectations. Their interdisciplinary approach and technical prowess delivered solutions we hadn't even imagined."
              </blockquote>
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-body font-semibold text-neutral-900">Dr. Michael Chen</p>
                <p className="text-body-sm text-neutral-600 mt-1">
                  Industry Partner, TechCorp Innovation Lab
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-card p-12 rounded-2xl hover:shadow-2xl transition-all duration-500">
          <h3 className="text-h3 font-semibold text-neutral-900 mb-4">
            Ready to Collaborate?
          </h3>
          <p className="text-body text-neutral-600 mb-8 max-w-narrow mx-auto">
            Download our team brochure or get in touch to discuss partnership opportunities
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact-section"
              className="inline-block px-8 py-3.5 bg-primary text-white text-sm font-semibold tracking-wide hover:bg-primary-dark transition-colors"
            >
              GET TEAM BROCHURE
            </a>
            <a
              href="#contact-section"
              className="inline-block px-8 py-3.5 border border-neutral-300 text-neutral-900 text-sm font-semibold tracking-wide hover:border-neutral-900 transition-colors"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
