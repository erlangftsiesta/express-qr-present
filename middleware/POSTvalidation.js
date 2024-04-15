const { body } = require('express-validator');

// Aturan validasi untuk input
exports.postValidationRules = {
    isLoginPage: () => {
        return [
            body('username').notEmpty().withMessage('Username tidak boleh kosong'),
            body('password').notEmpty().withMessage('Password tidak boleh kosong'),
            body('status').notEmpty().withMessage('Status tidak boleh kosong')
        ];
    }, 
    isUsernameProfilPage: () => {
        return [
            // Tambahkan aturan validasi khusus untuk halaman profil
        ];
    },
    isPasswordProfilPage: () => {
        return [
            // Tambahkan aturan validasi khusus untuk halaman profil
        ];
    }
};
