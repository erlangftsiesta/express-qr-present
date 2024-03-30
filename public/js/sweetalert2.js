window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const message = urlParams.get('message');

    if (status === 'success') {
        Swal.fire(
            'Berhasil!',
            message,
            'success'
            ).then((result) => {
            // Redirect ke halaman login setelah menutup alert
            window.location.href = '/login/logout';
            });
    } else if (status === 'error') {
        Swal.fire(
            'Gagal!',
            message,
            'error'
        );
    }
}