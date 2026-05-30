export interface NicheCityStat {
  value: string;
  label: string;
}

export interface NicheCityFAQ {
  q: string;
  a: string;
}

export interface NicheCityData {
  nicheSlug: string;
  nicheLabel: string;
  countrySlug: string;
  countryName: string;
  countryShort: string;
  countryFlag: string;
  citySlug: string;
  cityName: string;
  quickAnswer: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  cityMarketContext: string;
  cityCompetitiveInsight: string;
  whyUs: string[];
  stats: NicheCityStat[];
  faqs: NicheCityFAQ[];
}

export const citySlugMap: Record<string, string> = {
  "new-york": "New York",
  "los-angeles": "Los Angeles",
  "las-vegas": "Las Vegas",
  "chicago": "Chicago",
  "miami": "Miami",
  "houston": "Houston",
  "dallas": "Dallas",
  "philadelphia": "Philadelphia",
  "atlanta": "Atlanta",
  "denver": "Denver",
  "london": "London",
  "manchester": "Manchester",
  "birmingham": "Birmingham",
  "leeds": "Leeds",
  "glasgow": "Glasgow",
  "liverpool": "Liverpool",
  "bristol": "Bristol",
  "edinburgh": "Edinburgh",
  "sheffield": "Sheffield",
  "cardiff": "Cardiff",
  "sydney": "Sydney",
  "melbourne": "Melbourne",
  "brisbane": "Brisbane",
  "perth": "Perth",
  "adelaide": "Adelaide",
  "gold-coast": "Gold Coast",
  "canberra": "Canberra",
  "newcastle": "Newcastle",
  "wollongong": "Wollongong",
  "hobart": "Hobart",
  "toronto": "Toronto",
  "vancouver": "Vancouver",
  "montreal": "Montreal",
  "calgary": "Calgary",
  "edmonton": "Edmonton",
  "ottawa": "Ottawa",
  "winnipeg": "Winnipeg",
  "quebec-city": "Quebec City",
  "hamilton": "Hamilton",
  "kitchener": "Kitchener",
  "mumbai": "Mumbai",
  "delhi": "Delhi",
  "bangalore": "Bangalore",
  "hyderabad": "Hyderabad",
  "chennai": "Chennai",
  "pune": "Pune",
  "kolkata": "Kolkata",
  "ahmedabad": "Ahmedabad",
  "jaipur": "Jaipur",
  "surat": "Surat",
  "berlin": "Berlin",
  "hamburg": "Hamburg",
  "munich": "Munich",
  "cologne": "Cologne",
  "frankfurt": "Frankfurt",
  "stuttgart": "Stuttgart",
  "dusseldorf": "Düsseldorf",
  "leipzig": "Leipzig",
  "dresden": "Dresden",
  "dortmund": "Dortmund",
  "johannesburg": "Johannesburg",
  "cape-town": "Cape Town",
  "durban": "Durban",
  "pretoria": "Pretoria",
  "port-elizabeth": "Port Elizabeth",
  "bloemfontein": "Bloemfontein",
  "dublin": "Dublin",
  "cork": "Cork",
  "limerick": "Limerick",
  "galway": "Galway",
  "waterford": "Waterford",
  "dubai": "Dubai",
  "abu-dhabi": "Abu Dhabi",
  "sharjah": "Sharjah",
};
