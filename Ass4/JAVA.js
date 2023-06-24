


  const charityCarousel = new bootstrap.Carousel(document.getElementById('charityCarousel'), {
    interval: 5000, // Set the interval between slides (in milliseconds)
    wrap: true, // Allow continuous sliding
  });

function playSound() {
    var sound = document.getElementById('sound');
            sound.play();
}
