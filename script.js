// Highlight sections on hover
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.backgroundColor = '#f0f0f0';
    });

    section.addEventListener('mouseout', () => {
        section.style.backgroundColor = '#fff';
    });
});

// Display a welcome message when the page loads
window.onload = () => {
    alert('Welcome to Azari Tech Solution!');
};