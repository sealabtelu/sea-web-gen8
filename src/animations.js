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

    function handleNavLinkClick(event, targetId) {
        event.preventDefault();
        scrollToSection(targetId);
    }

    var aboutLink = document.querySelector('a[href="#about"]');
    aboutLink.addEventListener('click', function (event) {
        handleNavLinkClick(event, 'about');
    });

    var exploreLink = document.querySelector('a[href="#explore"]');
    exploreLink.addEventListener('click', function (event) {
        handleNavLinkClick(event, 'programs');
    });

    var programsLink = document.querySelector('a[href="#programs"]');
    programsLink.addEventListener('click', function (event) {
        handleNavLinkClick(event, 'programs');
    });

    var assistantsLink = document.querySelector('a[href="#assistants"]');
    assistantsLink.addEventListener('click', function (event) {
        handleNavLinkClick(event, 'assistants');
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
function toggleMenu(element, show) {
    var togel = element.parentNode.parentNode.querySelector("#togel");
    if (togel) {
        togel.style.right = show ? "-100vw" : "-300vw";
    }
}

function showMenu(element) {
    toggleMenu(element, true);
}

function hideMenu(element) {
    toggleMenu(element, false);
}

// LMS
document.addEventListener('DOMContentLoaded', function () {
    function hideAllCourseTaskContent() {
        var courseTaskContents = document.querySelectorAll(".course-task-content");
        courseTaskContents.forEach(function (content) {
            content.style.maxHeight = '0vh';
        });
    }

    function toggleCourseTaskContent(element) {
        var courseTaskContent = element.closest(".course-container").querySelector(".course-task-content");
        if (courseTaskContent) {
            courseTaskContent.style.maxHeight = (courseTaskContent.style.maxHeight === '100vw') ? '0vh' : '100vw';
            var close = element.closest(".course-container").querySelector(".close");
            if (close) {
                close.style.display = (courseTaskContent.style.maxHeight === '100vw') ? 'block' : 'none';
            }
        }
    }

    function rotateArrowIcon(element) {
        var arrowIcon = element.querySelector("#arrow-icon");
        arrowIcon.classList.toggle("fa-rotate-by-270");
    }

    hideAllCourseTaskContent();

    document.querySelectorAll(".task-header").forEach(function (task) {
        task.addEventListener("click", function () {
            toggleCourseTaskContent(this);
            rotateArrowIcon(this);
        });
    });

});


function toggleDropdown(element, show) {
    var dropdown = element.parentNode.querySelector("#dropdown-timeline");
    var dropclose = element.parentNode.querySelector("#dropdown-close");
    if (dropdown) {
        dropdown.style.display = show ? "flex" : "none";
    }
    if (dropclose) {
        dropclose.style.display = show ? "block" : "none";
    }
}

function showdropdown(element) {
    toggleDropdown(element, true);
}

function hidedropdown(element) {
    toggleDropdown(element, false);
}


// Upload
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", () => inputElement.click());

    inputElement.addEventListener("change", () => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, () => dropZoneElement.classList.remove("drop-zone--over"));
    });

    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("drop-zone--over");
    });
});

function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}


// DARKORLIGH
document.addEventListener('DOMContentLoaded', function () {
    nightmode= parseInt(localStorage.getItem("nightmode"));
    TurnTheme(nightmode)
    function TurnTheme(nightmode){
        var text_item = (nightmode == 1) ? document.querySelectorAll('.light-text,.light-text-reverse') : document.querySelectorAll('.dark-text,.dark-text-reverse');
        var back_item = (nightmode == 1) ? document.querySelectorAll('.light-background,.light-background-reverse') : document.querySelectorAll('.dark-background,.dark-background-reverse');
        var sec3home = document.querySelector('.content.section3'); 

        text_item.forEach(function(item){
            if(nightmode == 1){
                if (item.classList.contains('light-text')){
                    item.classList.remove('light-text');
                    item.classList.add('dark-text');
                }
                else{
                    item.classList.remove('light-text-reverse');
                    item.classList.add('dark-text-reverse');
                }
            }
            else{
                if (item.classList.contains('dark-text')){
                    item.classList.remove('dark-text');
                    item.classList.add('light-text');
                }
                else{
                    item.classList.remove('dark-text-reverse');
                    item.classList.add('light-text-reverse');
                }
            }
        });
        back_item.forEach(function(item){
            if(nightmode == 1){
                if (item.classList.contains('light-background')){
                    item.classList.remove('light-background');
                    item.classList.add('dark-background');
                }
                else{
                    item.classList.remove('light-background-reverse');
                    item.classList.add('dark-background-reverse');
                }
            }
            else{
                if (item.classList.contains('dark-background')){
                    item.classList.remove('dark-background');
                    item.classList.add('light-background');
                }
                else{
                    item.classList.remove('dark-background-reverse');
                    item.classList.add('light-background-reverse');
                }
            }
        });
        
        if(sec3home){
            if(nightmode == 1){
                sec3home.classList.remove('theme-background');
                sec3home.classList.add('dark-background');
            }
            else{
                sec3home.classList.remove('dark-background');
                sec3home.classList.add('theme-background');
            }
        };
    }
    document.querySelectorAll(".toggle-theme").forEach(function (task) {
        task.addEventListener("click", function () {
            nightmode = (nightmode == 1) ? 0 : 1;
            localStorage.setItem("nightmode", nightmode);
            TurnTheme(nightmode)
        });
    });
});