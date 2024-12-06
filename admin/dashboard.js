document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('isAdmin');
        window.location.href = '../index.html';
    });

    // Gallery Management
    const uploadForm = document.getElementById('uploadForm');
    uploadForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const file = document.getElementById('imageFile').files[0];
        const caption = document.getElementById('imageCaption').value;

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = {
                    id: Date.now(),
                    url: e.target.result,
                    caption: caption
                };
                
                // Store in localStorage (in a real app, this would be sent to a server)
                const gallery = JSON.parse(localStorage.getItem('gallery') || '[]');
                gallery.push(imageData);
                localStorage.setItem('gallery', JSON.stringify(gallery));
                
                loadGallery();
                uploadForm.reset();
            };
            reader.readAsDataURL(file);
        }
    });

    function loadGallery() {
        const galleryList = document.getElementById('galleryList');
        const gallery = JSON.parse(localStorage.getItem('gallery') || '[]');
        
        galleryList.innerHTML = gallery.map(image => `
            <div class="gallery-item">
                <img src="${image.url}" alt="${image.caption}">
                <button class="delete-btn" data-id="${image.id}">×</button>
                <div class="caption">${image.caption}</div>
            </div>
        `).join('');

        // Add delete handlers
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const gallery = JSON.parse(localStorage.getItem('gallery') || '[]');
                const updatedGallery = gallery.filter(img => img.id !== id);
                localStorage.setItem('gallery', JSON.stringify(updatedGallery));
                loadGallery();
            });
        });
    }

    // Initial load
    loadGallery();
});