document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari submit secara default

    // Mengambil nilai dari form
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;

    // Mendapatkan gender dari radio button yang dipilih
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Tidak dipilih"; 

    const message = document.getElementById("message").value;

    // Menampilkan hasil di kotak hasil
    const resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = `
        <strong>Nama:</strong> ${name}<br>
        <strong>Tanggal Lahir:</strong> ${dob}<br>
        <strong>Jenis Kelamin:</strong> ${gender}<br>
        <strong>Pesan:</strong> ${message}
    `;
});

// Fungsionalitas slider otomatis
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Fungsi untuk menampilkan slide berdasarkan indeks
function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Fungsi untuk bergerak maju atau mundur melalui tombol panah
function moveSlide(step) {
    showSlide(slideIndex + step);
    resetAutoSlide(); 
}

// Fungsi untuk menjalankan auto-slide setiap 3 detik
function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        moveSlide(1);
    }, 3000);
}

// Fungsi untuk reset auto-slide agar tidak terganggu setelah pengguna klik tombol
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Mulai auto-slide ketika halaman dimuat
startAutoSlide();
