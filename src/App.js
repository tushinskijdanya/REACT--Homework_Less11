import Layout from "./layouts/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoneFound from "./pages/NoneFound";
import Blog from "./pages/Blog";
import AboutMe from "./pages/About";
import BlogPost from "./pages/BlogPostPage";
import CreatePost from "./pages/CreateBlogPost";
import Notes from "./pages/Notes";
import AllNotes from "./pages/AllNotes";
import EditNote from "./pages/EditNote";
import OnlinePosts from "./pages/OnlinePosts";
import OnlinePost from "./OnlinePostPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/all" element={<AllNotes />} />
          <Route path="/notes/all/editnote/:id" element={<EditNote />} />
          <Route path="/onlineposts" element={<OnlinePosts />} />
          <Route path="/onlineposts/:id" element={<OnlinePost />} />
          <Route path="*" element={<NoneFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
