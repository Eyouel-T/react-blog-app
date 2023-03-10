import Blog from "./blog";
import loading from "./images/loading.png"
import blogs from "./blogs";
import  React , {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom';
import Detail from "./detail";
import Add from "./add";
import { db } from "./firebase";
import { addDoc, collection, getDocs,onSnapshot} from "@firebase/firestore";
import Featured from "./featured";
import featured from "./images/featured.png"




export default function Main(){
    // initialize the blog item list state as an empty array... this will be filled with the data(blogs) coming from the firebase
    const [blogItemList, setBlogItemList] = useState([])
    
    // this use effect hook is used to make sure that the data from the firestore is only fetched once
    useEffect(()=>{
        async function fetchBlogsData(){
        const blogsRef = collection(db, "blogs");
        const blogsRefData = await getDocs(blogsRef)
        //loop through each of the blogs from the database
        blogsRefData.forEach((doc)=>{
            const theData = doc.data()
            theData['id']= doc.id  
            const {title,author,body,tags,duration,id} = theData
            
            const dataId = doc.id
            // update the BlogItemList item with each blog from the database
            setBlogItemList(prev=>[...prev,     theData])
            
        })
        
       
    }
     fetchBlogsData();
    
    }, []
    )
    
    // if the blog items are returned from the database render the UI With the BLogs
    if(blogItemList.length>=1){
        console.log(blogItemList)
        //map through each blog that came from the firebase database and create a <Blog/> component with the attributes as props
        const blogItems = blogItemList.map(blog=>{
            return (
                <div className="col-lg-4 col-md-6">
                    <Blog id={blog.id}
                          tags={blog.tags}
                          img={"./images/blog-image.png"}
                          title={blog.title}
                          body={blog.body}
                          duration={blog.duration}
                          date= {blog.date}
                          
                    />
                </div>
            )
        })
        //featuring a random Blog
        const featuredBlog = blogItemList[Math.floor(Math.random()*blogItemList.length)]
        return(
            <div className="main container">
                <section>
                <div className="row featured-blog-section">
                    <Featured
                                id={featuredBlog.id}
                                tags={featuredBlog.tags}
                                img={featured}
                                title={featuredBlog.title}
                                body={featuredBlog.body}
                                duration={featuredBlog.duration}
                                date= {featuredBlog.date}
                        />
                </div>
                </section>
                <section>
                <div className="row">
                    <h1></h1>
                    
                    {blogItems}
                    <button><Link to={`/add/`}>add</Link></button>
                </div>
                </section>
            
            </div>
        );
    }
    //if the blogs are not returned from the database
    else{
        return(
            <div className='loadingPage'>
                <div className='loading'></div>
            </div>
        )
    }
     
    
    
    
    


   
}