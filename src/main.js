import Blog from "./blog";
import blogs from "./blogs";
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Detail from "./detail";



export default function Main(){

    const blogItems = blogs.map(blog=>{
    
        return(
        <div className="col-lg-4 col-md-6"> 
            <Blog key={blog.id}
                 id={blog.id}
                 img={blog.img} 
                 title={blog.title}
                 tags={blog.tags}
                 body={blog.body} 
                 duration={blog.duration} 
                 date={blog.date}
                 />
            
        </div> )
    })


    return(
        <div className="main container">
            <div className="row">
                {blogItems}
            </div>

        
        </div>
    );
}