classifications = document.getElementById("classifications");
button = document.getElementById("classify-button");

const WARNING =  
  `<div id="warning">
    We're not too confident about these classifications, try adding more words
    to your post or checking these subreddits out. 
  </div>`;

const BAR = (subreddit, percentage) => {
  return `
    <div class="classification">
      <p><a href="https://www.reddit.com/r/${subreddit}/">r/${subreddit}</a> - ${Math.round(percentage * 1000) / 10}%</p>
      <div class="subreddit-bar">
        <div class="fill" style="width: ${100 * percentage}%"></div>
      </div>
    </div>`;
}

button.addEventListener("click", async (e) => {
  classifications.replaceChildren();

  postTitle = document.getElementById("post-title").value;
  postBody = document.getElementById("post-body").value;
  const response = await fetch(`http://127.0.0.1:3000/predict?title=${postTitle}&text=${postBody}`);
  const json = await response.json();
  
  subreddits = Object.entries(json.prediction).sort(([s1, p1], [s2, p2]) => {return p2 - p1;})
  if (subreddits[0][1] <= 0.2) {
    classifications.insertAdjacentHTML("beforeend", WARNING);
  }
  subreddits.forEach(([subreddit, percentage]) => {
    classifications.insertAdjacentHTML(
      "beforeend", BAR(subreddit, percentage)
    );
  });

  classifications.scrollIntoView(scrollIntoViewOptions={behavior: 'smooth'});
})