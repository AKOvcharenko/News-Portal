const changeActiveArticle = (state, article) => {
    return [article];
};

const activeState = (state = [], action) => {
    switch (action.type){
        case "CHANGE_ACTIVE":
            return changeActiveArticle(state, action.article);
        default:
            return state;
    }
};

export default activeState;