export type SiteMessages = {
  brand: string;
  company: string;
  nav: {
    about: string;
    products: string;
    industry: string;
    quality: string;
    news: string;
    contact: string;
  };
  language: string;
  cta: string;
  footer: {
    addressLabel: string;
    registryLabel: string;
    contactLabel: string;
    location: string;
    credit: string;
    contact: string;
    contactHref?: string;
    note: string;
  };
};

export type HomeMessages = {
  hero: {
    title: string;
    lead: string;
    primaryAction: string;
    secondaryAction: string;
    facts: string[];
    visual: {
      src: string;
      alt: string;
      caption: string;
    };
    panelRegion: string;
    panelTitle: string;
    panelItems: string[];
  };
  capabilities: {
    title: string;
    lead: string;
    rows: Array<{
      label: string;
      items: string[];
    }>;
  };
  project: {
    title: string;
    lead: string;
    note: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
    images: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
  };
  overview: {
    kicker: string;
    title: string;
    lead: string;
    moreLabel: string;
    locationTitle: string;
    locationLabel: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    points: Array<{
      title: string;
      description: string;
    }>;
  };
  sectors: {
    title: string;
    lead: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  visualScenes: {
    title: string;
    lead: string;
    points: string[];
    items: Array<{
      alt: string;
      description: string;
      position?: string;
      src: string;
      title: string;
    }>;
  };
  products: {
    kicker: string;
    title: string;
    lead: string;
    note: string;
    linkLabel: string;
    items: Array<{
      name: string;
      category: string;
      description: string;
      image: string;
      specs: string[];
    }>;
  };
  base: {
    title: string;
    lead: string;
    regionTitle: string;
    regionLabel: string;
    locations: string[];
    linkLabel: string;
    points: string[];
  };
  quality: {
    title: string;
    lead: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  servicePath: {
    title: string;
    lead: string;
    items: Array<{
      description: string;
      gradientFrom: string;
      gradientTo: string;
      href: string;
      label: string;
      title: string;
    }>;
  };
  news: {
    kicker: string;
    title: string;
    lead: string;
    linkLabel: string;
    items: Array<{
      title: string;
      date: string;
      description: string;
    }>;
  };
};

export type DetailPageMessages = {
  title: string;
  lead: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
  gallery?: {
    title: string;
    lead: string;
    items: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
  };
  sections: Array<{
    title: string;
    body: string;
    points?: string[];
  }>;
};
