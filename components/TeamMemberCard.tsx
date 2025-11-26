'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

interface TeamMember {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  image: string;
  skills: string[];
  linkedin?: string;
  github?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cards reveal with unique animations based on index
            const isEven = index % 2 === 0;
            anime({
              targets: cardRef.current,
              opacity: [0, 1],
              translateY: [60, 0],
              translateX: [isEven ? -30 : 30, 0],
              rotateY: [isEven ? -15 : 15, 0],
              scale: [0.9, 1],
              duration: 1000,
              delay: index * 120,
              easing: 'spring(1, 75, 10, 0)',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, [index]);

  return (
    <div ref={cardRef} className="opacity-0 transition-transform duration-300 ease-out">
      {/* Swiss Design Card - Uniform and Minimal with Glassmorphism */}
      <div className="glass-card p-8 h-full flex flex-col rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
        {/* Number indicator */}
        <div className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Member Image */}
        <div className="mb-6 overflow-hidden rounded-xl">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            style={{
              objectPosition: member.name === 'Woo Jon Hou Ainsley' ? 'center 1%' :
                             member.name === 'Baddipadige Amith Reddy' ? 'center 40%' :
                             member.name === 'Akash' ? 'center 70%' :
                             'center center'
            }}
          />
        </div>

        {/* Name */}
        <h3 className="text-h3 font-semibold text-neutral-900 mb-2">
          {member.name}
        </h3>

        {/* Role & Discipline with separator */}
        <div className="mb-6">
          <p className="text-body font-semibold text-neutral-900">
            {member.role}
          </p>
          <div className="h-px bg-neutral-200 my-3 w-16" />
          <p className="text-body-sm text-neutral-600 font-medium">
            {member.discipline}
          </p>
        </div>

        {/* Bio - consistent line height */}
        <p className="text-body text-neutral-700 leading-relaxed mb-6 flex-grow">
          {member.bio}
        </p>

        {/* Skills - Clean grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {member.skills.map((skill, idx) => (
            <div
              key={idx}
              className="text-xs font-medium text-neutral-600 border-swiss px-3 py-2 text-center"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Social Links - Icons */}
        {(member.linkedin || member.github) && (
          <div className="flex gap-3 pt-4 border-t border-neutral-200">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
