const beard = document.getElementById("beard"); 

function moveBeardLeft() {
    const leftNumbers = beard.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > -250) {
      beard.style.left = `${left - 10}px`;
    }
  } 

  
  function moveBeardRight() {
      const leftNumbers = beard.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);

      if (left < 1000) {
          beard.style.left = `${left + 10}px`;
      }
  }


  
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveBeardLeft();
    }
    if (e.key === "ArrowRight") {
        moveBeardRight();
    }
  }); 

/*

function confetti() {
  if (dodger left align === "-200px") {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

*/
