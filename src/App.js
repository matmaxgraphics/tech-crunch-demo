import "./sass/main.scss";

import Navbar from "./components/Navbar";
import LatestArticle from "./components/LatestArticle";
import AllArticles from "./components/AllArticles";

function App() {
  return (
    <>
      <Navbar />
      <LatestArticle />
      <AllArticles/>
    </>
  );
}

export default App;
