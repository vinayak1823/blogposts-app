import  React, {useEffect}  from 'react';
import './PostItem.css';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Swal from 'sweetalert2';
function PostItem({post}){

    const history=useHistory()

    useEffect(()=>{
        AOS.init()
    },[])

    function deletepost(postid){

        axios.post('/api/post/deletepost', {postid: postid})
        .then((res)=>{
            Swal.fire("Post Deleted","Post Deleted Sucessfully","success")
            setTimeout(() => {  history.go(0) }, 2000);
            
        })
        .catch((err)=>{console.log(err)})

    }

    return(
        <div className="shadow p-3 mb-5 bg-body rounded mx-auto postitem p-1" data-aos="fade-up">
            <h1 className="p-1">{post.title}</h1>
            <img src={post.imageurl} alt="" className="p-2" />
            <p className="p-3">{post.description}</p>
            <Link to={`/editpost/${post.postid}`} style={{textDecoration:"none"}} > <li className="btn btn-info mx-2">Edit</li> </Link>
            
            <button className="btn btn-danger mx-2" onClick={()=>{deletepost(post.postid)}}>Delete</button>
            
        </div>
    );

}

export default PostItem;