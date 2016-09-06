import initialFeed from './../../data/feed.json';

const changeFeedState = {
    changeLikeState(state, item){
        var newState = state.slice().map(article => {
            if(item === article){
                article.liked ? article.like -= 1 : article.like += 1;
                article.liked = !article.liked;
            }
            return article;
        });

        return newState;
    },
    increaseComments(state, item){},
    decreaseComments(state, item){}
};

const feedState = (state = initialFeed, action) => {
    switch (action.type) {
        case "CHANGE_LIKES":
            return changeFeedState.changeLikeState(state, action.item);
        case "ADD_COMMENT":
            return changeFeedState.increaseComments(state, action.item);
        case "REMOVE_COMMENT":
            return changeFeedState.decreaseComments(state, action.item);
        default:
            return state;
    }
};

export default feedState;