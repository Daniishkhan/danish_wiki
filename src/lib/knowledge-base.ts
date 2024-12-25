export const companyInfo = {
  company: {
    name: "Online Remote Recruiting (ORR)",
    location: "Cambridge, Ontario, Canada",
    description: "A cutting-edge job recruitment company pioneering AI-powered recruitment solutions",
    specialization: "AI-driven recruitment and talent matching"
  },
  platform: {
    features: [
      "AI-powered job matching",
      "Advanced resume analysis",
      "Multi-platform job search integration",
      "Comprehensive dashboard systems",
      "Premium recruitment solutions"
    ],
    userTypes: {
      candidates: [
        "Profile creation and management",
        "Job search and tracking",
        "AI-powered resume scoring",
        "Application tracking",
        "Easy apply options"
      ],
      recruiters: [
        "Job posting management",
        "AI-powered candidate screening",
        "Talent matching",
        "Analytics dashboard",
        "Premium services access"
      ]
    }
  },
  keyRoutes: {
    signup: "/auth/signup",
    candidateDashboard: "/talent/dashboard/overview"
  },
  integrations: ["LinkedIn", "Indeed"],
  services: {
    core: [
      "AI-powered job matching",
      "Resume analysis",
      "Application tracking",
      "Candidate screening"
    ],
    premium: [
      "End-to-end recruitment solutions",
      "Job posting",
      "Candidate shortlisting",
      "Qualified candidate pool generation"
    ]
  },
  faqs: [
    {
      question: "How can candidates apply for jobs?",
      answer: "Candidates can either create a full profile through our signup process or use our easy apply option for direct job applications."
    },
    {
      question: "What makes ORR different?",
      answer: "We use advanced AI technology to provide more accurate job matches, going beyond traditional keyword matching to understand the full context of candidates' skills and experience."
    },
    {
      question: "Are premium services available?",
      answer: "Yes, we offer premium subscription-based services for organizations, providing end-to-end recruitment solutions including AI-powered screening and candidate pool generation."
    }
  ]
}; 