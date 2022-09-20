const createBubbles = () => {
  let bubbleContainer = document.getElementById('bubbles');
  let bubble = document.createElement('span');
  let size = Math.random() * 75;

  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * innerWidth + "px";

  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 4000);
}

setInterval(createBubbles, 500)