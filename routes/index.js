var express = require('express');
var router = express.Router();
const fs = require("fs")

/* GET home page. */
router.get('/', function (req, res, next) {
    fs.readdir('./filess', { withFileTypes: true }, function (err, files) {
        res.render('index', { data: files });
    })
});
router.get('/filecreate', function (req, res, next) {
    fs.writeFile(`./filess/${req.query.filename}`, "", function (err) {
     if(err) throw err
    res.redirect('/');
    })
});

router.get('/foldercreate', function (req, res, next) {
    fs.mkdir(`./filess/${req.query.foldername}`, function (err) {
     if(err) throw err
    res.redirect('/');
    })
});

router.get('/second/:filename', function (req, res, next) {
    fs.readdir('./filess', { withFileTypes: true }, function (err, files) {
        fs.readFile(`./filess/${req.params.filename}`,"utf-8",function(err,data){
            res.render('index2', { data: files,filename:req.params.filename, data2:data });
        })
    })
});

router.get('/folder/delete/:folddl', function (req, res, next) {
    fs.rmdir(`./filess/${req.params.folddl}`,function(err){
        res.redirect('/');
    })
});
router.get('/file/delete/:filedl', function (req, res, next) {
    fs.unlink(`./filess/${req.params.filedl}`,function(err){
        res.redirect('/');
    })
});

router.get('/change/:oldname', function (req, res, next) {
    fs.rename(`./filess/${req.params.oldname}`,`./filess/${req.query.filename}`,function(err){
        res.redirect("/");
    })
});



module.exports = router;
