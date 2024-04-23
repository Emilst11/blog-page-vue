import { Daum } from "./event";

export interface DetailEvent {
  data: Event;
}

export interface Event extends Daum {
  category: Category[];
  additionalInfos: any[];
}

export interface Category {
  id: string;
  category_name: string;
  banner_url: string;
  slug: string;
}
