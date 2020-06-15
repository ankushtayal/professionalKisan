const track=document.querySelector('.carousel_track');
const slides= Array.from(track.children);
const nextButton=document.querySelector('.carousel_button--right');
const prevButton=document.querySelector('.carousel_button--left');
const dotsNav=document.querySelector('.carousel_nav');
const dots= Array.from(dotsNav.children);
const slideWidth=slides[0].getBoundingClientRect().width;

const setSlidePostion=(slides,index)=>{
	slides.style.left=slideWidth*index+'px';
}

slides.forEach(setSlidePostion);
const moveToSlide=(track,currentSlide,targetSlide)=>{
	track.style.transform='translateX(-'+ targetSlide.style.left+')';
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
}
prevButton.addEventListener('click',e=>{
	const currentSlide=track.querySelector('.current-slide');
	const nextSlide=currentSlide.previousElementSibling;
	moveToSlide(track,currentSlide,nextSlide);
});

nextButton.addEventListener('click',e=>{
	const currentSlide=track.querySelector('.current-slide');
	const nextSlide=currentSlide.nextElementSibling;
	
	moveToSlide(track,currentSlide,nextSlide);
});
dotsNav.addEventListener('click',e=>{
	const targetDot=e.target.closest('button');

	if(!targetDot)
		return;

	const currentSlide=track.querySelector('.current-slide');
	const currentDot=dotsNav.querySelector('.current-slide');
	const targetIndex=dots.findIndex(dot=>dot===targetDot);
	const targetSlide=slides[targetIndex];

	moveToSlide(track,currentSlide,targetSlide);
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
});