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
var dropdown=document.getElementById("dropdown-timeline1");
var dropclose=document.getElementById("dropdown-close1");
function showdropdown1(){
    dropdown.style.display="flex";
    dropclose.style.display="block";
}
function hidedropdown1(){
    dropdown.style.display="none";
    dropclose.style.display="none";
}
var dropdown2=document.getElementById("dropdown-timeline2");
var dropclose2=document.getElementById("dropdown-close2");
function showdropdown2(){
    dropdown2.style.display="flex";
    dropclose2.style.display="block";
}
function hidedropdown2(){
    dropdown2.style.display="none";
    dropclose2.style.display="none";
}

var togel=document.getElementById("togel");
function showMenu(){
    togel.style.right="0";
}
function hideMenu(){
    togel.style.right="-200vw";
}
var togil=document.getElementById("togil");
function showMenu2(){
    togil.style.left="0";
}
function hideMenu2(){
    togil.style.left="-200vw";
}



