const getAllPosts = (req, res)=> { 
    res.send('app get post');
};

const createNewPosts = (req, res)=> { 
    res.send(req.body);
};

module.exports = {
    getAllPosts,
    createNewPosts
}