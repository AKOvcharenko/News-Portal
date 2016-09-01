import initialFeed from './../../data/feed.json';

const getMostPopularArticle = () => {
    var articles = initialFeed.slice();
    articles.sort((first, second)=>{return first.like > second.like ? -1 : 1});
    return articles.slice(0, 1);
};

const changeActiveArticle = (state, article) => {
    return [article];
};

const activeState = (state = getMostPopularArticle(), action) => {
    switch (action.type) {
        case "CHANGE_ACTIVE":
            return changeActiveArticle(state, action.article);
        default:
            return state;
    }
};

export default activeState;