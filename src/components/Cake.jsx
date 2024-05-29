import { buyCake } from "../redux/cake/cakeReducer";
import { connect} from "react-redux";
import {egglessCakeSelector} from "../redux/cake/selector";

const CakeContainer = (props) => {
    return (
        <>
            <p>No of Cakes: {props.noOfCakes}</p>
            <button onClick={props.buyCake}>Buy Cake</button>
            <ul>
                {props.egglessCake.map((item, ind) => {
                    return (
                        <li key={ind}>{`${item.flavor} It's a ${item.type} cake`}</li>
                    )
                })}
            </ul> 
            <p>Here are some cute cat facts for you: Click below to get one </p>
            <button onClick={props.getCatFacts}>Get Cat Facts</button>
            <h3>{props.catFacts.fact}</h3>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfCakes: state.noOfCakes,
        cakes: state.cakes,
        egglessCake: egglessCakeSelector(state),
        catFacts: state.catFacts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        getCatFacts: () => dispatch({type: "FETCH_CATFACTS"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);