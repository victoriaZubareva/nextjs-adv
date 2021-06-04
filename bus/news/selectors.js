export const selectNews = (state) => state.news;
export const selectArticleById = (id) => (state) => state.news.find((article) => article.id === id);
