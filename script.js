
$(document).ready(function() {

document.addEventListener('mousemove', function (event) {
    var trail = document.getElementById('trail');
    trail.style.left = event.clientX + 'px';
    trail.style.top = event.clientY + 'px';
    trail.classList.add('active');
});
