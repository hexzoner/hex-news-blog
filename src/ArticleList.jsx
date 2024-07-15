import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ props }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //console.log(`Props: ${props}`);

  //props = 'sport';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://content.guardianapis.com/search?section=${props}&show-fields=thumbnail&page-size=12&api-key=test`
        );
        if (!response.ok) {
          throw new Error('Netzwerkantwort war nicht ok');
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
    return <div>Laden...</div>;
  }

  if (error) {
    return <div>Fehler: {error.message}</div>;
  }

  //console.log(data.response.results);

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
        {data.response.results.map((tag) => (
          <li key={tag.id}>
            <Link to={`/article/${tag.id}`}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={tag.fields.thumbnail}
                  alt=""
                />
                <div className="px-6 py-4">
                  <p className="text-gray-700 text-base">{tag.webTitle} </p>
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
