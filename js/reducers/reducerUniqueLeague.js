const storeLeagues = (state, data) => {
    return data;
};

const leagueState = (state = [], action) => {
    switch (action.type) {
        case "UNIQUE_LEAGUE": {
            return storeLeagues(state, action.data);
        }
        default:
            return state;
    }
};

export default leagueState;