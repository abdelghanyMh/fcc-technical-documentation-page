// Add the Toggle Functionality with JavaScript
toggleButton = document.getElementById('toggle');
menu = document.getElementById('navbar');
/* Toggle mobile menu */
function toggleMenu() {
    if (toggleButton.classList.contains("active")) {
        toggleButton.classList.remove("active");
        // adds the menu (Read More) icon
        toggleButton.firstChild.innerHTML = '&#xef6d;'

        // hide menu
        menu.style.width='0px';
    } else {
        toggleButton.classList.add("active");
        // adds the menu (close) icon
        toggleButton.firstChild.innerHTML = '&#xe5cd;'

        //show menu
        menu.style.width = '100%';
    }
}
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);