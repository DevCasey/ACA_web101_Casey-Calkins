function toggle_menu() {
    let menu_items = document.getElementById("menu-items");
    if (menu_items.style.display == "block") {
        menu_items.style.display = "none";
    } else {
        menu_items.style.display = "block";
    }
}