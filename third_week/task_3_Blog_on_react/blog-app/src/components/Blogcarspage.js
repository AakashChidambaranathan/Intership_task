import React from "react";
import Header from "./Header";
import Fooder from "./Fooder";
import Blogcard from "./Blogcard";

const Blogs = [
  {
    id: 1,
    title: "Blog 1",
    text: "this blog is refer the book of content the book name is lenovo thinkbook this refer a laptop and give some work also",
  },
  {
    id: 2,
    title: "Blog 2",
    text: "this blog is refer the book of content the book name is lenovo thinkbook this refer a laptop and give some work also",
  },
  {
    id: 3,
    title: "Blog 3",
    text: "this blog is refer the book of content the book name is lenovo thinkbook this refer a laptop and give some work also",
  },
  {
    id: 4,
    title: "Blog 4",
    text: "this blog is refer the book of content the book name is lenovo thinkbook this refer a laptop and give some work also",
  },
];

function Blogcarspage() {
  return (
    <>
      <div className="overflow-auto" style={{ maxHeight: "74vh" }}>
        {Blogs.map((blog) => (
          <div key={blog.id}>
            <Blogcard title={blog.title} text={blog.text} />
          </div>
        ))}
      </div>
      <Fooder />
    </>
  );
}

export default Blogcarspage;
