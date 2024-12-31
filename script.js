const countdownElement = document.getElementById("countdown");
const backgroundImage = document.getElementById("background-image");

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image10.jpg",
  "images/image11.jpg",
  "images/image12.jpg",
];

let countdown = 10;
let imageIndex = 0;

function startCountdown() {
  const interval = setInterval(() => {
    countdownElement.textContent = countdown;
    backgroundImage.src = images[imageIndex];
    backgroundImage.style.opacity = 1;

    setTimeout(() => {
      backgroundImage.style.opacity = 0;
    }, 900);

    countdown--;
    imageIndex++;

    if (countdown < 0) {
      clearInterval(interval);
      countdownElement.textContent = "Happy New Year!";
      countdownElement.style.fontSize = "5rem";
    }
  }, 1000);
}

startCountdown();
