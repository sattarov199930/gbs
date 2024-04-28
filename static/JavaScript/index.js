function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.transform === 'translateX(0%)') {
        sidebar.style.transform = 'translateX(100%)'; // Closes the sidebar
    } else {
        sidebar.style.transform = 'translateX(0%)'; // Opens the sidebar
    }
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(0%)'; // Opens the sidebar
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(100%)'; // Closes the sidebar
}

/* ------------------------------ The word map ------------------------------ */
// script.js
window.addEventListener('load', function() {
    const svgObject = document.getElementById('svgMap').contentDocument;

    if (svgObject) {
        const paths = svgObject.querySelectorAll('path');
        paths.forEach(path => {
            path.addEventListener('click', function() {
                // Remove active class from all paths
                paths.forEach(p => {
                    p.classList.remove('active');
                });
                // Add active class to the clicked path
                this.classList.add('active');
                alert('Clicked on state: ' + this.id);
            });
        });
    }
});
