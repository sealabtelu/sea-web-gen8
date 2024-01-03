document.addEventListener('DOMContentLoaded', function () {
    function scrollToSection(targetId) {
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            var targetPosition = targetSection.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    var aboutLink = document.querySelector('a[href="#about"]');
    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('about');
    });

    
    var exploreLink = document.querySelector('a[href="#explore"]');
    exploreLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('programs');
    });

    
    var programsLink = document.querySelector('a[href="#programs"]');
    programsLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('programs');
    });

    var programsLink = document.querySelector('a[href="#assistants"]');
    programsLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('assistants');
    });

    var homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

var togel=document.getElementById("togel");
function showMenu(){
    togel.style.right="0";
}
function hideMenu(){
    togel.style.right="-200vw";
}
