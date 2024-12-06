// Gallery Management
const galleryImages = [
    {
        id: 1,
        url: 'background1.jpg',
        caption: 'Annual Day Celebration'
    },
    {
        id: 2,
        url: 'background.png',
        caption: 'Science Exhibition'
    },
    {
        id: 3,
        url: 'vodarevu beach.jpg',
        caption: 'Library'
    }
];

function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    // Combine default images with any uploaded ones
    const uploadedImages = JSON.parse(localStorage.getItem('gallery') || '[]');
    const allImages = [...galleryImages, ...uploadedImages];

    galleryGrid.innerHTML = allImages.map(image => `
        <div class="gallery-item">
            <img src="${image.url}" alt="${image.caption}">
            <div class="caption">${image.caption}</div>
        </div>
    `).join('');
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', renderGallery);

// Listen for gallery updates
window.addEventListener('storage', (e) => {
    if (e.key === 'gallery') {
        renderGallery();
    }
});