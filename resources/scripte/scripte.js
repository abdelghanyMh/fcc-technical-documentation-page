
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


/*
Highlighting current section in navbar
*/
const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("li.nav-link");
function highlightSection()  {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
            // current=section.children[1].getAttribute('href').slice(1)
        }
    });

    navItems.forEach((li) => {
        li.classList.remove("active-nav-item");
        let id = li.children[0].getAttribute('href').slice(1)
        if (id==current) {
            li.classList.add("active-nav-item");
        }
    });
}



/** Event Listeners */

toggleButton.addEventListener("click", toggleMenu, false);

navItems.forEach(item => { item.addEventListener('click', styleNavItem, false) });

window.addEventListener("scroll", highlightSection)
