const Post = require('../models/post_model');

const getAllPosts = (req, res)=> { 
    res.send('app get post');
};

const createNewPosts = (req, res)=> { 
    console.log(req.body);
    const post = Post({
        message: req.body.message,
        sender: req.body.sender
    })
    
    let output;
    (async (done)=> {
        output = await post.save((err, newPost)=>{
            if(err){
                res.status(400).send({
                    'status': 'failed',
                    'message': err.message 
                })
            }
            else{
                res.status(200).send(newPost)
    
            }
        });
        done();
    })
    console.log(output);

};

module.exports = {
    getAllPosts,
    createNewPosts
}