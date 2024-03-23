const connection = require('../configs/database'); 

let mysql      = require('mysql');
let pool       = mysql.createPool(connection);

pool.on('error',(err)=> {
    console.error(err);
});

module.export = {
    loginPage(req, res){
        res.render("login", {
            colorFlash: req.flash('color'),
            statusFlash: req.flash('status'),
            pesanFlash: req.flash('message'),
        })
    }
}