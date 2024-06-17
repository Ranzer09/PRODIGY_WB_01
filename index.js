document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('li').forEach(function(i) {
        i.addEventListener('click', function() {
            window.location.href = this.getAttribute('href');
        });
    });
});
