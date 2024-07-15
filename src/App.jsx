import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import ArticleDetails from "./ArticleDetails";
import ArticleList from "./ArticleList";
import Navbar from "./Navbar.jsx";
import Home from "./Home";
import Footer from "./Footer.jsx";
import PageNotFound from "./PageNotFound.jsx";
import { useState } from "react";
import { BlogProvider } from "../context/BlogProvider.jsx";

function App() {
  const [page, setPage] = useState(1);
  const MainLayout = () => {
    return (
      <>
        <BlogProvider>
          <Navbar setPage={setPage} />
          <div className="font-[PlayfairDisplay]">
            <Outlet />
          </div>
        </BlogProvider>
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/lifestyle" element={<ArticleList props={`lifeandstyle`} />}></Route>
        <Route path="/fashion" element={<ArticleList props={`fashion`} />}></Route>
        <Route path="/culture" element={<ArticleList props={`culture`} />}></Route>
        <Route path="/music" element={<ArticleList props={`music`} />}></Route>
        <Route path="/sport" element={<ArticleList props={`sport`} />}></Route>
        <Route path="/football" element={<ArticleList props={`football`} />}></Route>
        <Route path="/games" element={<ArticleList props={`games`} />}></Route>
        <Route path="/travel" element={<ArticleList props={`travel`} />}></Route>
        <Route path="/business" element={<ArticleList props={`business`} />}></Route>
        <Route path="/science" element={<ArticleList props={`science`} />}></Route>
        <Route path="/politics" element={<ArticleList props={`politics`} />}></Route>
        <Route path="/media" element={<ArticleList props={`media`} />}></Route>
        <Route path="/wellness" element={<ArticleList props={`wellness`} />}></Route>
        <Route path="/art" element={<ArticleList props={`artanddesign`} />}></Route>
        <Route path="/books" element={<ArticleList props={`books`} />}></Route>
        <Route path="/film" element={<ArticleList props={`film`} />}></Route>
        <Route path="/article/*" element={<ArticleDetails />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
