const connection = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(connection);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    profile(req, res) {
        let id = req.session.id_login;

        pool.getConnection(function (err, connection) {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }

            connection.query(
                `SELECT * FROM login WHERE id_login = '${id}';`,
                function (error, results) {
                    connection.release(); // Melepaskan koneksi sebelum memanggil render

                    if (error) {
                        console.error(error);
                        return res.status(500).send('Internal Server Error');
                    }

                    res.render("profile", {
                        userName: req.session.username,
                    });
                }
            );
        });
    }
}
