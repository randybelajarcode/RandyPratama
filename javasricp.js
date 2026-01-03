// Lightbox sederhana: klik gambar untuk buka, klik X / luar / Esc untuk tutup
(function () {
    const lightbox = document.getElementById('lightbox');
    const lbImage = document.getElementById('lbImage');
    const lbCaption = document.getElementById('lbCaption');
    const lbClose = document.getElementById('lbClose');

    const images = document.querySelectorAll('.Foto-Kuliah img, .Foto-Pengalaman img, .Foto-SMK img');

    images.forEach(img => {
        img.style.cursor = 'pointer';

        img.addEventListener('click', () => {
            const src = img.getAttribute('data-full') || img.src;
            const alt = img.alt || '';
            lbImage.src = src;
            lbImage.alt = alt;
            lbCaption.textContent = alt;
            lightbox.classList.add('open');
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        lbImage.src = '';
        lbImage.alt = '';
        lbCaption.textContent = '';
    }

    lbClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
})();

