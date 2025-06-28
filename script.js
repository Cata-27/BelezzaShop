const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');

menuBtn.onclick = () => {
  sideMenu.style.width = '250px';
};

closeBtn.onclick = () => {
  sideMenu.style.width = '0';
};