
const fetchedData = (state, data) => {
    debugger;
    return typeof data === 'string' ? JSON.parse(data) : data;
};

const changeCommentState = (state, id, data) => {
    var result = state.slice();
    return result.map(article => {if(article.id === id){article.comments.push(data)} return article});
};

const articlesState = (state = [], action) => {
    switch (action.type) {
        case "GOT_ARTICLES_DATA": {
            return fetchedData(state, action.data);
        }
        case "COMMENT_ADDED": {
            return changeCommentState(state, action.id, action.data);
        }
        default:
            return state;
    }
};

export default articlesState;