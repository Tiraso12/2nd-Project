const express = require('express')

const PORT = process.env.PORT || 3001;

//running the server
const app = express()

app.listen(PORT, ()=>{
    console.log(`API server on port ${PORT}`);
})