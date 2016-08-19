import {takeEvery} from "redux-saga";
import {call, put} from "redux-saga/effects";
import {STATUS_RETRIEVAL_INITIATED, STATUS_REQUEST, STATUS_RESPONSE} from "./actions.js";

export default function* sagas() {
    yield* takeEvery(STATUS_REQUEST, retrieveStatuses);
}

export function* retrieveStatuses(action) {
/*    yield call(StatusService.getStatuses, bundleRequestCreator(action.data));

    yield put({type: STATUS_RESPONSE, data: {
        success: true,
        errors: [],
        timeStamp: new Date().toTimeString()
    }});*/
}