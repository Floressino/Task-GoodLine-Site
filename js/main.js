//<Register>===========================================================================
let detailBlockOne = document.querySelector('.one');
detailBlockOne.addEventListener("click", function (e) {
	let detail = document.querySelector('.detail-block');
	let popapOne = document.querySelector('.popup-one');
	let lock = document.querySelector('body');

	detail.classList.toggle('_active');
	lock.classList.toggle('_bg');

	//открытие попапа
	popapOne.classList.toggle('_active');

	//закрытие на темную область
	popapOne.addEventListener("click", function (e) {
		if (!e.target.closest('.popup-content')) {
			popapOne.classList.remove('_active')
			lock.classList.remove('_bg');
		}
		if (!e.target.closest('.popup-cards')) {
			popapOne.classList.remove('_active')
			lock.classList.remove('_bg');
		}
	});
});

let detailBlockTwo = document.querySelector('.two');
detailBlockTwo.addEventListener("click", function (e) {
	let detail = document.querySelector('.detail-block');
	let popapTwo = document.querySelector('.popup-two');
	let lock = document.querySelector('body');

	detail.classList.toggle('_active');
	lock.classList.toggle('_bg');

	//открытие попапа
	popapTwo.classList.toggle('_active');

	//закрытие на темную область
	popapTwo.addEventListener("click", function (e) {
		if (!e.target.closest('.popup-content')) {
			popapTwo.classList.remove('_active')
			lock.classList.remove('_bg');
		}
		if (!e.target.closest('.popup-cards')) {
			popapTwo.classList.remove('_active')
			lock.classList.remove('_bg');
		}
	});
});

let btnSuccess = document.querySelector('.application-button');
btnSuccess.addEventListener("click", function (e) {
	let appBtn = document.querySelector('.application-button');
	let popapThree = document.querySelector('.popup-three');
	let lock = document.querySelector('body');

	appBtn.classList.toggle('_active');
	lock.classList.toggle('_bg');

	//открытие попапа
	popapThree.classList.toggle('_active');

	//закрытие на темную область
	popapThree.addEventListener("click", function (e) {
		if (!e.target.closest('.popup-success')) {
			popapThree.classList.remove('_active')
			lock.classList.remove('_bg');
		}
	});
});

//Крестик
let popupCloseOne = document.querySelector('.popup-closeimg-one');
	popupCloseOne.addEventListener("click", function (e) {
		let popap = document.querySelector('.popup-one');
		let lock = document.querySelector('body');
		
		popap.classList.remove('_active')
		lock.classList.remove('_bg');
	});
let popupCloseTwo = document.querySelector('.popup-closeimg-two');
    popupCloseTwo.addEventListener("click", function (e) {
	    let popap = document.querySelector('.popup-two');
	    let lock = document.querySelector('body');
		
	    popap.classList.remove('_active')
	    lock.classList.remove('_bg');
	});
    
//</Register>===========================================================================