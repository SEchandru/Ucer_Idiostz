console.log(" Welcome to UcerIdiotz");

const unit_div=document.getElementById('unit-div');
const videoText = document.getElementById("video-text");
const videoIframeContainer = document.getElementById("video-iframe-container");
const topics=document.getElementById("unit-topics");
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
// topic 2 js
const videoText01 = document.getElementById("video-text01");
const english01 = document.getElementById("english01")
const videoIframeContainer01 = document.getElementById("video-iframe-container01");
const video_english01=document.getElementById('video-iframe-english01');
const video_tamil01=document.getElementById('video-iframe01');

videoText01.addEventListener("click", function() {
  if (videoIframeContainer01.style.display === "none") {
    videoIframeContainer01.style.display = "block";
    unit_div.classList.add("unit-div-2");
  } else {
    videoIframeContainer01.style.display = "none";
    unit_div.classList.remove("unit-div-2");
  }
});

english01.addEventListener("click", function() {
 if (video_english01.style.display === "none") {
   video_english01.style.display = "block";
    video_tamil01.style.display="none";
    english01.innerHTML="For Tamil"
 } else {
   video_english01.style.display = "none";
   video_tamil01.style.display="block";
   english01.innerHTML="For English"
 }
});

// topic 3 js
const videoText03 = document.getElementById("video-text03");
const english03 = document.getElementById("english03")
const videoIframeContainer03 = document.getElementById("video-iframe-container03");
const video_english03=document.getElementById('video-iframe-english03');
const video_tamil03=document.getElementById('video-iframe03');

videoText03.addEventListener("click", function() {
  if (videoIframeContainer03.style.display === "none") {
    videoIframeContainer03.style.display = "block";
    unit_div.classList.add("unit-div-2");
  } else {
    videoIframeContainer03.style.display = "none";
    unit_div.classList.remove("unit-div-2");
  }
});

english03.addEventListener("click", function() {
 if (video_english03.style.display === "none") {
   video_english03.style.display = "block";
    video_tamil03.style.display="none";
    english03.innerHTML="For Tamil"
 } else {
   video_english03.style.display = "none";
   video_tamil03.style.display="block";
   english03.innerHTML="For English"
 }
});
