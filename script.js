let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('#next').addEventListener('click', function () {
   offset += 236;
    if (offset > 1651) offset = 0;
   sliderLine.style.right = offset + 'px';
});

document.querySelector('#prev').addEventListener('click', function () {
    offset -= 236;
    if (offset < 0) offset = 1416;
    sliderLine.style.right = offset + 'px';
});