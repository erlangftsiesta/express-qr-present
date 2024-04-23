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
        });
    },
    loginAuth(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        const status = req.body.stats;
    
        if (username && password && status) {
            pool.getConnection(function (err, connection) {
                if (err) throw err;
                let query = '';
    
                if (status === 'AKTIF') {
                    query = 'SELECT * FROM login_siswa WHERE username = ? AND password = ?';
                } else if (status === 'ADMIN') {
                    query = 'SELECT * FROM admin WHERE username = ? AND password = ?';
                } else {
                    // Handle jika status tidak valid
                    res.redirect('/login?status=error&message=Statusmu%20tidak%20valid!');
                    return;
                }
    
                connection.query(query, [username, password], function (error, results) {
                    if (error) {
                        // Handle kesalahan query
                        res.redirect('/login');
                        return;
                    }
                    
                    if (results.length > 0) {
                        const user = results[0];
                        req.session.loggedin = true;
                        req.session.id_login = user.id_login;
                        req.session.username = user.username;
                        req.session.status = user.status;
    
                        // Redirect pengguna ke halaman yang sesuai berdasarkan status pengguna
                        if (user.status === 'ADMIN') {
                            res.redirect('/admin?status=success&message=Selamat%20Datang,%20Admin!'); 
                        } else if (user.status === 'AKTIF') {
                            res.redirect('/?status=success&message=Selamat%20Datang!'); 
                        } else {
                            // Handle jika status tidak valid
                            res.redirect('/login?status=error&message=Statusmu%20tidak%20valid!');
                        }
                    } else {
                        res.redirect('/login?status=error&message=Akunmu%20tidak%Ditemukan!');
                    }
                });
                connection.release();
            });
        } else {
            res.redirect('/login');
        }
    },        
}