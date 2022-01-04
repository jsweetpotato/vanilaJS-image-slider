const imgBox = document.querySelector(".image-container");
const imgs = document.querySelectorAll('img');
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let counter = 1;
let size

window.onload = e => {
  size = imgs[0].clientWidth;
  return size;
}

imgBox.style.transform = `translateX(${-size * counter}px`;

next.addEventListener("click", () => {  
  if (counter > 3) {
    imgBox.style.transform = `translateX(0vw)`
    counter = 0;
    return;
  };
  console.log(counter);
  imgBox.style.transition = `0.2s ease`
  counter++;
  imgBox.style.transform = `translateX(${-size * counter}px)`;
});


prev.addEventListener("click", () => {
  if (counter < 1) {
    imgBox.style.transform = `translateX(${-size * 4}px)`
    counter = 4;
    return;
  };
  console.log(counter);
  imgBox.style.transition = `0.2s ease`
  counter--;
  imgBox.style.transform = `translateX(${-size * counter}px)`;
});

