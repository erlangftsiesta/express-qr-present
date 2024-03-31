const connection = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(connection);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    profile(req, res) {
        let id_login = req.session.id_login;

        pool.getConnection(function (err, connection) {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return
            }
            connection.query(
                `SELECT * FROM login_siswa WHERE id_login = '${id_login}';`,
                function (error, results) {
                    if (error) {
                        console.error(error);
                        res.status(500).send('Internal Server Error');
                        connection.release();
                        return;
                    }
                    if (results.length > 0){
                        connection.query(
                            `
                            SELECT * FROM data_siswa WHERE id_siswa = '${id_login}'
                            `, 
                            function (error, dataSiswaResults){
                                if (error) {
                                    console.error(error);
                                    res.status(500).send('Internal Server error');
                                    connection.release();
                                    return;
                                }
                                connection.release();

                                res.render("profile", {
                                    username: req.session.username,
                                    nama_lengkap: dataSiswaResults[0]['nama_lengkap'],
                                    kelas: dataSiswaResults[0]['kelas'],
                                    status: results[0]['status']
                                })
                            }
                        )
                    }
                }
            );
        });
    },
    // profile(req, res) {
    //     res.render("profile",{
    //         username:"erlangftsiesta",
    //         nama_lengkap:"Muhammad Erlangga Hafiz",
    //         kelas:"XI RPL 3",
    //         status:"AKTIF"
    //     })
    // }
    changePassword(req, res) {
        const { username, oldPassword, newPassword } = req.body;
    
        // Mendapatkan koneksi dari pool
        pool.getConnection(function (err, connection) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Kesalahan dalam mendapatkan koneksi dari pool' });
                return;
            }
    
            // Buat query untuk memeriksa password lama
            const checkQuery = `SELECT * FROM login_siswa WHERE username = '${username}' AND password = '${oldPassword}'`;
            
            // Eksekusi query
            connection.query(checkQuery, [username, oldPassword], function (err, results) {
                if (err) {
                    connection.release(); // Melepaskan koneksi setelah selesai
                    console.error(err);
                    res.status(500).json({ error: 'Kesalahan dalam eksekusi query' });
                    return;
                }
    
                // Jika password lama cocok
                if (results.length > 0) {
                    // Buat query untuk mengubah password
                    const updateQuery = `UPDATE login_siswa SET password = '${newPassword}' WHERE username = '${username}'`;
                    
                    // Eksekusi query untuk mengubah password
                    connection.query(updateQuery, [newPassword, username], function (err, results) {
                        connection.release(); // Melepaskan koneksi setelah selesai
                        
                        if (err) {
                            console.error(err);
                            req.flash('error', 'Kesalahan dalam mengubah password');
                        } else {
                            req.flash('success', 'Password berhasil diubah');
                        }
                        res.redirect('/profile?status=success&message=Password%20berhasil%20diubah!');
                        
                    });
                } else {
                    connection.release(); // Melepaskan koneksi setelah selesai
                    res.status(400).json({ error: 'Password lama tidak cocok' });
                }
            });
        });
    }, 
    changeUsername(req, res){
        const { password, oldUsername, newUsername } = req.body;
        const id_login = req.session.id_login;
    
        // Mendapatkan koneksi dari pool
        pool.getConnection(function (err, connection) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Kesalahan dalam mendapatkan koneksi dari pool' });
                return;
            }
    
            // Buat query untuk memeriksa password lama
            const checkQuery = `SELECT * FROM login_siswa WHERE username = '${oldUsername}' AND password = '${password}'`;
            
            // Eksekusi query
            connection.query(checkQuery, [password, oldUsername], function (err, results) {
                if (err) {
                    connection.release(); // Melepaskan koneksi setelah selesai
                    console.error(err);
                    res.status(500).json({ error: 'Kesalahan dalam eksekusi query' });
                    return;
                }
    
                // Jika password lama cocok
                if (results.length > 0) {
                    // Buat query untuk mengubah password
                    const updateQuery = `UPDATE login_siswa SET username = '${newUsername}' WHERE id_login = '${id_login}'`;
                    
                    // Eksekusi query untuk mengubah password
                    connection.query(updateQuery, [newUsername, id_login], function (err, results) {
                        connection.release(); // Melepaskan koneksi setelah selesai
                        
                        if (err) {
                            console.error(err);
                            req.flash('error', 'Kesalahan dalam mengubah password');
                        } else {
                            req.flash('success', 'Password berhasil diubah');
                        }
                        res.redirect('/profile?status=success&message=Username%20berhasil%20diubah!');
                        
                    });
                } else {
                    connection.release(); // Melepaskan koneksi setelah selesai
                    res.status(400).json({ error: 'Password lama tidak cocok' });
                }
            });
        });
    }
}
