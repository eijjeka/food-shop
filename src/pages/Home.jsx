import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getAllCategory } from "../api";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search/Search";

export const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    setSearchParams(`?search=${str}`);
  };

  useEffect(() => {
    getAllCategory().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
};
