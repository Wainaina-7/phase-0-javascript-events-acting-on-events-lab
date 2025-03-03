// Define the functions globally if not using modules
function moveDodgerLeft() {
    let left = parseInt(window.getComputedStyle(dodger).left) || 0;
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    let left = parseInt(window.getComputedStyle(dodger).left) || 0;
    let gameFieldWidth = 400; // Adjust this to the actual width of the game area
  
    if (left < gameFieldWidth - 40) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  // These functions will now be available to your tests without needing imports
  