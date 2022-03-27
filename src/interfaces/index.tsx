import AuthenticateService from '@Network/interfaces/authService';
import HomeService from '@Network/interfaces/homeService';
interface EpicDependencies {
    authenticateService: AuthenticateService;
    homeService: HomeService;
};

interface BaseRequestAction<T> {
    type: string;
    payload: T;
};

type PromiseResolve<T> = ((result: T) => void);
type PromiseReject<T> = ((reason: T) => void);

export type {
    BaseRequestAction,
    PromiseResolve,
    PromiseReject,
    EpicDependencies,
};
