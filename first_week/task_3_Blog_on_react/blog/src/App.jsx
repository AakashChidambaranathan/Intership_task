import Header from './components/Header';
import BlogCard from "./components/Blogcard";
import Fooder from './components/Fooder';
import 'D:/intership/task/first_week/task_3_Blog_on_react/blog/src/style/app.css'
import "bootstrap-icons/font/bootstrap-icons.css";
const blogs=[{
  id:1,
  title:"Blog 1",
  text:"this blog content about note image and brands used in the illustration on the titel page belong to the use and companies repectivel there image and informationara used creation"
},
{
  id:2,
  title:"Blog 2",
  text:"this blog content about note image and brands used in the illustration on the titel page belong to the use and companies repectivel there image and informationara used creation"
},{
  id:3,
  title:"Blog 3",
  text:"this blog content about note image and brands used in the illustration on the titel page belong to the use and companies repectivel there image and informationara used creation"
},{
  id:4,
  title:"Blog 4",
  text:"this blog content about note image and brands used in the illustration on the titel page belong to the use and companies repectivel there image and informationara used creation"
}
]
function App() {
  return (
<>
  <div style={{ background: "aquamarine", height: "100vh" }}>
    <Header />

    <div className="scroll-box">
      {blogs.map((blog) => (
        <BlogCard 
          key={blog.id}
          title={blog.title}
          text={blog.text}
        />
      ))}
    </div>
    <Fooder />
  </div>
</>

  )
}
export default App