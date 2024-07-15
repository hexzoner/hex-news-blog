import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ props }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //console.log(`Props: ${props}`);

  //props = 'sport';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://content.guardianapis.com/search?section=${props}&show-fields=thumbnail&page-size=16&api-key=test`);
        if (!response.ok) {
          throw new Error("Netzwerkantwort war nicht ok");
        }
        const result = await response.json();
        setData(result);
        //console.log(result); // ---------------------
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [props]);

  if (loading) {
    return <SkeletonList />;
  }

  if (error) {
    return <div>Fehler: {error.message}</div>;
  }

  //console.log(data.response.results);

  return (
    <div className="my-16 font-[lato] ">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1200px] m-auto">
        {data.response.results.map((tag) => (
          <li key={tag.id}>
            <Link to={`/article/${tag.id}`}>
              <div className="max-w-sm rounded shadow-lg h-72 my-2 rounded-t-xl">
                <img className="w-full rounded-t-xl" src={tag.fields.thumbnail} alt="" />
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
