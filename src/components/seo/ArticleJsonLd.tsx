interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  authorName?: string;
}

export default function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  authorName = "FSM Consulting Limited",
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    "headline": title,
    "description": description,
    "url": url,
    ...(image ? {
      "image": image.startsWith("http") ? image : `https://fsmconsulting.org${image}`
    } : {}),
    ...(datePublished ? { "datePublished": datePublished } : {}),
    "author": {
      "@type": "Organization",
      "@id": "https://fsmconsulting.org/#organization",
      "name": authorName,
      "url": "https://fsmconsulting.org"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://fsmconsulting.org/#organization",
      "name": "FSM Consulting Limited",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fsmconsulting.org/FSMLogo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
