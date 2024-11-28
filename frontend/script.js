button = document.getElementById("classify-button");

button.addEventListener("click", async (e) => {
  postTitle = document.getElementById("post-title").value;
  postBody = document.getElementById("post-body").value;
  postText = `${postTitle} ${postBody}`;
  const response = await fetch(`http://127.0.0.1:3000/predict?prompt=${postText}`);
  const json = await response.json();
  alert(json.prediction)
})