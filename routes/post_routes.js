const express = require('express');
const router = express.Router();

router.get('/' ,(req, res) => {
    res.send('app get post');
});

router.post('/', (req, res)=> {
     res.send('app post post'); 
});

module.exports = router;
