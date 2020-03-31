import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, call, fork } from "redux-saga/effects";
import { LocaleReducer } from "./locale/locale-reducer";
import { LoggerSaga } from "./logger/logger-saga";

const saga = createSagaMiddleware();

export const store = createStore(combineReducers({
	LocaleReducer
}), applyMiddleware(saga));

saga.run(function* () {
	yield all([
		call(LoggerSaga),
		...[
		].map(fork)
	]);
});
