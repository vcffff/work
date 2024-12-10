const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');
const originalImageSrc = image2.querySelector('img').src;
image1.addEventListener('mouseover', () => {
  image2.querySelector('img').src = './img/left.jpg';
  image3.querySelector('img').src = './img/left.jpg';
  image4.querySelector('img').src = './img/top.jpg';
  image7.querySelector('img').src = './img/top.jpg';
  image5.querySelector('img').src = './img/lefttop.jpg';
  image6.querySelector('img').src = './img/lefttop.jpg';
  image8.querySelector('img').src = './img/lefttop.jpg';
  image9.querySelector('img').src = './img/lefttop.jpg';
});
image1.addEventListener('mouseout', () => {
  image2.querySelector('img').src = originalImageSrc;
  image3.querySelector('img').src = originalImageSrc;
  image4.querySelector('img').src = originalImageSrc;
  image7.querySelector('img').src = originalImageSrc;
  image5.querySelector('img').src = originalImageSrc;
  image6.querySelector('img').src = originalImageSrc;
  image8.querySelector('img').src = originalImageSrc;
  image9.querySelector('img').src = originalImageSrc;
});


image2.addEventListener('mouseover', () => {
	image1.querySelector('img').src = './img/right.jpg';
	image3.querySelector('img').src = './img/left.jpg';
	image4.querySelector('img').src = './img/righttop.jpeg';
	image7.querySelector('img').src = './img/righttop.jpeg';
	image5.querySelector('img').src = './img/top.jpg';
	image6.querySelector('img').src = './img/lefttop.jpg';
	image8.querySelector('img').src = './img/top.jpg';
	image9.querySelector('img').src = './img/lefttop.jpg';
 });
 image2.addEventListener('mouseout', () => {
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });

 image3.addEventListener('mouseover', () => {
	image1.querySelector('img').src = './img/right.jpg';
	image2.querySelector('img').src = './img/right.jpg';
	image4.querySelector('img').src = './img/righttop.jpeg';
	image7.querySelector('img').src = './img/righttop.jpeg';
	image5.querySelector('img').src = './img/righttop.jpeg';
	image6.querySelector('img').src = './img/top.jpg';
	image8.querySelector('img').src = './img/righttop.jpeg';
	image9.querySelector('img').src = './img/top.jpg';
 });
 image3.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });

 image4.addEventListener('mouseover', () => {
	image3.querySelector('img').src = './img/leftdown.jpg';
	image1.querySelector('img').src = './img/bottom.jpg';
	image2.querySelector('img').src = './img/leftdown.jpg';
	image7.querySelector('img').src = './img/top.jpg';
	image5.querySelector('img').src = './img/left.jpg';
	image6.querySelector('img').src = './img/left.jpg';
	image8.querySelector('img').src = './img/lefttop.jpg';
	image9.querySelector('img').src = './img/lefttop.jpg';
 });
 image4.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });
 image5.addEventListener('mouseover', () => {
	image3.querySelector('img').src = './img/leftdown.jpg';
	image4.querySelector('img').src = './img/right.jpg';
	image1.querySelector('img').src = './img/rightbottom.jpg';
	image2.querySelector('img').src = './img/bottom.jpg';
	image7.querySelector('img').src = './img/righttop.jpeg';
	image6.querySelector('img').src = './img/left.jpg';
	image8.querySelector('img').src = './img/top.jpg';
	image9.querySelector('img').src = './img/lefttop.jpg';
 });
 image5.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });


 image6.addEventListener('mouseover', () => {
	image4.querySelector('img').src = './img/right.jpg';
	image3.querySelector('img').src = './img/bottom.jpg';
	image1.querySelector('img').src = './img/rightbottom.jpg';
	image2.querySelector('img').src = './img/rightbottom.jpg';
	image7.querySelector('img').src = './img/righttop.jpeg';
	image5.querySelector('img').src = './img/right.jpg';
	image8.querySelector('img').src = './img/righttop.jpeg';
	image9.querySelector('img').src = './img/top.jpg';
 });
 image6.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });

 image7.addEventListener('mouseover', () => {
	image4.querySelector('img').src = './img/bottom.jpg';
	image3.querySelector('img').src = './img/leftdown.jpg';
	image1.querySelector('img').src = './img/bottom.jpg';
	image2.querySelector('img').src = './img/leftdown.jpg';
	image5.querySelector('img').src = './img/leftdown.jpg';
	image6.querySelector('img').src = './img/leftdown.jpg';
	image8.querySelector('img').src = './img/left.jpg';
	image9.querySelector('img').src = './img/left.jpg';
 });
 image7.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });


 image8.addEventListener('mouseover', () => {
	image4.querySelector('img').src = './img/rightbottom.jpg';
	image3.querySelector('img').src = './img/leftdown.jpg';
	image1.querySelector('img').src = './img/rightbottom.jpg';
	image2.querySelector('img').src = './img/bottom.jpg';
	image5.querySelector('img').src = './img/bottom.jpg';
	image6.querySelector('img').src = './img/leftdown.jpg';
	image9.querySelector('img').src = './img/left.jpg';
	image7.querySelector('img').src = './img/lefttop.jpg';
 });
 image8.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
	
 });

 image9.addEventListener('mouseover', () => {
	image5.querySelector('img').src = './img/rightbottom.jpg';
	image3.querySelector('img').src = './img/bottom.jpg';
	image1.querySelector('img').src = './img/rightbottom.jpg';
	image2.querySelector('img').src = './img/rightbottom.jpg';
	image4.querySelector('img').src = './img/rightbottom.jpg';
	image8.querySelector('img').src = './img/right.jpg';
	image7.querySelector('img').src = './img/right.jpg';
	image6.querySelector('img').src = './img/bottom.jpg';
 });
 image9.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });