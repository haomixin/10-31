var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database:"hmx"
});


/* GET home page. */
router.post('/', function(req, res, next) {
    var name1=req.body.tit;
    var txt1=req.body.con;
    console.log(name1)
    res.header('Access-Control-Allow-Origin','*');
    pool.query('INSERT INTO y(name,content) VALUES("'+name1+'","'+txt1+'")',function(err,rows,fileds){
        res.send(rows)
    })
});
module.exports = router;
