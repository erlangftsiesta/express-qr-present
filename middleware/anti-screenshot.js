window.onload = () => {
    document.addEventListener('DOMContentLoaded', function() {
        // Mencegah penggunaan tombol PrintScreen atau F12 di keyboard
        document.addEventListener('keydown', function(event) {
            if (event.key === 'PrintScreen' || event.key === 'F12') {
                event.preventDefault();
                alert('Screenshot is disabled');
            }
        });
    
        // Mencegah penggunaan touchstart untuk mengambil tangkapan layar di perangkat seluler
        document.addEventListener('touchstart', function(event) {
            event.preventDefault();
            alert('Screenshot is disabled');
        });
    });
    
}