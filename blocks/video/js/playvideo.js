(function initVideo() {
	var aVideo = document.querySelectorAll(".video-poster"), n = aVideo.length;
	while (n--) {
		aVideo[n].addEventListener("click", playVideo, false);	
	};
	
	function playVideo() {
		var oVideo = this.parentNode.querySelector(".video-content");
		if (oVideo && oVideo.src) {
			if (oVideo.src.indexOf("ooyala") != -1) oVideo.src += "&options[autoplay]=true";
			if (oVideo.src.indexOf("vimeo") != -1) oVideo.src += "?autoplay=1";
			if (oVideo.src.indexOf("youtube") != -1) oVideo.src += "&autoplay=1";
			this.classList.add("hide");
		}
	}
})();