document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.querySelector('.img1');

    if (img1) {
        img1.addEventListener('click', () => {
            const rect = img1.getBoundingClientRect();
            localStorage.setItem('img1Position', JSON.stringify({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height
            }));

            // Fade out other elements
            document.body.querySelectorAll('*:not(.img1)').forEach(el => {
                el.classList.add('fade-out');
            });

            // Animate the image to its new position
            setTimeout(() => {
                img1.style.position = 'fixed';
                img1.style.top = rect.top + 'px';
                img1.style.left = rect.left + 'px';
                img1.style.width = rect.width + 'px';
                img1.style.height = rect.height + 'px';
                img1.style.transition = 'all 0.5s ease';

                setTimeout(() => {
                    img1.style.top = '50px';
                    img1.style.left = '50px';
                    // Set the desired size for the image in case1.html
                    img1.style.width = '300px';
                    img1.style.height = '200px';
                }, 50);
            }, 500);

            // Navigate to case1.html after the animation
            setTimeout(() => {
                window.location.href = 'case1.html';
            }, 1000);
        });
    }

    // Check if we're on case1.html and animate the image
    if (window.location.pathname.includes('case1.html')) {
        const storedPosition = JSON.parse(localStorage.getItem('img1Position'));
        if (storedPosition) {
            img1.style.top = storedPosition.top + 'px';
            img1.style.left = storedPosition.left + 'px';
            img1.style.width = storedPosition.width + 'px';
            img1.style.height = storedPosition.height + 'px';
            img1.style.position = 'fixed';
            img1.style.transition = 'none';

            setTimeout(() => {
                img1.style.transition = 'all 0.5s ease';
                img1.style.top = '50px';
                img1.style.left = '50px';
                img1.style.width = '300px';
                img1.style.height = '200px';
                img1.classList.add('fade-in');
            }, 50);
        }
    }
});