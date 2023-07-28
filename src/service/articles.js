import axios from "./axios";

const ArticleService = {
    articles() {
        return axios.get('/articles')
    },
    articleDetailInfo(slug) {
        return axios.get(`articles/${slug}`)
    }
}

export default ArticleService;