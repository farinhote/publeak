import posts from './data/posts.json';

const fetch = (mockData, time = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockData);
  }, time);
});

export default {
  fetchPosts() {
    return fetch(posts, 1000); // wait 1s before returning posts
  },
};
