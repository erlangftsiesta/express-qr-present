module.exports = {
    isLogin(req, res, next){
        if(req.session.loggedin === true){
            if (req.session.status == 'AKTIF'){
                next();
                return;
            }
        } else {
            req.session.destroy(function(err) {
                res.redirect('/login');
            })
        }
    },
    isLogout(req, res, next){
        if(req.session.loggedin !== true){
            next();
            return;
        }
        res.redirect('/');
    },
    isAdmin(req, res, next){
        if(req.session.loggedin === true && req.session.status === 'ADMIN'){
            next(); // Jika pengguna login dan memiliki status 'admin', lanjutkan
        } else {
            res.redirect('/'); // Jika tidak, redirect ke halaman utama atau halaman lain yang sesuai
        }
    }
};
