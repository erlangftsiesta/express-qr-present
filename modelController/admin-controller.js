const connection = require('../configs/database'); 

const mysql      = require('mysql');
const pool       = mysql.createPool(connection);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports = {
    homepage(req, res) {
        // Mendapatkan koneksi dari pool
        pool.getConnection(function (err, connection) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Kesalahan dalam mendapatkan koneksi dari pool' });
                return;
            }
    
            // Buat query untuk mengambil semua data dari tabel presensi
            const query = "SELECT * FROM presensi";
    
            // Eksekusi query
            connection.query(query, function (err, results) {
                connection.release(); // Melepaskan koneksi setelah selesai
    
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Kesalahan dalam eksekusi query' });
                    return;
                }
    
                // Tampilkan semua data presensi
                res.render("admin/homeAdmin", { presensiData: results });
                console.log(results)
            });
        });
    },    
    scan(req,res) {
        res.render("admin/scan",{
        })
    },
    APIScan(req, res) {
        const { username, nama, kelas } = req.body;
    
        // Mendapatkan koneksi dari pool
        pool.getConnection(function (err, connection) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Kesalahan dalam mendapatkan koneksi dari pool' });
                return;
            }
    
            // Mencari presensi sebelumnya
            const checkQuery = "SELECT presensi_hadir FROM presensi WHERE username = ? AND presensi_pulang IS NULL ORDER BY presensi_hadir DESC LIMIT 1";
            connection.query(checkQuery, [username], function (err, results) {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Kesalahan dalam eksekusi query' });
                    connection.release(); // Pastikan untuk melepaskan koneksi
                    return;
                }
    
                if (results.length > 0) {
                    // Presensi hadir ditemukan, maka update presensi keluar
                    const presensi_keluar = new Date(); // Waktu saat ini untuk presensi keluar
                    const updateQuery = "UPDATE presensi SET presensi_pulang = ? WHERE username = ? AND presensi_pulang IS NULL";
                    connection.query(updateQuery, [presensi_keluar, username], function (err, results) {
                        connection.release(); // Melepaskan koneksi setelah selesai
    
                        if (err) {
                            console.error(err);
                            res.status(500).json({ error: 'Kesalahan dalam eksekusi query' });
                            return;
                        }
    
                        // Berhasil memperbarui data presensi
                        res.status(200).json({ message: `${nama} - ${kelas} Berhasil Absen Pulang` });
                    });
                } else {
                    // Tidak ada presensi hadir yang ditemukan, maka tambahkan presensi baru
                    const query = "INSERT INTO presensi (username, nama_lengkap, kelas, presensi_hadir, presensi_pulang) VALUES (?, ?, ?, ?, ?)";
                    const presensi_hadir = new Date(); // Waktu saat ini untuk presensi hadir
                    const presensi_keluar = null; // Nilai awal untuk presensi keluar
    
                    // Eksekusi query dengan parameter
                    connection.query(query, [username, nama, kelas, presensi_hadir, presensi_keluar], function (err, results) {
                        connection.release(); // Melepaskan koneksi setelah selesai
    
                        if (err) {
                            console.error(err);
                            res.status(500).json({ error: 'Kesalahan dalam eksekusi query' });
                            return;
                        }
    
                        // Berhasil memasukkan data presensi
                        res.status(200).json({ message: `${nama} - ${kelas} Berhasil Absen Masuk` });
                    });
                }
            });
        });
    }
}
