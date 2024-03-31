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
    isAdminLogin(req, res, next) {
        // Misalnya, Anda memiliki informasi status pengguna dalam session
        // Anda dapat memeriksa apakah statusnya adalah "ADMIN" atau tidak
        if (req.session.loggedin === true){
            if(req.session.status == 'ADMIN'){
                next();
                return;
            }
        } else {
            res.redirect('/login');
        }
    }
};
