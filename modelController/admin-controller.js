const connection = require('../configs/database'); 
const mysql      = require('mysql');
const pool       = mysql.createPool(connection);

const { csv } = require('../middleware/exporter');

pool.on('error',(err)=> {
    console.error(err);
});

module.exports = {
    homepageAdmin(req, res) {
        pool.getConnection(function(err, connection) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Kesalahan dalam mendapatkan koneksi dari pool' });
                return;
            }
            const query = `SELECT * FROM data_siswa`;
            connection.query(query, function (err, results) {
                connection.release(); // Melepaskan koneksi setelah selesai

                res.render("admin/homeAdmin",
                {
                    data:encodeURIComponent(JSON.stringify(
                        results
                    ))
                })

                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Kesalahan dalam eksekusi query' });
                    return;
                }
            })
        })
    },
    pageTambahDataSiswa(req, res){
        //BACKEND DEVELOPERNYA TEWAS MENGENASKAN 💀
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
    },
    showPresensi(req,res){
        res.render("admin/showAbsensi",
        {
            data:encodeURIComponent(JSON.stringify(
                    [{
                      id_presensi: 1,
                      username: 'cecil',
                      nama_lengkap: 'Priscilla Cecil Ardelia',
                      kelas: 'X RPL 2',
                      presensi_hadir: new Date('2024-03-29T16:57:50.000Z'),
                      presensi_pulang: new Date('2024-03-29T17:07:37.000Z')
                    },
                    {
                      id_presensi: 2,
                      username: 'cecil',
                      nama_lengkap: 'Priscilla Cecil Ardelia',
                      kelas: 'X RPL 2',
                      presensi_hadir: new Date('2024-03-29T17:08:30.000Z'),
                      presensi_pulang: new Date('2024-03-29T17:08:49.000Z')
                    },
                    {
                      id_presensi: 3,
                      username: 'cecil',
                      nama_lengkap: 'Priscilla Cecil Ardelia',
                      kelas: 'X RPL 2',
                      presensi_hadir: new Date('2024-03-29T17:11:03.000Z'),
                      presensi_pulang: new Date('2024-03-29T17:11:58.000Z')
                    },
                    {
                      id_presensi: 4,
                      username: 'efts',
                      nama_lengkap: 'Erlangga Muhammad Hafiz',
                      kelas: 'XI RPL 3',
                      presensi_hadir: new Date('2024-03-29T17:11:10.000Z'),
                      presensi_pulang: new Date('2024-03-29T17:11:30.000Z')
                    },
                    {
                      id_presensi: 5,
                      username: 'cecil',
                      nama_lengkap: 'Priscilla Cecil Ardelia',
                      kelas: 'X RPL 2',
                      presensi_hadir: new Date('2024-03-29T17:12:27.000Z'),
                      presensi_pulang: new Date('2024-03-29T17:12:34.000Z')
                    },
                    {
                      id_presensi: 6,
                      username: 'efts',
                      nama_lengkap: 'Erlangga Muhammad Hafiz',
                      kelas: 'XI RPL 3',
                      presensi_hadir: new Date('2024-03-29T17:19:25.000Z'),
                      presensi_pulang: new Date('2024-03-29T17:19:36.000Z')
                    }
                  ]
            ))
        })
        return
        pool.getConnection(function(err, connection){
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Kesalahan dalam mendapatkan koneksi dari pool' });
                return;
            }
            const query = `SELECT * FROM presensi`;
            connection.query(query, function (err, results) {
                connection.release(); // Melepaskan koneksi setelah selesai

                res.render("admin/showAbsensi",
                {
                    data:encodeURIComponent(JSON.stringify(
                        results
                    ))
                })

                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Kesalahan dalam eksekusi query' });
                    return;
                }
            })
        })
    },
    exportDataPresensi(req, res){
        try {
          // Your custom SQL query to fetch data from the database
          const sqlQuery = "SELECT * FROM presensi"; // Ganti dengan nama tabel Anda
      
          // Mendapatkan koneksi dari pool
          pool.getConnection(function(err, connection) {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Kesalahan dalam mendapatkan koneksi dari pool' });
            }
      
            // Eksekusi query untuk mengambil data dari database
            connection.query(sqlQuery, (err, results) => {
              connection.release(); // Melepaskan koneksi setelah selesai digunakan
              if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Kesalahan dalam mengambil data dari database' });
              }
      
              // Mengatur header untuk tipe konten dan nama file
              res.setHeader("Content-Type", "text/csv");
              res.setHeader("Content-Disposition", "attachment; filename="+"absen.csv");
      
              // Menulis data CSV ke respons dan mengirimkannya
              csv.write(results, {headers: true}).pipe(res);
            });
          });
        } catch (err) {
          console.error("Error occurred:", err);
          res.status(500).send("An error occurred during the export process.");
        }
      },      
    
}
