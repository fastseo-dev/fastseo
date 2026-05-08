export interface Author {
  slug: string;
  name: string;
  title: string;
  department: string;
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
    slug: "adam-clarke",
    name: "Adam Clarke",
    title: "Head of SEO",
    department: "Strategy",
    initials: "AC",
    photo: undefined,
    linkedin: "",
    twitter: "",
    yearsExperience: 8,
    bio: "Head of SEO at FastSEO, leading organic strategy for iGaming, adult content, cryptocurrency, and other restricted niches where mainstream agencies refuse to operate.",
    longBio: `Adam Clarke leads organic search strategy at FastSEO with over 8 years of experience in regulated and restricted-niche SEO. Before FastSEO, Adam built organic search programmes for licensed gambling operators across European markets — developing the niche-specific technical knowledge, publisher relationships, and keyword intelligence that generalist practitioners do not have.

At FastSEO, Adam oversees the agency's full restricted-niche client portfolio, covering iGaming SEO, adult SEO, cryptocurrency SEO, and cannabis SEO. His work spans technical audits, content architecture, link acquisition, and E-E-A-T strategy for clients in industries where organic search is the only scalable acquisition channel.

Adam's published work covers iGaming link building strategy, adult SEO compliance requirements, and the intersection of traditional SEO with AI search visibility optimisation.`,
    expertise: ["iGaming SEO", "Adult SEO", "E-E-A-T Strategy", "Link Building", "Technical SEO", "Crypto SEO"],
  },
  {
    slug: "sarah-mitchell",
    name: "Sarah Mitchell",
    title: "Technical SEO Lead",
    department: "Technical",
    initials: "SM",
    photo: undefined,
    linkedin: "",
    twitter: "",
    yearsExperience: 7,
    bio: "Technical SEO Lead specialising in crawl architecture, Core Web Vitals, and technical audits for large-scale regulated websites — including iGaming platforms and adult content sites.",
    longBio: `Sarah Mitchell is FastSEO's Technical SEO Lead with 7 years of experience diagnosing and fixing the technical barriers that prevent regulated websites from ranking. Her background is in large-scale e-commerce and media platform SEO, where crawl budget management and indexation control are mission-critical.

At FastSEO, Sarah leads all technical SEO audits and implementations — from canonicalisation and hreflang architecture for multi-jurisdictional gambling operators, to Core Web Vitals optimisation for adult content platforms where image and video performance is critical.

Sarah specialises in the compliance-specific technical challenges that regulated sites face: age verification implementations that Googlebot can navigate, DMCA compliance signals, and the structured data requirements for casino game pages, video content, and financial product pages.`,
    expertise: ["Technical SEO", "Core Web Vitals", "Crawl Architecture", "Site Speed", "Schema Markup", "Indexation"],
  },
  {
    slug: "james-thompson",
    name: "James Thompson",
    title: "Head of Link Building",
    department: "Link Building",
    initials: "JT",
    photo: undefined,
    linkedin: "",
    twitter: "",
    yearsExperience: 9,
    bio: "Head of Link Building with 9 years of specialist editorial outreach experience in iGaming, adult, and other restricted niches — managing publisher relationships that generalist agencies simply cannot access.",
    longBio: `James Thompson has spent 9 years building the editorial relationships and publisher networks that power FastSEO's link acquisition programmes. His specialism is restricted-niche link building — acquiring genuine editorial placements in industries where mainstream publishers refuse to engage.

James manages FastSEO's iGaming publisher network, adult content editorial relationships, and cryptocurrency media outreach programmes. His approach is quality-over-volume: every placement in a genuine publication with real editorial standards, real organic traffic, and real authority signal.

Before FastSEO, James ran link building for a major iGaming affiliate group, where he developed direct relationships with gambling publications, sports media, and adult content platforms across European and North American markets.`,
    expertise: ["iGaming Link Building", "Adult Link Building", "Editorial Outreach", "Digital PR", "Casino Backlinks", "Guest Posting"],
  },
  {
    slug: "emma-rodriguez",
    name: "Emma Rodriguez",
    title: "Content Strategist",
    department: "Content",
    initials: "ER",
    photo: undefined,
    linkedin: "",
    twitter: "",
    yearsExperience: 6,
    bio: "Content Strategist specialising in E-E-A-T optimised content and topical authority frameworks for regulated verticals — from iGaming and crypto to cannabis and dental.",
    longBio: `Emma Rodriguez builds the content architectures that give FastSEO's clients topical authority in their niches. Her background is in editorial content strategy for regulated industries — sectors where Google's quality standards are heightened and generic content simply fails to rank.

At FastSEO, Emma designs keyword-mapped content frameworks for each client's niche: pillar pages, cluster content, informational guides, and conversion-focused comparison content. Every content programme is built around E-E-A-T signals — demonstrated expertise, authoritative sources, and trust signals specific to the vertical.

Emma's work has driven topical authority gains for iGaming operators, DeFi protocols, CBD brands, and SaaS platforms — each requiring a fundamentally different content approach to satisfy both Google's quality guidelines and the specific intent of their target audience.`,
    expertise: ["E-E-A-T Content", "Topical Authority", "Keyword Research", "Content Architecture", "iGaming Content", "Crypto Content"],
  },
  {
    slug: "david-chen",
    name: "David Chen",
    title: "Crypto & Web3 SEO Specialist",
    department: "Specialist",
    initials: "DC",
    photo: undefined,
    linkedin: "",
    twitter: "",
    yearsExperience: 5,
    bio: "Crypto and Web3 SEO Specialist with deep expertise in DeFi, NFT, and blockchain gaming SEO — building organic visibility for projects in one of Google's most scrutinised YMYL categories.",
    longBio: `David Chen joined FastSEO as the agency's dedicated Crypto and Web3 SEO Specialist, bringing 5 years of experience in one of the most technically demanding corners of search engine optimisation. Cryptocurrency and DeFi content sits firmly within Google's YMYL (Your Money Your Life) category — meaning quality standards, E-E-A-T requirements, and algorithmic scrutiny are all heightened.

David's specialism covers the full spectrum of the Web3 space: exchange SEO, DeFi protocol visibility, NFT project search presence, blockchain gaming SEO, and the unique regulatory content constraints that crypto businesses navigate in different jurisdictions.

His work at FastSEO includes building topical authority frameworks for DeFi protocols, developing AI citation strategies to ensure crypto clients are referenced in ChatGPT and Perplexity responses, and managing crypto-native link acquisition from specialist blockchain publications.`,
    expertise: ["Crypto SEO", "DeFi SEO", "Web3 SEO", "Blockchain Gaming SEO", "NFT SEO", "AI Citation Strategy"],
  },
  {
    slug: "rachel-kim",
    name: "Rachel Kim",
    title: "iGaming SEO Specialist",
    department: "Specialist",
    initials: "RK",
    photo: undefined,
    linkedin: "",
    twitter: "",
    yearsExperience: 6,
    bio: "iGaming SEO Specialist focused on casino SEO, sports betting SEO, and poker platforms — with deep knowledge of the regulatory, compliance, and content requirements that define ranking in the gambling vertical.",
    longBio: `Rachel Kim is FastSEO's dedicated iGaming SEO Specialist with 6 years of experience working exclusively within the online gambling and sports betting sector. Her expertise spans the full iGaming ecosystem: online casinos, sportsbooks, poker rooms, fantasy sports, and iGaming affiliate sites.

Rachel's work at FastSEO covers on-page strategy, keyword research, and content programme design specifically for the iGaming vertical — including the responsible gambling compliance requirements, jurisdiction-specific content constraints, and schema markup strategies (GamePiece, VideoObject, SportsEvent) that differentiate ranking iGaming sites from those that remain invisible.

Before FastSEO, Rachel worked in-house at a regulated casino operator across UK and Malta markets, developing the hands-on operational knowledge of iGaming SEO that no generalist agency can replicate.`,
    expertise: ["Casino SEO", "Sports Betting SEO", "Poker SEO", "iGaming Affiliates", "Responsible Gambling Content", "iGaming Schema"],
  },
  {
    slug: "michael-obrien",
    name: "Michael O'Brien",
    title: "Restricted Niche SEO Specialist",
    department: "Specialist",
    initials: "MO",
    photo: undefined,
    linkedin: "",
    twitter: "",
    yearsExperience: 7,
    bio: "Restricted Niche SEO Specialist covering adult content, escort SEO, cannabis, and other regulated verticals — with 7 years of experience in the compliance, content, and link acquisition approaches these niches demand.",
    longBio: `Michael O'Brien specialises in the restricted verticals that define FastSEO's identity — adult content platforms, escort directories, cam sites, cannabis dispensaries, and other regulated businesses that mainstream SEO agencies universally refuse to work with.

With 7 years of experience in adult and cannabis SEO, Michael has developed deep expertise in the technical compliance requirements (age verification, DMCA, consent documentation), the content standards that avoid algorithmic penalties, and the specialist link acquisition networks that make rankings in these niches achievable.

At FastSEO, Michael leads adult SEO client strategy — covering adult tube SEO, pornstar SEO, escort agency SEO, cam site SEO, and adult eCommerce. He also manages the agency's cannabis SEO programme, navigating the specific health claim restrictions and ad prohibition environment that makes organic search essential for CBD and dispensary brands.`,
    expertise: ["Adult SEO", "Escort SEO", "Cam Site SEO", "Cannabis SEO", "Adult Link Building", "Compliance SEO"],
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
