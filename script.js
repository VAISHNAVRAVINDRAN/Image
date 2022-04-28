var like=document.querySelector(".like");
    liked=document.querySelector(".liked");
    count=document.querySelector(".count");
like.addEventListener("click", likes);
liked.addEventListener("click", likeds);
function likes() {
liked.style.display="flex";
count.innerHTML="1";
}
function likeds() {
liked.style.display="none";
count.innerHTML="0";
}