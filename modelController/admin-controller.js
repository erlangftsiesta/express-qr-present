const connection = require('../configs/database'); 

const mysql      = require('mysql');
const pool       = mysql.createPool(connection);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports = {
    homepage(req,res) {
        res.render("admin/homeAdmin",{
            username:"admin",
            nama_lengkap:"Muhammad Erlangga Hafiz",
            kelas:"XI RPL 3",
            status:"ADMIN"
        })
    },
    scan(req,res) {
        res.render("admin/scan",{
            username:"admin",
            nama_lengkap:"Muhammad Erlangga Hafiz",
            kelas:"XI RPL 3",
            status:"ADMIN"
        })
    }
}