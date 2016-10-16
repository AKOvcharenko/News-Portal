
const changeFeedState = {
    changeLikeState(state, instance){
        var result = state.slice();
        return result.map(article => {if(article.id === instance.id){
            article.liked ? article.like -= 1 : article.like += 1;
            article.liked = !article.liked;
        } return article});
    },
    fetchedData(state, data){
        return  typeof data === 'string' ? JSON.parse(data) : data;
    },
    increaseComments(state, id){
        var result = state.slice();
        return result.map(article => {if(article.id === id){
            article.commented = true;
            article.comments = article.comments + 1;
        } return article});
    },
    decreaseComments(state, item){}
};

const feedState = (state = [], action) => {
    switch (action.type) {
        case "DATA_FETCHED": {
            return changeFeedState.fetchedData(state, action.data);
        }
        case "CHANGE_LIKES":
            return changeFeedState.changeLikeState(state, action.item);
        case "COMMENT_ADDED":
            return changeFeedState.increaseComments(state, action.id);
        case "REMOVE_COMMENT":
            return changeFeedState.decreaseComments(state, action.item);
        default:
            return state;
    }
};

export default feedState;