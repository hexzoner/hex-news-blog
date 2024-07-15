import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ArticleDetails() {
  const params = useParams();
  const id = params["*"];
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState(null);
  const [image, setImage] = useState("");
  const articleURL = `https://content.guardianapis.com/${id}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const paramsAPI = { "api-key": "test", "show-fields": "bodyText,thumbnail", "show-elements": "image" };
    axios
      .get(articleURL, { params: paramsAPI })
      .then((res) => {
        const _article = res.data.response;
        setArticle(_article.content);
        // console.log(_article.content);
        const img = _article.content.elements[0].assets.sort((a, b) => b.typeData.width - a.typeData.width)[0].file;
        setImage(img);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, []);
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-3xl">Loading the article....</div>;
  }

  return (
    <>
      <div className="min-h-screen text-center max-w-[900px] m-auto pt-8 pb-8">
        {article && (
          <div className="flex flex-col gap-8">
            <BackButton />
            <div className="flex justify-center">
              <img className="w-full" src={image} alt="" />
            </div>
            <div className="flex justify-between ">
              <div className="pl-4 text-xl text-left opacity-60 font-semibold">Section: {article.sectionName}</div>
              <p className="opacity-60 font-semibold text-lg">Published: {article.webPublicationDate.replace("T", " ").replace("Z", "")}</p>
            </div>
            <div className="text-3xl">{article.webTitle}</div>
            <div className="text-justify text-lg">{article.fields.bodyText}</div>
          </div>
        )}
      </div>
      ;
    </>
  );
}

const BackButton = () => {
  const navigate = useNavigate();
  function handleBackClick() {
    navigate(-1);
  }

  return (
    <button className="btn btn-outline max-w-[100px] px-8 py-2" onClick={handleBackClick}>
      Back
    </button>
  );
};
