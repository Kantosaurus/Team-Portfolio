'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function ExpertiseMatrix() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.expertise-item',
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              delay: anime.stagger(100),
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

  const technicalSkills = [
    'Full-Stack Development',
    'Cloud Architecture',
    'Machine Learning',
    'IoT Integration',
    'DevOps & CI/CD',
    'Database Design',
  ];

  const softSkills = [
    'Cross-Disciplinary Collaboration',
    'Agile Methodology',
    'Design Thinking',
    'Problem Solving',
    'Communication',
    'Project Management',
  ];

  const tools = [
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Git', icon: '📦' },
  ];

  return (
    <section
      ref={sectionRef}
      id="expertise-section"
      className="relative py-32 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            Breadth and depth across disciplines, technologies, and methodologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 mb-24">
          {/* Technical Skills */}
          <div className="expertise-item opacity-0">
            <h3 className="text-3xl font-semibold text-gray-900 mb-8">
              Technical Skills
            </h3>
            <div className="space-y-3">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="text-lg text-gray-600 font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="expertise-item opacity-0">
            <h3 className="text-3xl font-semibold text-gray-900 mb-8">
              Soft Skills
            </h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="text-lg text-gray-600 font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="expertise-item opacity-0">
          <h3 className="text-3xl font-semibold text-gray-900 mb-12">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-gray-900 font-medium"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
