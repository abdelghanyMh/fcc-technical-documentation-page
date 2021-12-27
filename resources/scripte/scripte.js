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
        menu.style.width = '0px';
    } else {
        toggleButton.classList.add("active");
        // adds the menu (close) icon
        toggleButton.firstChild.innerHTML = '&#xe5cd;'

        //show menu
        menu.style.width = '100%';
    }
}

/*add style to the clicked nav link  */
// navItems = document.getElementsByClassName('nav-link')
navItems = document.querySelectorAll('.nav-link')

function styleNavItem(event) {
     console.log(event.currentTarget);
    navItems.forEach(item => {
        if (item.classList.contains('active-nav-item'))
            item.classList.remove('active-nav-item')
    });

    // add style 
    event.currentTarget.classList.add('active-nav-item')
  

}
/* Event Listeners */
toggleButton.addEventListener("click", toggleMenu, false);
// navItems.addEventListener("click", styleNavItem, false);
navItems.forEach(item => {
    item.addEventListener('click',styleNavItem,false)
});
