export type Link = {
  type: 'linkedin' | 'github' | 'twitter' | 'stackoverflow' | 'email';
  url: string;
  title?: string;
}

export type Links = Link[];