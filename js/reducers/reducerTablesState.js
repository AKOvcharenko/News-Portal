
const fetchedData = (state, league, data) => {
    var result = Object.assign({}, state);
    result[league] = JSON.parse(data);
    return result;
};

const tablesState = (state = {}, action) => {

    switch (action.type) {
        case "GOT_TABLE_DATA": {
            return fetchedData(state, action.league, action.data);
        }
        default:
            return state;
    }
};

export default tablesState;