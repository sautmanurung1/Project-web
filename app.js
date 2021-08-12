const express = require('express');
const path = require('path');
const app = express();
app.use('/static',express.static(path.join(__dirname,'static')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});
app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));