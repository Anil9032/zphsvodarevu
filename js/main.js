// Navigation and Section Management
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    
    // Show active section and update navigation
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const targetSection = document.getElementById(sectionId);
        const targetLink = document.querySelector(`[href="#${sectionId}"]`);

        if (targetSection) targetSection.classList.add('active');
        if (targetLink) targetLink.classList.add('active');
    }

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
            history.pushState(null, '', `#${sectionId}`);
        });
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        const sectionId = location.hash.substring(1) || 'home';
        showSection(sectionId);
    });

    // Show initial section based on URL hash
    const initialSection = location.hash.substring(1) || 'home';
    showSection(initialSection);

    // Form Submissions
    const admissionForm = document.getElementById('admissionForm');
    const contactForm = document.getElementById('contactForm');

    admissionForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            fullName: document.getElementById('fullName').value,
            previousClass: document.getElementById('previousClass').value,
            presentClass: document.getElementById('presentClass').value,
            phone: document.getElementById('phone').value
        };
        
        // Store in localStorage (in a real app, this would go to a server)
        const admissions = JSON.parse(localStorage.getItem('admissions') || '[]');
        admissions.push(formData);
        localStorage.setItem('admissions', JSON.stringify(admissions));
        
        alert('Application submitted successfully!');
        admissionForm.reset();
    });

    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            message: document.getElementById('message').value,
            date: new Date().toISOString()
        };
        
        // Store in localStorage (in a real app, this would go to a server)
        const messages = JSON.parse(localStorage.getItem('messages') || '[]');
        messages.push(formData);
        localStorage.setItem('messages', JSON.stringify(messages));
        
        alert('Message sent successfully!');
        contactForm.reset();
    });

    // Application Form Download
    document.getElementById('download')?.addEventListener('click', (e) => {
        e.preventDefault();
        // In a real app, this would download a PDF
        alert('Application form download would start here');
    });
});