import posts from './data/posts.json';
import articles from './data/articles.json';

const fetch = (mockData, time = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockData);
  }, time);
});

export default {
  fetchPosts() {
    return fetch(posts, 1000); // wait 1s before returning posts
  },

  fetchArticle(id) {
    return fetch(articles[id], 1000); // wait 1s before returning posts
  },
};
