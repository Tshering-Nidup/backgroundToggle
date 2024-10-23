document.getElementById('toggle').addEventListener('click', function() {
    let toggleBtn = document.getElementById('toggleBtn');
       document.body.classList.toggle('dark-mode');
     
     if (toggleBtn.style.left === '25px') {
       toggleBtn.style.left = '0px';
     }
     else {
       toggleBtn.style.left = '25px';
     }
     
   });