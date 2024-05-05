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










