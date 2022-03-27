import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { rootEpic, rootReducer } from "@Store/modules/root";
import { EpicDependencies } from '@Interfaces/index';
import NetworkAxiosService from '@Network/services/networkService';
import AuthenticateServiceImpl from '@Network/services/authServiceImpl';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const networkAxiosService: NetworkAxiosService = NetworkAxiosService.getInstance();
const authenticateServiceImpl = new AuthenticateServiceImpl(networkAxiosService);

const dependencies: EpicDependencies = {
  authenticateService: authenticateServiceImpl,
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
