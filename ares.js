


window.addEventListener('scroll' , function(){
	document.querySelector('nav').classList.toggle
	('s-nav', window.scrollY >0)
	
})

/* ===============responsive navbar for tab================== */


	const openbtn = document.querySelector('#open-menu-btn') 
	const menu = document.querySelector('.nav-menu')
	const closebtn = document.querySelector('#close-menu-btn')


	openbtn.addEventListener('click' , function(){
		   menu.style.display='flex'
		   closebtn.style.display='inline-block';
		   openbtn.style.display='none';
	})

	closebtn.addEventListener('click' , function(){
		   menu.style.display='none'
		   closebtn.style.display='none';
		   openbtn.style.display='inline-block';
	})