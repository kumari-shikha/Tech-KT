import { createSelector } from 'reselect';

const selectNoOfCakes = (state) => {
    return state.noOfCakes
}

const selectCakes = state => {
    return state.cakes
}

const egglessCakeSelector = createSelector(
    selectCakes, (cakes) => {
        console.log("Memoize selector ran")
        return cakes.filter(cake => cake.type==="eggless")
    })

export {egglessCakeSelector}