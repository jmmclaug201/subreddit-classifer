classifications = document.getElementById("classifications");
button = document.getElementById("classify-button");

button.addEventListener("click", async (e) => {
  classifications.replaceChildren();

  postTitle = document.getElementById("post-title").value;
  postBody = document.getElementById("post-body").value;
  const response = await fetch(`http://127.0.0.1:3000/predict?title=${postTitle}&text=${postBody}`);
  const json = await response.json();
  
  subreddits = Object.entries(json.prediction).sort(([s1, p1], [s2, p2]) => {return p2 - p1;})
  subreddits.forEach(([subreddit, percentage]) => {
    classifications.insertAdjacentHTML(
      "beforeend",
      `<div class="classification">
        <p><a href="https://www.reddit.com/r/${subreddit}/">r/${subreddit}</a> - ${Math.round(percentage * 1000) / 10}%</p>
        <div class="subreddit-bar">
          <div class="fill" style="width: ${100 * percentage}%"></div>
        </div>
      </div>`
    );
  });

  classifications.scrollIntoView(scrollIntoViewOptions={behavior: 'smooth'})
})