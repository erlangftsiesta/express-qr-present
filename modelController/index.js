//deklarasikan variable berisi method yang di export dari controller (Khusus admin)
const admin = require("./admin-controller");

//deklarasikan variable berisi method yang di export dari controller
const login = require("./login-controller");
const homepage = require("./homepage-controller");
const profile = require("./profile-controller");
const logout = require("./logout-controller")

//assign variable ke dalam bentuk objek yang di export (harus ditulis berurutan)
module.exports = {
    admin,
    login,
    homepage,
    profile,
    logout
}