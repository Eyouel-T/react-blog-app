import Blog from "./blog";
import blogs from "./blogs";
import React from 'react';



export default function Main(){

    const blogItems = blogs.map(blog=>{
    
        return(
        <div className="col-lg-4 col-md-6"> 
            <Blog
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