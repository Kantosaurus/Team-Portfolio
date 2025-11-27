'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is a Capstone project?',
      answer: 'A Capstone project is a comprehensive, year-long university-industry partnership program where final-year undergraduate students work in cross-disciplinary teams to solve real-world business and technical challenges. The SUTD Capstone program pairs teams of 5-7 students from diverse disciplines with industry partners to deliver innovative, practical solutions that bridge academic knowledge and professional practice.'
    },
    {
      question: 'How does the SUTD Capstone program work?',
      answer: 'The SUTD Capstone program is structured as a full academic year collaboration. Industry partners present real-world challenges, and capstone teams work alongside company mentors to research, design, prototype, and deliver solutions. Students apply their technical expertise, project management skills, and creative problem-solving throughout the capstone experience, culminating in a final presentation and deliverable product or system.'
    },
    {
      question: 'What makes Team PRSM a strong capstone partner?',
      answer: 'Team PRSM brings together six students from four different disciplines: Computer Science and Design (CSD), Engineering Systems and Design (ESD), Architecture and Sustainable Design (ASD), and Engineering Products and Design (EPD). This cross-disciplinary capstone team offers expertise in cybersecurity, AI/ML, data analytics, IoT systems, robotics, hardware design, and sustainable architecture - providing comprehensive solutions from multiple technical perspectives.'
    },
    {
      question: 'What are the benefits of partnering with a capstone team?',
      answer: 'Partnering with a capstone team provides access to fresh perspectives, cutting-edge academic knowledge, and innovative solutions at a fraction of traditional consulting costs. Companies gain enthusiastic, talented students who dedicate an entire year to solving your challenges, while also strengthening university-industry relationships and potentially identifying future talent. The capstone partnership offers tangible deliverables with real business impact.'
    },
    {
      question: 'What types of projects are suitable for capstone?',
      answer: 'Capstone projects work best when they involve real technical or business challenges that require innovative solutions. Ideal capstone projects include developing new software applications, designing IoT systems, creating data analytics platforms, prototyping hardware devices, conducting feasibility studies, optimizing business processes, or building proof-of-concept systems. The best capstone partnerships provide clear objectives while allowing creative problem-solving.'
    },
    {
      question: 'How long does the capstone program run?',
      answer: 'The SUTD Capstone program runs for one full academic year, typically from September to April. This extended timeline allows capstone teams to thoroughly understand the problem space, research solutions, develop prototypes, iterate based on feedback, and deliver polished final outcomes. Regular check-ins and milestone presentations ensure continuous progress throughout the capstone journey.'
    },
    {
      question: 'What commitment is required from industry partners?',
      answer: 'Industry partners are expected to provide a clear problem statement, assign a dedicated mentor for regular guidance, attend milestone presentations, and offer necessary resources or data access. Most capstone partnerships require approximately 2-4 hours per month for mentorship meetings and feedback sessions. This modest time investment enables students to deliver maximum value while ensuring alignment with company objectives.'
    },
    {
      question: 'How can my company start a capstone partnership with Team PRSM?',
      answer: 'To begin a capstone partnership with Team PRSM, reach out through our contact form or email us directly at woo_ainsley@mymail.sutd.edu.sg. We\'ll schedule an initial discussion to understand your challenges, explore potential capstone project ideas, and determine if there\'s a strong fit. The capstone matching process typically involves proposal presentations and mutual agreement on project scope and deliverables.'
    }
  ];

  return (
    <section
      id="faq-section"
      className="section-spacing relative overflow-hidden bg-gradient-to-b from-white to-neutral-50"
    >
      <div className="max-w-grid mx-auto px-12">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Frequently Asked Questions
            </span>
            <div className="h-px bg-primary mt-2 w-12 mx-auto" />
          </div>
          <h2 className="text-display font-semibold text-neutral-900 mb-4 tracking-tight">
            Capstone Program FAQ
          </h2>
          <p className="text-h4 text-neutral-600 max-w-2xl mx-auto font-normal">
            Common questions about SUTD Capstone projects and partnering with Team PRSM
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 hover:bg-neutral-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-h4 font-semibold text-neutral-900" itemProp="name">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div
                  className="px-8 pb-6"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-body text-neutral-600 leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-body-lg text-neutral-600 mb-6">
            Have more questions about our capstone program?
          </p>
          <a
            href="#contact-section"
            className="inline-block px-8 py-4 bg-primary text-white text-base font-semibold hover:bg-primary-dark transition-colors"
          >
            Contact Team PRSM
          </a>
        </div>
      </div>
    </section>
  );
}
