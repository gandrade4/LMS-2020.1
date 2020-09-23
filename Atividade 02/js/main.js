//Sidebar mobile menu
const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu');

function sidebarMenu(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        sidebar.querySelector("a").innerHTML = "<img src="./img/sidebar.png">";
    }else{
        menu.classList.add("active");
        sidebar.querySelector("a").innerHTML = "<img src="../img/x.png">";
    }
}

sidebar.addEventListener('click', sidebarMenu, false);

//Submenu
const items = document.querySelectorAll('.item');

function dropdownItem(){
    if(this.classList.contains("submenu-active")){
        this.classList.remove("submenu-active");
    }else if (menu.querySelector(".submenu-active")){
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    }else{
        this.classList.add("submenu-active");
    }
}
