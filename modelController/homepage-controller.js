const connection = require('../configs/database'); 

const mysql      = require('mysql');
const pool       = mysql.createPool(connection);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports = {
    homepage(req, res) {
        const id = req.session.id_login;
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM login_siswa WHERE id_login = '${id}';
                `
            , function(error, results){
                if (error) throw error;
                if (results.length > 0) {
                    const status = results[0]['status'];
                    const username = results[0]['username'];
                    if (status == 'AKTIF'){
                        const user = results[0];
                        req.session.loggedin = true;
                        req.session.status = user.status;

                        res.render("home", {
                            colorFlash: req.flash('color'),
                            statusFlash: req.flash('status'),
                            pesanFlash: req.flash('message'),
                            username: username
                        });
                    }
                }
            });
        });
    }, 
}