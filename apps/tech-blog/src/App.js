import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import BlogPost from "./routes/BlogPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:a" element={<Blog />} />
        <Route path="/:a/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
