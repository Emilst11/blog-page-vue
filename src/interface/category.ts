export interface Category {
  data: CategoryData[];
}

export interface CategoryData {
  id: string;
  category_name: string;
  banner_url: string;
  slug: string;
}
