'use client';

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

  return (
    <section
      id="problem-statements-section"
      className="section-spacing relative overflow-hidden"
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
          <div className="mb-24">
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

          {/* Problem Cards */}
          <div className="space-y-12">
            {problems.map((problem, index) => (
              <div key={index} className="glass-card rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex gap-8">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-bold text-primary opacity-20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-h3 font-semibold text-neutral-900 mb-4">
                      {problem.title}
                    </h3>
                    <div className="h-px bg-gradient-to-r from-neutral-300 to-transparent mb-6" />
                    <p className="text-body text-neutral-700 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
