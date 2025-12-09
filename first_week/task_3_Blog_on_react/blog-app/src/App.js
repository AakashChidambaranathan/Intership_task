import Blogcarspage from './components/Blogcarspage'
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog_add from './components/Blog_add'
function App(){
  return(<>
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Blogcarspage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/AddBlog' element={<Blog_add/>}/>
    </Routes>
  </Router>
  </>)
}

export default App 