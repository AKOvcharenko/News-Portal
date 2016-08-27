import initialFeed from './../../data/feed.json';

const changeFeedState = {
    increaseLikes(state, item){},
    decreaseLikes(state, item){},
    increaseComments(state, item){},
    decreaseComments(state, item){}
};

const feedState = (state = initialFeed, action) => {
    switch (action.type) {
        case "LIKE":
            return changeFeedState.increaseLikes(state, action.item);
        case "UNLIKE":
            return changeFeedState.decreaseLikes(state, action.item);
        case "ADD_COMMENT":
            return changeFeedState.increaseComments(state, action.item);
        case "REMOVE_COMMENT":
            return changeFeedState.decreaseComments(state, action.item);
        default:
            return state;
    }
};

export default feedState;