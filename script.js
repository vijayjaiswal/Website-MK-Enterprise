document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Gallery Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                // If filter is 'all' or item has the class matching the filter
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    // --- Google Forms Submission Logic ---
    const form = document.getElementById('enquiryForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent normal redirect

            // Disable button
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending...';

            const formData = new FormData(form);

            // Fetch to submit to Google Forms
            // Note: Google Forms returns a CORS error or redirects, we use mode 'no-cors'
            // We won't be able to inspect the true response due to no-cors, but we can assume success
            fetch(form.action, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            })
            .then(() => {
                formMessage.innerText = 'Thank you! Your enquiry has been sent. We will get back to you shortly.';
                formMessage.className = 'form-message success';
                form.reset();
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                formMessage.innerText = 'There was an error sending your enquiry. Please try calling us instead.';
                formMessage.className = 'form-message error';
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Send Enquiry';
            });
        });
    }
});
