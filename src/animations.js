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

// Landing
function showMenu(element) {
    var togel=element.parentNode.parentNode.querySelector("#togel");
    if (togel) {
        togel.style.right="0";
    }
}
function hideMenu(element) {
    var togel=element.parentNode.parentNode.querySelector("#togel");
    if (togel) {
        togel.style.right="-200vw";
    }
}

// LMS
function showcontent(element) {
    var coursetaskcontent = element.parentNode.querySelector("#course-task-content");
    var close = element.parentNode.querySelector("#close");
    if (coursetaskcontent) {
        coursetaskcontent.style.height = '10vh';
        close.style.display = 'block';
    }
}
function hidecontent(element) {
    var coursetaskcontent = element.parentNode.querySelector("#course-task-content");
    var close = element.parentNode.querySelector("#close");
    if (coursetaskcontent) {
        coursetaskcontent.style.height = '0vh';
        close.style.display = 'none';
    }
}
function showdropdown(element) {
    var dropdown=element.parentNode.querySelector("#dropdown-timeline");
    var dropclose=element.parentNode.querySelector("#dropdown-close");
    if (dropdown) {
        dropdown.style.display="flex";
    }
    if (dropclose) {
        dropclose.style.display="block";
    }
}
function hidedropdown(element) {
    var dropdown=element.parentNode.querySelector("#dropdown-timeline");
    var dropclose=element.parentNode.querySelector("#dropdown-close");
    if (dropdown) {
        dropdown.style.display="none";
    }
    if (dropclose) {
        dropclose.style.display="none";
    }
}



