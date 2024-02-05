document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
  
    menuIcon.addEventListener('click', function () {
      sidebar.classList.toggle('active');
      content.classList.toggle('active');
    });
  });
  