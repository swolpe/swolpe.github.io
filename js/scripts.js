/* Change header image
----------------------------- */
const header = document.querySelector("header");
const headerImageContainer = document.querySelector(".header-img");

const toggleImage = () => {
	headerImageContainer.classList.toggle("active");
};

header.addEventListener("touchstart", toggleImage, false);
header.addEventListener("touchend", toggleImage, false);

/* Go to projects on click
----------------------------- */
const goToProjectsBtn = document.querySelector(".scroll-down-indicator");

const goToProjects = () => {
	const projects = document.querySelector(".projects");
	projects.scrollIntoView();
};

/* Display go to top button
----------------------------- */
const footer = document.querySelector("footer");
const goToTopBtn = document.querySelector(".scroll-up-indicator");

function isNotInViewport(el) {
	const rect = el.getBoundingClientRect();
	return rect.top <= 0 && rect.bottom <= 0;
}

document.addEventListener(
	"scroll",
	function () {
		if (isNotInViewport(header)) {
			goToTopBtn.style.bottom = "1rem";

			const goToTopBtnOffsets = goToTopBtn.getBoundingClientRect();
			const footerOffsets = footer.getBoundingClientRect();

			// check if go to top button has reached footer
			if (
				goToTopBtnOffsets.top + goToTopBtn.offsetHeight >=
				footerOffsets.top - 16
			) {
				goToTopBtn.style.position = "absolute";
			}
			if (goToTopBtn.scrollTop + window.innerHeight < footerOffsets.top) {
				goToTopBtn.style.position = "fixed";
			}
		} else {
			goToTopBtn.style.bottom = "-25%";
		}
	},
	{
		passive: true,
	}
);

/* Go to top on click
----------------------------- */
const goToTop = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};
