import AuthenticateService from '@Network/interfaces/authService';
interface EpicDependencies {
    authenticateService: AuthenticateService,
};

interface BaseRequestAction<T> {
    type: string,
    payload: T,
};

type PromiseResolve<T> = ((result: T) => void);
type PromiseReject<T> = ((reason: T) => void);

export type {
    BaseRequestAction,
    PromiseResolve,
    PromiseReject,
    EpicDependencies,
};
