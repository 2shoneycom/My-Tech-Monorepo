import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import ArticleSearch from "./routes/ArticleSearch";
import BlogPost from "./routes/BlogPost";
import SubCategory from "./routes/SubCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Article Search" element={<ArticleSearch />} />
        <Route path="/Blog/:category" element={<SubCategory />} />
        <Route path="/Essay" element={<SubCategory fixedCategory="Essay" />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
