const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const searchBtn = document.querySelector(".fa-magnifying-glass");

const toggleSidebar = () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
};

const menuBtnChange = () => {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("fa-bars", "fa-angle-left");
  } else {
    closeBtn.classList.replace("fa-angle-left", "fa-bars");
  }
};

closeBtn.addEventListener("click", toggleSidebar);
searchBtn.addEventListener("click", toggleSidebar);