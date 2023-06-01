// Get all wireframes
var wireframes = document.querySelectorAll('.wireframe');
var activeWireframe = null;

// Set random movement for wireframes
setRandomMovement();
function setRandomMovement() {
  wireframes.forEach(wireframe => {
    const trackWidth = window.innerWidth - wireframe.offsetWidth;
    const trackHeight = window.innerHeight - wireframe.offsetHeight;

    const randomX = Math.floor(Math.random() * trackWidth);
    const randomY = Math.floor(Math.random() * trackHeight);

    wireframe.style.transition = 'transform 7s ease-in-out';
    wireframe.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
}

wireframes.forEach(wireframe => {
  let isPaused = false;

  wireframe.addEventListener('transitionend', () => {
    if (!isPaused) {
      const trackWidth = window.innerWidth - wireframe.offsetWidth;
      const trackHeight = window.innerHeight - wireframe.offsetHeight;

      const randomX = Math.floor(Math.random() * trackWidth);
      const randomY = Math.floor(Math.random() * trackHeight);

      wireframe.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
  });

  wireframe.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  wireframe.addEventListener('mouseleave', () => {
    isPaused = false;
    setRandomMovement();
  });
});

// Wireframes expand
wireframes.forEach(wireframe => {
    wireframe.addEventListener('click', () => {
        wireframe.classList.toggle('expanded');
    });
});

// Wireframes hover and click
wireframes.forEach(function(wireframe) {
  wireframe.addEventListener("click", function() {
    if (activeWireframe === wireframe) {
      activeWireframe.classList.remove("active");
      activeWireframe = null;
    } else {
      if (activeWireframe) {
        activeWireframe.classList.remove("active");
      }
      activeWireframe = wireframe;
      activeWireframe.classList.add("active");
    }
  });

  wireframe.addEventListener("mouseenter", function() {
    if (wireframe !== activeWireframe) {
      animationState = wireframe.style.animationPlayState;
      wireframe.style.animationPlayState = "paused";
    }
  });

  wireframe.addEventListener("mouseleave", function() {
    if (wireframe !== activeWireframe) {
      wireframe.style.animationPlayState = animationState;
    }
  });
});

// Search bar
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function() {
  var searchInput = document.getElementById("searchInput");
  var searchTerm = searchInput.value.toLowerCase();

  wireframes.forEach(function(wireframe) {
    var wireframeText = wireframe.textContent.toLowerCase();

    if (wireframeText.includes(searchTerm)) {
      wireframe.classList.add("search-match");
    } else {
      wireframe.classList.remove("search-match");
    }
  });
});

// Reload Button
var homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", function() {
  location.reload();
});