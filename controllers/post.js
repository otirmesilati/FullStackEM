const Post = require('../models/post_model');

const getAllPosts = async (req, res)=> { 
    console.log('Get All Posts');

    try{
        const posts = await Post.find()
        res.status(200).send(posts)
    }  catch(err){
        res.status(400).send({
            'status': 'failed',
            'message': err.message
        });
    }
};

const createNewPosts = async (req, res) => { 
    try {
        console.log(req.body);

        const post = new Post({
            message: req.body.message,
            sender: req.body.sender
        });

        const newPost = await post.save();  // Wait for the save operation to complete
        res.status(200).send(newPost); // Send the saved post back to the client

    } catch (err) {
        res.status(400).send({
            'status': 'failed',
            'message': err.message
        }); // Handle any errors that occurred during the save operation
    }
};

    // post.save((err, newPost)=>{
    //     if(err){
    //         res.status(400).send({
    //             'status': 'failed',
    //             'message': err.message 
    //         })
    //     }
    //     else{
    //         res.status(200).send(newPost)

    //     }
    // })



module.exports = {
    getAllPosts,
    createNewPosts
}