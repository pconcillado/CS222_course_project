document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('loader').classList.add('active');
      
      setTimeout(function() {
        window.location = link.href;
      }, 2000); // Adjust duration to match loader time
    });
  });
  
