'use client';

import { Timeline } from '@/components/ui/timeline';

export default function PartnershipTimelineNew() {
  const timelineData = [
    {
      title: 'Phase 01',
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Initial Exploratory Session
          </h3>
          <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full inline-block">
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              DEC&apos;25 – JAN&apos;26
            </span>
          </div>
          <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
            Initial exploratory session to discuss project possibilities and explore potential collaboration opportunities. This can be conducted online or in-person based on your preference.
          </p>
        </div>
      ),
    },
    {
      title: 'Phase 02',
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Joint Needs Assessment
          </h3>
          <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full inline-block">
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              FEB&apos;26 – MAR&apos;26
            </span>
          </div>
          <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
            Collaborative needs assessment session to understand your requirements and customize a comprehensive project proposal tailored to your specific objectives.
          </p>
        </div>
      ),
    },
    {
      title: 'Phase 03',
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Legal & Financial Documentation
          </h3>
          <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full inline-block">
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              2-4 Weeks
            </span>
          </div>
          <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
            Preparation and review of all legal agreements, financial documentation, and formal contracts required for the partnership.
          </p>
        </div>
      ),
    },
    {
      title: 'Phase 04',
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Approval Process
          </h3>
          <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full inline-block">
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              APR&apos;26 – JUN&apos;26
            </span>
          </div>
          <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
            Formal approval process where both parties review and finalize all agreements. The project is officially approved only when both parties have signed the partnership agreement.
          </p>
        </div>
      ),
    },
    {
      title: 'Phase 05',
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Capstone Project Execution
          </h3>
          <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full inline-block">
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              SEP&apos;26 – APR&apos;27
            </span>
          </div>
          <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
            Full Capstone project development cycle including research, design, implementation, testing, and final delivery. Regular check-ins and progress updates throughout the development period.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline-section">
      <Timeline data={timelineData} />
    </section>
  );
}
