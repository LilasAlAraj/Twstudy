function testimonialSLider() {

    const carouselOne = document.getElementById('carousel1');
    if (carouselOne) {
        carouselOne.addEventListener('slide.bs.carousel', function () {
            const activeItem = this.querySelector(".carousel-inner .active");
            document.querySelector(" .js-testimonial-img").src = activeItem.getAttribute("data-js-testimonial-img");
        })
    }
}

testimonialSLider();
/**
 * 
 */


function styleSwitcherToggle() {

    const styleSwitcher = document.querySelector(".js-style-switcher");
    const styleSwitcherToggleer = document.querySelector(".js-style-switcher-toggler")
    styleSwitcherToggleer.addEventListener("click", function () {
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times");
        this.querySelector("i").classList.toggle("fa-cog");

    })
}
styleSwitcherToggle();
/**
 * 
 */

function themeColors() {
    const colorStyle = document.querySelector(".js-color-style");
    const themeColorContainer = document.querySelector(".js-theme-colors");
    themeColorContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("js-theme-color-item")) {
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColor();

        }
    });


    function setColor() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");
        if (document.querySelector(".js-theme-color-item.active")) {
            document.querySelector(".js-theme-color-item.active").classList.remove("active")
        }

        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active")

    }

    if (localStorage.getItem("color") !== null) {
        setColor();
    } else {
        const defaultColor = colorStyle.getAttribute("href").splite("/").pop().split(".").shift;
        document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active")

    }
}
themeColors();

/**
 * 
 */
function lightDark() {

    const darkModeCheckBox = document.querySelector(".js-dark-mode");
    darkModeCheckBox.addEventListener("click", function () {
        if (this.checked) {
            localStorage.setItem("t-dark", "true");

        }
        else {
            localStorage.setItem("t-dark", "false");
        }
        themeMode();

    });
    function themeMode() {
        if (localStorage.getItem("t-dark") === "true") {
            document.body.classList.add("t-dark");

        } else {
            document.body.classList.remove("t-dark");
        }

    }

    if (localStorage.getItem("t-dark") !== null) {
        themeMode();
    }
    if (document.body.classList.contains("t-dark")) {
        darkModeCheckBox.checked = true;
    }


};

lightDark();
/**
 * 
 */
function changingEnrollNum() {
    var y = document.getElementById("NumEnrolledStudent").innerHTML;
    document.getElementById("NumEnrolledStudent").innerHTML = 1 + parseInt(y);
}


/**
 * 
 */
window.addEventListener("load",()=>{
    document.querySelector(".js-page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".js-page-loader").style.display = "none";
    }, 600);
})





