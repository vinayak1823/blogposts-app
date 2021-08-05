import  React, {useEffect, useState}  from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
function Editpost(){

    const [title,settitle]=useState('')
    const [img,setimg]=useState('')
    const [des,setdes]=useState('')

    const params= useParams()
    const history=useHistory()


    useEffect(()=>{

        axios.post('/api/post/getpostforupdate', {postid:params.postid})
        .then((res)=>{
            const pd= res.data[0]
            settitle(pd.title)
            setimg(pd.imageurl)
            setdes(pd.description)

        })
        .catch((err)=>{console.log(err)})
        
    },[params.postid])


    function editpost()
    {
        const updatedpost={
            tilte: title,
            imageurl:img,
            description:des,
            postid:params.postid
        }

        axios.post('/api/post/updatepost', updatedpost)
        .then((res)=>{
            Swal.fire("Congrats","Post Updated Sucessfully","success")
            setTimeout(() => {  history.push('/') }, 2000);
            
        })
        .catch((err)=>{console.log(err)})

    }


    return(
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <div>
                    <input type="text" placeholder="Title"  className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
                    <input type="text" placeholder="Image URL"  className="form-control" value={img} onChange={(e)=>{setimg(e.target.value)}}/>
                    <textarea placeholder="Description" cols="30" rows="10" className="form-control" value={des} onChange={(e)=>{setdes(e.target.value)}}></textarea>
                    <button className="btn btn-primary float-end" onClick={editpost}>Update</button>
                </div>
            </div>
        </div>
    );

}

export default Editpost;