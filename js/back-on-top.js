
    document.querySelector('a[href="#header"]').addEventListener('click', function(e) {
      e.preventDefault(); 
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });
