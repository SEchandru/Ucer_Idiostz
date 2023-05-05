console.log(" Welcome to UcerIdiotz");

const videoText = document.getElementById("video-text");

const videoText01 = document.getElementById("video-text");
const videoIframeContainer = document.getElementById("video-iframe-container");
const topics=document.getElementById("unit-topics");
const unit_div=document.getElementById('unit-div');
const english=document.getElementById('english');
const video_english=document.getElementById('video-iframe-english');
const video_tamil=document.getElementById('video-iframe');

videoText.addEventListener("click", function() {
  if (videoIframeContainer.style.display === "none") {
    videoIframeContainer.style.display = "block";
    unit_div.classList.add("unit-div-2");
  } else {
    videoIframeContainer.style.display = "none";
    unit_div.classList.remove("unit-div-2");
  }
});


videoText01.addEventListener("click", function() {
  if (videoIframeContainer.style.display === "none") {
    videoIframeContainer.style.display = "block";
    unit_div.classList.add("unit-div-2");
  } else {
    videoIframeContainer.style.display = "none";
    unit_div.classList.remove("unit-div-2");
  }
});

english.addEventListener("click", function() {
  if (video_english.style.display === "none") {
    video_english.style.display = "block";
     video_tamil.style.display="none";
     english.innerHTML="For Tamil"
  } else {
    video_english.style.display = "none";
    video_tamil.style.display="block";
    english.innerHTML="For English"
  }
});
