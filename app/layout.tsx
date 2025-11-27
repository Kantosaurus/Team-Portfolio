import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "SUTD Capstone 2025 | Team PRSM - Cross-Disciplinary Innovation Team",
  description: "Team PRSM is a SUTD Capstone 2025 team combining expertise across Computer Science, Engineering Systems, Architecture, and Engineering Products. We partner with industry to solve real-world challenges through our capstone project - a year-long university-industry collaboration at Singapore University of Technology and Design.",
  keywords: [
    "capstone",
    "capstone project",
    "SUTD capstone",
    "capstone 2025",
    "university capstone",
    "capstone team",
    "engineering capstone",
    "capstone program",
    "Singapore capstone",
    "SUTD",
    "Singapore University of Technology and Design",
    "Team PRSM",
    "cross-disciplinary team",
    "university-industry partnership",
    "final year project",
    "capstone collaboration",
    "industry partnership",
    "student capstone",
    "engineering students",
    "capstone innovation",
    "real-world capstone",
    "capstone solutions",
    "CSD", "ESD", "EPD", "ASD",
    "Computer Science and Design",
    "Engineering Systems and Design",
    "Engineering Products and Design",
    "Architecture and Sustainable Design",
  ],
  authors: [{ name: "Team PRSM" }],
  creator: "Team PRSM - SUTD Capstone 2025",
  publisher: "Singapore University of Technology and Design",
  metadataBase: new URL('https://teamprsm.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://teamprsm.vercel.app',
    title: 'SUTD Capstone 2025 | Team PRSM - Cross-Disciplinary Innovation',
    description: 'Team PRSM: SUTD Capstone 2025 cross-disciplinary team. Partner with us for innovative solutions through university-industry collaboration. Expert capstone project team ready to tackle your real-world challenges.',
    siteName: 'Team PRSM Capstone',
    images: [
      {
        url: '/capstone-prog-3.webp',
        width: 1200,
        height: 630,
        alt: 'SUTD Capstone Program - Team PRSM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUTD Capstone 2025 | Team PRSM',
    description: 'Cross-disciplinary SUTD capstone team offering innovative solutions through university-industry partnership.',
    images: ['/capstone-prog-3.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.sutd.edu.sg/#organization",
        "name": "Singapore University of Technology and Design",
        "alternateName": "SUTD",
        "url": "https://www.sutd.edu.sg",
        "logo": {
          "@type": "ImageObject",
          "url": "https://teamprsm.vercel.app/team-logo.svg"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8 Somapah Road",
          "addressLocality": "Singapore",
          "postalCode": "487372",
          "addressCountry": "SG"
        }
      },
      {
        "@type": "Course",
        "@id": "https://teamprsm.vercel.app/#capstone",
        "name": "SUTD Capstone Program",
        "description": "A year-long university-industry partnership program where cross-disciplinary student teams solve real-world challenges. The Capstone project bridges academic learning and professional practice through hands-on collaboration with industry partners.",
        "provider": {
          "@id": "https://www.sutd.edu.sg/#organization"
        },
        "courseCode": "Capstone 2025",
        "educationalLevel": "Undergraduate Final Year",
        "timeRequired": "P1Y",
        "inLanguage": "en",
        "availableLanguage": "en",
        "teaches": [
          "Cross-disciplinary collaboration",
          "Industry problem-solving",
          "Project management",
          "Technical implementation",
          "Business analysis"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://teamprsm.vercel.app/#team",
        "name": "Team PRSM",
        "description": "A cross-disciplinary SUTD Capstone 2025 team combining expertise in Computer Science, Engineering Systems, Architecture, and Engineering Products to deliver innovative solutions for industry partners.",
        "url": "https://teamprsm.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://teamprsm.vercel.app/team-logo.svg"
        },
        "foundingDate": "2024",
        "memberOf": {
          "@id": "https://www.sutd.edu.sg/#organization"
        },
        "member": [
          {
            "@type": "Person",
            "name": "Akash Subramani",
            "jobTitle": "Hardware & Robotics Engineer",
            "alumniOf": "SUTD - Engineering Products and Design"
          },
          {
            "@type": "Person",
            "name": "Baddipadige Amith Reddy",
            "jobTitle": "Cybersecurity & Software Engineer",
            "alumniOf": "SUTD - Computer Science and Design"
          },
          {
            "@type": "Person",
            "name": "Berlyn Tan",
            "jobTitle": "Data Analyst & Optimization Engineer",
            "alumniOf": "SUTD - Engineering Systems and Design"
          },
          {
            "@type": "Person",
            "name": "Goh Xun Yi Joey",
            "jobTitle": "Systems Engineer & IoT Specialist",
            "alumniOf": "SUTD - Engineering Systems and Design"
          },
          {
            "@type": "Person",
            "name": "Leo Nyuk Sze",
            "jobTitle": "Architectural Designer & Systems Innovator",
            "alumniOf": "SUTD - Architecture and Sustainable Design"
          },
          {
            "@type": "Person",
            "name": "Ainsley Woo",
            "jobTitle": "Cybersecurity & AI Specialist",
            "alumniOf": "SUTD - Computer Science and Design"
          }
        ],
        "knowsAbout": [
          "Capstone projects",
          "University-industry collaboration",
          "Cross-disciplinary engineering",
          "Software development",
          "Hardware design",
          "Data analytics",
          "Cybersecurity",
          "AI and machine learning",
          "IoT systems",
          "Sustainable architecture"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "woo_ainsley@mymail.sutd.edu.sg",
          "contactType": "Partnership Inquiries"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://teamprsm.vercel.app/#website",
        "url": "https://teamprsm.vercel.app",
        "name": "Team PRSM Capstone Portfolio",
        "description": "Official portfolio of Team PRSM - SUTD Capstone 2025 cross-disciplinary team seeking industry partnerships",
        "publisher": {
          "@id": "https://teamprsm.vercel.app/#team"
        },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://teamprsm.vercel.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "SUTD Capstone",
            "item": "https://teamprsm.vercel.app/#what-capstone-section"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Team",
            "item": "https://teamprsm.vercel.app/#team-section"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://teamprsm.vercel.app" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
