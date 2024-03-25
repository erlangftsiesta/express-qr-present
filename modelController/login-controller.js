const connection = require('../configs/database'); 

const mysql      = require('mysql');
const pool       = mysql.createPool(connection);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports = {
    // Render tampilan untuk login yang ada didalam folder 'src/views/login.ejs'
    loginPage(req,res){
        res.render("login",{
            colorFlash: req.flash('color'),
            statusFlash: req.flash('status'),
            pesanFlash: req.flash('message'),
        });
    },
    loginAuth(req, res) {
        const username = req.body.username;
        const password = req.body.pass;
        const status = req.body.stats;
    
        if (username && password && status) {
            pool.getConnection(function (err, connection) {
                if (err) throw err;
                let query = '';
    
                if (status === 'AKTIF') {
                    query = 'SELECT * FROM login WHERE username = ? AND password = ?';
                } else if (status === 'ADMIN') {
                    query = 'SELECT * FROM admin WHERE username = ? AND password = ?';
                } else {
                    // Handle jika status tidak valid
                    res.redirect('/login');
                    return;
                }
    
                connection.query(query, [username, password], function (error, results) {                    if (results.length > 0) {
                        const user = results[0];
                        req.session.loggedin = true;
                        req.session.id_login = user.id_login;
                        req.session.username = user.username;
                        req.session.status = user.status;
    
                        // Render tampilan yang sesuai berdasarkan status pengguna
                        if (user.status === 'ADMIN') {
                            res.render('admin/homeAdmin');
                        } else if (user.status === 'AKTIF') {
                            res.render('home');
                        } else {
                            // Handle jika status tidak valid
                            res.redirect('/login');
                        }
                    } else {
                        req.flash('color', 'danger');
                        req.flash('status', 'Oops..');
                        req.flash('message', 'Akun tidak ditemukan');
                        res.redirect('/login');
                    }
                });
                connection.release();
            });
        } else {
            res.redirect('/login');
        }
    },    
    // Fungsi untuk logout | Cara memanggilnya menggunakan url/rute 'http://localhost:5050/login/logout'
    logout(req,res){
        // Hapus sesi user dari broser
        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            // Hapus cokie yang masih tertinggal
            res.clearCookie('secretname');
            res.redirect('/login');
        });
    },
}