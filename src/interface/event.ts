export interface Events {
  data: Daum[];
  links: Links;
  meta: Meta;
}

export interface Daum {
  id: string;
  title: string;
  slug: string;
  banner_url: string;
  content: string;
  start_date: string;
  end_date: string;
  location_name: string;
  location_latitude: number;
  location_longitude: number;
  created_at: string;
  partner_name: string | null;
  partner_photo: string | null;
}

export interface Links {
  first: string;
  last: string;
  prev?: string;
  next?: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}
