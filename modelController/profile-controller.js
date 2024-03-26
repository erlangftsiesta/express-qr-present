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
                            SELECT * FROM data_siswa
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
    }
}
