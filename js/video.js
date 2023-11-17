var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let volume = video.volume * 100;
	console.log(volume);
	document.querySelector("#volume").textContent = volume;

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	let speed = video.playbackRate;
	console.log("Old Speed", speed);
	video.playbackRate = speed * 0.9;
	console.log("New Speed", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	let speed = video.playbackRate;
	console.log("Old Speed", speed);
	video.playbackRate = speed * (10/9);
	console.log("New Speed", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	let totalTime = video.duration;
	let currTime = video.currentTime;

	if ((currTime + 10) <= totalTime) {
		video.currentTime = currTime + 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Current Time", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	let isMute = video.muted;
	if (isMute) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	let sliderVol = document.querySelector("#slider").value ;
	console.log(sliderVol);
	video.volume = sliderVol / 100;
	document.querySelector("#volume").textContent = sliderVol;
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("styled");
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("original");
	video.classList.remove("oldSchool");
})