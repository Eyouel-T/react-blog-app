import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

export default function Comments(props){
    const [comments, setComments] = useState([])
    useEffect(() => {
        console.log("useeffect in the comments")
        async function fetchData(){
            const q = query(collection(db, "comments"), where("id", "==", props.id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const theData =doc.data()
                // doc.data() is never undefined for query doc snapshots
                setComments(prev=>[...prev, theData])
                });
            
        }
        fetchData();
    }, [])
    if(comments){
        const mappedComments = comments.map(comment=>{
            return (
                <div>
                    <p>{comment.body}</p>
                </div>
            )
        })
        return(
            <div>
                {mappedComments}
    
            </div>
        )
    }
    
}