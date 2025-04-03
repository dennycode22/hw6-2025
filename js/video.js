var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	console.log('auto play is set to ' + video.autoplay);
	video.loop = false;
	console.log('video looping is set to ' + video.loop);


	/* Need to update volume information */
	play_button = this.document.querySelector('#play');
	play_button.onclick = function() {
		video.play();
		console.log("Play Video");
		console.log("The current valeus is " + video.volume)
	}

	pause_button = this.document.querySelector('#pause');
	pause_button.onclick = function() {
		video.pause();
		console.log("Pause Video");
	}

	slow_button = this.document.querySelector('#slower')
	slow_button.onclick = function() {
		video.playbackRate = video.playbackRate - 0.1;
		var slow_speed = video.playbackRate
		console.log("New video speed: " + slow_speed);
	}

	fast_button = this.document.querySelector('#faster')
	fast_button.onclick = function() {
		video.playbackRate = video.playbackRate + 0.1;
		var fast_speed = video.playbackRate
		console.log("New video speed: " + fast_speed);
	}

	/* Figure out how to set the time back to 0 */	
	skip_button = this.document.querySelector('#skip')
	skip_button.onclick = function() {
		var new_time = video.currentTime + 10;
		if (new_time >= video.duration){
			video.currentTime = 0;
			console.log(video.currentTime)
			video.play()
		}
		else {
			video.currentTime = new_time;
			console.log(video.currentTime)
		}
	}

	mute_button = this.document.querySelector('#mute')
	mute_button.onclick = function() {
		if (video.muted == false) {
			video.muted = true;
			document.querySelector("#mute").innerHTML = "Unmute"
			console.log("Unmuted");
		}
		else if (video.muted == true) {
			video.muted = false;
			document.querySelector("#mute").innerHTML = "Mute"
			console.log("Muted");
		}
	}

	var volume_val = this.document.getElementById("slider")
	volume_val.addEventListener("change", function() {
		video.volume = volume_val.value / 100
		console.log(video.volume)
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
		console.log(document.getElementById("volume"))
		console.log(video.volume)
	})

	old_school = this.document.querySelector('#vintage')
	old_school.onclick = function() {
		const video_id = document.getElementById("player1")
		video_id.classList.remove("video")
		video_id.classList.add("oldSchool")
		console.log("Style changed to old school")
	}

	original = this.document.querySelector('#orig')
	original.onclick = function() {
		const video_id = document.getElementById("player1")
		video_id.classList.remove("oldSchool")
		video_id.classList.add("video")
		console.log("Style changed to original")
	}

});
