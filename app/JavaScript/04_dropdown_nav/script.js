var navbarMenu = [
    {
        id: 'home',
        label: 'Home',
        subMenu: [
            {
                id: 'page1',
                label: 'Page 1',
                subMenu: []
            },
            {
                id: 'page1',
                label: 'Page 2',
                subMenu: []
            },
            {
                id: 'page1',
                label: 'Page 3',
                subMenu: []
            }
        ]
    },
    {
        id: 'about',
        label: 'About',
    },
    {
        id: 'blog',
        label: 'Blogs',
    },
    {
        id: 'gallery',
        label: 'About',
    },
    {
        id: 'contact',
        label: 'Contact',
    }
]

document.getElementById(btn).innerHTML = a;

a = navItem();

function navItem(navbarMenu) {
    for (let i = 0; i<navbarMenu.length; i++) {
        return navbarMenu[i].label;
    }
}

function buildNavbar() {
                                                           
    
}