function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button svg');
    
    if (sidebar.style.transform === 'translateX(0%)') {
        sidebar.style.transform = 'translateX(100%)'; // Closes the sidebar
        menuButton.innerHTML = `<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>`; // Transform back to hamburger icon
    } else {
        sidebar.style.transform = 'translateX(0%)'; // Opens the sidebar
        menuButton.innerHTML = `<path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>`; // Transform to cross icon
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
// 'US', 'UZ', 'LV', 'KZ', 'KG', 'TJ'
const countryData = {
    "US": {
        title: "United States",
        description: "Information about the United States.",
        imageUrl: "static/images/us.png"
    },
    "UZ": {
        title: "Uzbekistan",
        description: "Information about Uzbekistan.",
        imageUrl: "static/images/uz.png"
    },
    "LV": {
        title: "Latvia",
        description: "Information about Latvia.",
        imageUrl: "static/images/lv.png"
    },
    "KZ": {
        title: "Kazakhstan",
        description: "Information about Kazakhstan.",
        imageUrl: "static/images/kz.png"
    },
    "KG": {
        title: "Kyrgyzstan",
        description: "Information about Kyrgyzstan.",
        imageUrl: "static/images/kg.png"
    },
    "TJ": {
        title: "Tajikistan",
        description: "Information about Tajikistan.",
        imageUrl: "static/images/tj.png"
    },
    "UA": {
        title: "Ukraine",
        description: "Information about Ukraine.",
        imageUrl: "static/images/ua.png"
    },
    "BY": {
        title: "Belarus",
        description: "Information about Belarus.",
        imageUrl: "static/images/by.png"
    },
    "TM": {
        title: "Turkmenistan",
        description: "Information about Turkmenistan.",
        imageUrl: "static/images/tm.png"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const object = document.getElementById('svgMap');
    object.addEventListener('load', function() {
        const svgDocument = object.contentDocument;
        const paths = svgDocument.querySelectorAll('path');
        const infoModal = document.getElementById('infoModal');
        const countryInfo = document.getElementById('countryInfo');
        const countryTitle = document.createElement('h1');
        const countryImage = document.createElement('img');
        const countryDesc = document.createElement('p');
        const closeModal = document.querySelector('.close');

        closeModal.onclick = function() {
            infoModal.style.display = "none";
            paths.forEach(p => {
                p.classList.remove('active');
                p.style.stroke = "";
                p.style.strokeWidth = "";
            });
        };

        paths.forEach(path => {
            if (countryData[path.id]) {
                path.style.cursor = 'pointer'; // Ensure cursor changes on hover over clickable countries
                path.style.fill = '#2b14ab'
                path.addEventListener('mouseenter', function() {
                    this.style.fill = '#ff5722'; // Optional: Highlight color on mouse enter
                });

                path.addEventListener('mouseleave', function() {
                    this.style.fill = '#2b14ab'; // Reset fill color on mouse leave
                });

                path.addEventListener('click', function() {
                    paths.forEach(p => {
                        p.classList.remove('active');
                        p.style.stroke = "";
                        p.style.strokeWidth = "";
                        this.style.fill='#2b14ab'
                    });

                this.classList.add('active');
                this.style.stroke = "#ff0000";
                this.style.strokeWidth = "1px";
                this.classList.add('active');
                countryInfo.innerHTML = ''; // Clear previous content
                countryInfo.appendChild(createContentElement('h1', countryData[path.id].title));
                countryInfo.appendChild(createContentElement('img', countryData[path.id].imageUrl, 'src'));
                countryInfo.appendChild(createContentElement('p', countryData[path.id].description));
                infoModal.style.display = "block";
                });
            } else {
                path.style.fill = '#cccccc'; // Set non-clickable countries to default color
                path.style.pointerEvents = 'none'; // Disable interaction
            }
        });
    });
});

function createContentElement(elementType, content, attribute) {
    const element = document.createElement(elementType);
    if (attribute === 'src') {
        element.src = content;
    } else {
        element.textContent = content;
    }
    return element;
}

/* ------------------------------ The Hero Page ----------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const description = document.getElementById('company-description');
    const additionalContent = document.getElementById('additional-content');
    
    // Make the description visible first
    setTimeout(() => {
        description.style.opacity = 1;
    }); // Description appears after 500ms

    // Then slide in the additional content
    setTimeout(() => {
        additionalContent.style.opacity = 1;
        additionalContent.style.transform = "translateX(0)"; // Reset to original position
    }, 4000);

    // Additionally handle the appearance on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY + window.innerHeight >= additionalContent.offsetTop) {
            if (additionalContent.style.opacity !== "1") {
                additionalContent.style.opacity = 1;
                additionalContent.style.transform = "translateX(0)"; // Ensure it's visible and in place if not already
            }
        }
    });
});












