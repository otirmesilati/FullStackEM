const Post = require('../models/post_model');

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

const getAllPosts = async (req, res)=> { 
    console.log('Get All Posts');

    try{
        const sender = req.query.sender;
        var posts

        if(sender != null | sender != undefined) {
            
            posts = await Post.find({'sender': sender})
        }   else{
                posts = await Post.find()
        }
        
        res.status(200).send(posts)
    }  catch(err){
        res.status(400).send({
            'status': 'failed',
            'message': err.message
        });
    }
};

const getPostById = async (req, res) => {
    console.log('getPostById', req.params.id);

    
    try{
        const id = req.params.id;
        if(id == null || id == undefined){
            res.status(400).send({
                'status': 'failed',
                'message': 'Invalid id'
            })
        }
        else{
            post = await Post.findById(id);
        }
        res.status(200).send(post);
    }catch(err){
        res.status(400).send({
            'status': 'failed',
            'message': err.message
        });
    }
};


module.exports = {
    getAllPosts,
    createNewPosts,
    getPostById
}