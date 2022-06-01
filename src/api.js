import { API_URL } from "./config";

export const getMealById = async (mealId) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);
  return await response.json();
};

export const getAllCategory = async () => {
  const response = await fetch(API_URL + "categories.php");
  return await response.json();
};

export const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL + "filter.php?c=" + catName);
  return await response.json();
};
