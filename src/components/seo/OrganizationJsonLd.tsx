export default function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://fsmconsulting.org/#organization",
        "name": "FSM Consulting Limited",
        "legalName": "FSM Consulting Limited",
        "url": "https://fsmconsulting.org",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://fsmconsulting.org/#logo",
          "url": "https://fsmconsulting.org/FSMLogo.png",
          "caption": "FSM Consulting Limited Logo"
        },
        "image": "https://fsmconsulting.org/FSMLogo.png",
        "description": "FSM Consulting Limited is a multidisciplinary development delivery, implementation acceleration, and project assurance firm helping governments, development partners, IFIs, and the private sector transform investments into measurable results and sustainable impact across Africa.",
        "founder": {
          "@type": "Person",
          "@id": "https://fsmconsulting.org/#founder",
          "name": "Fatima Sadiq Mohammed",
          "jobTitle": "Founder, Principal Shareholder & Chief Executive Officer",
          "image": "https://fsmconsulting.org/Founder.PNG",
          "description": "Development and governance professional leading FSM's strategic direction and multidisciplinary delivery model across social protection, development policy, institutional strengthening, and development programme delivery."
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Abuja",
          "addressCountry": "NG"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+2349040009512",
            "contactType": "customer service",
            "email": "info@fsmconsulting.com",
            "availableLanguage": ["en"]
          }
        ],
        "areaServed": [
          { "@type": "Continent", "name": "Africa" },
          { "@type": "Country", "name": "Nigeria" }
        ],
        "knowsAbout": [
          "Development Delivery",
          "Implementation Acceleration",
          "Project Assurance",
          "Independent Verification Agency (IVA)",
          "Technical Expert Mobilization",
          "Institutional Strengthening",
          "Monitoring, Evaluation, Accountability and Learning (MEAL)",
          "Social Protection Systems",
          "Governance and Public Administration",
          "Infrastructure Development"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://fsmconsulting.org/#website",
        "url": "https://fsmconsulting.org",
        "name": "FSM Consulting Limited",
        "publisher": {
          "@id": "https://fsmconsulting.org/#organization"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
