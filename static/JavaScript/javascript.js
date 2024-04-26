document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#map-container path').forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            const tooltipId = 'tooltip-' + this.id;
            document.getElementById(tooltipId).setAttribute('visibility', 'visible');
        });

        element.addEventListener('mouseleave', function() {
            const tooltipId = 'tooltip-' + this.id;
            document.getElementById(tooltipId).setAttribute('visibility', 'hidden');
        });
    });
});
