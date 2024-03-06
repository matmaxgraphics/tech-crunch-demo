// api.js
const BASE_URL = "https://techcrunch.com/wp-json/wp/v2";

export const fetchData = async (page, articleId = '') => {
  try {
    let url = `${BASE_URL}/posts?per_page=${page}`;
    if (articleId) {
      url = `${BASE_URL}/posts/${articleId}`;
    }
    const response = await fetch(url);
    const postData = await response.json();

    return postData;
  } catch (error) {
    throw error;
  }
};
