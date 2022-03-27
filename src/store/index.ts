import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { rootEpic, rootReducer } from "@Store/modules/root";
import { EpicDependencies } from '@Interfaces/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const dependencies: EpicDependencies = {
  networkService: '',
};

const epicMiddleware = createEpicMiddleware({ dependencies });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
};

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };