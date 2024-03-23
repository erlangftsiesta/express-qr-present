const connection = require('../configs/database'); 

let mysql      = require('mysql');
let pool       = mysql.createPool(connection);

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
    // Post / kirim data yang diinput user
    loginAuth(req,res){
        const username = req.body.username; //ini mengambil input dari user di halaman EJS bukan mySQL!
        const password = req.body.pass; //ini mengambil input dari user di halaman EJS bukan mySQL!
        const status = req.body.stats; //ini mengambil input dari user di halaman EJS bukan mySQL!

        if (username && password && status) {
            pool.getConnection(function(err, connection) {
                if (err) throw err;
                connection.query(
                    `SELECT * FROM login WHERE username = ? AND password = ? AND status = ?`
                , [username, password, status],function (error, results) {
                    if (error) throw error;  
                    if (results.length > 0) {
                        const user = results[0];
                        // Jika data ditemukan, set sesi user tersebut menjadi true
                        req.session.loggedin = true;
                        req.session.userid = user.id_login;
                        req.session.username = user.username;
                        req.session.status = user.status;
                        res.redirect('/');
                    } else {
                        // Jika data tidak ditemukan, set library flash dengan pesan error yang diinginkan
                        req.flash('color', 'danger');
                        req.flash('status', 'Oops..');
                        req.flash('message', 'Akun tidak ditemukan');
                        res.redirect('/login');
                    }
                });
                connection.release();
            })
        } else {
            res.redirect('/login');
            res.end();
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