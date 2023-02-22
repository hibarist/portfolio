const contactButton = document.getElementById("contact-btn");
const soundcloudBtn = document.getElementById("soundcloudBtn");
const youtubeBtn = document.getElementById("youtubeBtn");

contactButton.addEventListener("click", () => {
    window.open("mailto: hibarist@gmail.com","_blank");
})
soundcloudBtn.addEventListener("click", () => {
    window.open("https://soundcloud.com/hibarist/tracks","_blank");
})
youtubeBtn.addEventListener("click", () => {
    window.open("https://youtube.com/c/hibarist/videos","_blank");
})
