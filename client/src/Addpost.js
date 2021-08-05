import  React,{useState}  from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';
function Addpost(){

    const [title,settitle]=useState('')
    const [img,setimg]=useState('')
    const [des,setdes]=useState('')

    function send(){
        var p={
            title:title,
            image:img,
            description: des,
            postid: uniqid() 
        }
        axios.post('/api/post/addpost',p)
        .then((res)=>{
            Swal.fire('Congrats','Post Added Sucessfully','success')
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return(
        <div className='row justify-content-center'>

            <div className='col-md-6'>
                <a href="/" className="btn btn-primary float-end">See Posts</a>
                <br />
                <br />
                <h1 className="mx-auto">Add New Post</h1>
                <div>
                    <input type="text" placeholder="Title"  className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
                    <input type="text" placeholder="Image URL"  className="form-control" value={img} onChange={(e)=>{setimg(e.target.value)}}/>
                    <textarea placeholder="Description" cols="30" rows="10" className="form-control" value={des} onChange={(e)=>{setdes(e.target.value)}}></textarea>

                    <button className="btn btn-primary float-end" onClick={send}>Add Post</button>
                </div>
            </div>

        </div>
    );

}

export default Addpost;