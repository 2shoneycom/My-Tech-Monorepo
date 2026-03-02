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
        <Route path="/Articles Search" element={<ArticleSearch />} />
        <Route path="/research-areas/:category" element={<SubCategory />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
