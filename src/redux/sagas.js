import { takeLatest, all, call, put } from 'redux-saga/effects'


function* fetchCatFacts() {
    try{
        const catFacts = yield call(makeAPIcall);
        yield put({type: "FETCH_CATFACTS_SUCCESS", payload: catFacts})
    } catch(error){
        yield put({type: "FETCH_CATFACTS_ERROR", error})
    }
    
}

export function* WatchFetchCatFacts() {
    yield takeLatest("FETCH_CATFACTS", fetchCatFacts);
}

function makeAPIcall() {
    return fetch('https://catfact.ninja/fact')
        .then(res => {return res.json()});
}

export default function* rootSaga() {
  yield all([
    WatchFetchCatFacts(),
    // add more sagas here if you have
  ]);
}


