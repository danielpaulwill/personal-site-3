const dodger = document.getElementById("dodger"); 

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > -250) {
      dodger.style.left = `${left - 10}px`;
    }
  } 

  
  function moveDodgerRight() {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);

      if (left < 1000) {
          dodger.style.left = `${left + 10}px`;
      }
  }


  
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  }); 