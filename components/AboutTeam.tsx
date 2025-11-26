'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function AboutTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Story slides in from left
            anime({
              targets: storyRef.current,
              opacity: [0, 1],
              translateX: [-60, 0],
              duration: 1200,
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });

            // Mission slides in from right with delay
            anime({
              targets: missionRef.current,
              opacity: [0, 1],
              translateX: [60, 0],
              duration: 1200,
              delay: 300,
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });

            // Values cascade in with rotation
            if (valuesRef.current) {
              anime({
                targets: valuesRef.current.children,
                opacity: [0, 1],
                translateY: [40, 0],
                rotateX: [45, 0],
                duration: 1000,
                delay: anime.stagger(120, { start: 600 }),
                easing: 'spring(1, 80, 10, 0)',
              });
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Scroll parallax effect
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = 1 - (rect.top / window.innerHeight);

      if (scrollProgress > 0 && scrollProgress < 1) {
        if (storyRef.current) {
          storyRef.current.style.transform = `translateY(${scrollProgress * -20}px)`;
        }
        if (missionRef.current) {
          missionRef.current.style.transform = `translateY(${scrollProgress * 20}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const values = [
    { title: 'Integrity', description: 'We build with honesty, transparency, and ethical responsibility in every decision we make' },
    { title: 'Curiosity', description: 'We ask questions, explore possibilities, and never stop learning' },
    { title: 'Collaboration', description: 'We combine diverse perspectives to create solutions greater than the sum of their parts' },
    { title: 'Sustainability', description: 'We design for longevity, considering environmental and social impact in everything we create' },
    { title: 'Equity', description: 'We ensure our innovations are accessible, inclusive, and beneficial to all' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about-section"
      className="section-spacing relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/prism-background.jpg)',
            opacity: 1,
          }}
        />
      </div>
      {/* Additional decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full filter blur-3xl opacity-10" />
      </div>
      <div className="relative z-10">
      <div className="max-w-grid mx-auto px-12">
        {/* Section Header - Swiss Design */}
        <div className="mb-24">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-widest text-white uppercase">
              About
            </span>
            <div className="h-px bg-white mt-2 w-12" />
          </div>
          <h2 className="text-display font-semibold text-white mb-4 tracking-tight max-w-content">
            About Team PRSM
          </h2>
          <p className="text-h4 text-white font-normal max-w-narrow">
            Refracting one vision into many perspectives.
          </p>
        </div>

        {/* Vision and Mission Layout */}
        <div className="mb-24">
          {/* Vision Section */}
          <div ref={storyRef} className="mb-16 opacity-0">
            <h3 className="text-h3 font-semibold text-white mb-8">
              Our Vision
            </h3>
            <div className="space-y-6 text-body-lg text-white leading-relaxed max-w-4xl">
              <p>
                Our vision is to become a skunkworks of positive impact — a team that refracts diverse perspectives into breakthrough innovations that are bold, ethical, and transformative.
              </p>
              <p>
                We strive to shape a future where technology illuminates rather than overwhelms, and where every solution we create uplifts people, communities, and the world.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div ref={missionRef} className="opacity-0">
            <h3 className="text-h3 font-semibold text-white mb-8">
              Our Mission
            </h3>
            <div className="space-y-6 text-body-lg text-white leading-relaxed max-w-4xl">
              <p>
                At PRSM, our mission is to innovate boldly and build responsibly.
              </p>
              <p>
                Inspired by skunkworks culture, we move fast, think fearlessly, and combine our diverse disciplines to transform complex challenges into purposeful solutions.
              </p>
              <p>
                We are driven by a commitment to do good, do no harm, and ensure that every idea we develop makes a meaningful, human-centred impact.
              </p>
            </div>
          </div>
        </div>

        {/* Values - Uniform Grid */}
        <div>
          <h3 className="text-h3 font-semibold text-white mb-12">
            Our Core Values
          </h3>
          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div key={index} className="opacity-0">
                <div className="p-6 h-full rounded-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20" style={{ backgroundColor: 'rgba(64, 64, 64, 0.3)' }}>
                  <div className="text-4xl font-bold text-white mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h4 className="text-h4 font-semibold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-body-sm text-white leading-relaxed">
                    {value.description}
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
