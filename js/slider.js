let i = 0;
let time = 2000;
let sliderImages = [];

sliderImages[0] = 'assets/images/Grenaa_strand.jpg';
sliderImages[1] = 'assets/images/23976_Grenaa_strand.jpg';
sliderImages[2] = 'assets/images/23977_Grenaa_strand.jpg';
sliderImages[3] = 'assets/images/23978_Grenaa_strand.jpg';
sliderImages[4] = 'assets/images/23979_Grenaa_strand.jpg';
sliderImages[5] = 'assets/images/23980_Grenaa_strand.jpg';
sliderImages[6] = 'assets/images/23981_Grenaa_strand.jpg';
sliderImages[7] = 'assets/images/23982_Grenaa_strand.jpg';
sliderImages[8] = 'assets/images/23983_Grenaa_strand.jpg';

function changeSliderImage() {
  document.slider.src = sliderImages[i];

  if(i < sliderImages.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeSliderImage()', time);
}

window.onload = changeSliderImage();