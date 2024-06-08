const passwordInput = document.querySelector('.pss');
const submitButton = document.querySelector('button');
const correctPassword = '2540'; // Ganti dengan password yang benar

submitButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    // Password benar, arahkan ke pesan.html
    window.location.href = 'pesan.html';
  } else {
    // Password salah, arahkan ke Google
    window.location.href = 'https://www.google.com';
  }
});
function wa(event) {
  event.preventDefault(); // Menghentikan aksi default form submit

    // Nomor tujuan WhatsApp dan pesan yang ingin dikirim
  const phoneNumber = '6281234567890'; // Ganti dengan nomor tujuan
  const message = encodeURIComponent('Halo, ini pesan yang ingin dikirim.'); // Pesan yang ingin dikirim

    // URL dengan nomor tujuan dan pesan
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Mengarahkan pengguna ke WhatsApp dengan pesan yang telah ditentukan
  window.location.href = whatsappURL;
  }

document.getElementById('btnw').addEventListener('click', function() {
  const phoneNumber = '6281234567890'; // Nomor tujuan WhatsApp
  const message = encodeURIComponent('Halo, ini pesan yang ingin dikirim.'); // Pesan yang ingin dikirim

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  window.location.href = whatsappURL;
});