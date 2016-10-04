
const fetchedData = (state, data) => {
    return JSON.parse(data);
};

const articlesState = (state = [], action) => {
    switch (action.type) {
        case "GOT_ARTICLES_DATA": {
            return fetchedData(state, action.data);
        }
        default:
            return state;
    }
};

export default articlesState;