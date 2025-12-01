(function(){
  document.addEventListener('DOMContentLoaded',function(){
    var toggle=document.querySelector('.menu-toggle');
    var nav=document.querySelector('.main-nav');
    if(toggle){
      toggle.addEventListener('click',function(){
        if(nav.style.display==='block') nav.style.display=''; else nav.style.display='block';
      });
    }
  });
})();
