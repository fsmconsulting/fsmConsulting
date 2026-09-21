interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  clusterName?: string;
}

export default function ServiceJsonLd({
  name,
  description,
  url,
  clusterName,
}: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "@id": "https://fsmconsulting.org/#organization",
      "name": "FSM Consulting Limited",
      "url": "https://fsmconsulting.org"
    },
    "areaServed": {
      "@type": "Continent",
      "name": "Africa"
    },
    ...(clusterName ? { "category": clusterName } : {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
