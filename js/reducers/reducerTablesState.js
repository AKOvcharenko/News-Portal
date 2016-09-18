const defaultState = {activeLeague: 'Premier league'};

const fetchedData = (state, league, data) => {
    var result = Object.assign({}, state);
    if(data){
        data = JSON.parse(data).sort((first, second) => parseInt(first.points, 10) > parseInt(second.points, 10) ? -1 : 1);
        result[league] = data;
    }
    return result;
};

const changeActiveTable = (state, league) => {
    var result = Object.assign({}, state);
    result.activeLeague = league;
    return result;
};

const tablesState = (state = defaultState, action) => {

    switch (action.type) {
        case "GOT_TABLE_DATA": {
            return fetchedData(state, action.league, action.data);
        }
        case "CHANGE_TABLE_STATE": {
            return changeActiveTable(state, action.league);
        }

        default:
            return state;
    }
};

export default tablesState;