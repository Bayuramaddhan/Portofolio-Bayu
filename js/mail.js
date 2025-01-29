(function() {
    emailjs.init("hX_TPL8O8cSI3N9w5"); // Ganti dengan User ID Anda
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    emailjs.sendForm('service_y532e0c', 'template_zcx7eh8', this)
        .then(function() {
            // alert('Email sent successfully!');
            document.getElementById("succes-popup").style.display = 'flex';
            document.body.classList.add('no-scroll');
        }, function(error) {
            // alert('Failed to send email: ' + JSON.stringify(error));
            document.getElementById("failed-popup").style.display = 'flex';
            document.body.classList.add('no-scroll');
        });
});

// Menutup popup jika pengguna mengklik di luar popup
window.onclick = function(event) {
    const popup = document.querySelector('.popup');
    if (event.target === popup) {
        popup.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }
}

function okklik(){
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
    document.body.classList.remove('no-scroll');
}