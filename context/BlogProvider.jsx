import { BlogContex } from "./BlogContex";
import { useState, useEffect } from "react";

export const BlogProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const favoritedArticles = [];

  return <BlogContex.Provider value={{ page, setPage, favoritedArticles }}>{children}</BlogContex.Provider>;
};
