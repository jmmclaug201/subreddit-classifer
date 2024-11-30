# Subreddit Classifier
We used a publically available [dataset](https://www.kaggle.com/datasets/sachinkanchan92/reddit-top-posts-50-subreddit-analysis-2011-2024) of the top 1000 posts from the 50 largest subreddits,
and trained a model to classify reddit post titles and (string) bodies into these fifty subreddits. This dataset is included in our model in archive/ for training purposes.

Additionally, this repository includes a frontend to interact with the model that displays the probability estimates for the most likely classifications along with a warning if the model
is likely unsure in its prediction.

## Setup
1. Run each cell in the Subreddits.ipynb notebook in order, culminating in a trained model and a running Flask server.
2. With the Flask server in the final notebook cell running, serve the frontend at frontend/index.html

Note that our Flask backend is currently hardcoded to localhost:3000, which may need to be changed if that port is in use.

## Open-Source Code
Our project is built off of several open-source libraries, namely:

- [flask](https://flask.palletsprojects.com/en/stable/) and [flask_cors](https://pypi.org/project/Flask-Cors/) (Web app framework to serve a model prediction API)
- [nltk](https://www.nltk.org/) (Natural language toolkit we used for extracting words from posts)
- [numpy](https://numpy.org/)
- [pandas](https://github.com/pandas-dev/pandas)
- [re](https://docs.python.org/3/library/re.html) (Python standard library regex operations)
- [scikit-learn](https://scikit-learn.org/stable/)

Additionally, our model is based off of initial code from [a scikit-learn tutorial on text classification](https://scikit-learn.org/1.4/tutorial/text_analytics/working_with_text_data.html). We used this as a starting point for how to set up our model, but we preproccessed the data ourselves, performed our own parameter search on parameters we felt were useful, and created the Flask server and frontend ourselves.
