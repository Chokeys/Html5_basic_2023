var slides = document.querySelectorAll('#slides > img');
var prev = document.getElementById('prev')
var next = document.getElementById('next')

var current = 0;

showSlide(current);
// showSlides -> showSlide 로 바꼈네
prev.onclick = prevSlide;
next.onclick = nextSlide;

console.log(current);

function showSlide(n) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";

}

function prevSlide() {
    if (current > 0) current -= -1;
    else current = slides.length - 1;
    showSlide(current);
}

function nextSlide() {
    if (current < slides.length - 1) current += 1
    else current = 0;
    showSlide(current);
}