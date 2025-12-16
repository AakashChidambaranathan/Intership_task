import React from "react";
import { Link } from "react-router-dom";
import Logo from 'D:/intership/task/first_week/task_3_Blog_on_react/blog-app/src/assets/Blogger-Logo.jpg'
function Header(){
    return(
        <>
        <div className="text-center p-4 border-bottom border-4">
            <img src={Logo} alt="Logo" style={{height:"130PX",width:"300PX"}} />
            <nav className="mt-2">
                <ul className="nav justify-content-center">
                    <li className="nav-item ">
                        <Link to="/" className="p-4 fw-bold font fs-4 text-decoration-none">Home</Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="/AddBlog" className="p-4 fw-bold fs-4 text-decoration-none">Add Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="p-4 fw-bold fs-4 text-decoration-none" >Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Profile" className="p-4 fw-bold fs-4 text-decoration-none">Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
    )
}
export default Header