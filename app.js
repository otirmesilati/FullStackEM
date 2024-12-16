const express = require('express');
const app = express();
const port = 3001;








app.get('/' ,(req, res) => {
    res.send('Hi');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
