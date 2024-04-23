import { Category, CategoryData } from "@/interface/category";
import { DetailEvent } from "@/interface/detailEvent";
import { Events } from "@/interface/event";
import axios from "axios";

export const handleGetDetail = async (slug: string) => {
  try {
    const { data }: { data: DetailEvent } = await axios.get(`
        https://jakarta-tourism.go.id/api/event/${slug}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const handleDetailRecommendation = async (id: string) => {
  try {
    const { data }: { data: Events } = await axios.get(
      `https://jakarta-tourism.go.id/api/event-our-recommendation?event_id=${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetEvents = async ({
  limit,
  page,
  category,
}: {
  limit?: number;
  page?: number;
  category?: string;
}) => {
  try {
    const { data }: { data: Events } = await axios.get(
      `https://jakarta-tourism.go.id/api/event?limit=${limit || 12}&page=${
        page || 1
      }${category ? `&category=${category}` : ""}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const handleGetCategoryEvents = async (): Promise<
  CategoryData[] | undefined
> => {
  try {
    const { data }: { data: Category } = await axios.get(
      "https://jakarta-tourism.go.id/api/event-category"
    );
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
