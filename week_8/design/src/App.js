import Blogcarspage from './components/Blogcarspage'
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog_add from './components/JobApplication'
function App(){
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path = "/" element={<Blogcarspage />} />
          <Route path = "/contact" element={<ContactPage />} />
          <Route path = "/Application" element={<Blog_add/>} />
          <Route path = "/profile/:userid" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App