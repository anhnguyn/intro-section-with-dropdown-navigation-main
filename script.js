function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    console.log("🚀 ~ toggleMenu ~ menu:", menu)
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    console.log(menu.style.display);
}