export const quotes = [
    { quote: "Ilmu adalah cahaya yang menerangi jalan menuju kebijaksanaan.", author: "Unknown People" },
    { quote: "Semangat adalah kuncinya, keberhasilan adalah hasilnya.", author: "Unknown People" },
    { quote: "Belajarlah seolah-olah kamu akan hidup selamanya, hiduplah seolah-olah kamu akan mati besok.", author: "Unknown People" },
    { quote: "Impianmu adalah api yang menyala dalam dirimu, jangan biarkan anginnya memadamkannya.", author: "Unknown People" },
    { quote: "Karena sesungguhnya sesudah kesulitan itu ada kemudahan", author: "Q.S Al-Insyirah: 5" },
    { quote: "Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya", author: "Q.S Al-Baqarah: 286" },
    { quote: "Ingatlah kamu kepada-Ku, niscaya Aku ingat (pula) kepadamu.", author: "Q.S Al-Baqarah: 152"},
    { quote: "Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?.", author: "31x in Q.S Ar-Rahman" },
    { quote: "Maka apakah mereka tidak memperhatikan Al Quran, ataukah hati mereka terkunci?.", author: "Q.S Muhammad: 24" },
    { quote: "Dan sesungguhnya telah Kami mudahkan Alquran untuk pelajaran, maka adakah orang yang mengambil pelajaran?.", author: "Q.S Al-Qamar: 17" },
    { quote: "Dan tiadalah kehidupan dunia ini, selain dari main-main dan senda gurau belaka. Dan sungguh kampung akhirat itu lebih baik bagi orang-orang yang bertakwa. Maka tidakkah kamu memahaminya?", author: "Q.S Al-An’am: 32" },
    { quote: "Dan engkau akan melihat gunung-gunung, yang engkau kira tetap berdiri di tempatnya, padahal dia berjalan seperti awan berjalan.", author: "Q.S An-Naml: 88" },
    { quote: "Mudah-mudahan Allah menimbulkan kasih sayang antaramu dengan orang-orang yang kamu musuhi di antara mereka. Dan Allah adalah Maha Kuasa. Dan Allah Maha pengampun lagi Maha penyayang.", author: "Q.S Al-Mumtahanah: 7" },
    { quote: "Dan janganlah kamu membunuh anak-anakmu karena takut ditimpa kemiskinan. Kamilah yang akan memberi rezeki kepada mereka dan juga kepadamu. Sesungguhnya, membunuh mereka adalah suatu perbuatan dosa besar.", author: "QS. Al-Isra’: 31" },
    { quote: "Orang yang tak berpengalaman mendapat kebodohan, tetapi orang yang bijak bermahkotakan pengetahuan.", author: "Amsal 14:18" },
    { quote: "Banyaklah rancangan di hati manusia, tetapi keputusan Tuhanlah yang terlaksana.", author: "Amsal 19:21" },
    { quote: "Percayalah kepada Tuhan dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri.", author: "Amsal 3:5" },
    { quote: "Siapa menjaga mulutnya memelihara nyawanya, tetapi dia yang membuka lebar bibirnya itu menuju kehancuran.", author: "Amsal 13:3" },
    { quote: "Apapun juga yang kamu perbuat, perbuatlah dengan segenap hatimu seperti untuk Tuhan dan bukan untuk manusia.", author: "Kolase 3:23" },
];
export function getRandomQuote(array) {
    return array[Math.floor(Math.random() * array.length)];
}