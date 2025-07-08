import { useState } from "react"
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment(){
    let[comments,setComments]=useState([{
        username:"rimsha",
        remarks:"great job",
        rating:4
    }]);
    let addNewComment=(comment)=>{
    setComments((currComments)=>[...currComments,comment]);
}
    return(
        <div>
            <h3>All comments</h3>
            {comments.map((comment,idx)=>(
             <div className="comment"key={idx}>
             <span>{comment.username}</span>
             &nbsp;
             <span>(rating={comment.rating})</span>
             <br></br>
             <span>{comment.remarks}</span>
        </div>
            ))}
            <CommentsForm addNewComment={addNewComment}/>
            </div>
    )
}