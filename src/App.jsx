import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react-router-dom";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Category = lazy(() => import("./pages/Category"));
const Recipe = lazy(() => import("./pages/Recipe"));
const NoFound = lazy(() => import("./pages/NoFound"));

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<h2>Loading...</h2>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<h2>Loading...</h2>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<h2>Loading...</h2>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/category/:name"
            element={
              <Suspense fallback={<h2>Loading...</h2>}>
                <Category />
              </Suspense>
            }
          />
          <Route
            path="/meal/:id"
            element={
              <Suspense fallback={<h2>Loading...</h2>}>
                <Recipe />
              </Suspense>
            }
          />
          <Route
            element={
              <Suspense fallback={<h2>Loading...</h2>}>
                <NoFound />
              </Suspense>
            }
          />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};
