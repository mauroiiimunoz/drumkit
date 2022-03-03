let numberOfButtons = document.querySelectorAll(`.drum`).length

for(let x = 0; x < numberOfButtons ;x++){
	
	document.querySelectorAll(`.drum`)[x].addEventListener(`click`, (keypressed)=> {
		
		keypressed = this.document.querySelectorAll(`.drum`)[x].textContent;
		play(keypressed);
		buttonAnimation(keypressed)
		console.log(`${keypressed} is clicked`);

	})}

	document.addEventListener("keydown",(keypressed)=>{
		play(keypressed.key);
		buttonAnimation(keypressed.key)
		console.log(`${keypressed.key} key is pressed`)
	})

	function play(keypressed) {
		switch (keypressed){
			case `w`:
			let crash = new Audio(`./sounds/crash.mp3`);
			crash.play();
			break;
			case `a`:
			let kickbass = new Audio(`./sounds/kick-bass.mp3`);
			kickbass.play();
			break;
			case `s`:
			let snare = new Audio(`./sounds/snare.mp3`);
			snare.play();
			break;
			case `d`:
			let tom1 = new Audio(`./sounds/tom-1.mp3`);
			tom1.play();
			break;
			case `j`:
			let tom2 = new Audio(`./sounds/tom-2.mp3`);
			tom2.play();
			break;
			case `k`:
			let tom3 = new Audio(`./sounds/tom-3.mp3`);
			tom3.play();
			break;
			case `l`:
			let tom4 = new Audio(`./sounds/tom-4.mp3`);
			tom4.play();
			break;
			default: console.log(`error`)
		}
	}
	

function buttonAnimation (currentkey){
let activebutton = document.querySelector("." + currentkey);
activebutton.classList.add(`pressed`)
setTimeout(function(){activebutton.classList.remove(`pressed`)},100)

}		