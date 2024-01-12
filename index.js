const express = require('express');
const app = express()
app.use(express.json())
const PORT = 4444
app.get('/', (req, res)=>{
    res.send("Hello world")
})

app.post('/auth/login', (req, res) => {
    console.log(req.body)
    res.json({ success: true });
});

app.listen(4444, (err)=>{
    if(err){
       return console.log(err)
    }
    else{
        console.log(`server status ok, port ${PORT}`)
    }
})