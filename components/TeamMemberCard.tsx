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
            anime({
              targets: cardRef.current,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              delay: index * 80,
              easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={cardRef} className="opacity-0">
      {/* No card container - just clean layout */}
      <div className="space-y-4">
        {/* Name - large and prominent */}
        <h3 className="text-3xl font-semibold text-gray-900">
          {member.name}
        </h3>

        {/* Role & Discipline */}
        <div className="space-y-1">
          <p className="text-lg text-gray-900 font-medium">
            {member.role}
          </p>
          <p className="text-sm text-gray-500 font-medium">
            {member.discipline}
          </p>
        </div>

        {/* Bio */}
        <p className="text-base text-gray-600 leading-relaxed max-w-md">
          {member.bio}
        </p>

        {/* Skills - minimal tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {member.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs font-medium text-gray-500 px-3 py-1 bg-gray-100 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        {(member.linkedin || member.github) && (
          <div className="flex gap-4 pt-2">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                LinkedIn →
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
