window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const message = urlParams.get('message');

    if (status === 'success') {
        Swal.fire({
            title: 'Berhasil!',
            text: message,
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: "#3F6212",
            customClass: {
                container: 'swal2-dark' // Mengaktifkan tema gelap secara individual
            }
        }).then((result) => {
            // Redirect ke halaman login setelah menutup alert
            window.location.href = '/';
        });
    } else if (status === 'error') {
        Swal.fire({
            title: 'Gagal!',
            text: message,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: "#991B1B",
            customClass: {
                container: 'swal2-dark' // Mengaktifkan tema gelap secara individual
            }
        });
    }
}
