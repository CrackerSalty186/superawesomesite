const imgEl = document.getElementById("slideshow");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let images = [];
let index = 0;

fetch("images.json")
  .then(res => res.json())
  .then(data => {
    images = data.filter(f => /\.(jpe?g|png|gif)$/i.test(f));
    if (images.length > 0) {
      index = Math.floor(Math.random() * images.length);
      imgEl.src = `latestpix/${images[index]}`;
    } else {
      imgEl.alt = "No images found!";
    }
  });

nextBtn.addEventListener("click", () => {
  if (images.length > 0) {
    index = (index + 1) % images.length;
    imgEl.src = `latest-pix/${images[index]}`;
  }
});

prevBtn.addEventListener("click", () => {
  if (images.length > 0) {
    index = (index - 1 + images.length) % images.length;
    imgEl.src = `latest-pix/${images[index]}`;
  }
});
