
const router = require('express').Router();


router.get('/home', (req,res)=>{
    res.sendFile('../../public/homepage');
})

module.exports = router;