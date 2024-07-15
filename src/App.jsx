import './App.css';
import { Routes, Route } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';
import ArticleList from './ArticleList';
import Navbar from './Navbar.jsx';
import Home from './Home';
import Footer from './Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="article/*"
          element={<ArticleDetails />}
        ></Route>
        <Route
          path="/music"
          element={<ArticleList props={`music`} />}
        ></Route>
        <Route
          path="/sports"
          element={<ArticleList props={`sport`} />}
        ></Route>
        <Route
          path="/games"
          element={<ArticleList props={`games`} />}
        ></Route>
        <Route
          path="/travel"
          element={<ArticleList props={`travel`} />}
        ></Route>
        <Route
          path="/business"
          element={<ArticleList props={`business`} />}
        ></Route>
        <Route
          path="/science"
          element={<ArticleList props={`science`} />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
