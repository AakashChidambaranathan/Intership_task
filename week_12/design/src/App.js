import Blogcarspage from './components/Blogcarspage'
import Header from './components/Header';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog_add from './components/JobApplication'
import Dashboard from './components/Dashboard'
import Userinput from './components/Userinput';
import Amchart from './components/LineChart'
function App(){
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path = "/" element={<Blogcarspage />} />
          <Route path = "/Application" element={<Blog_add/>} />
          <Route path = "/profile/:userid" element={<Profile />} />
          <Route path= "/Dashboard" element={<Dashboard/>}/>
          <Route path="/Userinput" element={<Userinput/>}/>
          <Route path="/Amchart" element={<Amchart/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App