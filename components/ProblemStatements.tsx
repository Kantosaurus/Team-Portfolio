'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

export default function ProblemStatements() {
  const problems = [
    {
      title: 'Trackless MRT Singapore',
      description: 'Urban areas need flexible, high-capacity public transport systems that are cheaper and faster to deploy than rail-based MRTs. A trackless MRT offers the opportunity to deliver MRT-level efficiency without the cost, construction delays, or physical track constraints, enabling cities to expand transit coverage rapidly and adapt routes dynamically as demand changes.',
    },
    {
      title: 'Artificial Intelligence for Commerce',
      description: 'In a future where AGI handles life\'s busywork, buying and selling physical items shouldn\'t still rely on humans manually searching, pricing, and listing them. To get there, we need a way for intelligent agents to see the real world. This project builds that bridge: AI trading agents paired with recognition-powered smart glasses that instantly identify objects, evaluate their value, and help users buy or sell with zero effort. It\'s a first step toward a world where your AGI can manage your physical assets as easily as your digital life.',
    },
    {
      title: 'Drone Deployment and Operations',
      description: 'As demand for rapid, on-demand delivery grows, drones offer a promising solution. However, safety, reliability, and precise navigation remain major barriers to real-world deployment. Current delivery drones struggle with obstacle avoidance, secure payload handling, and resilient operation in complex urban environments. There is a need for a safer, smarter drone system that can deliver goods autonomously while protecting people, property, and the package itself. This project aims to create a next-generation "safe delivery drone" that integrates intelligent routing, real-time risk assessment, and robust fail-safes to make autonomous aerial deliveries both practical and trustworthy.',
    },
  ];

  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = problems.map((_, index) => index / problems.length);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <section
      id="problem-statements-section"
      className="relative overflow-hidden py-32"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.8) 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-40 right-40 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-15" />
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="relative z-10">
        <div className="max-w-grid mx-auto px-12">
          {/* Section Header */}
          <div className="mb-32">
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                What We Solve
              </span>
              <div className="h-px bg-primary mt-2 w-12" />
            </div>
            <h2 className="text-display font-semibold text-neutral-900 mb-4 tracking-tight max-w-content">
              Problem Statements
            </h2>
            <p className="text-h4 text-neutral-600 max-w-narrow font-normal">
              Complex challenges we're tackling for real-world impact
            </p>
          </div>

          {/* Sticky Scroll Container */}
          <div className="relative grid lg:grid-cols-12 gap-12">
            {/* Left side - Scrollable Problem Cards */}
            <div className="lg:col-span-8">
              <div
                ref={containerRef}
                className="relative overflow-y-auto h-[700px] rounded-3xl px-2 smooth-scroll"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(147, 51, 234, 0.3) transparent',
                }}
              >
                <div className="space-y-8 pb-96">
                  {problems.map((problem, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        scale: activeCard === index ? 1 : 0.96,
                        opacity: activeCard === index ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="glass-card rounded-3xl p-12 transition-shadow duration-500"
                    >
                      <div className="flex gap-8 items-start">
                        {/* Number */}
                        <motion.div
                          animate={{
                            opacity: activeCard === index ? 0.3 : 0.15,
                            scale: activeCard === index ? 1.05 : 0.95,
                          }}
                          transition={{ duration: 0.5 }}
                          className="flex-shrink-0 text-7xl font-bold text-primary leading-none"
                        >
                          {String(index + 1).padStart(2, '0')}
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 pt-2">
                          <h3 className="text-h2 font-semibold text-neutral-900 mb-6">
                            {problem.title}
                          </h3>
                          <div className="h-px bg-gradient-to-r from-primary/30 via-neutral-300 to-transparent mb-6" />
                          <p className="text-body-lg text-neutral-700 leading-relaxed">
                            {problem.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Sticky Progress Indicator */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-3xl p-8 backdrop-blur-xl"
                >
                  <div className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
                    Current Focus
                  </div>

                  <motion.div
                    key={activeCard}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8"
                  >
                    <div className="text-5xl font-bold text-primary mb-4">
                      {String(activeCard + 1).padStart(2, '0')}
                    </div>
                    <h4 className="text-h4 font-semibold text-neutral-900 leading-tight">
                      {problems[activeCard].title}
                    </h4>
                  </motion.div>

                  <div className="space-y-3">
                    {problems.map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ width: "40%" }}
                        animate={{
                          width: index === activeCard ? "100%" : index < activeCard ? "60%" : "40%",
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-1.5 rounded-full transition-colors duration-500 ${
                              index === activeCard
                                ? 'bg-primary'
                                : index < activeCard
                                ? 'bg-primary/50'
                                : 'bg-neutral-300'
                            }`}
                            style={{ width: '100%' }}
                          />
                          <span
                            className={`text-xs font-medium whitespace-nowrap transition-opacity duration-300 ${
                              index === activeCard ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            {index + 1}/{problems.length}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <p className="text-xs text-neutral-500 italic">
                      Scroll to explore each problem
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
