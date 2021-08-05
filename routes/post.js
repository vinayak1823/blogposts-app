const express=require('express');
const router= express.Router();
const mongoose=require('mongoose')



const schemna=mongoose.Schema

const postschemna=new schemna({
    title:String,
    imageurl: String,
    description: String,
    postid: String
})

const Postmodel=mongoose.model('posts',postschemna);



router.post('/addpost',function(req,res){

    const newpost= new Postmodel({
        title: req.body.title,
        imageurl: req.body.image,
        description: req.body.description,
        postid: req.body.postid
    })    
    newpost.save(function(err){

        if(!err){
            res.send("New Post added Sucessfully")
        }
        else{
            res.send(err)
        }
    })
});

router.get('/getpost', function(req,res){

    Postmodel.find({},function(document,err){

        if(!err){ res.send(document)}
        else { res.send(err)}

    })

});

router.post('/getpostforupdate',function(req,res){

    Postmodel.find({postid:req.body.postid}, function(document,err){

        if(!err){ res.send(document)}
        else { res.send(err)}

    })

})

router.post('/updatepost',function(req,res){

    Postmodel.findOneAndUpdate({postid:req.body.postid},{
        title: req.body.tilte,
        imageurl: req.body.imageurl,
        description: req.body.description
    },(err)=>{
        if(!err){
            res.send("Post updated sucessfully")
        }
        else{
            res.send(err)
        }
    })

})


router.post('/deletepost',function(req,res){

    Postmodel.findOneAndDelete({postid:req.body.postid},(err)=>{
        if(!err){
            res.send("Post deleted Sucessfully")
        }
        else{
            res.send(err)
        }
    })

})


module.exports=router;