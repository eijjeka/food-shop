import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Preloader } from "../components/Preloader";
import { getFilteredCategory } from "../api";
import { MealList } from "../components/MealList/MealList";

export const Category = () => {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
};
