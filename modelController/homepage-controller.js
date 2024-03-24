const connection = require('../configs/database'); 

const mysql      = require('mysql');
const pool       = mysql.createPool(connection);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports = {
    homepage(req, res) {
        pool.getConnection(function(err, connection){
            if (err) throw err;
            res.render("home", {
                colorFlash: req.flash('color'),
                statusFlash: req.flash('status'),
                pesanFlash: req.flash('message'),
            });
        })
    }
}