const video = document.querySelector("video")

console.log(video)

function changeVideoSpeed(speed) {
  document.querySelector("video").playbackRate = speed
}

function selectButton(selectedButton) {
  for (btn of document.querySelectorAll("button")){
    btn.style.backgroundColor = "white";
  }
   selectedButton.style.backgroundColor = "green";
}

if (video) {
  for(const [index, item] of [1, 1.5, 1.75, 2].entries() ){
    const left = 150*(index+1);
    document.querySelector("body").innerHTML += `
    <button 
      style="cursor:pointer; position:absolute; padding:0.5rem; top:50px; left:${left}px;font-size:2rem;"
      onclick="selectButton(this); changeVideoSpeed(${item})"
    >
      ${item} X
    </button>
    `
  }
}
