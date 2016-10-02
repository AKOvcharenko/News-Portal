const changeUrlInfo = (state, info) => {
    return info;
};

const activeState = (state = {}, action) => {
    switch (action.type){
        case "CHANGE_URL_INFO":
            return changeUrlInfo(state, action.info);
        default:
            return state;
    }
};

export default activeState;