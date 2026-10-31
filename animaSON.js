
var containers = document.querySelectorAll('.medium-container');

function checkScroll() {
    var screenPosition = window.innerHeight * 0.85
    for (var i = 0; i < containers.length; i++) {
        var container = containers[i];
        
        var containerTop = container.getBoundingClientRect().top
        if (containerTop < screenPosition) {
            var firstHalf = container.querySelector('.from-left');
            var secondHalf = container.querySelector('.from-right')
            firstHalf.classList.add('active');
            secondHalf.classList.add('active');
        }
    }
}

window.addEventListener('load', function() {
    setTimeout(checkScroll, 100);
})

window.addEventListener('scroll', checkScroll);