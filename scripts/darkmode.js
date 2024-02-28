document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('light-icon');
    const darkIcon = document.getElementById('dark-icon');
  
    toggleButton.addEventListener('change', function() {
      if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
      }
    });
  });
  
