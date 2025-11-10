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
            anime({
              targets: [storyRef.current, missionRef.current],
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 1000,
              delay: anime.stagger(200),
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });

            if (valuesRef.current) {
              anime({
                targets: valuesRef.current.children,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                delay: anime.stagger(100, { start: 400 }),
                easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
              });
            }

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
    { icon: '🎯', title: 'Innovation First', description: 'We push boundaries and embrace creative solutions' },
    { icon: '🤝', title: 'Collaboration', description: 'Cross-disciplinary teamwork drives our success' },
    { icon: '💡', title: 'Impact Driven', description: 'Every project creates meaningful change' },
    { icon: '🚀', title: 'Continuous Growth', description: 'Learning and adapting is our foundation' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about-section"
      className="relative py-32 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
            About Team PRSM
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            Refracting one vision into many perspectives.
          </p>
        </div>

        {/* Story - Clean text block */}
        <div ref={storyRef} className="mb-24 opacity-0">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            The Story Behind PRSM
          </h3>
          <div className="space-y-4 text-lg text-gray-600 max-w-4xl leading-relaxed">
            <p>
              PRSM — pronounced "prism" — embodies the idea of taking a single beam of light and refracting it into countless colors. For us, that light represents a shared vision: to do good for the world, to do no harm, and to bring clarity where things are complex.
            </p>
            <p>
              Each of us comes from a different discipline, with our own strengths, lenses, and ways of seeing the world. Like a prism, our team turns one idea into many perspectives — engineering precision, design empathy, computational logic, and strategic insight — all converging into solutions that are creative, responsible, and human-centered.
            </p>
            <p>
              We see ourselves as a kind of skunkworks: small, agile, and relentlessly inventive. When faced with challenges, we thrive on experimentation, rapid prototyping, and unconventional thinking. We don't just look for answers — we build them, turning ambiguity into opportunity.
            </p>
            <p>
              PRSM isn't just our name; it's our philosophy. We believe innovation should illuminate, not overwhelm. Our goal is to design and engineer solutions that reflect integrity, imagination, and impact — refracting one shared light into something greater than any single color alone.
            </p>
          </div>
        </div>

        {/* Mission - Glassmorphic block */}
        <div ref={missionRef} className="mb-32 opacity-0">
          <div className="glass border border-gray-200/50 rounded-3xl p-12 md:p-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-6">
              "We aim to bridge design and technology to create impactful solutions that address real-world challenges."
            </p>
            <p className="text-lg text-gray-600">
              Through interdisciplinary collaboration and innovative thinking, we transform complex problems into elegant solutions.
            </p>
          </div>
        </div>

        {/* Values - No cards, clean grid */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div ref={valuesRef} className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {values.map((value, index) => (
              <div key={index} className="opacity-0">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-base text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
