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
        togel.style.right="-100vw";
    }
}
function hideMenu(element) {
    var togel=element.parentNode.parentNode.querySelector("#togel");
    if (togel) {
        togel.style.right="-300vw";
    }
}

// LMS
function showcontent(element) {
    var coursetaskcontent = element.parentNode.querySelector("#course-task-content");
    var close = element.parentNode.querySelector("#close");
    if (coursetaskcontent) {
        coursetaskcontent.style.maxHeight = '30vh';
        close.style.display = 'block';
    }
}
function hidecontent(element) {
    var coursetaskcontent = element.parentNode.querySelector("#course-task-content");
    var close = element.parentNode.querySelector("#close");
    if (coursetaskcontent) {
        coursetaskcontent.style.maxHeight = '0vh';
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

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
	const dropZoneElement = inputElement.closest(".drop-zone");

	dropZoneElement.addEventListener("click", (e) => {
		inputElement.click();
	});

	inputElement.addEventListener("change", (e) => {
		if (inputElement.files.length) {
			updateThumbnail(dropZoneElement, inputElement.files[0]);
		}
	});

	dropZoneElement.addEventListener("dragover", (e) => {
		e.preventDefault();
		dropZoneElement.classList.add("drop-zone--over");
	});

	["dragleave", "dragend"].forEach((type) => {
		dropZoneElement.addEventListener(type, (e) => {
			dropZoneElement.classList.remove("drop-zone--over");
		});
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

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
	let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

	// First time - remove the prompt
	if (dropZoneElement.querySelector(".drop-zone__prompt")) {
		dropZoneElement.querySelector(".drop-zone__prompt").remove();
	}

	// First time - there is no thumbnail element, so lets create it
	if (!thumbnailElement) {
		thumbnailElement = document.createElement("div");
		thumbnailElement.classList.add("drop-zone__thumb");
		dropZoneElement.appendChild(thumbnailElement);
	}

	thumbnailElement.dataset.label = file.name;

	// Show thumbnail for image files
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


