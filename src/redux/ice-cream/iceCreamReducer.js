const initState = {
    noOfIceCreams: 20
}

const iceCreamReducer = (state = initState, action) => {
    switch(action.type) {
        case "BUY_ICECREAMS":
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams-1
            }
        default: return state;
    }
}

export default iceCreamReducer;