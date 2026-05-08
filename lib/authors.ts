export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  longBio: string;
  initials: string;
  photo?: string;
  linkedin?: string;
  twitter?: string;
  expertise: string[];
  yearsExperience: number;
}

export const authors: Author[] = [
  {
    slug: "adam",
    name: "Adam Clarke",
    title: "Senior SEO Strategist",
    initials: "AC",
    photo: undefined, // Add /images/authors/adam.jpg once a photo is available
    linkedin: "", // TODO: add LinkedIn profile URL
    twitter: "", // TODO: add Twitter/X profile URL
    yearsExperience: 8,
    bio: "Senior SEO Strategist at FastSEO specialising in iGaming, adult content, cryptocurrency, and other restricted niches where mainstream agencies refuse to operate.",
    longBio: `Adam Clarke is a Senior SEO Strategist with over 8 years of experience in regulated and restricted-niche SEO. Before FastSEO, Adam built organic search programmes for licensed gambling operators across European markets — developing the niche-specific technical knowledge, publisher relationships, and keyword intelligence that generalist practitioners do not have.

At FastSEO, Adam leads strategy for the agency's restricted-niche client portfolio, covering iGaming SEO, adult SEO, cryptocurrency SEO, and cannabis SEO. His work spans technical audits, content architecture, link acquisition, and E-E-A-T strategy for clients in industries where organic search is the only scalable acquisition channel.

Adam's published work covers iGaming link building strategy, adult SEO compliance requirements, and the intersection of traditional SEO with emerging AI search visibility optimisation.`,
    expertise: [
      "iGaming SEO",
      "Adult SEO",
      "Link Building",
      "Technical SEO",
      "E-E-A-T Strategy",
      "Crypto SEO",
    ],
  },
];

export function getAuthorBySlug(slug: string): Author | null {
  return authors.find((a) => a.slug === slug.toLowerCase()) ?? null;
}

export function getAuthorByName(name: string): Author | null {
  const normalized = name.toLowerCase().trim();
  return (
    authors.find((a) => {
      const firstName = a.name.split(" ")[0].toLowerCase();
      return (
        a.name.toLowerCase() === normalized ||
        firstName === normalized ||
        normalized.startsWith(firstName)
      );
    }) ?? null
  );
}

export function buildPersonSchema(author: Author, baseUrl = "https://www.fastseosolutions.com") {
  const sameAs = [author.linkedin, author.twitter].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.title,
    description: author.bio,
    url: `${baseUrl}/author/${author.slug}/`,
    ...(author.photo ? { image: `${baseUrl}${author.photo}` } : {}),
    worksFor: {
      "@type": "Organization",
      name: "FastSEO",
      url: baseUrl,
    },
    knowsAbout: author.expertise,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}
