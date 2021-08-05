import  React ,{useEffect,useState}  from 'react';
import PostItem from './PostItem';
import axios from 'axios';
function PostList(){

    const [postdata,setpd]=useState([])

    useEffect(()=>{

        axios.get('/api/post/getpost')
        .then((res)=>{
            setpd(res.data)
        })
        .catch((err)=>{console.log(err)})

    },[])

    const postlist=postdata.map(p=>{
        return(
            <dir>
                <PostItem post={p}/>
            </dir>
        )
    })

    return(
        <div>
            <a href="/addpost" className='btn btn-primary m-2 float-end'>Add Post</a><br /><br />
            {postlist}
        </div>
    );

}

export default PostList;