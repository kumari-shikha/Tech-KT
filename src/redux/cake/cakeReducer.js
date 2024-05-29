const initState = {
    noOfCakes: 40,
    cakes: [
        {
            type: "eggless",
            flavor: "vanila",
            count: 5
        },
        {
            type: "egg",
            flavor: "redvelvet",
            count: 2
        },

        {
            type: "eggless",
            flavor: "choclate",
            count: 4
        },
        {
            type: "eggless",
            flavor: "butterscotch",
            count: 15
        },
        {
            type: "eggless",
            flavor: "pineapple",
            count: 4
        },
        {
            type: "egg",
            flavor: "butterscotch",
            count: 6
        },
        {
            type: "egg",
            flavor: "pineapple",
            count: 3
        },
        {
            type: "eggless",
            flavor: "trullfe",
            count: 1
        }
    ],
    catFacts: ""
}

const cakeReducer = (state = initState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1
            }
        case "FETCH_CATFACTS_SUCCESS":
            return {
                ...state,
                catFacts: action.payload
            }
        case "FETCH_CATFACTS_ERROR":
            return {
                ...state,
                catFacts: action.payload
            }
        default: return state;
    }
}

const buyCake = () => {
    return {
        type: "BUY_CAKE"
    }
}


export default cakeReducer;
export { buyCake }
