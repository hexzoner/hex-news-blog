import React, { useState, useEffect, useContext } from "react";
import { BlogContex } from "../context/BlogContex";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const ArticleList = ({ props }) => {
  const { page, setPage } = useContext(BlogContex);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [totalPages, setTotalPages] = useState(2);
  // console.log(page);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://content.guardianapis.com/search?section=${props}&show-fields=thumbnail&page-size=16&api-key=test&page=${page}`);
        if (!response.ok) {
          throw new Error("Netzwerkantwort war nicht ok");
        }
        const result = await response.json();
        setData(result);
        // console.log(result.response.pages); // ---------------------
        setTotalPages(result.response.pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [props, page]);

  if (loading) {
    return <SkeletonList />;
  }

  if (error) {
    return <div>Fehler: {error.message}</div>;
  }

  // console.log(data);

  return (
    <div className="font-[lato]">
      <div className="text-center my-8 ">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1200px] m-auto">
        {data.response.results.map((tag) => (
          <li key={tag.id}>
            <Link to={`/article/${tag.id}`}>
              <div className="max-w-sm rounded shadow-lg h-72 my-2 rounded-t-xl">
                {tag && tag.fields && tag.fields.thumbnail ? (
                  <img className="w-full rounded-t-xl" src={tag.fields.thumbnail} alt="" />
                ) : (
                  <svg
                    // onClick={handleImage}
                    className="stroke-base-content pt-[2px] fill-transparent stroke-[1px] w-full"
                    width="160px"
                    height="160px"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 44h8c8 0 16-8 24-8s8 8 16 8" />
                    <rect x="8" y="8" width="48" height="48" />
                    <circle cx="22" cy="22" r="6" />
                  </svg>
                )}

                <div className="px-6 py-4">
                  <p className="text-base font-semibold text-center overflow-hidden">{tag.webTitle} </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;

const SkeletonItem = () => {
  return (
    <div className="flex w-72 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

const SkeletonList = () => {
  return (
    <div className="max-w-[1200px] m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-16 ">
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </div>
    </div>
  );
};
